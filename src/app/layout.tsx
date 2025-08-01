import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Kalam, Allura, Caveat, Crimson_Text } from "next/font/google";
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

// Handwriting fonts for text-to-handwriting tool
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rgbatohex.com'),
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
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r2ci4wjukd");
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${kalam.variable} ${allura.variable} ${caveat.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
        {/* Restore AdSense Script with lazyOnload strategy */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2380689997504325"
          crossOrigin="anonymous"
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}