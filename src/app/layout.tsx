// Default layout for all pages
import type { Metadata } from "next";
import { Libre_Baskerville, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

// Defining and Importing Google Fonts
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet Me: Nautica Harvin",
  description: "Shoot for the moon...",
};

// Creating overall layout for all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
