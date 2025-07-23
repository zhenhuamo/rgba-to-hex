import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decimal to Binary Converter - Free Online Calculator with Table & Examples | Programming Tool",
  description: "Convert decimal to binary instantly with our free online decimal to binary converter. Features conversion table, programming examples in Python, Java, C++, step-by-step algorithm explanation, and comprehensive decimal to binary conversion examples. Perfect decimal to binary calculator for students and programmers.",
  keywords: [
    // Primary keywords
    "decimal to binary",
    "decimal to binary converter",
    "decimal to binary calculator",
    "convert decimal to binary",
    "decimal to binary conversion",
    "decimal to binary table",
    "decimal to binary formula",
    "decimal to binary algorithm",
    
    // Specific conversion examples
    "convert 13 to binary",
    "convert 25 to binary", 
    "convert 15 to binary",
    "convert 17 to binary",
    "convert 31 to binary",
    "convert 255 to binary",
    "convert 256 to binary",
    "convert 1024 to binary",
    "13 decimal to binary",
    "25 decimal to binary",
    "255 decimal to binary",
    
    // Programming related
    "decimal to binary python",
    "decimal to binary java",
    "decimal to binary c++",
    "decimal to binary javascript",
    "decimal to binary programming",
    "decimal to binary code",
    "decimal to binary function",
    "decimal to binary method",
    
    // Educational keywords
    "how to convert decimal to binary",
    "decimal to binary steps",
    "decimal to binary examples",
    "decimal to binary practice",
    "decimal to binary tutorial",
    "decimal to binary explanation",
    "decimal to binary division method",
    "decimal to binary remainder method",
    
    // Tool features
    "online decimal to binary",
    "free decimal to binary converter",
    "decimal to binary tool",
    "decimal to binary generator",
    "decimal to binary chart",
    "decimal to binary worksheet",
    
    // Related conversions
    "number system conversion",
    "base 10 to base 2",
    "binary conversion",
    "hexadecimal to binary",
    "binary to decimal",
    "number base converter",
    
    // Technical terms
    "binary representation",
    "binary number system",
    "powers of 2",
    "bit manipulation",
    "computer science conversion",
    "digital electronics",
    "binary arithmetic"
  ],
  
  openGraph: {
    title: "Decimal to Binary Converter - Free Online Calculator with Table & Examples",
    description: "Convert decimal to binary instantly with our free online decimal to binary converter. Features conversion table, programming examples in Python, Java, C++, step-by-step algorithm explanation, and comprehensive decimal to binary conversion examples.",
    type: "website",
    locale: "en_US",
    siteName: "Decimal to Binary Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Decimal to Binary Converter Tool - Programming Calculator',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Decimal to Binary Converter - Free Online Calculator",
    description: "Convert decimal to binary instantly with our free online converter. Features programming examples, conversion tables, step-by-step calculations, and comprehensive tutorials.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/decimal-to-binary",
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
    'tool-type': 'Decimal to Binary Number System Converter',
    'conversion-examples': '13→1101, 25→11001, 255→11111111, 256→100000000',
    'programming-languages': 'Python, Java, C++, JavaScript',
    'conversion-methods': 'Division by 2 method, Remainder algorithm, Powers of 2',
    'educational-level': 'Beginner to Advanced programming students',
    'tool-features': 'Step-by-step conversion, Programming examples, Conversion table, Verification method',
    'target-users': 'Students, Programmers, Computer science learners, Digital electronics engineers',
    'use-cases': 'Programming assignments, Computer science education, Digital electronics, Number system learning',
    'related-tools': 'Binary to decimal, Hex to binary, Number base converter',
    'mathematical-foundation': 'Base 2 number system, Powers of 2, Modular arithmetic',
    'verification-method': 'Binary to decimal reverse conversion',
    'common-examples': 'Powers of 2, 8-bit values, 16-bit values, Programming constants'
  }
};

export default function DecimalToBinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
