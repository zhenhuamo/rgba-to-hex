import ToolSeoLayout from '@/components/seo/ToolSeoLayout';

const toolPage = {
  name: 'Design Token Color Exporter',
  description:
    'Export color scales or semantic color roles to CSS variables, Tailwind config, and JSON tokens for real product workflows.',
  path: '/tools/design-token-color-exporter',
};

const faqItems = [
  {
    question: 'What can I export from this tool?',
    answer:
      'You can export either a 50-950 color scale or semantic color roles into CSS variables, Tailwind config fragments, and JSON tokens.',
  },
  {
    question: 'Can I import a 50-950 scale from the OKLCH generator?',
    answer:
      'Yes. The first release supports passing a generated OKLCH scale into this exporter through query state so you can continue into a token workflow without retyping values.',
  },
] as const;

export default function DesignTokenColorExporterLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
