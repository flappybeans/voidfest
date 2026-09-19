"use client";

import { oswald, inter } from "../../fonts/fonts";
import Button from "../buttons";

interface HireCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireCard({ isOpen, onClose }: HireCardProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-6"
      onClick={onClose}
    >
      <div
        className="bg-off-white p-8 max-w-md w-full flex flex-col gap-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

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
          action="mailto:nimblebeans@gmail.com"
          method="POST"
          encType="text/plain"
          className={`${inter.className} flex flex-col gap-4`}
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            className="cursor-default border border-black px-3 py-2 bg-off-white text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="cursor-default border border-black px-3 py-2 bg-off-white text-sm"
          />
          <textarea
            name="message"
            placeholder="what's the idea?"
            required
            rows={4}
            className="cursor-default border border-black px-3 py-2 bg-off-white text-sm resize-none"
          />

          <Button
            size="md"
            type="submit"
            className="bg-black text-off-white hover:bg-gray-800"
          >
            SEND
          </Button>
        </form>
      </div>
    </div>
  );
}
