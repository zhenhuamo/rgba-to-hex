import ToolSeoLayout from "@/components/seo/ToolSeoLayout";

const toolPage = {
  name: 'Color Palette Generator',
  description: 'Create harmonious color schemes instantly with our online color palette generator. Find perfect color combinations for your design projects.',
  path: '/tools/palette-generator',
};

const faqItems = [
  { question: 'How many colors can I generate in one palette?', answer: 'Our color palette generator allows you to create palettes with 2 to 12 colors. You can generate 6-color palettes, 7-color schemes, 8-color combinations, or even 10-color collections, making it perfect for various design needs.' },
  { question: 'Can I generate a color palette from my own image?', answer: 'Yes! You can upload any image (JPG, PNG, or WebP format) and our tool will automatically extract a harmonious color palette. You can also fine-tune the colors by dragging the sample points to different areas of your image.' },
  { question: 'How does the two-color palette generator work?', answer: 'Starting with two colors, our algorithm creates a complete palette using color theory principles. It generates complementary colors, analogous colors, and other harmonious combinations based on the color wheel relationships.' },
  { question: 'Is this color palette generator free to use?', answer: 'Yes, our color palette generator is completely free to use. You can generate unlimited color palettes from images, create custom schemes, and export your colors without any cost or registration required.' },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
