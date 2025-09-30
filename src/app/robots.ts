import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    }
}
