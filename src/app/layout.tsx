import type { Metadata } from "next";
import { Navbar } from "../components/navbar";
import { Footer } from "@/components/footer";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gtLibreBaskerville = localFont({
  src: "./fonts/LibreBaskerville-Regular.ttf",
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Clear Energy Partners",
  description: "Expertise in solar decommissioning and recycling solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gtLibreBaskerville.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
