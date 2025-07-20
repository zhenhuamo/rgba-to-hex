import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMYK to OKLCH Color Converter - Convert Print Colors to Modern Color Space | Professional Tool",
  description: "Convert CMYK to OKLCH colors with our professional color converter. Transform print-ready CMYK colors to modern OKLCH (Oklab Lightness Chroma Hue) format for advanced color manipulation, CSS Color Level 4 support, and perceptually uniform digital design workflows.",
  keywords: [
    // Primary keywords
    "cmyk to oklch converter",
    "convert cmyk to oklch",
    "cmyk to oklch color converter",
    "cmyk oklch converter",
    "print to oklch converter",
    "cmyk to oklab converter",
    "professional color converter",
    
    // Modern color space terms
    "oklch color space",
    "oklab lightness chroma hue",
    "perceptually uniform color space",
    "modern color space conversion",
    "css color level 4",
    "oklch css function",
    "advanced color manipulation",
    
    // Print to digital terms
    "print to digital color conversion",
    "cmyk to modern color space",
    "traditional print to digital",
    "subtractive to perceptual color",
    "print color modernization",
    "cross-media color conversion",
    
    // Technical terms
    "björn ottosson oklch",
    "oklab color space",
    "perceptual uniformity",
    "color science conversion",
    "visual perception color",
    "polar coordinate color",
    "lightness chroma hue model",
    
    // Professional workflow
    "professional color workflow",
    "modern design color tools",
    "advanced color management",
    "color system modernization",
    "brand color modernization",
    "design system oklch",
    
    // CSS and web development
    "css oklch function",
    "css color level 4 oklch",
    "web development oklch",
    "modern css colors",
    "oklch web colors",
    "responsive design colors",
    "theme system oklch",
    
    // Color manipulation
    "perceptually uniform adjustments",
    "intuitive color manipulation",
    "advanced color editing",
    "precise color control",
    "color gradient oklch",
    "color animation oklch",
    
    // Industry specific
    "graphic design oklch",
    "digital design oklch",
    "ui ux oklch colors",
    "brand design oklch",
    "web design oklch",
    "print design modernization",
    
    // Technical specifications
    "oklch lightness range",
    "oklch chroma values",
    "oklch hue degrees",
    "oklch color gamut",
    "wide gamut oklch",
    "p3 display oklch",
    
    // Conversion process
    "cmyk to rgb to oklch",
    "color space transformation",
    "gamut mapping oklch",
    "color profile conversion",
    "icc profile oklch",
    "color management oklch",
    
    // Educational terms
    "oklch color tutorial",
    "cmyk to oklch guide",
    "oklch conversion examples",
    "oklch color theory",
    "modern color science",
    "color perception research",
    
    // Tool features
    "online oklch converter",
    "free cmyk to oklch",
    "instant oklch conversion",
    "professional oklch tool",
    "real-time oklch preview",
    "interactive oklch converter",
    
    // Quality and accuracy
    "accurate color conversion",
    "professional color matching",
    "high-quality oklch conversion",
    "precise color transformation",
    "color fidelity oklch",
    
    // Future technology
    "next generation color",
    "future color standards",
    "emerging display technology",
    "advanced color formats",
    "modern color workflow",
    "color technology innovation"
  ].join(", "),
  
  openGraph: {
    title: "CMYK to OKLCH Color Converter - Convert Print Colors to Modern Color Space",
    description: "Professional CMYK to OKLCH color converter. Transform print-ready CMYK colors to modern OKLCH format for advanced color manipulation, CSS Color Level 4 support, and perceptually uniform digital workflows.",
    type: "website",
    locale: "en_US",
    siteName: "CMYK to OKLCH Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'CMYK to OKLCH Color Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CMYK to OKLCH Color Converter - Modern Color Space Tool",
    description: "Convert CMYK print colors to OKLCH format instantly. Professional tool for modern digital design with CSS Color Level 4 support and perceptual uniformity.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/cmyk-to-oklch",
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
    'color-spaces': 'CMYK (Subtractive) to OKLCH (Perceptually Uniform)',
    'conversion-path': 'CMYK → RGB → Oklab → OKLCH',
    'oklch-components': 'Lightness (0-1), Chroma (0-0.4+), Hue (0-360°)',
    'css-support': 'CSS Color Level 4 oklch() function',
    'target-users': 'Graphic designers, Web developers, UI/UX designers',
    'use-cases': 'Modern web design, Brand modernization, Advanced color manipulation',
    'perceptual-benefits': 'Uniform lightness, Intuitive adjustments, Visual consistency',
    'technology-foundation': 'Björn Ottosson research, Modern color science',
    'workflow-applications': 'CSS themes, Design systems, Color animations',
    'gamut-support': 'Wide gamut displays, P3, Rec2020',
  }
};

export default function CmykToOklchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
