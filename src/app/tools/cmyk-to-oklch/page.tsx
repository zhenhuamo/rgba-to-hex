'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function CmykToOklch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Enhanced SEO */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image src="/rgb.svg" alt="CMYK to OKLCH Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                CMYK to OKLCH Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online CMYK to OKLCH color converter tool for modern digital design. Convert CMYK (Cyan, Magenta, Yellow, Key/Black) print colors to OKLCH (Oklab Lightness Chroma Hue) format with precision for advanced color manipulation and digital workflows.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform traditional CMYK print colors to modern OKLCH color space using our free CMYK to OKLCH converter, enabling perceptually uniform color adjustments, advanced color manipulation, and seamless integration with modern CSS Color Level 4 specifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">Print to Digital</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">Perceptual Uniformity</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Conversion</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive CMYK to OKLCH Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced CMYK to OKLCH color conversion tool with real-time preview, interactive sliders, and instant CSS code generation for modern digital design workflows.
              </p>
              <iframe 
                src="/tools/cmyk-to-oklch-converter?embed=true" 
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="CMYK to OKLCH Color Converter Tool - Convert CMYK colors to OKLCH format with real-time preview"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced CTA */}
            <div className="text-center">
              <a
                href="/tools/cmyk-to-oklch-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full CMYK to OKLCH Converter Tool
              </a>
            </div>
          </div>

          {/* Understanding CMYK to OKLCH Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding CMYK to OKLCH Color Conversion: Complete Professional Guide
            </h2>
            
            {/* What is CMYK Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Understanding CMYK Color Space: The Scientific Foundation of Traditional Printing
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                The CMYK (Cyan, Magenta, Yellow, Key/Black) color model is the cornerstone of modern printing industry, with its history tracing back to the development of color printing technology in the 19th century. This four-color printing system is based on subtractive color mixing principles, reproducing various colors by overlaying different densities of semi-transparent inks on white substrates. The CMYK model&apos;s design directly corresponds to the physical structure and ink characteristics of printing presses, making it the crucial bridge from digital design to physical printed materials.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">CMYK Subtractive Color Mixing Principles Explained</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Subtractive color mixing is completely opposite to the additive color mixing used in displays. In subtractive systems, each ink absorbs specific wavelengths of light and reflects the remaining wavelengths:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Primary Color Inks</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• <strong>Cyan</strong>: Absorbs red light (700nm), reflects blue-green light</li>
                      <li>• <strong>Magenta</strong>: Absorbs green light (546nm), reflects red-blue light</li>
                      <li>• <strong>Yellow</strong>: Absorbs blue light (436nm), reflects red-green light</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Role of Black Ink</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Compensates for imperfections in three-color inks</li>
                      <li>• Provides true deep black and high contrast</li>
                      <li>• Reduces total ink coverage, lowering costs</li>
                      <li>• Enhances text and detail clarity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">CMYK Technical Evolution in Modern Printing</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Traditional Offset Printing</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Halftone screening technology</li>
                    <li>• Color management systems</li>
                    <li>• Automatic registration control</li>
                    <li>• Automatic ink adjustment</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Digital Printing</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Inkjet technology advances</li>
                    <li>• Laser imaging technology</li>
                    <li>• Variable data printing</li>
                    <li>• Real-time color correction</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Specialty Printing</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Spot color extensions</li>
                    <li>• Metallic ink applications</li>
                    <li>• UV curing technology</li>
                    <li>• Eco-friendly ink development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What is OKLCH Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Understanding OKLCH Color Space: The Color Revolution of the Digital Age
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH (Oklab Lightness Chroma Hue) represents the latest breakthrough in color science, a revolutionary color space developed by Swedish researcher Björn Ottosson in 2020. Based on the latest research in human visual systems, it was specifically designed to address the fundamental deficiencies in perceptual uniformity of traditional color spaces (such as HSL, HSV). OKLCH not only provides more accurate color representation but also brings unprecedented color manipulation capabilities to modern digital design tools and CSS specifications.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Scientific Foundation of OKLCH</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  OKLCH is built on the foundation of the Oklab color space, which itself is a major improvement over CIELAB:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Perceptual Uniformity Advantages</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Based on modern visual perception research</li>
                      <li>• Numerical changes proportional to visual perception</li>
                      <li>• Eliminates &quot;dead zones&quot; in traditional color spaces</li>
                      <li>• Supports more intuitive color adjustments</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Technical Innovation Features</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Polar coordinate representation aligns with design habits</li>
                      <li>• Supports wide color gamuts (P3, Rec2020)</li>
                      <li>• Perfect compatibility with modern display technology</li>
                      <li>• Native CSS Color Level 4 support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">OKLCH Three-Dimensional Color Model Explained</h4>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl mb-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-b from-white to-black rounded-full mx-auto mb-4"></div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Lightness</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Range:</strong> 0.0 - 1.0<br/>
                      <strong>Feature:</strong> Perceptually uniform brightness changes<br/>
                      <strong>Application:</strong> Precise color brightness control
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-300 to-red-500 rounded-full mx-auto mb-4"></div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Chroma</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Range:</strong> 0.0 - 0.4+<br/>
                      <strong>Feature:</strong> Represents color purity and vividness<br/>
                      <strong>Application:</strong> Control color saturation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 rounded-full mx-auto mb-4"></div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Hue</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Range:</strong> 0° - 360°<br/>
                      <strong>Feature:</strong> Angular position on the color wheel<br/>
                      <strong>Application:</strong> Select basic color types
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                CMYK to OKLCH Conversion Principles: Technical Bridge from Print to Digital
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                The CMYK to OKLCH conversion process represents a technological leap from traditional print color models to modern perceptually uniform color spaces. This conversion is not merely the application of mathematical formulas, but an embodiment of deep understanding of color science. The conversion process must consider the physical properties of printing inks, paper reflection characteristics, and human visual system perception features to ensure that the converted OKLCH values accurately reflect the visual effects of the original CMYK colors.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Detailed Conversion Steps</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">CMYK Preprocessing</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Validate ink coverage range<br/>Apply ICC profiles<br/>Consider printing conditions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">CMYK → RGB</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subtractive to additive conversion<br/>Gamma correction<br/>Gamut mapping</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">RGB → Oklab</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Linearization processing<br/>XYZ color space<br/>Oklab transformation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Oklab → OKLCH</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Polar coordinate conversion<br/>Hue angle calculation<br/>Chroma value calculation</p>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Key Conversion Formulas</h4>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-2xl mb-8">
                <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">CMYK to RGB Basic Conversion</h5>
                <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>{`// 1. Convert CMYK percentages to decimals`}</p>
                  <p>C&apos; = C/100, M&apos; = M/100, Y&apos; = Y/100, K&apos; = K/100</p>
                  <p></p>
                  <p>{`// 2. Basic RGB calculation`}</p>
                  <p>R = 255 × (1 - C&apos;) × (1 - K&apos;)</p>
                  <p>G = 255 × (1 - M&apos;) × (1 - K&apos;)</p>
                  <p>B = 255 × (1 - Y&apos;) × (1 - K&apos;)</p>
                  <p></p>
                  <p>{`// 3. Oklab to OKLCH polar coordinate conversion`}</p>
                  <p>L = L (unchanged)</p>
                  <p>C = √(A² + B²)</p>
                  <p>H = atan2(B, A) × 180/π</p>
                </div>
              </div>
            </div>

            {/* Digital Workflow Applications */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Digital Workflow Applications: New Paradigms in Modern Design
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Web Development Applications</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>CSS Color Level 4</strong>: Native oklch() function support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Responsive Design</strong>: Perceptually uniform color changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Theme Systems</strong>: More intuitive color adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Accessibility Design</strong>: Precise contrast control</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Brand Modernization</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Cross-Media Consistency</strong>: Seamless print-to-digital conversion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Design System Upgrades</strong>: Modern color standard integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Future Compatibility</strong>: Support for emerging display technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Automation Tools</strong>: Batch color conversion and management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Professional Best Practices: Key Strategies for High-Quality Conversion
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">1. Color Management System (CMS) Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Establish complete color management workflows to ensure conversion accuracy and consistency:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Use standardized ICC profiles (ISO 12647-2)</li>
                    <li>• Regular calibration of displays and printing devices</li>
                    <li>• Establish standard viewing conditions (D50, 2° standard observer)</li>
                    <li>• Record and maintain color conversion metadata</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">2. Perceptual Uniformity Validation</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Leverage OKLCH&apos;s perceptual uniformity advantages for high-quality color adjustments:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Use Delta E values to evaluate color differences (Delta E &lt; 2 is excellent)</li>
                    <li>• Verify visual consistency of lightness adjustments</li>
                    <li>• Test smoothness of color gradients</li>
                    <li>• Ensure naturalness of hue adjustments</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">3. Modern CSS Implementation</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Fully utilize CSS Color Level 4 new features:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Use oklch() function to replace traditional HSL</li>
                    <li>• Implement @supports progressive enhancement</li>
                    <li>• Establish OKLCH-based design token systems</li>
                    <li>• Optimize color animations and transition effects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Related Professional Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="/tools/oklch-to-cmyk" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    OKLCH to CMYK Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert modern OKLCH colors back to CMYK format for print production workflows.
                  </p>
                </a>

                <a href="/tools/cmyk-to-hex" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    CMYK to HEX Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transform CMYK print colors to hexadecimal format for web development.
                  </p>
                </a>

                <a href="/tools/cmyk-to-rgb" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    CMYK to RGB Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert CMYK values to RGB format for digital display applications.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
