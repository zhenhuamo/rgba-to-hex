'use client'; // Consider if client components are needed for interactions, otherwise remove for Server Component

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation'; // Added Navigation import
// import Head from 'next/head'; // Removed
// import type { Metadata } from 'next'; // Removed

// Placeholder for the actual converter component path
// import HsvHslConverterTool from '../hsv-hsl-converter/page'; // This would be if it were a direct component import

// export const metadata: Metadata = { // Entire block removed
// ... (previous content of metadata object)
// };

// Helper function for copying text
const copyToClipboard = async (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Failed to copy code!');
  }
};

// Custom color wheel component
const ColorWheel = () => {
  // Using CSS conic-gradient for a perfectly smooth color wheel
  return (
    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
      {/* Outer shadow for depth effect */}
      <div className="absolute w-20 h-20 rounded-full bg-white dark:bg-gray-800 opacity-10 blur-md"></div>
      
      {/* Main color wheel */}
      <div 
        className="w-20 h-20 rounded-full relative"
        style={{
          background: 'conic-gradient(' +
            'hsl(0, 100%, 50%), ' +
            'hsl(30, 100%, 50%), ' +
            'hsl(60, 100%, 50%), ' +
            'hsl(90, 100%, 50%), ' +
            'hsl(120, 100%, 50%), ' +
            'hsl(150, 100%, 50%), ' +
            'hsl(180, 100%, 50%), ' +
            'hsl(210, 100%, 50%), ' +
            'hsl(240, 100%, 50%), ' +
            'hsl(270, 100%, 50%), ' +
            'hsl(300, 100%, 50%), ' +
            'hsl(330, 100%, 50%), ' +
            'hsl(360, 100%, 50%))',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        }}
      >
        {/* Inner white circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-inner"></div>
      </div>
    </div>
  );
};

// Color model visualization component
const ColorModelDisplay = ({ type }: { type: string }) => {
  const isHSV = type === 'hsv';
  const gradientClass = isHSV 
    ? "bg-gradient-to-t from-black via-red-500 to-yellow-300"
    : "bg-gradient-to-t from-black via-red-500 to-white";
  
  return (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 rounded-lg overflow-hidden shadow-md ${gradientClass}`}></div>
      <p className="text-center text-xs mt-1 font-medium">{isHSV ? 'HSV' : 'HSL'}</p>
    </div>
  );
};

// Example code snippets
const jsHsvToHslCode = `function hsvToHsl(h, s, v) {
  // Convert s and v to 0-1 range for calculation
  s /= 100;
  v /= 100;

  const l = v * (1 - s / 2);
  let sHsl;
  if (l === 0 || l === 1) {
    sHsl = 0;
  } else {
    sHsl = (v - l) / Math.min(l, 1 - l);
  }

  return {
    h: h, // Hue remains the same
    s: Math.round(sHsl * 100),
    l: Math.round(l * 100)
  };
}

// Example usage:
// const hslColor = hsvToHsl(0, 100, 100); // Red
// console.log(hslColor); // { h: 0, s: 100, l: 50 }`;

const jsHslToHsvCode = `function hslToHsv(h, s, l) {
  // Convert s and l to 0-1 range for calculation
  s /= 100;
  l /= 100;

  const v = l + s * Math.min(l, 1 - l);
  let sHsv;
  if (v === 0) {
    sHsv = 0;
  } else {
    sHsv = 2 * (1 - l / v);
  }
  
  // Ensure sHsv is within 0-1 before converting back to percentage
  sHsv = Math.max(0, Math.min(1, sHsv));

  return {
    h: h, // Hue remains the same
    s: Math.round(sHsv * 100),
    v: Math.round(v * 100)
  };
}

// Example usage:
// const hsvColor = hslToHsv(0, 100, 50); // Red
// console.log(hsvColor); // { h: 0, s: 100, v: 100 }`;

const pythonHsvHslCode = `def hsv_to_hsl(h, s, v):
  s /= 100.0  # Convert to 0-1 range
  v /= 100.0

  l = v * (1 - s / 2.0)
  s_hsl = 0
  if not (l == 0 or l == 1):
    s_hsl = (v - l) / min(l, 1 - l)
  
  return {
    'h': h,
    's': round(s_hsl * 100),
    'l': round(l * 100)
  }

def hsl_to_hsv(h, s, l):
  s /= 100.0  # Convert to 0-1 range
  l /= 100.0

  v = l + s * min(l, 1 - l)
  s_hsv = 0
  if not (v == 0):
    s_hsv = 2 * (1 - l / v)
  
  # Ensure s_hsv is within 0-1 before converting back to percentage
  s_hsv = max(0, min(1, s_hsv))
  
  return {
    'h': h,
    's': round(s_hsv * 100),
    'v': round(v * 100)
  }

# Example usage:
# hsl_color = hsv_to_hsl(0, 100, 100) # Red
# print(hsl_color) # {'h': 0, 's': 100, 'l': 50}

# hsv_color = hsl_to_hsv(0, 100, 50) # Red
# print(hsv_color) # {'h': 0, 's': 100, 'v': 100}`;

const HsvHslContentPage = () => {
  const converterUrl = '/tools/hsv-hsl-converter?embed=true';
  const standaloneToolUrl = '/tools/hsv-hsl-converter';
  const [darkMode, setDarkMode] = useState(false);
  
  // Copy button states
  const [copiedJsHsvToHsl, setCopiedJsHsvToHsl] = useState(false);
  const [copiedJsHslToHsv, setCopiedJsHslToHsv] = useState(false);
  const [copiedPython, setCopiedPython] = useState(false);
  
  // Detect system dark mode preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDarkMode);
    }
  }, []);
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50'} transition-colors duration-300`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-opacity-30 transition-all"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      
        <div className="max-w-4xl mx-auto">
          <motion.header 
            className="text-center mb-10 md:mb-14 mt-6 md:mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full mb-4 shadow-md">
              <ColorWheel />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-600 dark:from-indigo-300 dark:via-purple-200 dark:to-blue-300 mb-4">
              HSV to HSL and HSL to HSV Color Converter
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Seamlessly convert between HSV (Hue, Saturation, Value) and HSL (Hue, Saturation, Lightness) color models.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSV to HSL</span>
              <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSL to HSV</span>
              <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Converter</span>
              <span className="bg-pink-100 dark:bg-pink-700/50 text-pink-800 dark:text-pink-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Models</span>
              <span className="bg-violet-100 dark:bg-violet-700/50 text-violet-800 dark:text-violet-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Online Tool</span>
            </div>
            
            <div className="flex justify-center items-center gap-2 my-6 mx-auto w-max">
              <ColorModelDisplay type="hsv" />
              <svg className="w-5 h-5 text-indigo-500 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <ColorModelDisplay type="hsl" />
            </div>
          </motion.header>

          {/* Embed the converter tool */}
          <motion.section 
            className="mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="sr-only">Interactive HSV HSL Converter Tool</h2>
            <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1.1] max-w-2xl mx-auto border border-indigo-200 dark:border-indigo-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-indigo-800/30 backdrop-blur-sm">
              <iframe
                src={converterUrl}
                title="HSV HSL Converter Tool"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href={standaloneToolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                 </svg>
                 Open Full Tool in New Tab
              </a>
            </div>
          </motion.section>

          <article className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 space-y-12">
            <section id="understanding-models">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4 !mt-0">Understanding HSV and HSL</h2>
              <p>
                HSV (Hue, Saturation, Value) and HSL (Hue, Saturation, Lightness) are two cylindrical-coordinate representations of points in an RGB color model. They were developed in the 1970s for computer graphics applications as more intuitive alternatives to the Cartesian RGB representation. Both are still widely used in image editing software, color pickers, and web design.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Hue (H)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">
                    In both HSV and HSL, Hue represents the dominant wavelength of the color and is typically expressed as an angle from 0 to 360 degrees. 0° (or 360°) is red, 120° is green, and 240° is blue. Other colors like yellow, cyan, and magenta fall between these primary points.
                  </p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Saturation (S)</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">
                    Saturation defines the intensity or purity of the color. A saturation of 0% means the color is grayscale (a shade of gray), while 100% saturation means the color is the purest form of that hue. The key difference between HSV and HSL lies in how they define saturation relative to brightness/lightness.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Value (V) in HSV</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">
                    Often synonymous with Brightness, Value defines the overall intensity from black (V=0%) to the pure, vibrant hue (V=100%). It can be visualized as how much black is mixed with a color. HSV is often preferred by artists as it more closely mimics how pigments mix (adding black darkens a color without losing its saturation relative to its new brightness).
                  </p>
                </div>
                
                <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-violet-700 dark:text-violet-300">Lightness (L) in HSL</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">
                    Lightness defines the intensity from black (L=0%) through the pure hue (L=50%) to white (L=100%). It can be visualized as how much black or white is mixed with a color. HSL is useful because L=0% is always black and L=100% is always white, which can be more intuitive for some applications, like generating color schemes with varying lightness.
                  </p>
                </div>
            </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Key Differences Summarized</h3>
                <p className="mb-0">
                  The primary distinction is how they handle saturation and brightness/lightness. HSV separates value (brightness) from chroma/saturation, making it useful for selecting a specific shade and then adjusting its brightness. HSL attempts to model perceptual lightness more directly, where maximum saturation occurs at 50% lightness. This converter allows you to easily switch between these two useful models, helping you understand their nuances and choose the best one for your specific task.
              </p>
            </div>
            </section>

            <section id="conversion-principles">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">Conversion Principles</h2>
              <p>
                Converting between HSV and HSL involves transforming the Saturation and Value/Lightness components, as Hue remains the same in both models (assuming the same 0-360 degree range for Hue).
                The formulas ensure that the perceived color is preserved while adapting to the different mathematical definitions of saturation and brightness/lightness in each model.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">HSV to HSL Conversion</h3>
                  <p className="mb-4">To convert from HSV (H<sub>sv</sub>, S<sub>sv</sub>, V<sub>sv</sub>) to HSL (H<sub>sl</sub>, S<sub>sl</sub>, L<sub>sl</sub>):</p>
                  <ol className="list-decimal list-outside pl-5 mb-4 space-y-2">
                    <li><strong>Hue (H<sub>sl</sub>):</strong> H<sub>sl</sub> = H<sub>sv</sub></li>
                    <li>
                      <strong>Lightness (L<sub>sl</sub>):</strong>
                      <br />
                      <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded my-2">L<sub>sl</sub> = V<sub>sv</sub> * (1 - S<sub>sv</sub> / 2)</code>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Note: V<sub>sv</sub> and S<sub>sv</sub> are typically in the range [0, 1] for calculations. If your inputs are percentages (0-100), divide them by 100 first.</span>
                    </li>
                    <li>
                      <strong>Saturation (S<sub>sl</sub>):</strong>
                      <br />
                      If L<sub>sl</sub> = 0 or L<sub>sl</sub> = 1, then S<sub>sl</sub> = 0 (the color is black or white, so saturation is undefined or zero).
                      <br />
                      Otherwise: <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded my-2">S<sub>sl</sub> = (V<sub>sv</sub> - L<sub>sl</sub>) / min(L<sub>sl</sub>, 1 - L<sub>sl</sub>)</code>
                    </li>
                  </ol>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">HSL to HSV Conversion</h3>
                  <p className="mb-4">To convert from HSL (H<sub>sl</sub>, S<sub>sl</sub>, L<sub>sl</sub>) to HSV (H<sub>sv</sub>, S<sub>sv</sub>, V<sub>sv</sub>):</p>
                  <ol className="list-decimal list-outside pl-5 mb-4 space-y-2">
                    <li><strong>Hue (H<sub>sv</sub>):</strong> H<sub>sv</sub> = H<sub>sl</sub></li>
                    <li>
                      <strong>Value (V<sub>sv</sub>):</strong>
                      <br />
                      <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded my-2">V<sub>sv</sub> = L<sub>sl</sub> + S<sub>sl</sub> * min(L<sub>sl</sub>, 1 - L<sub>sl</sub>)</code>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Note: L<sub>sl</sub> and S<sub>sl</sub> are typically in the range [0, 1] for calculations.</span>
                    </li>
                    <li>
                      <strong>Saturation (S<sub>sv</sub>):</strong>
                      <br />
                      If V<sub>sv</sub> = 0, then S<sub>sv</sub> = 0 (the color is black).
                      <br />
                      Otherwise: <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded my-2">S<sub>sv</sub> = 2 * (1 - L<sub>sl</sub> / V<sub>sv</sub>)</code>
                    </li>
                  </ol>
                </div>
            </div>
              
              <p className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-sm">
                The resulting H values are in [0, 360), and S, L, V values are in [0, 1] (which are then typically multiplied by 100 to get percentages). These formulas are implemented in the converter tool you see on this page, ensuring accurate and consistent transformations between the two color spaces.
              </p>
            </section>

            <section id="code-examples" className="not-prose">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4 prose dark:prose-invert lg:prose-xl max-w-none">Code Examples (JavaScript & Python)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5 prose dark:prose-invert lg:prose-xl max-w-none">
                If you need to perform these conversions programmatically in your own projects, here are some example functions in JavaScript and Python.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript Function for HSV to HSL</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                  <pre><code className="language-javascript">{jsHsvToHslCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(jsHsvToHslCode, setCopiedJsHsvToHsl)}
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedJsHsvToHsl ? 'bg-indigo-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                  >
                    {copiedJsHsvToHsl ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript Function for HSL to HSV</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                  <pre><code className="language-javascript">{jsHslToHsvCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(jsHslToHsvCode, setCopiedJsHslToHsv)}
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedJsHslToHsv ? 'bg-indigo-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                  >
                    {copiedJsHslToHsv ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python Functions for HSV-HSL Conversion</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto shadow-inner">
                  <pre><code className="language-python">{pythonHsvHslCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(pythonHsvHslCode, setCopiedPython)}
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded transition-colors ${copiedPython ? 'bg-indigo-600 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'}`}
                  >
                    {copiedPython ? 'Copied!' : 'Copy Code'}
                  </button>
            </div>
          </div>
        </section>

            <section id="faq">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-pink-500 pl-4">Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-6">
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    What is the main difference between HSV and HSL?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    The primary difference lies in how they define saturation and brightness. HSV&apos;s &quot;Value&quot; represents the brightness of the color (like mixing with black), making it good for artistic tasks. HSL&apos;s &quot;Lightness&quot; represents the brightness from black to white (like mixing with gray), which is often more intuitive for web design and creating color variations.
                  </p>
                </details>
                
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    Is Hue the same in HSV and HSL?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Yes, the Hue component is typically identical in both models, usually represented as an angle from 0 to 360 degrees (e.g., 0° for red, 120° for green, 240° for blue). This is why conversion between HSV and HSL only requires transforming the Saturation and Value/Lightness components.
                  </p>
                </details>
                
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    When should I use HSV over HSL, or vice versa?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Use HSV if you want to select a pure color and then adjust its brightness without affecting its saturation relative to that brightness (common in digital painting). Use HSL if you want to create variations of a color by adjusting its lightness towards pure black or pure white, or for web development tasks where HSL is a common standard (e.g., CSS).
                  </p>
                </details>
                
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    Why does a fully saturated HSL color (S=100%) sometimes look less vibrant than a fully saturated HSV color (S=100%)?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    This is due to their definitions. In HSL, maximum saturation (S=100%) occurs at L=50% (mid-lightness). As L moves towards 0% (black) or 100% (white), the color inherently becomes less chromatic, even if S remains 100%. In HSV, maximum saturation (S=100%) can occur at maximum value (V=100%), which often represents the most vibrant form of the color.
                  </p>
                </details>
                
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    Can all RGB colors be represented in HSV and HSL?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    Yes, both HSV and HSL are transformations of the RGB color space and can represent any color that RGB can. They just provide a different way to parameterize those colors. This means you can convert any RGB color to either HSV or HSL and back to RGB without losing information.
                  </p>
                </details>
                
                <details className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-600/50 shadow-sm group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center hover:text-indigo-600 dark:hover:text-indigo-400">
                    Does this converter handle transparency (alpha channel)?
                    <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">
                    No, HSV and HSL color models inherently do not include an alpha channel for transparency. This tool converts only the opaque color components. For transparency, you would typically use models like HSVA or HSLA, which add an alpha channel to the base HSV or HSL model.
                  </p>
                </details>
              </div>
            </section>

            <section id="use-cases">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Use Cases: When to Use Which?</h2>
              <p>
                While both HSV and HSL aim to be more intuitive than RGB for human interaction, they have slightly different strengths that make them suitable for different tasks:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">When to Use HSV</h3>
                  <ul className="list-disc list-outside pl-5 space-y-3">
                    <li>
                      <strong>Artistic Color Selection:</strong> Artists often prefer HSV because the Value component directly controls the brightness (or amount of black mixed with the color) while preserving its saturation relative to that brightness. This mimics how physical pigments behave when mixed with black or white.
                    </li>
                    <li>
                      <strong>Image Analysis & Computer Vision:</strong> HSV can be useful for object detection or segmentation based on color, especially when lighting conditions might vary. The separation of hue and saturation from value can make color identification more robust against changes in illumination.
                    </li>
                    <li>
                      <strong>Choosing a specific shade and then its brightness:</strong> If you want to select a particular vibrant color and then control how bright or dark it appears, HSV is very straightforward.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">When to Use HSL</h3>
                  <ul className="list-disc list-outside pl-5 space-y-3">
                    <li>
                      <strong>Web Design & CSS:</strong> HSL is widely adopted in CSS3 and is often preferred by web developers. The Lightness component is arguably more intuitive for generating color schemes where you want to vary shades from light to dark while maintaining a similar perceived saturation.
                    </li>
                    <li>
                      <strong>Generating Palettes with Consistent Lightness:</strong> When you need to create a set of colors that should feel equally light or dark, HSL can be easier to work with. Adjusting L gives a more direct path to pure white (L=100%) and pure black (L=0%).
                    </li>
                    <li>
                      <strong>User Interfaces for Non-Artists:</strong> For users less familiar with color theory, HSL might sometimes be easier to grasp because a single Lightness slider takes you from black through the chosen color to white.
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-lg shadow-sm">
                Ultimately, the choice between HSV and HSL often comes down to the specific application and personal preference. Many design tools offer both, and understanding their differences allows you to leverage the strengths of each. This converter helps you seamlessly translate between them, providing flexibility in your color workflow.
              </p>
            </section>

            <section id="how-to-use">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">How to Use This Converter</h2>
              <p>
                Using this HSV/HSL converter is straightforward. The tool is divided into two main sections: one for converting HSV to HSL, and another for converting HSL to HSV.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">HSV to HSL Conversion</h3>
                  <ol className="list-decimal list-outside pl-5 space-y-3">
                    <li>
                      <strong>Locate the &quot;HSV to HSL&quot; Section:</strong> This is typically on the left side of the tool.
                    </li>
                    <li>
                      <strong>Enter Your HSV Values:</strong>
                      <ul className="list-disc list-outside pl-6 mt-1 space-y-1">
                        <li><strong>H (Hue):</strong> Enter a value between 0 and 360.</li>
                        <li><strong>S (Saturation):</strong> Enter a value between 0 and 100 (%).</li>
                        <li><strong>V (Value):</strong> Enter a value between 0 and 100 (%).</li>
                      </ul>
                    </li>
                    <li>
                      <strong>View HSL Result:</strong> As you type or adjust the HSV values, the corresponding HSL values (H, S, L) will automatically update in the &quot;Resulting HSL&quot; area within that section.
                    </li>
                    <li>
                      <strong>Copy HSL (Optional):</strong> Click the &quot;Copy HSL&quot; button to copy the HSL color string (e.g., <code>hsl(H, S%, L%)</code>) to your clipboard.
                    </li>
                  </ol>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">HSL to HSV Conversion</h3>
                  <ol className="list-decimal list-outside pl-5 space-y-3">
                    <li>
                      <strong>Locate the &quot;HSL to HSV&quot; Section:</strong> This is typically on the right side of the tool.
                    </li>
                    <li>
                      <strong>Enter Your HSL Values:</strong>
                      <ul className="list-disc list-outside pl-6 mt-1 space-y-1">
                        <li><strong>H (Hue):</strong> Enter a value between 0 and 360.</li>
                        <li><strong>S (Saturation):</strong> Enter a value between 0 and 100 (%).</li>
                        <li><strong>L (Lightness):</strong> Enter a value between 0 and 100 (%).</li>
          </ul>
                    </li>
                    <li>
                      <strong>View HSV Result:</strong> As you type or adjust the HSL values, the corresponding HSV values (H, S, V) will automatically update in the &quot;Resulting HSV&quot; area within that section.
                    </li>
                    <li>
                      <strong>Copy HSV (Optional):</strong> Click the &quot;Copy HSV&quot; button to copy the HSV color string (e.g., <code>hsv(H, S%, V%)</code>) to your clipboard.
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                  <strong>Note:</strong> The input fields automatically clamp values to their valid ranges. For instance, if you enter a Hue greater than 360, it will be adjusted to 360. If you enter non-numeric characters, they will generally be ignored or treated as 0.
                </p>
              </div>
        </section>

            <section id="related-tools">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-violet-500 pl-4">Related Color Tools</h2>
              <p>Explore other useful color conversion and manipulation tools:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                <a href="/tools/rgb-to-hsv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>RGB to HSV Converter</span>
                </a>

                <a href="/tools/rgb-to-hsl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-100 dark:border-purple-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>RGB to HSL Converter</span>
                </a>

                <a href="/tools/hsv-to-rgb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>HSV to RGB Converter</span>
                </a>

                <a href="/tools/hsl-to-rgb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg border border-pink-100 dark:border-pink-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>HSL to RGB Converter</span>
                </a>

                <a href="/tools/rgb-to-hex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>RGB to HEX Converter</span>
                </a>

                <a href="/tools/hex-to-rgb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-100 dark:border-teal-800 hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span>HEX to RGB Converter</span>
                </a>
              </div>
              
              <p className="text-center mt-6">
                <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Explore All Color Tools
                </a>
              </p>
            </section>
      </article>
        </div>
      </div>
      
      <footer className="mt-12 pt-6 pb-10 border-t border-gray-200 dark:border-gray-700 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Color Converter Tools. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Advanced color tools for designers and developers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HsvHslContentPage; 