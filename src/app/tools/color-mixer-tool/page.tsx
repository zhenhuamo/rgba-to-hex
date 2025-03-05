'use client';

// Module declaration at the top of the file
declare module 'mixbox' {
  export function lerp(color1: [number, number, number], color2: [number, number, number], t: number): [number, number, number];
}

import { useState, useEffect, useRef, useCallback } from 'react';
import { HexColorPicker } from 'react-colorful';
import mixbox from 'mixbox'; // Import mixbox library
import './color-picker-styles.css'; // Import custom styles

// Preset color categories
const colorPresets = {
  Basic: [
    '#ff0000', // Red
    '#ff4500', // Orange Red
    '#ffa500', // Orange
    '#ffff00', // Yellow
    '#008000', // Green
    '#0000ff', // Blue
    '#4b0082', // Indigo
    '#800080', // Purple
  ],
  Grayscale: [
    '#000000', // Black
    '#333333', // Dark Gray
    '#666666', // Medium Gray
    '#999999', // Gray
    '#cccccc', // Light Gray
    '#ffffff', // White
  ],
  Web: [
    '#1abc9c', // Turquoise
    '#2ecc71', // Emerald
    '#3498db', // Blue
    '#9b59b6', // Purple
    '#e74c3c', // Red
    '#f39c12', // Orange
    '#16a085', // Dark Turquoise
    '#27ae60', // Dark Emerald
    '#2980b9', // Dark Blue
    '#8e44ad', // Dark Purple
    '#c0392b', // Dark Red
    '#d35400', // Dark Orange
    '#7f8c8d', // Gray
    '#2c3e50', // Dark Blue Gray
  ]
};

// Helper function: Convert hex color to RGB object
const hexToRgb = (hex: string): { r: number, g: number, b: number } => {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return { r, g, b };
};

// Helper function: Convert RGB object to RGB array [r,g,b]
const rgbObjToArray = (rgb: { r: number, g: number, b: number }): [number, number, number] => {
  return [rgb.r, rgb.g, rgb.b];
};

// Helper function: Convert RGB to hex color
const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Color Mixer Component
const ColorMixer = () => {
  // State management
  const [colors, setColors] = useState<Array<{ color: string, ratio: number }>>([
    { color: '#FF0000', ratio: 1 }, // Red
    { color: '#0000FF', ratio: 1 }  // Blue
  ]);
  const [mixedColor, setMixedColor] = useState<string>('#800080'); // Default mixed color
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isInIframe, setIsInIframe] = useState<boolean>(false);
  const [embedCopied, setEmbedCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  
  // Color picker states
  const [pickerTab, setPickerTab] = useState<'picker'|'swatches'>('swatches');
  const [activePresetCategory, setActivePresetCategory] = useState<string>(Object.keys(colorPresets)[0]);
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);
  const [currentRgb, setCurrentRgb] = useState<{r: number, g: number, b: number}>({r: 255, g: 0, b: 0});
  const [tempColor, setTempColor] = useState<string>('#FF0000');
  
  // Reference for tracking the latest mixed color to avoid async issues
  const latestMixedColorRef = useRef('#800080');

  // Improved color mixing algorithm (using mixbox)
  const mixColors = useCallback((colorList: Array<{ color: string, ratio: number }>): string => {
    if (colorList.length === 0) return '#FFFFFF';
    if (colorList.length === 1) return colorList[0].color;

    // Mixing two colors
    if (colorList.length === 2) {
      // Convert hex colors to RGB objects
      const rgb1Obj = hexToRgb(colorList[0].color);
      const rgb2Obj = hexToRgb(colorList[1].color);
      
      // Convert RGB objects to arrays [r,g,b]
      const rgb1Array = rgbObjToArray(rgb1Obj);
      const rgb2Array = rgbObjToArray(rgb2Obj);
      
      // Calculate mixing ratio based on provided ratios
      const totalRatio = colorList[0].ratio + colorList[1].ratio;
      const t = colorList[1].ratio / totalRatio; // t is the weight of the second color
      
      // Use mixbox.lerp for better color mixing
      // mixbox.lerp accepts and returns [r,g,b] arrays
      const mixedRgb = mixbox.lerp(rgb1Array, rgb2Array, t);
      
      // Convert result back to hex
      return rgbToHex(
        Math.round(mixedRgb[0]), 
        Math.round(mixedRgb[1]), 
        Math.round(mixedRgb[2])
      );
    }

    // Mixing more than two colors, using sequential mixing
    let resultColor = colorList[0].color;
    let accumulatedRatio = colorList[0].ratio;
    
    for (let i = 1; i < colorList.length; i++) {
      const currentColor = colorList[i];
      
      // Convert hex colors to RGB arrays
      const rgb1Array = rgbObjToArray(hexToRgb(resultColor));
      const rgb2Array = rgbObjToArray(hexToRgb(currentColor.color));
      
      // Calculate new mixing ratio for this step
      const newRatio = currentColor.ratio / (accumulatedRatio + currentColor.ratio);
      
      // Use mixbox.lerp for better color mixing
      const mixedRgb = mixbox.lerp(rgb1Array, rgb2Array, newRatio);
      
      // Convert result back to hex
      resultColor = rgbToHex(
        Math.round(mixedRgb[0]), 
        Math.round(mixedRgb[1]), 
        Math.round(mixedRgb[2])
      );
      
      // Update accumulated ratio
      accumulatedRatio += currentColor.ratio;
    }
    
    latestMixedColorRef.current = resultColor; // Update the ref with latest calculated color
    return resultColor;
  }, []);

  // Draw the mixed color - with proper single-color handling
  const drawMixedColor = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Determine the color to draw
    let colorToDraw;
    
    // Special handling for single color case
    if (colors.length === 1) {
      colorToDraw = colors[0].color;
      console.log("Drawing single color:", colorToDraw);
    } else {
      // Use the latest mixed color ref to avoid async issues
      colorToDraw = latestMixedColorRef.current;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate center and radius
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 20;
    
    // Draw background
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw mixed color circle in the center
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = colorToDraw;
    ctx.fill();
    
    // Debug output
    console.log("Drawing color:", colorToDraw, "State mixedColor:", mixedColor, "Colors length:", colors.length);

    // Only draw color segments when there are multiple colors
    if (colors.length > 1) {
      const segmentAngle = (Math.PI * 2) / colors.length;
      const outerRadius = canvas.width / 2 - 5;
      const innerRadius = outerRadius - 15;
      
      colors.forEach((color, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = (index + 1) * segmentAngle;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
        ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        
        ctx.fillStyle = color.color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    } 
    // For single color case, draw a simple border ring in the same color
    else if (colors.length === 1) {
      const outerRadius = canvas.width / 2 - 5;
      const innerRadius = outerRadius - 15;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2, true);
      ctx.closePath();
      
      ctx.fillStyle = colorToDraw;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    // Add subtle shadow effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    const gradient = ctx.createRadialGradient(
      centerX, centerY, radius * 0.8,
      centerX, centerY, radius
    );
    gradient.addColorStop(0, 'rgba(255,255,255,0)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.1)');
    ctx.fillStyle = gradient;
    ctx.fill();
  }, [colors, mixedColor]);

  // Add a CSS keyframe for fade-in animation
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    
    // Define the animation
    styleEl.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .animate-pulse-once {
        animation: pulse 0.5s ease-in-out;
      }
    `;
    
    // Append to document head
    document.head.appendChild(styleEl);
    
    // Clean up
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Initialize component on mount
  useEffect(() => {
    setMounted(true);
    setIsInIframe(window.self !== window.top);

    // Get preset colors from URL parameters
    const params = new URLSearchParams(window.location.search);
    const colorParam = params.get('colors');
    
    let initialColors = [
      { color: '#FF0000', ratio: 1 }, // Default red
      { color: '#0000FF', ratio: 1 }  // Default blue
    ];
    
    if (colorParam) {
      const colorsList = colorParam.split(',').map(color => {
        // Ensure color format is correct (add # prefix if missing)
        return { 
          color: color.startsWith('#') ? color : `#${color}`, 
          ratio: 1 
        };
      });
      
      if (colorsList.length > 0) {
        initialColors = colorsList;
      }
    }
    
    setColors(initialColors);
    
    return () => {};
  }, []);

  // Recalculate mixed color when colors or ratios change - with single-color special handling
  useEffect(() => {
    if (colors.length > 0) {
      // If there's only one color, use it directly
      const newMixedColor = colors.length === 1 
        ? colors[0].color 
        : mixColors(colors);
      
      // Store the latest color both in state and ref
      setMixedColor(newMixedColor);
      latestMixedColorRef.current = newMixedColor;
      
      console.log(`Recalculating: ${colors.length} colors, result: ${newMixedColor}`);
      
      // Force immediate redraw with latest calculated color
      const renderFrame = () => {
        if (canvasRef.current && mounted) {
          // Access current drawMixedColor from ref
          if (typeof drawMixedColor === 'function') {
            drawMixedColor();
            
            // For single color case, draw again after a brief delay for reliability
            if (colors.length === 1) {
              setTimeout(() => {
                if (canvasRef.current) drawMixedColor();
              }, 50);
            }
          }
        }
      };
      
      requestAnimationFrame(renderFrame);
    }
  }, [colors, mounted, mixColors, drawMixedColor]);

  // Special effect for the single color case - runs once after mount
  useEffect(() => {
    if (mounted && colors.length === 1) {
      console.log("Single color effect triggered with:", colors[0].color);
      
      // Directly perform redraw operations without depending on forceRedraw
      const performRedraw = () => {
        if (canvasRef.current && mounted) {
          console.log("Redrawing single color:", colors[0].color);
          // Use direct reference to draw function
          if (typeof drawMixedColor === 'function') {
            // Ensure using the correct color
            latestMixedColorRef.current = colors[0].color;
            drawMixedColor();
          }
        }
      };
      
      // Force multiple redraws for reliability
      const timer1 = setTimeout(() => performRedraw(), 100);
      const timer2 = setTimeout(() => performRedraw(), 300);
      const timer3 = setTimeout(() => performRedraw(), 500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [colors, mounted, drawMixedColor]);

  // Add a new color with immediate calculation and redraw
  const addColor = () => {
    // Generate random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    const newColors = [...colors, { color: randomColor, ratio: 1 }];
    
    // Calculate new mixed color immediately
    const newMixedColor = mixColors(newColors);
    
    // Update state
    setColors(newColors);
    setMixedColor(newMixedColor);
    
    // Force immediate redraw
    requestAnimationFrame(() => {
      drawMixedColor();
    });
  };

  // Remove a color with special single-color handling
  const removeColor = (index: number) => {
    if (colors.length > 1) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      
      // Calculate new mixed color immediately
      const newMixedColor = mixColors(newColors);
      
      // Update state
      setColors(newColors);
      setMixedColor(newMixedColor);
      
      // Force immediate redraw - extra reliable for single color case
      if (newColors.length === 1) {
        console.log("Only one color left:", newColors[0].color);
        // Double ensure redraw with the single color
        setTimeout(() => {
          latestMixedColorRef.current = newColors[0].color;
          drawMixedColor();
          // Draw again after a brief delay for extra reliability
          setTimeout(() => drawMixedColor(), 50);
        }, 0);
      } else {
        requestAnimationFrame(() => {
          drawMixedColor();
        });
      }
    }
  };

  // Update ratio with immediate calculation and redraw
  const updateRatio = (index: number, newRatio: number) => {
    const newColors = [...colors];
    newColors[index].ratio = Math.max(0.1, Math.min(10, newRatio));
    
    // Calculate new mixed color immediately
    const newMixedColor = mixColors(newColors);
    
    // Update state
    setColors(newColors);
    setMixedColor(newMixedColor);
    
    // Force immediate redraw
    requestAnimationFrame(() => {
      drawMixedColor();
    });
  };

  // Open color picker
  const openColorPicker = (index: number) => {
    setActiveColorIndex(index);
    setPickerVisible(true);
    
    // Set initial picker values based on current color
    const color = colors[index].color;
    setTempColor(color);
    // Directly set RGB values
    const cleanHex = color.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    setCurrentRgb({r, g, b});
  };
  
  // Update RGB values and temp color
  const updateRgb = (channel: 'r' | 'g' | 'b', value: number) => {
    const newRgb = { ...currentRgb, [channel]: value };
    setCurrentRgb(newRgb);
    
    // Convert to hex
    const toHex = (c: number): string => {
      const hex = Math.max(0, Math.min(255, c)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const newColor = `#${toHex(newRgb.r)}${toHex(newRgb.g)}${toHex(newRgb.b)}`;
    setTempColor(newColor);
  };
  
  // Apply selected color with immediate calculation and redraw
  const applySelectedColor = () => {
    if (activeColorIndex !== null) {
      const newColors = [...colors];
      newColors[activeColorIndex].color = tempColor;
      
      // Calculate new mixed color immediately
      const newMixedColor = mixColors(newColors);
      
      // Update state
      setColors(newColors);
      setMixedColor(newMixedColor);
      setActiveColorIndex(null);
      setPickerVisible(false);
      
      // Force immediate redraw
      requestAnimationFrame(() => {
        drawMixedColor();
      });
    } else {
      setPickerVisible(false);
    }
  };
  
  // Cancel color selection
  const cancelColorSelection = () => {
    setPickerVisible(false);
  };

  // Copy mixed color code
  const copyMixedColor = async () => {
    try {
      await navigator.clipboard.writeText(mixedColor);
      alert('Color code copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Copy embed code
  const copyEmbedCode = async () => {
    try {
      // Generate color parameters
      const colorParams = colors.map(c => c.color.replace('#', '')).join(',');
      
      const embedCode = `<iframe src="${window.location.origin}/tools/color-mixer-tool?embed=true&colors=${colorParams}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="Color Mixer"></iframe>`;
      
      await navigator.clipboard.writeText(embedCode);
      setEmbedCopied(true);
      setTimeout(() => setEmbedCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Display loading state when component is not mounted
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 ${isInIframe ? 'p-0' : 'p-6'}`}>
      <div className="max-w-3xl mx-auto">
        {/* Only show title in standalone page, hide in iframe */}
        {!isInIframe && (
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#f5f5f5" stroke="#333" strokeWidth="1" />
                  <circle cx="9" cy="9" r="3" fill="#FF0000" opacity="0.7" />
                  <circle cx="15" cy="9" r="3" fill="#0000FF" opacity="0.7" />
                  <circle cx="12" cy="14" r="3" fill="#800080" opacity="0.7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                Color Mixer
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Mix your favorite colors to create custom color combinations
            </p>
          </div>
        )}

        {/* Main mixer section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80 overflow-hidden p-6 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl">
          {/* Color mixing container */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Color Mix Preview</h3>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-inner border-4 border-gray-200 dark:border-gray-600 transition-all hover:shadow-lg">
                <canvas 
                  ref={canvasRef}
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-br from-white/5 to-black/5"></div>
              </div>
            </div>
          </div>

          {/* Mixed result */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Mixed Result</h3>
            <div className="flex items-center space-x-4">
              <div 
                className="w-20 h-20 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg group relative"
                style={{ backgroundColor: mixedColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-mono mb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-200 dark:to-gray-400">{mixedColor}</div>
                <button
                  onClick={copyMixedColor}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-all shadow hover:shadow-md hover:translate-y-[-1px] flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Copy Color Code
                </button>
              </div>
            </div>
          </div>

          {/* Color selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Color Selection</h3>
              <button
                onClick={addColor}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-all shadow hover:shadow-md hover:translate-y-[-1px] flex items-center group"
              >
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Add Color
              </button>
            </div>
            
            <div className="space-y-4">
              {colors.map((colorObj, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow transition-all border border-gray-100 dark:border-gray-600">
                  <div 
                    className="w-12 h-12 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group relative"
                    style={{ backgroundColor: colorObj.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div 
                        onClick={() => openColorPicker(index)}
                        className="cursor-pointer font-mono text-blue-500 hover:text-blue-600 hover:underline text-lg font-medium transition-colors"
                      >
                        {colorObj.color}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm mr-2 text-gray-700 dark:text-gray-300 font-medium">Ratio:</label>
                    <input
                      type="number"
                      min="0.1"
                      max="10"
                      step="0.1"
                      value={colorObj.ratio}
                      onChange={(e) => updateRatio(index, parseFloat(e.target.value))}
                      className="w-20 text-center border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 text-sm bg-white dark:bg-gray-800 shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  {colors.length > 1 && (
                    <button
                      onClick={() => removeColor(index)}
                      className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embed code generator - only show in standalone page */}
        {!isInIframe && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Embed This Tool</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Copy the code below to embed this color mixer on your website:
            </p>
            <div className="relative">
              <textarea 
                className="w-full h-24 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm border-0 focus:ring-2 focus:ring-blue-500"
                readOnly
                value={`<iframe src="${window.location.origin}/tools/color-mixer-tool?embed=true&colors=${colors.map(c => c.color.replace('#', '')).join(',')}" width="100%" height="600" style="border:none;border-radius:12px;overflow:hidden;" title="Color Mixer"></iframe>`}
              />
              <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                onClick={copyEmbedCode}
              >
                {embedCopied ? 'Copied' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}

        {/* Usage tips - only show in standalone page */}
        {/* 在Usage Tips部分添加对颜色混合模式的解释 */}
        {!isInIframe && (
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5 text-sm shadow-inner border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold mb-3 text-base bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Color Mixer Usage Tips:</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li className="transition-all hover:translate-x-1">Click on any color code to open the advanced color picker</li>
              <li className="transition-all hover:translate-x-1">Use the color picker&apos;s gradient, sliders, or input fields to select precise colors</li>
              <li className="transition-all hover:translate-x-1">Adjust ratio values to control the weight of each color in the mix</li>
              <li className="transition-all hover:translate-x-1">Mixed result is automatically calculated based on colors and ratios</li>
              <li className="transition-all hover:translate-x-1">You can add multiple colors for complex mixing</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">About Our Color Mixing</h5>
              <p className="text-blue-600 dark:text-blue-400">
                This tool uses realistic <strong>pigment-based color mixing</strong> (subtractive color) rather than digital RGB mixing (additive color). 
                This means colors mix like real paints would, not like colored lights on a screen.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <h6 className="font-medium text-xs uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-1">Examples:</h6>
                  <ul className="text-sm text-blue-600 dark:text-blue-400">
                    <li>• Red + Blue = Purple (not magenta)</li>
                    <li>• Red + Green = Brown (not yellow)</li>
                    <li>• Blue + Yellow = Green (not gray)</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button 
                    className="text-xs bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-700 text-blue-700 dark:text-blue-300 px-3 py-1 rounded transition-colors"
                    onClick={() => window.open('https://en.wikipedia.org/wiki/Subtractive_color', '_blank')}
                  >
                    Learn more about color mixing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*// 添加一个小标记，显示当前正在使用的混合模式*/}
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          Pigment Mixing
        </div>

        {/* 在颜色混合结果附近添加简短解释*/}
        <div className="text-xs text-gray-500 mt-1 italic">
          Using realistic pigment-based mixing (like paints, not digital light)
        </div>
        
        {/* Color Picker Modal */}
        {pickerVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-200 transform transition-all animate-fadeIn">
              {/* Title Bar */}
              <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between px-6 py-3">
                  <div className="flex">
                    <button 
                      className={`mr-4 text-base font-medium transition-all ${pickerTab === 'picker' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setPickerTab('picker')}
                    >
                      Color Selector
                    </button>
                    <button 
                      className={`text-base font-medium transition-all ${pickerTab === 'swatches' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setPickerTab('swatches')}
                    >
                      Preset Colors
                    </button>
                  </div>
                  <button 
                    onClick={cancelColorSelection}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Color Picker Tab */}
              {pickerTab === 'picker' && (
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Using react-colorful color picker component */}
                    <div className="color-picker-container">
                      <HexColorPicker 
                        color={tempColor} 
                        onChange={(color) => {
                          setTempColor(color);
                          const cleanHex = color.replace('#', '');
                          const r = parseInt(cleanHex.substring(0, 2), 16);
                          const g = parseInt(cleanHex.substring(2, 4), 16);
                          const b = parseInt(cleanHex.substring(4, 6), 16);
                          setCurrentRgb({r, g, b});
                        }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      {/* Color preview */}
                      <div className="flex mb-4 overflow-hidden rounded-lg shadow-md border border-gray-300">
                        <div className="w-1/2 h-16" style={{ backgroundColor: tempColor }}></div>
                        <div className="w-1/2 h-16 bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-800 font-mono text-lg font-semibold">{tempColor}</span>
                        </div>
                      </div>
                      
                      {/* RGB inputs */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">R</label>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.r}
                            onChange={(e) => updateRgb('r', parseInt(e.target.value))}
                            className="w-full p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">G</label>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.g}
                            onChange={(e) => updateRgb('g', parseInt(e.target.value))}
                            className="w-full p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-600 text-sm mb-1">B</label>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.b}
                            onChange={(e) => updateRgb('b', parseInt(e.target.value))}
                            className="w-full p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Hex input */}
                      <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">HEX</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                            #
                          </span>
                          <input
                            type="text"
                            value={tempColor.replace('#', '')}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9A-Fa-f]/g, '');
                              if (value.length <= 6) {
                                const newColor = `#${value.padEnd(6, '0')}`;
                                setTempColor(newColor);
                                const r = parseInt(value.padEnd(6, '0').substring(0, 2), 16);
                                const g = parseInt(value.padEnd(6, '0').substring(2, 4), 16);
                                const b = parseInt(value.padEnd(6, '0').substring(4, 6), 16);
                                setCurrentRgb({r, g, b});
                              }
                            }}
                            className="flex-1 p-2 bg-white border border-gray-300 rounded-r-md text-gray-800 font-mono text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            maxLength={6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Preset Colors Tab */}
              {pickerTab === 'swatches' && (
                <div className="p-6">
                  {/* Preset Color Categories */}
                  <div className="border-b border-gray-200 mb-4">
                    <div className="flex flex-wrap pb-2">
                      {Object.keys(colorPresets).map(category => (
                        <button
                          key={category}
                          onClick={() => setActivePresetCategory(category)}
                          className={`px-3 py-1 mr-2 mb-2 text-sm rounded transition-all ${
                            activePresetCategory === category
                              ? 'bg-blue-100 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Preset Color Grid */}
                  <div className="mb-4">
                    <div className="grid grid-cols-8 gap-2">
                      {colorPresets[activePresetCategory as keyof typeof colorPresets].map((color, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setTempColor(color);
                            const cleanHex = color.replace('#', '');
                            const r = parseInt(cleanHex.substring(0, 2), 16);
                            const g = parseInt(cleanHex.substring(2, 4), 16);
                            const b = parseInt(cleanHex.substring(4, 6), 16);
                            setCurrentRgb({r, g, b});
                          }}
                          className="w-full aspect-square rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105 focus:outline-none"
                          style={{ 
                            backgroundColor: color,
                            border: tempColor === color ? '2px solid #3b82f6' : '1px solid #e5e7eb'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Color Preview */}
                  <div className="flex mt-6 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                    <div 
                      className="w-1/3 p-6 flex items-center justify-center" 
                      style={{ backgroundColor: tempColor }}
                    >
                      <span className={`font-medium ${parseInt(tempColor.slice(1), 16) > 0xffffff / 2 ? 'text-gray-800' : 'text-white'}`}>
                        Preview
                      </span>
                    </div>
                    <div className="w-2/3 bg-gray-50 p-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Selected Color</h4>
                      <div className="flex items-center">
                        <span className="uppercase font-mono text-lg text-gray-800">
                          {tempColor}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(tempColor);
                          }}
                          className="ml-2 p-1 rounded hover:bg-gray-200 text-gray-600"
                          title="Copy color code"
                        >
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Buttons */}
              <div className="bg-gray-50 px-4 py-3 flex justify-end">
                <button
                  onClick={cancelColorSelection}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 mr-3 transition-all shadow hover:shadow-md"
                >
                  Cancel
                </button>
                <button
                  onClick={applySelectedColor}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow hover:shadow-md hover:translate-y-[-1px]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ColorMixerPage() {
  return <ColorMixer />;
}