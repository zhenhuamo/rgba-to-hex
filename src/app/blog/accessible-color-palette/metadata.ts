import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '../articleMetadata';

const article = {
  title: 'Accessible Color Palette: From Brand Color to Readable UI',
  description:
    'Learn how to turn one brand color into accessible UI roles for text, surfaces, borders, and actions using APCA, WCAG, and token-ready workflows.',
  path: '/blog/accessible-color-palette',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);
