import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientI18nProvider from "@/components/providers/ClientI18nProvider";

const ppMori = localFont({
  src: [
    {
      path: "./PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PPMori-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./PPMori-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./PPMori-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./PPMori-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-pp-mori",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Election Tracker",
  description: "Nigeria Elections Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppMori.variable} bg-[#F7F7F7] ${geistMono.variable} antialiased`}
      >
        <ClientI18nProvider>{children}</ClientI18nProvider>
      </body>
    </html>
  );
}
