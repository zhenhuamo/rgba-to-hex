import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Complete Guide to CMYK to HEX Color Conversion',
  description: 'Free online CMYK to HEX converter tool. Convert CMYK (Cyan, Magenta, Yellow, Key) colors to HEX format. Perfect for print design to web conversion. Professional color management system included.',
  path: '/blog/cmyk-to-hex-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
