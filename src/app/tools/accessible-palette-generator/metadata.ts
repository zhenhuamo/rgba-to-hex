import type { Metadata } from 'next';

const title = 'Accessible Palette Generator | WCAG & APCA UI Color Roles';
const description = 'Generate accessible color roles from one base color. Build text, surface, border, accent, and primary UI pairs with live WCAG and APCA checks.';
const canonical = 'https://rgbatohex.com/tools/accessible-palette-generator';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'accessible palette generator',
    'wcag color palette',
    'apca color palette',
    'accessible color roles',
    'ui accessibility palette',
    'color accessibility generator',
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
