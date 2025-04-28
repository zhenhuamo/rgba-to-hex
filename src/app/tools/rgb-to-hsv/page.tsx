'use client';

import React, { useState } from 'react'; // 导入 useState
import Link from 'next/link';
// 假设导航组件路径正确，如果不存在或路径不同，请调整或移除
import Navigation from '@/components/Navigation'; 

// 辅助函数：复制代码到剪贴板
const copyToClipboard = async (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000); // 2秒后重置状态
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Failed to copy code!');
  }
};

// JavaScript RGB to HSV 示例代码
const jsRgbToHsvCode = `
function rgbToHsv(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max !== min) {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // 返回 H (0-360), S (0-100), V (0-100)
  return { 
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}

// Example usage:
const rgb = { r: 50, g: 150, b: 200 };
const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
console.log(hsv); // { h: 200, s: 75, v: 78 }
`;

// Python RGB to HSV 示例代码
const pythonRgbToHsvCode = `
import colorsys

def rgb_to_hsv(r, g, b):
  # Normalize RGB values to 0-1 range
  r_norm, g_norm, b_norm = r / 255.0, g / 255.0, b / 255.0
  
  # Convert using colorsys
  h, s, v = colorsys.rgb_to_hsv(r_norm, g_norm, b_norm)
  
  # Convert H to degrees (0-360), S and V to percentage (0-100)
  return {
    'h': round(h * 360),
    's': round(s * 100),
    'v': round(v * 100)
  }

# Example usage:
rgb_color = {'r': 50, 'g': 150, 'b': 200}
hsv_color = rgb_to_hsv(rgb_color['r'], rgb_color['g'], rgb_color['b'])
print(hsv_color) # {'h': 200, 's': 75, 'v': 78}
`;

export default function RgbToHsvPage() {
  const [copiedEmbedCode, setCopiedEmbedCode] = useState(false);
  const [copiedJsCode, setCopiedJsCode] = useState(false);
  const [copiedPythonCode, setCopiedPythonCode] = useState(false);

  const embedCode = `<iframe 
  src="/tools/rgb-to-hsv-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSV Color Converter"
></iframe>`;

  const embedCodeCustom = `<iframe 
  src="/tools/rgb-to-hsv-converter?embed=true&r=255&g=100&b=50" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSV Color Converter"
></iframe>`;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <Navigation /> 
      <div className="container mx-auto px-4 py-12">
        <main className="max-w-3xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
          {/* 标题区 */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                 {/* Placeholder for Icon - Using a simple div for now */}
                 <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">H</div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Online RGB to HSV Color Converter | Formula & Algorithm
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Easily convert RGB color values to the HSV (Hue, Saturation, Value) model online using the standard conversion formula.
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Instantly get Hue (0-360°), Saturation (0-100%), and Value (0-100%). Understand the algorithm behind the intuitive HSV color space for your design and development needs.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded-full">RGB to HSV</span>
              <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">Hue Saturation Value</span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">Online Color Tool</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">RGB HSV Formula</span> 
            </div>
          </div>

          {/* Iframe 嵌入区 */}
          <div className="mb-8">
            <iframe
              src="/tools/rgb-to-hsv-converter?embed=true"
              className="w-full h-[650px] md:h-[600px] border-none rounded-2xl shadow-lg bg-white dark:bg-gray-700"
              title="RGB to HSV Color Converter Tool"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              allow="clipboard-write; clipboard-read" 
            />
          </div>

          {/* 跳转按钮 */}
          <div className="text-center mb-12">
            <Link href="/tools/rgb-to-hsv-converter" legacyBehavior>
              <a className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
                Open Full RGB to HSV Converter Tool
              </a>
            </Link>
          </div>

          {/* 详细内容区 */}
          <div className="space-y-10">
            {/* Section 1: 理解 RGB 与 HSV */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-pink-500 pl-3">Understanding RGB and HSV Color Models</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                RGB (Red, Green, Blue) is an additive color model based on mixing light. It&apos;s widely used in digital displays. Each color component ranges from 0 to 255.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                HSV (Hue, Saturation, Value), also known as HSB (Hue, Saturation, Brightness), represents colors in a cylindrical model, which often aligns better with human perception of color attributes.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-4 mb-4">
                <li><strong>Hue (H):</strong> The type of color (like red, blue, or yellow), represented as an angle from 0° to 360°.</li>
                <li><strong>Saturation (S):</strong> The intensity or purity of the color (0% is gray, 100% is the most vibrant color).</li>
                <li><strong>Value (V) / Brightness (B):</strong> The lightness or darkness of the color (0% is black, 100% is the brightest).</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800 dark:text-gray-200">Why Convert RGB to HSV?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Converting RGB to HSV is useful because the HSV model makes it easier to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-4 mt-2">
                <li>Intuitively select or adjust colors (e.g., changing hue while keeping saturation/value constant).</li>
                <li>Modify the saturation or brightness of an image independently.</li>
                <li>Analyze colors in image processing tasks.</li>
                <li>Create harmonious color palettes in design applications.</li>
              </ul>
            </section>

            {/* Section 2: 如何转换 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-red-500 pl-3">RGB to HSV Conversion: Formula & Algorithm Explained</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The conversion relies on a standard algorithm that mathematically maps the RGB color cube onto the HSV cylinder. The core idea of the formula involves finding the maximum (V) and minimum RGB components, calculating the difference (which relates to Saturation), and then determining the Hue based on which component (R, G, or B) is the maximum. Our tool handles this calculation complexity for you.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">JavaScript Code Example</h3>
                <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <pre><code>{jsRgbToHsvCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(jsRgbToHsvCode, setCopiedJsCode)}
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedJsCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                  >
                    {copiedJsCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Python Code Example</h3>
                 <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <pre><code>{pythonRgbToHsvCode}</code></pre>
                  <button
                    onClick={() => copyToClipboard(pythonRgbToHsvCode, setCopiedPythonCode)}
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedPythonCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                  >
                    {copiedPythonCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </section>

            {/* Section 3: 应用场景 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-yellow-500 pl-3">Practical Applications of HSV</h2>
               <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                   <h3 className="text-lg font-medium mb-2 text-yellow-800 dark:text-yellow-200">UI/UX Design</h3>
                   <p className="text-sm text-gray-700 dark:text-gray-300">HSV color pickers allow designers to easily find related colors by adjusting hue, saturation, or value sliders independently.</p>
                 </div>
                 <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                   <h3 className="text-lg font-medium mb-2 text-green-800 dark:text-green-200">Image Processing</h3>
                   <p className="text-sm text-gray-700 dark:text-gray-300">Adjusting the &apos;S&apos; component modifies image saturation (vibrancy), while adjusting &apos;V&apos; changes brightness, often with more natural results than direct RGB manipulation.</p>
                 </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                   <h3 className="text-lg font-medium mb-2 text-blue-800 dark:text-blue-200">Data Visualization</h3>
                   <p className="text-sm text-gray-700 dark:text-gray-300">Hue can effectively represent categorical data, while Saturation or Value can represent magnitude or importance in charts and maps.</p>
                 </div>
                 <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                   <h3 className="text-lg font-medium mb-2 text-purple-800 dark:text-purple-200">Color-Based Object Detection</h3>
                   <p className="text-sm text-gray-700 dark:text-gray-300">In computer vision, HSV can be more robust to lighting changes than RGB, making it useful for identifying objects based on their color range.</p>
                 </div>
               </div>
            </section>

            {/* Section 4: 嵌入此工具 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-3">Embed This Tool on Your Website</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You can easily embed this RGB to HSV converter directly into your own website or application using the following iframe code:
              </p>
              <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto mb-6">
                <pre><code>{embedCode}</code></pre>
                <button
                  onClick={() => copyToClipboard(embedCode, setCopiedEmbedCode)}
                  className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${copiedEmbedCode ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
                >
                  {copiedEmbedCode ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800 dark:text-gray-200">Custom Embed Options</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                 You can set the initial color of the embedded tool by adding `r`, `g`, and `b` parameters to the `src` URL (values 0-255). Example:
              </p>
               <div className="relative bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                 <pre><code>{embedCodeCustom}</code></pre>
                  {/* Add a copy button if needed for this example too */}
               </div>
            </section>

            {/* Section 5: FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 border-l-4 border-purple-500 pl-3">Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">What is the basic formula/algorithm for RGB to HSV conversion?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">The algorithm first normalizes RGB values (0-255) to a 0-1 range. It then finds the maximum and minimum of these values. The maximum value directly gives the Value (V). Saturation (S) is calculated from the difference between the maximum and minimum, divided by the maximum (unless max is 0). Hue (H) calculation is the most complex, involving different formulas based on which of R, G, or B is the maximum value, and then scaling the result to 0-360 degrees. Our converter implements this standard formula precisely.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">What&apos;s the difference between HSV and HSL?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">They are similar cylindrical models, but differ in how they define the &apos;lightness&apos; component. HSL uses Lightness (L), where 50% is the purest color. HSV uses Value (V), where 100% is the purest color. HSV is often preferred in graphics, while HSL is sometimes used in web design (CSS).</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">How accurate is the conversion?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">The conversion is based on standard mathematical formulas. Results are typically rounded for display (e.g., Hue to the nearest degree, Saturation/Value to one decimal place), which is sufficient for most practical purposes.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">When should I use HSV instead of RGB?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Use HSV when you need intuitive control over color properties like hue, saturation, or brightness independently. It&apos;s great for color pickers, adjusting image colors, or when working with concepts like &apos;colorfulness&apos; or &apos;lightness&apos;. RGB is better suited for direct device output (monitors, LEDs) or when precise mixing of primary colors is needed.</p>
                </div>
              </div>
            </section>

            {/* Section 6: 结论 */}
            <section className="text-center mt-12 border-t dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ready to Convert Your Colors?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Use the interactive tool above or embed it on your site to effortlessly switch between RGB and the intuitive HSV color space. Simplify your color workflow today!
              </p>
              <Link href="/tools/rgb-to-hsv-converter" legacyBehavior>
                <a className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
                  Try the Full Tool Now
                </a>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 