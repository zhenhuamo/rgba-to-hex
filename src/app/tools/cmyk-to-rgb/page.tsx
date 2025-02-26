'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function CmykToRgb() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* 转换工具区域 - 首屏显示 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/rgb.svg" alt="CMYK to RGB Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                CMYK to RGB Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Transform CMYK colors to RGB format with real-time preview and precise control
            </p>
          </div>

          {/* 嵌入独立转换器 */}
          <div className="w-full mb-6">
            <iframe 
              src="/tools/cmyk-to-rgb-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="650"
              title="CMYK to RGB Color Converter"
              loading="lazy"
            />
          </div>

          {/* 嵌入指南部分 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">Embed This Tool on Your Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can easily add this CMYK to RGB converter to your own website by copying the code below:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/cmyk-to-rgb-converter?embed=true" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="CMYK to RGB Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/cmyk-to-rgb-converter?embed=true" width="100%" height="650" style="border:none;border-radius:12px;overflow:hidden;" title="CMYK to RGB Color Converter"></iframe>`;
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
                <li>• Interactive adjustments</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h2 className="font-medium mb-2">Perfect For:</h2>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Print Design</li>
                <li>• Digital Publishing</li>
                <li>• Color Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 使用指南部分 - 新增 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">How to Use CMYK to RGB Converter</h2>
            
            <div className="space-y-8">
              {/* 基本使用步骤 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Basic Steps</h3>
                <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Input CMYK Values:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Enter Cyan (C) percentage (0-100%)</li>
                      <li>Enter Magenta (M) percentage (0-100%)</li>
                      <li>Enter Yellow (Y) percentage (0-100%)</li>
                      <li>Enter Black (K) percentage (0-100%)</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">View Color Preview:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>See real-time color changes in the preview box</li>
                      <li>Verify the color appearance instantly</li>
                      <li>Compare with your original color</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium">Get RGB Values:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>View the converted RGB values (Red, Green, Blue)</li>
                      <li>Click to copy the complete RGB color code</li>
                      <li>Use individual R, G, B values as needed</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* 高级使用技巧 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Usage Tips</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Precise Color Adjustment</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Use arrow keys for fine-tuning values</li>
                      <li>Type exact percentages for precise control</li>
                      <li>Adjust values in 1% increments for accuracy</li>
                      <li>Monitor real-time preview for exact matching</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Color Management</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Check gamut warnings for out-of-range colors</li>
                      <li>Verify color accuracy across devices</li>
                      <li>Use ICC profiles for professional workflow</li>
                      <li>Save frequently used color combinations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 常见问题解答 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Troubleshooting Tips</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Color Accuracy Issues</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Ensure monitor calibration for accurate preview</li>
                      <li>Use professional display settings</li>
                      <li>Consider ambient lighting conditions</li>
                      <li>Verify source CMYK values are correct</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Common Conversion Challenges</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Handle out-of-gamut colors appropriately</li>
                      <li>Manage color shifts in conversion</li>
                      <li>Address device-specific color variations</li>
                      <li>Maintain color consistency across platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 专业工作流程提示 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Workflow Tips</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Color Quality Assurance</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Document original CMYK values</li>
                      <li>Create color conversion records</li>
                      <li>Maintain color reference sheets</li>
                      <li>Implement color management protocols</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Workflow Integration</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      <li>Incorporate into existing design processes</li>
                      <li>Establish color conversion standards</li>
                      <li>Create workflow documentation</li>
                      <li>Train team members on proper usage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 键盘快捷键 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <span className="font-medium">Value Adjustment:</span>
                    <ul className="mt-2 space-y-1">
                      <li>↑ : Increase value by 1%</li>
                      <li>↓ : Decrease value by 1%</li>
                      <li>Shift + ↑ : Increase by 10%</li>
                      <li>Shift + ↓ : Decrease by 10%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <span className="font-medium">Quick Actions:</span>
                    <ul className="mt-2 space-y-1">
                      <li>Ctrl/Cmd + C : Copy RGB value</li>
                      <li>Tab : Navigate between inputs</li>
                      <li>Enter : Confirm value</li>
                      <li>Esc : Reset current value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 详细内容部分 */}
        <div className="max-w-2xl mx-auto">
          {/* Enhanced Title Section */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional CMYK to RGB converter tool for designers and digital artists. Convert CMYK colors to RGB format instantly with our free online converter. Perfect for Adobe Photoshop, Illustrator, InDesign, and Procreate users who need to transform print-ready CMYK colors to RGB for digital displays.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Whether you need to convert CMYK to RGB in Photoshop, change CMYK to RGB in Illustrator, or transform colors for digital publishing, our tool provides accurate conversion with real-time preview. Ideal for photographers converting RGB photos to CMYK and back, designers working on cross-media projects, and digital artists ensuring color consistency.
            </p>
          </div>

          {/* Target Audience Section - New */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Who Should Use This CMYK to RGB Converter?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Print Designers</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Convert print-ready CMYK designs to RGB for digital previews</li>
                  <li>Transform CMYK artwork to RGB for online portfolios</li>
                  <li>Prepare CMYK files for web publication</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Digital Artists</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Convert CMYK color palettes to RGB for digital artwork</li>
                  <li>Transform colors between Photoshop and Procreate</li>
                  <li>Ensure color accuracy across different platforms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Photographers</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Convert CMYK photos to RGB for web display</li>
                  <li>Transform images between print and digital formats</li>
                  <li>Maintain color consistency in photo editing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Publishing Professionals</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Convert InDesign CMYK layouts to RGB</li>
                  <li>Transform print materials for digital publishing</li>
                  <li>Prepare cross-media content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Software Integration Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Software Integration Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Adobe Photoshop CMYK to RGB Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Learn how to convert CMYK to RGB in Photoshop with these professional steps:
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Go to Image → Mode → RGB Color for basic conversion</li>
                  <li>Use Edit → Convert to Profile for advanced color management</li>
                  <li>Apply our RGB values in the color picker for precise matching</li>
                  <li>Save presets for batch conversion of multiple files</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Adobe Illustrator RGB Workflow</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Master CMYK to RGB conversion in Illustrator with these steps:
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Change document color mode to RGB (File → Document Color Mode)</li>
                  <li>Convert specific colors using Edit → Edit Colors → Convert to RGB</li>
                  <li>Use our converter for accurate color matching</li>
                  <li>Create RGB color swatches for consistent digital design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">InDesign Digital Publishing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Optimize your InDesign workflow for digital publishing:
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Set Transparency Blend Space to RGB</li>
                  <li>Configure RGB export settings for digital output</li>
                  <li>Use our converter to verify color accuracy</li>
                  <li>Create RGB-optimized PDF exports</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Procreate Digital Art</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Perfect your digital artwork with accurate color conversion:
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Use our converter for precise RGB values</li>
                  <li>Create custom RGB palettes in Procreate</li>
                  <li>Maintain color consistency across devices</li>
                  <li>Export artwork in the correct color space</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Use Cases - New */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Common CMYK to RGB Conversion Scenarios</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Print to Digital Conversion</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Convert print-ready brochures to web content</li>
                  <li>Transform magazine layouts for digital publishing</li>
                  <li>Prepare packaging designs for e-commerce display</li>
                  <li>Adapt print advertisements for social media</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Design</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Ensure color consistency between Adobe apps</li>
                  <li>Match colors across different design software</li>
                  <li>Maintain brand colors in digital formats</li>
                  <li>Synchronize colors between desktop and mobile apps</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Formula */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional CMYK to RGB Formula</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Understanding the mathematical formula for converting CMYK to RGB colors is crucial for professional color management:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`R = 255 × (1 - C) × (1 - K)
G = 255 × (1 - M) × (1 - K)
B = 255 × (1 - Y) × (1 - K)

Where:
C, M, Y, K are in range [0, 1]
R, G, B are in range [0, 255]

Example:
For C=75%, M=68%, Y=67%, K=90%:
C=0.75, M=0.68, Y=0.67, K=0.90

R = 255 × (1 - 0.75) × (1 - 0.90) = 6
G = 255 × (1 - 0.68) × (1 - 0.90) = 8
B = 255 × (1 - 0.67) × (1 - 0.90) = 8`}</code>
              </pre>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Professional Color Management Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Color Management</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• ICC profile support for accurate conversion</li>
                  <li>• Gamut warning for out-of-range colors</li>
                  <li>• Color accuracy verification tools</li>
                  <li>• Batch conversion capabilities</li>
                  <li>• Professional color space handling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export and Integration</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Copy RGB values for immediate use</li>
                  <li>• Export to multiple color formats</li>
                  <li>• Save and manage color palettes</li>
                  <li>• Generate color code snippets</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 