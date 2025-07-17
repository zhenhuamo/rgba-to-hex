'use client';

import React from 'react';
import type { ColorFormats } from './EyeDropperMain';

interface FormatSelectorProps {
  selectedFormat: ColorFormats;
  onFormatChange: (format: ColorFormats) => void;
}

const formatOptions: { value: ColorFormats; label: string; description: string }[] = [
  {
    value: 'hex',
    label: 'HEX',
    description: 'Hexadecimal color format (#RRGGBB)'
  },
  {
    value: 'rgb',
    label: 'RGB',
    description: 'Red, Green, Blue color format'
  },
  {
    value: 'hsl',
    label: 'HSL',
    description: 'Hue, Saturation, Lightness format'
  },
  {
    value: 'oklch',
    label: 'OKLCH',
    description: 'Perceptually uniform color space'
  }
];

export default function FormatSelector({ selectedFormat, onFormatChange }: FormatSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Color Format
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Choose your preferred color format for display and copying
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {formatOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onFormatChange(option.value)}
            className={`
              p-4 rounded-xl border-2 transition-all duration-200 text-left
              ${selectedFormat === option.value
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
              }
            `}
          >
            <div className="font-semibold text-lg mb-1">
              {option.label}
            </div>
            <div className="text-xs opacity-75">
              {option.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
