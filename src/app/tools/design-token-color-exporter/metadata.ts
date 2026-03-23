import type { Metadata } from 'next';

const title = 'Design Token Color Exporter | CSS Variables, Tailwind, JSON';
const description = 'Export color scales or semantic color roles to CSS variables, Tailwind config, and JSON tokens for real product workflows.';
const canonical = 'https://rgbatohex.com/tools/design-token-color-exporter';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'design token color exporter',
    'css variables generator',
    'tailwind color tokens',
    'json design tokens',
    'color token exporter',
    'design system color tokens',
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
