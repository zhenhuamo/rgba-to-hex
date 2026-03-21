import ToolSeoLayout from "@/components/seo/ToolSeoLayout";

const toolPage = {
  name: 'RGB to HSL Converter',
  description: 'Convert RGB colors to HSL format online with real-time preview. Great for designers and developers who need intuitive control over hue, saturation, and lightness.',
  path: '/tools/rgb-to-hsl',
};

const faqItems = [
  { question: 'What is the RGB to HSL conversion process?', answer: 'RGB to HSL conversion transforms RGB color values into the HSL color space. This process involves converting the RGB values (0-255) into normalized values and then calculating Hue (0-360°), Saturation (0-100%), and Lightness (0-100%) using specific mathematical formulas.' },
  { question: 'Why convert from RGB to HSL?', answer: 'Converting RGB to HSL offers several advantages: more intuitive color manipulation with separate hue, saturation, and lightness controls, easier creation of color variations and schemes, better for creating smooth color transitions and gradients, more natural representation of color relationships, and simplified color harmony calculations.' },
  { question: 'What are the practical applications?', answer: 'RGB to HSL conversion is widely used in web development for dynamic color manipulation, design software for color adjustments, digital art tools for color selection, image processing applications, and data visualization systems.' },
  { question: 'How accurate is the conversion?', answer: 'Our RGB to HSL converter uses precise mathematical formulas to ensure 100% accurate color conversion. The tool implements standard color space transformation algorithms used in professional software and follows web standards for color representation.' },
] as const;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSeoLayout name={toolPage.name} description={toolPage.description} path={toolPage.path} faqItems={faqItems}>
      {children}
    </ToolSeoLayout>
  );
}
