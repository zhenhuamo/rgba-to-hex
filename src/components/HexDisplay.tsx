'use client';

interface HexDisplayProps {
  hex: string;
}

export default function HexDisplay({ hex }: HexDisplayProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-2">HEX Value</h3>
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <input
            type="text"
            value={hex}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
          />
        </div>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Copy
        </button>
      </div>
    </div>
  );
} 