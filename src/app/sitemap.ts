import { MetadataRoute } from 'next';
import { SITEMAP_ROUTES } from '@/lib/seo/siteRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rgbatohex.com';
  const lastModified = new Date();

  return SITEMAP_ROUTES.map((route) => ({
    url: route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
