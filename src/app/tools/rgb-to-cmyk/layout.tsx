import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RGB to CMYK Converter - Free Online Color Conversion Tool',
  description: 'Convert RGB colors to CMYK values instantly with our free online RGB to CMYK converter. Perfect for print design and color matching.',
  keywords: 'RGB to CMYK, color converter, RGB CMYK conversion, print colors, color tool, CMYK calculator',
  alternates: {
    canonical: 'https://rgbatohex.com/tools/rgb-to-cmyk'
  },
  openGraph: {
    title: 'RGB to CMYK Converter - Free Online Tool',
    description: 'Convert RGB colors to CMYK values instantly. Perfect for print design and color matching.',
    url: 'https://rgbatohex.com/tools/rgb-to-cmyk',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'RGB to CMYK Converter',
    description: 'Convert RGB colors to CMYK values instantly with our free online tool.'
  }
}

export default function RgbToCmykLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
