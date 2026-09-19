"use client";

import { useState } from "react";
import { oswald, inter } from "../../fonts/fonts";
import Button from "../buttons";

interface HireCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireCard({ isOpen, onClose }: HireCardProps) {
  const [step, setStep] = useState<"form" | "sent">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setStep("form");
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/hire-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStep("sent");
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Try again, or email us directly at nimblebeans@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-6"
      onClick={handleClose}
    >
      <div
        className="bg-off-white p-8 max-w-md w-full flex flex-col gap-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {step === "form" ? (
          <>
            <h2 className={`${oswald.className} font-bold text-4xl`}>HIRE US</h2>

            <p className={`${inter.className} text-sm leading-relaxed`}>
              got a band, a skate crew, a venue, or an idea you&apos;ve been
              sitting on? tell us about it.
              <br />
              <span className={`${inter.className} text-sm leading-relaxed`}>
                or mail us directly at nimblebeans@gmail.com
              </span>
            </p>

            <form
              onSubmit={handleSubmit}
              className={`${inter.className} flex flex-col gap-4`}
            >
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="cursor-default border border-black px-3 py-2 bg-off-white text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cursor-default border border-black px-3 py-2 bg-off-white text-sm"
              />
              <textarea
                name="message"
                placeholder="what's the idea?"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="cursor-default border border-black px-3 py-2 bg-off-white text-sm resize-none"
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <Button
                size="md"
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-off-white hover:bg-gray-800 disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <h2 className={`${oswald.className} font-bold text-4xl`}>SENT</h2>

            <p className={`${inter.className} text-sm leading-relaxed`}>
              got it. we&apos;ll get back to you at {email} soon.
            </p>

            <Button
              size="md"
              onClick={handleClose}
              className="bg-black text-off-white hover:bg-gray-800"
            >
              DONE
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
