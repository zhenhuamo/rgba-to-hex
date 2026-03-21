import type { Metadata } from 'next'
import ToolSeoLayout from '@/components/seo/ToolSeoLayout'

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

const toolPage = {
  name: 'RGB to CMYK Converter',
  description: 'Convert RGB colors to CMYK values instantly with our free online RGB to CMYK converter. Perfect for print design and color matching.',
  path: '/tools/rgb-to-cmyk',
};

const faqItems = [
  { question: 'Why choose an online RGB to CMYK converter?', answer: "Online RGB to CMYK conversion offers immediate results without requiring expensive software installations. Our tool provides professional-grade accuracy, real-time preview capabilities, and supports multiple file formats. It's perfect for quick conversions while maintaining the high standards required for professional print production." },
  { question: 'How accurate is the RGB to CMYK conversion?', answer: 'Our RGB to CMYK converter employs industry-standard color management systems and conversion algorithms to ensure maximum color accuracy. We use precise mathematical formulas and professional color profiles to maintain color fidelity throughout the conversion process. The real-time preview feature allows you to verify the results instantly.' },
  { question: 'What file formats support RGB to CMYK conversion?', answer: 'Our tool supports comprehensive format conversion, including PDF documents, image formats such as JPG, PNG, and TIFF, design software color values, web design color codes, vector graphics formats, and print-ready file preparation.' },
  { question: 'What is the mathematical formula for RGB to CMYK conversion?', answer: 'RGB to CMYK conversion follows a precise mathematical process. Our RGB to CMYK converter first normalizes RGB values (0-255) to decimal range (0-1), then calculates the Key (K) component as K = 1 - max(R, G, B). The CMY values are derived using the formula: C = (1-R-K)/(1-K), ensuring accurate RGB to CMYK transformation for professional printing applications.' },
] as const;

export default function RgbToCmykLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  )
}
