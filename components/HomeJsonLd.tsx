export default function HomeJsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Gokarna Temples",
        "url": "https://www.gokarnatemples.com",
        "logo": "https://www.gokarnatemples.com/logo.png",
        "description": "Independent Vedic ritual service offering authentic Narayana Bali, Pitru Dosha, and Nag Bali poojas in Gokarna, Karnataka.",
        "sameAs": [
            "https://www.facebook.com/gokarnatemples",
            "https://www.instagram.com/gokarnatemples",
            "https://www.youtube.com/@gokarnatemples"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+91-96638-28936",
            "email": "contact@gokarnatemples.com"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Car Street, Near Mahabaleshwar Temple",
            "addressLocality": "Gokarna, Kumta Taluk",
            "addressRegion": "Uttara Kannada District, Karnataka",
            "postalCode": "581326",
            "addressCountry": "IN"
        },
        "founder": {
            "@type": "Person",
            "name": "Balachandra Prasad",
            "jobTitle": "Vedic Ritual Expert",
            "description": "20+ years of experience in performing authentic Vedic rituals including Narayana Bali, Pitru Dosha, and Nag Bali"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Gokarna Temples - Vedic Rituals",
        "image": "https://www.gokarnatemples.com/image.jpg",
        "url": "https://www.gokarnatemples.com",
        "telephone": "+91-96638-28936",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Car Street, Near Mahabaleshwar Temple",
            "addressLocality": "Gokarna",
            "addressRegion": "Karnataka",
            "postalCode": "581326",
            "addressCountry": "IN"
        },
        "priceRange": "₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "22:00"
        }
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Balachandra Prasad",
        "jobTitle": "Vedic Ritual Priest & Expert",
        "description": "Expert Vedic priest with 20+ years of experience performing authentic Narayana Bali, Pitru Dosha Nivarana, and Nag",
        "url": "https://www.gokarnatemples.com",
        "image": "https://www.gokarnatemples.com/guruji-photo.jpg",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+91-96638-28936"
        },
        "affiliation": "Gokarna Temples",
        "knowsAbout": ["Narayana Bali Pooja", "Pitru Dosha Nivarana", "Nag Bali Sarpa Dosha", "Vedic Rituals", "Ancestral Karma"],
        "worksLocation": {
            "@type": "Place",
            "name": "Gokarna, Karnataka"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
        </>
    );
}
