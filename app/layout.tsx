import type { Metadata } from "next";
import { oswald, inter } from "./fonts/fonts";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
