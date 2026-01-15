import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gokarnatemples.com';

    // Key pages and assets
    const routes = [
        '',
        '/narayana-bali-pooja-gokarna',
        '/pitru-dosha-pooja-gokarna',
        '/nag-bali-sarpa-dosha-gokarna',
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
