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
  return(
    <div className="flex flex-row justify-start items-top gap-4 max-w-sm min-h-45">
      <div className="flex flex-row justify-start items-top gap-4">
        <img src={bandimg.src} alt="Band Image" className="w-65 h-auto"/>
      <div className={`${oswald.className} flex flex-col justify-start items-start gap-2 min-w-45`}>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">Time: {time}</p>
        <p className="text-sm">Genre: {genre}</p>
        <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 cursor-default"
          >
            <img className="h-6" src="./spotify-512.png" alt="Spotify" />
          </a>
      </div>
      </div>
    </div>
  );
}