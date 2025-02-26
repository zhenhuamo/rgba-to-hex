'use client';

import { useState, useEffect } from 'react';

// 计算对比度比率
function calculateContrastRatio(foreground: string, background: string, fgOpacity = 100, bgOpacity = 100) {
  // 十六进制转RGB数组
  const hexToRgb = (hex: string): number[] => {
    hex = hex.replace(/^#/, '');
    
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return [r, g, b];
  };

  // 计算亮度值
  const calculateLuminance = (rgb: number[], opacity = 100) => {
    // 应用透明度
    const alpha = opacity / 100;
    const withOpacity = rgb.map(channel => channel * alpha + 255 * (1 - alpha));
    
    const [r, g, b] = withOpacity.map(val => {
      val /= 255;
      return val <= 0.03928
        ? val / 12.92
        : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgbFg = hexToRgb(foreground);
  const rgbBg = hexToRgb(background);
  
  // 计算亮度
  const luminanceFg = calculateLuminance(rgbFg, fgOpacity);
  const luminanceBg = calculateLuminance(rgbBg, bgOpacity);
  
  // 计算对比度比率
  const ratio = luminanceFg > luminanceBg
    ? (luminanceFg + 0.05) / (luminanceBg + 0.05)
    : (luminanceBg + 0.05) / (luminanceFg + 0.05);
  
  return parseFloat(ratio.toFixed(2));
}

// 获取WCAG合规级别
function getWCAGLevel(ratio: number) {
  return {
    AA: ratio >= 4.5,
    AAA: ratio >= 7
  };
}

// 色彩格式转换
function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, '');
  
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// 组件：颜色输入
const ColorInput = ({ 
  color, 
  opacity,
  onColorChange, 
  onOpacityChange,
  isEyedropperSupported,
  onEyedrop,
  format,
  label
}: { 
  color: string, 
  opacity: number,
  onColorChange: (color: string) => void,
  onOpacityChange: (opacity: number) => void,
  isEyedropperSupported: boolean,
  onEyedrop: () => void,
  format: string,
  label: string
}) => {
  const rgb = hexToRgb(color);
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center gap-2 mb-2">
        <div 
          className="w-10 h-10 rounded-md border border-gray-300 dark:border-gray-600"
          style={{
            backgroundColor: color,
            opacity: opacity / 100
          }}
        ></div>
        
        {format === 'hex' && (
          <input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md"
          />
        )}
        
        {format === 'rgb' && (
          <div className="flex-1 grid grid-cols-3 gap-2">
            <div>
              <label className="text-xs">R</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.r}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(val, rgb.g, rgb.b));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="text-xs">G</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.g}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(rgb.r, val, rgb.b));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="text-xs">B</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.b}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(rgb.r, rgb.g, val));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
          </div>
        )}
        
        {format === 'rgba' && (
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div>
              <label className="text-xs">R</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.r}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(val, rgb.g, rgb.b));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="text-xs">G</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.g}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(rgb.r, val, rgb.b));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="text-xs">B</label>
              <input
                type="number"
                min="0"
                max="255"
                value={rgb.b}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 255) {
                    onColorChange(rgbToHex(rgb.r, rgb.g, val));
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="text-xs">A(%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={opacity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 0 && val <= 100) {
                    onOpacityChange(val);
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
              />
            </div>
          </div>
        )}
        
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-10 w-10 p-0 border-0"
        />
        
        {isEyedropperSupported && (
          <button
            onClick={onEyedrop}
            className="flex items-center justify-center h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            title="Pick color from screen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l5-5 5 5m-5-5v16" transform="rotate(135, 12, 12)" />
            </svg>
          </button>
        )}
      </div>
      
      {format === 'rgba' ? null : (
        <div>
          <label className="block text-xs mb-1">Opacity: {opacity}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => onOpacityChange(Number(e.target.value))}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default function ColorContrastChecker() {
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [foregroundOpacity, setForegroundOpacity] = useState(100);
  const [backgroundOpacity, setBackgroundOpacity] = useState(100);
  const [contrastRatio, setContrastRatio] = useState(21);
  const [wcagLevel, setWcagLevel] = useState({ AA: true, AAA: true });
  const [sampleText, setSampleText] = useState('Sample Text');
  const [fontSize, setFontSize] = useState(16);
  const [colorFormat, setColorFormat] = useState('hex'); // hex, rgb, rgba
  const [isEyedropperSupported, setIsEyedropperSupported] = useState(false);
  const [visualSimulation, setVisualSimulation] = useState('normal'); // normal, protanopia, deuteranopia, tritanopia
  const [showAccessibilityDetails, setShowAccessibilityDetails] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 设置已加载状态
    setMounted(true);
    
    // 检查是否在iframe中运行
    setIsInIframe(window.self !== window.top);
    
    // 检查吸管API是否支持
    setIsEyedropperSupported('EyeDropper' in window);
  }, []);

  useEffect(() => {
    const ratio = calculateContrastRatio(foregroundColor, backgroundColor, foregroundOpacity, backgroundOpacity);
    const level = getWCAGLevel(ratio);
    setContrastRatio(ratio);
    setWcagLevel(level);
  }, [foregroundColor, backgroundColor, foregroundOpacity, backgroundOpacity]);

  const handleEyedropper = async (target: 'foreground' | 'background') => {
    try {
      // @ts-expect-error - EyeDropper API is not yet in TypeScript types
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      if (target === 'foreground') {
        setForegroundColor(result.sRGBHex);
      } else {
        setBackgroundColor(result.sRGBHex);
      }
    } catch (e) {
      console.error('Failed to open eyedropper:', e);
    }
  };

  // 预设颜色组合
  const presetColors = [
    { name: 'Black on White', fg: '#000000', bg: '#FFFFFF' },
    { name: 'White on Black', fg: '#FFFFFF', bg: '#000000' },
    { name: 'Navy on Gray', fg: '#003366', bg: '#F5F5F5' },
    { name: 'Yellow on Purple', fg: '#FFD700', bg: '#4B0082' },
  ];

  // 视觉模拟选项
  const visualSimulations = [
    { name: 'Normal Vision', value: 'normal' },
    { name: 'Protanopia (Red-Blind)', value: 'protanopia' },
    { name: 'Deuteranopia (Green-Blind)', value: 'deuteranopia' },
    { name: 'Tritanopia (Blue-Blind)', value: 'tritanopia' },
  ];

  // 不渲染，直到组件加载
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* 隐藏的SVG滤镜 */}
        <svg style={{ position: 'absolute', height: 0, width: 0 }} aria-hidden="true" focusable="false">
          <defs>
            <filter id="protanopia">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.567, 0.433, 0, 0, 0
                        0.558, 0.442, 0, 0, 0
                        0, 0.242, 0.758, 0, 0
                        0, 0, 0, 1, 0"
              />
            </filter>
            <filter id="deuteranopia">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.625, 0.375, 0, 0, 0
                        0.7, 0.3, 0, 0, 0
                        0, 0.3, 0.7, 0, 0
                        0, 0, 0, 1, 0"
              />
            </filter>
            <filter id="tritanopia">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.95, 0.05, 0, 0, 0
                        0, 0.433, 0.567, 0, 0
                        0, 0.475, 0.525, 0, 0
                        0, 0, 0, 1, 0"
              />
            </filter>
          </defs>
        </svg>

        {/* 主要工具内容 */}
        <div className="max-w-4xl mx-auto">
          {!isInIframe && (
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Color Contrast Checker</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Test color combinations for WCAG compliance and accessibility
              </p>
            </div>
          )}

          {/* 颜色格式选择器 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setColorFormat('hex')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'hex' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                HEX
              </button>
              <button
                onClick={() => setColorFormat('rgb')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'rgb' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                RGB
              </button>
              <button
                onClick={() => setColorFormat('rgba')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'rgba' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                RGBA
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 左侧列 - 颜色输入 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Choose Colors</h2>
              
              <ColorInput 
                color={foregroundColor}
                opacity={foregroundOpacity}
                onColorChange={setForegroundColor}
                onOpacityChange={setForegroundOpacity}
                isEyedropperSupported={isEyedropperSupported}
                onEyedrop={() => handleEyedropper('foreground')}
                format={colorFormat}
                label="Text Color"
              />
              
              <ColorInput 
                color={backgroundColor}
                opacity={backgroundOpacity}
                onColorChange={setBackgroundColor}
                onOpacityChange={setBackgroundOpacity}
                isEyedropperSupported={isEyedropperSupported}
                onEyedrop={() => handleEyedropper('background')}
                format={colorFormat}
                label="Background Color"
              />
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Sample Text</label>
                <input
                  type="text"
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Enter sample text"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* 右侧列 - 预览和结果 */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                <div 
                  className="min-h-[120px] rounded-lg flex items-center justify-center p-4"
                  style={{ 
                    backgroundColor: backgroundColor,
                    color: foregroundColor,
                    fontSize: `${fontSize}px`,
                    opacity: backgroundOpacity / 100
                  }}
                >
                  <div style={{ opacity: foregroundOpacity / 100 }}>
                    {sampleText || 'Sample Text'}
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Contrast Results</h2>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold mb-2">{contrastRatio}:1</div>
                  <div className="text-sm text-gray-500">Contrast Ratio</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className={`p-4 rounded-lg text-center ${wcagLevel.AA ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                    <div className="font-semibold">WCAG AA</div>
                    <div>{wcagLevel.AA ? 'Pass ✓' : 'Fail ✗'}</div>
                  </div>
                  <div className={`p-4 rounded-lg text-center ${wcagLevel.AAA ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                    <div className="font-semibold">WCAG AAA</div>
                    <div>{wcagLevel.AAA ? 'Pass ✓' : 'Fail ✗'}</div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowAccessibilityDetails(!showAccessibilityDetails)}
                  className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-between"
                >
                  <span>View Detailed Accessibility Information</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${showAccessibilityDetails ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showAccessibilityDetails && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                    <h3 className="font-medium mb-2">WCAG Conformance Levels</h3>
                    <ul className="space-y-2">
                      <li>
                        <strong>AA Level (minimum):</strong> Requires contrast ratio of at least 4.5:1 for normal text, 3:1 for large text
                      </li>
                      <li>
                        <strong>AAA Level (enhanced):</strong> Requires contrast ratio of at least 7:1 for normal text, 4.5:1 for large text
                      </li>
                      <li>
                        <strong>Large Text:</strong> 18pt and above, or 14pt bold and above
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 视觉模拟部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Visual Impairment Simulation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {visualSimulations.map((sim) => (
                <button
                  key={sim.value}
                  onClick={() => setVisualSimulation(sim.value)}
                  className={`p-3 rounded-lg text-center ${
                    visualSimulation === sim.value 
                      ? 'bg-blue-100 dark:bg-blue-800 font-medium' 
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {sim.name}
                </button>
              ))}
            </div>
            
            <div 
              className="min-h-[120px] rounded-lg flex items-center justify-center p-4"
              style={{ 
                backgroundColor: backgroundColor,
                opacity: backgroundOpacity / 100,
                ...(visualSimulation !== 'normal' && { 
                  filter: `url(#${visualSimulation})` 
                })
              }}
            >
              <div style={{ 
                color: foregroundColor,
                opacity: foregroundOpacity / 100,
                fontSize: `${fontSize}px`
              }}>
                {sampleText || 'Sample Text'}
              </div>
            </div>
          </div>
          
          {/* 预设颜色组合 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Preset Color Combinations</h2>
            <div className="grid grid-cols-2 gap-4">
              {presetColors.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setForegroundColor(preset.fg);
                    setBackgroundColor(preset.bg);
                    setForegroundOpacity(100);
                    setBackgroundOpacity(100);
                  }}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-700"
                  style={{
                    backgroundColor: preset.bg,
                    color: preset.fg
                  }}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* 嵌入代码（仅在独立页面显示） */}
          {!isInIframe && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Embed This Tool</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Copy the code below to embed this color contrast checker on your website:
              </p>
              <div className="relative">
                <textarea
                  className="w-full h-32 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm"
                  readOnly
                  value={`<iframe src="https://rgbatohex.com/tools/color-contrast-checker?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Contrast Checker"></iframe>`}
                />
                <button
                  className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  onClick={() => {
                    const code = `<iframe src="https://rgbatohex.com/tools/color-contrast-checker?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Contrast Checker"></iframe>`;
                    navigator.clipboard.writeText(code);
                  }}
                >
                  Copy Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 