import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unicode Font Generator | Convert Text to Stylish Fonts | Free Online Font Changer Tool",
  description: "Transform regular text into unique Unicode font styles with our free online Font Generator tool. Create fancy text, stylish fonts, aesthetic text for social media, design projects, and creative content. Over 30 font styles including script, bold, italic, circled, and decorative fonts.",
  keywords: [
    // Primary keywords
    "font generator",
    "unicode font generator",
    "font changer",
    "text font generator",
    "stylish font generator",
    "fancy font generator",
    "free font generator",
    "online font generator",
    "text to font converter",
    "font style generator",
    
    // Font styles and types
    "fancy text generator",
    "stylish fonts",
    "aesthetic fonts",
    "unicode fonts",
    "decorative fonts",
    "script fonts",
    "cursive fonts",
    "bold fonts",
    "italic fonts",
    "circled fonts",
    "squared fonts",
    "bubble fonts",
    "small caps fonts",
    "monospace fonts",
    "mathematical fonts",
    
    // Social media specific
    "instagram font generator",
    "facebook font generator",
    "twitter font generator",
    "tiktok font generator",
    "discord font generator",
    "whatsapp font generator",
    "social media fonts",
    "instagram bio fonts",
    "fancy text for instagram",
    "stylish text for social media",
    
    // Text effects and transformations
    "text converter",
    "text transformer",
    "text changer",
    "text style generator",
    "text effects",
    "text formatting",
    "unicode text converter",
    "special character generator",
    "symbol text generator",
    "creative text generator",
    
    // Specific font categories
    "serif fonts",
    "sans serif fonts",
    "script text",
    "fraktur fonts",
    "old english fonts",
    "superscript text",
    "subscript text",
    "strikethrough text",
    "underline text",
    "mirror text",
    "reverse text",
    
    // Applications and use cases
    "logo font generator",
    "brand font generator",
    "design fonts",
    "creative fonts",
    "artistic fonts",
    "professional fonts",
    "business fonts",
    "marketing fonts",
    "advertising fonts",
    "presentation fonts",
    
    // Technical terms
    "unicode characters",
    "special characters",
    "character encoding",
    "text symbols",
    "typography generator",
    "font styles",
    "character converter",
    "text manipulation",
    
    // Features
    "copy paste fonts",
    "emoji integration",
    "qr code generator",
    "text utilities",
    "font preview",
    "real time font conversion",
    "mobile font generator",
    "responsive font tool"
  ],
  
  openGraph: {
    title: "Unicode Font Generator | Convert Text to Stylish Fonts | Free Online Tool",
    description: "Transform regular text into stylish Unicode font styles for social media, design, and creative projects with our free online font generator tool. Over 30 font styles including fancy script, bold, italic, and decorative fonts.",
    type: "website",
    locale: "en_US",
    siteName: "Unicode Font Generator",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Unicode Font Generator - Stylish Text Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Unicode Font Generator | Transform Text with Stylish Unicode Fonts",
    description: "Create stylish text with over 30 Unicode font styles including fancy script, bold, italic, circled, and more - perfect for social media profiles and creative design.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/font-generator",
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
    'tool-type': 'Unicode Font Generator and Text Style Converter',
    'font-styles': '30+ styles including Script, Bold, Italic, Circled, Squared, Fraktur, Mathematical',
    'target-users': 'Social media users, Designers, Content creators, Marketers, Students, Artists',
    'use-cases': 'Social media posts, Instagram bios, Design projects, Branding, Creative content, Marketing materials',
    'tool-features': 'Real-time preview, One-click copy, Emoji integration, QR code generation, Text utilities',
    'platforms': 'Instagram, Facebook, Twitter, TikTok, Discord, WhatsApp, LinkedIn',
    'font-categories': 'Basic fonts, Decorative fonts, Mathematical fonts, Script fonts, Symbol fonts',
    'special-features': 'Smart emoji integration, QR code generator, Case converter, Text encryption, Password generator',
    'compatibility': 'Unicode standard, Cross-platform, Mobile responsive, No installation required',
    'applications': 'Social media enhancement, Logo design, Marketing materials, Creative projects, Educational content',
    'text-effects': 'Strikethrough, Mirror text, Parentheses, Dots, Dashes, Superscript, Subscript',
    'accessibility': 'Free, No registration, Browser-based, Instant conversion, Copy-paste ready'
  }
};

export default function FontGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
