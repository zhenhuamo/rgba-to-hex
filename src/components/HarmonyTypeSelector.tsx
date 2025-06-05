'use client';

import React from 'react';
import { HarmonyType } from '@/utils/colorHarmony';

interface HarmonyTypeSelectorProps {
  selectedType: HarmonyType;
  onChange: (type: HarmonyType) => void;
  className?: string;
}

const harmonyTypes: { value: HarmonyType; label: string; description: string }[] = [
  {
    value: 'complementary',
    label: 'Complementary',
    description: 'Colors opposite on the color wheel, creating high contrast',
  },
  {
    value: 'analogous',
    label: 'Analogous',
    description: 'Adjacent colors on the color wheel, forming harmonious combinations',
  },
  {
    value: 'triadic',
    label: 'Triadic',
    description: 'Three colors evenly spaced on the color wheel',
  },
  {
    value: 'tetradic',
    label: 'Tetradic',
    description: 'Four colors evenly spaced on the color wheel',
  },
  {
    value: 'split-complementary',
    label: 'Split-Complementary',
    description: 'Base color plus two colors adjacent to its complement',
  },
  {
    value: 'monochromatic',
    label: 'Monochromatic',
    description: 'Different brightness and saturation of the same hue',
  },
];

const HarmonyTypeSelector: React.FC<HarmonyTypeSelectorProps> = ({
  selectedType,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Harmony Type
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {harmonyTypes.map((type) => (
          <button
            key={type.value}
            className={`px-3 py-2 rounded-md text-sm transition-colors ${
              selectedType === type.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            onClick={() => onChange(type.value)}
            title={type.description}
          >
            {type.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {harmonyTypes.find((type) => type.value === selectedType)?.description}
      </p>
    </div>
  );
};

export default HarmonyTypeSelector; 