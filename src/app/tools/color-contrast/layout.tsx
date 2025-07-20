import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Contrast Checker | WCAG Accessibility Tool | Free Online Contrast Analyzer",
  description: "Free online color contrast checker tool for WCAG accessibility compliance. Test color combinations, check ADA requirements, and ensure web accessibility with our professional contrast checker. Supports HEX, RGB, RGBA formats with real-time analysis.",
  keywords: [
    // Primary keywords
    "color contrast checker",
    "wcag color contrast checker",
    "free color contrast checker",
    "online color contrast checker",
    "accessibility color checker",
    "contrast checker tool",
    "color accessibility checker",
    
    // Brand and tool specific
    "webaim color contrast checker",
    "adobe color contrast checker",
    "a11y color contrast checker",
    "website color contrast checker",
    "color palette contrast checker",
    "contrast color checker",
    
    // Format specific
    "color contrast checker rgb",
    "color contrast checker rgba",
    "color contrast checker hex",
    "color contrast checker with opacity",
    "color contrast checker transparency",
    
    // Standards and compliance
    "wcag contrast checker",
    "wcag 2.1 contrast checker",
    "ada color contrast checker",
    "section 508 contrast checker",
    "accessibility compliance checker",
    "color accessibility standards",
    
    // Professional use
    "web accessibility checker",
    "ui accessibility checker",
    "design accessibility tool",
    "developer accessibility tool",
    "accessibility testing tool",
    "contrast ratio checker",
    
    // Features
    "color contrast checker text",
    "color contrast checker background",
    "color blindness contrast checker",
    "visual impairment checker",
    "eyedropper contrast checker",
    "real-time contrast checker",
    
    // Browser and platform
    "color contrast checker chrome extension",
    "browser contrast checker",
    "web contrast checker",
    "mobile contrast checker",
    "responsive contrast checker",
    
    // Educational and learning
    "contrast checker tutorial",
    "wcag guidelines checker",
    "accessibility education tool",
    "color theory accessibility",
    "inclusive design checker",
    
    // Industry specific
    "graphic design contrast checker",
    "web design accessibility",
    "ui ux contrast checker",
    "digital accessibility tool",
    "frontend accessibility checker",
    
    // Comparison and alternatives
    "colors.co contrast checker",
    "contrast checker alternative",
    "best contrast checker",
    "professional contrast checker",
    "enterprise accessibility tool",
    
    // Technical terms
    "contrast ratio calculator",
    "luminance contrast checker",
    "color difference checker",
    "accessibility audit tool",
    "compliance testing tool",
    
    // Use cases
    "website accessibility testing",
    "app accessibility checker",
    "digital content accessibility",
    "brand color accessibility",
    "logo contrast checker",
    
    // Legal and compliance
    "ada compliance checker",
    "legal accessibility requirements",
    "disability compliance tool",
    "inclusive design standards",
    "accessibility law compliance",
    
    // Workflow integration
    "design system accessibility",
    "accessibility workflow tool",
    "qa accessibility testing",
    "automated accessibility check",
    "accessibility integration tool"
  ].join(", "),
  
  openGraph: {
    title: "Color Contrast Checker | WCAG Accessibility Tool | Free Online Contrast Analyzer",
    description: "Professional color contrast checker for web accessibility. Test WCAG compliance, ADA requirements, and color combinations for free. Supports HEX, RGB, RGBA with real-time analysis.",
    type: "website",
    locale: "en_US",
    siteName: "Color Contrast Checker",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Color Contrast Checker Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Color Contrast Checker | WCAG Accessibility Tool",
    description: "Free online color contrast checker for web accessibility. Test WCAG compliance, ADA requirements, and ensure your designs are accessible to all users.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/color-contrast",
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
    'accessibility-standards': 'WCAG 2.1 AA, WCAG 2.1 AAA, ADA, Section 508',
    'contrast-ratios': 'AA: 4.5:1 normal, 3:1 large text | AAA: 7:1 normal, 4.5:1 large text',
    'supported-formats': 'HEX, RGB, RGBA, HSL color codes',
    'target-users': 'Web designers, Developers, UX professionals, Accessibility specialists',
    'use-cases': 'Web accessibility, UI design, Brand compliance, Legal requirements',
    'tool-features': 'Real-time analysis, WCAG compliance, Color blindness simulation, Eyedropper',
    'compliance-levels': 'WCAG 2.1 Level AA and AAA compliance checking',
    'visual-impairments': 'Protanopia, Deuteranopia, Tritanopia, Low vision support',
    'professional-grade': 'Enterprise-ready, Accurate calculations, Detailed reporting',
    'integration-ready': 'Embeddable, API-friendly, Workflow compatible',
  }
};

export default function ColorContrastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
