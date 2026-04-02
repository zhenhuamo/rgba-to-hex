import ToolSeoLayout from '@/components/seo/ToolSeoLayout';
import { metadata } from './metadata';
import LightDarkThemeGeneratorClient from './client';

export { metadata };

const faqItems = [
  {
    question: 'What does this light and dark theme generator create?',
    answer:
      'It takes one brand color and builds a complete light theme and dark theme, each with semantic UI roles — background, surface, primary, muted, border, and ring — ready to export as CSS variables, shadcn theme values, or JSON tokens.',
  },
  {
    question: 'How do I generate an accessible dark mode color palette from one brand color?',
    answer:
      'Paste a HEX brand color, let the generator assign semantic roles for both light and dark themes, then check the WCAG and APCA contrast diagnostics before copying the export. The validation step catches combinations that look fine visually but still fall short for body text or action elements.',
  },
  {
    question: 'Can I use this as a shadcn theme generator?',
    answer:
      'Yes. The export includes shadcn-compatible CSS variable blocks with `:root` and `.dark` selectors, plus Tailwind v4 `@theme inline` mappings — you can paste the output directly into your project without any renaming.',
  },
  {
    question: 'Does the generator check accessibility?',
    answer:
      'Yes. Key foreground-background pairs are validated against both WCAG contrast ratios and APCA contrast scores as part of the workflow, so you can catch contrast issues before the theme reaches production.',
  },
  {
    question: 'Can I export the generated theme into code?',
    answer:
      'Yes. Three export formats are available: Theme CSS for raw `:root` and `.dark` variable blocks, shadcn and Tailwind v4 compatible mappings for app-level theming, and JSON Tokens for design system pipelines.',
  },
  {
    question: 'Is the dark theme just an inversion of the light theme?',
    answer:
      'No. Light and dark roles are selected independently. Foreground colors, action states, muted surfaces, and ring values are all re-evaluated for dark mode rather than mechanically flipped from the light theme.',
  },
  {
    question: 'Who is this theme token generator for?',
    answer:
      'It is built for front-end developers, design engineers, indie makers, and design system teams who work with CSS variables, Tailwind, shadcn, or any semantic token workflow and need a fast path from one brand color to a shippable theme.',
  },
] as const;

export default function LightDarkThemeGeneratorPage() {
  return (
    <ToolSeoLayout
      name="Light & Dark Theme Generator"
      description="Paste one brand color and get a complete light and dark theme — semantic role assignments, accessible contrast validation, and export-ready output for CSS variables, Tailwind, shadcn, and JSON tokens."
      path="/tools/light-dark-theme-generator"
      faqItems={faqItems}
    >
      <LightDarkThemeGeneratorClient />
    </ToolSeoLayout>
  );
}
