import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minecraft Color Codes – Free Generator, § Chat Codes, Hex in JSON, Gradient, Signs (Java & Bedrock Guide)',
  description:
    'Free Minecraft color codes generator and complete guide: legacy § chat codes, formatting, JSON hex colors (Java 1.16+), gradient text, sign/MOTD examples, and Java vs Bedrock differences.',
  keywords:
    'minecraft color codes, color codes minecraft, minecraft color codes generator, § minecraft color codes, minecraft color codes symbol, minecraft gradient color codes, minecraft chat color codes, minecraft bedrock color codes, minecraft chat colors hex codes, minecraft sign color codes, color codes minecraft java, minecraft rgb color codes',
  openGraph: {
    title: 'Minecraft Color Codes – Free Generator, § Chat Codes, Hex in JSON, Gradient, Signs',
    description:
      'Generate and copy Minecraft color codes. Learn legacy § codes, JSON hex (1.16+), gradient text, and usage on chat, signs, and MOTD. Java vs Bedrock explained.',
    type: 'website',
    url: 'https://rgbatohex.com/tools/minecraft-color-codes',
  },
  alternates: {
    canonical: 'https://rgbatohex.com/tools/minecraft-color-codes',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do hex colors work in chat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Hex colors work in JSON text components on Java 1.16+. Chat itself supports only 16 legacy colors (\u00A70–\u00A7f)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I type the § symbol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Windows: Alt+0167 (numpad). macOS: Option+6. Linux: Ctrl+Shift+U then 00a7 and Enter. Many plugins accept & as an alias for §."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Java and Bedrock color codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Java supports legacy § color/format codes everywhere and hex in JSON (1.16+). Bedrock handles colors differently and may not support Java's JSON/hex features in the same way."
        }
      }
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Tools", "item": "https://rgbatohex.com/tools" },
      { "@type": "ListItem", "position": 2, "name": "Minecraft Color Codes", "item": "https://rgbatohex.com/tools/minecraft-color-codes" }
    ]
  };

  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
