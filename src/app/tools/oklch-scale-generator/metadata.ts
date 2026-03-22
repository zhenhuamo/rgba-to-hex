import type { Metadata } from 'next';

const title = 'OKLCH Scale Generator | Create 50-950 Color Scales';
const description = 'Generate smooth OKLCH color scales from a base color. Export 50-950 palettes to HEX, CSS variables, Tailwind, and design tokens.';
const canonical = 'https://rgbatohex.com/tools/oklch-scale-generator';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'oklch scale generator',
    'oklch palette generator',
    '50 950 color scale',
    'tailwind color scale generator',
    'brand color scale',
    'oklch to hex palette',
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
