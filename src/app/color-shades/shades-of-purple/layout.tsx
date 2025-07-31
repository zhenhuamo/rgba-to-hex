import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Purple: Complete Purple Color Collection | 4000+ Purple Colors with Hex Codes',
  description: 'Discover 4000+ different shades of purple with hex codes and color names. Complete purple color palette featuring light purple, deep purple, lavender, violet, royal purple, and magenta shades. Perfect for designers and developers.',
  keywords: [
    'shades of purple',
    'purple color',
    'purple shades',
    'purple colors',
    'purple color code',
    'purple hex code',
    'purple color palette',
    'different shades of purple',
    'all shades of purple',
    'types of purple',
    'light purple',
    'deep purple',
    'lavender purple',
    'violet purple',
    'royal purple',
    'magenta purple',
    'purple gradient',
    'purple color names',
    'purple css',
    'shades of deep purple'
  ],
  openGraph: {
    title: 'Shades of Purple: Complete Purple Color Collection',
    description: 'Explore 4000+ purple color shades with hex codes. From light purple to deep purple, find the perfect purple color for your design project.',
    type: 'website',
    images: [
      {
        url: '/images/purple-colors-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Purple Color Palette - Shades of Purple Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Purple: 4000+ Purple Colors with Hex Codes',
    description: 'Complete purple color palette with hex codes. Light purple, deep purple, lavender, violet, and more purple shades.',
    images: ['/images/purple-colors-preview.jpg'],
  },
  alternates: {
    canonical: '/color-shades/shades-of-purple',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ShadesOfPurpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Shades of Purple: Complete Purple Color Collection',
            description: 'Discover 4000+ different shades of purple with hex codes and color names. Complete purple color palette for designers and developers.',
            url: 'https://rgba-to-hex.com/color-shades/shades-of-purple',
            mainEntity: {
              '@type': 'CreativeWork',
              name: 'Purple Color Palette',
              description: 'Comprehensive collection of purple color shades with hex codes',
              creator: {
                '@type': 'Organization',
                name: 'RGBA to Hex',
              },
              about: [
                {
                  '@type': 'Thing',
                  name: 'Purple Colors',
                },
                {
                  '@type': 'Thing',
                  name: 'Color Palette',
                },
                {
                  '@type': 'Thing',
                  name: 'Hex Codes',
                },
              ],
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://rgba-to-hex.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Color Shades',
                  item: 'https://rgba-to-hex.com/color-shades',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Shades of Purple',
                  item: 'https://rgba-to-hex.com/color-shades/shades-of-purple',
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
