import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const noto = Noto_Serif_Devanagari({ 
  subsets: ["devanagari", "latin"], 
  variable: "--font-noto", 
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gokarna Temples | Ancestral Peace & Pooja Services",
  description: "Experience divine relief from ancestral suffering. Book authentic pujas at Gokarna Temples. Direct contact with Guruji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${noto.variable} antialiased bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
