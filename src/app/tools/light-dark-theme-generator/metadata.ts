import type { Metadata } from 'next';

const title = 'Light & Dark Theme Generator | Brand Color to Semantic UI Tokens';
const description =
  'Turn one brand color into a complete light and dark theme. Get semantic role assignments, accessible dark mode palettes, WCAG and APCA contrast checks, and export-ready CSS variables, shadcn theme values, and JSON tokens.';
const canonical = 'https://rgbatohex.com/tools/light-dark-theme-generator';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'light dark theme generator',
    'dark mode color palette generator',
    'theme token generator',
    'shadcn theme generator',
    'accessible dark mode colors',
    'brand color dark mode',
    'css variables light dark theme',
    'tailwind dark mode theme',
    'semantic color tokens',
    'ui theme color generator',
  ].join(', '),
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'RGBA to HEX',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};
