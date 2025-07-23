import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Wheel Tool | Interactive Color Harmony Generator | RGB Color Theory | Free Online Color Wheel",
  description: "Explore our interactive color wheel tool for perfect color harmonies. Learn color theory, create complementary, analogous, triadic color schemes with our free online color wheel generator. Perfect for designers, artists, and web developers with RGB and RYB support.",
  keywords: [
    // Primary keywords
    "color wheel",
    "color wheel tool",
    "color wheel generator",
    "interactive color wheel",
    "online color wheel",
    "free color wheel",
    "color wheel chart",
    
    // Color theory keywords
    "color theory",
    "color harmony",
    "color wheel theory",
    "color relationships",
    "color combinations",
    "color schemes",
    
    // Specific color harmonies
    "complementary colors",
    "analogous colors",
    "triadic colors",
    "tetradic colors",
    "monochromatic colors",
    "split complementary",
    "color wheel complementary colors",
    
    // Color wheel types
    "rgb color wheel",
    "ryb color wheel",
    "color wheel rgb",
    "color wheel online",
    "color wheel spinner",
    
    // Applications
    "color wheel for clothes",
    "color wheel brown",
    "color wheel design",
    "color wheel art",
    "color wheel web design",
    
    // Tool features
    "color picker",
    "color palette generator",
    "color harmony generator",
    "color theory tool",
    "design color tool",
    "web color tool",
    
    // Professional use
    "graphic design colors",
    "web design colors",
    "ui color schemes",
    "brand color schemes",
    "interior design colors",
    "fashion color combinations",
    
    // Educational
    "learn color theory",
    "color theory basics",
    "color mixing",
    "color wheel education",
    "color theory principles",
    
    // Technical
    "hex color codes",
    "hsl color picker",
    "color wheel calculator",
    "color conversion tool",
    "color palette creator"
  ],
  
  openGraph: {
    title: "Color Wheel Tool | Interactive Color Harmony Generator | RGB Color Theory",
    description: "Explore our interactive color wheel tool for perfect color harmonies. Learn color theory, create complementary, analogous, triadic color schemes with our free online color wheel generator.",
    type: "website",
    locale: "en_US",
    siteName: "Color Wheel Tool",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Interactive Color Wheel Tool - Color Harmony Generator',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Color Wheel Tool | Interactive Color Harmony Generator",
    description: "Free online color wheel tool for creating perfect color harmonies. Learn color theory with complementary, analogous, triadic color schemes.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/color-wheel",
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
  
  other: {
    'tool-type': 'Interactive Color Wheel and Harmony Generator',
    'color-harmonies': 'Complementary, Analogous, Triadic, Tetradic, Monochromatic, Split-Complementary',
    'color-systems': 'RGB Color Wheel, RYB Color Wheel, HSL Color Space',
    'target-users': 'Designers, Artists, Web developers, UI/UX professionals, Students, Fashion designers',
    'use-cases': 'Color harmony creation, Brand color selection, Web design, Interior design, Fashion design, Art education',
    'tool-features': 'Interactive color wheel, Color harmony generation, HEX code display, Color theory education, Embeddable widget',
    'color-formats': 'HEX, RGB, HSL color codes',
    'educational-value': 'Color theory principles, Color relationships, Harmony types, Warm and cool colors',
    'applications': 'Graphic design, Web design, Interior design, Fashion, Art, Branding, Marketing',
    'accessibility': 'Free, No registration, Cross-platform, Mobile-friendly, Embeddable',
    'color-wheel-types': 'Traditional RYB, Modern RGB, Digital design optimized'
  }
};

export default function ColorWheelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
