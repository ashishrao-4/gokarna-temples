import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Serif_Devanagari, Cinzel, Lato, Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased bg-cream text-charcoal font-sans`}
      >
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Ads Base Tag */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-402638274" strategy="afterInteractive" />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-402638274');
          `}
        </Script>
      </body>
    </html>
  );
}
