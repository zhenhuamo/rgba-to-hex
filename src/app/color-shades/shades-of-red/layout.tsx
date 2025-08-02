import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Red - Complete Red Color Palette with Hex Codes | RGBA to Hex',
  description: 'Discover 2000+ different shades of red with hex codes and color names. Complete red color palette featuring light red, dark red, crimson, rose red, and coral red colors. Perfect for designers and developers.',
  keywords: [
    'shades of red',
    'red color palette',
    'red hex codes',
    'red color names',
    'different shades of red',
    'types of red color',
    'red color chart',
    'dark red shades',
    'light red colors',
    'crimson red',
    'rose red',
    'coral red',
    'burgundy red',
    'red color combination',
    'red color gradient',
    'softer red color',
    'red color all shades',
    'red color scheme',
    'html red color codes',
    'rgb red values'
  ].join(', '),
  openGraph: {
    title: 'Shades of Red - Complete Red Color Palette with Hex Codes',
    description: 'Discover 2000+ different shades of red with hex codes and color names. Complete red color palette featuring all types of red colors.',
    type: 'website',
    url: 'https://rgbatohex.com/color-shades/shades-of-red',
    images: [
      {
        url: '/images/red-color-palette-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Red Color Palette',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Red - Complete Red Color Palette with Hex Codes',
    description: 'Discover 2000+ different shades of red with hex codes and color names. Perfect for designers and developers.',
    images: ['/images/red-color-palette-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-red',
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

export default function ShadesOfRedLayout({
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
            name: 'Shades of Red - Complete Red Color Palette',
            description: 'Comprehensive collection of red color shades with hex codes, RGB values, and color names for designers and developers.',
            url: 'https://rgbatohex.com/color-shades/shades-of-red',
            mainEntity: {
              '@type': 'CreativeWork',
              name: 'Red Color Palette',
              description: 'Collection of 2000+ different shades of red with hex codes and color names',
              creator: {
                '@type': 'Organization',
                name: 'RGBA to Hex',
                url: 'https://rgbatohex.com'
              },
              keywords: [
                'red colors',
                'red hex codes',
                'red color palette',
                'shades of red',
                'red color names',
                'crimson red',
                'dark red',
                'light red'
              ]
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://rgbatohex.com'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Color Shades',
                  item: 'https://rgbatohex.com/color-shades'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Shades of Red',
                  item: 'https://rgbatohex.com/color-shades/shades-of-red'
                }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}
