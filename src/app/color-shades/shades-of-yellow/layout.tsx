import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Yellow: Complete Shades of Yellow Collection | 2000+ Shades of Yellow',
  description: 'Discover 2000+ different color shades with hex codes and color names. Our comprehensive color shades palette features all types of color shades - from light color shades to dark color shades. Each color shades includes hex codes, RGB values, and specific color shades names for designers and developers.',
  keywords: [
    'shades of yellow',
    'yellow color code',
    'yellow color',
    'yellow shades',
    'font css soft yellow',
    'yellow css',
    'yellow color shades',
    'yellow colour shades',
    'yellow gold gradient css',
    'yellow gradient',
    'color shades',
    'yellow color palette',
    'color shade of yellow',
    'shades of yellow color',
    'yellow color names',
    'yellow hex codes',
    'different shades of yellow',
    'yellow color chart',
    'dark yellow shades',
    'light yellow colors',
    'golden yellow shades',
    'lemon yellow variations',
    'cream yellow colors',
    'yellow color combination',
    'yellow color gradient',
    'types of yellow',
    'yellow color scheme',
    'soft yellow color',
    'yellow color all shades'
  ],
  openGraph: {
    title: 'Shades of Yellow: Complete Shades of Yellow Collection',
    description: 'Discover 2000+ different color shades with hex codes and color names. Perfect color shades palette for designers and developers.',
    type: 'website',
    url: '/color-shades/shades-of-yellow',
    images: [
      {
        url: '/images/yellow-colors-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Yellow Color Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Yellow: Complete Shades of Yellow Collection',
    description: 'Discover 2000+ different color shades with hex codes and color names.',
    images: ['/images/yellow-colors-twitter.jpg']
  },
  alternates: {
    canonical: '/color-shades/shades-of-yellow'
  }
};

export default function ShadesOfYellowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
