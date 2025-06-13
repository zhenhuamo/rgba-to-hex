import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hex to Binary Converter Tool - Online Calculator with Bit Grouping',
  description: 'Professional hex to binary converter with bit grouping options, real-time conversion, and detailed analysis. Convert hexadecimal to binary instantly with our free online calculator tool.',
  keywords: 'hex to binary converter, hex to binary calculator, hexadecimal to binary, binary converter, bit grouping, hex converter tool, online hex to binary',
  openGraph: {
    title: 'Hex to Binary Converter Tool - Online Calculator',
    description: 'Convert hexadecimal to binary with bit grouping and real-time analysis. Professional online hex to binary calculator.',
    type: 'website',
  },
};

export default function HexToBinaryConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 