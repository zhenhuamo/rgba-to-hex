interface ColorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

export default function ColorInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1
}: ColorInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-20 px-3 py-1 text-sm bg-gray-50 border border-gray-300 rounded-lg 
            dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all"
        />
      </div>
    </div>
  );
}
