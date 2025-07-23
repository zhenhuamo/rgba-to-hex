import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delta-E Color Difference Calculator | CIE76, CIE94, CIEDE2000 | Professional Color Comparison Tool",
  description: "Precisely calculate and compare the perceptual difference between colors using CIE76, CIE94, and CIEDE2000 standards. Professional Delta-E calculator for designers, photographers, and color management professionals. Supports RGB, HEX, and LAB color spaces with accurate color difference measurement.",
  keywords: [
    // Primary keywords
    "delta-e calculator",
    "delta e calculator",
    "color difference calculator",
    "delta-e color difference",
    "cie76 calculator",
    "cie94 calculator",
    "ciede2000 calculator",
    "color comparison tool",
    "color difference measurement",
    
    // Color standards and formulas
    "delta-e cie76",
    "delta-e cie94", 
    "delta-e ciede2000",
    "delta-e 2000",
    "color difference formula",
    "lab color difference",
    "cielab delta-e",
    "perceptual color difference",
    
    // Professional applications
    "color management",
    "color quality control",
    "print color matching",
    "display calibration",
    "brand color consistency",
    "color accuracy assessment",
    "color tolerance testing",
    "color matching tolerance",
    
    // Industry specific
    "printing delta-e",
    "photography color difference",
    "textile color matching",
    "automotive paint matching",
    "graphic design color tools",
    "web design color comparison",
    "ui color consistency",
    "brand guideline colors",
    
    // Color spaces
    "rgb to lab conversion",
    "hex color comparison",
    "lab color space",
    "cielab color difference",
    "color space conversion",
    "rgb color difference",
    "hex color difference",
    
    // Technical terms
    "color perception",
    "human color vision",
    "color science",
    "colorimetry",
    "color measurement",
    "color evaluation",
    "color assessment",
    "color analysis",
    
    // Tool features
    "online delta-e calculator",
    "free color difference tool",
    "professional color calculator",
    "color comparison online",
    "color difference online",
    "delta-e measurement tool",
    "color matching calculator",
    
    // Applications
    "color quality assurance",
    "color reproduction",
    "color fidelity",
    "color consistency check",
    "color variation measurement",
    "color tolerance evaluation",
    "color difference analysis"
  ],
  
  openGraph: {
    title: "Delta-E Color Difference Calculator | CIE76, CIE94, CIEDE2000 Standards",
    description: "Precisely calculate and compare the perceptual difference between colors using professional CIE76, CIE94, and CIEDE2000 standards. Professional Delta-E calculator for accurate color management and quality control.",
    type: "website",
    locale: "en_US",
    siteName: "Delta-E Color Difference Calculator",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Delta-E Color Difference Calculator - Professional Color Comparison Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Delta-E Color Difference Calculator | Professional Color Comparison",
    description: "Calculate precise color differences using CIE76, CIE94, and CIEDE2000 standards. Professional tool for color management, printing, and design quality control.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/delta-e-calculator",
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
    'tool-type': 'Delta-E Color Difference Calculator and Measurement Tool',
    'color-standards': 'CIE76, CIE94, CIEDE2000',
    'color-spaces': 'CIELAB, RGB, HEX, CMYK conversion support',
    'target-users': 'Designers, Photographers, Print professionals, Color scientists, Quality control specialists',
    'use-cases': 'Color matching, Print quality control, Display calibration, Brand consistency, Color tolerance testing',
    'tool-features': 'Multiple Delta-E standards, Color space conversion, Professional accuracy, Real-time calculation',
    'industries': 'Printing, Photography, Textile, Automotive, Digital design, Manufacturing',
    'accuracy-standards': 'Professional grade color difference measurement',
    'color-formats': 'RGB, HEX, LAB, CMYK color input support',
    'applications': 'Quality assurance, Color management, Brand guidelines, Print production, Display calibration',
    'measurement-precision': 'High-precision perceptual color difference calculation',
    'professional-features': 'Industry-standard formulas, Multiple calculation methods, Accurate color conversion'
  }
};

export default function DeltaECalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
