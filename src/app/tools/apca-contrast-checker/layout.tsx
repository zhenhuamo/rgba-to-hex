import ToolSeoLayout from '@/components/seo/ToolSeoLayout';

const toolPage = {
  name: 'APCA Contrast Checker',
  description:
    'Check APCA and WCAG contrast scores for text, buttons, muted labels, and dark surfaces in one accessibility workflow.',
  path: '/tools/apca-contrast-checker',
};

const faqItems = [
  {
    question: 'What does this APCA Contrast Checker measure?',
    answer:
      'Use this tool to compare APCA and WCAG output for the same color pair, then review how that pair performs across practical UI states.',
  },
  {
    question: 'Does this tool calculate live APCA results?',
    answer:
      'Yes. The current version calculates live WCAG and APCA results from HEX color input and updates the preview scenarios in real time.',
  },
] as const;

export default function ApcaContrastCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
