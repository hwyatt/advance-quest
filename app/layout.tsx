import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EMAIL, PHONE } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advance Quest LLC",
  description: "Momentum begins with a purposeful step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full">
          <Image
            src="/background.jpg"
            fill
            alt="background"
            style={{ objectFit: "cover" }}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center gap-8 md:gap-16 px-4 md:px-8 py-8 md:py-16 text-white text-center">
            <div className="bg-white p-4 rounded-xl">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={140}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-2xl font-medium max-w-prose">
              Momentum begins with a purposeful step
            </h1>
          </div>
        </div>
        {children}
        <footer className="flex bg-primary text-white p-8">
          <div className="px-4 md:px-8 m-auto md:max-w-[1280px] flex flex-col justify-center gap-2">
            <span className="font-medium text-lg text-center">Contact Us</span>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <Link
                href="mailto:drew_palser@hotmail.com"
                className="text-center md:text-start"
              >
                {EMAIL}
              </Link>
              <span className="hidden md:block">|</span>
              <Link
                href="tel:205-577-6926"
                className="text-center md:text-start"
              >
                {PHONE}
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
