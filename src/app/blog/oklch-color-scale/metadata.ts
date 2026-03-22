import type { Metadata } from 'next';
import { buildBlogArticleMetadata } from '../articleMetadata';

const article = {
  title: 'OKLCH Color Scale: Why It Creates Better 50-950 Palettes',
  description:
    'Learn why OKLCH works better for modern 50-950 color scales, how perceptual lightness improves palette consistency, and how to build export-ready ramps with our OKLCH Scale Generator.',
  path: '/blog/oklch-color-scale',
};

export const metadata: Metadata = buildBlogArticleMetadata(article);
