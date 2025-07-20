import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binary to Decimal Converter - Free Online Calculator with Table & Examples",
  description: "Convert binary to decimal instantly with our free online binary to decimal converter. Features conversion table, programming examples in Python, Java, C++, Excel formulas, and step-by-step calculations. Perfect binary to decimal calculator for students and programmers.",
  keywords: [
    // Primary keywords
    "binary to decimal",
    "binary to decimal converter",
    "binary to decimal calculator",
    "binary to decimal table",
    
    // Specific conversion examples
    "1011 binary to decimal",
    "1111 binary to decimal", 
    "10001 binary to decimal",
    "1010 binary to decimal",
    "11111 binary to decimal",
    "101010 binary to decimal",
    
    // Programming related
    "binary to decimal python",
    "binary to decimal java",
    "binary to decimal c++",
    "binary to decimal excel",
    "binary to decimal formula",
    "binary to decimal conversion",
    
    // Educational terms
    "binary to decimal examples",
    "binary to decimal conversion table",
    "binary to decimal step by step",
    "binary to decimal calculation",
    "binary to decimal method",
    "binary to decimal algorithm",
    
    // Tool related
    "online binary to decimal converter",
    "free binary to decimal calculator",
    "binary to decimal tool",
    "binary to decimal online",
    "binary decimal converter",
    
    // Technical terms
    "base 2 to base 10",
    "binary number system",
    "decimal conversion",
    "positional notation",
    "power of 2",
    "bit conversion",
    
    // File and data processing
    "binary to decimal file",
    "binary data conversion",
    "binary file to decimal",
    "convert binary file",
    
    // Academic and learning
    "binary to decimal tutorial",
    "binary to decimal lesson",
    "binary to decimal practice",
    "binary to decimal worksheet",
    "binary to decimal problems",
    
    // Programming languages specific
    "int binary to decimal",
    "string binary to decimal",
    "binary to decimal function",
    "binary to decimal code",
    "binary to decimal program",
    
    // Common patterns
    "8 bit binary to decimal",
    "16 bit binary to decimal",
    "4 bit binary to decimal",
    "binary to decimal chart",
    "binary to decimal reference"
  ].join(", "),
  
  openGraph: {
    title: "Binary to Decimal Converter - Free Online Calculator with Table & Examples",
    description: "Convert binary to decimal instantly with our free online binary to decimal converter. Features conversion table, programming examples in Python, Java, C++, Excel formulas, and step-by-step calculations.",
    type: "website",
    locale: "en_US",
    siteName: "Binary to Decimal Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Binary to Decimal Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Binary to Decimal Converter - Free Online Calculator",
    description: "Convert binary to decimal instantly with our free online converter. Features programming examples, conversion tables, and step-by-step calculations.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/binary-to-decimal",
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
    'binary-to-decimal-examples': '1011=11, 1111=15, 10001=17, 1010=10',
    'programming-languages': 'Python, Java, C++, Excel',
    'conversion-methods': 'Formula, Table, Calculator, Manual',
    'educational-level': 'Beginner to Advanced',
    'tool-features': 'Step-by-step, Examples, Code samples, Embed code',
  }
};

export default function BinaryToDecimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
