import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMYK to RGBA Color Converter - Print to Web with Alpha Transparency | Professional Tool",
  description: "Convert CMYK to RGBA colors with alpha transparency control. Transform print-ready CMYK colors to web-compatible RGBA format for CSS, JavaScript, and modern web development. Perfect for designers bridging print and digital workflows with transparency effects.",
  keywords: [
    // Primary keywords
    "cmyk to rgba converter",
    "convert cmyk to rgba",
    "cmyk to rgba color converter",
    "cmyk rgba converter",
    "print to web rgba converter",
    "cmyk to rgba with alpha",
    "professional color converter",
    
    // Alpha transparency terms
    "cmyk to rgba transparency",
    "alpha channel color conversion",
    "transparent color converter",
    "rgba alpha transparency",
    "opacity color conversion",
    "semi-transparent colors",
    "color with transparency",
    
    // Web development terms
    "css rgba colors",
    "rgba color values",
    "web rgba colors",
    "css transparency colors",
    "rgba color codes",
    "javascript rgba colors",
    "html rgba colors",
    
    // Print to digital terms
    "print color to web rgba",
    "print to digital transparency",
    "cmyk print to rgba web",
    "offset printing to rgba",
    "print design to web rgba",
    "subtractive to additive rgba",
    
    // Programming languages
    "cmyk to rgba javascript",
    "cmyk to rgba typescript",
    "cmyk to rgba python",
    "cmyk to rgba css",
    "cmyk to rgba react",
    "cmyk to rgba node",
    
    // Professional workflow
    "professional cmyk to rgba",
    "graphic design rgba conversion",
    "brand color rgba conversion",
    "cross-media rgba colors",
    "color management rgba",
    "design system rgba",
    
    // Modern web design
    "modern web rgba colors",
    "responsive design rgba",
    "ui design rgba colors",
    "web design transparency",
    "overlay colors rgba",
    "backdrop rgba colors",
    
    // Technical terms
    "rgba color model",
    "alpha channel conversion",
    "color space rgba conversion",
    "transparency color mixing",
    "rgba color algorithm",
    "color opacity conversion",
    
    // Tool features
    "online cmyk to rgba converter",
    "free cmyk rgba converter",
    "instant rgba conversion",
    "real-time rgba preview",
    "accurate rgba conversion",
    "professional rgba tool",
    
    // Brand and marketing
    "brand color rgba conversion",
    "marketing color transparency",
    "corporate rgba colors",
    "logo color rgba conversion",
    "brand transparency colors",
    "identity color rgba",
    
    // Digital art and design
    "digital art rgba colors",
    "illustration rgba conversion",
    "concept art transparency",
    "character design rgba",
    "environment art rgba",
    "digital painting rgba",
    
    // E-commerce and web
    "e-commerce rgba colors",
    "product color rgba",
    "website rgba colors",
    "online store colors",
    "digital catalog colors",
    "web shop rgba",
    
    // Educational terms
    "cmyk to rgba tutorial",
    "rgba conversion guide",
    "cmyk to rgba examples",
    "rgba color theory",
    "transparency color guide",
    "alpha channel tutorial",
    
    // Industry specific
    "advertising rgba colors",
    "packaging design rgba",
    "magazine layout rgba",
    "brochure design rgba",
    "poster design rgba",
    "marketing material rgba",
    
    // Software integration
    "photoshop rgba colors",
    "illustrator rgba conversion",
    "figma rgba colors",
    "sketch rgba conversion",
    "adobe rgba colors",
    "design software rgba",
    
    // Framework specific
    "react rgba colors",
    "vue rgba conversion",
    "angular rgba colors",
    "bootstrap rgba colors",
    "tailwind rgba colors",
    "material ui rgba",
    
    // Quality and accuracy
    "accurate rgba conversion",
    "precise color transparency",
    "professional rgba matching",
    "high-quality rgba conversion",
    "color fidelity rgba",
    "rgba color accuracy",
    
    // Use cases
    "overlay design rgba",
    "transparent backgrounds",
    "glass effect rgba",
    "shadow colors rgba",
    "gradient rgba colors",
    "animation rgba colors"
  ].join(", "),
  
  openGraph: {
    title: "CMYK to RGBA Color Converter - Print to Web with Alpha Transparency",
    description: "Professional CMYK to RGBA color converter with alpha transparency control. Transform print-ready CMYK colors to web-compatible RGBA format for modern web development and design workflows.",
    type: "website",
    locale: "en_US",
    siteName: "CMYK to RGBA Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'CMYK to RGBA Color Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CMYK to RGBA Color Converter - Print to Web with Transparency",
    description: "Convert CMYK print colors to RGBA web format with alpha transparency. Professional tool for modern web design and development workflows.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/cmyk-to-rgba",
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
    'color-models': 'CMYK (Subtractive) to RGBA (Additive with Alpha)',
    'conversion-formula': 'R=255×(1-C)×(1-K), G=255×(1-M)×(1-K), B=255×(1-Y)×(1-K), A=alpha',
    'alpha-channel': 'Transparency control from 0 (transparent) to 1 (opaque)',
    'css-compatibility': 'Direct CSS rgba() function support',
    'target-users': 'Web developers, UI designers, Digital artists, Brand managers',
    'use-cases': 'Transparent overlays, Modern web effects, Brand consistency, CSS styling',
    'programming-support': 'JavaScript, TypeScript, Python, CSS, React',
    'web-standards': 'CSS3, HTML5, Modern browsers, Responsive design',
    'transparency-features': 'Alpha channel, Opacity control, Overlay effects, Glass design',
    'professional-features': 'Real-time preview, Code generation, Copy integration, Validation',
  }
};

export default function CmykToRgbaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
