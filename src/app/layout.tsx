import type { Metadata } from "next";
/* we can just import Roboto from here */
import { Roboto } from "next/font/google";
import "./globals.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Shop demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-900 text-gray-100 ${roboto.className}`}
      >
        <div className={`flex min-h-screen flex-col items-start`}>
          {" "}
          {/* Container */}
          <header className="max-w-1180 w-full p-[2rem] ">
            <Link href={"/"}>
              <Image src={logo} alt="logo" quality={50} />
            </Link>
          </header>
          {children}
        </div>
        {/* Container */}
      </body>
    </html>
  );
}
