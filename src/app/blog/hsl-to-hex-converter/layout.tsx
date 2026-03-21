import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Complete Guide to HSL to HEX Color Conversion',
  description: 'Free online HSL to HEX converter tool. Convert HSL (Hue, Saturation, Lightness) colors to HEX format. JavaScript, TypeScript, Python, and React implementations available. NPM package included.',
  path: '/blog/hsl-to-hex-converter',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
