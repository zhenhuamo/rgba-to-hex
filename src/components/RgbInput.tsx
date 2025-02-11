interface RgbInputProps {
  value: {
    r: number;
    g: number;
    b: number;
  };
  onChange: (value: { r: number; g: number; b: number; }) => void;
}

export default function RgbInput({ value, onChange }: RgbInputProps) {
  const handleChange = (channel: 'r' | 'g' | 'b', newValue: string) => {
    const numValue = Math.min(Math.max(parseInt(newValue) || 0, 0), 255);

    onChange({
      ...value,
      [channel]: numValue
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">RGB Values</h3>
      <div className="space-y-6">
        {/* Red Channel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <label className="text-sm text-gray-500 dark:text-gray-400">Red</label>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Current: {value.r}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-0 h-2 rounded-lg opacity-20" 
                style={{ background: 'linear-gradient(to right, black, red)' }} 
              />
              <input
                type="range"
                value={value.r}
                onChange={(e) => handleChange('r', e.target.value)}
                min="0"
                max="255"
                className="w-full h-2 bg-transparent appearance-none cursor-pointer accent-red-500"
              />
            </div>
            <input
              type="number"
              value={value.r}
              onChange={(e) => handleChange('r', e.target.value)}
              min="0"
              max="255"
              className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Green Channel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <label className="text-sm text-gray-500 dark:text-gray-400">Green</label>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Current: {value.g}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-0 h-2 rounded-lg opacity-20" 
                style={{ background: 'linear-gradient(to right, black, lime)' }} 
              />
              <input
                type="range"
                value={value.g}
                onChange={(e) => handleChange('g', e.target.value)}
                min="0"
                max="255"
                className="w-full h-2 bg-transparent appearance-none cursor-pointer accent-green-500"
              />
            </div>
            <input
              type="number"
              value={value.g}
              onChange={(e) => handleChange('g', e.target.value)}
              min="0"
              max="255"
              className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Blue Channel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <label className="text-sm text-gray-500 dark:text-gray-400">Blue</label>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Current: {value.b}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-0 h-2 rounded-lg opacity-20" 
                style={{ background: 'linear-gradient(to right, black, blue)' }} 
              />
              <input
                type="range"
                value={value.b}
                onChange={(e) => handleChange('b', e.target.value)}
                min="0"
                max="255"
                className="w-full h-2 bg-transparent appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <input
              type="number"
              value={value.b}
              onChange={(e) => handleChange('b', e.target.value)}
              min="0"
              max="255"
              className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">CSS Format</div>
        <code className="font-mono text-sm">
          rgb({value.r}, {value.g}, {value.b})
        </code>
      </div>
    </div>
  );
} 