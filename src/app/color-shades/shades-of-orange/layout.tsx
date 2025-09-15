import { Metadata } from 'next';

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "All Shades of Orange: Complete Collection with Orange Hex Codes & Orange Pantone Colors",
  "description": "Discover 2000+ all shades of orange with precise orange hex codes, orange Pantone colors, and orange shade names. Perfect for hair colors, interior design, and professional applications.",
  "url": "https://rgbatohex.com/color-shades/shades-of-orange",
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Complete Orange Color Collection with Professional Specifications",
    "description": "Comprehensive collection of all shades of orange including orangey yellow shades, red-orange shades, and orange color variations from white to dark orange with orange hex codes, orange Pantone colors, and detailed orange shade names for hair colors, interior design, and professional use",
    "creator": {
      "@type": "Organization",
      "name": "RGBA to Hex"
    }
  },
  "keywords": "all shades of orange, different shades of orange, orange shade names, orangey yellow shades, orange hex codes, orange Pantone colors, red-orange shades, orange color variations from white to dark orange, shades of red/orange hair colors",
  "inLanguage": "en-US"
};

export const metadata: Metadata = {
  title: 'All Shades of Orange: Complete Collection with Orange Hex Codes & Orange Pantone Colors | Hair Colors & Interior Design',
  description: 'Discover 2000+ all shades of orange with precise orange hex codes, orange Pantone colors, and orange shade names. Our comprehensive collection features different shades of orange from orangey yellow shades to red-orange shades, perfect for hair colors, interior design, and professional applications. Includes orange color variations from white to dark orange with detailed specifications for designers, hair colorists, and interior designers.',
  keywords: 'shades of orange, all shades of orange, different shades of orange, orange shade names, orangey yellow shades, orange hex codes, orange Pantone colors, red-orange shades, orange color variations from white to dark orange, shades of red/orange hair colors, orange color chart, light orange colors, dark orange shades, yellow orange variations, peach orange colors, burnt orange shades, coral orange colors, amber orange shades, rust orange colors, copper orange tones, vibrant orange shades, orange color combination, orange color gradient, types of orange, orange color scheme, sunset orange palette, tangerine orange, orange accent chairs, turquoise sofas orange accents, interior design orange colors, hair color orange shades, professional orange colors',
  openGraph: {
    title: 'All Shades of Orange: Complete Collection with Orange Hex Codes & Orange Pantone Colors',
    description: 'Discover 2000+ all shades of orange with orange hex codes, orange Pantone colors, and orange shade names. Perfect for hair colors, interior design, featuring orangey yellow shades, red-orange shades, and orange color variations from white to dark orange.',
    type: 'website',
    url: '/color-shades/shades-of-orange',
    images: [
      {
        url: '/images/orange-colors-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete All Shades of Orange Color Chart with Orange Hex Codes and Orange Pantone Colors'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Shades of Orange: Complete Collection with Orange Hex Codes & Orange Pantone Colors',
    description: 'Discover 2000+ all shades of orange with orange hex codes, orange Pantone colors, and orange shade names for hair colors and interior design.',
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
