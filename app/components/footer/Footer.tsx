const social = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    img: "/facebook.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    img: "/twitter.png",  
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    img: "/instagram-logo.png",
  }
]

export default function Footer() {
  return(
    <footer>
      <div className="p-6 flex flex-row gap-6 justify-center items-center">
        {social.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 cursor-default"
          >
            <img className="h-6" src={platform.img} alt={platform.name} />
          </a>
        ))}
      </div>
    </footer>
  );
}