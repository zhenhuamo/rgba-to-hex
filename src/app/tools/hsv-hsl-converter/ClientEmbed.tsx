'use client';

import { useSearchParams } from 'next/navigation';

type ClientEmbedProps = {
  children: (isEmbed: boolean) => React.ReactNode;
};

export default function ClientEmbed({ children }: ClientEmbedProps) {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';
  
  return <>{children(isEmbed)}</>;
} 