import bandimg from "../../../public/hero-band.jpg";
import { oswald } from "../../fonts/fonts";

interface BandInfoCardProps {
  name: string;
  time: string;
  genre: string;
}

export default function BandInfoCard({
  name,
  time,
  genre,
}: BandInfoCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 w-full max-w-sm">
      <img
        src={bandimg.src}
        alt="Band Image"
        className="w-full sm:w-40 lg:w-56 h-48 sm:h-auto object-cover object-center"
      />
      <div
        className={`${oswald.className} flex flex-col items-start gap-2`}
      >
        <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
        <p className="text-sm">Time: {time}</p>
        <p className="text-sm">Genre: {genre}</p>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 cursor-default"
        >
          <img className="h-6" src="/spotify-512.png" alt="Spotify" />
        </a>
      </div>
    </div>
  );
}
