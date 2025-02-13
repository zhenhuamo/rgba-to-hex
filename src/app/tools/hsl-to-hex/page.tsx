'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HslInput from '@/components/HslInput';
import HexDisplay from '@/components/HexDisplay';
import { hslToHex, HSL } from '@/utils/colorConverter';
import Navigation from '@/components/Navigation';

export default function HslToHex() {
  const [hslValue, setHslValue] = useState<HSL>({ h: 0, s: 100, l: 50 });
  const [hexValue, setHexValue] = useState<string>('#ff0000');

  useEffect(() => {
    const hex = hslToHex(hslValue);
    setHexValue(hex);
  }, [hslValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        {/* 主要转换工具区域 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/rgb.svg" alt="HSL to HEX Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                HSL to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Free online tool to convert HSL (Hue, Saturation, Lightness) colors to HEX color codes. 
              Perfect for web developers, designers, and digital artists. Supports TypeScript, JavaScript, React, and Python implementations.
            </p>
          </div>

          {/* 转换工具 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50">
            <HslInput value={hslValue} onChange={setHslValue} />
            <div className="h-32 rounded-xl shadow-inner transition-colors duration-200 relative overflow-hidden my-6">
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: hexValue
                }}
              />
            </div>
            <HexDisplay hex={hexValue} />
          </div>

          {/* 快速功能说明 */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Key Features:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Interactive color sliders with real-time preview</li>
                <li>• Professional-grade conversion accuracy</li>
                <li>• Multiple implementation examples (JS, TS, React)</li>
                <li>• Copy-paste ready HEX codes</li>
                <li>• Dark mode support</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Perfect For:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Web Development & Design</li>
                <li>• UI/UX Design Projects</li>
                <li>• Digital Art Creation</li>
                <li>• Color Scheme Development</li>
                <li>• Cross-platform Color Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 详细内容部分 */}
        <div className="max-w-4xl mx-auto">
          {/* 介绍部分 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Complete Guide to HSL to HEX Color Conversion</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Understanding color conversion between HSL and HEX formats is crucial for modern web development and design. 
              This comprehensive guide covers everything from basic concepts to advanced implementations in various programming languages.
            </p>
          </div>

          {/* 基础概念解释 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Understanding Color Formats</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">HSL Format</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  HSL (Hue, Saturation, Lightness) is a cylindrical color model that provides an intuitive way to describe colors:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Hue (0-360°): Position on the color wheel</li>
                  <li>Saturation (0-100%): Color intensity</li>
                  <li>Lightness (0-100%): Brightness level</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <code className="text-sm">hsl(0, 100%, 50%)</code> = Pure red
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">HEX Format</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  HEX colors use hexadecimal notation to represent RGB values:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>#RRGGBB format</li>
                  <li>Each pair: 00-FF (0-255)</li>
                  <li>Total: 16,777,216 colors</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <code className="text-sm">#FF0000</code> = Pure red
                </div>
              </div>
            </div>

            {/* 转换公式详解 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Conversion Formula Explained</h4>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The HSL to HEX conversion process involves two main steps:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Step 1: HSL to RGB Conversion</strong>
                    <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-2 overflow-x-auto">
                      <code className="text-sm">{`// 1. Normalize HSL values
H = H % 360
S = S / 100
L = L / 100

// 2. Calculate chroma and intermediate values
C = (1 - |2L - 1|) × S
X = C × (1 - |(H/60°) mod 2 - 1|)
m = L - C/2

// 3. Calculate RGB based on Hue
if 0° ≤ H < 60°:   R = C, G = X, B = 0
if 60° ≤ H < 120°: R = X, G = C, B = 0
if 120° ≤ H < 180°: R = 0, G = C, B = X
if 180° ≤ H < 240°: R = 0, G = X, B = C
if 240° ≤ H < 300°: R = X, G = 0, B = C
if 300° ≤ H < 360°: R = C, G = 0, B = X

// 4. Adjust for lightness
(R,G,B) = (R+m, G+m, B+m) × 255`}</code>
                    </pre>
                  </li>
                  <li>
                    <strong>Step 2: RGB to HEX Conversion</strong>
                    <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-2 overflow-x-auto">
                      <code className="text-sm">{`// Convert each RGB component to 2-digit hexadecimal
R = toString(16).padStart(2, '0')
G = toString(16).padStart(2, '0')
B = toString(16).padStart(2, '0')

HEX = '#' + R + G + B`}</code>
                    </pre>
                  </li>
                </ol>
              </div>
            </div>

            {/* 代码实现示例 */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Implementation Examples</h4>

              {/* TypeScript/JavaScript 实现 */}
              <div>
                <h5 className="text-lg font-medium mb-3">TypeScript/JavaScript Implementation</h5>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`interface HSL {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

function hslToHex({ h, s, l }: HSL): string {
  // Normalize values
  s /= 100;
  l /= 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c/2;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 60 && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 120 && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h >= 180 && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h >= 240 && h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  // Convert to hex
  const toHex = (n: number): string => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return '#' + toHex(r) + toHex(g) + toHex(b);
}`}</code>
                </pre>
              </div>

              {/* React 组件实现 */}
              <div>
                <h5 className="text-lg font-medium mb-3">React Component Implementation</h5>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`import React, { useState, useEffect } from 'react';

interface HSLColorPickerProps {
  onChange: (hex: string) => void;
}

export function HSLColorPicker({ onChange }: HSLColorPickerProps) {
  const [hsl, setHsl] = useState({ h: 0, s: 100, l: 50 });
  
  useEffect(() => {
    const hex = hslToHex(hsl);
    onChange(hex);
  }, [hsl, onChange]);
  
  return (
    <div>
      <input
        type="range"
        min="0"
        max="360"
        value={hsl.h}
        onChange={(e) => setHsl({
          ...hsl,
          h: parseInt(e.target.value)
        })}
      />
      {/* Similar inputs for saturation and lightness */}
    </div>
  );
}`}</code>
                </pre>
              </div>

              {/* Python 实现 */}
              <div>
                <h5 className="text-lg font-medium mb-3">Python Implementation</h5>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`def hsl_to_hex(h: float, s: float, l: float) -> str:
    """
    Convert HSL color values to hexadecimal color code.
    
    Args:
        h (float): Hue (0-360)
        s (float): Saturation (0-100)
        l (float): Lightness (0-100)
    
    Returns:
        str: Hexadecimal color code (e.g., '#FF0000')
    """
    s /= 100
    l /= 100
    
    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c/2
    
    if 0 <= h < 60:
        r, g, b = c, x, 0
    elif 60 <= h < 120:
        r, g, b = x, c, 0
    elif 120 <= h < 180:
        r, g, b = 0, c, x
    elif 180 <= h < 240:
        r, g, b = 0, x, c
    elif 240 <= h < 300:
        r, g, b = x, 0, c
    else:
        r, g, b = c, 0, x
    
    r = int((r + m) * 255)
    g = int((g + m) * 255)
    b = int((b + m) * 255)
    
    return f'#{r:02x}{g:02x}{b:02x}'`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 实际应用场景 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Practical Applications</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Web Development</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Dynamic theme generation</li>
                  <li>• Color palette management</li>
                  <li>• CSS variable manipulation</li>
                  <li>• Design system implementation</li>
                  <li>• Accessibility contrast checking</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Design Tools</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Color scheme creation</li>
                  <li>• Brand color management</li>
                  <li>• Design token generation</li>
                  <li>• Color harmony analysis</li>
                  <li>• Dark mode adaptation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NPM 包使用说明 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">NPM Package Usage</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For Node.js and browser-based projects, you can use our NPM package for easy color conversion:
            </p>
            <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm">npm install @color-converter/hsl-hex</code>
            </pre>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Usage example:</p>
            <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">{`import { hslToHex } from '@color-converter/hsl-hex';

const hex = hslToHex({ h: 0, s: 100, l: 50 }); // Returns '#ff0000'`}</code>
            </pre>
          </div>

          {/* Excel 公式使用说明 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Excel Formula Implementation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For spreadsheet applications, you can use this Excel formula to convert HSL to HEX:
            </p>
            <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">{`=CONCATENATE("#",
  DEC2HEX(RGB_VALUE_RED,2),
  DEC2HEX(RGB_VALUE_GREEN,2),
  DEC2HEX(RGB_VALUE_BLUE,2))`}</code>
            </pre>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Note: You&apos;ll need to first convert HSL to RGB using intermediate calculations in separate cells.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 