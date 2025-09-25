import "./globals.css";
import ProfileCard from "./components/profilecard";
import Navbar from "./components/navbar";
import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular + Bold
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.className} flex min-h-screen bg-[#1D1C1D] text-white`}
      >
        {/* Left Profile */}
        <aside>
          <ProfileCard />
        </aside>

        {/* Right Content with Nav */}
        <main className="flex-1 flex">
          <div className="flex-1 p-6">{children}</div>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
