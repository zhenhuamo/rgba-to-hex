import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invert Image Online - Professional Tool to Invert Image Online | Free & Secure',
  description: 'Professional tool to invert image online instantly. Invert image online with advanced features, create negative effects, and apply custom color inversions. Free online image inverter - no software download required.',
  keywords: 'invert image online, invert image, image inverter, invert image colors, image color inverter, invert colors image, online image inverter, inverted image, invert color image, invert colors of image, negative image effect, color inversion tool, free image inverter',
  openGraph: {
    title: 'Free Online Image Inverter - Invert Image Colors & Create Negative Effects',
    description: 'Professional image color inverter tool with multiple inversion modes. Invert image colors, create stunning negative effects, and apply custom color channel inversions. 100% free, secure, and works in your browser.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/tools/en/invert-image',
    languages: {
      'en': '/tools/en/invert-image',
      'es': '/tools/es/invertir-imagen',
      'pt': '/tools/pt/inverter-imagem',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InvertImageEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
