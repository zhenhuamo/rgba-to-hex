import { MetadataRoute } from 'next';
import { SITEMAP_ROUTES } from '@/lib/seo/siteRoutes';

const BASE_URL = 'https://rgbatohex.com';

function toAbsoluteUrl(path: string) {
  return path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.alternates?.languages
      ? {
          alternates: {
            languages: Object.fromEntries(
              Object.entries(route.alternates.languages).map(([locale, path]) => [locale, toAbsoluteUrl(path)])
            ),
          },
        }
      : {}),
  }));
}
