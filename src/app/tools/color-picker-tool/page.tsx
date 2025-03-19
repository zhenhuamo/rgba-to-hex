'use client';

import { useState, useEffect, useCallback } from 'react';


// 颜色吸管工具组件
const ColorPickerTool = () => {
  // 状态管理
  const [color, setColor] = useState<string>('');
  const [rgbColor, setRgbColor] = useState<{r: number, g: number, b: number} | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [eyeDropperSupported, setEyeDropperSupported] = useState<boolean>(true);
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [pickingColor, setPickingColor] = useState<boolean>(false);

  // 检查浏览器是否支持EyeDropper API并获取当前URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setEyeDropperSupported('EyeDropper' in window);
      setCurrentUrl(window.location.href);
    }
  }, []);

  // 将HEX转换为RGB
  const hexToRgb = useCallback((hex: string) => {
    // 移除#号
    hex = hex.replace('#', '');
    
    // 处理简写形式 (例如 #F00)
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
  }, []);

  // 激活吸管工具
  const activateEyeDropper = useCallback(async () => {
    if (!eyeDropperSupported) {
      alert('Your browser does not support the color picker feature. Please try using Chrome or Edge.');
      return;
    }

    setPickingColor(true);

    try {
      // @ts-expect-error - EyeDropper API 可能不在所有TypeScript类型定义中
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      
      const pickedColor = result.sRGBHex;
      setColor(pickedColor);
      
      const rgb = hexToRgb(pickedColor);
      setRgbColor(rgb);
      
      // 添加到历史记录
      setColorHistory(prev => {
        const newHistory = [pickedColor, ...prev.filter(c => c !== pickedColor)].slice(0, 6);
        return newHistory;
      });
    } catch (err) {
      // 用户取消选择是正常行为，不需要显示错误
      // AbortError 是用户取消EyeDropper时的正常错误类型
      if (err instanceof DOMException && err.name === 'AbortError') {
        // 用户取消选择，不做任何处理
      } else {
        // 其他未知错误，记录到控制台
        console.error('Unexpected error using eye dropper:', err);
      }
    } finally {
      setPickingColor(false);
    }
  }, [eyeDropperSupported, hexToRgb]);

  // 复制颜色值
  const copyColor = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  // 当用户从颜色历史中选择颜色
  const selectFromHistory = useCallback((historyColor: string) => {
    setColor(historyColor);
    setRgbColor(hexToRgb(historyColor));
  }, [hexToRgb]);

  // 示例颜色
  const sampleColors = [
    '#FF3B30', // 红色
    '#FF9500', // 橙色
    '#FFCC00', // 黄色
    '#34C759', // 绿色
    '#007AFF', // 蓝色
    '#5856D6', // 紫色
    '#AF52DE', // 紫红色
    '#000000', // 黑色
  ];

  // 嵌入代码
  const embedCode = `<iframe src="${currentUrl}" width="100%" height="500" frameborder="0"></iframe>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 inline-block">
            EyeDropper
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            A simple tool to pick colors from anywhere on your screen with just one click.
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 左侧：颜色选择器 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Pick a Color</h2>
              
              <div className="flex flex-col items-center space-y-6">
                <button
                  onClick={activateEyeDropper}
                  className={`group w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    pickingColor 
                      ? 'bg-gray-200 cursor-not-allowed shadow-inner' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                  }`}
                  title="Activate eye dropper"
                  disabled={!eyeDropperSupported || pickingColor}
                >
                  <svg className={`w-10 h-10 transition-all duration-300 ${pickingColor ? 'text-gray-500' : 'text-white group-hover:scale-110'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 21C6.82 21 6.94 20.88 6 20.75C5.06 20.62 4.72 20.56 4 20.25C3.28 19.94 2.79 19.58 2 18.75C1.21 17.92 0.5 17.5 0.5 17.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.82 12.18L18.57 5.43C19.35 4.65 20.59 4.65 21.37 5.43V5.43C22.15 6.21 22.15 7.45 21.37 8.23L14.62 14.98" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.82 12.18L8.75 15.25L4.75 19.25" />
                  </svg>
                </button>
                
                <p className="text-gray-600 text-sm text-center max-w-sm">
                  Click the eyedropper button above and then select any color from your screen
                </p>
              </div>
            </div>
            
            {/* 颜色样本 */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Sample Colors:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {sampleColors.map((sampleColor, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-all duration-200 transform hover:shadow-lg"
                    style={{ backgroundColor: sampleColor }}
                    onClick={() => selectFromHistory(sampleColor)}
                    title={sampleColor}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* 右侧：颜色预览 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            {/* 颜色显示区域 */}
            <div 
              className="h-48 w-full transition-all duration-500 relative overflow-hidden" 
              style={{ 
                backgroundColor: color || '#e2e8f0',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)' 
              }}
            >
              {!color && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400 font-medium text-lg">No color selected</p>
                </div>
              )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              {color ? (
                <>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">HEX</h3>
                    <div className="flex items-center">
                      <div className="bg-gray-100 py-2 px-3 rounded-l-lg flex-1">
                        <code className="text-lg font-mono text-gray-800">{color}</code>
                      </div>
                      <button
                        onClick={() => copyColor(color)}
                        className={`h-full px-4 rounded-r-lg flex items-center justify-center transition-colors ${
                          copied 
                            ? 'bg-green-500 text-white' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        {copied ? (
                          <span className="flex items-center">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Copied
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            Copy
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {rgbColor && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">RGB</h3>
                      <div className="bg-gray-100 py-2 px-3 rounded-lg">
                        <code className="text-lg font-mono text-gray-800">
                          rgb({rgbColor.r}, {rgbColor.g}, {rgbColor.b})
                        </code>
                      </div>
                    </div>
                  )}
                  
                  {rgbColor && (
                    <div className="mt-2">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Color Values</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-red-500">Red</span>
                            <span className="text-xs text-gray-500">{rgbColor.r}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-500 transition-all duration-500" 
                              style={{ width: `${(rgbColor.r / 255) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-green-500">Green</span>
                            <span className="text-xs text-gray-500">{rgbColor.g}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500 transition-all duration-500" 
                              style={{ width: `${(rgbColor.g / 255) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-blue-500">Blue</span>
                            <span className="text-xs text-gray-500">{rgbColor.b}</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 transition-all duration-500" 
                              style={{ width: `${(rgbColor.b / 255) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center text-gray-500">
                  <p>Click the eyedropper button to select a color</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 底部区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 历史颜色 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Color History</h2>
            
            {colorHistory.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {colorHistory.map((historyColor, index) => (
                  <div key={index} className="color-item flex flex-col items-center">
                    <button
                      className="w-12 h-12 rounded-lg shadow-md hover:scale-105 transition-all duration-200 transform hover:shadow-lg mb-1"
                      style={{ backgroundColor: historyColor }}
                      onClick={() => selectFromHistory(historyColor)}
                      title={historyColor}
                    />
                    <span className="text-xs text-gray-500 font-mono">{historyColor}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-400">
                <p>Your picked colors will appear here</p>
              </div>
            )}
          </div>
          
          {/* 说明和嵌入区域 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Use</h2>
            
            <ol className="list-decimal pl-5 text-gray-600 mb-6 space-y-2">
              <li>Click the eyedropper button</li>
              <li>Your cursor will change to a color picker</li>
              <li>Click anywhere on your screen to pick a color</li>
              <li>View the color values and copy them as needed</li>
            </ol>
            
            {currentUrl && (
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Embed this tool</h3>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs font-mono text-gray-700 overflow-x-auto">
                  {embedCode}
                </div>
                <button
                  onClick={() => copyColor(embedCode)}
                  className="mt-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Copy Embed Code
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 页脚 */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EyeDropper Tool. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ColorPickerTool; 