"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { hexToRgba, rgbaToHex, RGB } from '@/utils/colorConverter';
import './styles.css';

// Color temperature adjustment function
function adjustTemperature(rgb: RGB, value: number): RGB {
  // Value range from -100 to +100
  // Negative values (warm): increase red and decrease blue
  // Positive values (cool): increase blue and decrease red
  
  const tempFactor = value / 100; // Normalize to -1 to 1
  
  let { r, b } = rgb;
  const { g } = rgb;
  
  if (tempFactor < 0) {
    // Warm adjustment: increase red, decrease blue
    r = Math.min(255, r - tempFactor * 50); // Increase red
    b = Math.max(0, b + tempFactor * 50);   // Decrease blue
  } else {
    // Cool adjustment: increase blue, decrease red
    r = Math.max(0, r - tempFactor * 50);   // Decrease red 
    b = Math.min(255, b + tempFactor * 50); // Increase blue
  }
  
  return {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b)
  };
}

// Tint adjustment function
function adjustTint(rgb: RGB, value: number): RGB {
  // Value range from -100 to +100
  // Negative values: green shift
  // Positive values: magenta shift
  
  const tintFactor = value / 100; // Normalize to -1 to 1
  
  let { r, b } = rgb;
  const { g } = rgb;
  
  if (tintFactor < 0) {
    // Green shift: increase green, decrease magenta (red and blue)
    const gAdjusted = Math.min(255, g - tintFactor * 50); // Increase green
    r = Math.max(0, r + tintFactor * 25);   // Decrease red
    b = Math.max(0, b + tintFactor * 25);   // Decrease blue
    
    return {
      r: Math.round(r),
      g: Math.round(gAdjusted),
      b: Math.round(b)
    };
  } else {
    // Magenta shift: increase red and blue, decrease green
    const gAdjusted = Math.max(0, g - tintFactor * 50);   // Decrease green
    r = Math.min(255, r + tintFactor * 25); // Increase red
    b = Math.min(255, b + tintFactor * 25); // Increase blue
    
    return {
      r: Math.round(r),
      g: Math.round(gAdjusted),
      b: Math.round(b)
    };
  }
}

// Parse color string
function parseColor(colorString: string): RGB | null {
  const rgba = hexToRgba(colorString);
  if (rgba) {
    return { r: rgba.r, g: rgba.g, b: rgba.b };
  }
  
  // Add support for RGB format
  const rgbMatch = colorString.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1]),
      g: parseInt(rgbMatch[2]),
      b: parseInt(rgbMatch[3])
    };
  }
  
  return null;
}

export default function ColorTemperatureAdjuster() {
  const [baseColor, setBaseColor] = useState<string>("#6495ED"); // Default color: CornflowerBlue
  const [temperature, setTemperature] = useState<number>(0);
  const [tint, setTint] = useState<number>(0);
  const [adjustedColor, setAdjustedColor] = useState<string>("#6495ED");
  const [adjustedRgb, setAdjustedRgb] = useState<string>("rgb(100, 149, 237)");
  const [embedCode, setEmbedCode] = useState<string>("");
  
  // Memoize the updateAdjustedColor function
  const updateAdjustedColor = useCallback(() => {
    const rgbColor = parseColor(baseColor);
    if (!rgbColor) return;
    
    // Apply temperature adjustment
    let adjusted = adjustTemperature(rgbColor, temperature);
    
    // Apply tint adjustment
    adjusted = adjustTint(adjusted, tint);
    
    // Update state
    const hexColor = rgbaToHex({...adjusted, a: 1});
    setAdjustedColor(hexColor);
    setAdjustedRgb(`rgb(${adjusted.r}, ${adjusted.g}, ${adjusted.b})`);
  }, [baseColor, temperature, tint]);
  
  // Update color
  useEffect(() => {
    updateAdjustedColor();
  }, [updateAdjustedColor]);
  
  // Set embed code after component mounts (client-side only)
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    const iframeCode = `<iframe src="${baseUrl}/tools/color-temperature-adjuster" width="100%" height="600" frameborder="0"></iframe>`;
    setEmbedCode(iframeCode);
  }, []);
  
  // Safe clipboard write function
  const copyToClipboard = (text: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text).catch(err => {
        console.error('Could not copy text: ', err);
      });
    }
  };
  
  return (
    <div className="color-adjuster-container">
      <h1 className="title">Color Temperature and Tint Adjuster</h1>
      
      <div className="color-input-section">
        <label htmlFor="base-color">Base Color:</label>
        <input
          type="color"
          id="base-color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="color-picker"
        />
        <input
          type="text"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="color-text-input"
        />
      </div>
      
      <div className="sliders-section">
        <div className="slider-container">
          <label htmlFor="temperature">Temperature (Cool-Warm):</label>
          <input
            type="range"
            id="temperature"
            min="-100"
            max="100"
            value={temperature}
            onChange={(e) => setTemperature(parseInt(e.target.value))}
            className="slider"
          />
          <div className="slider-value">
            {temperature < 0 ? "Warm" : temperature > 0 ? "Cool" : "Neutral"} ({temperature})
          </div>
        </div>
        
        <div className="slider-container">
          <label htmlFor="tint">Tint (Green-Magenta):</label>
          <input
            type="range"
            id="tint"
            min="-100"
            max="100"
            value={tint}
            onChange={(e) => setTint(parseInt(e.target.value))}
            className="slider"
          />
          <div className="slider-value">
            {tint < 0 ? "Green Shift" : tint > 0 ? "Magenta Shift" : "Neutral"} ({tint})
          </div>
        </div>
      </div>
      
      <div className="result-section">
        <div className="preview-container">
          <div className="color-preview">
            <div className="original-color" style={{ backgroundColor: baseColor }}>
              <span>Original</span>
            </div>
            <div className="adjusted-color" style={{ backgroundColor: adjustedColor }}>
              <span>Adjusted</span>
            </div>
          </div>
        </div>
        
        <div className="color-values">
          <div className="value-display">
            <span>HEX:</span>
            <input type="text" value={adjustedColor} readOnly className="value-text" />
            <button 
              onClick={() => copyToClipboard(adjustedColor)}
              className="copy-button"
            >
              Copy
            </button>
          </div>
          
          <div className="value-display">
            <span>RGB:</span>
            <input type="text" value={adjustedRgb} readOnly className="value-text" />
            <button 
              onClick={() => copyToClipboard(adjustedRgb)}
              className="copy-button"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      
      <div className="instructions">
        <h3>Instructions:</h3>
        <p>1. Select a base color</p>
        <p>2. Use the temperature slider to adjust color warmth: slide left for warmer colors (more yellow/red), slide right for cooler colors (more blue)</p>
        <p>3. Use the tint slider to adjust the green-magenta balance: slide left for greener tones, slide right for more magenta tones</p>
        <p>4. View the preview and copy the adjusted color values</p>
      </div>
      
      <div className="embed-info">
        <h3>Embed this tool:</h3>
        <textarea 
          readOnly 
          className="embed-code"
          value={embedCode}
        />
        <button 
          onClick={() => copyToClipboard(embedCode)}
          className="copy-button"
        >
          Copy Embed Code
        </button>
      </div>
    </div>
  );
} 