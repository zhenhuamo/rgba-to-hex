import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'Mixbox Paint Mixer Tutorial: Master Digital Painting with Revolutionary Color Mixing',
  description: 'Discover how Mixbox revolutionizes digital painting with realistic pigment-based color mixing. Learn professional techniques, implementation details, and practical workflows for artists and developers.',
  path: '/blog/mixbox-paint-mixer',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
