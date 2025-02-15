import { CMYK } from '@/utils/colorConverter';

interface CmykInputProps {
  value: CMYK;
  onChange: (value: CMYK) => void;
}

export default function CmykInput({ value, onChange }: CmykInputProps) {
  const handleChange = (key: keyof CMYK) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 100) {
      onChange({ ...value, [key]: newValue });
    }
  };

  return (
    <div className="space-y-6">
      {/* Cyan Input */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
            Cyan
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value.c}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value.c}
          onChange={handleChange('c')}
          className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer dark:bg-cyan-700"
        />
      </div>

      {/* Magenta Input */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
            Magenta
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value.m}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value.m}
          onChange={handleChange('m')}
          className="w-full h-2 bg-fuchsia-200 rounded-lg appearance-none cursor-pointer dark:bg-fuchsia-700"
        />
      </div>

      {/* Yellow Input */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
            Yellow
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value.y}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value.y}
          onChange={handleChange('y')}
          className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer dark:bg-yellow-700"
        />
      </div>

      {/* Key (Black) Input */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Key (Black)
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value.k}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value.k}
          onChange={handleChange('k')}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
} 