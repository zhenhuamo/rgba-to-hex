import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'CMYK to RGB Converter: Complete Color Code Guide',
  description: 'Looking for a reliable CMYK to RGB converter? This comprehensive guide covers everything from basic color conversion to professional tools like CMYK to RGB Photoshop techniques and CMYK to RGB Illustrator workflows.',
  path: '/blog/cmyk-to-rgb-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
