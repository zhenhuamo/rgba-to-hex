import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EyeDropper - Pick Colors from Anywhere on Your Screen',
  description: 'A simple tool to pick colors from anywhere on your screen. Get HEX and RGB values with a single click.',
  openGraph: {
    title: 'EyeDropper Color Picker Tool',
    description: 'Pick colors from anywhere on your screen with this simple EyeDropper tool.',
    type: 'website',
  },
};

export default function ColorPickerToolLayout({
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