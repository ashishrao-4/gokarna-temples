import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;

    // Key pages and assets
    const routes = [
        '',
        '/narayana-bali-pooja-gokarna',
        '/pitru-dosha-pooja-gokarna',
        '/nag-bali-sarpa-dosha-gokarna',
        '/pitru-paksha-gokarna',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    // Add llms.txt
    const assets = [
        {
            url: `${baseUrl}/llms.txt`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        }
    ];

    return [...routes, ...assets];


}
