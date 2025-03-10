'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RgbToCmyk() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* 转换工具区域 - 首屏显示 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/rgb.svg" alt="RGB to CMYK Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                RGB to CMYK Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Transform RGB colors to CMYK format with real-time preview and precise control
            </p>
          </div>

          {/* 嵌入独立转换器 */}
          <div className="w-full mb-6">
            <iframe 
              src="/tools/rgb-to-cmyk-converter?embed=true&r=52&g=120&b=205" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="650"
              title="RGB to CMYK Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/rgb-to-cmyk-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </Link>
            </div>
          </div>

          {/* 嵌入指南部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">Embed This Tool on Your Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can easily add this RGB to CMYK converter to your own website by copying the code below:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/rgb-to-cmyk-converter?embed=true&r=52&g=120&b=205&showShare=true" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="RGB to CMYK Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/rgb-to-cmyk-converter?embed=true&r=52&g=120&b=205&showShare=true" width="100%" height="650" style="border:none;border-radius:12px;overflow:hidden;" title="RGB to CMYK Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
          </div>

          {/* 快速功能说明 */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Key Features:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Real-time color preview</li>
                <li>• Professional-grade accuracy</li>
                <li>• Print-ready CMYK values</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Perfect For:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Print Design</li>
                <li>• Digital to Print</li>
                <li>• Color Proofing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 详细内容部分 */}
        <div className="max-w-2xl mx-auto">
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional RGB to CMYK converter tool with advanced color space transformation features. Whether you need to convert RGB colors for professional printing, process colors from Photoshop, Illustrator, or InDesign, our tool ensures precise color conversion while maintaining original color fidelity. Perfect for designers, print professionals, and digital artists who need accurate RGB to CMYK conversion.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our RGB to CMYK converter provides real-time color preview, supports industry-standard color profiles, and ensures accurate conversion for print production. From preparing print designs to color proofing and cross-media projects, our tool delivers precise color space conversion with professional-grade accuracy.
            </p>
          </div>

          {/* Software Integration Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Software Compatibility for RGB to CMYK Conversion</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Adobe Creative Suite</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• RGB to CMYK in Photoshop</li>
                  <li>• RGB to CMYK in Illustrator</li>
                  <li>• RGB to CMYK in InDesign</li>
                  <li>• Color profile compatibility</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Design Applications</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Procreate color conversion</li>
                  <li>• Affinity Designer support</li>
                  <li>• Sketch color processing</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Document Processing</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• PDF RGB to CMYK conversion</li>
                  <li>• Image format conversion</li>
                  <li>• Batch processing support</li>
                  <li>• Color profile management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Color Conversion Theory */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">RGB to CMYK Conversion: Technical Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Conversion Formula</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The RGB to CMYK conversion process involves several mathematical steps to ensure accurate color transformation:
                </p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`// Step 1: Normalize RGB values (0-255) to range [0,1]
R' = R/255, G' = G/255, B' = B/255

// Step 2: Calculate Key (Black) component
K = 1 - max(R', G', B')

// Step 3: Calculate CMY values
If K = 1 (black):
  C = M = Y = 0
Else:
  C = (1 - R' - K) / (1 - K)
  M = (1 - G' - K) / (1 - K)
  Y = (1 - B' - K) / (1 - K)

// Step 4: Convert to percentages
C = C × 100%
M = M × 100%
Y = Y × 100%
K = K × 100%`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Color Space Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">RGB Color Space</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Additive color model (light-based)</li>
                      <li>Primary colors: Red, Green, Blue</li>
                      <li>Value range: 0-255 per channel</li>
                      <li>Used in digital displays</li>
                      <li>Wider color gamut</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">CMYK Color Space</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Subtractive color model (ink-based)</li>
                      <li>Components: Cyan, Magenta, Yellow, Key</li>
                      <li>Value range: 0-100% per channel</li>
                      <li>Used in print production</li>
                      <li>Print-optimized gamut</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Advanced RGB to CMYK Conversion Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Core Features</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Precise RGB to CMYK conversion</li>
                  <li>• Real-time preview capability</li>
                  <li>• Lossless color transformation</li>
                  <li>• Professional print values</li>
                  <li>• Color profile management</li>
                  <li>• Batch processing support</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• HEX color code support</li>
                  <li>• Image color conversion</li>
                  <li>• PDF document processing</li>
                  <li>• Color management system</li>
                  <li>• ICC profile support</li>
                  <li>• Color accuracy verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">RGB to CMYK Implementation Guide</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">JavaScript Implementation</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`function rgbToCmyk(r, g, b) {
  // Normalize RGB values
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  // Calculate Key (Black)
  const k = 1 - Math.max(red, green, blue);
  
  // Handle pure black case
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  // Calculate CMY values
  const c = (1 - red - k) / (1 - k);
  const m = (1 - green - k) / (1 - k);
  const y = (1 - blue - k) / (1 - k);

  // Convert to percentages
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Usage Scenarios */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">RGB to CMYK Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Print Design</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Professional print production</li>
                  <li>• Package design conversion</li>
                  <li>• Magazine publishing</li>
                  <li>• Business card design</li>
                  <li>• Large format printing</li>
                  <li>• Color-accurate proofing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Digital Design</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Web to print conversion</li>
                  <li>• Brand identity design</li>
                  <li>• Marketing material production</li>
                  <li>• Cross-media projects</li>
                  <li>• Digital asset management</li>
                  <li>• Color consistency maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">RGB to CMYK Conversion FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How does RGB to CMYK conversion work in Photoshop?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our RGB to CMYK converter uses the same professional-grade algorithms as Adobe Photoshop. You can obtain accurate CMYK values from our tool and apply them directly in Photoshop, ensuring color consistency across your workflow. The conversion process maintains color fidelity while adapting to print-specific requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Why choose an online RGB to CMYK converter?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Online RGB to CMYK conversion offers immediate results without requiring expensive software installations. Our tool provides professional-grade accuracy, real-time preview capabilities, and supports multiple file formats. It&apos;s perfect for quick conversions while maintaining the high standards required for professional print production.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is the RGB to CMYK conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our RGB to CMYK converter employs industry-standard color management systems and conversion algorithms to ensure maximum color accuracy. We use precise mathematical formulas and professional color profiles to maintain color fidelity throughout the conversion process. The real-time preview feature allows you to verify the results instantly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What file formats support RGB to CMYK conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our tool supports comprehensive format conversion, including:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>PDF documents (RGB to CMYK conversion)</li>
                  <li>Image formats (JPG, PNG, TIFF)</li>
                  <li>Design software color values</li>
                  <li>Web design color codes</li>
                  <li>Vector graphics formats</li>
                  <li>Print-ready file preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 