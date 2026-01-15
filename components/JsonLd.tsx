export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HinduTemple",
        "name": "Gokarna Temples - Vedic Puja Services",
        "image": "https://gokarnatemples.com/images/gokarna-temples.png",
        "description": "Authentic Vedic Pujas in Gokarna for Pitru Dosha, Narayana Bali, and Ancestral Peace performed by expert hereditary priests.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gokarna, Kumta Taluk",
            "addressRegion": "Uttara Kannada District, Karnataka",
            "postalCode": "581326",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.5517,
            "longitude": 74.7449
        },
        "telephone": "+919663828936",
        "url": "https://gokarnatemples.com",
        "priceRange": "₹₹",
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
            "closes": "21:00"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "name": "Narayana Bali Puja",
                "description": "Moksha Narayanabali Puja for ancestral peace.",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR"
            },
            {
                "@type": "Offer",
                "name": "Pitru Dosha Nivarana",
                "description": "Removal of ancestral curses and doshas.",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR"
            },
            {
                "@type": "Offer",
                "name": "Tripindi Shradh",
                "description": "Pinda Daan rituals for 3 generations.",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR"
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
