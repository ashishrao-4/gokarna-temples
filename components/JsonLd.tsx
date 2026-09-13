import { OG_IMAGE, SITE_URL } from "@/lib/metadata";

// Site-wide business entity. Independent priest service, NOT a temple -> ProfessionalService.
// No aggregateRating/review: add only once real Google Business Profile reviews exist and are kept in sync.
export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        "name": "Gokarna Temples - Vedic Puja Services",
        "image": `${SITE_URL}${OG_IMAGE}`,
        "logo": `${SITE_URL}/images/gokarna-temples-logo.png`,
        "description": "Independent Vedic priest service in Gokarna performing Narayana Bali, Pitru Dosha Nivarana, Nag Bali and Tripindi Shradh rituals for ancestral peace.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Car Street, Near Mahabaleshwar Temple",
            "addressLocality": "Gokarna",
            "addressRegion": "KA",
            "postalCode": "581326",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.5452037,
            "longitude": 74.3184742
        },
        "areaServed": "Gokarna, Karnataka",
        "telephone": "+919663828936",
        "url": SITE_URL,
        "priceRange": "Contact for quote",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "06:00",
            "closes": "23:59"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Narayana Bali Puja", "url": `${SITE_URL}/narayana-bali-pooja-gokarna` }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Pitru Dosha Nivarana", "url": `${SITE_URL}/pitru-dosha-pooja-gokarna` }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Nag Bali / Sarpa Dosha Puja", "url": `${SITE_URL}/nag-bali-sarpa-dosha-gokarna` }
            },
            {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Tripindi Shradh" }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
