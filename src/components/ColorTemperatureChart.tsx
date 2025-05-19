'use client';

import React, { useState } from 'react';

interface LightSourceMarker {
  kelvin: number;
  label: string;
  description?: string;
}

const ColorTemperatureChart: React.FC = () => {
  const [selectedTemp, setSelectedTemp] = useState<number>(5500);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedSource, setSelectedSource] = useState<LightSourceMarker | null>(null);
  
  // Define accurate color temperature values for common light sources
  const lightSources: LightSourceMarker[] = [
    { kelvin: 1700, label: 'Candle Flame', description: 'Warm, soft orange-yellow light commonly seen in candlelit dinners or traditional lighting' },
    { kelvin: 2000, label: 'Sunrise/Sunset', description: 'Golden hour warmth, a favorite natural light for photographers' },
    { kelvin: 2700, label: 'Traditional Incandescent', description: 'Common warm yellow lighting found in household illumination' },
    { kelvin: 3000, label: 'Halogen Lamp', description: 'Whiter than incandescent with less yellow tones' },
    { kelvin: 3200, label: 'Studio Tungsten', description: 'Standard professional portrait lighting in studios, warm but not overly yellow' },
    { kelvin: 4000, label: 'Moonlight', description: 'Cool tones of moonlight on a clear night' },
    { kelvin: 4100, label: 'Cool White Fluorescent', description: 'Common office lighting, slightly cool white light' },
    { kelvin: 5000, label: 'Horizon Daylight', description: 'Direct sunlight in early morning or late afternoon, relatively neutral natural light' },
    { kelvin: 5500, label: 'D55 Standard Noon', description: 'Photography and printing industry standard, balanced natural white light' },
    { kelvin: 6000, label: 'Electronic Flash', description: 'Standard color temperature for photography flash, slightly cool' },
    { kelvin: 6500, label: 'D65 Standard Daylight', description: 'Television and display standard white point, cooler standard white light' },
    { kelvin: 7500, label: 'Overcast Sky', description: 'Diffused daylight on overcast days, with noticeable blue tones' },
    { kelvin: 8000, label: 'Shade', description: 'Blue sky reflected light, distinctly cool tones' },
    { kelvin: 10000, label: 'Blue Sky', description: 'The coldest natural light, with strong blue-violet tones' },
  ];
  
  // Calculate RGB values corresponding to color temperature (simplified version)
  const kelvinToRGB = (kelvin: number): string => {
    let r = 255, g = 255, b = 255;
    
    // Red channel
    if (kelvin <= 6600) {
      r = 255;
    } else {
      r = kelvin - 6000;
      r = 329.698727446 * Math.pow(r, -0.1332047592);
      r = Math.max(0, Math.min(255, r));
    }
    
    // Green channel
    if (kelvin <= 6600) {
      g = kelvin;
      g = 99.4708025861 * Math.log(g) - 161.1195681661;
    } else {
      g = kelvin - 6000;
      g = 288.1221695283 * Math.pow(g, -0.0755148492);
    }
    g = Math.max(0, Math.min(255, g));
    
    // Blue channel
    if (kelvin >= 6600) {
      b = 255;
    } else if (kelvin <= 1900) {
      b = 0;
    } else {
      b = kelvin - 1000;
      b = 138.5177312231 * Math.log(b) - 305.0447927307;
      b = Math.max(0, Math.min(255, b));
    }
    
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };
  
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(e.target.value);
    setSelectedTemp(temp);
    setSelectedSource(lightSources.find(s => s.kelvin === temp) || null);
  };
  
  const handleMarkerClick = (source: LightSourceMarker) => {
    setSelectedTemp(source.kelvin);
    setSelectedSource(source);
    setShowDetails(true);
  };
  
  // Calculate the position percentage of markers on the chart
  const getMarkerPosition = (kelvin: number) => {
    return ((kelvin - 1000) / 9000) * 100;
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Interactive Color Temperature Scale</h2>
      
      <div className="space-y-6">
        {/* Display current selected color temperature */}
        <div className="text-center">
          <div 
            className="h-32 rounded-xl border border-gray-200 dark:border-gray-700 mb-4" 
            style={{ background: kelvinToRGB(selectedTemp) }}
          ></div>
          <div className="text-3xl font-bold text-gray-800 dark:text-white">
            {selectedTemp}K
          </div>
          {selectedSource && (
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              {selectedSource.label}
            </div>
          )}
        </div>
        
        {/* Color temperature slider */}
        <div className="relative">
          <div 
            className="h-16 w-full rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(to right, #ff8a2b, #ffd52b, #ffffff, #a4cafe, #6b46c1)'
            }}
          ></div>
          
          <input 
            type="range" 
            min="1000" 
            max="10000" 
            step="100" 
            value={selectedTemp} 
            onChange={handleTemperatureChange}
            className="absolute top-0 left-0 w-full h-16 opacity-0 cursor-pointer"
          />
          
          {/* Main scale markers */}
          <div className="relative h-8 mt-2">
            {[1000, 2500, 5000, 7500, 10000].map(temp => (
              <div 
                key={temp} 
                className="absolute transform -translate-x-1/2"
                style={{ left: `${getMarkerPosition(temp)}%` }}
              >
                <div className="h-4 w-0.5 bg-gray-400 dark:bg-gray-500 mx-auto"></div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{temp}K</div>
              </div>
            ))}
          </div>
          
          {/* Light source markers */}
          <div className="relative h-32 mt-4">
            {lightSources.map(source => (
              <div 
                key={source.kelvin} 
                className="absolute transform -translate-x-1/2 cursor-pointer"
                style={{ left: `${getMarkerPosition(source.kelvin)}%` }}
                onClick={() => handleMarkerClick(source)}
              >
                <div className={`h-3 w-3 rounded-full ${selectedTemp === source.kelvin ? 'bg-blue-500' : 'bg-gray-500'} mx-auto`}></div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mt-1 whitespace-nowrap transform -rotate-45 origin-top-left">{source.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Details panel */}
        {selectedSource && showDetails && (
          <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-white">{selectedSource.label} ({selectedSource.kelvin}K)</h3>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{selectedSource.description}</p>
          </div>
        )}
        
        <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
          <p>* The color temperature values above are widely accepted reference standards in color science and photography.</p>
          <p>* Actual light source color temperatures may vary slightly depending on specific environment, manufacturer, and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default ColorTemperatureChart; 