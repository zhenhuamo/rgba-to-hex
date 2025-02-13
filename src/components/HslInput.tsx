'use client';

import { HSL } from '@/utils/colorConverter';
import { useState, useEffect } from 'react';

interface HslInputProps {
  value: HSL;
  onChange: (value: HSL) => void;
}

export default function HslInput({ value, onChange }: HslInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (component: keyof HSL, newValue: string) => {
    const numValue = parseInt(newValue) || 0;
    let validValue = numValue;

    // Apply constraints based on HSL component
    switch (component) {
      case 'h':
        validValue = Math.max(0, Math.min(360, numValue));
        break;
      case 's':
      case 'l':
        validValue = Math.max(0, Math.min(100, numValue));
        break;
    }

    const newHsl = { ...localValue, [component]: validValue };
    setLocalValue(newHsl);
    onChange(newHsl);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-2">HSL Values</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Hue (0-360°)
            </label>
            <input
              type="number"
              value={localValue.h}
              onChange={(e) => handleChange('h', e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="0"
              max="360"
            />
          </div>
          <input
            type="range"
            value={localValue.h}
            onChange={(e) => handleChange('h', e.target.value)}
            className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="360"
            step="1"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Saturation (0-100%)
            </label>
            <input
              type="number"
              value={localValue.s}
              onChange={(e) => handleChange('s', e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="0"
              max="100"
            />
          </div>
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${localValue.h}, 0%, ${localValue.l}%),
                  hsl(${localValue.h}, 100%, ${localValue.l}%))`
              }}
            ></div>
            <input
              type="range"
              value={localValue.s}
              onChange={(e) => handleChange('s', e.target.value)}
              className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              min="0"
              max="100"
              step="1"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Lightness (0-100%)
            </label>
            <input
              type="number"
              value={localValue.l}
              onChange={(e) => handleChange('l', e.target.value)}
              className="w-20 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              min="0"
              max="100"
            />
          </div>
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${localValue.h}, ${localValue.s}%, 0%),
                  hsl(${localValue.h}, ${localValue.s}%, 50%),
                  hsl(${localValue.h}, ${localValue.s}%, 100%))`
              }}
            ></div>
            <input
              type="range"
              value={localValue.l}
              onChange={(e) => handleChange('l', e.target.value)}
              className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              min="0"
              max="100"
              step="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 