import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Serif_Devanagari, Cinzel, Lato, Great_Vibes, Noto_Sans_Kannada, Noto_Sans_Telugu } from "next/font/google";
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

// Lato/Playfair/Cinzel have no Kannada/Telugu glyphs. Used only on /kn and /te
// (via .lang-kn / .lang-te in globals.css); preload off so English pages don't fetch them.
const notoKannada = Noto_Sans_Kannada({
  subsets: ["kannada", "latin"],
  variable: "--font-noto-kannada",
  display: "swap",
  preload: false,
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu", "latin"],
  variable: "--font-noto-telugu",
  display: "swap",
  preload: false,
});

// Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in Vercel to switch GA4 on.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        className={`${cinzel.variable} ${playfair.variable} ${lato.variable} ${greatVibes.variable} ${notoKannada.variable} ${notoTelugu.variable} antialiased bg-cream text-charcoal font-sans`}
      >
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Ads base tag. The same gtag.js also feeds GA4 when
            NEXT_PUBLIC_GA_ID is set in the Vercel environment variables. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-402638274" strategy="afterInteractive" />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-402638274');
            ${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
          `}
        </Script>
      </body>
    </html>
  );
}
