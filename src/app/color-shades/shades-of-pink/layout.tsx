import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Pink: Complete Pink Color Collection with Hex Codes | Pink Color Palette',
  description: 'Discover 6000+ different shades of pink with hex codes and color names. Our comprehensive pink color palette features all types of pink colors - from light pink tones to dark pink shades. Each pink color includes CSS color codes, RGB values, and specific pink color names for designers and developers.',
  keywords: [
    'shades of pink',
    'pink color',
    'pink shades',
    'pink color code',
    'css color scheme pink',
    'pink css',
    'css codes for pink',
    'css shades of pink by names',
    'pink tones css',
    'pink color shades',
    'pink shades color code',
    'color of pink shades',
    'css color codes pink',
    'pink gradient color code',
    'pinkcolor',
    'shade of pink',
    'shades of pink colour',
    'types of pink',
    'all shades of pink',
    'pink code',
    'pink code color',
    'pink color codes',
    'pink color palette',
    'pink color picker',
    'pink colors',
    'pink colour code',
    'pink colours',
    'pink gradient color',
    'pink shades color'
  ],
  openGraph: {
    title: 'Shades of Pink: Complete Pink Color Collection with Hex Codes',
    description: 'Explore 1000+ pink color shades with instant copy hex codes. Perfect pink color palette for designers and developers.',
    type: 'website',
    url: '/color-shades/shades-of-pink',
    images: [
      {
        url: '/images/pink-colors-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pink Color Palette - Shades of Pink Collection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Pink: Complete Pink Color Collection',
    description: 'Discover 1000+ pink color shades with hex codes. Perfect pink color palette for your design projects.',
    images: ['/images/pink-colors-twitter.jpg']
  },
  alternates: {
    canonical: '/color-shades/shades-of-pink'
  }
};

export default function ShadesOfPinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
