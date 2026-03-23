import ToolSeoLayout from '@/components/seo/ToolSeoLayout';

const toolPage = {
  name: 'Accessible Palette Generator',
  description:
    'Generate accessible UI color roles from one base color, review WCAG and APCA scores, and move stable roles into your token workflow.',
  path: '/tools/accessible-palette-generator',
};

const faqItems = [
  {
    question: 'What does this accessible palette generator output?',
    answer:
      'The first release outputs practical UI roles for primary actions, surfaces, text, muted text, borders, and accents, then evaluates the most important combinations with WCAG and APCA.',
  },
  {
    question: 'Can I export the generated roles as tokens?',
    answer:
      'Yes. Once the palette is generated you can open the Design Token Color Exporter with the semantic role values prefilled for primary, surface, text, and border.',
  },
] as const;

export default function AccessiblePaletteGeneratorLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
