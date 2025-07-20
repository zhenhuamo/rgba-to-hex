import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool | Pigment-Based Mixing",
  description: "Free online color mixer tool to blend RGB, HEX colors for your design projects. Create perfect color combinations with our advanced pigment-based color mixer that simulates real paint mixing. Perfect for designers, artists, and educators.",
  keywords: [
    // Primary keywords
    "color mixer",
    "color mixer online",
    "color mixer tool",
    "online color mixer",
    "free color mixer",
    "color blender",
    "color mixing tool",
    
    // Format specific
    "color mixer hex",
    "color mixer rgb",
    "hex color mixer",
    "rgb color mixer",
    "color mixer chart",
    "color palette mixer",
    
    // Educational and fun
    "color mixer game",
    "color mixer for kids",
    "educational color mixer",
    "interactive color mixer",
    "color theory tool",
    "color learning tool",
    
    // Professional use
    "color mixer photoshop",
    "professional color mixer",
    "design color mixer",
    "graphic design color tool",
    "web design color mixer",
    "digital color mixer",
    
    // Image related
    "color mixer online from image",
    "image color mixer",
    "extract colors from image",
    "photo color mixer",
    "color picker from image",
    
    // Technical terms
    "pigment based color mixing",
    "subtractive color mixing",
    "additive color mixing",
    "color blending algorithm",
    "realistic color mixing",
    "paint mixing simulator",
    
    // Art and creativity
    "digital art color mixer",
    "painting color mixer",
    "artist color tool",
    "creative color mixer",
    "art color blender",
    "illustration color tool",
    
    // Specific color combinations
    "red blue color mix",
    "yellow blue color mix",
    "primary color mixer",
    "secondary color mixer",
    "tertiary color mixer",
    "complementary color mixer",
    
    // Brand and marketing
    "brand color mixer",
    "logo color mixer",
    "marketing color tool",
    "corporate color mixer",
    "color scheme generator",
    "palette creator",
    
    // Web development
    "css color mixer",
    "html color mixer",
    "web color blender",
    "frontend color tool",
    "ui color mixer",
    "responsive color tool",
    
    // Mobile and accessibility
    "mobile color mixer",
    "tablet color mixer",
    "accessible color mixer",
    "color blind friendly mixer",
    "inclusive color tool",
    
    // Comparison terms
    "color mixer machine price",
    "physical color mixer",
    "digital vs physical mixing",
    "online vs offline mixer",
    "free vs paid color tools",
    
    // Educational institutions
    "school color mixer",
    "classroom color tool",
    "teacher color mixer",
    "student color tool",
    "educational technology",
    
    // Industry specific
    "interior design color mixer",
    "fashion color mixer",
    "textile color tool",
    "printing color mixer",
    "packaging color tool",
    
    // Advanced features
    "color ratio mixer",
    "proportional color mixing",
    "weighted color blending",
    "multi-color mixer",
    "complex color combinations",
    
    // Export and sharing
    "color mixer export",
    "save color combinations",
    "share color palette",
    "download color mix",
    "color code generator",
    
    // Science and theory
    "color science tool",
    "color theory mixer",
    "chromatic mixing",
    "color wheel mixer",
    "hue saturation mixer",
    
    // Workflow integration
    "design workflow color tool",
    "creative workflow mixer",
    "project color management",
    "team color collaboration",
    "design system colors"
  ].join(", "),
  
  openGraph: {
    title: "Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool",
    description: "Create custom color combinations with our free online color mixer. Mix RGB and HEX colors with realistic pigment-based blending, perfect for designers, artists, and educators.",
    type: "website",
    locale: "en_US",
    siteName: "Color Mixer Online",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Color Mixer Online Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Color Mixer Online | Mix & Blend Colors with Free RGB, HEX Color Tool",
    description: "Create custom color combinations with our free online color mixer. Perfect for designers, artists, and educators with realistic pigment-based mixing.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/color-mixer",
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
    'mixing-method': 'Pigment-based subtractive color mixing',
    'supported-formats': 'RGB, HEX, HSL color codes',
    'target-users': 'Designers, Artists, Educators, Students, Developers',
    'use-cases': 'Web design, Graphic design, Digital art, Education, Color theory',
    'tool-features': 'Real-time mixing, Ratio controls, Multiple colors, Export options',
    'color-theory': 'Primary, Secondary, Tertiary color combinations',
    'realistic-mixing': 'Simulates physical paint and pigment interactions',
    'educational-value': 'Perfect for teaching color theory and art fundamentals',
    'professional-grade': 'Suitable for commercial design and artistic projects',
    'accessibility': 'Free, no registration, works on all devices',
  }
};

export default function ColorMixerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
