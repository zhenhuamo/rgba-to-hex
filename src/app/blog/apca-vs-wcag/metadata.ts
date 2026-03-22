import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '../articleMetadata';

const article = {
  title: 'APCA vs WCAG: What Changes in Modern Contrast Checking?',
  description:
    'Learn the difference between APCA and WCAG contrast scoring, when each method is useful, and how to test text/background color pairs with our APCA Contrast Checker.',
  path: '/blog/apca-vs-wcag',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);
