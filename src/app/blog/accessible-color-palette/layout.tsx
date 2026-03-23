import BlogSeoLayout from '@/components/seo/BlogSeoLayout';

const article = {
  title: 'Accessible Color Palette: From Brand Color to Readable UI',
  description:
    'Learn how to turn one brand color into accessible UI roles for text, surfaces, borders, and actions using APCA, WCAG, and token-ready workflows.',
  path: '/blog/accessible-color-palette',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
