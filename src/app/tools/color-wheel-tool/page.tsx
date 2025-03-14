'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { HexColorPicker } from 'react-colorful';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import namesPlugin from 'colord/plugins/names';
import harmoniesPlugin from 'colord/plugins/harmonies';
import './color-wheel-styles.css'; // Import style file

// Extend colord functionality
extend([mixPlugin, namesPlugin, harmoniesPlugin]);

// Color harmony types
type HarmonyType = 'complementary' | 'monochromatic' | 'analogous' | 'triadic' | 'tetradic';

// Styles
const styles = {
  container: 'flex flex-col items-center p-4 max-w-4xl mx-auto bg-white dark:bg-gray-900 min-h-screen',
  header: 'text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
  colorWheelContainer: 'relative w-full max-w-md aspect-square mb-6',
  colorWheel: 'w-full h-full rounded-full',
  colorSelector: 'absolute w-6 h-6 rounded-full border-2 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20',
  harmonySelectorContainer: 'absolute inset-0 pointer-events-none',
  harmonySelector: 'absolute w-4 h-4 rounded-full border-2 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10',
  colorInfo: 'grid grid-cols-1 gap-4 w-full max-w-md mb-6',
  colorBox: 'h-16 rounded-lg shadow-md flex items-end justify-center p-2',
  colorText: 'bg-white/80 dark:bg-black/80 px-2 py-1 rounded text-sm font-mono',
  colorSwatch: 'flex items-center gap-2 mb-1',
  colorSwatchBox: 'w-8 h-8 rounded-md shadow-sm border border-gray-200 dark:border-gray-700',
  controlsContainer: 'w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-4 mb-6',
  control: 'flex flex-col',
  label: 'text-sm font-medium mb-1 text-gray-700 dark:text-gray-300',
  slider: 'w-full',
  embedContainer: 'w-full max-w-md p-4 bg-gray-100 dark:bg-gray-800 rounded-lg',
  embedTitle: 'text-lg font-medium mb-2 text-gray-800 dark:text-white',
  embedCode: 'w-full p-2 bg-gray-200 dark:bg-gray-700 rounded font-mono text-sm mb-2 overflow-x-auto',
  button: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
  harmonySwitcher: 'w-full max-w-md mb-6',
  harmonyTitle: 'text-lg font-medium mb-3 text-gray-800 dark:text-white',
  harmonyOptions: 'flex flex-wrap gap-2 mb-4',
  harmonyOption: 'flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all relative',
  harmonyOptionActive: 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/30',
  harmonyOptionIcon: 'w-5 h-5 rounded-full border border-gray-300 flex-shrink-0',
  harmonyCheckmark: 'absolute right-2 top-2 text-purple-600',
  colorCombination: 'grid grid-cols-2 gap-4 w-full max-w-md mb-8',
  colorEntry: 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-3 transition-all duration-200 hover:shadow-md',
  colorPreview: 'w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-2 transition-all duration-200 hover:scale-105',
  colorCodeInput: 'w-full px-2 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm font-mono focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200',
  resetButton: 'text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline',
};

// Helper functions
const hslToCartesian = (h: number, s: number, l: number) => {
  const hueRadians = (h * Math.PI) / 180;
  const radius = s / 100;
  const x = radius * Math.cos(hueRadians);
  const y = radius * Math.sin(hueRadians);
  return { x, y, l };
};

const cartesianToHsl = (x: number, y: number, l: number) => {
  let hue = (Math.atan2(y, x) * 180) / Math.PI;
  if (hue < 0) hue += 360;
  
  const saturation = Math.min(100, Math.sqrt(x * x + y * y) * 100);
  
  return { h: hue, s: saturation, l };
};

// Generate color harmonies based on the base color and harmony type
const generateHarmony = (baseColor: string, type: HarmonyType): string[] => {
  const color = colord(baseColor);
  
  switch (type) {
    case 'complementary':
      return color.harmonies('complementary').map(c => c.toHex());
      
    case 'monochromatic':
      return [
        baseColor,
        color.lighten(0.2).toHex(),
        color.lighten(0.4).toHex(),
        color.darken(0.2).toHex(),
        color.darken(0.4).toHex()
      ];
      
    case 'analogous':
      return color.harmonies('analogous').map(c => c.toHex());
      
    case 'triadic':
      return color.harmonies('triadic').map(c => c.toHex());
      
    case 'tetradic':
      return color.harmonies('tetradic').map(c => c.toHex());
      
    default:
      return [baseColor];
  }
};

// Get the color positions on the wheel for the given harmony
const calculateHarmonyPositions = (baseHsl: { h: number, s: number, l: number }, type: HarmonyType) => {
  // Base position is always included
  const positions = [{
    h: baseHsl.h,
    s: baseHsl.s,
    l: baseHsl.l,
    isBase: true
  }];
  
  switch (type) {
    case 'complementary':
      // Add complementary color (opposite on the wheel, same saturation)
      positions.push({
        h: (baseHsl.h + 180) % 360,
        s: baseHsl.s,
        l: baseHsl.l,
        isBase: false
      });
      break;
      
    case 'monochromatic':
      // Same hue, different saturation/lightness
      positions.push(
        { h: baseHsl.h, s: Math.max(20, baseHsl.s - 30), l: Math.min(80, baseHsl.l + 20), isBase: false },
        { h: baseHsl.h, s: Math.max(10, baseHsl.s - 50), l: Math.min(90, baseHsl.l + 30), isBase: false },
        { h: baseHsl.h, s: Math.min(100, baseHsl.s + 10), l: Math.max(20, baseHsl.l - 20), isBase: false },
        { h: baseHsl.h, s: Math.min(100, baseHsl.s + 20), l: Math.max(10, baseHsl.l - 30), isBase: false }
      );
      break;
      
    case 'analogous':
      // Adjacent colors on the wheel
      positions.push(
        { h: (baseHsl.h - 30 + 360) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false },
        { h: (baseHsl.h + 30) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false }
      );
      break;
      
    case 'triadic':
      // Three colors evenly spaced around the wheel
      positions.push(
        { h: (baseHsl.h + 120) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false },
        { h: (baseHsl.h + 240) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false }
      );
      break;
      
    case 'tetradic':
      // Four colors evenly spaced around the wheel
      positions.push(
        { h: (baseHsl.h + 90) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false },
        { h: (baseHsl.h + 180) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false },
        { h: (baseHsl.h + 270) % 360, s: baseHsl.s, l: baseHsl.l, isBase: false }
      );
      break;
  }
  
  return positions;
};

// Throttle function to limit how often a function runs - used directly instead of as a wrapper
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useThrottle = <T extends (...args: any[]) => any>(
  callback: T, 
  delay: number
) => {
  const throttleRef = useRef(false);
  
  return useCallback((...args: Parameters<T>): ReturnType<T> | undefined => {
    if (!throttleRef.current) {
      const result = callback(...args);
      throttleRef.current = true;
      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
      return result;
    }
    return undefined;
  }, [callback, delay]);
};

const ColorWheel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState({ h: 0, s: 100, l: 50 });
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const [selectorPosition, setSelectorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(-1); // -1 means no dragging
  const [embedCode, setEmbedCode] = useState('');
  const [iframeHeight, setIframeHeight] = useState(600);
  const [iframeWidth, setIframeWidth] = useState(400);
  const [isInIframe, setIsInIframe] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeHarmony, setActiveHarmony] = useState<HarmonyType>('tetradic');
  const [harmonyColors, setHarmonyColors] = useState<string[]>([]);
  const [harmonyPositions, setHarmonyPositions] = useState<Array<{h: number, s: number, l: number, isBase: boolean}>>([]);
  const [wheelImageData, setWheelImageData] = useState<ImageData | null>(null);
  
  // Add custom type, extend ImageData
  type ExtendedImageData = ImageData & { l?: number };
  
  // Use memoization for harmony colors to avoid unnecessary recalculations
  const memoizedHarmonyColors = useMemo(() => 
    generateHarmony(selectedColor, activeHarmony),
    [selectedColor, activeHarmony]
  );
  
  // Use memoization for harmony positions
  const memoizedHarmonyPositions = useMemo(() => 
    calculateHarmonyPositions(color, activeHarmony),
    [color, activeHarmony]
  );
  
  // Update harmony colors when selected color changes (using memoized values)
  useEffect(() => {
    setHarmonyColors(memoizedHarmonyColors);
    setHarmonyPositions(memoizedHarmonyPositions);
  }, [memoizedHarmonyColors, memoizedHarmonyPositions]);

  // Update selector position for main color
  const updateSelectorPositionBase = useCallback(() => {
    if (!wheelRef.current) return;
    
    const { h, s } = color;
    const { x, y } = hslToCartesian(h, s, color.l);
    
    const radius = wheelRef.current.clientWidth / 2;
    const centerX = radius;
    const centerY = radius;
    
    setSelectorPosition({
      x: centerX + x * radius,
      y: centerY + y * radius,
    });
  }, [color, wheelRef]);
  
  // Throttled version of updateSelectorPosition
  const updateSelectorPosition = useThrottle(updateSelectorPositionBase, 16);

  // Calculate position for a harmony color point - memoized for performance
  const getHarmonyPosition = useCallback((hslColor: {h: number, s: number, l: number}) => {
    if (!wheelRef.current) return { x: 0, y: 0 };
    
    const { h, s } = hslColor;
    const { x, y } = hslToCartesian(h, s, hslColor.l);
    
    const radius = wheelRef.current.clientWidth / 2;
    const centerX = radius;
    const centerY = radius;
    
    return {
      x: centerX + x * radius,
      y: centerY + y * radius,
    };
  }, []);

  // Get initial color from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const colorParam = params.get('color');
      const harmonyParam = params.get('harmony') as HarmonyType | null;
      
      if (colorParam) {
        try {
          // Check if it's a valid color format
          const isValidColor = /^#([0-9A-F]{3}){1,2}$/i.test(colorParam);
          
          if (isValidColor) {
            // Set initial color
            setSelectedColor(colorParam);
            
            // Convert to HSL
            const hslColor = colord(colorParam).toHsl();
            setColor({ h: hslColor.h, s: hslColor.s, l: hslColor.l });
          }
        } catch (error) {
          console.error('Invalid color parameter:', error);
        }
      }
      
      if (harmonyParam && ['complementary', 'monochromatic', 'analogous', 'triadic', 'tetradic'].includes(harmonyParam)) {
        setActiveHarmony(harmonyParam);
      }
    }
  }, []);

  // Detect if in iframe
  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
      if (window.self !== window.top) {
        // If in iframe, add special class to body
        document.body.classList.add('iframe-mode');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      // If accessing window.top throws an error, we're in a cross-origin iframe
      setIsInIframe(true);
      document.body.classList.add('iframe-mode');
    }
  }, []);

  // Generate embed code
  useEffect(() => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0] : '';
    setEmbedCode(`<iframe src="${currentUrl}?color=${encodeURIComponent(selectedColor)}&harmony=${activeHarmony}" width="${iframeWidth}" height="${iframeHeight}" frameborder="0" allowtransparency="true"></iframe>`);
  }, [iframeHeight, iframeWidth, selectedColor, activeHarmony]);

  // Initialize color wheel - optimize to only render when necessary
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Only redraw the wheel if we don't have image data or if lightness changed
    if (!wheelImageData || color.l !== (wheelImageData as ExtendedImageData).l) {
      setIsLoading(true);

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY);

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        // Draw color wheel
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            // Convert coordinates relative to center
            const relX = (x - centerX) / radius;
            const relY = (y - centerY) / radius;
            
            // Calculate distance from center
            const dist = Math.sqrt(relX * relX + relY * relY);
            
            if (dist <= 1) { // Inside the circle
              // Calculate HSL values
              const { h, s } = cartesianToHsl(relX, relY, color.l);
              
              // Convert to RGB and set pixel color
              const rgbColor = colord({ h, s, l: color.l }).toRgb();
              ctx.fillStyle = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
              ctx.fillRect(x, y, 1, 1);
            }
          }
        }

        // Store the image data with current lightness
        const imgData = ctx.getImageData(0, 0, width, height) as ExtendedImageData;
        // Set custom property
        imgData.l = color.l;
        setWheelImageData(imgData);
        
        // Update selector position
        updateSelectorPosition();
        setIsLoading(false);
      });
    } else {
      // If we already have image data with the same lightness, just reuse it
      ctx.putImageData(wheelImageData, 0, 0);
      updateSelectorPosition();
      setIsLoading(false);
    }
  }, [color.l, updateSelectorPosition, wheelImageData]);

  // Update wheel when window resizes - debounced to avoid too many updates
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Force a redraw of the wheel by clearing the image data cache
        setWheelImageData(null);
        updateSelectorPosition();
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateSelectorPosition]);

  // Base wheel interaction logic (without throttling)
  const handleWheelInteractionBase = useCallback((
    event: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>, 
    pointIndex: number = -1
  ) => {
    if (!wheelRef.current) return;
    
    const rect = wheelRef.current.getBoundingClientRect();
    const radius = rect.width / 2;
    
    // Get mouse/touch position
    let clientX, clientY;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    
    // Calculate position relative to wheel center
    const x = (clientX - rect.left - radius) / radius;
    const y = (clientY - rect.top - radius) / radius;
    
    // Calculate distance from center
    const dist = Math.sqrt(x * x + y * y);
    
    // If inside the circle, update color
    if (dist <= 1) {
      // Get HSL values for the current position
      const newHsl = cartesianToHsl(x, y, color.l);
      
      // If we're dragging a harmony point (not the main point)
      if (pointIndex > 0) {
        // Calculate the difference between the original point positions
        const originalBaseHue = color.h;
        const originalPointHue = harmonyPositions[pointIndex].h;
        const hueDifference = (originalPointHue - originalBaseHue + 360) % 360;
        
        // Set the new base color based on the harmony point that's being dragged
        const newBaseHue = (newHsl.h - hueDifference + 360) % 360;
        const newBaseColor = {
          h: newBaseHue,
          s: newHsl.s,
          l: color.l
        };
        
        setColor(newBaseColor);
        setSelectedColor(colord(newBaseColor).toHex());
      } else {
        // If dragging the main point, just update the base color
        const newColor = { ...newHsl, l: color.l };
        setColor(newColor);
        setSelectedColor(colord(newColor).toHex());
      }
      
      // Use requestAnimationFrame for smoother visual updates
      requestAnimationFrame(() => {
        // Notify parent window of color change
        if (isInIframe) {
          try {
            window.parent.postMessage({
              type: 'COLOR_WHEEL_CHANGE',
              color: selectedColor,
              harmony: activeHarmony,
              harmonyColors: harmonyColors,
              hsl: color,
              rgb: colord(selectedColor).toRgb()
            }, '*');
          } catch (e) {
            console.error('Unable to send message to parent window:', e);
          }
        }
      });
    }
  }, [color, wheelRef, selectedColor, isInIframe, activeHarmony, harmonyColors, harmonyPositions]);
  
  // Throttled version of handleWheelInteraction
  const handleWheelInteraction = useThrottle(handleWheelInteractionBase, 16);

  // Handle lightness change
  const handleLightnessChange = (newL: number) => {
    setColor({ ...color, l: newL });
    const newColor = colord({ h: color.h, s: color.s, l: newL }).toHex();
    setSelectedColor(newColor);
    
    // Notify parent window of color change
    if (isInIframe) {
      try {
        window.parent.postMessage({
          type: 'COLOR_WHEEL_CHANGE',
          color: newColor,
          harmony: activeHarmony,
          harmonyColors: generateHarmony(newColor, activeHarmony),
          hsl: { h: color.h, s: color.s, l: newL },
          rgb: colord(newColor).toRgb()
        }, '*');
      } catch (e) {
        console.error('Unable to send message to parent window:', e);
      }
    }
  };

  // Set a specific harmony color as the main color
  const setHarmonyAsMain = (harmonyColor: string) => {
    const hslColor = colord(harmonyColor).toHsl();
    setColor({ h: hslColor.h, s: hslColor.s, l: hslColor.l });
    setSelectedColor(harmonyColor);
  };

  // Handle color code input change
  const handleColorCodeChange = (colorHex: string, index: number) => {
    // Validate hex color
    if (/^#([0-9A-F]{3}){1,2}$/i.test(colorHex)) {
      if (index === 0) {
        // This is the base color
        const hslColor = colord(colorHex).toHsl();
        setColor({ h: hslColor.h, s: hslColor.s, l: hslColor.l });
        setSelectedColor(colorHex);
      } else {
        // This is a harmony color - we would need to recalculate the base color
        // For simplicity, we'll just set this as the main color
        setHarmonyAsMain(colorHex);
      }
    }
  };

  // Copy color code
  const copyColorCode = async (colorToCopy: string = selectedColor) => {
    try {
      await navigator.clipboard.writeText(colorToCopy);
      alert('Color code copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Copy embed code
  const copyEmbedCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      alert('Embed code copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className={`${styles.container} ${isInIframe ? 'iframe-container' : ''}`}>
      {!isInIframe && <h1 className={styles.header}>Color Wheel Tool</h1>}
      
      <div className={styles.colorWheelContainer}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 z-10 rounded-full">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <div 
          ref={wheelRef}
          className={styles.colorWheel}
          onMouseDown={(e) => {
            setIsDragging(true);
            setDraggingIndex(0);  // Main color point
            handleWheelInteraction(e);
          }}
          onMouseMove={(e) => isDragging && draggingIndex === 0 && handleWheelInteraction(e)}
          onMouseUp={() => {
            setIsDragging(false);
            setDraggingIndex(-1);
          }}
          onMouseLeave={() => {
            setIsDragging(false);
            setDraggingIndex(-1);
          }}
          onTouchStart={(e) => {
            e.preventDefault(); // Prevent scrolling on touch devices
            setIsDragging(true);
            setDraggingIndex(0);  // Main color point
            handleWheelInteraction(e);
          }}
          onTouchMove={(e) => {
            e.preventDefault(); // Prevent scrolling on touch devices
            if (isDragging && draggingIndex === 0) {
              handleWheelInteraction(e);
            }
          }}
          onTouchEnd={() => {
            setIsDragging(false);
            setDraggingIndex(-1);
          }}
        >
          <canvas 
            ref={canvasRef}
            width={400}
            height={400}
            className="w-full h-full rounded-full"
          />
          
          {/* Harmony color selectors */}
          {!isLoading && (
            <div className={styles.harmonySelectorContainer}>
              {harmonyPositions.map((position, index) => {
                if (index === 0) return null; // Skip the main color
                
                const pos = getHarmonyPosition(position);
                const harmonyColor = harmonyColors[index] || '#ffffff';
                
                return (
                  <div 
                    key={index}
                    className={styles.harmonySelector}
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      backgroundColor: harmonyColor,
                      cursor: 'pointer',
                      pointerEvents: 'auto',
                      transform: 'translate(-50%, -50%)',
                      willChange: 'left, top' // 优化性能的CSS属性
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      setIsDragging(true);
                      setDraggingIndex(index);
                      handleWheelInteraction(e, index);
                    }}
                    onMouseMove={(e) => {
                      e.stopPropagation();
                      if (isDragging && draggingIndex === index) {
                        handleWheelInteraction(e, index);
                      }
                    }}
                    onMouseUp={(e) => {
                      e.stopPropagation();
                      setIsDragging(false);
                      setDraggingIndex(-1);
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      e.preventDefault(); // 防止触摸设备上的滚动
                      setIsDragging(true);
                      setDraggingIndex(index);
                      handleWheelInteraction(e, index);
                    }}
                    onTouchMove={(e) => {
                      e.stopPropagation();
                      e.preventDefault(); // 防止触摸设备上的滚动
                      if (isDragging && draggingIndex === index) {
                        handleWheelInteraction(e, index);
                      }
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      setIsDragging(false);
                      setDraggingIndex(-1);
                    }}
                  />
                );
              })}
            </div>
          )}
          
          {/* Main color selector */}
          {!isLoading && (
            <div 
              className={styles.colorSelector}
              style={{
                left: `${selectorPosition.x}px`,
                top: `${selectorPosition.y}px`,
                backgroundColor: selectedColor,
                transform: 'translate(-50%, -50%)',
                willChange: 'left, top' // 优化性能的CSS属性
              }}
            />
          )}
        </div>
      </div>
      
      {/* Harmony type selector */}
      <div className={styles.harmonySwitcher}>
        <h3 className={styles.harmonyTitle}>Choose color combination</h3>
        <div className="relative w-full mb-5">
          <select
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 appearance-none transition-colors duration-200"
            value={activeHarmony}
            onChange={(e) => setActiveHarmony(e.target.value as HarmonyType)}
          >
            <option value="complementary">Complementary</option>
            <option value="monochromatic">Monochromatic</option>
            <option value="analogous">Analogous</option>
            <option value="triadic">Triadic</option>
            <option value="tetradic">Tetradic</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Color combination display */}
      <div className={styles.colorCombination}>
        {harmonyColors.map((harmonyColor, index) => (
          <div key={index} className={styles.colorEntry}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium truncate">
                {index === 0 ? 'Base Color' : `Color ${index + 1}`}
              </div>
            </div>
            <div 
              className={styles.colorPreview} 
              style={{ 
                backgroundColor: harmonyColor,
                boxShadow: `0 2px 10px ${harmonyColor}40`
              }}
            ></div>
            <div className="relative mt-2">
              <input 
                type="text" 
                className={styles.colorCodeInput}
                value={harmonyColor}
                onChange={(e) => handleColorCodeChange(e.target.value, index)}
                spellCheck={false}
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 transition-colors duration-200 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
                onClick={() => copyColorCode(harmonyColor)}
                title="Copy color code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 copy-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.controlsContainer}>
        <div className={styles.control}>
          <label className={styles.label}>Lightness (L): {Math.round(color.l)}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={color.l}
            onChange={(e) => {
              const newL = Number(e.target.value);
              handleLightnessChange(newL);
            }}
            className={styles.slider}
          />
          <div className="mt-1 flex justify-between">
            <span className="text-xs text-gray-500">Dark</span>
            <span className="text-xs text-gray-500">Light</span>
          </div>
        </div>
      </div>
      
      {!isInIframe && (
        <div className={styles.embedContainer}>
          <h3 className={styles.embedTitle}>Embed Code</h3>
          <pre className={styles.embedCode}>
            {embedCode}
          </pre>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div className={styles.control}>
              <label className={styles.label}>Width: {iframeWidth}px</label>
              <input
                type="range"
                min="200"
                max="800"
                value={iframeWidth}
                onChange={(e) => setIframeWidth(Number(e.target.value))}
                className={styles.slider}
              />
              <div className="mt-1 flex justify-between">
                <span className="text-xs text-gray-500">200px</span>
                <span className="text-xs text-gray-500">800px</span>
              </div>
            </div>
            <div className={styles.control}>
              <label className={styles.label}>Height: {iframeHeight}px</label>
              <input
                type="range"
                min="300"
                max="800"
                value={iframeHeight}
                onChange={(e) => setIframeHeight(Number(e.target.value))}
                className={styles.slider}
              />
              <div className="mt-1 flex justify-between">
                <span className="text-xs text-gray-500">300px</span>
                <span className="text-xs text-gray-500">800px</span>
              </div>
            </div>
          </div>
          <button 
            className={styles.button}
            onClick={copyEmbedCode}
          >
            Copy Embed Code
          </button>
          
          <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
            <h4 className="text-lg font-bold mb-3 text-blue-800 dark:text-blue-300">Usage Instructions</h4>
            <ul className="list-disc pl-6 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
              <li>Copy the embed code above and paste it into your website&apos;s HTML</li>
              <li>You can set the initial color via URL parameter, e.g.: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">?color=#ff0000</code></li>
              <li>You can also set the initial harmony type: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">?harmony=triadic</code></li>
              <li>In iframe mode, the tool automatically hides the title and embed code sections</li>
              <li>When a user selects a color, the tool sends a message to the parent window. You can receive it with this JavaScript code:</li>
            </ul>
            <pre className="mt-3 p-4 bg-white dark:bg-gray-800 rounded-lg text-xs overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-sm">
{`window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'COLOR_WHEEL_CHANGE') {
    const color = event.data.color;           // Main hex color value
    const harmony = event.data.harmony;       // Active harmony type
    const harmonyColors = event.data.harmonyColors; // Array of harmony colors
    const hsl = event.data.hsl;               // HSL object of main color
    const rgb = event.data.rgb;               // RGB object of main color
    
    // Handle color change here
    console.log('Selected color:', color);
    console.log('Harmony colors:', harmonyColors);
  }
});`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ColorWheelPage() {
  return <ColorWheel />;
} 