import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMYK to HEX Color Converter - Convert Print Colors to Web Format | Free Online Tool",
  description: "Convert CMYK to HEX colors instantly with our professional color converter. Transform print-ready CMYK colors to web-compatible hexadecimal format. Perfect for graphic designers, web developers, and print professionals maintaining color consistency across print and digital media.",
  keywords: [
    // Primary keywords
    "cmyk to hex converter",
    "convert cmyk to hex",
    "cmyk to hex color converter",
    "cmyk hex converter",
    "print to web color converter",
    "cmyk to hexadecimal",
    "cmyk color converter",
    
    // Print-specific terms
    "print color to web color",
    "print to digital color conversion",
    "cmyk print colors to hex",
    "offset printing to web colors",
    "print design color conversion",
    "cmyk color model to hex",
    
    // Professional terms
    "graphic design color converter",
    "professional cmyk to hex",
    "print production color conversion",
    "prepress color conversion",
    "color management cmyk hex",
    "brand color consistency",
    
    // Specific color examples
    "cyan magenta yellow black to hex",
    "c100 m0 y0 k0 to hex",
    "c0 m100 y0 k0 to hex",
    "c0 m0 y100 k0 to hex",
    "rich black cmyk to hex",
    "cmyk black to hex",
    
    // Technical terms
    "subtractive color to additive",
    "cmyk gamut to rgb gamut",
    "color space conversion",
    "cmyk rgb hex conversion",
    "color model transformation",
    "print color matching",
    
    // Tool features
    "online cmyk to hex converter",
    "free cmyk hex converter",
    "instant cmyk to hex",
    "cmyk to hex calculator",
    "cmyk hex color tool",
    "web-based cmyk converter",
    
    // Industry specific
    "pantone to hex converter",
    "spot color to hex",
    "process color to web color",
    "cmyk color bridge",
    "print color matching system",
    "color separation to hex",
    
    // Educational terms
    "cmyk to hex formula",
    "cmyk to hex conversion guide",
    "cmyk to hex tutorial",
    "cmyk to hex examples",
    "cmyk to hex calculation",
    "cmyk to hex algorithm",
    
    // Programming related
    "cmyk to hex javascript",
    "cmyk to hex css",
    "cmyk to hex programming",
    "cmyk to hex code",
    "cmyk to hex function",
    "cmyk to hex api",
    
    // Design workflow
    "print design to web design",
    "cmyk workflow to digital",
    "cross-media color conversion",
    "multi-platform color matching",
    "design color consistency",
    "brand color translation",
    
    // File and format terms
    "cmyk color values to hex",
    "cmyk percentage to hex",
    "cmyk color codes to hex",
    "cmyk color palette to hex",
    "cmyk swatch to hex",
    
    // Quality and accuracy
    "accurate cmyk to hex",
    "precise color conversion",
    "professional color matching",
    "color fidelity conversion",
    "high-quality color conversion",
    
    // Use cases
    "web design color conversion",
    "digital marketing colors",
    "website color matching",
    "online brand colors",
    "digital color palette",
    "responsive design colors"
  ].join(", "),
  
  openGraph: {
    title: "CMYK to HEX Color Converter - Convert Print Colors to Web Format",
    description: "Professional CMYK to HEX color converter. Transform print-ready CMYK colors to web-compatible hexadecimal format instantly. Perfect for maintaining color consistency across print and digital media.",
    type: "website",
    locale: "en_US",
    siteName: "CMYK to HEX Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'CMYK to HEX Color Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CMYK to HEX Color Converter - Print to Web Colors",
    description: "Convert CMYK print colors to HEX web format instantly. Professional tool for graphic designers and web developers maintaining color consistency.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/cmyk-to-hex",
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
    'color-models': 'CMYK (Subtractive) to HEX (RGB Additive)',
    'conversion-formula': 'CMYK → RGB → HEX',
    'primary-colors': 'Cyan, Magenta, Yellow, Key (Black)',
    'target-audience': 'Graphic designers, Web developers, Print professionals',
    'use-cases': 'Print to web, Brand consistency, Color matching, Design workflow',
    'color-examples': 'C:100,M:0,Y:0,K:0=#00FFFF, C:0,M:100,Y:0,K:0=#FF00FF',
    'tool-features': 'Instant conversion, Embed code, Custom parameters, Professional accuracy',
    'supported-formats': 'CMYK percentages (0-100) to HEX codes',
    'gamut-considerations': 'CMYK gamut smaller than RGB, closest match provided',
  }
};

export default function CmykToHexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
