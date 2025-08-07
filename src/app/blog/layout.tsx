import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Color Tools Blog - Professional Guides & Tutorials | RGBA to HEX',
  description: 'Discover professional guides, advanced techniques, and expert insights about color conversion tools. Master RGBA to HEX conversion, color theory, and design workflows.',
  keywords: 'color tools blog, RGBA to HEX, color conversion, web development, design tutorials, color theory, accessibility, professional guides',
  alternates: {
    canonical: 'https://rgbatohex.com/blog'
  },
  openGraph: {
    title: 'Color Tools Blog - Professional Guides & Tutorials',
    description: 'Master color conversion tools with our comprehensive guides and tutorials. Expert insights for developers and designers.',
    url: 'https://rgbatohex.com/blog',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Tools Blog - Professional Guides & Tutorials',
    description: 'Master color conversion tools with our comprehensive guides and tutorials.'
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
