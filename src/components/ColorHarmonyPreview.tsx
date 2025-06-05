'use client';

import React from 'react';
import { ColorHarmony, ColorVariation } from '@/utils/colorHarmony';

interface ColorHarmonyPreviewProps {
  harmony: ColorHarmony;
  onColorClick?: (variation: ColorVariation) => void;
  className?: string;
}

const ColorHarmonyPreview: React.FC<ColorHarmonyPreviewProps> = ({
  harmony,
  onColorClick,
  className = '',
}) => {
  if (!harmony || !harmony.variations || harmony.variations.length === 0) {
    return <div className="text-gray-500">No color scheme available</div>;
  }

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      <h3 className="text-lg font-medium">{harmony.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{harmony.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {harmony.variations.map((variation, index) => (
          <div
            key={index}
            className="color-harmony-item"
            onClick={() => onColorClick && onColorClick(variation)}
          >
            <div
              className="w-16 h-16 rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              style={{ backgroundColor: variation.hex }}
              title={`${variation.relationship}: ${variation.hex}`}
            />
            <div className="mt-1 text-xs text-center">
              <div className="font-medium">{variation.relationship}</div>
              <div className="text-gray-500 dark:text-gray-400">{variation.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorHarmonyPreview; 