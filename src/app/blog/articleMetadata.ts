import type { Metadata } from "next";

type BlogArticleMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function buildBlogArticleMetadata({
  title,
  description,
  path,
}: BlogArticleMetadataOptions): Metadata {
  const url = `https://rgbatohex.com${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
