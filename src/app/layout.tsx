import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import { ScrollProvider } from "../contexts/ScrollContext";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
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

const getLibreBaskerville = localFont({
  src: "./fonts/LibreBaskerville-Regular.ttf",
  variable: "--font-libre-baskerville",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JVNWSV0Z01"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JVNWSV0Z01');
            `,
          }}
        />
        <Script
          id="ahrefs-analytics"
          strategy="afterInteractive"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="BouO+mwgg7hHu4pDHDgZZQ"
          async
        />
      </head>
      <ScrollProvider>
        <body
          className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${getLibreBaskerville.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
          <Analytics />
          <SpeedInsights />
        </body>
      </ScrollProvider>
    </html>
  );
}
