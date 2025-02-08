import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rgbatohex.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
} 