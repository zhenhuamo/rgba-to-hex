import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '../articleMetadata';

const article = {
  title: 'Light & Dark Theme Generator: Build a Complete UI Theme from One Brand Color',
  description:
    'A practical guide to generating light and dark theme tokens from a single brand color — covering semantic role mapping, accessible dark mode palettes, shadcn and Tailwind CSS variable exports, and how to ship a production-ready theme without building it by hand.',
  path: '/blog/light-dark-theme-generator',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);
