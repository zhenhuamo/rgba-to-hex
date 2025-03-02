'use client';

import { useState, useEffect, useRef } from 'react';


// Color categories for swatches
const colorCategories = [
  { name: 'Red', baseColor: '#FF0000' },
  { name: 'Green', baseColor: '#00FF00' },
  { name: 'Blue', baseColor: '#0000FF' },
  { name: 'Yellow', baseColor: '#FFFF00' },
  { name: 'Purple', baseColor: '#800080' },
  { name: 'Orange', baseColor: '#FFA500' },
  { name: 'Gray', baseColor: '#808080' }
];

// Generate color variations for swatches
const generateSwatches = (baseColor: string, count: number = 10) => {
  const result = [];
  
  // Convert hex to HSL for easier manipulation
  const hexToHSL = (hex: string) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // let h = 0, s = 0, l = (max + min) / 2;
    // 修改为
    let h = 0, s = 0; 
    const l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      
      h /= 6;
    }
    
    return { h: h * 360, s: s * 100, l: l * 100 };
  };
  
  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    let r, g, b;
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  
  const { h, s, l } = hexToHSL(baseColor);
  
  // Generate variations with different lightness and saturation
  for (let i = 0; i < count; i++) {
    // Adjust saturation and lightness based on position
    const row = Math.floor(i / 5);
    const newS = Math.min(100, Math.max(20, s - (row * 10)));
    const newL = Math.min(90, Math.max(10, l + ((i % 5) * 10) - 20));
    
    result.push(hslToHex(h, newS, newL));
  }
  
  return result;
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
  const [pickerTab, setPickerTab] = useState<'picker'|'swatches'|'library'>('picker');
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);
  const [currentHue, setCurrentHue] = useState<number>(0);
  const [currentSaturation, setCurrentSaturation] = useState<number>(100);
  const [currentLightness, setCurrentLightness] = useState<number>(50);
  const [currentRgb, setCurrentRgb] = useState<{r: number, g: number, b: number}>({r: 255, g: 0, b: 0});
  const [selectedCategory, setSelectedCategory] = useState<string>('Red');
  const [tempColor, setTempColor] = useState<string>('#FF0000');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const gradientRef = useRef<HTMLDivElement>(null);
  
  // Reference for tracking the latest mixed color to avoid async issues
  const latestMixedColorRef = useRef('#800080');

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

  // Initialize component on mount - enhanced
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
    
    // Calculate initial mixed color immediately
    const initialMixedColor = mixColors(initialColors);
    setMixedColor(initialMixedColor);
    
    // Force draw on next frame after component mounts
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        drawMixedColor();
        console.log("Initial draw called");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Color mixing algorithm (simple weighted average) - enhanced accuracy
  const mixColors = (colorList: Array<{ color: string, ratio: number }>): string => {
    if (colorList.length === 0) return '#FFFFFF';
    if (colorList.length === 1) return colorList[0].color;

    let totalRatio = 0;
    let r = 0, g = 0, b = 0;

    colorList.forEach(item => {
      const hex = item.color.replace('#', '');
      const ratio = item.ratio;
      
      try {
        // Parse RGB values with error handling
        const rValue = parseInt(hex.substring(0, 2), 16);
        const gValue = parseInt(hex.substring(2, 4), 16);
        const bValue = parseInt(hex.substring(4, 6), 16);
        
        if (!isNaN(rValue) && !isNaN(gValue) && !isNaN(bValue)) {
          // Weighted accumulation
          r += rValue * ratio;
          g += gValue * ratio;
          b += bValue * ratio;
          totalRatio += ratio;
        }
      } catch {
        console.error('Error parsing color hex:', hex);
      }
    });

    if (totalRatio === 0) return '#FFFFFF'; // Avoid division by zero

    // Calculate weighted average with proper rounding
    r = Math.round(r / totalRatio);
    g = Math.round(g / totalRatio);
    b = Math.round(b / totalRatio);

    // Ensure RGB values are within valid range
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    // Convert back to hex color code with padding
    const toHex = (c: number): string => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const result = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    latestMixedColorRef.current = result; // Update the ref with latest calculated color
    return result;
  };

  // Draw the mixed color - with proper single-color handling
  const drawMixedColor = () => {
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
  };

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
      requestAnimationFrame(() => {
        if (canvasRef.current && mounted) {
          drawMixedColor();
          
          // For single color case, draw again after a brief delay for reliability
          if (colors.length === 1) {
            setTimeout(() => {
              if (canvasRef.current) drawMixedColor();
            }, 50);
          }
        }
      });
    }
  }, [colors, mounted]);
  
  // Always redraw when component updates
  useEffect(() => {
    if (mounted && canvasRef.current) {
      drawMixedColor();
    }
  });

  // Force redraw function for external calls
  const forceRedraw = () => {
    if (canvasRef.current && mounted) {
      console.log("Force redraw called, colors length:", colors.length);
      
      // For single color, use it directly
      if (colors.length === 1) {
        latestMixedColorRef.current = colors[0].color;
      }
      
      // Draw now and after a short delay
      drawMixedColor();
      setTimeout(() => drawMixedColor(), 50);
    }
  };
  
  // Special effect for the single color case - runs once after mount
  useEffect(() => {
    if (mounted && colors.length === 1) {
      console.log("Single color effect triggered with:", colors[0].color);
      
      // Force multiple redraws for reliability
      const timer1 = setTimeout(() => forceRedraw(), 100);
      const timer2 = setTimeout(() => forceRedraw(), 300);
      const timer3 = setTimeout(() => forceRedraw(), 500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [colors.length, mounted]);

  // Handle gradient area mouse events for color selection
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleColorSelection(e);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleColorSelection(e);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleColorSelection = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradientElement = gradientRef.current;
    if (!gradientElement) return;
    
    const rect = gradientElement.getBoundingClientRect();
    
    // Calculate saturation and lightness based on position
    let saturation = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    let lightness = Math.round(100 - ((e.clientY - rect.top) / rect.height) * 100);
    
    // Clamp values to 0-100 range
    saturation = Math.max(0, Math.min(100, saturation));
    lightness = Math.max(0, Math.min(100, lightness));
    
    // Update HSL values
    updateHsl('s', saturation);
    updateHsl('l', lightness);
  };

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

  // Handle hue slider dragging
  const handleHueDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderElement = e.currentTarget;
    const rect = sliderElement.getBoundingClientRect();
    
    const newHue = Math.round(((e.clientX - rect.left) / rect.width) * 359);
    updateHsl('h', Math.max(0, Math.min(359, newHue)));
  };
  
  // Handle saturation slider dragging
  const handleSaturationDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderElement = e.currentTarget;
    const rect = sliderElement.getBoundingClientRect();
    
    const newSaturation = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    updateHsl('s', Math.max(0, Math.min(100, newSaturation)));
  };
  
  // Handle lightness slider dragging
  const handleLightnessDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderElement = e.currentTarget;
    const rect = sliderElement.getBoundingClientRect();
    
    const newLightness = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    updateHsl('l', Math.max(0, Math.min(100, newLightness)));
  };

  // Open color picker
  const openColorPicker = (index: number) => {
    setActiveColorIndex(index);
    setPickerVisible(true);
    
    // Set initial picker values based on current color
    const color = colors[index].color;
    updatePickerFromHex(color);
  };
  
  // Convert hex to HSL and RGB
  const updatePickerFromHex = (hex: string) => {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    setCurrentRgb({r, g, b});
    setTempColor(`#${hex}`);
    
    // Convert RGB to HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    // let h = 0, s = 0, l = (max + min) / 2;
    // 修改为
    let h = 0, s = 0; 
    const l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      if (max === rNorm) h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
      else if (max === gNorm) h = (bNorm - rNorm) / d + 2;
      else h = (rNorm - gNorm) / d + 4;
      
      h /= 6;
    }
    
    setCurrentHue(Math.round(h * 360));
    setCurrentSaturation(Math.round(s * 100));
    setCurrentLightness(Math.round(l * 100));
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
    
    // Update HSL
    updatePickerFromHex(newColor);
  };
  
  // Update HSL values and temp color
  const updateHsl = (type: 'h' | 's' | 'l', value: number) => {
    if (type === 'h') setCurrentHue(value);
    if (type === 's') setCurrentSaturation(value);
    if (type === 'l') setCurrentLightness(value);
    
    // Convert HSL to RGB
    const h = type === 'h' ? value : currentHue;
    const s = type === 's' ? value : currentSaturation;
    const l = type === 'l' ? value : currentLightness;
    
    const hsl2rgb = (h: number, s: number, l: number) => {
      h /= 360;
      s /= 100;
      l /= 100;
      
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      let r, g, b;
      
      if (s === 0) {
        r = g = b = l;
      } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      
      return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    };
    
    const rgb = hsl2rgb(h, s, l);
    setCurrentRgb(rgb);
    
    // Convert to hex
    const toHex = (c: number): string => {
      const hex = Math.max(0, Math.min(255, c)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    const newColor = `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
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
          </div>
        )}
        
        {/* Color Picker Modal */}
        {pickerVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-200 transform transition-all animate-fadeIn">
              {/* Tabs */}
              <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex">
                  <button 
                    className={`px-6 py-3 text-sm font-medium transition-all ${pickerTab === 'picker' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                    onClick={() => setPickerTab('picker')}
                  >
                    Color Picker
                  </button>
                  <button 
                    className={`px-6 py-3 text-sm font-medium transition-all ${pickerTab === 'swatches' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                    onClick={() => setPickerTab('swatches')}
                  >
                    Swatches
                  </button>
                  <button 
                    className={`px-6 py-3 text-sm font-medium transition-all ${pickerTab === 'library' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                    onClick={() => setPickerTab('library')}
                  >
                    Library
                  </button>
                </div>
              </div>
              
              {/* Color Picker Tab */}
              {pickerTab === 'picker' && (
                <div className="p-5 shadow-inner">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Main color gradient */}
                    <div 
                      ref={gradientRef}
                      className="relative w-full md:w-64 h-64 rounded-lg overflow-hidden border border-gray-300 cursor-pointer shadow-inner transition-transform hover:scale-[1.01]"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundColor: `hsl(${currentHue}, 100%, 50%)`,
                          backgroundImage: 'linear-gradient(to right, #fff, transparent), linear-gradient(to top, #000, transparent)'
                        }}
                      />
                      <div
                        className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-white shadow-lg transform transition-all duration-75 cursor-move flex items-center justify-center"
                        style={{
                          left: `${currentSaturation}%`,
                          top: `${100 - currentLightness}%`,
                          backgroundColor: tempColor,
                          boxShadow: '0 0 0 2px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.3)'
                        }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      {/* Color preview */}
                      <div className="flex mb-4 animate-pulse-once overflow-hidden rounded-lg shadow-md border border-gray-300">
                        <div className="w-1/2 h-16" style={{ backgroundColor: tempColor }}></div>
                        <div className="w-1/2 h-16 bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-800 font-mono text-lg font-semibold">{tempColor}</span>
                        </div>
                      </div>
                      
                      {/* Hue slider */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 w-10">H</span>
                          <div className="relative flex-1 h-10 rounded-full overflow-hidden cursor-pointer shadow-inner hover:shadow-md transition-all"
                               onMouseDown={(e) => { handleHueDrag(e); setIsDragging(true); }}
                               onMouseMove={(e) => isDragging && handleHueDrag(e)}
                               onMouseUp={() => setIsDragging(false)}
                               onMouseLeave={() => setIsDragging(false)}>
                            <div 
                              className="absolute inset-0"
                              style={{
                                background: 'linear-gradient(to right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)'
                              }}
                            />
                            <input
                              type="range"
                              min="0"
                              max="359"
                              value={currentHue}
                              onChange={(e) => updateHsl('h', parseInt(e.target.value))}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div 
                              className="absolute w-4 h-full bg-white border border-gray-400 transform -translate-x-1/2 rounded-full shadow"
                              style={{ left: `calc(${currentHue / 359 * 100}% - 3px)` }}
                            />
                          </div>
                          <input
                            type="number"
                            min="0"
                            max="359"
                            value={currentHue}
                            onChange={(e) => updateHsl('h', parseInt(e.target.value))}
                            className="ml-2 w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        {/* Saturation slider */}
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 w-10">S</span>
                          <div className="relative flex-1 h-10 rounded-full overflow-hidden cursor-pointer shadow-inner hover:shadow-md transition-all"
                               onMouseDown={(e) => { handleSaturationDrag(e); setIsDragging(true); }}
                               onMouseMove={(e) => isDragging && handleSaturationDrag(e)}
                               onMouseUp={() => setIsDragging(false)}
                               onMouseLeave={() => setIsDragging(false)}>
                            <div 
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(to right, hsl(${currentHue}, 0%, ${currentLightness}%), hsl(${currentHue}, 100%, ${currentLightness}%))`
                              }}
                            />
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={currentSaturation}
                              onChange={(e) => updateHsl('s', parseInt(e.target.value))}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div 
                              className="absolute w-4 h-full bg-white border border-gray-400 transform -translate-x-1/2 rounded-full shadow"
                              style={{ left: `calc(${currentSaturation}% - 3px)` }}
                            />
                          </div>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={currentSaturation}
                            onChange={(e) => updateHsl('s', parseInt(e.target.value))}
                            className="ml-2 w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        {/* Lightness slider */}
                        <div className="flex items-center mb-4">
                          <span className="text-gray-600 w-10">L</span>
                          <div className="relative flex-1 h-10 rounded-full overflow-hidden cursor-pointer shadow-inner hover:shadow-md transition-all"
                               onMouseDown={(e) => { handleLightnessDrag(e); setIsDragging(true); }}
                               onMouseMove={(e) => isDragging && handleLightnessDrag(e)}
                               onMouseUp={() => setIsDragging(false)}
                               onMouseLeave={() => setIsDragging(false)}>
                            <div 
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(to right, #000, hsl(${currentHue}, ${currentSaturation}%, 50%), #fff)`
                              }}
                            />
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={currentLightness}
                              onChange={(e) => updateHsl('l', parseInt(e.target.value))}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div 
                              className="absolute w-4 h-full bg-white border border-gray-400 transform -translate-x-1/2 rounded-full shadow"
                              style={{ left: `calc(${currentLightness}% - 3px)` }}
                            />
                          </div>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={currentLightness}
                            onChange={(e) => updateHsl('l', parseInt(e.target.value))}
                            className="ml-2 w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        {/* RGB inputs */}
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 w-10">R</span>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.r}
                            onChange={(e) => updateRgb('r', parseInt(e.target.value))}
                            className="w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 w-10">G</span>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.g}
                            onChange={(e) => updateRgb('g', parseInt(e.target.value))}
                            className="w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 w-10">B</span>
                          <input
                            type="number"
                            min="0"
                            max="255"
                            value={currentRgb.b}
                            onChange={(e) => updateRgb('b', parseInt(e.target.value))}
                            className="w-16 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        
                        {/* Hex input */}
                        <div className="flex items-center">
                          <span className="text-gray-600 w-10">#</span>
                          <input
                            type="text"
                            value={tempColor.replace('#', '')}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9A-Fa-f]/g, '');
                              if (value.length <= 6) {
                                setTempColor(`#${value.padEnd(6, '0')}`);
                                updatePickerFromHex(`#${value.padEnd(6, '0')}`);
                              }
                            }}
                            className="w-24 p-2 bg-white border border-gray-300 rounded text-gray-800 text-center font-mono shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            maxLength={6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Swatches Tab */}
              {pickerTab === 'swatches' && (
                <div className="p-4">
                  {/* Color categories */}
                  <div className="border-b border-gray-200 mb-4">
                    <div className="flex flex-wrap">
                      {colorCategories.map(category => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`px-3 py-1 mr-2 mb-2 text-sm ${
                            selectedCategory === category.name
                              ? 'text-blue-600 font-medium'
                              : 'text-gray-600'
                          }`}
                        >
                          <span className="inline-block w-3 h-3 rounded-full mr-1" style={{ backgroundColor: category.baseColor }}></span>
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color swatches grid */}
                  <div className="grid grid-cols-10 gap-1">
                    {generateSwatches(colorCategories.find(c => c.name === selectedCategory)?.baseColor || '#FF0000').map((color, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setTempColor(color);
                          updatePickerFromHex(color);
                        }}
                        className={`w-full aspect-square rounded overflow-hidden ${tempColor === color ? 'ring-2 ring-blue-500' : 'border border-gray-300 hover:border-gray-500'}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  {/* Sort options */}
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-600 text-sm mr-2">Sort Colors By:</span>
                    <select className="bg-white border border-gray-300 text-gray-800 rounded p-1 text-sm">
                      <option>Hue</option>
                      <option>Saturation</option>
                      <option>Lightness</option>
                    </select>
                  </div>
                </div>
              )}
              
              {/* Library Tab */}
              {pickerTab === 'library' && (
                <div className="p-4">
                  <div className="text-center text-gray-600 py-8">
                    Saved colors will appear here
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