import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shades of Blue: 4000+ Blue Colors, Hex Codes & Blue Color Palette',
  description: 'Explore 4000+ shades of blue with hex codes and color names. Complete blue color palette featuring different types of blue, blue tones, and specific blue colors. Perfect for designers and developers.',
  keywords: 'shades of blue, blue shades, blue color, types of blue, blue colors, shade of blue, blue color palette, different shades of blue, blue color shades, blue colour, blue color code, blue colours, specific blue colors, blue hex code, blue tones, blue hex codes, shades of blue hex codes, blue color codes',
  openGraph: {
    title: 'Shades of Blue: 4000+ Blue Colors & Hex Codes',
    description: '4000+ different shades of blue with hex codes. Complete blue color palette featuring all types of blue colors for designers.',
    url: 'https://rgbatohex.com/color-shades/shades-of-blue',
    siteName: 'RGBA to HEX',
    images: [
      {
        url: '/color-shades/shades-of-blue/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Blue Color Palette with 4000+ Blue Colors and Hex Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Blue: 4000+ Blue Colors & Hex Codes',
    description: '4000+ different shades of blue with hex codes and color names',
    images: ['/color-shades/shades-of-blue/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-blue',
  },
};

export default function ShadesOfBlueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Shades of Blue - Complete Blue Color Palette",
            "description": "Comprehensive collection of blue color shades with hex codes",
            "url": "https://rgbatohex.com/color-shades/shades-of-blue",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Shades of Blue Color Palette",
              "description": "4000+ different shades of blue with hex codes, color names, and blue color codes. Complete collection of blue colors including light blue, dark blue, navy blue, and all types of blue tones.",
              "keywords": "shades of blue, blue colors, blue hex codes, blue color palette, types of blue",
              "creator": {
                "@type": "Organization",
                "name": "RGBA to HEX"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rgbatohex.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Color Shades",
                  "item": "https://rgbatohex.com/color-shades"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Shades of Blue",
                  "item": "https://rgbatohex.com/color-shades/shades-of-blue"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}
