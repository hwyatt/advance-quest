import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EMAIL, PHONE, PHONE_LINK } from "./constants";

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
        <div className="bg-gray-100 w-full flex items-center justify-center p-8 border-b-2 border-gray-200 shadow-lg md:mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={140}
            style={{ objectFit: "contain" }}
          />
        </div>
        {children}
        <footer className="flex bg-primary text-white p-12 mt-16">
          <div className="px-4 md:px-8 m-auto md:max-w-[1280px] flex flex-col justify-center gap-2">
            <span className="font-medium text-lg text-center">Contact Us</span>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <Link
                href={`mailto:${EMAIL}`}
                className="text-center md:text-start"
              >
                {EMAIL}
              </Link>
              <span className="hidden md:block">|</span>
              <Link href={PHONE_LINK} className="text-center md:text-start">
                {PHONE}
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
