'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { hexToRgba, rgbaToHsl, rgbToOklch, rgbaToColor } from '@/utils/colorConverter';
import type { RGBA, HSL, OKLCH, ColorFormat } from '@/utils/colorConverter';
import ColorDisplay from './ColorDisplay';
import ColorHistory from './ColorHistory';
import FormatSelector from './FormatSelector';

// EyeDropper API type declaration
declare global {
  interface Window {
    EyeDropper?: {
      new (): {
        open(): Promise<{ sRGBHex: string }>;
      };
    };
  }
}

export type ColorFormats = 'hex' | 'rgb' | 'hsl' | 'oklch';

interface ColorData {
  hex: string;
  rgb: RGBA;
  hsl: HSL;
  oklch: OKLCH;
  formats: ColorFormat;
}

export default function EyeDropperMain() {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [isPicking, setIsPicking] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<ColorData | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ColorFormats>('hex');
  const [colorHistory, setColorHistory] = useState<ColorData[]>([]);

  // Check EyeDropper API support
  useEffect(() => {
    const checkSupport = () => {
      const supported = 'EyeDropper' in window;
      setIsSupported(supported);

      if (!supported) {
        console.warn('EyeDropper API is not supported in this browser');
      }
    };

    checkSupport();
  }, []);



  // Load color history from localStorage
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('eyedropper-history');
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        setColorHistory(parsed);
      }
    } catch (error) {
      console.error('Failed to load color history:', error);
    }
  }, []);

  // Save color history to localStorage
  const saveColorHistory = useCallback((history: ColorData[]) => {
    try {
      localStorage.setItem('eyedropper-history', JSON.stringify(history));
    } catch (error) {
      console.error('Failed to save color history:', error);
    }
  }, []);

  // Convert hex color to all formats
  const convertColor = useCallback((hexColor: string): ColorData => {
    const rgba = hexToRgba(hexColor);
    if (!rgba) {
      throw new Error('Invalid hex color');
    }

    const hsl = rgbaToHsl(rgba);
    const oklch = rgbToOklch({ r: rgba.r, g: rgba.g, b: rgba.b });
    const formats = rgbaToColor(rgba);

    return {
      hex: hexColor,
      rgb: rgba,
      hsl,
      oklch,
      formats
    };
  }, []);

  // Add color to history
  const addToHistory = useCallback((colorData: ColorData) => {
    setColorHistory(prev => {
      // Remove duplicate if exists
      const filtered = prev.filter(item => item.hex.toLowerCase() !== colorData.hex.toLowerCase());
      // Add new color to the beginning and limit to 12 items
      const newHistory = [colorData, ...filtered].slice(0, 12);
      saveColorHistory(newHistory);
      return newHistory;
    });
  }, [saveColorHistory]);

  // Handle color picking
  const handleColorPick = useCallback(async () => {
    if (!isSupported || !window.EyeDropper) {
      toast.error('EyeDropper API is not supported in this browser');
      return;
    }

    setIsPicking(true);

    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      
      const hexColor = result.sRGBHex;
      const colorData = convertColor(hexColor);
      
      setCurrentColor(colorData);
      addToHistory(colorData);
      
      toast.success('Color picked successfully!');
    } catch (error) {
      // User cancelled or other error
      if (error instanceof DOMException && error.name === 'AbortError') {
        // User cancelled - this is normal behavior
        console.log('Color picking cancelled by user');
      } else {
        console.error('Error picking color:', error);
        toast.error('Failed to pick color');
      }
    } finally {
      setIsPicking(false);
    }
  }, [isSupported, convertColor, addToHistory]);

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + E to trigger eyedropper
      if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        if (isSupported && !isPicking) {
          handleColorPick();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSupported, isPicking, handleColorPick]);

  // Handle color selection from history
  const handleHistoryColorSelect = useCallback((colorData: ColorData) => {
    setCurrentColor(colorData);
    toast.success('Color selected from history');
  }, []);

  // Handle history clear
  const handleHistoryClear = useCallback(() => {
    setColorHistory([]);
    saveColorHistory([]);
    toast.success('Color history cleared');
  }, [saveColorHistory]);

  // Handle history item removal
  const handleHistoryItemRemove = useCallback((hexColor: string) => {
    setColorHistory(prev => {
      const filtered = prev.filter(item => item.hex.toLowerCase() !== hexColor.toLowerCase());
      saveColorHistory(filtered);
      return filtered;
    });
    toast.success('Color removed from history');
  }, [saveColorHistory]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Online EyeDropper Tool
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Pick colors from anywhere on your screen with our professional eyedropper tool
        </p>
        
        {/* Pick Color Button */}
        <button
          onClick={handleColorPick}
          disabled={!isSupported || isPicking}
          aria-label={isPicking ? 'Picking color from screen' : 'Pick color from screen'}
          aria-describedby="eyedropper-instructions"
          className={`
            px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600
            ${isSupported && !isPicking
              ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isPicking ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Picking Color...
            </span>
          ) : isSupported ? (
            '🎨 Pick Color from Screen'
          ) : (
            '❌ Not Supported in This Browser'
          )}
        </button>
        
        {!isSupported && (
          <p className="text-sm text-red-500 mt-2">
            EyeDropper API is not supported in this browser. Please use Chrome, Edge, or other Chromium-based browsers.
          </p>
        )}

        {isSupported && (
          <div id="eyedropper-instructions" className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>💡 <strong>Tip:</strong> Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Ctrl+E</kbd> (or <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Cmd+E</kbd> on Mac) to quickly activate the eyedropper</p>
          </div>
        )}
      </div>

      {/* Format Selector */}
      <FormatSelector
        selectedFormat={selectedFormat}
        onFormatChange={setSelectedFormat}
      />

      {/* Color Display */}
      {currentColor && (
        <ColorDisplay
          colorData={currentColor}
          selectedFormat={selectedFormat}
        />
      )}

      {/* Color History */}
      <ColorHistory
        colors={colorHistory}
        onColorSelect={handleHistoryColorSelect}
        onClearHistory={handleHistoryClear}
        onRemoveItem={handleHistoryItemRemove}
      />
    </div>
  );
}
