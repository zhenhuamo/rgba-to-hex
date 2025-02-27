"use client";

import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';

interface ColorStop {
  id: string;
  color: string;
  position: number;
}

interface GradientPreset {
  name: string;
  colors: { color: string; position: number }[];
  type: 'linear' | 'radial';
  angle: number;
}

// 简单的 ID 生成函数
const generateId = () => {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
};

// 预设渐变
const presetGradients: GradientPreset[] = [
  {
    name: "Sunset",
    colors: [
      { color: "#F56565", position: 0 },
      { color: "#ED8936", position: 50 },
      { color: "#ECC94B", position: 100 }
    ],
    type: "linear",
    angle: 90
  },
  {
    name: "Ocean Blue",
    colors: [
      { color: "#2B6CB0", position: 0 },
      { color: "#4299E1", position: 50 },
      { color: "#90CDF4", position: 100 }
    ],
    type: "linear",
    angle: 45
  },
  {
    name: "Purple Haze",
    colors: [
      { color: "#6B46C1", position: 0 },
      { color: "#9F7AEA", position: 50 },
      { color: "#E9D8FD", position: 100 }
    ],
    type: "linear",
    angle: 135
  },
  {
    name: "Forest",
    colors: [
      { color: "#276749", position: 0 },
      { color: "#48BB78", position: 100 }
    ],
    type: "linear",
    angle: 90
  },
  {
    name: "Candy",
    colors: [
      { color: "#F687B3", position: 0 },
      { color: "#9F7AEA", position: 50 },
      { color: "#4FD1C5", position: 100 }
    ],
    type: "linear",
    angle: 45
  },
  {
    name: "Midnight",
    colors: [
      { color: "#1A202C", position: 0 },
      { color: "#2D3748", position: 100 }
    ],
    type: "radial",
    angle: 90
  }
];

const GradientGenerator = () => {
//   const searchParams = useSearchParams();
//   const embed = searchParams.get('embed');
//   const isEmbedded = embed === 'true';

  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { id: generateId(), color: '#4158D0', position: 0 },
    { id: generateId(), color: '#C850C0', position: 50 },
    { id: generateId(), color: '#FFCC70', position: 100 }
  ]);
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState<number>(90);
  const [cssCode, setCssCode] = useState<string>('');
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [codeFormat, setCodeFormat] = useState<'hex' | 'rgb' | 'rgba' | 'tailwind'>('hex');
  const [savedGradients, setSavedGradients] = useState<{id: string, name: string, gradient: string, data: {colorStops: ColorStop[], gradientType: 'linear' | 'radial', angle: number}}[]>([]);
  const [gradientName, setGradientName] = useState<string>('My Gradient');
  const [showSavedGradients, setShowSavedGradients] = useState<boolean>(false);

  // Load saved gradients from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('savedGradients');
    if (saved) {
      try {
        setSavedGradients(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved gradients', e);
      }
    }
  }, []);

  useEffect(() => {
    generateCssCode();
  }, [colorStops, gradientType, angle, codeFormat]);

  // Convert hex to rgb
  const hexToRgb = (hex: string): {r: number, g: number, b: number} => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : {r: 0, g: 0, b: 0};
  };

  // Determine the closest Tailwind color
  const getClosestTailwindColor = (hex: string): string => {
    // This is a simplified version. A complete implementation would match with all Tailwind colors
    const tailwindColors = {
      'slate': ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a'],
      'gray': ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'],
      'red': ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'],
      'orange': ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12'],
      'amber': ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'],
      'yellow': ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12'],
      'lime': ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314'],
      'green': ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
      'emerald': ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b'],
      'teal': ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a'],
      'cyan': ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63'],
      'sky': ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'],
      'blue': ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
      'indigo': ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'],
      'violet': ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'],
      'purple': ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87'],
      'fuchsia': ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75'],
      'pink': ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843'],
      'rose': ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337'],
    };
    
    const rgb = hexToRgb(hex);
    
    // Find closest color by using euclidean distance in RGB space
    let closestDistance = Infinity;
    let closestColor = '';
    let closestShade = 500; // default to middle shade
    
    for (const [colorName, shades] of Object.entries(tailwindColors)) {
      shades.forEach((shadeHex, index) => {
        const shadeRgb = hexToRgb(shadeHex);
        const distance = Math.sqrt(
          Math.pow(rgb.r - shadeRgb.r, 2) +
          Math.pow(rgb.g - shadeRgb.g, 2) +
          Math.pow(rgb.b - shadeRgb.b, 2)
        );
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestColor = colorName;
          closestShade = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900][index];
        }
      });
    }
    
    return `${closestColor}-${closestShade}`;
  };

  const generateCssCode = () => {
    // Sort color stops by position
    const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);

    // Generate the color stops string based on selected format
    let colorStopsString = '';
    
    if (codeFormat === 'hex') {
      colorStopsString = sortedStops
        .map((stop) => `${stop.color} ${stop.position}%`)
        .join(', ');
    } else if (codeFormat === 'rgb') {
      colorStopsString = sortedStops
        .map((stop) => {
          const rgb = hexToRgb(stop.color);
          return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}) ${stop.position}%`;
        })
        .join(', ');
    } else if (codeFormat === 'rgba') {
      colorStopsString = sortedStops
        .map((stop) => {
          const rgb = hexToRgb(stop.color);
          return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1) ${stop.position}%`;
        })
        .join(', ');
    }

    // Generate CSS code
    let code = '';
    
    if (codeFormat === 'tailwind') {
      // Generate Tailwind classes
      let direction = '';
      if (gradientType === 'linear') {
        // Map angle to Tailwind direction
        if (angle >= 0 && angle < 45) direction = 'to-r';
        else if (angle >= 45 && angle < 90) direction = 'to-br';
        else if (angle >= 90 && angle < 135) direction = 'to-b';
        else if (angle >= 135 && angle < 180) direction = 'to-bl';
        else if (angle >= 180 && angle < 225) direction = 'to-l';
        else if (angle >= 225 && angle < 270) direction = 'to-tl';
        else if (angle >= 270 && angle < 315) direction = 'to-t';
        else direction = 'to-tr';
        
        // Get color classes
        const fromColor = getClosestTailwindColor(sortedStops[0].color);
        const toColor = getClosestTailwindColor(sortedStops[sortedStops.length - 1].color);
        
        // Add via color if there's a middle stop
        if (sortedStops.length > 2) {
          // Find the middle stop
          const middleStopIndex = Math.floor(sortedStops.length / 2);
          const viaColor = getClosestTailwindColor(sortedStops[middleStopIndex].color);
          code = `className="bg-gradient-${direction} from-${fromColor} via-${viaColor} to-${toColor}"`;
        } else {
          code = `className="bg-gradient-${direction} from-${fromColor} to-${toColor}"`;
        }
      } else {
        // Radial gradients aren't directly supported in Tailwind, so provide custom CSS
        code = "/* Tailwind doesn't directly support radial gradients. Use a custom CSS class: */\n";
        code += ".bg-radial-gradient {\n";
        code += `  background: radial-gradient(circle, ${sortedStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')});\n`;
        code += "}";
      }
    } else {
      // Standard CSS code
      if (gradientType === 'linear') {
        code = `background: linear-gradient(${angle}deg, ${colorStopsString});\n`;
        code += `background: -webkit-linear-gradient(${angle}deg, ${colorStopsString});\n`;
        code += `background: -moz-linear-gradient(${angle}deg, ${colorStopsString});`;
      } else {
        code = `background: radial-gradient(circle, ${colorStopsString});\n`;
        code += `background: -webkit-radial-gradient(circle, ${colorStopsString});\n`;
        code += `background: -moz-radial-gradient(circle, ${colorStopsString});`;
      }
    }

    setCssCode(code);
  };

  // Save current gradient
  const saveGradient = () => {
    const gradientData = {
      colorStops: [...colorStops],
      gradientType,
      angle
    };
    
    const newGradient = {
      id: generateId(),
      name: gradientName,
      gradient: gradientType === 'linear' 
        ? `linear-gradient(${angle}deg, ${colorStops
            .sort((a, b) => a.position - b.position)
            .map((stop) => `${stop.color} ${stop.position}%`)
            .join(', ')})`
        : `radial-gradient(circle, ${colorStops
            .sort((a, b) => a.position - b.position)
            .map((stop) => `${stop.color} ${stop.position}%`)
            .join(', ')})`,
      data: gradientData
    };
    
    const updatedGradients = [...savedGradients, newGradient];
    setSavedGradients(updatedGradients);
    localStorage.setItem('savedGradients', JSON.stringify(updatedGradients));
    setGradientName('My Gradient');
  };
  
  // Load a saved gradient
  const loadGradient = (gradientData: {colorStops: ColorStop[], gradientType: 'linear' | 'radial', angle: number}) => {
    setColorStops(gradientData.colorStops.map(stop => ({...stop, id: generateId()})));
    setGradientType(gradientData.gradientType);
    setAngle(gradientData.angle);
    setShowSavedGradients(false);
  };
  
  // Delete a saved gradient
  const deleteGradient = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedGradients = savedGradients.filter(g => g.id !== id);
    setSavedGradients(updatedGradients);
    localStorage.setItem('savedGradients', JSON.stringify(updatedGradients));
  };
  
  // Apply a preset gradient
  const applyPreset = (preset: GradientPreset) => {
    setColorStops(preset.colors.map(c => ({
      id: generateId(),
      color: c.color,
      position: c.position
    })));
    setGradientType(preset.type);
    setAngle(preset.angle);
  };

  const handleColorChange = (id: string, color: string) => {
    setColorStops(
      colorStops.map((stop) => (stop.id === id ? { ...stop, color } : stop))
    );
  };

  const handlePositionChange = (id: string, position: number) => {
    setColorStops(
      colorStops.map((stop) => (stop.id === id ? { ...stop, position } : stop))
    );
  };

  const addColorStop = () => {
    // Calculate a position between existing positions
    const positions = colorStops.map(stop => stop.position).sort((a, b) => a - b);
    let newPosition = 50;
    
    // Try to find a good spot in the middle
    for (let i = 0; i < positions.length - 1; i++) {
      if (positions[i+1] - positions[i] > 20) {
        newPosition = Math.floor((positions[i] + positions[i+1]) / 2);
        break;
      }
    }
    
    // Generate a color that's different from the last one
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    setColorStops([...colorStops, { id: generateId(), color: newColor, position: newPosition }]);
  };

  const removeColorStop = (id: string) => {
    if (colorStops.length <= 2) {
      alert('You need at least two color stops for a gradient');
      return;
    }
    setColorStops(colorStops.filter((stop) => stop.id !== id));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode).then(
      () => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  const gradientStyle = {
    background: gradientType === 'linear' 
      ? `linear-gradient(${angle}deg, ${colorStops
          .sort((a, b) => a.position - b.position)
          .map((stop) => `${stop.color} ${stop.position}%`)
          .join(', ')})`
      : `radial-gradient(circle, ${colorStops
          .sort((a, b) => a.position - b.position)
          .map((stop) => `${stop.color} ${stop.position}%`)
          .join(', ')})`
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-6">
      {/* Tool Header with Title */}
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Gradient Color Generator
        </h1>
        <p className="text-gray-600 mt-2">
          Create beautiful gradient backgrounds for your projects
        </p>
      </div>
      
      {/* Preset Gradients Section */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Preset Gradients</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {presetGradients.map((preset, index) => (
            <button
              key={index}
              onClick={() => applyPreset(preset)}
              className="h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
              style={{
                background: preset.type === 'linear'
                  ? `linear-gradient(${preset.angle}deg, ${preset.colors.map(c => `${c.color} ${c.position}%`).join(', ')})`
                  : `radial-gradient(circle, ${preset.colors.map(c => `${c.color} ${c.position}%`).join(', ')})`
              }}
              title={preset.name}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Controls */}
        <div className="flex flex-col space-y-6">
          {/* Format Selector */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Output Format</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCodeFormat('hex')}
                className={`px-3 py-2 rounded-lg ${
                  codeFormat === 'hex' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                HEX
              </button>
              <button
                onClick={() => setCodeFormat('rgb')}
                className={`px-3 py-2 rounded-lg ${
                  codeFormat === 'rgb' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                RGB
              </button>
              <button
                onClick={() => setCodeFormat('rgba')}
                className={`px-3 py-2 rounded-lg ${
                  codeFormat === 'rgba' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                RGBA
              </button>
              <button
                onClick={() => setCodeFormat('tailwind')}
                className={`px-3 py-2 rounded-lg ${
                  codeFormat === 'tailwind' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tailwind CSS
              </button>
            </div>
          </div>

          {/* Gradient Type Selector */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gradient Type</h2>
            <div className="flex space-x-6">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-600"
                  checked={gradientType === 'linear'}
                  onChange={() => setGradientType('linear')}
                />
                <span className="ml-2 text-gray-700">Linear</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-600"
                  checked={gradientType === 'radial'}
                  onChange={() => setGradientType('radial')}
                />
                <span className="ml-2 text-gray-700">Radial</span>
              </label>
            </div>
          </div>

          {/* Angle Control (only for linear gradients) */}
          {gradientType === 'linear' && (
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">Direction</h2>
                <span className="font-medium text-indigo-600">{angle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0°</span>
                <span>90°</span>
                <span>180°</span>
                <span>270°</span>
                <span>360°</span>
              </div>
            </div>
          )}

          {/* Color Stops Control */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Color Stops</h2>
              <button
                onClick={addColorStop}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Color
              </button>
            </div>

            <div className="space-y-5">
              {colorStops
                .sort((a, b) => a.position - b.position)
                .map((stop) => (
                <div key={stop.id} className="flex items-center space-x-4">
                  <div 
                    className="h-10 w-10 rounded-lg shadow-inner border border-gray-300 flex-shrink-0 cursor-pointer overflow-hidden"
                    style={{ backgroundColor: stop.color }}
                  >
                    <input
                      type="color"
                      value={stop.color}
                      onChange={(e) => handleColorChange(stop.id, e.target.value)}
                      className="opacity-0 w-full h-full cursor-pointer"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{stop.color.toUpperCase()}</span>
                      <span className="text-gray-500">{stop.position}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={stop.position}
                      onChange={(e) => handlePositionChange(stop.id, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500 mt-1"
                    />
                  </div>
                  <button
                    onClick={() => removeColorStop(stop.id)}
                    className="p-1 text-gray-400 hover:text-red-500"
                    title="Remove color"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Save Gradient Control */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Save Gradient</h2>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                value={gradientName}
                onChange={(e) => setGradientName(e.target.value)}
                placeholder="Gradient name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex space-x-3">
                <button
                  onClick={saveGradient}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowSavedGradients(!showSavedGradients)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  {showSavedGradients ? 'Hide Saved' : 'Show Saved'}
                </button>
              </div>
            </div>
            
            {showSavedGradients && (
              <div className="mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Saved Gradients</h3>
                {savedGradients.length === 0 ? (
                  <p className="text-gray-500 text-sm">No saved gradients yet.</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                    {savedGradients.map((saved) => (
                      <div
                        key={saved.id}
                        onClick={() => loadGradient(saved.data)}
                        className="h-16 rounded-lg cursor-pointer relative group"
                        style={{ background: saved.gradient }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-colors duration-200"></div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-xs p-1 rounded-b-lg truncate">
                          {saved.name}
                        </div>
                        <button
                          onClick={(e) => deleteGradient(saved.id, e)}
                          className="absolute top-1 right-1 text-white bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          title="Delete gradient"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Preview & CSS */}
        <div className="flex flex-col space-y-6">
          {/* Gradient Preview */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Preview</h2>
            <div
              className="h-64 w-full rounded-lg shadow-inner"
              style={gradientStyle}
            ></div>
          </div>

          {/* CSS Code */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Code</h2>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 ${
                  copiedToClipboard ? 'bg-green-600' : 'bg-indigo-600'
                } text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200 flex items-center`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {copiedToClipboard ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono overflow-x-auto">
                {cssCode}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with information */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Free gradient generator tool for websites, applications, and user interfaces</p>
      </div>
    </div>
  );
};

export default function GradientGeneratorPage() {
  return <GradientGenerator />;
}