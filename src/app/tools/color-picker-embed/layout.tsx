import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EyeDropper Color Picker Tool | Pick Colors from Screen | Free Online Color Picker',
  description: 'Free online EyeDropper color picker tool to pick colors from anywhere on your screen. Get HEX, RGB color values instantly with our browser-based color picker. Perfect for designers, developers, and digital artists.',
  keywords: [
    // Primary keywords
    "eyedropper color picker",
    "color picker tool",
    "pick colors from screen",
    "online color picker",
    "free color picker",
    "screen color picker",
    "color dropper tool",

    // Browser specific
    "chrome color picker",
    "browser color picker",
    "web color picker",
    "html5 color picker",
    "javascript color picker",
    "eyedropper api",

    // Format specific
    "hex color picker",
    "rgb color picker",
    "color code picker",
    "color value picker",
    "digital color picker",
    "web color dropper",

    // Professional use
    "designer color picker",
    "developer color picker",
    "graphic design color tool",
    "web design color picker",
    "ui design color tool",
    "frontend color picker",

    // Features
    "color picker with history",
    "color picker copy code",
    "instant color picker",
    "real-time color picker",
    "accurate color picker",
    "professional color picker",

    // Use cases
    "website color picker",
    "image color picker",
    "design color picker",
    "color matching tool",
    "color sampling tool",
    "color extraction tool",

    // Technical terms
    "eyedropper api tool",
    "browser eyedropper",
    "native color picker",
    "system color picker",
    "desktop color picker",
    "screen color sampling",

    // Alternative terms
    "color grabber",
    "color selector",
    "color capture tool",
    "color identifier",
    "color detector",
    "pixel color picker",

    // Workflow terms
    "design workflow tool",
    "color workflow",
    "creative tool",
    "productivity tool",
    "design utility",
    "color management tool"
  ].join(", "),

  openGraph: {
    title: 'EyeDropper Color Picker Tool | Pick Colors from Screen',
    description: 'Free online EyeDropper color picker tool to pick colors from anywhere on your screen. Get HEX, RGB color values instantly with our browser-based color picker.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EyeDropper Color Picker',
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'EyeDropper Color Picker Tool',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'EyeDropper Color Picker Tool | Pick Colors from Screen',
    description: 'Free online color picker tool using EyeDropper API. Pick colors from anywhere on your screen and get HEX, RGB values instantly.',
    images: ['/favicon/favicon-96x96.png'],
  },

  alternates: {
    canonical: '/tools/color-picker-embed',
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
    'tool-type': 'EyeDropper API Color Picker',
    'supported-browsers': 'Chrome, Edge, Safari (latest versions)',
    'color-formats': 'HEX, RGB color codes',
    'target-users': 'Designers, Developers, Digital artists, UI/UX professionals',
    'use-cases': 'Color matching, Design inspiration, Brand color extraction, Web development',
    'tool-features': 'Screen color picking, Color history, Copy to clipboard, Real-time preview',
    'api-technology': 'EyeDropper API, Clipboard API, Modern browser features',
    'privacy-focused': 'No data collection, Client-side processing, Secure color picking',
    'accessibility': 'Free, No registration, Cross-platform, Mobile-friendly',
    'workflow-integration': 'Design tools, Development workflow, Creative projects',
  }
};

export default function ColorPickerEmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
