import { CMYK } from '@/utils/colorConverter';

interface CmykDisplayProps {
  cmyk: CMYK | null;
}

export default function CmykDisplay({ cmyk }: CmykDisplayProps) {
  if (!cmyk) return null;

  return (
    <div className="space-y-6">
      {/* CMYK Values Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-cyan-500/20 rounded-lg p-4">
          <div className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">Cyan</div>
          <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">{cmyk.c}%</div>
        </div>
        <div className="bg-fuchsia-500/20 rounded-lg p-4">
          <div className="text-fuchsia-600 dark:text-fuchsia-400 font-medium mb-1">Magenta</div>
          <div className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-300">{cmyk.m}%</div>
        </div>
        <div className="bg-yellow-500/20 rounded-lg p-4">
          <div className="text-yellow-600 dark:text-yellow-400 font-medium mb-1">Yellow</div>
          <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{cmyk.y}%</div>
        </div>
        <div className="bg-gray-500/20 rounded-lg p-4">
          <div className="text-gray-600 dark:text-gray-400 font-medium mb-1">Key (Black)</div>
          <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">{cmyk.k}%</div>
        </div>
      </div>

      {/* Print Format */}
      <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Print Format</div>
          <button
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            onClick={() => {
              navigator.clipboard.writeText(`C: ${cmyk.c}%, M: ${cmyk.m}%, Y: ${cmyk.y}%, K: ${cmyk.k}%`);
            }}
          >
            Copy
          </button>
        </div>
        <code className="block text-sm text-gray-800 dark:text-gray-200 font-mono">
          C: {cmyk.c}%, M: {cmyk.m}%, Y: {cmyk.y}%, K: {cmyk.k}%
        </code>
      </div>
    </div>
  );
} 