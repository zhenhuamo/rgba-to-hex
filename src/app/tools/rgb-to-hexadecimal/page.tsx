'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

// RGB to Hexadecimal conversion function
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

// Validate RGB value
const validateRGB = (value: string): number => {
  const num = parseInt(value);
  if (isNaN(num)) return 0;
  return Math.max(0, Math.min(255, num));
};

// Common colors data
const commonColors = [
  { name: 'Red', rgb: [255, 0, 0], hex: '#FF0000' },
  { name: 'Green', rgb: [0, 255, 0], hex: '#00FF00' },
  { name: 'Blue', rgb: [0, 0, 255], hex: '#0000FF' },
  { name: 'Yellow', rgb: [255, 255, 0], hex: '#FFFF00' },
  { name: 'Cyan', rgb: [0, 255, 255], hex: '#00FFFF' },
  { name: 'Magenta', rgb: [255, 0, 255], hex: '#FF00FF' },
  { name: 'Black', rgb: [0, 0, 0], hex: '#000000' },
  { name: 'White', rgb: [255, 255, 255], hex: '#FFFFFF' },
  { name: 'Gray', rgb: [128, 128, 128], hex: '#808080' },
  { name: 'Orange', rgb: [255, 165, 0], hex: '#FFA500' },
  { name: 'Purple', rgb: [128, 0, 128], hex: '#800080' },
  { name: 'Brown', rgb: [165, 42, 42], hex: '#A52A2A' },
];

export default function RGBToHexadecimalPage() {
  const [r, setR] = useState<string>('255');
  const [g, setG] = useState<string>('0');
  const [b, setB] = useState<string>('0');
  const [hexColor, setHexColor] = useState<string>('#FF0000');
  const [copied, setCopied] = useState<boolean>(false);

  // Update hex color when RGB values change
  useEffect(() => {
    const rVal = validateRGB(r);
    const gVal = validateRGB(g);
    const bVal = validateRGB(b);
    setHexColor(rgbToHex(rVal, gVal, bVal));
  }, [r, g, b]);

  // Copy to clipboard function
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Handle input change
  const handleInputChange = (value: string, setter: (value: string) => void) => {
    // Allow empty string or valid numbers
    if (value === '' || /^\d+$/.test(value)) {
      setter(value);
    }
  };

  // Handle color picker change
  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    // Convert hex to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      setR(parseInt(result[1], 16).toString());
      setG(parseInt(result[2], 16).toString());
      setB(parseInt(result[3], 16).toString());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              RGB to Hexadecimal
              <span className="block text-blue-200">Color Converter</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform RGB color values to hexadecimal format instantly with our professional-grade RGB to hexadecimal converter.
              Perfect for web developers, designers, and digital artists who need accurate RGB to hexadecimal conversion.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Real-time Preview
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant Copy
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% Accurate
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Converter Tool - Moved to top for immediate access */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">RGB to Hexadecimal Converter</h2>
            <p className="text-gray-600">Enter RGB values or use the color picker to get instant RGB to hexadecimal conversion with real-time preview</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  RGB Input
                </h3>

                {/* RGB Input Fields */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Red
                    </label>
                    <input
                      type="text"
                      value={r}
                      onChange={(e) => handleInputChange(e.target.value, setR)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-center font-mono bg-white"
                      placeholder="255"
                    />
                    <p className="text-xs text-gray-500 mt-1 text-center">0-255</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Green
                    </label>
                    <input
                      type="text"
                      value={g}
                      onChange={(e) => handleInputChange(e.target.value, setG)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-center font-mono bg-white"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1 text-center">0-255</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blue
                    </label>
                    <input
                      type="text"
                      value={b}
                      onChange={(e) => handleInputChange(e.target.value, setB)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-center font-mono bg-white"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1 text-center">0-255</p>
                  </div>
                </div>

                {/* Color Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or Use Color Picker
                  </label>
                  <input
                    type="color"
                    value={hexColor}
                    onChange={handleColorPickerChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Live Preview & Output
                </h3>

                {/* Color Preview */}
                <div className="mb-6">
                  <div
                    className="w-full h-40 rounded-xl border-4 border-white shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: hexColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-mono">
                      {hexColor}
                    </div>
                  </div>
                </div>

                {/* Hex Output */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hexadecimal Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={hexColor}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg bg-white text-lg font-mono text-center"
                      />
                      <button
                        onClick={() => copyToClipboard(hexColor)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        {copied ? (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Copied!
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* RGB Display */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      RGB Values
                    </label>
                    <div className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-lg font-mono text-center">
                      rgb({validateRGB(r)}, {validateRGB(g)}, {validateRGB(b)})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement Section - Moved below converter tool */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our RGB to Hexadecimal Converter?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Manual RGB to Hexadecimal Conversion Errors</h3>
              <p className="text-gray-600">Converting RGB to hexadecimal manually is error-prone and time-consuming. One mistake in RGB to hexadecimal conversion can break your entire color scheme.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Wasted Development Time</h3>
              <p className="text-gray-600">Developers spend precious time looking up conversion tables or using calculators instead of focusing on code.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Accurate RGB to Hexadecimal Results</h3>
              <p className="text-gray-600">Get perfect hexadecimal codes instantly with real-time RGB to hexadecimal preview, ensuring your colors look exactly as intended.</p>
            </div>
          </div>
        </div>

        {/* User Scenarios Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Web Development RGB to Hexadecimal</h3>
              <p className="text-gray-600 mb-4">Convert design tool RGB values to CSS-ready hexadecimal codes for consistent styling. Our RGB to hexadecimal converter ensures perfect color accuracy across your website.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm font-mono">
                color: #FF6B35;
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Graphic Design RGB to Hexadecimal</h3>
              <p className="text-gray-600 mb-4">Transfer colors between Photoshop, Illustrator, and web platforms with perfect RGB to hexadecimal accuracy.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm">
                RGB(255, 107, 53) → #FF6B35
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">Ensure consistent colors across iOS, Android, and web versions of your app.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm font-mono">
                backgroundColor: &apos;#FF6B35&apos;
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand Management</h3>
              <p className="text-gray-600 mb-4">Maintain consistent brand colors across all digital and print materials.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm">
                Brand Primary: #FF6B35
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Visualization RGB to Hexadecimal</h3>
              <p className="text-gray-600 mb-4">Convert RGB values to hexadecimal for charts, graphs, and dashboard styling in libraries like D3.js. Perfect RGB to hexadecimal conversion for data visualization.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm font-mono">
                fill: &apos;#FF6B35&apos;
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Ensure color consistency across email templates, social media graphics, and web ads.</p>
              <div className="bg-gray-50 p-3 rounded-lg text-sm">
                CTA Button: #FF6B35
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How RGB to Hexadecimal Conversion Works</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  RGB to hexadecimal conversion is a fundamental process in digital color representation.
                  RGB (Red, Green, Blue) uses decimal values from 0-255 for each color channel, while
                  hexadecimal uses base-16 notation with values from 00-FF. Understanding RGB to hexadecimal conversion is essential for modern web development.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">RGB to Hexadecimal Conversion Process:</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">1.</span>
                      <span>Convert each RGB value (0-255) to hexadecimal format (00-FF)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">2.</span>
                      <span>Combine the three hexadecimal values with a # prefix</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">3.</span>
                      <span>Example RGB to hexadecimal: RGB(255, 107, 53) → #FF6B35</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">RGB to Hexadecimal Conversion Example:</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm text-gray-600">Red Channel</div>
                  <div className="font-mono text-lg">255 → FF</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm text-gray-600">Green Channel</div>
                  <div className="font-mono text-lg">107 → 6B</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="text-sm text-gray-600">Blue Channel</div>
                  <div className="font-mono text-lg">53 → 35</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center">
                  <div className="text-sm opacity-90">Final Result</div>
                  <div className="font-mono text-xl font-bold">#FF6B35</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Colors Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common RGB to Hexadecimal Color Conversions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Color Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">RGB Values</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Hexadecimal</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Preview</th>
                </tr>
              </thead>
              <tbody>
                {commonColors.map((color, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{color.name}</td>
                    <td className="py-4 px-6 font-mono text-gray-700 bg-gray-50 rounded">
                      rgb({color.rgb.join(', ')})
                    </td>
                    <td className="py-4 px-6 font-mono text-gray-700 bg-blue-50 rounded font-semibold">
                      {color.hex}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-12 h-12 rounded-lg border-2 border-gray-200 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <button
                          onClick={() => copyToClipboard(color.hex)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                        >
                          Copy
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our RGB to Hexadecimal Converter?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast RGB to Hexadecimal</h3>
              <p className="text-gray-600">Instant RGB to hexadecimal conversion with real-time preview. No waiting, no delays.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Accurate RGB to Hexadecimal</h3>
              <p className="text-gray-600">Mathematically precise RGB to hexadecimal conversions with no rounding errors.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">Works perfectly on all devices - desktop, tablet, and mobile.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">All conversions happen locally. Your data never leaves your device.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What is the difference between RGB and hexadecimal color formats?
              </h3>
              <p className="text-gray-700 leading-relaxed">RGB uses decimal numbers (0-255) for each color channel, while hexadecimal uses base-16 notation (00-FF). Both represent the same colors but in different numerical systems. RGB to hexadecimal conversion is essential because RGB is more intuitive for humans, while hexadecimal is more compact and widely used in web development.</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Why do web developers prefer hexadecimal color codes?
              </h3>
              <p className="text-gray-700 leading-relaxed">Hexadecimal codes are more compact and widely supported in CSS. They&apos;re easier to read and remember, making them the standard for web development. A 6-character hex code is much shorter than writing out three separate RGB values.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Can I convert any RGB value to hexadecimal?
              </h3>
              <p className="text-gray-700 leading-relaxed">Yes, any RGB value with components from 0-255 can be converted to hexadecimal. Our RGB to hexadecimal tool automatically validates input values to ensure accurate conversion. Invalid values are automatically corrected to the nearest valid range for perfect RGB to hexadecimal results.</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Is there a loss of color accuracy when converting RGB to hexadecimal?
              </h3>
              <p className="text-gray-700 leading-relaxed">No, there&apos;s no loss of accuracy in RGB to hexadecimal conversion. Both RGB and hexadecimal represent the same color space with identical precision. The RGB to hexadecimal conversion is mathematically exact - each RGB value maps to exactly one hexadecimal value and vice versa.</p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How fast is the conversion process?
              </h3>
              <p className="text-gray-700 leading-relaxed">The RGB to hexadecimal conversion happens instantly as you type. Our tool processes the RGB to hexadecimal conversion in real-time using client-side JavaScript, so there&apos;s no server delay. You&apos;ll see the RGB to hexadecimal results immediately with live color preview.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Need More Color Tools?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our complete collection of professional color conversion tools.
            From HSL to CMYK, we&apos;ve got all your color conversion needs covered.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View All Color Tools
          </Link>
        </div>
      </main>
    </div>
  );
}
