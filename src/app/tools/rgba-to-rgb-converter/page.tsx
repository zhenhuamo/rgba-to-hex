// Only updating key user-facing text elements while preserving the component structure

'use client';

import { useState, useEffect } from 'react';
import { isValidRgba, rgbaToRgb, rgbaToRgbWithBackground } from '@/utils/colorConverter';

// RgbaInput component - For handling RGBA input
const RgbaInput = ({ rgba, onChange }: { 
  rgba: { r: number, g: number, b: number, a: number }, 
  onChange: (color: { r: number, g: number, b: number, a: number }) => void 
}) => {
  // Update the entire color object when a single property changes
  const handleSingleValueChange = (key: 'r' | 'g' | 'b' | 'a', value: number) => {
    const newColor = { ...rgba, [key]: value };
    onChange(newColor);
  };

  // Generate random RGB color
  const randomColor = () => {
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: rgba.a // Maintain current transparency
    };
    onChange(color);
  };

  // Random transparency
  const randomAlpha = () => {
    const newAlpha = Math.round(Math.random() * 100) / 100;
    onChange({ ...rgba, a: newAlpha });
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Values</h3>
      
      <div className="space-y-5">
        {/* Red slider */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
              Red (R) Channel
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.r}
                onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
                title="Red color channel value (0-255)"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #FF0000)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.r}
              onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
              title="Adjust red channel intensity"
            />
          </div>
        </div>
        
        {/* Green slider */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              Green (G) Channel
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.g}
                onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
                title="Green color channel value (0-255)"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #00FF00)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.g}
              onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
              title="Adjust green channel intensity"
            />
          </div>
        </div>
        
        {/* Blue slider */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
              Blue (B) Channel
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="255"
                value={rgba.b}
                onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
                title="Blue color channel value (0-255)"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3" 
              style={{
                background: "linear-gradient(to right, #000000, #0000FF)"
              }}
            />
            <input
              type="range"
              min="0"
              max="255"
              value={rgba.b}
              onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
              title="Adjust blue channel intensity"
            />
          </div>
        </div>
        
        {/* Alpha slider */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border-2 border-blue-200 dark:border-blue-900">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
              Alpha (A) Transparency
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={rgba.a}
                onChange={(e) => handleSingleValueChange('a', parseFloat(e.target.value))}
                className="w-14 px-2 py-1 border-0 bg-transparent text-right focus:outline-none focus:ring-0"
                title="Alpha transparency value (0-1): 0 = transparent, 1 = opaque"
              />
            </div>
          </div>
          <div className="relative mt-1">
            <div 
              className="absolute inset-0 rounded-lg h-3"
              style={{
                background: "linear-gradient(to right, transparent, rgba(128, 90, 213, 1))"
              }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={rgba.a}
              onChange={(e) => handleSingleValueChange('a', parseFloat(e.target.value))}
              className="relative w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
              title="Adjust transparency level"
            />
          </div>
        </div>

        {/* Random color buttons */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            onClick={randomColor}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
            title="Generate random RGB values while keeping current alpha"
          >
            Random Color
          </button>
          <button
            onClick={randomAlpha}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            title="Generate random transparency value"
          >
            Random Alpha
          </button>
        </div>
      </div>
    </div>
  );
};

// Background selector component
const BackgroundSelector = ({ background, onChange }: {
  background: { r: number, g: number, b: number },
  onChange: (bg: { r: number, g: number, b: number }) => void
}) => {
  // Preset background colors
  const presetBackgrounds = [
    { name: 'White', color: { r: 255, g: 255, b: 255 } },
    { name: 'Black', color: { r: 0, g: 0, b: 0 } },
    { name: 'Gray', color: { r: 128, g: 128, b: 128 } },
    { name: 'Red', color: { r: 255, g: 0, b: 0 } },
    { name: 'Green', color: { r: 0, g: 255, b: 0 } },
    { name: 'Blue', color: { r: 0, g: 0, b: 255 } },
  ];

  // Handle single RGB value change
  const handleSingleValueChange = (key: 'r' | 'g' | 'b', value: number) => {
    const newBackground = { ...background, [key]: value };
    onChange(newBackground);
  };

  return (
    <div className="mt-8 bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Background Color</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Select a background color to see how your transparent RGBA color will appear when flattened using alpha compositing.
      </p>
      
      {/* Preset background color selection */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {presetBackgrounds.map((bg) => (
          <button
            key={bg.name}
            onClick={() => onChange(bg.color)}
            className="px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: `rgb(${bg.color.r}, ${bg.color.g}, ${bg.color.b})`,
              color: (bg.color.r * 0.299 + bg.color.g * 0.587 + bg.color.b * 0.114) > 186 ? '#000000' : '#ffffff'
            }}
            title={`Set background to ${bg.name} (RGB: ${bg.color.r},${bg.color.g},${bg.color.b})`}
          >
            <span className="w-3 h-3 rounded-full inline-block" 
              style={{ 
                backgroundColor: `rgb(${bg.color.r}, ${bg.color.g}, ${bg.color.b})`,
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
            </span>
            {bg.name}
          </button>
        ))}
      </div>

      {/* RGB slider controls */}
      <div className="space-y-4">
        {/* Red */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700 dark:text-gray-300">R: {background.r}</span>
            <input
              type="number"
              min="0"
              max="255"
              value={background.r}
              onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
              className="w-14 px-2 py-0 text-xs border-0 bg-gray-100 dark:bg-gray-800 rounded text-right"
              title="Background red channel value"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={background.r}
            onChange={(e) => handleSingleValueChange('r', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            title="Adjust background red intensity"
          />
        </div>
        
        {/* Green */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700 dark:text-gray-300">G: {background.g}</span>
            <input
              type="number"
              min="0"
              max="255"
              value={background.g}
              onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
              className="w-14 px-2 py-0 text-xs border-0 bg-gray-100 dark:bg-gray-800 rounded text-right"
              title="Background green channel value"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={background.g}
            onChange={(e) => handleSingleValueChange('g', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            title="Adjust background green intensity"
          />
        </div>
        
        {/* Blue */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700 dark:text-gray-300">B: {background.b}</span>
            <input
              type="number"
              min="0"
              max="255"
              value={background.b}
              onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
              className="w-14 px-2 py-0 text-xs border-0 bg-gray-100 dark:bg-gray-800 rounded text-right"
              title="Background blue channel value"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={background.b}
            onChange={(e) => handleSingleValueChange('b', Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            title="Adjust background blue intensity"
          />
        </div>
      </div>
    </div>
  );
};

// Main converter component
export default function RgbaToRgbConverter() {
  // State management
  const [rgba, setRgba] = useState({ r: 255, g: 0, b: 0, a: 0.5 });
  const [background, setBackground] = useState({ r: 255, g: 255, b: 255 });
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [activeTab, setActiveTab] = useState('simple'); // 'simple' or 'blended'
  const [siteOrigin, setSiteOrigin] = useState('https://yourwebsite.com'); // Default value

  // Initialization
  useEffect(() => {
    // Check if in embed mode
    const params = new URLSearchParams(window.location.search);
    setIsEmbedded(params.get('embed') === 'true');
    
    // Set initial color
    const initialColor = getInitialColor();
    if (isValidRgba(initialColor)) {
      setRgba(initialColor);
    }

    // Set website address
    setSiteOrigin(window.location.origin);
  }, []);

  // Get URL parameters - moved to useEffect
  const getInitialColor = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return {
        r: parseInt(params.get('r') || '255'),
        g: parseInt(params.get('g') || '0'),
        b: parseInt(params.get('b') || '0'),
        a: parseFloat(params.get('a') || '0.5')
      };
    }
    return { r: 255, g: 0, b: 0, a: 0.5 };
  };

  // Calculate conversion results
  const simpleRgb = rgbaToRgb(rgba);
  const blendedRgb = rgbaToRgbWithBackground(rgba, background);
  
  // Currently selected RGB result
  const currentRgb = activeTab === 'simple' ? simpleRgb : blendedRgb;

  // Copy RGB value to clipboard
  const copyRgbToClipboard = async () => {
    const rgbString = `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`;
    
    try {
      await navigator.clipboard.writeText(rgbString);
      setCopySuccess('RGB copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch {
      setCopySuccess('Copy failed');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  // Copy CSS code to clipboard
  const copyCssCode = async () => {
    const rgbString = `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`;
    const cssCode = `/* Converted from RGBA to RGB using alpha compositing */\n.element {\n  color: ${rgbString};\n  background-color: ${rgbString};\n}`;
    
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopySuccess('CSS code copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch {
      setCopySuccess('Copy failed');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  // Generate CSS code
  const generateCssCode = () => {
    const rgbString = `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`;
    return `/* Converted from RGBA to RGB using alpha compositing */\n.element {\n  color: ${rgbString};\n  background-color: ${rgbString};\n}`;
  };

  // Helper function: Copy embed code
  const copyEmbedCode = () => {
    const code = `<iframe src="${siteOrigin}/tools/rgba-to-rgb-converter?embed=true" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="RGBA to RGB Color Converter"></iframe>`;
    navigator.clipboard.writeText(code);
    setCopySuccess('Embed code copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className={`min-h-screen ${isEmbedded ? 'bg-transparent' : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'} p-4`}>
      <div className={`container mx-auto ${isEmbedded ? 'max-w-full' : 'max-w-4xl'} px-4 py-8`}>
        
        {/* Title area - only shown in non-embed mode */}
        {!isEmbedded && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Advanced RGBA to RGB Color Converter
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Professional tool to convert transparent RGBA colors to solid RGB colors with precise alpha compositing algorithms
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Perfect for web developers, designers, and digital artists working with CSS, canvas, and WebGL
            </p>
          </div>
        )}

        {/* Main content area */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Input area */}
          <div>
            <RgbaInput rgba={rgba} onChange={setRgba} />
            
            {/* Only show background selector in blended mode */}
            {activeTab === 'blended' && (
              <BackgroundSelector background={background} onChange={setBackground} />
            )}
          </div>

          {/* Right side - Results area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Conversion Result</h3>
            
            {/* Conversion mode toggle */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                className={`py-2 px-4 font-medium text-sm ${activeTab === 'simple' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('simple')}
                title="Extract RGB values without applying transparency (simple extraction)"
              >
                Simple Conversion
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm ${activeTab === 'blended' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('blended')}
                title="Apply alpha compositing algorithm to blend with background color"
              >
                Background Blending
              </button>
            </div>
            
            {/* Color preview */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-xl shadow-inner mb-4 relative overflow-hidden">
                {/* Original RGBA color */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  <div className="bg-white"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-gray-200"></div>
                  <div className="bg-white"></div>
                </div>
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`,
                  }}
                >
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-white bg-black bg-opacity-50 py-1">
                    Original RGBA
                  </div>
                </div>
              </div>
              
              {/* Converted RGB color */}
              <div className="w-32 h-32 rounded-xl shadow-inner relative">
                <div 
                  className="absolute inset-0 rounded-xl" 
                  style={{ 
                    backgroundColor: `rgb(${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b})`,
                  }}
                >
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-white bg-black bg-opacity-50 py-1">
                    Converted RGB
                  </div>
                </div>
              </div>
            </div>

            {/* Color value display */}
            <div className="space-y-4">
              {/* Original RGBA value */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Original RGBA Value:</div>
                <div className="flex justify-between items-center">
                  <code className="text-sm">rgba({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})</code>
                </div>
              </div>
              
              {/* Converted RGB value */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Converted RGB Value:</div>
                <div className="flex justify-between items-center">
                  <code className="text-sm">rgb({currentRgb.r}, {currentRgb.g}, {currentRgb.b})</code>
                  <button 
                    onClick={copyRgbToClipboard}
                    className="text-blue-500 hover:text-blue-600 text-sm"
                    title="Copy RGB value to clipboard"
                  >
                    Copy
                  </button>
                </div>
              </div>
              
              {/* CSS code */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">CSS Code:</h4>
                  <button 
                    onClick={copyCssCode}
                    className="text-blue-500 hover:text-blue-600 text-sm"
                    title="Copy CSS code to clipboard"
                  >
                    Copy Code
                  </button>
                </div>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-xs overflow-x-auto">
                  <code>{generateCssCode()}</code>
                </pre>
              </div>
              
              {/* Copy success notification */}
              {copySuccess && (
                <div className="mt-2 text-center">
                  <span className="text-green-500 text-sm">{copySuccess}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical explanation - only shown in non-embed mode */}
        {!isEmbedded && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">How This RGBA to RGB Converter Works</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This professional tool implements precise mathematical algorithms to convert RGBA colors (with transparency) to solid RGB colors using two different methods:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Simple Conversion Method</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  The simple method extracts only the RGB components from the RGBA color, completely ignoring the alpha transparency value.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                  <code>rgb(r, g, b) = rgb(rgba.r, rgba.g, rgba.b)</code>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Alpha Compositing Method</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  The advanced method applies alpha compositing to blend the RGBA color with a background color using the standard formula:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                  <code>rgb(r, g, b) = rgb(rgba.r × rgba.a + bg.r × (1 - rgba.a), rgba.g × rgba.a + bg.g × (1 - rgba.a), rgba.b × rgba.a + bg.b × (1 - rgba.a))</code>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Embed information - only shown in non-embed mode */}
        {!isEmbedded && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This Professional Tool on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enhance your website with our advanced RGBA to RGB converter. Perfect for design tutorials, development blogs, and educational resources. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="${siteOrigin}/tools/rgba-to-rgb-converter?embed=true" 
  width="100%" 
  height="600" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGBA to RGB Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={copyEmbedCode}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                title="Copy embed code to clipboard"
              >
                Copy Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}