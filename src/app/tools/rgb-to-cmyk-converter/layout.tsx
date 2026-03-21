import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rgbatohex.com/tools/rgb-to-cmyk',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
