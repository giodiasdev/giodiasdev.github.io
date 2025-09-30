import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}
