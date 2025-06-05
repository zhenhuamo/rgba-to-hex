'use client';

import React, { useState, useEffect } from 'react';
import { HSL, RGB, OKLCH } from '@/utils/colorConverter';
import { HarmonyType, generateColorHarmony } from '@/utils/colorHarmony';
import HslInput from '@/components/HslInput';
import ColorHarmonyPreview from '@/components/ColorHarmonyPreview';
import HarmonyTypeSelector from '@/components/HarmonyTypeSelector';
import HarmonyExportOptions from '@/components/HarmonyExportOptions';
import Link from 'next/link';

// Type guard functions to check the color type
function isHSL(color: HSL | RGB | OKLCH): color is HSL {
  return 'h' in color && 's' in color && 'l' in color;
}

function isRGB(color: HSL | RGB | OKLCH): color is RGB {
  return 'r' in color && 'g' in color && 'b' in color;
}

// Helper function to convert any color type to HSL string for CSS
function colorToCssString(color: HSL | RGB | OKLCH): string {
  if (isHSL(color)) {
    return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
  } else if (isRGB(color)) {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  } else {
    // OKLCH - simplified fallback to gray if we can't handle it
    return `rgb(200, 200, 200)`;
  }
}

const ColorHarmonyToolPage: React.FC = () => {
  const [baseColor, setBaseColor] = useState<HSL>({ h: 210, s: 80, l: 50 });
  const [harmonyType, setHarmonyType] = useState<HarmonyType>('complementary');
  const [harmony, setHarmony] = useState(generateColorHarmony(baseColor, harmonyType));
  const [showExport, setShowExport] = useState(false);
  const [showTip, setShowTip] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  // Color presets for quick inspiration
  const colorPresets = [
    { name: 'Ocean Blue', color: { h: 200, s: 75, l: 50 } },
    { name: 'Forest Green', color: { h: 120, s: 60, l: 45 } },
    { name: 'Sunset Orange', color: { h: 25, s: 85, l: 55 } },
    { name: 'Royal Purple', color: { h: 270, s: 70, l: 45 } },
    { name: 'Coral Pink', color: { h: 350, s: 75, l: 65 } },
  ];

  // Apply color preset
  const applyPreset = (preset: { name: string, color: HSL }) => {
    setBaseColor(preset.color);
    setSelectedPreset(preset.name);
  };

  useEffect(() => {
    setHarmony(generateColorHarmony(baseColor, harmonyType));
  }, [baseColor, harmonyType]);

  // Reset selected preset when color is manually changed
  useEffect(() => {
    const matchingPreset = colorPresets.find(
      preset => 
        preset.color.h === baseColor.h && 
        preset.color.s === baseColor.s && 
        preset.color.l === baseColor.l
    );
    
    if (!matchingPreset) {
      setSelectedPreset(null);
    }
  }, [baseColor]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 mb-3">
            Color Harmony Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create beautiful color schemes based on color theory principles. Perfect for web design, UI/UX, and creative projects.
          </p>
        </div>

        {/* Quick Tip - NEW */}
        {showTip && (
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300 p-4 mb-6 rounded-r-lg shadow-sm relative">
            <button
              onClick={() => setShowTip(false)}
              className="absolute top-2 right-2 text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  <strong>Quick Tip:</strong> Start by selecting a base color using the HSL sliders, then choose a harmony type to generate your scheme. Click &quot;Export Color Scheme&quot; when youre ready to use your colors in your project.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Tool Interface */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Left Column - Controls */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                {/* Color Presets - NEW */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-500 dark:text-indigo-300 p-2 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </span>
                    Color Presets
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {colorPresets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => applyPreset(preset)}
                        className={`p-2 rounded-md text-xs text-center transition-all ${
                          selectedPreset === preset.name 
                            ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 ring-2 ring-indigo-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        style={{
                          boxShadow: `inset 0 -2px 0 ${`hsl(${preset.color.h}, ${preset.color.s}%, ${preset.color.l}%)`}`
                        }}
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 p-2 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Base Color
                  </h2>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <HslInput value={baseColor} onChange={setBaseColor} />
                    
                    {/* Color Preview - NEW */}
                    <div className="mt-4 flex items-center">
                      <div 
                        className="w-10 h-10 rounded-md shadow-inner border border-gray-300 dark:border-gray-600 mr-3"
                        style={{backgroundColor: `hsl(${baseColor.h}, ${baseColor.s}%, ${baseColor.l}%)`}}
                      ></div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Selected Base Color</p>
                        <p className="text-sm font-mono">hsl({baseColor.h}, {baseColor.s}%, {baseColor.l}%)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 p-2 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </span>
                    Harmony Type
                  </h2>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <HarmonyTypeSelector 
                      selectedType={harmonyType} 
                      onChange={setHarmonyType}
                    />
                    
                    {/* Harmony Description - NEW */}
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      {harmonyType === 'complementary' && 
                        <p>Colors opposite on the color wheel. Creates high contrast and visual interest.</p>
                      }
                      {harmonyType === 'analogous' && 
                        <p>Adjacent colors on the color wheel. Creates a harmonious and comfortable effect.</p>
                      }
                      {harmonyType === 'triadic' && 
                        <p>Three colors evenly spaced on the color wheel. Creates balanced and vibrant schemes.</p>
                      }
                      {harmonyType === 'split-complementary' && 
                        <p>A base color with two colors adjacent to its complement. High contrast with less tension.</p>
                      }
                      {harmonyType === 'tetradic' && 
                        <p>Four colors arranged as two complementary pairs. Rich and balanced color schemes.</p>
                      }
                      {harmonyType === 'monochromatic' && 
                        <p>Different shades and tints of a single hue. Creates elegant and cohesive designs.</p>
                      }
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                    onClick={() => setShowExport(!showExport)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {showExport ? 'Hide Export Options' : 'Export Color Scheme'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="col-span-2 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 p-2 rounded-md mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                </span>
                Color Harmony Preview
              </h2>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <ColorHarmonyPreview harmony={harmony} className="mb-3" />
                
                {/* Sample UI - NEW */}
                <div className="mt-6 border-t pt-5 border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sample Application Preview</h3>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                    {/* Mini website mockup */}
                    <div 
                      className="h-8 flex items-center px-3"
                      style={{ backgroundColor: harmony.variations[0]?.hex || colorToCssString(harmony.baseColor) }}
                    >
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div 
                        className="p-3 md:w-1/4"
                        style={{ backgroundColor: harmony.variations[1]?.hex || colorToCssString(harmony.baseColor) }}
                      >
                        <div className="h-4 w-2/3 bg-white/80 rounded mb-2"></div>
                        <div className="h-4 w-1/2 bg-white/80 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-white/80 rounded"></div>
                      </div>
                      <div className="p-4 md:w-3/4 bg-white dark:bg-gray-800">
                        <div className="h-5 w-1/3 mb-3" style={{ backgroundColor: harmony.variations[2]?.hex || colorToCssString(harmony.baseColor) }}></div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div 
                          className="h-8 w-1/3 rounded flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: harmony.variations[0]?.hex || colorToCssString(harmony.baseColor) }}
                        >
                          Button
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showExport && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-amber-100 dark:bg-amber-900 text-amber-500 dark:text-amber-300 p-2 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Export Options
                  </h2>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <HarmonyExportOptions harmony={harmony} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Usage Tips - NEW */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
          <h2 className="text-lg font-semibold mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            How to Use This Color Harmony Tool
          </h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>Select a <strong>base color</strong> using the HSL sliders or choose a preset</li>
            <li>Choose a <strong>harmony type</strong> from the available options</li>
            <li>View your generated color scheme in the preview section</li>
            <li>Click <strong>&quot;Export Color Scheme&quot;</strong> to get code for your colors</li>
            <li>Copy the CSS, Sass, or JSON format code for use in your projects</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Visit the <Link href="/tools/color-harmony" className="text-purple-600 dark:text-purple-400 hover:underline">main page</Link> for detailed information and tutorials about color harmony.</p>
          <p className="mt-1">Created with ❤️ by the RGBA to HEX team</p>
        </div>
      </div>
    </div>
  );
};

export default ColorHarmonyToolPage; 