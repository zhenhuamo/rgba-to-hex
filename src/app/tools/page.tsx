'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ToolsIndex() {
  // Tool categories copied from Navigation component
  const toolCategories = [
    {
      category: "Color Conversion Tools",
      description: "Professional tools for converting between various color formats including RGB, HSL, HEX, CMYK, OKLCH, CIE XYZ, CIELAB and other color spaces with industry-standard precision",
      icon: "🔄",
      tools: [
        { name: 'RGBA to 8-Digit HEX', href: '/tools/rgba-to-hex-8-digit', color: 'from-blue-500 to-blue-600' },
        { name: 'RGBA to RGB', href: '/tools/rgba-to-rgb', color: 'from-violet-500 to-violet-600' },
        { name: 'HEX to RGBA', href: '/tools/hex-to-rgba', color: 'from-green-500 to-green-600' },
        { name: 'HEX to HSL', href: '/tools/hex-to-hsl', color: 'from-amber-500 to-amber-600' },
        { name: 'RGB to HEX', href: '/tools/rgb-to-hex', color: 'from-lime-500 to-lime-600' },
        { name: 'HSL to HEX', href: '/tools/hsl-to-hex', color: 'from-orange-500 to-orange-600' },
        { name: 'HSL to RGBA', href: '/tools/hsl-to-rgba', color: 'from-purple-500 to-pink-500' },
        { name: 'HSL to OKLCH', href: '/tools/hsl-to-oklch', color: 'from-purple-500 to-purple-600' },
        { name: 'OKLCH to HSL', href: '/tools/oklch-to-hsl', color: 'from-indigo-500 to-purple-500' },
        { name: 'OKLCH to HSV', href: '/tools/oklch-to-hsv', color: 'from-teal-600 to-cyan-600' },
        { name: 'HSV to OKLCH', href: '/tools/hsv-to-oklch', color: 'from-emerald-600 to-teal-600' },
        { name: 'OKLCH to HEX', href: '/tools/oklch-to-hex', color: 'from-indigo-500 to-indigo-600' },
        { name: 'OKLCH to CMYK', href: '/tools/oklch-to-cmyk', color: 'from-cyan-600 to-purple-600' },
        { name: 'OKLCH to OKLAB', href: '/tools/oklch-to-oklab', color: 'from-purple-600 to-pink-600' },
        { name: 'OKLAB to OKLCH', href: '/tools/oklab-to-oklch', color: 'from-pink-600 to-purple-600' },
        { name: 'CMYK to HEX', href: '/tools/cmyk-to-hex', color: 'from-red-500 to-red-600' },
        { name: 'HEX to CMYK', href: '/tools/hex-to-cmyk', color: 'from-emerald-500 to-emerald-600' },
        { name: 'RGB to HSL', href: '/tools/rgb-to-hsl', color: 'from-purple-500 to-purple-600' },
        { name: 'HSL to RGB', href: '/tools/hsl-to-rgb', color: 'from-pink-500 to-pink-600' },
        { name: 'RGB to HSV', href: '/tools/rgb-to-hsv', color: 'from-teal-500 to-teal-600' },
        { name: 'HSV to RGB', href: '/tools/hsv-to-rgb', color: 'from-indigo-500 to-indigo-600' },
        { name: 'HSV to RGBA', href: '/tools/hsv-to-rgba', color: 'from-purple-500 to-indigo-500' },
        { name: 'RGB to CMYK', href: '/tools/rgb-to-cmyk', color: 'from-cyan-500 to-cyan-600' },
        { name: 'RGB to LAB', href: '/tools/rgb-to-lab', color: 'from-rose-500 to-rose-600' },
        { name: 'RGB to OKLCH', href: '/tools/rgb-to-oklch', color: 'from-pink-600 to-pink-700' },
        { name: 'OKLCH to RGB', href: '/tools/oklch-to-rgb', color: 'from-blue-600 to-blue-700' },
        { name: 'XYZ to RGB', href: '/tools/xyz-to-rgb', color: 'from-blue-700 to-blue-800' },
        { name: 'XYZ to LAB', href: '/tools/xyz-to-lab', color: 'from-purple-700 to-purple-800' },
        { name: 'XYZ to UV', href: '/tools/xyz-to-uv', color: 'from-teal-700 to-teal-800' },
        { name: 'UV to XYZ', href: '/tools/uv-to-xyz', color: 'from-cyan-700 to-cyan-800' },
        { name: 'LAB to XYZ', href: '/tools/lab-to-xyz', color: 'from-indigo-700 to-indigo-800' },
        { name: 'CMYK to RGB', href: '/tools/cmyk-to-rgb', color: 'from-yellow-500 to-yellow-600' },
        { name: 'CMYK to RGBA', href: '/tools/cmyk-to-rgba', color: 'from-red-500 to-pink-500' },
        { name: 'CMYK to OKLCH', href: '/tools/cmyk-to-oklch', color: 'from-purple-700 to-indigo-700' },
        { name: 'HSV to HEX', href: '/tools/hsv-to-hex', color: 'from-sky-500 to-sky-600' },
        { name: 'HSV to HSL (and vice-versa)', href: '/tools/hsv-hsl', color: 'from-fuchsia-500 to-fuchsia-600' },
        { name: 'HSL to CMYK', href: '/tools/hsl-to-cmyk', color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      category: "Color Tools",
      description: "Professional color tools for palette generation, contrast checking, color wheels, and gradient creation to help designers and developers create and manage color schemes",
      icon: "🎨",
      tools: [
        { name: 'EyeDropper Tool', href: '/tools/eyedropper-tool', color: 'from-red-500 to-red-600' },
        { name: 'Color Wheel', href: '/tools/color-wheel', color: 'from-amber-500 to-amber-600' },
        { name: 'Color Picker', href: '/tools/color-picker-embed', color: 'from-lime-500 to-lime-600' },
        { name: 'Color Name', href: '/tools/color-name', color: 'from-violet-500 to-violet-600' },
        { name: 'Color Temperature', href: '/tools/color-temperature', color: 'from-orange-500 to-orange-600' },
        { name: 'Color Contrast Checker', href: '/tools/color-contrast', color: 'from-indigo-500 to-indigo-600' },
        { name: 'Color Harmony Generator', href: '/tools/color-harmony', color: 'from-purple-500 to-purple-600' },
        { name: 'Delta-E Calculator', href: '/tools/delta-e-calculator', color: 'from-blue-600 to-blue-700' },
        { name: 'Palette Generator', href: '/tools/palette-generator', color: 'from-pink-500 to-pink-600' },
        { name: 'Gradient Generator', href: '/tools/gradient-generator', color: 'from-blue-500 to-blue-600' },
        { name: 'Color Blindness Simulator', href: '/tools/color-blindness-simulator', color: 'from-teal-500 to-teal-600' },
        { name: 'Image Color Extractor', href: '/tools/image-color-extractor', color: 'from-rose-500 to-rose-600' },
        { name: 'Color Mixer', href: '/tools/color-mixer', color: 'from-emerald-500 to-emerald-600' },
        { name: 'Mixbox Paint Mixer', href: '/tools/mixer-painter', color: 'from-violet-500 to-violet-600' }
      ]
    },
    {
      category: "Number Tools",
      description: "Professional numerical conversion tools to help developers quickly and accurately convert between different number systems and formats",
      icon: "🔢",
      tools: [
        { name: 'HEX to Decimal', href: '/tools/hex-to-decimal', color: 'from-blue-600 to-blue-700' },
        { name: 'HEX to Binary', href: '/tools/hex-to-binary', color: 'from-green-600 to-green-700' },
        { name: 'Binary to Decimal', href: '/tools/binary-to-decimal', color: 'from-purple-600 to-purple-700' },
        { name: 'Decimal to Binary', href: '/tools/decimal-to-binary', color: 'from-indigo-600 to-indigo-700' },
        { name: 'Octal Converter', href: '/tools/octal-converter', color: 'from-orange-600 to-orange-700' }
      ]
    },
    {
      category: "Image Tools",
      description: "Practical image processing tools offering blur effects, cropping, adjustment, color inversion, and optimization features",
      icon: "🖼️",
      tools: [
        { name: 'Image Blur Tool', href: '/tools/image-blur', color: 'from-indigo-600 to-indigo-700' },
        { name: 'Image Crop Tool', href: '/tools/image-crop-landing', color: 'from-blue-600 to-blue-700' },
        { name: 'Image Inverter (EN)', href: '/tools/en/invert-image', color: 'from-purple-600 to-purple-700' },
        { name: 'Invertir Imagen (ES)', href: '/tools/es/invertir-imagen', color: 'from-red-600 to-red-700' },
        { name: 'Inverter Imagem (PT)', href: '/tools/pt/inverter-imagem', color: 'from-green-600 to-green-700' },
      ]
    },
    {
      category: "Text Tools",
      description: "Professional text processing, encoding conversion, and font beautification tools for designers and developers",
      icon: "📝",
      tools: [
        { name: 'Text to Handwriting', href: '/tools/text-to-handwriting', color: 'from-indigo-500 to-indigo-600' },
        { name: 'Font Generator', href: '/tools/font-generator', color: 'from-purple-500 to-purple-600' },
        { name: 'Text to Binary', href: '/tools/text-to-binary', color: 'from-blue-500 to-blue-600' },
        { name: 'Binary to Text', href: '/tools/binary-to-text', color: 'from-green-500 to-green-600' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/rgb.svg" alt="Professional Online Color Tool Collection" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Professional Color Tools
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Comprehensive collection of professional color tools for modern web designers, developers, and color scientists. Includes advanced color space conversions between RGB, HSL, HEX, CMYK, CIE XYZ, CIELAB (LAB), OKLCH formats,
              palette generation, contrast checking, gradient creation, and specialized color science utilities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Our tools support traditional color spaces (RGB, HSL, HEX, CMYK) and advanced color science formats (CIE XYZ, CIELAB, OKLCH) following CSS Color Level 4 specifications and CIE standards.
              Perfect for digital design workflows, print production, color research, and professional color management applications with industry-standard D65 illuminant calculations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Complete Color Conversion</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CIE Color Science</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Preview</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Quality</span>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full font-medium">D65 Standard</span>
            </div>
          </div>

          {/* Tools Categories Sections */}
          {toolCategories.map((category, index) => (
            <div key={index} className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">{category.category}</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl">
                {category.description}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Link 
                    href={tool.href}
                    key={toolIndex}
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-all`}>
                        {tool.name.charAt(0)}
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {tool.name === 'Image Blur Tool'
                        ? 'Professional online blur image tool with multiple blur effects including Gaussian blur, motion blur, background blur, and selective blur. Learn how to blur image online free with real-time preview, adjustable parameters, and instant download. Perfect for privacy protection, artistic effects, and professional photo editing.'
                        : tool.name === 'HSL to CMYK'
                        ? 'Convert HSL colors to CMYK format for professional printing. Features intuitive HSL color selection with real-time CMYK output and ink coverage warnings for print-ready designs.'
                        : tool.name === 'HSV to RGBA'
                        ? 'Convert HSV colors to RGBA format with alpha transparency control. Perfect for web design with HSV color selection, real-time RGBA output, and CSS-ready transparent color values.'
                        : tool.name === 'XYZ to LAB'
                        ? 'Convert CIE XYZ tristimulus values to CIELAB (LAB) perceptual color space. Professional tool using D65 illuminant standard with step-by-step formulas, programming examples, and comprehensive technical documentation for color scientists and designers.'
                        : tool.name === 'XYZ to UV'
                        ? 'Convert CIE XYZ color space to CIE 1960 UCS chromaticity coordinates (u, v) for professional color analysis, optical applications, and color temperature measurements. Features real-time calculations and comprehensive technical documentation.'
                        : tool.name === 'UV to XYZ'
                        ? 'Convert CIE 1960 UCS chromaticity coordinates (u, v) back to CIE XYZ color space with luminance input. Professional tool for colorimetric applications with detailed conversion formulas and programming examples.'
                        : tool.name === 'LAB to XYZ'
                        ? 'Convert CIELAB (LAB) perceptual colors to CIE XYZ tristimulus coordinates. Features accurate D65 illuminant conversion, real-time calculations, and detailed mathematical explanations for professional color management workflows.'
                        : tool.name === 'Octal Converter'
                        ? 'Professional bidirectional octal to decimal converter with Unix file permissions calculator. Features octal-decimal conversion, permission visualization (rwxr-xr-x), and comprehensive educational content for system administrators.'
                        : tool.name === 'Text to Binary'
                        ? 'Convert text to binary encoding (ASCII format). Features character-by-character analysis with ASCII codes, common text examples, and detailed binary representation. Perfect for programming education and data encoding tasks.'
                        : tool.name === 'Binary to Text'
                        ? 'Convert binary code back to readable text. Smart format detection supports spaced, continuous, and comma-separated binary input. Includes error handling, format suggestions, and binary statistics analysis.'
                        : `Professional ${tool.name} tool with real-time preview and intuitive user interface.`
                      }
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Benefits Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Why Choose Our Color Tools?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
              Our toolkit provides designers and developers with an all-in-one solution to efficiently and precisely handle various color-related tasks.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Real-time Conversion & Preview</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All tools provide real-time color conversion and intuitive preview functionality, allowing you to instantly see results and quickly adjust parameters to improve design and development efficiency.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Comprehensive Color Space Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Support for color spaces in the latest CSS Color Level 4 specification, such as OKLCH and LCH, as well as traditional RGB, HSL, HEX, and CMYK, meeting various design and development needs.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Professional Precision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Using professional color science algorithms to ensure the accuracy and consistency of all conversions and processing, suitable for professional-level design and development work.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Intuitive User Interface</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Carefully designed user interfaces with intuitive sliders and controls allow you to easily adjust various color parameters and achieve the ideal color effects.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Ready-to-Use Code</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Automatically generate clean, properly formatted CSS code with one-click copy functionality that can be directly applied to your web development projects without additional conversion.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">No Installation or Registration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  All tools are online applications that require no software downloads or account registration. Use them directly in your browser to quickly complete color-related work.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Which browsers do these tools support?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our tools support all major modern browsers, including Chrome 111+, Firefox 113+, Safari 15.4+, and Edge 111+. For older browsers, we provide progressive enhancement support strategies to ensure basic functionality is available.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  How accurate are the color conversions in these tools?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use industry-standard color science algorithms following CIE specifications to ensure high precision and accuracy for all color conversions. Our XYZ to LAB and LAB to XYZ converters use the official CIE formulas with D65 illuminant standards, providing professional-grade accuracy suitable for color research, print production, and display calibration applications.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Can I use these tools for commercial projects?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, our tools are free to use for both personal and commercial projects. All generated color codes and conversion results can be freely used without attribution or licensing. Our goal is to provide valuable resources for the design and development community.
                </p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  What are the advantages of the OKLCH color space?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  OKLCH offers perceptual uniformity and consistency advantages. Unlike HSL, OKLCH ensures consistent brightness perception across all hues, making color adjustments more predictable. It supports wider color gamuts, provides better color mixing results, and complies with CSS Color Level 4 specifications, offering more advanced color handling capabilities for modern web design.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  When should I use XYZ and LAB color spaces?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  CIE XYZ is the foundation color space for all other color spaces and is ideal for device-independent color representation. CIELAB (LAB) is perfect for perceptual color analysis, color difference calculations (Delta E), and quality control applications. Use XYZ to LAB conversion when you need perceptually uniform color measurements, and LAB to XYZ when converting measured colors back to device coordinates for display or printing.
                </p>
              </div>
              
              <div className="border-l-4 border-rose-500 pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Do these tools save my data?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  No, our tools run entirely on the client side and do not send your color data or uploaded images to servers. All your operations are performed locally in the browser, ensuring your data privacy and security.
                </p>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Start Using Our Professional Color Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose any of the tools above to begin your color exploration journey, or provide us with feedback to help improve and expand our toolkit.
            </p>
            <a 
              href="mailto:mozhenhuamo@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Contact Us With Feedback
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 