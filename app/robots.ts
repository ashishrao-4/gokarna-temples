import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

// AI assistants send people here the way search does, so their crawlers are
// allowed explicitly — some of them ignore a bare wildcard rule.
const AI_CRAWLERS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Bingbot',
    'DuckDuckBot',
    'YandexBot',
    'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            ...AI_CRAWLERS.map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow: ['/api/'],
            })),
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
