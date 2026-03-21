export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  item: string;
};

type BlogPostingInput = {
  title: string;
  description: string;
  url: string;
};

type WebApplicationInput = {
  name: string;
  description: string;
  url: string;
};

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RGBA to HEX Converter',
    url: 'https://rgbatohex.com/',
    description:
      'Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.',
    inLanguage: 'en',
  };
}

export function buildWebApplicationSchema({ name, description, url }: WebApplicationInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RGBA to HEX Converter',
      url: 'https://rgbatohex.com/',
    },
  };
}

export function buildBlogPostingSchema({ title, description, url }: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'RGBA to HEX Converter',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RGBA to HEX Converter',
      url: 'https://rgbatohex.com/',
    },
    inLanguage: 'en',
  };
}

export function buildFaqSchema(items: ReadonlyArray<FaqItem>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
