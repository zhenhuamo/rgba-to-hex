import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binary to Text Converter & Binary Decoder - Convert Binary Code to English Text | Free Online Tool",
  description: "Convert binary to text instantly with our free binary decoder and converter. Decode binary code to English, translate binary language to readable text, and convert binary numbers online. Features smart format detection, programming examples, and instant conversion.",
  keywords: [
    // Primary keywords
    "binary to text converter",
    "convert binary to text",
    "binary decoder",
    "decode binary code",
    "binary language translator",
    "binary code translator to text",
    "binary to English translator",
    "binary code converter",
    "from binary to text",
    
    // Specific binary examples
    "01001000 binary to text",
    "01100101 binary to text",
    "01101100 binary to text",
    "Hello binary code",
    "binary code for Hello",
    "ASCII binary to text",
    
    // Programming related
    "binary to text python",
    "binary to text javascript",
    "binary to text java",
    "binary to text c++",
    "binary decoder programming",
    "binary conversion code",
    
    // Educational terms
    "binary to text examples",
    "binary decoding tutorial",
    "binary language translation",
    "binary code translation",
    "binary to text step by step",
    "binary decoder guide",
    
    // Tool features
    "online binary decoder",
    "free binary to text converter",
    "binary text translator",
    "binary code reader",
    "binary message decoder",
    "binary string to text",
    
    // Technical terms
    "ASCII binary conversion",
    "8-bit binary to text",
    "binary byte to character",
    "binary encoding decoder",
    "binary data to text",
    "binary file decoder",
    
    // Format variations
    "spaced binary to text",
    "continuous binary to text",
    "binary chunks to text",
    "binary string decoder",
    "binary sequence to text",
    
    // Use cases
    "binary data analysis",
    "binary file conversion",
    "binary log decoder",
    "binary message translation",
    "binary communication decoder",
    "binary protocol decoder",
    
    // Academic and learning
    "binary to text tutorial",
    "binary decoding lesson",
    "binary language learning",
    "binary code practice",
    "binary conversion examples",
    "binary decoder education",
    
    // Security and analysis
    "binary malware analysis",
    "binary security research",
    "binary forensics decoder",
    "binary reverse engineering",
    "binary code analysis",
    
    // System administration
    "binary log analysis",
    "binary system decoder",
    "binary configuration reader",
    "binary data processing",
    "binary file reader"
  ].join(", "),
  
  openGraph: {
    title: "Binary to Text Converter & Binary Decoder - Convert Binary Code to English Text",
    description: "Free online binary to text converter and decoder. Convert binary code to readable English text instantly with our binary language translator. Features smart format detection and programming examples.",
    type: "website",
    locale: "en_US",
    siteName: "Binary to Text Converter",
    images: [
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Binary to Text Converter Tool',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Binary to Text Converter & Binary Decoder - Free Online Tool",
    description: "Convert binary code to English text instantly. Free binary decoder with smart format detection, programming examples, and instant conversion.",
    images: ['/favicon/favicon-96x96.png'],
  },
  
  alternates: {
    canonical: "/tools/binary-to-text",
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
    'binary-examples': 'Hello=01001000 01100101 01101100 01101100 01101111',
    'supported-formats': 'Spaced binary, Continuous binary, Mixed separators',
    'programming-languages': 'JavaScript, Python, Java, C++',
    'conversion-method': 'Binary → ASCII → Character',
    'tool-features': 'Smart detection, Instant conversion, Privacy-first, Copy tools',
    'use-cases': 'Data analysis, Security research, Programming, Education',
    'binary-chunk-size': '8-bit bytes',
    'ascii-range': '0-127 characters',
  }
};

export default function BinaryToTextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
