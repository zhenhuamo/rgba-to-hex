import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rgbatohex.com/tools/cmyk-to-hex',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
