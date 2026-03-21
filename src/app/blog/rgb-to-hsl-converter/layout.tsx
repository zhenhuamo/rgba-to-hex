import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Complete Guide to RGB to HSL Color Conversion | RGB to HSL Formula',
  description: 'Easy RGB to HSL converter tool. Convert RGB colors to HSL format online. Learn the RGB to HSL formula, RGB to HSL algorithm, and implementation in JavaScript, Python, CSS, C++ and Excel.',
  path: '/blog/rgb-to-hsl-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
