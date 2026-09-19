"use client";

import { useState } from "react";
import Button from "../buttons";
import { oswald, inter } from "../../fonts/fonts";
import TixCard from "../tixcard";

const navLinks = [
  { name: "LINEUP", href: "/lineup" },
  { name: "ABOUT US", href: "/about" },
]

export default function Header() {
  const [isTixOpen, setIsTixOpen] = useState(false);

  return(
    <header className={`${oswald.className} px-6 sticky top-0 z-50 justify-between items-center flex flex-row w-full h-20 bg-off-white cursor-default`}>

      <div>
        <h1 className="text-2xl font-bold">
          <a className="cursor-default" href="/">
            CONCRETE&FEEDBACK
          </a>
        </h1>
      </div>

      <div className="flex flex-row gap-12 items-center">
        <div className='flex flex-row gap-6'>
          {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`cursor-default font-medium text-black no-underline hover:underline`}
          >
            {link.name}
          </a>
          ))}
        </div>
        <Button className="cursor-default bg-black text-off-white hover:bg-gray-800">TIX</Button>
      </div>
      <TixCard isOpen={isTixOpen} onClose={() => setIsTixOpen(false)} />
    </header>
    
  );
}