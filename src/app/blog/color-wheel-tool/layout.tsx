import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Color Wheel Tool: Comprehensive Guide & Interactive Color Harmony Generator',
  description: 'Master color relationships with our interactive color wheel tool. Create complementary, analogous, triadic, and split-complementary color schemes. Convert between RGBA to HEX formats while learning color theory.',
  path: '/blog/color-wheel-tool',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
