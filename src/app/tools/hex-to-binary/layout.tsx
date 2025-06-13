import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hex to Binary Converter - Free Online Calculator with Table & Examples',
  description: 'Convert hexadecimal to binary instantly with our professional hex to binary converter. Features conversion table, programming examples in Python, Java, C++, Excel formulas, and file processing methods.',
  keywords: 'hex to binary, hex to binary converter, hex to binary table, hex to binary calculator, hex to binary python, hex to binary conversion examples, hex to binary file, hex to binary in excel, hex to binary c++, hex to binary to decimal, hex to binary in calculator, hex to binary java',
  openGraph: {
    title: 'Hex to Binary Converter - Free Online Calculator',
    description: 'Professional hex to binary conversion tool with programming examples, conversion table, and calculator features.',
    type: 'website',
  },
};

export default function HexToBinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 