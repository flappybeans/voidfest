import { oswald, inter } from "../fonts/fonts";
import BandInfoCard from "../components/bandinfocard/BandInfoCard";

const bands = [
  {
    name: "Title Fight",
    time: "18:00",
    genre: "Hardcore Punk",
  },
  {
    name: "Fugazi",
    time: "19:00",
    genre: "Post-Hardcore",
  },
  {
    name: "Glassjaw",
    time: "20:00",
    genre: "Alternative Metal",
  },
  {
    name: "Thursday",
    time: "22:00",
    genre: "Emo",
  },
  {
    name: "At the Drive-In",
    time: "23:00",
    genre: "Experimental Rock",
  },
  {
    name: "Alexisonfire",
    time: "00:00",
    genre: "Melodic Hardcore",
  },
  {
    name: "Underoath",
    time: "02:00",
    genre: "Metalcore",
  },
  {
    name: "Silverstein",
    time: "03:00",
    genre: "Emo Post-Hardcore",
  },
  {
    name: "Dance Gavin Dance",
    time: "04:00",
    genre: "Post-Hardcore / Math Rock",
  },
  {
    name: "Pierce the Veil",
    time: "05:00",
    genre: "Alternative Rock",
  },
];

const lineupSections = [
  { label: "GAME OF SKATE", bands: bands.slice(0, 3) },
  { label: "BEST OF TRICK", bands: bands.slice(3, 6) },
  { label: "SKATE JAM", bands: bands.slice(6, 9) },
];

export default function LineupPage() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-6">
      <h1 className={`${oswald.className} font-bold text-3xl sm:text-4xl`}>
        LINEUP
      </h1>

      {lineupSections.map((section) => (
        <div
          key={section.label}
          className="flex flex-col items-center gap-6 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl place-items-center sm:place-items-start">
            {section.bands.map((band) => (
              <BandInfoCard
                key={band.name}
                name={band.name}
                time={band.time}
                genre={band.genre}
              />
            ))}
          </div>

          <div className="min-w-full py-4 px-4 bg-black flex justify-center items-center">
            <h1
              className={`${oswald.className} text-off-white font-bold text-xl sm:text-2xl md:text-4xl text-center`}
            >
              {section.label}
            </h1>
          </div>
        </div>
      ))}

      <h1 className={`${oswald.className} font-bold text-3xl sm:text-4xl`}>
        ENCORE
      </h1>

      <div className="flex justify-center w-full">
        {bands.slice(9, 10).map((band) => (
          <BandInfoCard
            key={band.name}
            name={band.name}
            time={band.time}
            genre={band.genre}
          />
        ))}
      </div>
    </section>
  );
}
