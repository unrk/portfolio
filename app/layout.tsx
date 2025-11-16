import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felix Portfolio",
  description: "Photographer, adventurer, designer & developer",
  openGraph: {
    title: "Felix Portfolio",
    description: "Photographer, adventurer, designer & developer",
    url: "https://memoir.lol",
    siteName: "Felix Portfolio",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Felix Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Portfolio",
    description: "Photographer, adventurer, designer & developer",
    images: ["/metadata.png"],
  },
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
        {children}
      </body>
    </html>
  );
}
