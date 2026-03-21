import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Complete Guide to HEX to RGBA Color Conversion',
  description: 'Convert HEX colors to RGBA format online. Support for both 6-digit and 8-digit hex codes. Handle opacity in HEX to RGBA conversion. Also includes RGBA to HEX conversion. Free online color converter tool.',
  path: '/blog/hex-to-rgba-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
