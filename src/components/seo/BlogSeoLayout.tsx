import JsonLd from '@/components/seo/JsonLd';
import InternalLinkSection from '@/components/seo/InternalLinkSection';
import { getBlogRelatedLinkGroups } from '@/lib/seo/internalLinks';
import { buildBlogPostingSchema, buildBreadcrumbSchema } from '@/lib/seo/schema';

type BlogSeoLayoutProps = {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
};

export default function BlogSeoLayout({
  title,
  description,
  path,
  children,
}: BlogSeoLayoutProps) {
  const url = `https://rgbatohex.com${path}`;
  const relatedLinkGroups = getBlogRelatedLinkGroups(path);

  return (
    <>
      <JsonLd
        id={`blog-posting-${path.replace(/[^a-z0-9]+/gi, '-')}`}
        data={buildBlogPostingSchema({ title, description, url })}
      />
      <JsonLd
        id={`breadcrumb-${path.replace(/[^a-z0-9]+/gi, '-')}`}
        data={buildBreadcrumbSchema([
          { name: 'Home', item: 'https://rgbatohex.com/' },
          { name: 'Blog', item: 'https://rgbatohex.com/blog' },
          { name: title, item: url },
        ])}
      />
      {children}
      <InternalLinkSection groups={relatedLinkGroups} title="Related Guides and Tools" />
    </>
  );
}
