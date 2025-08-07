import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEX to RGBA Converter - Free Online Color Conversion Tool',
  description: 'Convert HEX color codes to RGBA format instantly. Professional HEX to RGBA converter with transparency support, real-time preview, and accurate color conversion for web developers and designers.',
  keywords: [
    'hex to rgba',
    'hex to rgba converter',
    'convert hex to rgba',
    'hex to rgba conversion',
    'hex to rgba tool',
    'hexadecimal to rgba',
    'color converter',
    'rgba converter',
    'hex color converter',
    'css color converter',
    'web color tools',
    'color format converter',
    'transparency converter',
    'alpha channel converter',
    'hex rgba conversion',
    'online color converter',
    'free hex to rgba',
    'hex to rgba css',
    'hex to rgba javascript',
    'color code converter'
  ],
  authors: [{ name: 'RGBA to HEX' }],
  creator: 'RGBA to HEX',
  publisher: 'RGBA to HEX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rgbatohex.com'),
  alternates: {
    canonical: 'https://rgbatohex.com/tools/hex-to-rgba',
  },
  openGraph: {
    title: 'HEX to RGBA Converter - Free Online Color Conversion Tool',
    description: 'Convert HEX color codes to RGBA format instantly. Professional HEX to RGBA converter with transparency support, real-time preview, and accurate color conversion for web developers and designers.',
    url: 'https://rgbatohex.com/tools/hex-to-rgba',
    siteName: 'RGBA to HEX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://rgbatohex.com/og-hex-to-rgba.png',
        width: 1200,
        height: 630,
        alt: 'HEX to RGBA Converter - Convert hexadecimal colors to RGBA format',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEX to RGBA Converter - Free Online Color Conversion Tool',
    description: 'Convert HEX color codes to RGBA format instantly. Professional HEX to RGBA converter with transparency support and real-time preview.',
    images: ['https://rgbatohex.com/og-hex-to-rgba.png'],
    creator: '@rgbatohex',
    site: '@rgbatohex',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Web Development Tools',
  other: {
    'application-name': 'HEX to RGBA Converter',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
    'color-scheme': 'light dark',
    'format-detection': 'telephone=no',
  },
};

export default function HexToRgbaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
