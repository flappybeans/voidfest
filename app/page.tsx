import Image from "next/image";
import Button from "./components/buttons";
import { oswald, inter } from "./fonts/fonts";
import Header from "./components/header";
import Footer from "./components/footer";

const eventInfo = {
  nameLine1: "†VOID",
  nameLine2: "FEST𐕣",
  tagline: "SKATE JAM + POST-HARDCORE GIG",
  date: "OCT 31, 2026",
  time: "5:00 PM",
  location: "JUNKIES GROUNDS, QUEEN ST, BROOKLYN BANKS",
  details: "SKATEJAM/MERCH/WEED/MUSIC",
};

export default function Home() {
  return (
    <div className="px-6 flex flex-col w-full h-full bg-off-white">
      <div className="cursor-default flex flex-col gap-24">
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-12">

          <div>
            <h1 className={`${oswald.className} font-bold text-9xl leading-none`}>
              {eventInfo.nameLine1}
            </h1>
            <h1 className={`${oswald.className} font-bold text-9xl leading-none`}>
              {eventInfo.nameLine2}
            </h1>
            <p className={`${oswald.className} text-black text-2xl leading-relaxed`}>
              {eventInfo.tagline}
            </p>
          </div>

          <div className={`${inter.className} text-black text-lg leading-relaxed mt-4`}>
            <p>{eventInfo.date}</p>
            <p>{eventInfo.time}</p>
            <p>{eventInfo.location}</p>
            <p>{eventInfo.details}</p>
          </div>
          
          <div>
            <Button size="lg" className="cursor-default bg-black text-off-white hover:bg-gray-800">GET TIX</Button>
          </div>

        </div>

        <div className="w-1/2">
          <img
            src="/hero-event-page.jpg"
            alt="skater"
            className="w-full h-[700px] object-cover"
          />
        </div>

      </section>
      </div>
    </div>
  );
}
