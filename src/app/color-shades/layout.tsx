import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Shades - Professional Color Palettes and Hex Codes',
  description: 'Explore beautiful color shades and palettes with hex codes, RGB values, and color names. Perfect for designers and developers.',
  keywords: 'color shades, color palette, hex codes, color names, design colors',
};

export default function ColorShadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {children}
    </div>
  );
}
