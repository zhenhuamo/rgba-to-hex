import { Metadata } from 'next';
import { INVERT_IMAGE_LANGUAGE_ALTERNATES } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: 'Inverter Imagem Online - Ferramenta Profissional para Inverter Imagem Online | Grátis',
  description: 'Ferramenta profissional para inverter imagem online instantaneamente. Inverter imagem online com recursos avançados, crie efeitos negativos e aplique inversões personalizadas. Grátis e sem downloads necessários.',
  keywords: 'inverter imagem online, inverter imagem, inverter cores imagem, ferramenta inverter imagem, efeito negativo imagem, inversão de cores, imagem invertida, inversor de cores, ferramenta inversão cores online, inverter cores de imagem',
  openGraph: {
    title: 'Inverter Imagem Online - Ferramenta Gratuita para Inversão de Cores',
    description: 'Inverta cores de suas imagens com nossa ferramenta profissional online. Múltiplos modos de inversão, efeitos negativos e controles avançados. 100% grátis e seguro.',
    type: 'website',
    locale: 'pt_BR',
  },
  alternates: {
    canonical: '/tools/pt/inverter-imagem',
    languages: INVERT_IMAGE_LANGUAGE_ALTERNATES,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InverterImagemPtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
