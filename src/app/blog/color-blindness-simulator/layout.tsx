import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Color Blindness Simulator: Comprehensive Guide & Tool Introduction',
  description: 'Test your designs and images for color accessibility with our color blindness simulator. Simulate protanopia, deuteranopia, tritanopia, and other color vision deficiencies to create more inclusive digital experiences.',
  path: '/blog/color-blindness-simulator',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
