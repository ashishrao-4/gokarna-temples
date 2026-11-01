import type { Metadata, Viewport } from "next";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import SiteDocument from "@/components/SiteDocument";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="te">{children}</SiteDocument>;
}
