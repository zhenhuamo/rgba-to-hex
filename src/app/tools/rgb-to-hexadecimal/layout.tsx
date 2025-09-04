import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RGB to Hexadecimal Converter | Free Online Color Conversion Tool',
  description: 'Convert RGB color values to hexadecimal format instantly with our free online RGB to hexadecimal converter. Perfect RGB to hexadecimal conversion for web developers, designers, and digital artists. Real-time RGB to hexadecimal preview included.',
  keywords: 'rgb to hexadecimal, rgb to hex converter, color converter, hexadecimal color codes, rgb converter, color conversion tool, web development colors, css colors, hex color generator, rgb color tool',
  openGraph: {
    title: 'RGB to Hexadecimal Converter | Free Online Color Conversion Tool',
    description: 'Convert RGB color values to hexadecimal format instantly with our free online RGB to hexadecimal converter. Perfect RGB to hexadecimal conversion for web developers, designers, and digital artists.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RGBA to HEX Converter',
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'RGB to Hexadecimal Converter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RGB to Hexadecimal Converter | Free Online Color Conversion Tool',
    description: 'Convert RGB color values to hexadecimal format instantly with our free online RGB to hexadecimal converter. Perfect RGB to hexadecimal conversion for web developers, designers, and digital artists.',
    images: ['/favicon/favicon-96x96.png'],
  },
  alternates: {
    canonical: 'https://rgbatohex.com/tools/rgb-to-hexadecimal',
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
};

export default function RGBToHexadecimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'RGB to Hexadecimal Converter',
            description: 'Free online RGB to hexadecimal tool to convert RGB color values to hexadecimal format with real-time preview',
            url: 'https://rgbatohex.com/tools/rgb-to-hexadecimal',
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Any',
            permissions: 'browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            featureList: [
              'RGB to Hexadecimal conversion',
              'Real-time color preview',
              'Color picker input',
              'Common colors reference table',
              'Copy to clipboard functionality',
              'Input validation',
              'Responsive design'
            ],
            author: {
              '@type': 'Organization',
              name: 'RGBA to HEX Converter',
              url: 'https://rgbatohex.com'
            },
            publisher: {
              '@type': 'Organization',
              name: 'RGBA to HEX Converter',
              url: 'https://rgbatohex.com'
            }
          }),
        }}
      />
    </>
  );
}
