import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '../articleMetadata';

const article = {
  title: 'Design Token Color System: From Palette to Production',
  description:
    'Learn how to move from color scales to real design tokens, why semantic color roles matter, and how to export CSS variables, Tailwind colors, and JSON tokens for production workflows.',
  path: '/blog/design-token-color-system',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);
