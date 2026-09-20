"use client";

import { useState } from "react";
import Button from "../buttons";
import { oswald, inter } from "../../fonts/fonts";
import TixCard from "../tixcard";

const navLinks = [
  { name: "LINEUP", href: "/lineup" },
  { name: "ABOUT US", href: "/about" },
];

export default function Header() {
  const [isTixOpen, setIsTixOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`${oswald.className} px-6 sticky top-0 z-50 flex flex-col w-full bg-off-white cursor-default`}
      >
        <div className="flex flex-row justify-between items-center h-20">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
            <a className="cursor-default" href="/">
              CONCRETE&FEEDBACK
            </a>
          </h1>

          {/* Desktop nav — hidden below lg */}
          <div className="hidden lg:flex flex-row gap-12 items-center">
            <div className="flex flex-row gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="cursor-default font-medium text-black no-underline hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button
              className="cursor-default bg-black text-off-white hover:bg-gray-800"
              onClick={() => setIsTixOpen(true)}
            >
              TIX
            </Button>
          </div>

          {/* Hamburger — only shown below lg */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-default font-medium text-black no-underline hover:underline text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="cursor-default bg-black text-off-white hover:bg-gray-800 w-full"
              onClick={() => {
                setIsMenuOpen(false);
                setIsTixOpen(true);
              }}
            >
              TIX
            </Button>
          </div>
        )}
      </header>

      <TixCard isOpen={isTixOpen} onClose={() => setIsTixOpen(false)} />
    </>
  );
}
