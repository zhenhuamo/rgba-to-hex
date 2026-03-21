import type { Metadata } from "next";
import BlogSeoLayout from "@/components/seo/BlogSeoLayout";
import { buildBlogArticleMetadata } from "../articleMetadata";

const article = {
  title: 'The BEST RGBA to HEX Converter in 2025: TOP Professional Color Tool',
  description: 'Discover why our RGBA to HEX converter stands as the ultimate choice for professionals worldwide. Experience unmatched precision, revolutionary features, and game-changing capabilities.',
  path: '/blog/rgba-to-hex',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
