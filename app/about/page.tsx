"use client";

import { useState } from "react";
import { oswald, inter } from "../fonts/fonts";
import Button from "../components/buttons";
import HireCard from "../components/hirecard/HireCard";

export default function About() {
  const [isHireOpen, setIsHireOpen] = useState(false);

  return (
    <div className="cursor-default px-6 pb-5 w-full h-full bg-off-white">
      <section className="flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/hero-info.webp"
            alt="skater"
            className="w-full h-75 object-cover"
          />

          <p className={`${inter.className} text-xs`}>
            <i>
              <span className={`${oswald.className} font-bold`}>
                CONCRETE&FEEDBACK
              </span>{" "}
              circa 1999
            </i>
          </p>
        </div>

        <div className="max-w-3xl pb-5">
          <p
            className={`${inter.className} text-sm md:text-base leading-7 md:leading-8`}
          >
            concrete&feedback started from a band.
            <br />
            <br />

            <span className={`${oswald.className} font-bold text-lg`}>SlipKnot.</span>
            <br />
            <br />

            before any of this, there was skating. and weed. just good times,
            fucking around with friends, skating until we were tired, finding
            somewhere to sit, and listening to whatever was playing at the
            time. we didn't really have a plan. we were just young and having
            a good time.
            <br />
            <br />

            then came the band.
            <br />
            <br />

            as we started getting closer to the hardcore community and the
            underground, we started meeting more people. more bands, more
            skaters, more artists, more people who were doing their own thing
            without waiting for somebody to give them permission.
            <br />
            <br />

            that's when we started thinking about it differently.
            <br />
            <br />

            we realized there was something here.
            <br />
            <br />

            there are so many small bands that are genuinely good but never get
            the chance to play in front of more people. there are skaters who
            have nowhere to compete or just want somewhere to skate with other
            people. there are artists and crews doing their own thing without
            much attention outside their circle.
            <br />
            <br />

            we wanted to change that, even if it was just a little bit.
            <br />
            <br />

            concrete&feedback became our way of bringing all of that together.
            <br />
            <br />

            music, skating, friends, venues, and the people who keep the
            underground alive.
            <br />
            <br />

            we don't want to make everything feel corporate or overly
            organized. we like the imperfect parts. the packed rooms. the
            shitty speakers. the scraped knees. the bands playing in places
            that probably weren't meant for bands. people discovering a group
            they've never heard before and leaving with their shirt covered in
            sweat.
            <br />
            <br />

            that's the kind of stuff we remember.
            <br />
            <br />

            and that's what we want to create for other people.
            <br />
            <br />

            we want small bands to have a place where they can be heard. we
            want skaters to have somewhere to show what they can do. we want
            people to find communities they didn't know existed.
            <br />
            <br />

            maybe it starts with one show.
            <br />
            <br />

            maybe it turns into something bigger.
            <br />
            <br />

            either way, we're here to put something on.
            <br />
            <br />

            if you have a band, a skate crew, a venue, or just an idea you've
            been sitting on for a while, talk to us.
            <br />
            <br />

            we'll figure something out.
          </p>
        </div>

        <div>
          <Button
            size="lg"
            onClick={() => setIsHireOpen(true)}
            className="bg-black text-off-white hover:bg-gray-800"
          >
            HIRE US
          </Button>
        </div>
      </section>

      <HireCard isOpen={isHireOpen} onClose={() => setIsHireOpen(false)} />
    </div>
  );
}