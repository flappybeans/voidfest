import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = "nimblebeans@gmail.com";

interface HireBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: HireBody = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "VOID FEST <onboarding@resend.dev>", // swap once your domain is verified in Resend
      to: DESTINATION_EMAIL,
      replyTo: email, // hitting "reply" in your inbox goes straight to them
      subject: `New HIRE US inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px;">
          <h2>New inquiry via concrete&feedback</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Hire inquiry error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}