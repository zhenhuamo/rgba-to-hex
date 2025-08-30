import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Orange: Complete Shades of Orange Collection | 2000+ Shades of Orange',
  description: 'Discover 2000+ different shades of orange with hex codes and color names. Our comprehensive orange colors palette features all types of orange shades - from light orange colors to dark orange color shades. Each shades of orange includes hex code orange, RGB values, and specific color orange names for designers and developers.',
  keywords: [
    'shades of orange',
    'orange color code',
    'orange color',
    'orange shades',
    'orange colors',
    'orange color shades',
    'hex code orange',
    'shades of color',
    'color orange',
    'color orange shades',
    'orange color palette',
    'color shade of orange',
    'shades of orange color',
    'orange color names',
    'orange hex codes',
    'different shades of orange',
    'orange color chart',
    'dark orange shades',
    'light orange colors',
    'red orange shades',
    'yellow orange variations',
    'peach orange colors',
    'orange color combination',
    'orange color gradient',
    'types of orange',
    'orange color scheme',
    'soft orange color',
    'orange color all shades',
    'burnt orange shades',
    'coral orange colors',
    'tangerine orange',
    'amber orange shades',
    'rust orange colors',
    'copper orange tones',
    'sunset orange palette',
    'vibrant orange shades'
  ],
  openGraph: {
    title: 'Shades of Orange: Complete Shades of Orange Collection',
    description: 'Discover 2000+ different shades of orange with hex codes and color names. Perfect orange colors palette for designers and developers.',
    type: 'website',
    url: '/color-shades/shades-of-orange',
    images: [
      {
        url: '/images/orange-colors-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Orange Color Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Orange: Complete Shades of Orange Collection',
    description: 'Discover 2000+ different shades of orange with hex codes and color names.',
    images: ['/images/orange-colors-twitter.jpg']
  },
  alternates: {
    canonical: '/color-shades/shades-of-orange'
  }
};

export default function ShadesOfOrangeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
