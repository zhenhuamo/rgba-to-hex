"use client"; 

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { RGB, hsvToRgb } from '@/utils/colorConverter';

// Inner component containing the actual logic and UI
const HsvToRgbConverterTool = () => {
  // State for HSV inputs
  const [h, setH] = useState<number>(0);
  const [s, setS] = useState<number>(100);
  const [v, setV] = useState<number>(100);

  // State for RGB output - Initialize based on default HSV
  // Note: Direct calculation here assumes hsvToRgb is available and works.
  // In a real scenario, this initial calculation might happen in useEffect or be pre-calculated.
  // For now, we use the placeholder value, calculation logic comes in the next step.
  const [rgb, setRgb] = useState<RGB>({ r: 255, g: 0, b: 0 }); 
  const [isCopied, setIsCopied] = useState<boolean>(false); // State for copy feedback

  const searchParams = useSearchParams();
  const isEmbedMode = searchParams.get('embed') === 'true';

  // Perform conversion whenever h, s, or v changes
  useEffect(() => {
    const newRgb = hsvToRgb({ h, s, v });
    setRgb(newRgb);
    // Reset copied state if color changes
    setIsCopied(false); 
  }, [h, s, v]);

  // Event handlers with input validation
  const handleHueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    // Only update state if the parsed value is a valid number
    if (!isNaN(parsedValue)) {
       // Clamping is handled by hsvToRgb, but ensure state reflects user intention within bounds for UI consistency
       // Although hsvToRgb clamps, reflecting the clamped value back to the input immediately might be better UX.
       // Let's clamp here as well for the UI state.
      setH(Math.max(0, Math.min(360, parsedValue))); 
    } else if (value === '') {
        // Allow clearing the input, treat as 0 for calculation
        setH(0);
    }
  };

  const handleSaturationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
       // Clamp for UI state
      setS(Math.max(0, Math.min(100, parsedValue)));
    } else if (value === '') {
        setS(0);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);
     if (!isNaN(parsedValue)) {
       // Clamp for UI state
      setV(Math.max(0, Math.min(100, parsedValue)));
    } else if (value === '') {
        setV(0);
    }
  };

  // Copy handler
  const handleCopyRgb = async () => {
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    try {
      await navigator.clipboard.writeText(rgbString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy RGB value: ", err);
      // Optionally: Add user feedback for error
    }
  };

  const ConverterUI = (
    <>
      {/* Input Section */}
      <div className="space-y-4 mb-6">
        {/* Hue Input */}
        <div>
          <label htmlFor="h" className="block text-sm font-medium text-gray-700 mb-1">色相 (H): {h}°</label>
          <input
            type="number"
            id="h"
            name="h"
            min="0"
            max="360"
            value={h}
            onChange={handleHueChange}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Hue Input"
          />
          <input
            type="range"
            min="0"
            max="360"
            value={h}
            onChange={handleHueChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1"
            aria-label="Hue Slider"
          />
        </div>

        {/* Saturation Input */}
        <div>
          <label htmlFor="s" className="block text-sm font-medium text-gray-700 mb-1">饱和度 (S): {s}%</label>
          <input
            type="number"
            id="s"
            name="s"
            min="0"
            max="100"
            value={s}
            onChange={handleSaturationChange}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Saturation Input"
          />
           <input
            type="range"
            min="0"
            max="100"
            value={s}
            onChange={handleSaturationChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1"
            aria-label="Saturation Slider"
          />
        </div>

        {/* Value Input */}
        <div>
          <label htmlFor="v" className="block text-sm font-medium text-gray-700 mb-1">明度 (V): {v}%</label>
          <input
            type="number"
            id="v"
            name="v"
            min="0"
            max="100"
            value={v}
            onChange={handleValueChange}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Value Input"
          />
           <input
            type="range"
            min="0"
            max="100"
            value={v}
            onChange={handleValueChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1"
            aria-label="Value Slider"
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Result (RGB)</h2>
        <div className="p-4 bg-gray-100 rounded border border-gray-200 space-y-1">
          <p>R: <span className="font-mono float-right">{rgb.r}</span></p>
          <p>G: <span className="font-mono float-right">{rgb.g}</span></p>
          <p>B: <span className="font-mono float-right">{rgb.b}</span></p>
        </div>
        {/* Color Preview */}
        <div
            className="w-full h-16 border border-gray-300 rounded mt-2"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
            title={`RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`}
        ></div>
        {/* Add Copy Button */}
        <button
            onClick={handleCopyRgb}
            className={`w-full mt-2 px-4 py-2 rounded shadow-sm text-white font-medium transition-colors duration-150 ${isCopied ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}
        >
          {isCopied ? '已复制!' : '复制 RGB 值'}
        </button>
      </div>
    </>
  );

  // Conditionally apply wrapper styling
  return isEmbedMode ? (
    <div data-embed="true">
       {ConverterUI}
    </div>
   ) : (
     <div className="p-4 max-w-md mx-auto"> 
       {ConverterUI}
     </div>
   );
};

// Main exported component wraps the tool in Suspense
const HsvToRgbConverterPage = () => {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading Converter...</div>}> {/* Wrap the inner component */} 
      <HsvToRgbConverterTool />
    </Suspense>
  );
};

export default HsvToRgbConverterPage;
