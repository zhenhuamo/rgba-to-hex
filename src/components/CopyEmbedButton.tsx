'use client';

import { useState } from 'react';

type CopyEmbedButtonProps = {
  code: string;
};

export default function CopyEmbedButton({ code }: CopyEmbedButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy embed code:', error);
    }
  };

  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      onClick={handleCopy}
    >
      {copied ? 'Copied' : 'Copy Code'}
    </button>
  );
}
