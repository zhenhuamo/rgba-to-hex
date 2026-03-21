import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Complete Guide to RGBA to HEX Color Conversion',
  description: 'Convert RGBA colors to HEX format online. Support for 6-digit and 8-digit hex codes. Handle opacity in RGBA to HEX conversion. Free online color converter tool.',
  path: '/blog/rgba-to-hex-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
