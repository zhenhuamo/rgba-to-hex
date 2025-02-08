interface ColorPreviewProps {
  rgba: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  hexColor: string;
  onCopy: () => void;
}

interface ColorScheme {
  name: string;
  colors: Array<{
    color: string;
    hex: string;
    usage: string;
  }>;
}

export default function ColorPreview({ rgba, hexColor, onCopy }: ColorPreviewProps) {
  const rgbaString = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

  const copyRgba = async () => {
    try {
      await navigator.clipboard.writeText(rgbaString);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 生成互补色
  const getComplementaryColor = () => {
    const r = 255 - rgba.r;
    const g = 255 - rgba.g;
    const b = 255 - rgba.b;
    return {
      color: `rgb(${r}, ${g}, ${b})`,
      hex: `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
    };
  };

  // RGB转HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    const l = (max + min) / 2;
    let s;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  // 生成颜色方案
  const getColorSchemes = (): ColorScheme[] => {
    const complementary = getComplementaryColor();
    const { h, s, l } = rgbToHsl(rgba.r, rgba.g, rgba.b);
    
    // 生成单色方案
    const getMonochromaticColors = () => {
      const variants = [0.4, 0.8, 1, 1.2, 1.6].map(factor => {
        const newL = Math.min(Math.max(l * factor, 0), 100);
        const rgb = hslToRgb(h, s, newL);
        return {
          color: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          hex: rgbToHex(rgb.r, rgb.g, rgb.b),
          usage: factor < 1 ? 'Darker Shade' : factor > 1 ? 'Lighter Shade' : 'Base Color'
        };
      });
      return variants;
    };

    // HSL转RGB
    const hslToRgb = (h: number, s: number, l: number) => {
      s /= 100;
      l /= 100;
      const a = s * Math.min(l, 1 - l);
      const f = (n: number) => {
        const k = (n + h / 30) % 12;
        return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      };
      return {
        r: Math.round(f(0) * 255),
        g: Math.round(f(8) * 255),
        b: Math.round(f(4) * 255)
      };
    };

    // RGB转HEX
    const rgbToHex = (r: number, g: number, b: number) => {
      return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('').toUpperCase()}`;
    };

    return [
      {
        name: 'Complementary Colors',
        colors: [
          {
            color: rgbaString,
            hex: hexColor,
            usage: 'Primary Color'
          },
          {
            color: complementary.color,
            hex: complementary.hex,
            usage: 'Complementary (for emphasis)'
          }
        ]
      },
      {
        name: 'Monochromatic Scheme',
        colors: getMonochromaticColors()
      }
    ];
  };

  // 计算对比度和可访问性评级
  const getAccessibilityInfo = () => {
    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const getContrastRatio = (l1: number, l2: number) => {
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    };

    const bgLuminance = getLuminance(rgba.r, rgba.g, rgba.b);
    const whiteLuminance = getLuminance(255, 255, 255);
    const blackLuminance = getLuminance(0, 0, 0);

    const whiteContrast = getContrastRatio(bgLuminance, whiteLuminance);
    const blackContrast = getContrastRatio(bgLuminance, blackLuminance);

    return {
      whiteContrast: whiteContrast.toFixed(2),
      blackContrast: blackContrast.toFixed(2),
      ratings: {
        normalText: {
          onWhite: whiteContrast >= 4.5 ? 'Pass' : 'Fail',
          onBlack: blackContrast >= 4.5 ? 'Pass' : 'Fail'
        },
        largeText: {
          onWhite: whiteContrast >= 3 ? 'Pass' : 'Fail',
          onBlack: blackContrast >= 3 ? 'Pass' : 'Fail'
        }
      }
    };
  };

  const accessibilityInfo = getAccessibilityInfo();

  return (
    <div className="space-y-6">
      {/* Color values display */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Color Values</h3>
        <div className="flex flex-col gap-3">
          {/* HEX value */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">HEX:</span>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg font-mono">
                {hexColor}
              </code>
              <button
                onClick={onCopy}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
                  group relative"
                title="Copy HEX"
              >
                <span className="text-xl">📋</span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white
                  text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Copy HEX
                </span>
              </button>
            </div>
          </div>
          
          {/* RGBA value */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">RGBA:</span>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg font-mono">
                {rgbaString}
              </code>
              <button
                onClick={copyRgba}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
                  group relative"
                title="Copy RGBA"
              >
                <span className="text-xl">📋</span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white
                  text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Copy RGBA
                </span>
              </button>
            </div>
          </div>

          {/* HSL value */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">HSL:</span>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg font-mono">
                {`hsl(${rgbToHsl(rgba.r, rgba.g, rgba.b).h}, ${rgbToHsl(rgba.r, rgba.g, rgba.b).s}%, ${rgbToHsl(rgba.r, rgba.g, rgba.b).l}%)`}
              </code>
              <button
                onClick={() => {
                  const hsl = rgbToHsl(rgba.r, rgba.g, rgba.b);
                  navigator.clipboard.writeText(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
                  group relative"
                title="Copy HSL"
              >
                <span className="text-xl">📋</span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white
                  text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Copy HSL
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional color schemes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Professional Color Schemes</h3>
        <div className="grid gap-6">
          {getColorSchemes().map((scheme, index) => (
            <div key={index} className="space-y-3 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{scheme.name}</h4>
              <div className="grid gap-3">
                {scheme.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg shadow-inner flex-shrink-0"
                      style={{ backgroundColor: color.color }}
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <code className="text-sm font-mono text-gray-600 dark:text-gray-400">
                          {color.hex}
                        </code>
                        <button
                          onClick={() => navigator.clipboard.writeText(color.hex)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          title="Copy HEX"
                        >
                          📋
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility Analysis */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Accessibility Analysis</h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl space-y-4">
          <div className="grid gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Contrast Ratios</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* White Background Contrast */}
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">On White</span>
                    <span className="font-mono text-sm">{accessibilityInfo.whiteContrast}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Normal Text</span>
                      <span className={`text-sm px-2 py-0.5 rounded ${
                        accessibilityInfo.ratings.normalText.onWhite === 'Pass'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                      }`}>
                        {accessibilityInfo.ratings.normalText.onWhite}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Large Text</span>
                      <span className={`text-sm px-2 py-0.5 rounded ${
                        accessibilityInfo.ratings.largeText.onWhite === 'Pass'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                      }`}>
                        {accessibilityInfo.ratings.largeText.onWhite}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Black Background Contrast */}
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">On Black</span>
                    <span className="font-mono text-sm">{accessibilityInfo.blackContrast}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Normal Text</span>
                      <span className={`text-sm px-2 py-0.5 rounded ${
                        accessibilityInfo.ratings.normalText.onBlack === 'Pass'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                      }`}>
                        {accessibilityInfo.ratings.normalText.onBlack}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Large Text</span>
                      <span className={`text-sm px-2 py-0.5 rounded ${
                        accessibilityInfo.ratings.largeText.onBlack === 'Pass'
                          ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                      }`}>
                        {accessibilityInfo.ratings.largeText.onBlack}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WCAG Guidelines */}
            <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">WCAG 2.0 Guidelines</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Normal text (14pt) requires a minimum contrast ratio of 4.5:1</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Large text (18pt+ or 14pt+ bold) requires a minimum contrast ratio of 3:1</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>UI components and graphical objects require a minimum contrast ratio of 3:1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
