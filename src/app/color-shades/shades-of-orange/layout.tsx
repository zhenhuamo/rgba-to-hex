import { Metadata } from 'next';

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Shades of Orange: Complete Orange Color Collection",
  "description": "Explore 2000+ stunning shades of orange with precise hex code orange values and color names. Complete orange color chart for designers and developers.",
  "url": "https://rgbatohex.com/color-shades/shades-of-orange",
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Orange Color Palette Collection",
    "description": "Comprehensive collection of shades of orange with hex codes, RGB values, and color names",
    "creator": {
      "@type": "Organization",
      "name": "RGBA to Hex"
    }
  },
  "keywords": "shades of orange, orange color code, hex code orange, orange colors, orange color palette, different shades of orange",
  "inLanguage": "en-US"
};

export const metadata: Metadata = {
  title: 'Shades of Orange: 2000+ Orange Color Codes & Hex Values | Complete Orange Color Chart',
  description: 'Explore 2000+ stunning shades of orange with precise hex code orange values and color names. Our comprehensive orange color palette showcases different shades of orange from light orange colors to dark orange shades. Perfect orange colors collection for designers featuring accurate hex codes, RGB values, and detailed orange color names for professional use.',
  keywords: 'shades of orange, orange color code, hex code orange, orange colors, orange color palette, different shades of orange, orange color chart, light orange colors, dark orange shades, red orange shades, yellow orange variations, peach orange colors, burnt orange shades, coral orange colors, amber orange shades, rust orange colors, copper orange tones, vibrant orange shades, orange color combination, orange color gradient, types of orange, orange color scheme, sunset orange palette, tangerine orange, orange color names, orange hex codes',
  openGraph: {
    title: 'Shades of Orange: 2000+ Orange Color Codes & Hex Values',
    description: 'Explore 2000+ stunning shades of orange with precise hex code orange values. Complete orange color chart featuring light orange colors, dark orange shades, and vibrant orange colors for designers.',
    type: 'website',
    url: '/color-shades/shades-of-orange',
    images: [
      {
        url: '/images/orange-colors-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Shades of Orange Color Chart with Hex Codes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shades of Orange: 2000+ Orange Color Codes & Hex Values',
    description: 'Explore 2000+ stunning shades of orange with precise hex code orange values and color names.',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
