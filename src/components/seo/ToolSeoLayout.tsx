import JsonLd from '@/components/seo/JsonLd';
import InternalLinkSection from '@/components/seo/InternalLinkSection';
import { getToolRelatedLinkGroups } from '@/lib/seo/internalLinks';
import { buildWebApplicationSchema, buildBreadcrumbSchema, buildFaqSchema, type FaqItem } from '@/lib/seo/schema';

type ToolSeoLayoutProps = {
  name: string;
  description: string;
  path: string;
  faqItems?: ReadonlyArray<FaqItem>;
  children: React.ReactNode;
};

export default function ToolSeoLayout({
  name,
  description,
  path,
  faqItems,
  children,
}: ToolSeoLayoutProps) {
  const url = `https://rgbatohex.com${path}`;
  const idSuffix = path.replace(/[^a-z0-9]+/gi, '-');
  const relatedLinkGroups = getToolRelatedLinkGroups(path);

  return (
    <>
      <JsonLd id={`tool-${idSuffix}`} data={buildWebApplicationSchema({ name, description, url })} />
      <JsonLd
        id={`breadcrumb-${idSuffix}`}
        data={buildBreadcrumbSchema([
          { name: 'Home', item: 'https://rgbatohex.com/' },
          { name: 'Tools', item: 'https://rgbatohex.com/tools' },
          { name, item: url },
        ])}
      />
      {faqItems && faqItems.length > 0 ? <JsonLd id={`faq-${idSuffix}`} data={buildFaqSchema(faqItems)} /> : null}
      {children}
      <InternalLinkSection groups={relatedLinkGroups} title="Related Tool Paths" />
    </>
  );
}
