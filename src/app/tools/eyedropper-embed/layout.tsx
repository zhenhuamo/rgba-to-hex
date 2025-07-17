import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EyeDropper Tool Embed - Color Picker Widget for Your Website',
  description: 'Embed our professional eyedropper tool on your website. Easy iframe integration for color picking functionality.',
  robots: {
    index: false,
    follow: true
  }
};

export default function EyeDropperEmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="embed-layout">
      {children}
    </div>
  );
}
