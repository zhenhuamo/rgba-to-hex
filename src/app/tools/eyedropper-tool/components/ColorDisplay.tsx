'use client';

import React, { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { findClosestColorName } from '@/utils/colorNameConverter';
import colorNamesData from '@/type/colornames.json';
import { ColorName } from '@/type/colornames';
import type { ColorFormats } from './EyeDropperMain';

interface ColorData {
  hex: string;
  rgb: { r: number; g: number; b: number; a: number };
  hsl: { h: number; s: number; l: number };
  oklch: { l: number; c: number; h: number };
  formats: {
    rgba: string;
    hex: string;
    hex8: string;
    hsl: string;
    hsla: string;
    named?: string;
  };
}

interface ColorDisplayProps {
  colorData: ColorData;
  selectedFormat: ColorFormats;
}

export default function ColorDisplay({ colorData }: ColorDisplayProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Find closest color name
  const closestColorName = useMemo(() => {
    try {
      const targetRgb = {
        r: Math.round(colorData.rgb.r),
        g: Math.round(colorData.rgb.g),
        b: Math.round(colorData.rgb.b)
      };

      const closest = findClosestColorName(targetRgb, colorNamesData as ColorName[]);

      // Only return the color name if it's reasonably close (distance threshold)
      // You can adjust this threshold based on your needs
      return closest;
    } catch (error) {
      console.error('Error finding color name:', error);
      return null;
    }
  }, [colorData.rgb]);

  // Copy color value to clipboard
  const copyToClipboard = async (value: string, formatName: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedFormat(formatName);
      toast.success(`${formatName.toUpperCase()} value copied to clipboard!`);
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast.error('Failed to copy to clipboard');
    }
  };

  const formatButtons = [
    { key: 'hex' as ColorFormats, label: 'HEX', value: colorData.hex },
    { 
      key: 'rgb' as ColorFormats, 
      label: 'RGB', 
      value: `rgb(${Math.round(colorData.rgb.r)}, ${Math.round(colorData.rgb.g)}, ${Math.round(colorData.rgb.b)})` 
    },
    { 
      key: 'hsl' as ColorFormats, 
      label: 'HSL', 
      value: `hsl(${Math.round(colorData.hsl.h)}, ${Math.round(colorData.hsl.s)}%, ${Math.round(colorData.hsl.l)}%)` 
    },
    { 
      key: 'oklch' as ColorFormats, 
      label: 'OKLCH', 
      value: `oklch(${colorData.oklch.l.toFixed(3)} ${colorData.oklch.c.toFixed(3)} ${colorData.oklch.h.toFixed(1)})` 
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Picked Color
      </h2>
      
      {/* Color Preview */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Large Color Swatch */}
        <div className="flex-shrink-0">
          <div 
            className="w-32 h-32 rounded-2xl shadow-lg border-4 border-white dark:border-gray-700"
            style={{ backgroundColor: colorData.hex }}
          />
          <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            Color Preview
          </p>
        </div>
        
        {/* Color Values */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formatButtons.map((format) => (
              <div key={format.key} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {format.label}
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={format.value}
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => copyToClipboard(format.value, format.label)}
                    className={`
                      px-3 py-2 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg text-sm font-medium transition-all duration-200
                      ${copiedFormat === format.label
                        ? 'bg-green-500 text-white border-green-500'
                        : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }
                    `}
                  >
                    {copiedFormat === format.label ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Color Information */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Color Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">RGB Values:</span>
                <div className="font-mono">
                  R: {Math.round(colorData.rgb.r)}<br/>
                  G: {Math.round(colorData.rgb.g)}<br/>
                  B: {Math.round(colorData.rgb.b)}
                </div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">HSL Values:</span>
                <div className="font-mono">
                  H: {Math.round(colorData.hsl.h)}°<br/>
                  S: {Math.round(colorData.hsl.s)}%<br/>
                  L: {Math.round(colorData.hsl.l)}%
                </div>
              </div>
            </div>

            {/* Color Name */}
            {closestColorName && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Closest Color Name:</span>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded border border-gray-300 dark:border-gray-500"
                      style={{ backgroundColor: closestColorName.hex }}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {closestColorName.name}
                    </span>
                    <button
                      onClick={() => copyToClipboard(closestColorName.name, 'Color Name')}
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      title="Copy color name"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Reference: {closestColorName.hex}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
