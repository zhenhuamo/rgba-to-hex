import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rgbatohex.com/tools/hex-to-rgba',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
