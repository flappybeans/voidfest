import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const COUNTER_KEY = "void-fest:ticket-counter";
const CODE_PADDING = 5; // 00001, 00002, ...

interface PurchaseBody {
  name: string;
  email: string;
  quantity: number;
  payment: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: PurchaseBody = await req.json();
    const { name, email, quantity, payment } = body;

    if (!name || !email || !quantity || quantity < 1) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    // Atomically reserve `quantity` sequential numbers.
    // If quantity is 3 and this returns 8, the reserved
    // numbers are 6, 7, 8.
    const lastNumber = await redis.incrby(COUNTER_KEY, quantity);
    const firstNumber = lastNumber - quantity + 1;

    const codes: string[] = [];
    for (let n = firstNumber; n <= lastNumber; n++) {
      codes.push(`VF-${String(n).padStart(CODE_PADDING, "0")}`);
    }

    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;

    await resend.emails.send({
      from: "VOID FEST <onboarding@resend.dev>", // swap once your domain is verified in Resend
      to: email,
      subject: `Your VOID FEST tickets (${codes.length}x)`,
      html: `
        <div style="font-family: sans-serif; padding: 24px;">
          <h1 style="margin-bottom: 4px;">†VOID FEST𐕣</h1>
          <p style="color: #555;">Order ${orderId} confirmed for ${name}</p>
          <p style="color: #555;">Payment method: ${payment}</p>
          <hr style="margin: 16px 0;" />
          <p><strong>Show these codes at the gate:</strong></p>
          <ul style="font-size: 18px; line-height: 1.8;">
            ${codes.map((c) => `<li><strong>${c}</strong></li>`).join("")}
          </ul>
        </div>
      `,
    });

    return NextResponse.json({ orderId, codes });
  } catch (err) {
    console.error("Ticket purchase error:", err);
    return NextResponse.json(
      { error: "Something went wrong processing your order" },
      { status: 500 }
    );
  }
}