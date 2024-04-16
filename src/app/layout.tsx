import type { Metadata } from "next";
/* we can just import Roboto from here */
import { Roboto } from "next/font/google";
import "./globals.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CartContextProvider } from "@/contexts/CartContext";
import { BotaoSacola } from "@/components/botaoSacola";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shop demo - github.com/ssisaias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartContextProvider>
      <html lang="en">
        <body className={`bg-gray-900 text-gray-100 ${roboto.className}`}>
          <div className={`flex min-h-screen flex-col items-start`}>
            {" "}
            {/* Container */}
            <header className="max-w-1180 w-full p-[2rem]  flex justify-between items-center">
              <Link href={"/"}>
                <Image src={logo} alt="logo" quality={50} />
              </Link>
              <BotaoSacola />
            </header>
            {children}
          </div>
          {/* <CartOverlay />  */}
        </body>
      </html>
    </CartContextProvider>
  );
}
