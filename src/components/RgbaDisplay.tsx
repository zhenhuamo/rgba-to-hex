import { RGBA } from '@/utils/colorConverter';

interface RgbaDisplayProps {
  rgba: RGBA | null;
  onCopy?: () => void;
}

export default function RgbaDisplay({ rgba, onCopy }: RgbaDisplayProps) {
  if (!rgba) {
    return (
      <div className="text-gray-500 dark:text-gray-400">
        Enter a valid HEX color to see RGBA values
      </div>
    );
  }

  const rgbaString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a.toFixed(2)})`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rgbaString);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Red</label>
          <div className="text-lg font-medium">{rgba.r}</div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Green</label>
          <div className="text-lg font-medium">{rgba.g}</div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Blue</label>
          <div className="text-lg font-medium">{rgba.b}</div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Alpha</label>
          <div className="text-lg font-medium">{rgba.a.toFixed(2)}</div>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Copy RGBA Value
      </button>
    </div>
  );
} 