import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invertir Imagen Online - Herramienta Profesional para Invertir Colores | Gratis',
  description: 'Herramienta profesional para invertir imagen y invertir colores de una imagen online. Crea efectos negativos, invierte canales de color específicos, y aplica inversiones personalizadas. Gratis, seguro y sin descargas.',
  keywords: 'invertir imagen, invertir colores de una imagen, invertir colores imagen, herramienta invertir imagen, efecto negativo imagen, inversión de colores, invertir imagen online, imagen invertida, inversor de colores, herramienta inversión colores',
  openGraph: {
    title: 'Invertir Imagen Online - Herramienta Gratuita para Invertir Colores',
    description: 'Invierte los colores de tus imágenes con nuestra herramienta profesional online. Múltiples modos de inversión, efectos negativos y controles avanzados. 100% gratis y seguro.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: '/tools/es/invertir-imagen',
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

export default function InvertirImagenEsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
