import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Shades of White: 1000+ White Colors, Hex Codes & White Color Palette',
  description: 'Explore 1000+ shades of white with hex codes and color names. Complete white color palette featuring different types of white, white shades, and specific white colors. Perfect for designers and developers.',
  keywords: 'shades of white, white shades, white color, different shades of white, white colors, shade of white, white color palette, white color shades, white colour, white color code, white colours, specific white colors, white hex code, white shades paint, white color names, shades of white paint',
  openGraph: {
    title: 'Shades of White: 1000+ White Colors & Hex Codes',
    description: '1000+ different shades of white with hex codes. Complete white color palette featuring all types of white colors for designers.',
    url: 'https://rgbatohex.com/color-shades/shades-of-white',
    siteName: 'RGBA to HEX',
    images: [
      {
        url: '/color-shades/shades-of-white/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of White Color Palette with 1000+ White Colors and Hex Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of White: 1000+ White Colors & Hex Codes',
    description: '1000+ different shades of white with hex codes and color names',
    images: ['/color-shades/shades-of-white/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-white',
  },
};

export default function ShadesOfWhiteLayout({
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
            "name": "Shades of White - Complete White Color Palette",
            "description": "Comprehensive collection of white color shades with hex codes",
            "url": "https://rgbatohex.com/color-shades/shades-of-white",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Shades of White Color Palette",
              "description": "1000+ different shades of white with hex codes, color names, and white color codes. Complete collection of white colors including pure white, cream white, ivory white, and all types of white shades.",
              "keywords": "shades of white, white colors, white hex codes, white color palette, types of white",
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
                  "name": "Shades of White",
                  "item": "https://rgbatohex.com/color-shades/shades-of-white"
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
