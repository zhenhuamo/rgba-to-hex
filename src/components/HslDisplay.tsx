import { HSL } from '@/utils/colorConverter';

interface HslDisplayProps {
  hsl: HSL | null;
}

export default function HslDisplay({ hsl }: HslDisplayProps) {
  if (!hsl) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">HSL Value</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Hue</div>
          <div className="font-mono text-lg">{Math.round(hsl.h)}°</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Saturation</div>
          <div className="font-mono text-lg">{Math.round(hsl.s)}%</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Lightness</div>
          <div className="font-mono text-lg">{Math.round(hsl.l)}%</div>
        </div>
      </div>
      <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">CSS Format</div>
        <code className="font-mono text-sm">
          hsl({Math.round(hsl.h)}, {Math.round(hsl.s)}%, {Math.round(hsl.l)}%)
        </code>
      </div>
    </div>
  );
} 