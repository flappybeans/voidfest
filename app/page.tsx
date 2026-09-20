"use client";

import { useState } from "react";
import Button from "./components/buttons";
import { oswald, inter } from "./fonts/fonts";
import Header from "./components/header";
import Footer from "./components/footer";
import TixCard from "./components/tixcard";

const eventInfo = {
  nameLine1: "†VOID",
  nameLine2: "FEST𐕣",
  tagline: "SKATE JAM + HARDCORE GIG",
  date: "OCT 31, 2026",
  time: "5:00 PM",
  location: "JUNKIES GROUNDS, QUEEN ST, BROOKLYN BANKS",
  details: "SKATEJAM / MERCH / WEED / MUSIC",
};

export default function Home() {
  const [isTixOpen, setIsTixOpen] = useState(false);

  return (
    <div className="px-6 flex flex-col w-full h-full bg-off-white">
      <div className="cursor-default flex flex-col gap-24">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 py-10 lg:py-0">
          <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-auto text-center lg:text-left items-center lg:items-start">
            <div>
              <h1
                className={`${oswald.className} font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none`}
              >
                {eventInfo.nameLine1} <br /> {eventInfo.nameLine2}
              </h1>
              <p
                className={`${oswald.className} text-black text-lg sm:text-xl lg:text-2xl leading-relaxed mt-2`}
              >
                {eventInfo.tagline}
              </p>
            </div>

            <div
              className={`${inter.className} text-black text-sm sm:text-base lg:text-lg leading-relaxed`}
            >
              <p>{eventInfo.date}</p>
              <p>{eventInfo.time}</p>
              <p>{eventInfo.location}</p>
              <p>{eventInfo.details}</p>
            </div>

            <div>
              <Button
                size="lg"
                onClick={() => setIsTixOpen(true)}
                className="bg-black text-off-white hover:bg-gray-800"
              >
                GET TIX
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="/hero-event-page.jpg"
              alt="skater"
              className="w-full h-64 sm:h-96 md:h-125 lg:h-175 object-cover"
            />
          </div>
        </section>
      </div>

      <TixCard isOpen={isTixOpen} onClose={() => setIsTixOpen(false)} />
    </div>
  );
}
