import { useState } from 'react';

interface RgbDisplayProps {
  rgb: {
    r: number;
    g: number;
    b: number;
  };
}

export default function RgbDisplay({ rgb }: RgbDisplayProps) {
  const [copied, setCopied] = useState(false);
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rgbString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">RGB Color Value</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative group" onClick={handleCopy}>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <code className="text-sm font-mono">{rgbString}</code>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                {copied ? 'Copied!' : 'Click to copy'}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1 min-w-[200px]">
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">R</div>
            <div className="font-mono">{rgb.r}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">G</div>
            <div className="font-mono">{rgb.g}</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">B</div>
            <div className="font-mono">{rgb.b}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 