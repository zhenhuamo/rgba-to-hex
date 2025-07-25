import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Shades of Green: 4000+ Green Colors, Hex Codes & Green Color Palette',
  description: 'Explore 4000+ shades of green with hex codes and color names. Complete green color palette featuring different types of green, green tones, and specific green colors. Perfect for designers and developers.',
  keywords: 'shades of green, green shades, green color, green colors, green color code, green colour shades, different shades of green, shade of green, types of green, green color shades, green color palette, shades of green color, green hex code, all shades of green, green shade, types of green colors, green colour, green css, green gradient, forest green, lime green, mint green, emerald green',
  openGraph: {
    title: 'Shades of Green: 4000+ Green Colors & Hex Codes',
    description: '4000+ different shades of green with hex codes. Complete green color palette featuring all types of green colors for designers.',
    url: 'https://rgbatohex.com/color-shades/shades-of-green',
    siteName: 'RGBA to HEX',
    images: [
      {
        url: '/color-shades/shades-of-green/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shades of Green Color Palette with 4000+ Green Colors and Hex Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Green: 4000+ Green Colors & Hex Codes',
    description: '4000+ different shades of green with hex codes and color names',
    images: ['/color-shades/shades-of-green/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/color-shades/shades-of-green',
  },
};

export default function ShadesOfGreenLayout({
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
            "name": "Shades of Green - Complete Green Color Palette",
            "description": "Comprehensive collection of green color shades with hex codes",
            "url": "https://rgbatohex.com/color-shades/shades-of-green",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Shades of Green Color Palette",
              "description": "4000+ different shades of green with hex codes, color names, and green color codes. Complete collection of green colors including light green, dark green, forest green, lime green, mint green, emerald green, and all types of green tones.",
              "keywords": "shades of green, green colors, green hex codes, green color palette, types of green, green color shades, green colour shades, different shades of green, green color code, green css, green gradient",
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
                  "name": "Shades of Green",
                  "item": "https://rgbatohex.com/color-shades/shades-of-green"
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
