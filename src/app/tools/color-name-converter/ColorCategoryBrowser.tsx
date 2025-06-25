import React, { useState, useMemo, useCallback } from 'react';
import colorNamesData from '@/type/colornames.json';
import { ColorName } from '@/type/colornames';
import { hexToHsl, hexToRgb } from '@/utils/colorNameConverter';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import './color-browser.css';

// Define color categories based on HSL values
const getColorCategory = (color: ColorName) => {
  const hsl = hexToHsl(color.hex);
  if (!hsl) return 'Other';
  const { h, s, l } = hsl;
  
  // Return grayscale if saturation is very low
  if (s < 10) return 'Other';
  
  // Return black or white if lightness is extreme
  if (l < 5) return 'Other';
  if (l > 95) return 'Other';

  // More precise hue ranges
  if ((h >= 350 || h <= 10) && s >= 20) return 'Red';
  if (h > 10 && h <= 40 && s >= 20) return 'Orange';
  if (h > 40 && h <= 65 && s >= 20) return 'Yellow';
  if (h > 65 && h <= 150 && s >= 20) return 'Green';
  if (h > 150 && h <= 200 && s >= 20) return 'Cyan';
  if (h > 200 && h <= 250 && s >= 20) return 'Blue';
  if (h > 250 && h <= 290 && s >= 20) return 'Purple';
  if (h > 290 && h <= 330 && s >= 20) return 'Pink';
  if (h > 330 && h < 350 && s >= 20) return 'Red';
  
  return 'Other';
};

const CATEGORY_ORDER = [
  'Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'Pink', 'Other'
];

const categorizeColors = (colors: ColorName[]) => {
  const categories: { [key: string]: ColorName[] } = {};
  colors.forEach((color) => {
    const cat = getColorCategory(color);
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(color);
  });
  return categories;
};

interface Props {
  onColorSelect?: (color: ColorName) => void;
}

const GRID_COLUMN_COUNT = 6;
const GRID_ROW_HEIGHT = 100; // Increased height
const GRID_COL_WIDTH = 140; // Increased width

const ColorCategoryBrowser: React.FC<Props> = ({ onColorSelect }) => {
  const categories = useMemo(() => categorizeColors(colorNamesData as ColorName[]), []);
  const [selectedCategory, setSelectedCategory] = useState<string>('Red');
  const [copied, setCopied] = useState<string | null>(null);
  const colors = categories[selectedCategory] || [];

  const copyValue = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // Calculate row count
  const rowCount = Math.ceil(colors.length / GRID_COLUMN_COUNT);

  // Render cell
  const Cell = useCallback(({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const idx = rowIndex * GRID_COLUMN_COUNT + columnIndex;
    if (idx >= colors.length) return null;
    const color = colors[idx];
    const rgb = hexToRgb(color.hex);
    const colorInfo = `${color.name}\nHEX: ${color.hex}\nRGB: rgb(${rgb?.r}, ${rgb?.g}, ${rgb?.b})`;
    
    // Get text color based on background
    const hsl = hexToHsl(color.hex);
    const textColor = hsl && hsl.l > 60 ? 'text-gray-800' : 'text-white';
    
    return (
      <div
        style={{ ...style, padding: '0.75rem' }}
        className="cursor-pointer group relative"
        title={`${color.name} - ${color.hex}`}
      >
        <div className="relative">
          <div
            className="w-full h-14 rounded-lg shadow-lg mb-2 group-hover:scale-105 transition-transform duration-200"
            style={{ 
              backgroundColor: color.hex,
              border: '2px solid rgba(255, 255, 255, 0.4)'
            }}
            onClick={() => onColorSelect && onColorSelect(color)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-lg pointer-events-none" />
          
          {/* Copy button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyValue(colorInfo, `color-${color.hex}`);
            }}
            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1.5 bg-white/30 hover:bg-white/50 rounded-lg transition-all duration-300"
            title="Copy color information"
          >
            <svg className="w-4 h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>

          {/* Copy Success Indicator */}
          {copied === `color-${color.hex}` && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-lg animate-fade-in-out z-10">
              Copied!
            </div>
          )}
        </div>
        <div className={`text-sm font-medium truncate text-center ${textColor}`}>
          {color.name}
        </div>
      </div>
    );
  }, [colors, onColorSelect, copied, copyValue]);

  return (
    <div className="space-y-6">
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px) translateX(-50%); }
          10% { opacity: 1; transform: translateY(0) translateX(-50%); }
          90% { opacity: 1; transform: translateY(0) translateX(-50%); }
          100% { opacity: 0; transform: translateY(-10px) translateX(-50%); }
        }

        .animate-fade-in-out {
          animation: fadeInOut 2s ease-in-out forwards;
        }
      `}</style>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Browse by Color Category</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORY_ORDER.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              selectedCategory === cat 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
                : 'bg-white/20 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white/30'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div style={{ width: '100%', maxWidth: GRID_COL_WIDTH * GRID_COLUMN_COUNT, height: 480, margin: '0 auto' }}>
          <Grid
            columnCount={GRID_COLUMN_COUNT}
            columnWidth={GRID_COL_WIDTH}
            height={480}
            rowCount={rowCount}
            rowHeight={GRID_ROW_HEIGHT}
            width={GRID_COL_WIDTH * GRID_COLUMN_COUNT}
            className="custom-scrollbar"
          >
            {Cell}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ColorCategoryBrowser; 