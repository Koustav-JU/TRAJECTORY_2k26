import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import MouseFlare from "@/components/MouseFlare";
import { Toaster } from "react-hot-toast";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trajectory 2k26",
  description: "Mechanical Revolution Fest",
  icons: {
    icon: "logo.webp/",
  },
};

import EntryGate from "@/components/EntryGate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0B0F1A]`}
      >
        <EntryGate>
          <SmoothScroll>
            <MouseFlare />
            <Navbar />
            {children}
            <Toaster position="top-center" />
          </SmoothScroll>
        </EntryGate>
      </body>
    </html>
  );
}
