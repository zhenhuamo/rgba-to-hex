import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMYK to RGB Color Converter - Convert Print Colors to Digital Format | Professional Tool",
  description: "Convert CMYK to RGB colors instantly with our professional color converter. Transform print-ready CMYK colors to digital RGB format for web, Photoshop, Illustrator, and digital displays. Perfect for designers, photographers, and digital artists maintaining color accuracy across print and digital media.",
  keywords: [
    // Primary keywords
    "cmyk to rgb converter",
    "convert cmyk to rgb",
    "cmyk to rgb color converter",
    "cmyk rgb converter",
    "print to digital color converter",
    "cmyk to rgb conversion",
    "professional color converter",
    
    // Software-specific terms
    "cmyk to rgb photoshop",
    "convert cmyk to rgb photoshop",
    "cmyk to rgb illustrator",
    "change cmyk to rgb illustrator",
    "cmyk to rgb indesign",
    "cmyk to rgb procreate",
    "adobe cmyk to rgb",
    
    // Print to digital terms
    "print color to digital color",
    "print to web color conversion",
    "cmyk print colors to rgb",
    "offset printing to digital",
    "print design to digital",
    "subtractive to additive color",
    
    // Professional workflow
    "professional cmyk to rgb",
    "graphic design color conversion",
    "print production to digital",
    "color management cmyk rgb",
    "cross-media color conversion",
    "brand color consistency",
    
    // Photography terms
    "rgb photo to cmyk",
    "cmyk photo to rgb",
    "photography color conversion",
    "photo editing color space",
    "digital photography rgb",
    "print photography cmyk",
    
    // Publishing terms
    "digital publishing rgb",
    "print publishing cmyk",
    "magazine layout conversion",
    "brochure design conversion",
    "packaging design rgb",
    "advertising color conversion",
    
    // Technical terms
    "color space conversion",
    "cmyk color model to rgb",
    "additive color mixing",
    "subtractive color mixing",
    "color gamut conversion",
    "icc profile conversion",
    
    // Tool features
    "online cmyk to rgb converter",
    "free cmyk rgb converter",
    "instant cmyk to rgb",
    "real-time color preview",
    "accurate color conversion",
    "professional color tool",
    
    // Color accuracy terms
    "color accuracy cmyk rgb",
    "precise color conversion",
    "professional color matching",
    "color fidelity conversion",
    "high-quality color conversion",
    "color consistency tool",
    
    // Digital art terms
    "digital art color conversion",
    "digital painting rgb",
    "illustration color space",
    "concept art color conversion",
    "character design colors",
    "environment art colors",
    
    // Web design terms
    "web design rgb colors",
    "website color conversion",
    "digital design rgb",
    "ui design colors",
    "responsive design colors",
    "css rgb colors",
    
    // Educational terms
    "cmyk to rgb formula",
    "cmyk to rgb tutorial",
    "cmyk to rgb guide",
    "cmyk to rgb examples",
    "cmyk to rgb calculation",
    "color conversion theory",
    
    // Industry specific
    "advertising agency colors",
    "marketing material colors",
    "brand guideline colors",
    "corporate identity colors",
    "logo design colors",
    "packaging design colors",
    
    // Device compatibility
    "monitor color display",
    "screen color accuracy",
    "display color calibration",
    "device color management",
    "cross-platform colors",
    "multi-device colors",
    
    // Workflow integration
    "design workflow colors",
    "production workflow",
    "color management workflow",
    "creative workflow tools",
    "design process colors",
    "professional workflow"
  ].join(", "),
  
  openGraph: {
    title: "CMYK to RGB Color Converter - Convert Print Colors to Digital Format",
    description: "Professional CMYK to RGB color converter. Transform print-ready CMYK colors to digital RGB format instantly. Perfect for Photoshop, Illustrator, and cross-media design workflows.",
    type: "website",
    locale: "en_US",
    siteName: "CMYK to RGB Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'CMYK to RGB Color Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CMYK to RGB Color Converter - Print to Digital Colors",
    description: "Convert CMYK print colors to RGB digital format instantly. Professional tool for designers, photographers, and digital artists.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/cmyk-to-rgb",
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
    'color-models': 'CMYK (Subtractive) to RGB (Additive)',
    'conversion-formula': 'R=255×(1-C)×(1-K), G=255×(1-M)×(1-K), B=255×(1-Y)×(1-K)',
    'supported-software': 'Photoshop, Illustrator, InDesign, Procreate',
    'target-users': 'Print designers, Digital artists, Photographers, Publishers',
    'use-cases': 'Print to web, Cross-media design, Digital publishing, Color management',
    'workflow-integration': 'Adobe Creative Suite, Digital art apps, Web design tools',
    'color-accuracy': 'Professional-grade conversion with real-time preview',
    'supported-formats': 'CMYK percentages (0-100%) to RGB values (0-255)',
    'professional-features': 'ICC profiles, Gamut warnings, Batch conversion',
  }
};

export default function CmykToRgbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
