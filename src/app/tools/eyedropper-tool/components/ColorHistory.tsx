'use client';

import React from 'react';
import { toast } from 'sonner';

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

interface ColorHistoryProps {
  colors: ColorData[];
  onColorSelect: (color: ColorData) => void;
  onClearHistory: () => void;
  onRemoveItem: (hexColor: string) => void;
}

export default function ColorHistory({ 
  colors, 
  onColorSelect, 
  onClearHistory, 
  onRemoveItem 
}: ColorHistoryProps) {
  // Copy color to clipboard
  const copyToClipboard = async (value: string, event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      toast.success('Color copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      toast.error('Failed to copy to clipboard');
    }
  };

  // Remove item from history
  const handleRemoveItem = (hexColor: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onRemoveItem(hexColor);
  };

  if (colors.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Color History
        </h2>
        <div className="text-center py-8">
          <div className="text-gray-400 dark:text-gray-500 mb-2">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            No colors picked yet. Start using the eyedropper to build your color history!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Color History ({colors.length})
        </h2>
        <button
          onClick={onClearHistory}
          className="px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color, index) => (
          <div
            key={`${color.hex}-${index}`}
            onClick={() => onColorSelect(color)}
            className="group relative cursor-pointer"
          >
            {/* Color Swatch */}
            <div
              className="w-full aspect-square rounded-xl shadow-md border-2 border-white dark:border-gray-700 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg"
              style={{ backgroundColor: color.hex }}
            />
            
            {/* Color Info */}
            <div className="mt-2 text-center">
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 truncate">
                {color.hex}
              </p>
            </div>
            
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-xl transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-2">
                {/* Copy Button */}
                <button
                  onClick={(e) => copyToClipboard(color.hex, e)}
                  className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  title="Copy HEX value"
                >
                  <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
                
                {/* Remove Button */}
                <button
                  onClick={(e) => handleRemoveItem(color.hex, e)}
                  className="p-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200"
                  title="Remove from history"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click on any color to select it, or hover to copy/remove
        </p>
      </div>
    </div>
  );
}
