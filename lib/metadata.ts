import { Metadata, Viewport } from "next";

// Canonical host: the live site is served on www (non-www 307s to it).
// No trailing slash (next.config.ts leaves trailingSlash unset).
export const SITE_URL = "https://www.gokarnatemples.com";
export const OG_IMAGE = "/images/og-gokarna-koti-tirtha.jpg";

export const siteMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Gokarna Temples | Authentic Narayana Bali & Pitru Dosha Pujas",
        template: "%s | Gokarna Temples",
    },
    description:
        "Book authentic Narayana Bali, Pitru Dosha Nivarana, and Tripindi Shradh Pujas in Gokarna. Performed by expert Vedic priests for ancestral peace and moksha. Call +91 96638 28936.",
    keywords: [
        "Narayana Bali Puja Gokarna",
        "Pitru Dosha Nivarana Gokarna",
        "Tripindi Shradh Puja Gokarna",
        "Gokarna Temple Priests",
        "Moksha Narayana Bali",
        "Ancestral Puja Gokarna",
        "Narayana Bali Cost Gokarna",
        "Gokarna Puja Online Booking",
        "Mahabaleshwar Kshetra Puja Gokarna",
        "Pind Daan Gokarna",
        "Vedic Rituals Gokarna",
        "Gokarna Kshetra Purohit",
        "Narayana Nagbali Gokarna",
        "Pitru Paksha Puja Gokarna",
    ],
    authors: [{ name: "Gokarna Vedic Priests" }],
    creator: "Gokarna Temples",
    publisher: "Gokarna Temples",
    formatDetection: {
        email: false,
        address: false,
        telephone: true,
    },
    openGraph: {
        title: "Gokarna Temples | Authentic Ancestral Pujas",
        description:
            "Perform authentic Narayana Bali and Pitru Dosha Pujas in the holy grounds of Gokarna. Consult expert priests directly.",
        url: "/",
        siteName: "Gokarna Temples",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: OG_IMAGE,
                width: 1080,
                height: 609,
                alt: "Koti Tirtha, Gokarna",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
    // Google Search Console HTML-tag verification. Public by design (it ships in
    // the page HTML); NEXT_PUBLIC_GSC_VERIFICATION can override it.
    verification: {
        google:
            process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
            "LZ-IO9tzm8fihhA9-9WpUvUjMRly-VDZJTOUGJjiDTQ",
    },
};

export const siteViewport: Viewport = {
    themeColor: "#FF9933",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};
