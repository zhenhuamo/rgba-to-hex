'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HslToCmyk() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* 转换工具区域 - 首屏显示 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/rgb.svg" alt="HSL to CMYK Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                HSL to CMYK Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Convert HSL colors to CMYK format for professional printing with intuitive color selection and real-time preview
            </p>
          </div>

          {/* 嵌入独立转换器 */}
          <div className="w-full mb-6">
            <iframe 
              src="/tools/hsl-to-cmyk-converter?embed=true&h=210&s=80&l=50" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="700"
              title="HSL to CMYK Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/hsl-to-cmyk-converter" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 shadow-md transition-all hover:shadow-lg"
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
              You can easily add this HSL to CMYK converter to your own website by copying the code below:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hsl-to-cmyk-converter?embed=true&h=210&s=80&l=50&showShare=true" 
  width="100%" 
  height="700" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HSL to CMYK Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hsl-to-cmyk-converter?embed=true&h=210&s=80&l=50&showShare=true" width="100%" height="700" style="border:none;border-radius:12px;overflow:hidden;" title="HSL to CMYK Color Converter"></iframe>`;
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
                <li>• Intuitive HSL color selection and conversion</li>
                <li>• Real-time HSL to CMYK conversion preview</li>
                <li>• Print-ready CMYK color values output</li>
                <li>• Total ink coverage warnings for print safety</li>
                <li>• Professional HSL to CMYK conversion algorithms</li>
                <li>• Copy HSL and CMYK codes with one click</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Perfect For:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Print Design Projects with HSL workflows</li>
                <li>• Color Theme Development and HSL to CMYK conversion</li>
                <li>• Professional HSL color to CMYK matching</li>
                <li>• Print Production Workflows and color preparation</li>
                <li>• Brand color conversion from HSL to CMYK</li>
                <li>• HSV to CMYK conversion via HSL bridge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 详细内容部分 */}
        <div className="max-w-2xl mx-auto">
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional HSL to CMYK converter tool with intuitive color selection and advanced print preparation features. Whether you need to convert HSL colors for professional printing, create color themes for print media, or develop brand color systems, our HSL to CMYK converter ensures precise color conversion while maintaining original color fidelity. Perfect for designers, brand managers, and print professionals who need accurate HSL color to CMYK conversion.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our HSL to CMYK conversion tool combines the intuitive nature of HSL color selection with professional CMYK output for print production. With real-time color preview, ink coverage warnings, and industry-standard HSL to CMYK conversion algorithms, our tool delivers precise color space transformation with professional-grade accuracy for all your print design needs. Also supports HSV to CMYK conversion workflows for comprehensive color management.
            </p>
          </div>

          {/* Color Model Comparison Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">HSL vs CMYK: Understanding Color Models for Conversion</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">HSL Color Model - Perfect for Digital Design</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Hue (H):</strong> Color type (0-360°) - intuitive color wheel selection</li>
                  <li>• <strong>Saturation (S):</strong> Color intensity (0-100%) - controls vibrancy</li>
                  <li>• <strong>Lightness (L):</strong> Color brightness (0-100%) - brightness control</li>
                  <li>• Intuitive HSL color selection interface</li>
                  <li>• Human-friendly color adjustments for designers</li>
                  <li>• Perfect for creative workflows and HSL to CMYK conversion</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">CMYK Color Model - Professional Print Standard</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Cyan (C):</strong> Blue-green ink (0-100%) - process color</li>
                  <li>• <strong>Magenta (M):</strong> Red-purple ink (0-100%) - process color</li>
                  <li>• <strong>Yellow (Y):</strong> Yellow ink (0-100%) - process color</li>
                  <li>• <strong>Key/Black (K):</strong> Black ink (0-100%) - key plate</li>
                  <li>• Subtractive color model for print production</li>
                  <li>• Professional printing standard worldwide</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Process Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">HSL to CMYK Conversion: Technical Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Two-Step Conversion Process</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Since HSL and CMYK are fundamentally different color models, the conversion requires an intermediate step through RGB color space:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm font-medium text-blue-800 dark:text-blue-200">
                    <span>HSL (Intuitive)</span>
                    <span>→</span>
                    <span>RGB (Digital)</span>
                    <span>→</span>
                    <span>CMYK (Print)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Step 1: HSL to RGB Conversion</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`// HSL to RGB Conversion Formula
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  
  let r, g, b;
  
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Step 2: RGB to CMYK Conversion</h3>
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`// RGB to CMYK Conversion Formula
function rgbToCmyk(r, g, b) {
  // Normalize RGB values to 0-1 range
  r /= 255;
  g /= 255;
  b /= 255;
  
  // Calculate Key (Black) component
  const k = 1 - Math.max(r, g, b);
  
  // Handle pure black case
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  
  // Calculate CMY values
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);
  
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

          {/* Practical Applications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Practical Applications for HSL to CMYK Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Design Workflow Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Creative Process</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Start with intuitive HSL color selection</li>
                      <li>Develop color themes and palettes</li>
                      <li>Create harmonious color relationships</li>
                      <li>Test color variations easily</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Print Production</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Convert to CMYK for accurate printing</li>
                      <li>Check total ink coverage limits</li>
                      <li>Prepare files for commercial printing</li>
                      <li>Ensure color consistency across media</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Industry Use Cases</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Brand Development</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Brand color system creation</li>
                      <li>Corporate identity guidelines</li>
                      <li>Consistent brand color reproduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Marketing Materials</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Brochure and flyer design</li>
                      <li>Business card production</li>
                      <li>Large format printing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Product Packaging</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Package design workflows</li>
                      <li>Label and sticker printing</li>
                      <li>Product photography color matching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Implementation in Design Software</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Adobe Creative Suite Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Adobe Photoshop</h4>
                    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300">
                      <li>Use HSL adjustment layers for color selection</li>
                      <li>Copy HSL values from our converter</li>
                      <li>Apply to Color Balance or Hue/Saturation layers</li>
                      <li>Convert document to CMYK mode for print</li>
                      <li>Use our CMYK values for spot color creation</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3">Adobe Illustrator</h4>
                    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300">
                      <li>Create custom color swatches</li>
                      <li>Input HSL values in Color panel</li>
                      <li>Switch document to CMYK color mode</li>
                      <li>Apply converted CMYK values</li>
                      <li>Save as print-ready files</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Web to Print Workflow</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bridge the gap between digital design and physical printing:
                </p>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Color Selection:</strong> Use HSL for intuitive color picking in web design tools</li>
                  <li><strong>Conversion:</strong> Apply our HSL to CMYK converter for print-accurate values</li>
                  <li><strong>Testing:</strong> Create digital proofs with converted CMYK values</li>
                  <li><strong>Production:</strong> Send CMYK specifications to print vendors</li>
                  <li><strong>Quality Control:</strong> Compare printed results with digital previews</li>
                </ol>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">HSL to CMYK Conversion FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Why use HSL to CMYK converter instead of direct RGB to CMYK conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HSL color to CMYK conversion provides a more intuitive way to select and adjust colors compared to RGB. With HSL to CMYK converter, you can easily modify hue (color type), saturation (color intensity), and lightness (brightness) independently. This makes our HSL to CMYK conversion tool ideal for creating color themes, adjusting brand colors, and developing harmonious color palettes before converting to CMYK for print production.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is HSL to CMYK conversion for professional printing workflows?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our HSL to CMYK converter uses industry-standard algorithms that first convert HSL color to RGB, then RGB to CMYK. This two-step HSL to CMYK conversion process ensures mathematical accuracy while maintaining color relationships. However, remember that color perception can vary between monitors and printers, so always create physical color proofs for critical HSL color to CMYK matching in professional print production.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What should I consider when using HSL colors for print design and CMYK conversion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When selecting HSL colors for CMYK conversion, consider the final CMYK values and total ink coverage. Colors with high saturation (S) and extreme lightness (L) values may result in challenging CMYK combinations. Our HSL to CMYK converter provides ink coverage warnings when total CMYK values exceed 300%, helping you make print-friendly color choices from the start of your HSL to CMYK conversion workflow.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use this HSL to CMYK converter for Pantone color matching and brand colors?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While our HSL to CMYK converter provides accurate process color (CMYK) values, Pantone spot colors use a different color system. You can use our HSL color to CMYK conversion tool to get close CMYK approximations of Pantone colors, but for exact Pantone matching, you should use official Pantone color books and conversion guides. Our HSL to CMYK conversion tool is perfect for process color printing and general color conversion workflows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Does your tool support HSV to CMYK conversion as well?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! While this page focuses on HSL to CMYK conversion, our color conversion suite also supports HSV to CMYK conversion workflows. You can easily convert between HSL and HSV color spaces using our HSV-HSL converter, then use this HSL to CMYK converter for final print preparation. This provides complete flexibility for both HSL to CMYK and HSV to CMYK conversion needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 