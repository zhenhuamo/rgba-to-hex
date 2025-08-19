import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Shades of Black: 2000+ Black Colors, Hex Codes & Black Color Palette',
  description: 'Explore 2000+ shades of black with hex codes and color names. Complete black color palette featuring different types of black, black tones, and specific black colors. Perfect for designers and developers.',
  keywords: 'shades of black, black shades, black color, types of black, black colors, shade of black, black color palette, different shades of black, black color shades, black colour, black color code, black colours, specific black colors, black hex code, black tones, black hex codes, shades of black hex codes, black color codes',
  openGraph: {
    title: 'Shades of Black: 2000+ Black Colors & Hex Codes',
    description: '2000+ different shades of black with hex codes. Complete black color palette featuring all types of black colors for designers.',
    url: 'https://rgbatohex.com/color-shades/shades-of-black',
    siteName: 'RGBA to HEX',
    images: [
      {
        url: '/color-shades/shades-of-black/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Black Color Palette with 2000+ Black Colors and Hex Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Black: 2000+ Black Colors & Hex Codes',
    description: '2000+ different shades of black with hex codes and color names',
    images: ['/color-shades/shades-of-black/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-black',
  },
};

export default function ShadesOfBlackLayout({
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
            "name": "Shades of Black - Complete Black Color Palette",
            "description": "Comprehensive collection of black color shades with hex codes",
            "url": "https://rgbatohex.com/color-shades/shades-of-black",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Shades of Black Color Palette",
              "description": "2000+ different shades of black with hex codes, color names, and black color codes. Complete collection of black colors including pure black, charcoal black, dark gray, and all types of black tones.",
              "keywords": "shades of black, black colors, black hex codes, black color palette, types of black",
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
                  "name": "Shades of Black",
                  "item": "https://rgbatohex.com/color-shades/shades-of-black"
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
