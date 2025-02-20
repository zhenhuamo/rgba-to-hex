'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { calculateContrastRatio, getWCAGLevel } from '@/utils/colorContrast';

export default function ColorContrast() {
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [foregroundOpacity, setForegroundOpacity] = useState(100);
  const [backgroundOpacity, setBackgroundOpacity] = useState(100);
  const [contrastRatio, setContrastRatio] = useState(21);
  const [wcagLevel, setWcagLevel] = useState({ AA: true, AAA: true });
  const [sampleText, setSampleText] = useState('Sample Text');
  const [fontSize, setFontSize] = useState(16);
  const [colorFormat, setColorFormat] = useState('hex'); // hex, rgb, rgba
  const [isEyedropperSupported, setIsEyedropperSupported] = useState(false);
  const [visualSimulation, setVisualSimulation] = useState('normal'); // normal, protanopia, deuteranopia, tritanopia
  const [showAccessibilityDetails, setShowAccessibilityDetails] = useState(false);

  useEffect(() => {
    // Check if EyeDropper is supported
    setIsEyedropperSupported('EyeDropper' in window);
  }, []);

  useEffect(() => {
    const ratio = calculateContrastRatio(foregroundColor, backgroundColor, foregroundOpacity, backgroundOpacity);
    const level = getWCAGLevel(ratio);
    setContrastRatio(ratio);
    setWcagLevel(level);
  }, [foregroundColor, backgroundColor, foregroundOpacity, backgroundOpacity]);

  const handleEyedropper = async (target: 'foreground' | 'background') => {
    try {
      // @ts-expect-error - EyeDropper API is not yet in TypeScript types
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      if (target === 'foreground') {
        setForegroundColor(result.sRGBHex);
      } else {
        setBackgroundColor(result.sRGBHex);
      }
    } catch (e) {
      console.error('Failed to open eyedropper:', e);
    }
  };

  const presetColors = [
    { name: 'Black on White', fg: '#000000', bg: '#FFFFFF' },
    { name: 'White on Black', fg: '#FFFFFF', bg: '#000000' },
    { name: 'Navy on Gray', fg: '#003366', bg: '#F5F5F5' },
    { name: 'Yellow on Purple', fg: '#FFD700', bg: '#4B0082' },
  ];

  const visualSimulations = [
    { name: 'Normal Vision', value: 'normal' },
    { name: 'Protanopia (Red-Blind)', value: 'protanopia' },
    { name: 'Deuteranopia (Green-Blind)', value: 'deuteranopia' },
    { name: 'Tritanopia (Blue-Blind)', value: 'tritanopia' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto mb-16">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/contrast.svg" alt="Color Contrast Checker Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Color Contrast Checker
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Ensure your color combinations meet WCAG accessibility standards
            </p>
          </div>

          {/* Color Format Selector */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setColorFormat('hex')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'hex' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                HEX
              </button>
              <button
                onClick={() => setColorFormat('rgb')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'rgb' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                RGB
              </button>
              <button
                onClick={() => setColorFormat('rgba')}
                className={`px-4 py-2 rounded-lg ${colorFormat === 'rgba' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                RGBA
              </button>
            </div>
          </div>

          {/* Main Tool Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Color Inputs */}
            <div className="space-y-6">
              {/* Color Selection Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Choose Colors</h2>
                
                {/* Text Color */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Text Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={foregroundColor}
                      onChange={(e) => setForegroundColor(e.target.value)}
                      className="h-10 w-20"
                    />
                    <input
                      type="text"
                      value={foregroundColor.toUpperCase()}
                      onChange={(e) => setForegroundColor(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-lg"
                      placeholder="#000000"
                    />
                    {isEyedropperSupported && (
                      <button
                        onClick={() => handleEyedropper('foreground')}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        title="Pick color from screen"
                      >
                        <span role="img" aria-label="eyedropper">👁️</span>
                      </button>
                    )}
                  </div>
                  {colorFormat === 'rgba' && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium mb-2">Opacity: {foregroundOpacity}%</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={foregroundOpacity}
                        onChange={(e) => setForegroundOpacity(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Background Color */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Background Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="h-10 w-20"
                    />
                    <input
                      type="text"
                      value={backgroundColor.toUpperCase()}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-lg"
                      placeholder="#FFFFFF"
                    />
                    {isEyedropperSupported && (
                      <button
                        onClick={() => handleEyedropper('background')}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                        title="Pick color from screen"
                      >
                        <span role="img" aria-label="eyedropper">👁️</span>
                      </button>
                    )}
                  </div>
                  {colorFormat === 'rgba' && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium mb-2">Opacity: {backgroundOpacity}%</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={backgroundOpacity}
                        onChange={(e) => setBackgroundOpacity(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>

                {/* Text Customization */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Sample Text</label>
                    <input
                      type="text"
                      value={sampleText}
                      onChange={(e) => setSampleText(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Font Size: {fontSize}px</label>
                    <input
                      type="range"
                      min="12"
                      max="32"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Visual Impairment Simulation */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Visual Impairment Simulation</h2>
                <div className="grid grid-cols-2 gap-3">
                  {visualSimulations.map((simulation) => (
                    <button
                      key={simulation.value}
                      onClick={() => setVisualSimulation(simulation.value)}
                      className={`p-3 rounded-lg border ${
                        visualSimulation === simulation.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'hover:border-blue-500'
                      }`}
                    >
                      {simulation.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset Colors */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Preset Color Combinations</h2>
                <div className="grid grid-cols-2 gap-3">
                  {presetColors.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setForegroundColor(preset.fg);
                        setBackgroundColor(preset.bg);
                      }}
                      className="p-3 rounded-lg border hover:border-blue-500 transition-colors"
                      style={{
                        backgroundColor: preset.bg,
                        color: preset.fg
                      }}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Preview and Results */}
            <div className="space-y-6">
              {/* Preview Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                <div
                  className="h-32 rounded-xl p-4 flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: backgroundColor,
                    color: foregroundColor,
                    fontSize: `${fontSize}px`,
                    opacity: backgroundOpacity / 100,
                    filter: visualSimulation !== 'normal' ? `url(#${visualSimulation})` : 'none'
                  }}
                >
                  <span style={{ opacity: foregroundOpacity / 100 }}>{sampleText}</span>
                </div>
                {/* SVG Filters for Color Blindness Simulation */}
                <svg className="hidden">
                  <defs>
                    <filter id="protanopia">
                      <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.567, 0.433, 0,     0, 0
                                0.558, 0.442, 0,     0, 0
                                0,     0.242, 0.758, 0, 0
                                0,     0,     0,     1, 0"
                      />
                    </filter>
                    <filter id="deuteranopia">
                      <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.625, 0.375, 0,   0, 0
                                0.7,   0.3,   0,   0, 0
                                0,     0.3,   0.7, 0, 0
                                0,     0,     0,   1, 0"
                      />
                    </filter>
                    <filter id="tritanopia">
                      <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.95, 0.05,  0,     0, 0
                                0,    0.433, 0.567, 0, 0
                                0,    0.475, 0.525, 0, 0
                                0,    0,     0,     1, 0"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Results Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Contrast Results</h2>
                <div className="space-y-4">
                  {/* Contrast Ratio */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Contrast Ratio:</span>
                    <span className="text-2xl font-bold">{contrastRatio.toFixed(2)}:1</span>
                  </div>

                  {/* WCAG Compliance */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${wcagLevel.AA ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                      <div className="font-medium">WCAG AA</div>
                      <div className="text-sm">{wcagLevel.AA ? 'Pass ✓' : 'Fail ✗'}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${wcagLevel.AAA ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                      <div className="font-medium">WCAG AAA</div>
                      <div className="text-sm">{wcagLevel.AAA ? 'Pass ✓' : 'Fail ✗'}</div>
                    </div>
                  </div>

                  {/* Additional Accessibility Information */}
                  <button
                    onClick={() => setShowAccessibilityDetails(!showAccessibilityDetails)}
                    className="w-full mt-4 px-4 py-2 text-left flex justify-between items-center bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <span>View Detailed Accessibility Information</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${showAccessibilityDetails ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showAccessibilityDetails && (
                    <div className="mt-4 space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h3 className="font-medium mb-2">ADA Compliance</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          The Americans with Disabilities Act (ADA) requires web content to be accessible to people with disabilities.
                          This color combination is {wcagLevel.AA ? 'compliant' : 'not compliant'} with ADA requirements.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Section 508</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Section 508 requires federal agencies to make their electronic and information technology accessible.
                          This color combination is {wcagLevel.AA ? 'compliant' : 'not compliant'} with Section 508 requirements.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Usage Recommendations</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                          <li>Use for {fontSize >= 18 ? 'large' : 'normal'} text</li>
                          <li>Suitable for {wcagLevel.AAA ? 'all' : wcagLevel.AA ? 'most' : 'limited'} content types</li>
                          <li>Consider increasing contrast for better accessibility</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Understanding WCAG Standards</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Minimum Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>WCAG Level AA requires a contrast ratio of at least 4.5:1</li>
                    <li>WCAG Level AAA requires a contrast ratio of at least 7:1</li>
                    <li>Large text (18pt+) can use a lower ratio of 3:1 for AA level</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Why It Matters</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Good color contrast ensures text readability for all users, including those with visual impairments.
                    Meeting WCAG standards is essential for creating accessible digital content and may be legally required for many websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4">How to Use This Tool</h2>
              <div className="space-y-4">
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>1. Choose your color format (HEX, RGB, or RGBA)</p>
                  <p>2. Use the color picker, eyedropper, or enter values manually</p>
                  <p>3. Adjust opacity if using RGBA format</p>
                  <p>4. Test with different visual impairment simulations</p>
                  <p>5. Check detailed accessibility compliance information</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-lg mb-2">Advanced Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Use the eyedropper to pick colors from your screen</li>
                    <li>Test colors with different types of color blindness</li>
                    <li>Check ADA and Section 508 compliance</li>
                    <li>Adjust text size to test large text requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Section for SEO and User Guide */}
          <div className="mt-12 space-y-8">
            {/* Tool Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Free Online Color Contrast Checker Tool</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="lead">
                  Our professional Color Contrast Checker is a free, comprehensive tool designed to help web designers, developers, and content creators ensure their color combinations meet WCAG accessibility standards. This tool combines the functionality of popular solutions like the WebAIM contrast checker, Adobe color contrast checker, and a11y color contrast checker into one powerful platform.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Key Features of Our Color Contrast Checker</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time contrast ratio calculation</li>
                  <li>WCAG 2.1 compliance checking (AA and AAA levels)</li>
                  <li>Support for HEX, RGB, and RGBA color formats</li>
                  <li>Built-in eyedropper tool for color picking</li>
                  <li>Visual impairment simulation</li>
                  <li>Opacity and transparency support</li>
                  <li>Color palette contrast checking</li>
                  <li>ADA and Section 508 compliance verification</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Who Should Use This Tool?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Web Professionals</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Web Designers</li>
                      <li>UI/UX Designers</li>
                      <li>Front-end Developers</li>
                      <li>Accessibility Specialists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Content Creators</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Graphic Designers</li>
                      <li>Marketing Professionals</li>
                      <li>Content Managers</li>
                      <li>Digital Artists</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Comprehensive Color Accessibility Testing</h3>
                <p>
                  Our website color contrast checker goes beyond basic contrast checking by providing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Color palette contrast checking for comprehensive design systems</li>
                  <li>Chrome extension compatibility for quick checks while browsing</li>
                  <li>Free color contrast checker functionality with professional-grade features</li>
                  <li>Advanced accessibility testing tools for ADA compliance</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Detailed Usage Guide</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">1. Basic Color Contrast Checking</h4>
                    <p>Use our free color contrast checker to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Enter HEX, RGB, or RGBA color values</li>
                      <li>Use the color picker for visual selection</li>
                      <li>Check contrast ratios instantly</li>
                      <li>Verify WCAG compliance levels</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">2. Advanced Features</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Test color combinations with opacity settings</li>
                      <li>Simulate different types of color blindness</li>
                      <li>Check text legibility at various sizes</li>
                      <li>Analyze entire color palettes for accessibility</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">3. Accessibility Compliance</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Verify WCAG 2.1 AA and AAA compliance</li>
                      <li>Check ADA requirements</li>
                      <li>Ensure Section 508 compliance</li>
                      <li>Generate accessibility reports</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Why Color Contrast Matters</h3>
                <div className="space-y-4">
                  <p>
                    Proper color contrast is essential for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ensuring content readability for all users</li>
                    <li>Meeting legal accessibility requirements</li>
                    <li>Improving user experience across devices</li>
                    <li>Supporting users with visual impairments</li>
                  </ul>
                  <p>
                    Our color contrast checker tool helps you achieve these goals while maintaining your design aesthetic.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Integration Options</h3>
                <div className="space-y-4">
                  <p>
                    This tool can be used with various platforms and workflows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Compatible with Adobe Creative Suite</li>
                    <li>Available as a Chrome extension</li>
                    <li>Works with popular design tools</li>
                    <li>Integrates with accessibility testing workflows</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Best Practices for Color Contrast</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Design Tips</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Start with WCAG AA compliance as minimum</li>
                      <li>Test colors across different backgrounds</li>
                      <li>Consider color blindness variations</li>
                      <li>Use sufficient contrast for all text sizes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Common Mistakes to Avoid</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Assuming aesthetics over accessibility</li>
                      <li>Ignoring mobile device considerations</li>
                      <li>Overlooking color blindness testing</li>
                      <li>Using low contrast for decorative elements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">What is a color contrast checker?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A color contrast checker is a tool that measures the contrast ratio between two colors to ensure they meet accessibility standards. Our tool provides comprehensive contrast checking capabilities for web accessibility compliance.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Why should I use a color contrast checker?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Using a color contrast checker helps ensure your content is readable by all users, including those with visual impairments. It&apos;s essential for meeting accessibility standards and legal requirements for web content.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">How does the color contrast checker work?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our tool calculates the contrast ratio between two colors using the WCAG algorithm. It supports multiple color formats (HEX, RGB, RGBA) and provides instant feedback on accessibility compliance.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Is this color contrast checker free?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, our color contrast checker is completely free to use and provides professional-grade features including WCAG compliance checking, color blindness simulation, and accessibility reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 