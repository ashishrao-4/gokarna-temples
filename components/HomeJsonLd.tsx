import { SITE_URL } from "@/lib/metadata";
import { homeFaqs } from "@/lib/faqs";

// The business entity (ProfessionalService) lives site-wide in JsonLd.tsx; don't duplicate it here.
export default function HomeJsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Gokarna Temples",
        "url": SITE_URL,
        "logo": `${SITE_URL}/images/gokarna-temples-logo.png`,
        "description": "Independent Vedic ritual service offering authentic Narayana Bali, Pitru Dosha, and Nag Bali poojas in Gokarna, Karnataka.",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+919663828936",
            "availableLanguage": ["Kannada", "Telugu", "Hindi", "Marathi", "English"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Car Street, Near Mahabaleshwar Temple",
            "addressLocality": "Gokarna",
            "addressRegion": "KA",
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

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Balachandra Prasad",
        "jobTitle": "Vedic Ritual Priest & Expert",
        "description": "Expert Vedic priest with 20+ years of experience performing authentic Narayana Bali, Pitru Dosha Nivarana, and Nag Bali rituals in Gokarna.",
        "url": SITE_URL,
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+919663828936"
        },
        "affiliation": { "@id": `${SITE_URL}/#business` },
        "knowsAbout": ["Narayana Bali Pooja", "Pitru Dosha Nivarana", "Nag Bali Sarpa Dosha", "Vedic Rituals", "Ancestral Karma"],
        "worksLocation": {
            "@type": "Place",
            "name": "Gokarna, Karnataka"
        }
    };

    // Same questions as the FAQ section on the page, so search engines and AI
    // assistants can answer them directly and cite the site.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
        </>
    );
}
