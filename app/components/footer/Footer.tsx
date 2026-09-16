export default function Footer() {
  return(
    <footer>
      <div className="p-6 flex flex-row gap-6 justify-center items-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="h-6" src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="h-6" src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="h-6" src="/instagram-logo.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}