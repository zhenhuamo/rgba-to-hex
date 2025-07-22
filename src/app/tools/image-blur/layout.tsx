import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blur Image Online Free | Best Blur Image Tool | Professional Image Blur Editor",
  description: "Best blur image tool online free! Learn how to blur image with professional effects. Blur image background, blur image parts, or apply motion blur image effects. No registration required, secure blur image processing in browser.",
  keywords: [
    // 核心关键词 - blur image 优先
    "blur image",
    "blur image online",
    "blur image tool",
    "blur image free",
    "blur image online free",
    "how to blur image",
    "blur image background",
    "blur image parts",
    "blur image editor",
    "blur image effects",

    // 次要关键词
    "image blur tool",
    "photo blur editor",
    "free image blur",
    "online blur tool",
    "blur photo online",
    "image blur editor",
    "blur effect tool",
    
    // 功能相关 - blur image 变体
    "gaussian blur image",
    "motion blur image",
    "background blur image",
    "selective blur image",
    "blur image processing",
    "blur image filter",
    "stack blur image",
    "professional blur image",

    // 传统功能词
    "gaussian blur online",
    "motion blur tool",
    "radial blur effect",
    "background blur tool",
    "selective blur editor",
    "photo background blur",
    "image blur filter",
    
    // 用途相关
    "privacy blur tool",
    "face blur online",
    "text blur tool",
    "blur sensitive information",
    "photo privacy protection",
    "image anonymization tool",
    "blur personal data",
    "hide information photo",
    
    // 技术相关
    "canvas image blur",
    "javascript blur effect",
    "web image processing",
    "client side image blur",
    "browser image editor",
    "no upload blur tool",
    
    // 比较和替代 - blur image 优先
    "blur image alternative to photoshop",
    "blur image tool vs canva",
    "blur image better than gimp",
    "free blur image software",
    "blur image no download",
    "instant blur image effect",
    "quick blur image tool",

    // 传统比较词
    "photoshop blur alternative",
    "free blur software",
    "online photoshop blur",
    "blur tool no download",
    "instant blur effect",
    "quick image blur",
    
    // 专业用途
    "graphic design blur",
    "web design blur tool",
    "social media blur",
    "content creation blur",
    "marketing image blur",
    "professional photo blur",
    
    // 移动和设备
    "mobile image blur",
    "tablet blur tool",
    "responsive blur editor",
    "cross platform blur",
    "browser compatible blur",
    
    // 格式支持
    "jpg blur tool",
    "png blur editor",
    "webp blur support",
    "multiple format blur",
    "high quality blur",
    "lossless blur effect"
  ].join(", "),
  
  openGraph: {
    title: "Blur Image Online Free | Best Blur Image Tool",
    description: "Best blur image tool online! Learn how to blur image with professional effects. Blur image background, blur image parts, or create motion blur image effects. Free, fast, and secure blur image processing.",
    type: "website",
    locale: "en_US",
    siteName: "Image Blur Tool",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Image Blur Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Blur Image Online Free | Best Blur Image Tool",
    description: "Learn how to blur image with professional effects! Blur image background, blur image parts, or create stunning blur image effects. Free blur image tool, no registration required.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/image-blur",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  other: {
    'blur-types': 'Gaussian, Motion, Radial, Box, Stack, Surface blur effects',
    'supported-formats': 'JPEG, PNG, WebP, BMP image formats',
    'privacy-features': 'No upload required, client-side processing, secure',
    'target-users': 'Photographers, Designers, Content creators, Social media users',
    'use-cases': 'Privacy protection, Artistic effects, Background blur, Content creation',
    'tool-features': 'Real-time preview, Multiple blur types, Adjustable intensity, Instant download',
    'processing-method': 'Client-side Canvas API, No server upload, Instant results',
    'quality-options': 'Lossless processing, Original resolution, High quality output',
    'accessibility': 'Keyboard navigation, Screen reader friendly, Mobile optimized',
    'performance': 'Fast processing, Memory efficient, Large file support',
  }
};

export default function ImageBlurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
