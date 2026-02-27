import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reborn Club | Indore's Legacy",
  description: "Bringing back the traditional street games of Indore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-20"> {children}</div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
