import type { Metadata } from 'next';

const title = 'APCA Contrast Checker | WCAG & APCA Color Accessibility Tool';
const description = 'Check APCA and WCAG contrast scores for text and background colors. Generate accessible color pairs for web UI, design systems, and dark mode themes.';
const canonical = 'https://rgbatohex.com/tools/apca-contrast-checker';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'apca contrast checker',
    'wcag and apca contrast checker',
    'apca accessibility tool',
    'accessible color checker',
    'dark mode contrast checker',
    'ui contrast checker',
    'design system contrast tool',
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
