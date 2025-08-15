import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Shades of Brown: 3000+ Shades of Brown Colors, Hex Codes & Brown Color Palette',
  description: 'Explore 3000+ shades of brown with hex codes and color names. Complete shades of brown palette featuring different types of brown, shades of brown tones, and specific shades of brown colors. Perfect for designers and developers.',
  keywords: 'shades of brown, brown shades, brown color, types of brown, brown colors, shade of brown, brown color palette, different shades of brown, brown color shades, brown colour, brown color code, brown colours, specific brown colors, brown hex code, brown tones, brown hex codes, shades of brown hex codes, brown color codes, dark brown color, light brown color, chocolate brown, coffee brown, wood brown',
  openGraph: {
    title: 'Shades of Brown: 3000+ Shades of Brown Colors & Hex Codes',
    description: '3000+ different shades of brown with hex codes. Complete shades of brown palette featuring all types of shades of brown colors for designers.',
    url: 'https://rgbatohex.com/color-shades/shades-of-brown',
    siteName: 'RGBA to HEX',
    images: [
      {
        url: '/color-shades/shades-of-brown/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Brown Color Palette with 3000+ Brown Colors and Hex Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Brown: 3000+ Shades of Brown Colors & Hex Codes',
    description: '3000+ different shades of brown with hex codes and shades of brown color names',
    images: ['/color-shades/shades-of-brown/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-brown',
  },
};

export default function ShadesOfBrownLayout({
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
            "name": "Shades of Brown - Complete Brown Color Palette",
            "description": "Comprehensive collection of brown color shades with hex codes",
            "url": "https://rgbatohex.com/color-shades/shades-of-brown",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Shades of Brown Color Palette",
              "description": "3000+ different shades of brown with hex codes, color names, and brown color codes. Complete collection of shades of brown including light shades of brown, dark shades of brown, chocolate shades of brown, coffee shades of brown, and all types of shades of brown tones.",
              "keywords": "shades of brown, brown colors, brown hex codes, brown color palette, types of brown",
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
                  "name": "Shades of Brown",
                  "item": "https://rgbatohex.com/color-shades/shades-of-brown"
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
