import ToolSeoLayout from "@/components/seo/ToolSeoLayout";

const toolPage = {
  name: 'HSL to HEX Converter',
  description: 'Convert HSL colors to HEX format instantly with our free online HSL to HEX converter. Create color schemes and export CSS-ready hexadecimal values with real-time preview.',
  path: '/tools/hsl-to-hex',
};

const faqItems = [
  { question: 'Why use HSL instead of direct HEX values?', answer: "HSL (Hue, Saturation, Lightness) is more intuitive for creating color schemes and adjusting colors. It's easier to create harmonious variations by simply adjusting saturation or lightness while keeping the same hue. Once you've found the perfect color in HSL, converting to HEX makes it compatible with all CSS contexts and color requirements." },
  { question: 'How does HSL compare to other color models?', answer: 'Compared to other color models, RGB/HEX is more technical and less intuitive for design adjustments, HSL is intuitive for creating color variations and schemes, HSV/HSB is similar to HSL but with brightness instead of lightness, and CMYK is print-focused and not ideal for web design.' },
  { question: 'Can HSL represent all colors that HEX can?', answer: 'Yes, both the HSL and HEX color models can represent the same range of colors in the sRGB color space, which is the standard for web design. However, neither can represent colors outside the sRGB gamut. The HSL model simply provides a more intuitive way to think about and manipulate these colors.' },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
