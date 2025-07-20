import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Harmony Generator & Wheel | Create Beautiful Color Schemes | Free Color Theory Tool",
  description: "Free online color harmony generator and wheel tool. Create harmonious color schemes with complementary, triadic, analogous, split-complementary, and monochromatic color relationships. Perfect for designers, artists, web developers, and UI/UX professionals with CSS export.",
  keywords: [
    // Primary keywords
    "color harmony",
    "color harmony generator",
    "color harmony wheel",
    "color harmony tool",
    "online color harmony",
    "free color harmony generator",
    "color harmony creator",
    
    // Definitions and theory
    "color harmony definition",
    "color harmony meaning",
    "color harmony examples",
    "color harmony palette",
    "color theory harmony",
    "color wheel harmony",
    
    // Harmony types
    "complementary colors",
    "triadic colors",
    "analogous colors",
    "split complementary colors",
    "monochromatic colors",
    "tetradic colors",
    "square color harmony",
    
    // Applications
    "color harmony for web design",
    "color harmony for drawing",
    "color harmony for art",
    "color harmony for painting",
    "color harmony for graphic design",
    "color harmony for ui design",
    
    // Professional use
    "professional color schemes",
    "design color palette",
    "web design colors",
    "ui color scheme",
    "brand color harmony",
    "logo color harmony",
    
    // Tools and software
    "color harmony app",
    "color harmony software",
    "color palette creator",
    "color scheme generator",
    "color wheel generator",
    "color matching tool",
    
    // Educational
    "color harmony tutorial",
    "color harmony guide",
    "color harmony principles",
    "color harmony rules",
    "color harmony theory",
    "learn color harmony",
    
    // Specific combinations
    "best color combinations",
    "harmonious color combinations",
    "beautiful color schemes",
    "perfect color matches",
    "color coordination",
    "color balance",
    
    // Export and formats
    "color harmony css",
    "color harmony sass",
    "color harmony json",
    "export color palette",
    "css color variables",
    "color scheme export",
    
    // Art and creativity
    "color harmony in art",
    "artistic color schemes",
    "creative color combinations",
    "color harmony painting",
    "color harmony drawing",
    "digital art colors",
    
    // Industry specific
    "interior design color harmony",
    "fashion color harmony",
    "photography color harmony",
    "architecture color schemes",
    "product design colors",
    
    // Books and resources
    "color harmony book",
    "color harmony guide book",
    "color theory books",
    "design color books",
    "color harmony reference",
    
    // Technical terms
    "color wheel relationships",
    "color temperature harmony",
    "hue harmony",
    "saturation harmony",
    "brightness harmony",
    "color contrast harmony",
    
    // Workflow and process
    "color harmony workflow",
    "design color process",
    "color selection tool",
    "color planning tool",
    "brand color development",
    
    // Mobile and accessibility
    "mobile color harmony",
    "responsive color schemes",
    "accessible color harmony",
    "color blind friendly harmony",
    "inclusive color design",
    
    // Comparison terms
    "adobe color harmony",
    "coolors color harmony",
    "color hunt harmony",
    "paletton alternative",
    "best color harmony tool"
  ].join(", "),
  
  openGraph: {
    title: "Color Harmony Generator & Wheel | Create Beautiful Color Schemes",
    description: "Free online color harmony generator and wheel tool. Create perfectly harmonious color schemes with complementary, triadic, analogous, and other color harmony types. Export to CSS, Sass, or JSON.",
    type: "website",
    locale: "en_US",
    siteName: "Color Harmony Generator",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Color Harmony Generator Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Color Harmony Generator & Wheel | Create Beautiful Color Schemes",
    description: "Free online color harmony tool. Create harmonious color schemes with complementary, triadic, analogous colors. Perfect for designers and developers.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/color-harmony",
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
    'harmony-types': 'Complementary, Triadic, Analogous, Split-Complementary, Monochromatic, Tetradic',
    'color-theory': 'Based on traditional color wheel relationships and color science',
    'export-formats': 'CSS Variables, Sass Variables, JSON, HEX codes',
    'target-users': 'Designers, Artists, Web developers, UI/UX professionals, Students',
    'use-cases': 'Web design, Graphic design, Art projects, Brand development, UI design',
    'tool-features': 'Interactive color wheel, Real-time preview, Multiple harmony types, Export options',
    'educational-value': 'Learn color theory, Understand color relationships, Practice design principles',
    'professional-grade': 'Industry-standard color harmonies, Accurate color calculations, Export-ready formats',
    'accessibility': 'Free, No registration, Mobile-friendly, Cross-browser compatible',
    'integration-ready': 'CSS export, Sass export, JSON export, Embeddable widget',
  }
};

export default function ColorHarmonyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
