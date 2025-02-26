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
  metadataBase: new URL('https://rgbatohex.com.com'),
  title: "RGBA to HEX Color Converter | Free Online Tool",
  description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
  keywords: "rgba to hex, color converter, hex color codes, rgba converter, color tool, web development, design tools, rgba to hexadecimal, color conversion, free color converter",
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/favicon.svg', color: '#5bbad5' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: "RGBA to HEX Color Converter | Free Online Tool",
    description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
    type: "website",
    locale: "en_US",
    siteName: "RGBA to HEX Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Color Converter Tools Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RGBA to HEX Color Converter | Free Online Tool",
    description: "Convert RGBA to HEX color codes instantly with our free online tool. Easy-to-use RGBA to hexadecimal converter with real-time preview. Perfect for web developers and designers.",
    images: ['/favicon/favicon-96x96.png'],
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
