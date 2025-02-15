'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import CmykInput from '@/components/CmykInput';
import HexDisplay from '@/components/HexDisplay';
import ColorSystemInfoDisplay from '@/components/ColorSystemInfo';
import { cmykToHex, CMYK } from '@/utils/colorConverter';

export default function CmykToHex() {
  const [cmykValue, setCmykValue] = useState<CMYK>({ c: 0, m: 100, y: 100, k: 0 });
  const [hexValue, setHexValue] = useState<string>('#ff0000');

  useEffect(() => {
    const hex = cmykToHex(cmykValue);
    setHexValue(hex);
  }, [cmykValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image 
                src="/rgb.svg" 
                alt="CMYK to HEX Converter Logo" 
                width={40}
                height={40}
                priority
              />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                CMYK to HEX Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional CMYK to HEX color converter with advanced print color management system. 
              Perfect for converting print designs to web colors with accurate color matching and gamut checking.
            </p>
          </div>

          {/* Main Tool Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left: Conversion Tool */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50">
                <CmykInput value={cmykValue} onChange={setCmykValue} />
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
            </div>

            {/* Right: Color System Information */}
            <div>
              <ColorSystemInfoDisplay cmyk={cmykValue} />
            </div>
          </div>

          {/* Quick Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Key Features:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Professional print color management</li>
                <li>• Real-time CMYK to HEX conversion</li>
                <li>• Pantone color matching system</li>
                <li>• Print compatibility checking</li>
                <li>• Total ink coverage calculator</li>
                <li>• Color gamut verification</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Perfect For:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Print Design to Web Conversion</li>
                <li>• Professional Print Production</li>
                <li>• Brand Color Management</li>
                <li>• Cross-media Publishing</li>
                <li>• Digital Color Proofing</li>
              </ul>
            </div>
          </div>

          {/* Detailed Content Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Complete Guide to CMYK to HEX Color Conversion</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Master the art of converting print colors to web colors with our comprehensive guide. 
              Learn about color spaces, conversion processes, and professional print considerations.
            </p>
          </div>

          {/* Color Formats Explanation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Understanding Color Formats</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">CMYK Format</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  CMYK (Cyan, Magenta, Yellow, Key/Black) is the standard color model used in professional printing:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Cyan (0-100%): Blue-green component</li>
                  <li>Magenta (0-100%): Purple-red component</li>
                  <li>Yellow (0-100%): Yellow component</li>
                  <li>Key/Black (0-100%): Black component</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <code className="text-sm">cmyk(0, 100, 100, 0)</code> = Pure red
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">HEX Format</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  HEX colors are used in web development to represent RGB values in hexadecimal format:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>#RRGGBB format (6 digits)</li>
                  <li>Each pair ranges from 00 to FF</li>
                  <li>Represents 16,777,216 colors</li>
                  <li>Web-standard color format</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <code className="text-sm">#FF0000</code> = Pure red
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Process */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Conversion Process Explained</h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting CMYK to HEX involves two main steps: first converting CMYK to RGB, then RGB to HEX.
                Here&apos;s a detailed breakdown of each step:
              </p>

              <h4 className="text-xl font-semibold mb-4">Step 1: CMYK to RGB Conversion</h4>
              <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-2 overflow-x-auto">
                <code className="text-sm">{`// 1. Normalize CMYK values (0-100% to 0-1)
C = C / 100
M = M / 100
Y = Y / 100
K = K / 100

// 2. Convert to RGB using standard formula
R = 255 × (1-C) × (1-K)
G = 255 × (1-M) × (1-K)
B = 255 × (1-Y) × (1-K)

// 3. Round RGB values to integers
R = Math.round(R)
G = Math.round(G)
B = Math.round(B)`}</code>
              </pre>

              <h4 className="text-xl font-semibold mb-4 mt-6">Step 2: RGB to HEX Conversion</h4>
              <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-2 overflow-x-auto">
                <code className="text-sm">{`// 1. Convert each RGB component to hexadecimal
R = R.toString(16).padStart(2, '0')
G = G.toString(16).padStart(2, '0')
B = B.toString(16).padStart(2, '0')

// 2. Combine components with # prefix
HEX = '#' + R + G + B`}</code>
              </pre>
            </div>
          </div>

          {/* Implementation Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Implementation Examples</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">TypeScript Implementation</h4>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`interface CMYK {
  c: number; // 0-100
  m: number; // 0-100
  y: number; // 0-100
  k: number; // 0-100
}

function cmykToHex({ c, m, y, k }: CMYK): string {
  // Normalize to 0-1 range
  const cyan = c / 100;
  const magenta = m / 100;
  const yellow = y / 100;
  const key = k / 100;

  // Convert to RGB
  const r = Math.round(255 * (1 - cyan) * (1 - key));
  const g = Math.round(255 * (1 - magenta) * (1 - key));
  const b = Math.round(255 * (1 - yellow) * (1 - key));

  // Convert to HEX
  const toHex = (n: number): string => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + toHex(r) + toHex(g) + toHex(b);
}`}</code>
                </pre>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">React Component Implementation</h4>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`import React, { useState, useEffect } from 'react';

interface CMYKColorPickerProps {
  onChange: (hex: string) => void;
}

export function CMYKColorPicker({ onChange }: CMYKColorPickerProps) {
  const [cmyk, setCmyk] = useState({ c: 0, m: 100, y: 100, k: 0 });
  
  useEffect(() => {
    const hex = cmykToHex(cmyk);
    onChange(hex);
  }, [cmyk, onChange]);
  
  return (
    <div className="space-y-4">
      {/* Cyan Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={cmyk.c}
        onChange={(e) => setCmyk({
          ...cmyk,
          c: parseInt(e.target.value)
        })}
      />
      {/* Similar inputs for magenta, yellow, and key */}
    </div>
  );
}`}</code>
                </pre>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Python Implementation</h4>
                <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`def cmyk_to_hex(c: float, m: float, y: float, k: float) -> str:
    """
    Convert CMYK color values to hexadecimal color code.
    
    Args:
        c (float): Cyan (0-100)
        m (float): Magenta (0-100)
        y (float): Yellow (0-100)
        k (float): Key/Black (0-100)
    
    Returns:
        str: Hexadecimal color code (e.g., '#FF0000')
    """
    # Normalize to 0-1 range
    c, m, y, k = c/100, m/100, y/100, k/100
    
    # Convert to RGB
    r = round(255 * (1-c) * (1-k))
    g = round(255 * (1-m) * (1-k))
    b = round(255 * (1-y) * (1-k))
    
    # Convert to HEX
    return f'#{r:02x}{g:02x}{b:02x}'`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Professional Applications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Professional Applications</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Print Production</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Color separation workflows</li>
                  <li>• Print proofing systems</li>
                  <li>• Package design production</li>
                  <li>• Commercial printing</li>
                  <li>• Color calibration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Digital Publishing</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Cross-media publishing</li>
                  <li>• Digital asset management</li>
                  <li>• Web content adaptation</li>
                  <li>• E-commerce product displays</li>
                  <li>• Digital marketing materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Print Considerations */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Print Production Considerations</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Color Management</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• ICC profile selection</li>
                  <li>• Total ink coverage limits</li>
                  <li>• Paper stock considerations</li>
                  <li>• Press calibration</li>
                  <li>• Color proofing methods</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Quality Control</h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Color accuracy verification</li>
                  <li>• Pantone color matching</li>
                  <li>• Print sample evaluation</li>
                  <li>• Color consistency checks</li>
                  <li>• Dot gain compensation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Why do print and web colors look different?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Print uses CMYK (subtractive) colors while screens use RGB (additive) colors. 
                  The CMYK gamut is smaller than RGB, which means some web colors cannot be exactly 
                  reproduced in print. Our tool helps identify these gamut issues and suggests the closest printable alternatives.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">What is total ink coverage and why does it matter?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Total ink coverage is the sum of all CMYK values. Most printers recommend keeping it under 300% 
                  to prevent oversaturation, smearing, and extended drying times. Our tool automatically calculates 
                  this value and warns you when it exceeds recommended limits.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">How can I ensure color accuracy in print?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  To ensure color accuracy: 1) Use calibrated monitors, 2) Work with proper ICC profiles, 
                  3) Consider paper stock characteristics, 4) Get print proofs for critical colors, 
                  5) Use Pantone matching when possible, and 6) Work with professional printers who maintain 
                  calibrated equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 