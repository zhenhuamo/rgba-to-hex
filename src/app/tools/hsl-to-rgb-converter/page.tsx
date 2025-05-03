// Basic structure for HSL to RGB converter page
'use client';

import React, { useState, useEffect } from 'react';
// Fix: Use path mapping assuming it's configured correctly
import { hslToRgb, HSL, RGB } from '@/utils/colorConverter'; 

// TODO: Import components for better sliders, inputs, color previews, etc.

export default function HslToRgbConverterTool() { // Renamed component slightly for clarity
  const [hsl, setHsl] = useState<HSL>({ h: 180, s: 50, l: 50 });
  const [rgb, setRgb] = useState<RGB>({ r: 64, g: 191, b: 191 }); // Initial RGB for default HSL
  const [mounted, setMounted] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false); // State for copy feedback

  useEffect(() => {
    setMounted(true);
    // Check if running in iframe based on URL param ?embed=true
    const params = new URLSearchParams(window.location.search);
    setIsInIframe(params.get('embed') === 'true');
    // Initial calculation based on default HSL
    setRgb(hslToRgb(hsl));
    // TODO: Add URL param parsing for initial HSL (h, s, l params)
  }, []); // Run only once on mount

  // Recalculate RGB whenever HSL changes
  useEffect(() => {
    if (mounted) { // Ensure calculation happens client-side after mount
      setRgb(hslToRgb(hsl));
    }
  }, [hsl, mounted]);

  const handleChange = (key: keyof HSL) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    // Fix: Explicitly type prevHsl
    setHsl((prevHsl: HSL) => ({ ...prevHsl, [key]: value }));
  };

  // Function to copy RGB value to clipboard
  const copyRgbToClipboard = async () => {
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    try {
      await navigator.clipboard.writeText(rgbString);
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 2000); // Hide feedback after 2 seconds
    } catch (err) {
      console.error('Failed to copy RGB:', err);
      // Optionally show an error message to the user
    }
  };

  // Avoid rendering potentially mismatched server/client content before mount
  if (!mounted) {
    // Render a simple placeholder or skeleton during hydration
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-900"></div>;
  }

  return (
    // Adjust padding/styling based on iframe status
    <div className={`min-h-screen ${isInIframe ? 'bg-transparent p-4' : 'bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8'}`}>
      {/* Only show title if NOT in iframe */}
      {!isInIframe && (
         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">HSL to RGB Color Converter</h1>
         // TODO: Add introductory text here if needed for the standalone tool page itself (though most content goes on the showcase page)
      )}

      {/* Tool Core UI - Always visible */}
      <div className={`mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl ${isInIframe ? 'max-w-none p-4' : 'max-w-xl p-6'}`}>
        
        {/* HSL Input Section */}
        <div className="mb-6 space-y-4">
          {!isInIframe && <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">HSL Input</h2>}
          {/* Hue */}
          <div>
            <label htmlFor="hue" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Hue (H): {hsl.h}°</label>
            <div className="flex items-center space-x-3">
              <input
                type="range"
                id="hue"
                min="0"
                max="360"
                value={hsl.h}
                onChange={handleChange('h')}
                className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <input
                type="number"
                min="0"
                max="360"
                value={hsl.h}
                onChange={handleChange('h')}
                className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Saturation */}
          <div>
            <label htmlFor="saturation" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Saturation (S): {hsl.s}%</label>
             <div className="flex items-center space-x-3">
              <input
                type="range"
                id="saturation"
                min="0"
                max="100"
                value={hsl.s}
                onChange={handleChange('s')}
                className="w-full h-2 bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{ background: `linear-gradient(to right, hsl(${hsl.h}, 0%, 50%), hsl(${hsl.h}, 100%, 50%))` }}
              />
               <input
                type="number"
                min="0"
                max="100"
                value={hsl.s}
                onChange={handleChange('s')}
                className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Lightness */}
          <div>
            <label htmlFor="lightness" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Lightness (L): {hsl.l}%</label>
             <div className="flex items-center space-x-3">
              <input
                type="range"
                id="lightness"
                min="0"
                max="100"
                value={hsl.l}
                onChange={handleChange('l')}
                className="w-full h-2 bg-gradient-to-r from-black via-gray-500 to-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{ background: `linear-gradient(to right, hsl(${hsl.h}, ${hsl.s}%, 0%), hsl(${hsl.h}, ${hsl.s}%, 50%), hsl(${hsl.h}, ${hsl.s}%, 100%))` }}
              />
               <input
                type="number"
                min="0"
                max="100"
                value={hsl.l}
                onChange={handleChange('l')}
                className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-right dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Color Preview */}
        <div className="mb-6">
          {!isInIframe && <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Color Preview</h2>}
          <div 
            className="w-full h-32 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          ></div>
        </div>


        {/* RGB Output Section */}
        <div>
          {!isInIframe && <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">RGB Output</h2>}
          <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex items-center justify-between">
            <p className="text-lg font-mono text-gray-800 dark:text-gray-200">
              rgb({rgb.r}, {rgb.g}, {rgb.b})
            </p>
            <button
              onClick={copyRgbToClipboard}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              title="Copy RGB value"
            >
              {copiedRgb ? (
                // Checkmark icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                // Copy icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

         {/* Only show descriptive text if NOT in iframe */}
         {!isInIframe && (
           <div className="mt-10">
             {/* TODO: Add descriptive text, usage instructions, FAQ section (in English) */}
             <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About HSL to RGB Conversion</h2>
             <p className="text-gray-600 dark:text-gray-300 mb-4">Explanation goes here...</p>
             <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">How to Use</h3>
             <p className="text-gray-600 dark:text-gray-300 mb-4">Instructions go here...</p>
             <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">FAQ</h3>
             <p className="text-gray-600 dark:text-gray-300">Q&A goes here...</p>
           </div>
         )}
         
         {/* TODO: Add SEO metadata (likely via generateMetadata export in a separate file or layout) */}
      </div>
    </div>
  );
} 