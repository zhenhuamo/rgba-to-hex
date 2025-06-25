import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Name Finder: HEX to Name, RGB to Name & CSS Color List',
  description: 'The ultimate color name finder tool. Convert HEX or RGB to a color name, browse the complete HTML & CSS color name list, and find the perfect name for any color. Support for multiple color systems including Pantone, Matplotlib, and web safe colors. Perfect for developers, designers, and digital artists.',
  keywords: [
    'color name finder',
    'color name',
    'colors name',
    'hex to color name',
    'rgb to color name',
    'hex code to color name',
    'color name to hex',
    'color name to rgb',
    'html color names',
    'css color names',
    'color name list',
    'all color name',
    'color namer',
    'color name search',
    'color name table',
    'skin color names',
    'blue color names',
    'green color names',
    'purple color names',
    'color name for red',
    'python color names',
    'matplotlib colors',
    'color name latex',
    'color name generator',
    'pantone color names',
    'web safe colors',
    'figma color names',
    'roblox color names',
    'color name converter',
    'color name to pantone',
    'color palette generator',
    'color name in english',
    'hex to color name converter',
    'rgb to color name converter',
    'color code converter',
    'web color names',
    'standard color names',
    'professional color names',
    'design color names',
    'color naming tool',
    'color identification',
    'color name finder tool',
    'color name database'
  ].join(', '),
  openGraph: {
    title: 'Color Name Finder: HEX to Name, RGB to Name & CSS Color List',
    description: 'The ultimate color name finder tool. Convert HEX or RGB to a color name, browse the complete HTML & CSS color name list, and find the perfect name for any color. Support for multiple color systems including Pantone, Matplotlib, and web safe colors.',
    type: 'website'
  }
};

export default function ColorNameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
