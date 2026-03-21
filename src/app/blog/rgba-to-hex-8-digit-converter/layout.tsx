import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'RGBA to 8-Digit HEX: The Ultimate Guide to Modern Color Conversion',
  description: 'Convert RGBA colors to 8-digit HEX format (#RRGGBBAA) with alpha transparency support. Free online color converter for web developers, designers, and digital artists. Learn about transparency and modern CSS color formats.',
  path: '/blog/rgba-to-hex-8-digit-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
