import type { Metadata } from 'next';
import { INVERT_IMAGE_TOOL_LANGUAGE_ALTERNATES } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  alternates: {
    canonical: '/tools/es/invertir-imagen/tool',
    languages: INVERT_IMAGE_TOOL_LANGUAGE_ALTERNATES,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InvertirImagenEsToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
