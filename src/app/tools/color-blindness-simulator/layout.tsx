import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Blindness Simulator | Online Tool for Images and Design Testing | Accessibility Checker",
  description: "Free online color blindness simulator for images and designs. Upload images or test colors to see how they appear to people with protanopia, deuteranopia, tritanopia and other color vision deficiencies. Essential accessibility tool for designers and developers.",
  keywords: [
    // Primary keywords
    "color blindness simulator",
    "color blindness simulator online",
    "color blindness simulator for images",
    "color blindness simulator upload image",
    "online color blindness simulator",
    "free color blindness simulator",
    
    // Software and platform specific
    "color blindness simulator app",
    "color blindness simulator chrome",
    "color blindness simulator extension",
    "color blindness simulator plugin",
    "color blindness simulator figma",
    "color blindness simulator mac",
    "color blindness simulator windows",
    
    // Types of color blindness
    "protanopia simulator",
    "deuteranopia simulator",
    "tritanopia simulator",
    "protanomaly simulator",
    "deuteranomaly simulator",
    "tritanomaly simulator",
    "achromatopsia simulator",
    "red green color blindness simulator",
    "blue yellow color blindness simulator",
    
    // Accessibility terms
    "accessibility color checker",
    "color accessibility tool",
    "accessible design tool",
    "color vision deficiency simulator",
    "inclusive design tool",
    "accessibility testing tool",
    "wcag color compliance",
    
    // Design and development
    "design accessibility testing",
    "ui accessibility checker",
    "web accessibility color tool",
    "color contrast checker",
    "accessible color palette",
    "inclusive color design",
    "barrier-free design tool",
    
    // Professional use cases
    "graphic design accessibility",
    "web design color blindness",
    "ui ux accessibility testing",
    "brand color accessibility",
    "logo accessibility testing",
    "website accessibility checker",
    
    // Image testing
    "image accessibility testing",
    "photo color blindness test",
    "design color blindness check",
    "visual accessibility testing",
    "color perception testing",
    "image color analysis",
    
    // Educational terms
    "color blindness awareness",
    "color vision education",
    "accessibility education tool",
    "color perception learning",
    "inclusive design education",
    "accessibility training tool",
    
    // Industry specific
    "medical color blindness test",
    "educational accessibility tool",
    "corporate accessibility testing",
    "government accessibility compliance",
    "e-commerce accessibility",
    "digital accessibility tool",
    
    // Technical terms
    "color vision simulation",
    "chromatic vision simulator",
    "color perception filter",
    "visual impairment simulator",
    "color deficiency testing",
    "dichromatic vision simulator",
    
    // Alternative tools
    "color blindness glasses",
    "enchroma simulator",
    "color vision correction",
    "color blindness aid",
    "assistive color technology",
    
    // Workflow integration
    "design workflow accessibility",
    "development accessibility testing",
    "qa accessibility testing",
    "user testing accessibility",
    "accessibility audit tool",
    "compliance testing tool",
    
    // Device compatibility
    "mobile accessibility testing",
    "tablet color blindness test",
    "cross-platform accessibility",
    "responsive design accessibility",
    "device-agnostic testing",
    
    // Standards and compliance
    "ada compliance color testing",
    "section 508 color compliance",
    "wcag 2.1 color guidelines",
    "accessibility standards testing",
    "legal compliance color tool",
    
    // User experience
    "inclusive user experience",
    "accessible ux design",
    "universal design tool",
    "user-centered accessibility",
    "empathy design tool",
    "inclusive interface design"
  ].join(", "),
  
  openGraph: {
    title: "Color Blindness Simulator | Online Tool for Images and Design Testing",
    description: "Free online color blindness simulator for testing images and designs. Upload images or test colors to see how they appear to people with various types of color vision deficiency. Essential accessibility tool for designers.",
    type: "website",
    locale: "en_US",
    siteName: "Color Blindness Simulator",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Color Blindness Simulator Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Color Blindness Simulator | Online Testing Tool for Designers",
    description: "Free online color blindness simulator tool to test colors and images for accessibility. Upload images to see how they appear to people with color vision deficiencies.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/color-blindness-simulator",
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
    'color-blindness-types': 'Protanopia, Deuteranopia, Tritanopia, Protanomaly, Deuteranomaly, Tritanomaly, Achromatopsia',
    'accessibility-standards': 'WCAG 2.1, ADA, Section 508 compliance',
    'target-users': 'Designers, Developers, UX professionals, Accessibility specialists',
    'use-cases': 'Design testing, Image accessibility, UI validation, Brand compliance',
    'tool-features': 'Image upload, Color testing, Real-time simulation, Privacy-focused',
    'supported-formats': 'All image formats, HEX colors, RGB values',
    'prevalence-data': '8% of men, 0.5% of women affected by color blindness',
    'simulation-accuracy': 'Scientific color transformation matrices',
    'privacy-protection': 'Client-side processing, no server uploads',
    'device-compatibility': 'All browsers, mobile-friendly, no installation required',
  }
};

export default function ColorBlindnessSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
