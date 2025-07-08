'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function RgbToHsl() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/rgb.svg" alt="RGB to HSL Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                RGB to HSL Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert RGB color values to HSL format. Easily transform web colors using Red, Green, and Blue values to intuitive Hue, Saturation, and Lightness format.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for web developers, designers, and digital artists who need to work with color in more intuitive ways.
            </p>
          </div>

          {/* 使用iframe嵌入RGB to HSL转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/rgb-to-hsl-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="600"
              title="RGB to HSL Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <a
                href="/tools/rgb-to-hsl-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium hover:from-blue-600 hover:to-green-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </a>
            </div>
          </div>
          
          {/* Embed Guide Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this RGB to HSL converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to HSL Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-hsl-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to HSL Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>

        {/* 详细内容部分 - 恢复原有内容 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional RGB to HSL Converter Tool</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Professional online RGB to HSL converter tool with advanced features. Instantly transform RGB (Red, Green, Blue) colors to HSL (Hue, Saturation, Lightness) format using our precise conversion algorithm. Perfect for web developers, designers, and digital artists who need accurate color space transformations.
              </p>
              <p>
                Our RGB to HSL converter provides real-time color preview, supports both decimal and percentage values, and includes comprehensive color theory explanations. Whether you&apos;re working on web development, UI/UX design, or digital art, our tool ensures accurate and efficient color space conversion.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Comprehensive RGB to HSL Conversion Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding RGB and HSL Color Spaces</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  RGB (Red, Green, Blue) and HSL (Hue, Saturation, Lightness) are two different ways to represent colors in digital systems. While RGB is based on color addition of light, HSL provides a more intuitive way to describe colors:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">RGB Color Space:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Red: 0-255 (primary color)</li>
                      <li>Green: 0-255 (primary color)</li>
                      <li>Blue: 0-255 (primary color)</li>
                      <li>Based on light emission</li>
                      <li>Used in digital displays</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">HSL Color Space:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Hue: 0-360 degrees (color wheel)</li>
                      <li>Saturation: 0-100% (color intensity)</li>
                      <li>Lightness: 0-100% (brightness)</li>
                      <li>Based on human perception</li>
                      <li>Intuitive for designers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">RGB to HSL Conversion Formula and Algorithm</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The RGB to HSL conversion process involves several mathematical steps to transform RGB color values into the HSL color space. This conversion preserves the color while representing it in a more intuitive format:
                </p>
                
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                  <code>{`// Step 1: Normalize RGB values to [0, 1]
R' = R/255, G' = G/255, B' = B/255

// Step 2: Find maximum and minimum values
Cmax = max(R', G', B')
Cmin = min(R', G', B')
Δ = Cmax - Cmin

// Step 3: Calculate Hue (H)
H = 60° × {
  undefined,  if Δ = 0
  (G'-B')/Δ mod 6,  if Cmax = R'
  (B'-R')/Δ + 2,   if Cmax = G'
  (R'-G')/Δ + 4,   if Cmax = B'
}

// Step 4: Calculate Saturation (S)
S = Δ/(1 - |2L - 1|)  // where L is Lightness

// Step 5: Calculate Lightness (L)
L = (Cmax + Cmin)/2

// Final Results
H = H × 360° (degrees)
S = S × 100%
L = L × 100%`}</code>
                </pre>
                
                <p className="text-gray-600 dark:text-gray-300">
                  This formula ensures accurate color conversion while maintaining color fidelity across different color spaces.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Code Implementation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">JavaScript Implementation</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [
    Math.round(h * 360),
    Math.round(s * 100),
    Math.round(l * 100)
  ];
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Python Implementation</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`def rgb_to_hsl(r, g, b):
    r, g, b = r/255, g/255, b/255
    
    max_val = max(r, g, b)
    min_val = min(r, g, b)
    h = s = l = (max_val + min_val) / 2
    
    if max_val == min_val:
        h = s = 0
    else:
        d = max_val - min_val
        s = d / (2 - max_val - min_val) if l > 0.5 else d / (max_val + min_val)
        
        if max_val == r:
            h = (g - b) / d + (6 if g < b else 0)
        elif max_val == g:
            h = (b - r) / d + 2
        elif max_val == b:
            h = (r - g) / d + 4
        h /= 6
    
    return [
        round(h * 360),
        round(s * 100),
        round(l * 100)
    ]`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Common Use Cases for RGB to HSL Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Web Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Color scheme generation</li>
                  <li>Dynamic color manipulation</li>
                  <li>Theme customization</li>
                  <li>Accessibility adjustments</li>
                  <li>CSS color transitions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Applications</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Color palette creation</li>
                  <li>Brand color management</li>
                  <li>UI/UX design</li>
                  <li>Digital art creation</li>
                  <li>Print design preparation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Advanced Features and Capabilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Color Analysis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Real-time color preview</li>
                  <li>Interactive color adjustment</li>
                  <li>Color harmony suggestions</li>
                  <li>Accessibility contrast checking</li>
                  <li>Color scheme generation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>High-precision conversion</li>
                  <li>Cross-browser compatibility</li>
                  <li>Mobile-responsive design</li>
                  <li>Copy-paste functionality</li>
                  <li>Multiple format support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Best Practices for Color Conversion</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Web Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Use HSL for dynamic color manipulation</li>
                  <li>Implement smooth color transitions</li>
                  <li>Create accessible color schemes</li>
                  <li>Optimize for different displays</li>
                  <li>Consider color blindness support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Design Workflow</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Maintain color consistency</li>
                  <li>Create color palettes</li>
                  <li>Test across different devices</li>
                  <li>Document color decisions</li>
                  <li>Consider brand guidelines</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is the RGB to HSL conversion process?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  RGB to HSL conversion transforms RGB color values into the HSL color space. This process involves converting the RGB values (0-255) into normalized values and then calculating Hue (0-360°), Saturation (0-100%), and Lightness (0-100%) using specific mathematical formulas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Why convert from RGB to HSL?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Converting RGB to HSL offers several advantages:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>More intuitive color manipulation with separate hue, saturation, and lightness controls</li>
                  <li>Easier creation of color variations and schemes</li>
                  <li>Better for creating smooth color transitions and gradients</li>
                  <li>More natural representation of color relationships</li>
                  <li>Simplified color harmony calculations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What are the practical applications?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  RGB to HSL conversion is widely used in:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Web development for dynamic color manipulation</li>
                  <li>Design software for color adjustments</li>
                  <li>Digital art tools for color selection</li>
                  <li>Image processing applications</li>
                  <li>Data visualization systems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is the conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our RGB to HSL converter uses precise mathematical formulas to ensure 100% accurate color conversion. The tool implements standard color space transformation algorithms used in professional software and follows web standards for color representation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What are the benefits of using HSL over RGB?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  HSL offers several advantages over RGB for color manipulation:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>More intuitive color selection and adjustment</li>
                  <li>Easier to create consistent color schemes</li>
                  <li>Better control over color brightness and saturation</li>
                  <li>Simplified color harmony calculations</li>
                  <li>More natural for human perception and understanding</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How can I ensure color accuracy?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  To maintain color accuracy when converting between RGB and HSL:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Use precise conversion formulas</li>
                  <li>Test colors across different devices</li>
                  <li>Consider color gamut limitations</li>
                  <li>Validate results visually</li>
                  <li>Document color values in both formats</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Related Tools Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Additional Color Conversion Resources</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Related Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <a href="/tools/hsl-to-hex" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      → HSL to HEX Converter
                    </a>
                  </li>
                  <li>
                    <a href="/tools/rgb-to-cmyk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      → RGB to CMYK Converter
                    </a>
                  </li>
                  <li>
                    <a href="/tools/hex-to-rgba" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      → HEX to RGBA Converter
                    </a>
                  </li>
                  <li>
                    <a href="/tools/cmyk-to-hex" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      → CMYK to HEX Converter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Color Design Articles</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Understanding Color Models: RGB vs HSL</li>
                  <li>Creating Accessible Color Palettes with HSL</li>
                  <li>Color Theory for Web Developers</li>
                  <li>Using HSL to Improve UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}