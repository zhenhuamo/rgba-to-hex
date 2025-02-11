interface RgbaInputProps {
  value: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  onChange: (value: { r: number; g: number; b: number; a: number }) => void;
}

export default function RgbaInput({ value, onChange }: RgbaInputProps) {
  const handleChange = (channel: 'r' | 'g' | 'b' | 'a', newValue: string) => {
    const numValue = channel === 'a' 
      ? Math.min(Math.max(parseFloat(newValue) || 0, 0), 1)
      : Math.min(Math.max(parseInt(newValue) || 0, 0), 255);

    onChange({
      ...value,
      [channel]: numValue
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">RGBA Values</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="block text-sm text-gray-500 dark:text-gray-400">Red</label>
          <input
            type="number"
            value={value.r}
            onChange={(e) => handleChange('r', e.target.value)}
            min="0"
            max="255"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-500 dark:text-gray-400">Green</label>
          <input
            type="number"
            value={value.g}
            onChange={(e) => handleChange('g', e.target.value)}
            min="0"
            max="255"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-500 dark:text-gray-400">Blue</label>
          <input
            type="number"
            value={value.b}
            onChange={(e) => handleChange('b', e.target.value)}
            min="0"
            max="255"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-500 dark:text-gray-400">Alpha</label>
          <input
            type="number"
            value={value.a}
            onChange={(e) => handleChange('a', e.target.value)}
            min="0"
            max="1"
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">CSS Format</div>
        <code className="font-mono text-sm">
          rgba({value.r}, {value.g}, {value.b}, {value.a})
        </code>
      </div>
    </div>
  );
} 