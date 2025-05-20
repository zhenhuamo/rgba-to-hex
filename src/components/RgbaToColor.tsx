'use client';

import React, { useState, useEffect } from 'react';
import { RGBA, rgbaToColor, isValidRgba } from '../utils/colorConverter';

export default function RgbaToColor() {
  const [rgba, setRgba] = useState<RGBA>({
    r: 255,
    g: 0,
    b: 0,
    a: 1
  });
  
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof rgbaToColor> | null>(null);
  
  useEffect(() => {
    if (isValidRgba(rgba)) {
      setError('');
      setResult(rgbaToColor(rgba));
    } else {
      setError('请输入有效的RGBA值 (R,G,B: 0-255, A: 0-1)');
      setResult(null);
    }
  }, [rgba]);
  
  const handleChange = (key: keyof RGBA, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setRgba(prev => ({
        ...prev,
        [key]: key === 'a' ? Math.min(1, Math.max(0, numValue)) : Math.min(255, Math.max(0, numValue))
      }));
    }
  };
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">RGBA to Color</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">R (0-255)</label>
          <input
            type="number"
            value={rgba.r}
            onChange={(e) => handleChange('r', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="255"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">G (0-255)</label>
          <input
            type="number"
            value={rgba.g}
            onChange={(e) => handleChange('g', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="255"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">B (0-255)</label>
          <input
            type="number"
            value={rgba.b}
            onChange={(e) => handleChange('b', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="255"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">A (0-1)</label>
          <input
            type="number"
            value={rgba.a}
            onChange={(e) => handleChange('a', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="1"
            step="0.1"
          />
        </div>
      </div>
      
      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}
      
      {result && (
        <div className="space-y-2">
          <div className="w-full h-20 rounded-md border border-gray-300"
               style={{ backgroundColor: result.rgba }}></div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">RGBA</label>
              <code className="block p-2 bg-gray-100 rounded">{result.rgba}</code>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">HEX</label>
              <code className="block p-2 bg-gray-100 rounded">{result.hex}</code>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">HEX8</label>
              <code className="block p-2 bg-gray-100 rounded">{result.hex8}</code>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">HSL</label>
              <code className="block p-2 bg-gray-100 rounded">{result.hsl}</code>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">HSLA</label>
              <code className="block p-2 bg-gray-100 rounded">{result.hsla}</code>
            </div>
            
            {result.named && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Named Color</label>
                <code className="block p-2 bg-gray-100 rounded">{result.named}</code>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 