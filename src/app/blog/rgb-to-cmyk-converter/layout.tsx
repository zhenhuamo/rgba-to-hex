import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'RGB to CMYK Converter: Professional Color Space Transformation Tool',
  description: 'Free online RGB to CMYK converter tool for converting RGB colors to CMYK format. Perfect for digital to print conversion, image color conversion, and professional print production.',
  path: '/blog/rgb-to-cmyk-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
