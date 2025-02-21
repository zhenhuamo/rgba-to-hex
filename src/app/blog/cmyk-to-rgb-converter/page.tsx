'use client';

import Navigation from '@/components/Navigation';
import { copyToClipboard } from '@/utils/clipboard';
import { useState } from 'react';


export default function CmykToRgbBlog() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        
        <article className="max-w-4xl mx-auto prose dark:prose-invert prose-lg">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-4 text-white">
                CMYK to RGB Converter: Complete Color Code Guide
              </h1>
              <div className="flex items-center gap-4 text-gray-200">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                  February 20, 2024
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                  15 min read
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>

          {/* Introduction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Looking for a reliable CMYK to RGB converter? This comprehensive guide covers everything from basic color conversion to professional tools like CMYK to RGB Photoshop techniques and CMYK to RGB Illustrator workflows.
            </p>
          </div>

          {/* After Introduction, add new Tool Introduction section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Free CMYK to RGB Converter Tool
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Our online CMYK to RGB converter tool offers several advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Instant conversion with real-time preview</li>
                <li>Supports both single color and batch conversion</li>
                <li>Handles CMYK image conversion to RGB format</li>
                <li>Color code output in multiple formats</li>
                <li>No software installation required</li>
                <li>100% free and easy to use</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="/tools/cmyk-to-rgb" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Our CMYK to RGB Converter Now
                </a>
              </div>
            </div>
          </section>

          {/* Add Image Conversion Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              CMYK to RGB Image Converter Guide
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                Converting CMYK images to RGB is essential for web display. Here&apos;s how different tools handle it:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Adobe Photoshop Method</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Open your CMYK image in Photoshop</li>
                    <li>Go to Image {'>>'} Mode {'>>'} RGB Color</li>
                    <li>Choose appropriate color profile</li>
                    <li>Save for web usage</li>
                  </ol>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Adobe Illustrator Workflow</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Open CMYK artwork in Illustrator</li>
                    <li>Select File {'>>'} Document Color Mode</li>
                    <li>Choose RGB Color</li>
                    <li>Export for digital use</li>
                  </ol>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-4">InDesign Export Process</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Set up RGB color profile in InDesign</li>
                  <li>Export as Interactive PDF or Web Format</li>
                  <li>Choose RGB output in export settings</li>
                  <li>Verify color accuracy after conversion</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Add Color Code Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              CMYK to RGB Color Code Conversion
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                Understanding color codes is crucial for accurate conversion:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Common CMYK Values</h3>
                  <ul className="space-y-2">
                    <li>Pure Cyan: C:100 M:0 Y:0 K:0</li>
                    <li>Pure Magenta: C:0 M:100 Y:0 K:0</li>
                    <li>Pure Yellow: C:0 M:0 Y:100 K:0</li>
                    <li>Rich Black: C:75 M:68 Y:67 K:90</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Equivalent RGB Values</h3>
                  <ul className="space-y-2">
                    <li>Cyan: R:0 G:255 B:255</li>
                    <li>Magenta: R:255 G:0 B:255</li>
                    <li>Yellow: R:255 G:255 B:0</li>
                    <li>Rich Black: R:6 G:7 B:7</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* Basics Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Understanding CMYK to RGB Image Converter Basics
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Whether you&apos;re using a CMYK to RGB converter tool or implementing the conversion in Python, Java, or other programming languages, understanding the fundamentals is crucial. The CMYK to RGB color code transformation is essential for both digital and print media.
              </p>
            </section>

            {/* Professional Software Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Professional Software Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">CMYK to RGB Photoshop</h3>
                  <p>Adobe Photoshop offers professional-grade CMYK to RGB conversion tools, perfect for designers and photographers who need precise color management.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">CMYK to RGB Illustrator</h3>
                  <p>Adobe Illustrator provides specialized tools for converting CMYK artwork to RGB, essential for web and digital display purposes.</p>
                </div>
              </div>
            </section>

            {/* Color Theory Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Color Theory and Conversion Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">CMYK Color Model</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CMYK is a subtractive color model used in printing. Each color component represents:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>C (Cyan): Ranges from 0-100%</li>
                    <li>M (Magenta): Ranges from 0-100%</li>
                    <li>Y (Yellow): Ranges from 0-100%</li>
                    <li>K (Key/Black): Ranges from 0-100%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">RGB Color Model</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    RGB is an additive color model used in digital displays. Components include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>R (Red): Ranges from 0-255</li>
                    <li>G (Green): Ranges from 0-255</li>
                    <li>B (Blue): Ranges from 0-255</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Practical Examples Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Practical Examples and Use Cases
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Print to Web Conversion</h3>
                  <p className="mb-4">Common conversion scenarios:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                      <p className="font-semibold">Print Logo (CMYK)</p>
                      <p>C: 75%, M: 68%, Y: 67%, K: 90%</p>
                      <p className="mt-2">Converts to:</p>
                      <p>RGB: 6, 7, 7</p>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                      <p className="font-semibold">Brand Color (CMYK)</p>
                      <p>C: 15%, M: 100%, Y: 90%, K: 10%</p>
                      <p className="mt-2">Converts to:</p>
                      <p>RGB: 195, 0, 15</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Color Management Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Color Management and Calibration
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Color Profiles</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Understanding color profiles is crucial for accurate conversion:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>sRGB: Standard RGB color space for web</li>
                    <li>Adobe RGB: Wider color gamut for professional work</li>
                    <li>SWOP: Standard Web Offset Printing</li>
                    <li>Fogra39: European printing standard</li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Calibration Tools</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold">Monitor Calibration</h4>
                      <ul className="mt-2 text-sm space-y-1">
                        <li>X-Rite i1Display Pro</li>
                        <li>Datacolor SpyderX</li>
                        <li>CalMAN RGB</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold">Printer Profiling</h4>
                      <ul className="mt-2 text-sm space-y-1">
                        <li>i1Pro 3 Plus</li>
                        <li>X-Rite i1iO</li>
                        <li>ColorMunki</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold">Software Tools</h4>
                      <ul className="mt-2 text-sm space-y-1">
                        <li>DisplayCAL</li>
                        <li>i1Profiler</li>
                        <li>Adobe Color</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Common Issues and Solutions
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">Common Problems</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">⚠️</span>
                      <div>
                        <p className="font-semibold">Color Shifting</p>
                        <p className="text-sm">Solution: Ensure proper color profile assignments and consistent rendering intents</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">⚠️</span>
                      <div>
                        <p className="font-semibold">Gamut Mismatch</p>
                        <p className="text-sm">Solution: Use gamut warning tools and adjust colors within the target color space</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Programming Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Programming Implementation
              </h2>
              
              {/* Python Code */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">CMYK to RGB Python Implementation</h3>
                <div className="relative bg-gray-900 rounded-lg p-4">
                  <pre className="text-gray-300 overflow-x-auto">
                    <code>{`# CMYK to RGB Python converter
def cmyk_to_rgb(c, m, y, k):
    r = 255 * (1 - c) * (1 - k)
    g = 255 * (1 - m) * (1 - k)
    b = 255 * (1 - y) * (1 - k)
    return (int(r), int(g), int(b))`}</code>
                  </pre>
                  <button 
                    onClick={() => handleCopy(`def cmyk_to_rgb(c, m, y, k):\n    r = 255 * (1 - c) * (1 - k)\n    g = 255 * (1 - m) * (1 - k)\n    b = 255 * (1 - y) * (1 - k)\n    return (int(r), int(g), int(b))`)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Java Code */}
              <div>
                <h3 className="text-xl font-semibold mb-4">CMYK to RGB Java Implementation</h3>
                <div className="relative bg-gray-900 rounded-lg p-4">
                  <pre className="text-gray-300 overflow-x-auto">
                    <code>{`// CMYK to RGB Java converter
public static RGB cmykToRgb(double c, double m, double y, double k) {
    int r = (int)(255 * (1 - c) * (1 - k));
    int g = (int)(255 * (1 - m) * (1 - k));
    int b = (int)(255 * (1 - y) * (1 - k));
    return new RGB(r, g, b);
}`}</code>
                  </pre>
                  <button 
                    onClick={() => handleCopy(`public static RGB cmykToRgb(double c, double m, double y, double k) {\n    int r = (int)(255 * (1 - c) * (1 - k));\n    int g = (int)(255 * (1 - m) * (1 - k));\n    int b = (int)(255 * (1 - y) * (1 - k));\n    return new RGB(r, g, b);\n}`)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </section>

            {/* Pro Tips Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Pro Tips for Different Tools</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Adobe Software Tips</h3>
                  <ul className="space-y-2">
                    <li>For Photoshop: Use Edit {'>>'} Convert to Profile</li>
                    <li>For Illustrator: Apply color profiles first</li>
                    <li>For InDesign: Check output presets</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Development Tips</h3>
                  <ul className="space-y-2">
                    <li>Use color management libraries</li>
                    <li>Implement proper error handling</li>
                    <li>Consider color profiles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Conclusion
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                CMYK to RGB conversion is a crucial workflow in digital design and printing industries. By understanding conversion principles,
                mastering techniques, and utilizing professional tools, you can ensure accurate color translation and presentation across different media.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
} 