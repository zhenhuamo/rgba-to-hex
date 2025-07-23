import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Gradient Generator | Create Beautiful Linear & Radial Gradients | Free Online Tool",
  description: "Free online CSS gradient generator tool. Create beautiful linear and radial gradients for your websites, apps, and UI designs. Supports HEX, RGB, RGBA, and Tailwind CSS formats with real-time preview and one-click code copying.",
  keywords: [
    // Primary keywords
    "gradient generator",
    "css gradient generator",
    "gradient color generator",
    "online gradient generator",
    "free gradient generator",
    "gradient tool",
    "gradient maker",
    "gradient creator",
    "web gradient generator",
    "gradient background generator",
    
    // Gradient types
    "linear gradient generator",
    "radial gradient generator",
    "linear gradient css",
    "radial gradient css",
    "css linear gradient",
    "css radial gradient",
    "gradient background",
    "gradient colors",
    "color gradient",
    "gradient effects",
    
    // CSS and web development
    "css gradient",
    "css background gradient",
    "css gradient background",
    "gradient css code",
    "css gradient tool",
    "css gradient maker",
    "css gradient creator",
    "web gradients",
    "html gradient",
    "gradient css generator",
    
    // Tailwind CSS specific
    "tailwind gradient",
    "tailwind css gradient",
    "tailwind gradient generator",
    "tailwind background gradient",
    "tailwind linear gradient",
    "tailwind radial gradient",
    "tailwind gradient classes",
    "tailwind css gradient tool",
    
    // Color formats
    "hex gradient",
    "rgb gradient",
    "rgba gradient",
    "hex color gradient",
    "rgb color gradient",
    "rgba color gradient",
    "gradient hex codes",
    "gradient rgb values",
    
    // Design and UI
    "ui gradient",
    "gradient design",
    "gradient backgrounds",
    "gradient ui design",
    "gradient web design",
    "gradient button",
    "gradient header",
    "gradient card",
    "gradient text",
    "gradient overlay",
    
    // Professional use
    "web design gradients",
    "ui ux gradients",
    "graphic design gradients",
    "digital design gradients",
    "modern gradients",
    "professional gradients",
    "gradient inspiration",
    "gradient presets",
    
    // Features
    "gradient preview",
    "gradient code",
    "gradient copy",
    "gradient save",
    "gradient export",
    "custom gradient",
    "gradient editor",
    "gradient builder",
    "gradient studio",
    "gradient workshop",
    
    // Applications
    "website gradient",
    "app gradient",
    "mobile gradient",
    "responsive gradient",
    "gradient animation",
    "gradient transition",
    "gradient hover effect",
    "gradient button effect",
    
    // Technical terms
    "color stops",
    "gradient angle",
    "gradient direction",
    "gradient position",
    "gradient opacity",
    "gradient transparency",
    "gradient blend",
    "gradient smooth",
    
    // Specific use cases
    "hero gradient",
    "background gradient",
    "banner gradient",
    "section gradient",
    "div gradient",
    "container gradient",
    "page gradient",
    "full screen gradient"
  ],
  
  openGraph: {
    title: "CSS Gradient Generator | Create Beautiful Linear & Radial Gradients",
    description: "Free online CSS gradient generator tool. Create beautiful linear and radial gradients for your websites, apps, and UI designs. Supports HEX, RGB, RGBA, and Tailwind CSS formats with real-time preview.",
    type: "website",
    locale: "en_US",
    siteName: "CSS Gradient Generator",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'CSS Gradient Generator - Create Beautiful Web Gradients',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CSS Gradient Generator | Create Beautiful Web Gradients",
    description: "Free online tool to create beautiful CSS gradients for your projects. Linear & radial gradients with Tailwind CSS support and real-time preview.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/gradient-generator",
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
    'tool-type': 'CSS Gradient Generator and Color Gradient Creator',
    'gradient-types': 'Linear gradients, Radial gradients, Multi-color gradients',
    'output-formats': 'CSS, HEX, RGB, RGBA, Tailwind CSS classes',
    'target-users': 'Web designers, UI/UX designers, Front-end developers, CSS developers, Digital artists',
    'use-cases': 'Website backgrounds, UI design, Button effects, Header designs, Card backgrounds, Hero sections',
    'tool-features': 'Real-time preview, One-click copy, Gradient presets, Save custom gradients, Tailwind CSS support',
    'frameworks': 'Tailwind CSS, Bootstrap, Pure CSS, Sass, Less',
    'design-applications': 'Web design, Mobile app design, UI design, Graphic design, Digital art',
    'gradient-features': 'Color stops, Angle control, Position control, Opacity settings, Multiple colors',
    'browser-support': 'Modern browsers, Cross-browser compatibility, Vendor prefixes',
    'accessibility': 'Free, No registration, Browser-based, Instant generation, Copy-paste ready',
    'professional-features': 'Gradient library, Custom presets, Export options, Code optimization'
  }
};

export default function GradientGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
