import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RGBA to HEX Color Converter | Free Online Tool",
  description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
  keywords: "rgba to hex, color converter, hex color codes, rgba converter, color tool, web development, design tools, rgba to hexadecimal, color conversion, free color converter",
  icons: {
    icon: [
      { url: '/rgb.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    shortcut: '/rgb.svg',
    apple: [
      { url: '/rgb.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    other: [
      { rel: 'mask-icon', url: '/rgb.svg', color: '#000000' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "RGBA to HEX Color Converter | Free Online Tool",
    description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
    type: "website",
    locale: "en_US",
    siteName: "RGBA to HEX Converter",
    images: [
      {
        url: '/rgb.svg',
        width: 32,
        height: 32,
        alt: 'RGBA to HEX Converter Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RGBA to HEX Color Converter | Free Online Tool",
    description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
    images: ['/rgb.svg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WBNP4JPTFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WBNP4JPTFL');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
