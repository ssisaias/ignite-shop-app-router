import type { Metadata } from "next";
/* we can just import Roboto from here */
import { Roboto } from "next/font/google";
import "./globals.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + " bg-gray-900 text-gray-100"}>
        <div className="flex flex-col items-start min-h-screen"> {/* Container */}
          <header className="p-[2rem] w-full max-w-1180 ">
            <Image src={logo} alt="logo" quality={50} />
          </header>
          {children}
        </div>{/* Container */}
        
      </body>
    </html>
  );
}
