import BlogSeoLayout from '@/components/seo/BlogSeoLayout';

const article = {
  title: 'Light & Dark Theme Generator: Build a Complete UI Theme from One Brand Color',
  description:
    'A practical guide to generating light and dark theme tokens from a single brand color — covering semantic role mapping, accessible dark mode palettes, shadcn and Tailwind CSS variable exports, and how to ship a production-ready theme without building it by hand.',
  path: '/blog/light-dark-theme-generator',
};

export default function LightDarkThemeGeneratorBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlogSeoLayout title={article.title} description={article.description} path={article.path}>
      {children}
    </BlogSeoLayout>
  );
}
