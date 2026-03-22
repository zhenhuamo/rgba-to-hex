import ToolSeoLayout from '@/components/seo/ToolSeoLayout';

const toolPage = {
  name: 'OKLCH Scale Generator',
  description:
    'Generate smooth OKLCH color scales from a base color. Export 50-950 palettes to HEX, CSS variables, Tailwind, and design tokens.',
  path: '/tools/oklch-scale-generator',
};

const faqItems = [
  {
    question: 'Why use OKLCH for color scales?',
    answer:
      'OKLCH is closer to perceptual color behavior, which makes it easier to create smoother ramps across light and dark steps without the strange jumps you often get in RGB or HSL.',
  },
  {
    question: 'What export formats are available?',
    answer:
      'This first release exports CSS variables, a Tailwind-style colors object, and a JSON token structure so the generated scale can move directly into UI work.',
  },
] as const;

export default function OklchScaleGeneratorLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
