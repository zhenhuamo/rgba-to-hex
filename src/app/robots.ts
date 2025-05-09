import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 现有通用规则
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      // AI爬虫通用规则 (允许访问特定内容，禁止访问用户内容)
      {
        userAgent: ['GPTBot', 'Claude-Web', 'Anthropic-AI', 'PerplexityBot', 'GoogleOther', 'DuckAssistBot'], // 您可以在此数组中添加更多AI爬虫名称
        allow: ['/tools/', '/blog/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/user-content/'],
      },
    ],
    sitemap: 'https://rgbatohex.com/sitemap.xml',
  };
} 