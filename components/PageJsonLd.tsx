import { SITE_URL } from "@/lib/metadata";
import type { Faq } from "@/lib/faqs";

type PageJsonLdProps = {
    /** Route path with leading slash, no trailing slash. Must match the page canonical. */
    path: string;
    name: string;
    description: string;
    /** Must be the same array the page renders visibly - Google requires FAQ markup to match visible text. */
    faqs?: Faq[];
};

// Per-page structured data for the service landing pages: a Service node tied to
// the site-wide ProfessionalService (@id .../#business) plus a BreadcrumbList,
// and an optional FAQPage mirroring the page's visible FAQ section.
export default function PageJsonLd({ path, name, description, faqs }: PageJsonLdProps) {
    const pageUrl = `${SITE_URL}${path}`;

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${pageUrl}#service`,
                "name": name,
                "description": description,
                "url": pageUrl,
                "provider": { "@id": `${SITE_URL}/#business` },
                "areaServed": [
                    { "@type": "Place", "name": "Gokarna" },
                    { "@type": "AdministrativeArea", "name": "Karnataka" },
                    { "@type": "Country", "name": "India" }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": SITE_URL
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": name,
                        "item": pageUrl
                    }
                ]
            }
        ]
    };

    const faqSchema = faqs?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a,
                },
            })),
        }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </>
    );
}
