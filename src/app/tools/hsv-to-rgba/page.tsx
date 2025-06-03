"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

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

// Code examples for HSV to RGBA conversion
const jsHsvToRgbaCode = `
// JavaScript HSV to RGBA conversion function
function hsvToRgba(h, s, v, a = 1) {
  // HSV to RGB conversion with alpha transparency
  // Hue: 0-360°, Saturation: 0-100%, Value: 0-100%, Alpha: 0-1
  h = Math.max(0, Math.min(360, h));
  s = Math.max(0, Math.min(100, s)) / 100;
  v = Math.max(0, Math.min(100, v)) / 100;
  a = Math.max(0, Math.min(1, a));
  if (h === 360) h = 0;

  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
  else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

  return { 
    r: Math.round((r + m) * 255), 
    g: Math.round((g + m) * 255), 
    b: Math.round((b + m) * 255),
    a: a
  };
}

// Example: Convert HSV color to RGBA with transparency
const rgbaResult = hsvToRgba(240, 75, 80, 0.8);
console.log(rgbaResult); // { r: 51, g: 51, b: 204, a: 0.8 }
console.log(\`rgba(\${rgbaResult.r}, \${rgbaResult.g}, \${rgbaResult.b}, \${rgbaResult.a})\`);
`;

const csharpHsvToRgbaCode = `
// C# HSV to RGBA conversion for Unity and .NET applications
using UnityEngine;

public static class ColorConverter
{
    // HSV to RGBA conversion method for Unity Color
    public static Color HsvToRgba(float h, float s, float v, float a = 1f)
    {
        // Unity hsvtorgb equivalent with alpha channel
        // H: 0-360°, S: 0-100%, V: 0-100%, A: 0-1
        h = Mathf.Clamp(h, 0f, 360f);
        s = Mathf.Clamp01(s / 100f);
        v = Mathf.Clamp01(v / 100f);
        a = Mathf.Clamp01(a);
        
        if (h == 360f) h = 0f;

        float c = v * s;
        float x = c * (1f - Mathf.Abs((h / 60f) % 2f - 1f));
        float m = v - c;
        
        float r = 0f, g = 0f, b = 0f;

        if (h >= 0f && h < 60f) { r = c; g = x; b = 0f; }
        else if (h >= 60f && h < 120f) { r = x; g = c; b = 0f; }
        else if (h >= 120f && h < 180f) { r = 0f; g = c; b = x; }
        else if (h >= 180f && h < 240f) { r = 0f; g = x; b = c; }
        else if (h >= 240f && h < 300f) { r = x; g = 0f; b = c; }
        else if (h >= 300f && h < 360f) { r = c; g = 0f; b = x; }

        return new Color(r + m, g + m, b + m, a);
    }
    
    // Unity Color.HSVToRGB wrapper with alpha
    public static Color UnityHsvToRgba(float h, float s, float v, float a = 1f)
    {
        Color rgb = Color.HSVToRGB(h / 360f, s / 100f, v / 100f);
        rgb.a = a;
        return rgb;
    }
}

// Example usage in Unity:
// Color rgbaColor = ColorConverter.HsvToRgba(240f, 75f, 80f, 0.8f);
`;

const cppHsvToRgbaCode = `
// C++ HSV to RGBA conversion implementation
#include <algorithm>
#include <cmath>

struct RGBA {
    int r, g, b;
    float a;
};

// HSV to RGBA conversion function in C++
RGBA hsvToRgba(float h, float s, float v, float a = 1.0f) {
    // Clamp input values to valid ranges
    h = std::clamp(h, 0.0f, 360.0f);
    s = std::clamp(s, 0.0f, 100.0f) / 100.0f;
    v = std::clamp(v, 0.0f, 100.0f) / 100.0f;
    a = std::clamp(a, 0.0f, 1.0f);
    
    if (h == 360.0f) h = 0.0f;

    float c = v * s;
    float x = c * (1.0f - std::abs(std::fmod(h / 60.0f, 2.0f) - 1.0f));
    float m = v - c;
    
    float r = 0.0f, g = 0.0f, b = 0.0f;

    if (h >= 0.0f && h < 60.0f) { r = c; g = x; b = 0.0f; }
    else if (h >= 60.0f && h < 120.0f) { r = x; g = c; b = 0.0f; }
    else if (h >= 120.0f && h < 180.0f) { r = 0.0f; g = c; b = x; }
    else if (h >= 180.0f && h < 240.0f) { r = 0.0f; g = x; b = c; }
    else if (h >= 240.0f && h < 300.0f) { r = x; g = 0.0f; b = c; }
    else if (h >= 300.0f && h < 360.0f) { r = c; g = 0.0f; b = x; }

    return {
        static_cast<int>(std::round((r + m) * 255)),
        static_cast<int>(std::round((g + m) * 255)),
        static_cast<int>(std::round((b + m) * 255)),
        a
    };
}

// Example usage:
// RGBA color = hsvToRgba(240.0f, 75.0f, 80.0f, 0.8f);
`;

const pythonHsvToRgbaCode = `
def hsv_to_rgba(h, s, v, a=1.0):
    """
    Convert HSV color to RGBA with alpha transparency
    
    Args:
        h (float): Hue (0-360°)
        s (float): Saturation (0-100%)
        v (float): Value/Brightness (0-100%)
        a (float): Alpha transparency (0-1)
    
    Returns:
        dict: RGBA color values
    """
    # Clamp input values to valid ranges
    h = max(0, min(360, h))
    s = max(0, min(100, s)) / 100.0
    v = max(0, min(100, v)) / 100.0
    a = max(0, min(1, a))
    if h == 360: h = 0

    c = v * s
    x = c * (1 - abs((h / 60.0) % 2 - 1))
    m = v - c
    r, g, b = 0, 0, 0

    if 0 <= h < 60: r, g, b = c, x, 0
    elif 60 <= h < 120: r, g, b = x, c, 0
    elif 120 <= h < 180: r, g, b = 0, c, x
    elif 180 <= h < 240: r, g, b = 0, x, c
    elif 240 <= h < 300: r, g, b = x, 0, c
    elif 300 <= h < 360: r, g, b = c, 0, x

    return {
        'r': round((r + m) * 255),
        'g': round((g + m) * 255),
        'b': round((b + m) * 255),
        'a': a
    }

# Example usage: Python HSV to RGBA conversion
rgba_color = hsv_to_rgba(240, 75, 80, 0.8)
print(f"RGBA: {rgba_color}") # {'r': 51, 'g': 51, 'b': 204, 'a': 0.8}
`;

export default function HsvToRgbaPage() {
  const toolEmbedUrl = "/tools/hsv-to-rgba-converter?embed=true";
  const standaloneToolUrl = "/tools/hsv-to-rgba-converter"; 

  // States for copy buttons
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedCSharpCode, setCopiedCSharpCode] = useState(false);
  const [copiedCppCode, setCopiedCppCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-10 md:mb-14 mt-6 md:mt-8">
          <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 mb-4">
            HSV to RGBA Converter: Professional Color Conversion Tool
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Convert HSV colors to RGBA format with alpha transparency. Perfect for JavaScript, C#, Unity, C++, Python developers and web designers. Professional HSV to RGB conversion with opacity control for modern applications.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSV to RGBA</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HSV to RGB</span>
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Alpha Channel</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Unity Color</span>
            <span className="bg-green-100 dark:bg-green-700/50 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">JavaScript</span>
            <span className="bg-yellow-100 dark:bg-yellow-700/50 text-yellow-800 dark:text-yellow-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">C# Unity</span>
            <span className="bg-red-100 dark:bg-red-700/50 text-red-800 dark:text-red-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">C++</span>
            <span className="bg-pink-100 dark:bg-pink-700/50 text-pink-800 dark:text-pink-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Conversion</span>
          </div>
        </header>

        <section aria-labelledby="interactive-tool-heading" className="mb-10 md:mb-16">
          <h2 id="interactive-tool-heading" className="sr-only">Interactive HSV to RGBA Converter Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1.1] max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive HSV to RGBA Converter Tool"
              loading="lazy"
            />
          </div>
           <div className="text-center mt-6">
            <Link 
              href={standaloneToolUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:from-purple-600 hover:to-indigo-600 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
               </svg>
               Open Full Tool
            </Link>
          </div>
        </section>

        <article className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-800/80 rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          
          <section id="hsv-rgba-overview">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4 !mt-0">HSV to RGBA Color Conversion: Complete Guide</h2>
            <p>
              HSV to RGBA conversion is essential for modern web development, game development, and digital design. This tool provides professional-grade color conversion from HSV (Hue, Saturation, Value) to RGBA (Red, Green, Blue, Alpha) format with precise alpha transparency control.
            </p>
            
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-4">Understanding HSV Color Model</h3>
            <p>
              HSV color space represents colors in a way that aligns with human color perception, making it intuitive for designers and developers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Hue (H):</strong> Color type ranging from 0° to 360° (red=0°, green=120°, blue=240°)</li>
              <li><strong>Saturation (S):</strong> Color intensity from 0% (gray) to 100% (pure color)</li>
              <li><strong>Value (V):</strong> Brightness level from 0% (black) to 100% (brightest)</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-4">RGBA: Web Standard with Transparency</h3>
            <p>
              RGBA extends the RGB color model with an alpha channel for transparency control:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>RGB Channels:</strong> Red, Green, Blue values from 0-255</li>
              <li><strong>Alpha Channel:</strong> Transparency from 0 (transparent) to 1 (opaque)</li>
              <li><strong>CSS Compatible:</strong> Direct usage in web stylesheets: <code>rgba(255, 0, 0, 0.5)</code></li>
              <li><strong>Universal Support:</strong> Compatible with all modern browsers and frameworks</li>
            </ul>
          </section>

          <section id="hsv-vs-rgb">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">HSV vs RGB: When to Use Each Color Model</h2>
            <p>
              Understanding the differences between HSV and RGB color models helps choose the right approach for your project:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">HSV Color Advantages</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Intuitive color selection for designers</li>
                  <li>Natural color wheel representation</li>
                  <li>Easy brightness and saturation adjustments</li>
                  <li>Better for color picker interfaces</li>
                  <li>Aligns with human color perception</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">RGB/RGBA Benefits</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Direct hardware display compatibility</li>
                  <li>Standard web and CSS format</li>
                  <li>Alpha transparency support</li>
                  <li>Efficient for digital calculations</li>
                  <li>Universal browser support</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="programming-implementations">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">HSV to RGBA Programming Examples</h2>
            <p>
              Implement HSV to RGBA conversion in your preferred programming language. These examples show professional implementations for JavaScript, C#, Unity, C++, and Python.
            </p>

            {/* JavaScript Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">JavaScript HSV to RGBA Conversion</h3>
              <p className="mb-4">
                Perfect for web applications, React, Vue, and Node.js projects. This JavaScript implementation provides accurate HSV to RGBA conversion with proper input validation:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">JavaScript HSV to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(jsHsvToRgbaCode, setCopiedJsCode)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedJsCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{jsHsvToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* C# Unity Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">C# Unity HSV to RGBA Implementation</h3>
              <p className="mb-4">
                Unity developers can use this C# implementation for game development. Includes both custom implementation and Unity&apos;s built-in Color.HSVToRGB method with alpha support:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">C# Unity Color HSVToRGB</span>
                  <button
                    onClick={() => copyToClipboard(csharpHsvToRgbaCode, setCopiedCSharpCode)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedCSharpCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{csharpHsvToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* C++ Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">C++ HSV to RGBA Conversion</h3>
              <p className="mb-4">
                High-performance C++ implementation for game engines, graphics applications, and system-level color processing:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">C++ HSV to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(cppHsvToRgbaCode, setCopiedCppCode)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedCppCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{cppHsvToRgbaCode}</code>
                </pre>
              </div>
            </div>

            {/* Python Implementation */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4">Python HSV to RGBA Function</h3>
              <p className="mb-4">
                Python implementation suitable for data science, image processing, and web development with Flask/Django:
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-medium">Python HSV to RGBA</span>
                  <button
                    onClick={() => copyToClipboard(pythonHsvToRgbaCode, setCopiedPythonCode)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                  >
                    {copiedPythonCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                  <code>{pythonHsvToRgbaCode}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="conversion-algorithm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">HSV to RGB Conversion Algorithm</h2>
            <p>
              The HSV to RGBA conversion follows a mathematical algorithm that transforms color coordinates from one space to another while preserving visual accuracy:
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold mb-4">Mathematical Conversion Steps:</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Normalize inputs:</strong> Convert H to 0-360°, S and V to 0-1 range</li>
                <li><strong>Calculate chroma:</strong> C = V × S</li>
                <li><strong>Calculate intermediate:</strong> X = C × (1 - |((H/60°) mod 2) - 1|)</li>
                <li><strong>Calculate match value:</strong> m = V - C</li>
                <li><strong>Determine RGB&apos; values:</strong> Based on hue sector (0-60°, 60-120°, etc.)</li>
                <li><strong>Final RGB calculation:</strong> RGB = (RGB&apos; + m) × 255</li>
                <li><strong>Add alpha channel:</strong> Combine with transparency value (0-1)</li>
              </ol>
            </div>
          </section>

          <section id="use-cases">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-orange-500 pl-4">Professional Use Cases for HSV to RGBA</h2>
            <p>
              HSV to RGBA conversion is essential across various development and design scenarios:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Web Development</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CSS color generation</li>
                  <li>Dynamic theme systems</li>
                  <li>Color picker components</li>
                  <li>Animation color transitions</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Game Development</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Unity color scripting</li>
                  <li>Particle system colors</li>
                  <li>UI element transparency</li>
                  <li>Shader color parameters</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Design Tools</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Color palette generation</li>
                  <li>Brand color systems</li>
                  <li>Accessibility compliance</li>
                  <li>Cross-platform consistency</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="technical-benefits">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-4">Technical Benefits and Performance</h2>
            <p>
              Our HSV to RGBA converter offers several technical advantages:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mt-6">
              <li><strong>Precision Accuracy:</strong> Mathematical algorithms ensure exact color reproduction</li>
              <li><strong>Input Validation:</strong> Automatic clamping prevents invalid color values</li>
              <li><strong>Multiple Formats:</strong> CSS RGBA, 8-digit HEX, and component output</li>
              <li><strong>Real-time Preview:</strong> Instant visual feedback with transparency display</li>
              <li><strong>Copy Integration:</strong> One-click copying for developer workflow</li>
              <li><strong>Cross-browser Support:</strong> Compatible with all modern web browsers</li>
              <li><strong>Responsive Design:</strong> Works on desktop, tablet, and mobile devices</li>
            </ul>
          </section>

          <section id="related-tools">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-pink-500 pl-4">Related Color Conversion Tools</h2>
            <p>
              Explore our complete suite of professional color conversion tools:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Link href="/tools/hsv-to-rgb" className="block p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">HSV to RGB Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert HSV colors to RGB format without alpha channel</p>
              </Link>
              
              <Link href="/tools/hsv-to-hex" className="block p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">HSV to HEX Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Generate hexadecimal color codes from HSV values</p>
              </Link>
              
              <Link href="/tools/rgba-to-hex" className="block p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-green-800 dark:text-green-200">RGBA to HEX Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert RGBA colors to 8-digit hexadecimal format</p>
              </Link>
              
              <Link href="/tools/hsl-to-rgba" className="block p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200">HSL to RGBA Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Transform HSL colors to RGBA with transparency</p>
              </Link>
            </div>
          </section>

          <section id="faq">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What&apos;s the difference between HSV to RGB and HSV to RGBA?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  HSV to RGB converts colors without transparency, while HSV to RGBA adds an alpha channel for opacity control. RGBA is essential for web development where transparent elements are needed.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">How does Unity&apos;s Color.HSVToRGB compare to custom implementations?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Unity&apos;s built-in Color.HSVToRGB method is optimized and uses the same mathematical algorithm. Our examples show both Unity&apos;s method and custom implementations for different use cases.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Can I use these code examples in commercial projects?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Yes, all provided code examples implement standard mathematical algorithms and can be freely used in commercial projects. The HSV to RGBA conversion algorithm is a well-established standard.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Which programming language implementation is most efficient?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  C++ offers the highest performance for computational-intensive applications, while JavaScript is perfect for web applications. Unity&apos;s C# implementation is optimized for game development scenarios.
                </p>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
} 