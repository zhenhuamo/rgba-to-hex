'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'; // Import Image if using the logo

// --- Conversion Function ---
function componentToHex(c: number): string {
  // Clamp value between 0 and 255 and convert to integer
  const intValue = Math.max(0, Math.min(255, Math.round(c)));
  const hex = intValue.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex6Digit(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// --- Helper to validate RGB value ---
const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, Math.round(value)));
};

// --- Main Converter Component ---
function RgbToHexConverterContent() {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';

  // Initialize state from URL params or defaults
  const initialR = clamp(parseInt(searchParams.get('r') || '255', 10), 0, 255);
  const initialG = clamp(parseInt(searchParams.get('g') || '100', 10), 0, 255);
  const initialB = clamp(parseInt(searchParams.get('b') || '50', 10), 0, 255);

  const [r, setR] = useState<number>(initialR);
  const [g, setG] = useState<number>(initialG);
  const [b, setB] = useState<number>(initialB);
  const [hexResult, setHexResult] = useState<string>('');
  const [copiedHex, setCopiedHex] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle RGB input changes
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    const num = parseInt(value, 10);
    setter(isNaN(num) ? 0 : clamp(num, 0, 255));
  };

  // Perform conversion when RGB values change
  useEffect(() => {
    const result = rgbToHex6Digit(r, g, b);
    setHexResult(result);
  }, [r, g, b]);

  // Copy HEX to clipboard
  const copyHexToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hexResult);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    } catch (err) {
      console.error('Failed to copy HEX:', err);
    }
  };

  // Style for the color preview box based on input RGB
  const inputColorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  // Don't render until mounted on client
  if (!mounted) {
      return <div className={`min-h-screen ${isEmbed ? '' : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'}`}></div>; // Basic placeholder during SSR/hydration
  }

  return (
    <div className={`p-4 md:p-6 ${isEmbed ? 'h-full' : 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'}`}>
      <div className={`max-w-lg mx-auto ${isEmbed ? 'bg-transparent' : 'bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl'}`}>

        {!isEmbed && (
          <div className="text-center mb-8">
             <div className="flex items-center justify-center gap-3 mb-4">
               <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                 <Image 
                   src="/rgb.svg" 
                   alt="RGB to HEX Converter Logo" 
                   width={32}
                   height={32}
                   priority
                 />
               </div>
               <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
                 RGB to HEX Converter
               </h1>
             </div>
             <p className="text-gray-600 dark:text-gray-300">
               Convert RGB values to 6-digit HEX codes.
             </p>
           </div>
        )}

        {/* Color Preview */}
        <div className="mb-6">
          <div
            className="w-full h-32 md:h-40 rounded-lg border border-gray-300 dark:border-gray-600 shadow-inner"
            style={inputColorStyle}
          ></div>
        </div>

        {/* Input Sliders/Fields */}
        <div className="space-y-4 mb-6">
          {/* R Slider/Input */}
          <div className="flex items-center gap-3">
            <label htmlFor="r-input" className="w-6 font-medium text-red-600">R</label>
            <input
              type="range" min="0" max="255" value={r}
              onChange={(e) => setR(parseInt(e.target.value, 10))}
              className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-red-500"
              id="r-range"
            />
            <input
              type="number" min="0" max="255" value={r}
              onChange={(e) => handleInputChange(setR, e.target.value)}
              className="w-16 p-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-center"
              id="r-input"
            />
          </div>
          {/* G Slider/Input */}
           <div className="flex items-center gap-3">
            <label htmlFor="g-input" className="w-6 font-medium text-green-600">G</label>
            <input
              type="range" min="0" max="255" value={g}
              onChange={(e) => setG(parseInt(e.target.value, 10))}
              className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-green-500"
              id="g-range"
            />
            <input
              type="number" min="0" max="255" value={g}
              onChange={(e) => handleInputChange(setG, e.target.value)}
              className="w-16 p-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-center"
              id="g-input"
            />
          </div>
          {/* B Slider/Input */}
           <div className="flex items-center gap-3">
            <label htmlFor="b-input" className="w-6 font-medium text-blue-600">B</label>
            <input
              type="range" min="0" max="255" value={b}
              onChange={(e) => setB(parseInt(e.target.value, 10))}
              className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-500"
              id="b-range"
            />
            <input
              type="number" min="0" max="255" value={b}
              onChange={(e) => handleInputChange(setB, e.target.value)}
              className="w-16 p-1 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 text-center"
              id="b-input"
            />
          </div>
        </div>

        {/* Result Section */}
        <div className="border-t dark:border-gray-700 pt-6">
           <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Resulting HEX Code</h2>
           <div className="flex">
              <input
                type="text"
                value={hexResult}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <button
                onClick={copyHexToClipboard}
                className={`px-4 py-2 ${copiedHex ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-r-lg transition-colors flex items-center gap-1 whitespace-nowrap`}
              >
                {copiedHex ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 5l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
             <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                RGB: ({r}, {g}, {b})
             </p>
        </div>
      </div>
    </div>
  );
}

// --- Page component with Suspense for useSearchParams --- 
export default function RgbToHexConverterPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}> 
            <RgbToHexConverterContent />
        </Suspense>
    );
} 