import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional EyeDropper Tool Online - Instant Color Picker | Free Screen Color Sampling',
  description: 'Advanced online eyedropper tool for designers and developers. Pick colors from anywhere on screen with pixel-perfect accuracy. Get HEX, RGB, HSL, OKLCH codes instantly. No installation required - works in Chrome, Edge browsers.',
  keywords: [
    'eyedropper',
    'eyedropper tool',
    'online eyedropper',
    'instant eyedropper',
    'colorpick eyedropper',
    'color picker eyedropper',
    'eyedropper chrome extension alternative',
    'screen color picker',
    'color dropper',
    'hex color picker',
    'rgb color picker',
    'web color picker',
    'design color tools',
    'color extraction tool',
    'browser eyedropper',
    'professional color picker',
    'color sampling tool',
    'digital color picker',
    'color picker online',
    'eyedropper api',
    'color picker tool',
    'color picker web app',
    'free eyedropper',
    'color picker no download'
  ],
  openGraph: {
    title: 'Professional EyeDropper Tool Online - Instant Color Picker',
    description: 'Advanced online eyedropper tool for designers and developers. Pick colors from anywhere on screen with pixel-perfect accuracy. Get HEX, RGB, HSL, OKLCH codes instantly.',
    type: 'website',
    images: [
      {
        url: '/images/eyedropper-tool-preview.png',
        width: 1200,
        height: 630,
        alt: 'Professional EyeDropper Tool - Online Color Picker with Multiple Formats'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional EyeDropper Tool Online - Instant Color Picker',
    description: 'Advanced online eyedropper tool for designers and developers. Pick colors from screen with pixel-perfect accuracy. No installation required.',
    images: ['/images/eyedropper-tool-preview.png']
  },
  alternates: {
    canonical: '/tools/eyedropper-tool'
  }
};

export default function EyeDropperToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tool-layout">
      {children}
    </div>
  );
}
