import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Serif_Devanagari, Cinzel, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased bg-cream text-charcoal font-sans`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
