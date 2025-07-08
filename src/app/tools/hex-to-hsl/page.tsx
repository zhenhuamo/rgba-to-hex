'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function HexToHsl() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Enhanced SEO-Optimized Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/rgb.svg" alt="HEX to HSL Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                HEX to HSL Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The ultimate online tool to convert HEX color codes (#RRGGBB) to HSL (Hue, Saturation, Lightness) format. Ideal for web developers working with CSS, JavaScript, TypeScript, Tailwind CSS, and designers using Photoshop or other design applications.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Transform hexadecimal colors to HSL with precision for more intuitive color manipulation, responsive design, and dynamic color schemes. Perfect for frontend development, UX/UI design, and creating accessible web interfaces.
            </p>
          </div>

          {/* 使用iframe嵌入HEX to HSL转换工具 */}
          <div className="w-full">
            <iframe 
              src="/tools/hex-to-hsl-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="500"
              title="HEX to HSL Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <a
                href="/tools/hex-to-hsl-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </a>
            </div>
          </div>
          
          {/* Embed This Tool Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This HEX to HSL Converter on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Easily integrate this professional HEX to HSL converter tool into your own website, blog, or web application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-hsl-converter?embed=true" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to HSL Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-hsl-converter?embed=true" width="100%" height="500" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to HSL Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Customize the initial HEX color value of the embedded tool using URL parameters for a seamless integration:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>defaultColor</strong>: Initial HEX color value (e.g., FF0000 for red, 0000FF for blue)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set red (#FF0000) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-hsl-converter?embed=true&defaultColor=FF0000" 
  width="100%" 
  height="500" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to HSL Color Converter - Red"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a CSS Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Working with Hue and Lightness in Modern CSS</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Modern web design often requires fine control over colors, especially hue and lightness adjustments. Converting your HEX colors to HSL allows more intuitive adjustments:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">HEX to HSL Converter (Example Embed)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Try converting your brand colors to HSL, then adjust the hue, saturation, and lightness values to create harmonious color schemes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Color Examples Section - SEO Optimized */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete HEX to HSL Color Conversion Guide</h2>
            
            {/* Basic Colors */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Standard HEX to HSL Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Basic Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FF0000 → hsl(0, 100%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #00FF00 → hsl(120, 100%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF → hsl(240, 100%, 50%)
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Common Web Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #808080 → hsl(0, 0%, 50%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-purple-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #800080 → hsl(300, 100%, 25%)
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-yellow-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FFFF00 → hsl(60, 100%, 50%)
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HSL Understanding - Enhanced with technical details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding the HSL Color Model</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                HSL (Hue, Saturation, Lightness) is a cylindrical color model designed to align more intuitively with human perception of color. It represents a more accessible alternative to hexadecimal notation and RGB color models:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">HSL Components Explained</h4>
                  <ul className="space-y-3">
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Hue (H)</strong>: Represents the color type on a 360-degree color wheel, where 0° and 360° are red, 120° is green, and 240° is blue. Intermediate angles represent color mixtures (e.g., 60° is yellow, 180° is cyan).
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Saturation (S)</strong>: Represents color intensity as a percentage from 0% (grayscale) to 100% (fully saturated). Higher saturation creates more vibrant colors, while lower saturation creates more muted tones.
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Lightness (L)</strong>: Represents brightness from 0% (black) to 100% (white). 50% lightness provides a &quot;normal&quot; color, while adjusting above or below creates tints or shades respectively.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Advantages of HSL over HEX</h4>
                  <ul className="space-y-3">
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Human-readable</strong>: HSL values are more intuitive to understand (e.g., &ldquo;50% lighter&rdquo; makes more sense than changing hex values)
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Simplified adjustments</strong>: Create variations by modifying just one parameter (e.g., darken by reducing lightness)
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Easier color manipulation</strong>: Create color schemes by adjusting hue while keeping other values constant
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Programmatic control</strong>: Ideal for dynamic color generation in JavaScript and TypeScript applications
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Mathematical simplicity</strong>: Perform color calculations more easily than with hexadecimal values
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New Section: Technical Implementation in Different Languages */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">HEX to HSL Conversion in Different Languages</h3>
              
              {/* JavaScript Implementation */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">JavaScript Implementation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  This JavaScript function converts HEX colors to HSL format:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`function hexToHsl(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  
  // Find min and max values to determine lightness
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    // Achromatic (gray)
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  // Convert to standard HSL ranges
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return \`hsl(\${h}, \${s}%, \${l}%)\`;
}

// Example usage
const hslColor = hexToHsl('#3E82FC'); // Returns "hsl(217, 97%, 62%)"`}</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  This function handles the mathematical conversion from the hexadecimal representation to the HSL color space, following the standard color conversion algorithm.
                </p>
              </div>
              
              {/* CSS Usage */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">CSS Implementation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Modern CSS supports HSL directly, allowing for more intuitive color manipulation:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`:root {
  /* Define base colors using HSL */
  --primary-hue: 217;
  --primary-saturation: 97%;
  --primary-lightness: 62%;
  
  /* Create the primary color and variations */
  --primary-color: hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness));
  --primary-dark: hsl(var(--primary-hue), var(--primary-saturation), calc(var(--primary-lightness) - 20%));
  --primary-light: hsl(var(--primary-hue), var(--primary-saturation), calc(var(--primary-lightness) + 15%));
  
  /* Create a complementary color (opposite on the color wheel) */
  --complementary-color: hsl(calc(var(--primary-hue) + 180), var(--primary-saturation), var(--primary-lightness));
}

/* Using the HSL variables */
.button-primary {
  background-color: var(--primary-color); /* hsl(217, 97%, 62%) equivalent to #3E82FC */
  color: white;
}

.button-primary:hover {
  background-color: var(--primary-dark);
  transition: background-color 0.3s ease;
}`}</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Using HSL in CSS variables provides powerful flexibility for creating dynamic themes and consistent color schemes.
                </p>
              </div>

              {/* TypeScript Implementation */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">TypeScript Implementation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  A type-safe implementation for TypeScript applications:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`interface HSLColor {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

function hexToHsl(hex: string): HSLColor {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  // Find min and max values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  // Convert to standard HSL ranges
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Example usage
const blueHsl: HSLColor = hexToHsl('#3E82FC');
console.log(\`HSL: \${blueHsl.h}, \${blueHsl.s}%, \${blueHsl.l}%\`);`}</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  TypeScript&apos;s type safety ensures reliable color manipulations in larger applications, preventing common errors.
                </p>
              </div>

              {/* Tailwind CSS */}
              <div>
                <h4 className="text-lg font-medium mb-3">Tailwind CSS Integration</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Customize Tailwind CSS using HSL values in your configuration:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Equivalent to #3E82FC in HEX
          DEFAULT: 'hsl(217, 97%, 62%)',
          light: 'hsl(217, 97%, 77%)',
          dark: 'hsl(217, 97%, 47%)',
        },
        secondary: {
          DEFAULT: 'hsl(37, 97%, 62%)',  // Complementary color
          light: 'hsl(37, 97%, 77%)',
          dark: 'hsl(37, 97%, 47%)',
        },
      },
      // Use HSL for opacity-enabled colors
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'primary-50': 'hsla(217, 97%, 62%, 0.5)',
        'primary-20': 'hsla(217, 97%, 62%, 0.2)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}`}</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This approach allows for consistent brand colors throughout your Tailwind CSS project with easy color variations and accessibility considerations.
                </p>
              </div>
            </div>

            {/* Usage Examples - Enhanced */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Applications of HSL Colors</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Beyond basic styling, HSL offers powerful capabilities for modern web and app development:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Dynamic Theming</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Create light/dark themes by manipulating lightness values:
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    <code className="text-xs text-gray-800 dark:text-gray-200">{`:root {
  --primary-h: 217;
  --primary-s: 97%;
  --primary-l: 62%;
}

.dark-theme {
  --primary-l: 40%;
  --bg-l: 10%;
  --text-l: 90%;
}

.light-theme {
  --primary-l: 62%;
  --bg-l: 95%;
  --text-l: 20%;
}`}</code>
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Accessible Color Contrasts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Ensure WCAG compliance by adjusting lightness values:
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    <code className="text-xs text-gray-800 dark:text-gray-200">{`function ensureAccessibleContrast(bgHsl, textHsl) {
  // If background is light (L > 50%)
  if (bgHsl.l > 50) {
    // Ensure text is dark enough
    return {
      ...textHsl,
      l: Math.min(textHsl.l, 45)
    };
  } else {
    // If background is dark, ensure text is light enough
    return {
      ...textHsl,
      l: Math.max(textHsl.l, 65)
    };
  }
}`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Photoshop-Style Color Manipulation</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Create UI controls similar to Photoshop&apos;s HSL sliders for intuitive color picking:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`// React component example
function ColorPicker({ initialColor = '#3E82FC', onChange }) {
  // Convert initial HEX to HSL
  const [hsl, setHsl] = useState(hexToHsl(initialColor));
  
  // Update when sliders change
  const handleHueChange = (e) => {
    const newHsl = { ...hsl, h: parseInt(e.target.value) };
    setHsl(newHsl);
    onChange(hslToHex(newHsl)); // Convert back to HEX for output
  };
  
  // Similar handlers for saturation and lightness
  
  return (
    <div className="color-picker">
      <div className="color-preview" style={{backgroundColor: hslToCss(hsl)}}></div>
      
      <div className="slider-container">
        <label>Hue: {hsl.h}°</label>
        <input 
          type="range" 
          min="0" max="360" 
          value={hsl.h} 
          onChange={handleHueChange} 
        />
      </div>
      
      {/* Similar sliders for saturation and lightness */}
    </div>
  );
}`}</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This implementation creates a color picker that behaves similarly to professional tools like Photoshop or Adobe&apos;s color pickers.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">RGB to HSL Conversion</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Sometimes you&apos;ll need to convert between RGB and HSL color models:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{`function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
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
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Example: converting from RGB to HSL
const color = rgbToHsl(62, 130, 252); // From #3E82FC
console.log(\`hsl(\${color.h}, \${color.s}%, \${color.l}%)\`); // "hsl(217, 97%, 62%)"`}</code>
                </pre>
              </div>
            </div>
            
            {/* SEO-friendly conclusion */}
            <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-5 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Why Use HEX to HSL Conversion?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Converting hexadecimal colors to HSL format offers numerous advantages for developers and designers:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>More intuitive color adjustments for responsive designs</li>
                <li>Easier creation of accessible color contrasts for WCAG compliance</li>
                <li>Simplified implementation of dark mode and theming capabilities</li>
                <li>More natural language for communicating color changes in team settings</li>
                <li>Better programmatic color manipulation for JavaScript, TypeScript, and CSS</li>
                <li>Integration with modern frameworks and libraries including Tailwind CSS</li>
                <li>Streamlined workflows for web developers and UI/UX designers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 