'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function OklchToCmyk() {
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
              <Image src="/rgb.svg" alt="OKLCH to CMYK Color Converter Tool" width={56} height={56} priority />
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                OKLCH to CMYK Color Converter
              </h1>
            </div>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Professional online OKLCH to CMYK color converter tool for print design and publishing. Convert OKLCH (Oklab Lightness Chroma Hue) color values to CMYK (Cyan, Magenta, Yellow, Key/Black) format with precision for high-quality print production workflows.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Transform modern OKLCH color codes to print-ready CMYK color space using our free OKLCH to CMYK converter, ensuring accurate color reproduction for professional printing, offset printing, and commercial design projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">CSS Color Level 4</span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">Print Production</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">CMYK Conversion</span>
              <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full font-medium">Real-time Preview</span>
              <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full font-medium">Professional Grade</span>
            </div>
          </div>

          {/* Interactive Tool Section */}
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Interactive OKLCH to CMYK Color Converter Tool
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience our advanced OKLCH to CMYK color conversion tool with real-time preview, interactive sliders, and instant CMYK values for professional print design workflows.
              </p>
              <iframe
                src="/tools/oklch-to-cmyk-converter?embed=true"
                className="w-full border-none rounded-2xl shadow-xl"
                height="700"
                title="OKLCH to CMYK Color Converter Tool - Convert OKLCH colors to CMYK format with real-time preview"
                loading="lazy"
              />
            </div>

            {/* Enhanced CTA */}
            <div className="text-center">
              <Link
                href="/tools/oklch-to-cmyk-converter"
                className="inline-flex items-center gap-3 px-10 py-5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 shadow-xl transition-all hover:shadow-2xl transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full OKLCH to CMYK Converter Tool
              </Link>
            </div>
          </div>

          {/* Understanding OKLCH to CMYK Conversion */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Understanding OKLCH to CMYK Color Conversion: Complete Professional Guide
            </h2>

            {/* What is OKLCH Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Understanding OKLCH Color Space: A Modern Color Science Breakthrough
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH (Oklab Lightness Chroma Hue) is a polar coordinate representation of the Oklab color space, representing a major breakthrough in modern color science. Developed by Björn Ottosson in 2020, it was specifically designed to address the perceptual uniformity deficiencies of traditional color spaces. OKLCH uses three dimensions to describe colors: Lightness, Chroma, and Hue, providing a representation method that better aligns with human visual perception characteristics.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Color Space Technical Characteristics</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Lightness (L)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Range: 0.0-1.0<br/>Represents the brightness of the color, 0 is pure black, 1 is pure white</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Chroma (C)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Range: 0.0-0.4<br/>Represents color saturation, 0 is gray, higher values are more vivid</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Hue (H)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Range: 0°-360°<br/>Represents the position on the color wheel, like red, green, blue, etc.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">OKLCH Advantages Over Traditional Color Spaces</h4>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Perceptual Uniformity</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Lightness adjustments maintain consistent visual effects across all hues</li>
                    <li>• Color gradients are smoother and more natural</li>
                    <li>• Numerical changes are proportional to visual perception</li>
                    <li>• Eliminates the &quot;lightness trap&quot; problem in HSL</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Technical Advantages</h5>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Supports wider color gamuts (P3, Rec2020)</li>
                    <li>• Mathematical operations produce visually expected results</li>
                    <li>• Perfect compatibility with modern display technologies</li>
                    <li>• Native CSS Color Level 4 standard support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What is CMYK Color Space */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Understanding CMYK Color Space: The Foundation of Print Industry
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                CMYK (Cyan, Magenta, Yellow, Key/Black) is the standard color model for the printing industry, based on subtractive color mixing principles. Unlike displays that use additive color mixing (RGB), CMYK produces various colors by overlaying different densities of semi-transparent inks on white paper. This model directly corresponds to the four basic inks of printing presses: Cyan, Magenta, Yellow, and Key/Black.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">CMYK Four-Color Printing Principles</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-3"></div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Cyan (C)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Absorbs red light, reflects blue-green light</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-3"></div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Magenta (M)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Absorbs green light, reflects red-blue light</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-3"></div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Yellow (Y)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Absorbs blue light, reflects red-green light</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-3"></div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Key/Black (K)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Enhances contrast and detail</p>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Why is Black Ink (K) Necessary?</h4>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Theory vs Reality</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Theoretically, Cyan + Magenta + Yellow should produce black, but in actual printing:
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Inks are not perfect, mixing results in muddy brown-gray</li>
                      <li>• Three-color overlay is expensive and slow to dry</li>
                      <li>• Paper may warp due to excessive ink</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">Black Ink Advantages</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                      <li>• Provides true deep black color</li>
                      <li>• Enhances text and detail clarity</li>
                      <li>• Reduces printing costs</li>
                      <li>• Decreases total ink coverage, improves print quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                OKLCH to CMYK Conversion Principles: Technical Deep Dive
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH to CMYK conversion is a complex color space transformation process involving the conversion from a perceptually uniform modern color space to a print-oriented subtractive model. Due to the different fundamental principles of the two color spaces, the conversion process requires intermediate color spaces (typically RGB) and considers gamut mapping and printing characteristics.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Detailed Conversion Steps</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">OKLCH → Oklab</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Polar to Cartesian conversion<br/>A = C × cos(H°)<br/>B = C × sin(H°)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Oklab → RGB</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Through XYZ color space<br/>Matrix transformations<br/>Gamma correction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">RGB → CMYK</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Subtractive model conversion<br/>Black separation algorithm<br/>Ink optimization</p>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Mathematical Formula Breakdown</h4>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-2xl mb-8">
                <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">RGB to CMYK Conversion Formula</h5>
                <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>{`// 1. Normalize RGB values (0-255 → 0-1)`}</p>
                  <p>R&apos; = R / 255, G&apos; = G / 255, B&apos; = B / 255</p>
                  <p></p>
                  <p>{`// 2. Calculate Black (K) component`}</p>
                  <p>K = 1 - max(R&apos;, G&apos;, B&apos;)</p>
                  <p></p>
                  <p>{`// 3. Calculate CMY components`}</p>
                  <p>C = (1 - R&apos; - K) / (1 - K)</p>
                  <p>M = (1 - G&apos; - K) / (1 - K)</p>
                  <p>Y = (1 - B&apos; - K) / (1 - K)</p>
                  <p></p>
                  <p>{`// 4. Convert to percentages`}</p>
                  <p>C%, M%, Y%, K% = C×100, M×100, Y×100, K×100</p>
                </div>
              </div>
            </div>

            {/* Color Gamut Considerations */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Color Gamut Considerations: OKLCH vs CMYK Challenges and Solutions
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                OKLCH and CMYK have different gamut ranges, which is a key issue that requires special attention during the conversion process. OKLCH is based on modern display technology and supports wider gamuts, while CMYK is limited by the physical properties of printing inks and has a relatively smaller gamut. Understanding these differences is crucial for achieving optimal print results.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">OKLCH Gamut Characteristics</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Supports wide gamuts like P3, Rec2020</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Can represent vivid colors beyond CMYK range</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Theoretically represents all visible colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Particularly excels at high saturation colors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">CMYK Gamut Limitations</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Limited by physical properties of printing inks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cannot reproduce extremely high saturation colors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Smaller gamut in blue-green regions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Total ink coverage limits affect dark color performance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border-l-4 border-yellow-500">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Gamut Mapping Strategies</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When OKLCH colors exceed the CMYK gamut, appropriate gamut mapping algorithms must be employed:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Perceptual Mapping</strong>: Maintains overall color relationships, suitable for photos and natural images</li>
                  <li>• <strong>Relative Colorimetric</strong>: Keeps in-gamut colors unchanged, only adjusts out-of-gamut portions</li>
                  <li>• <strong>Saturation Mapping</strong>: Prioritizes color saturation, suitable for graphic design</li>
                  <li>• <strong>Absolute Colorimetric</strong>: Precisely matches white point, suitable for proofing and color management</li>
                </ul>
              </div>
            </div>

            {/* Print Production Applications */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Print Production Applications: Complete Workflow from Design to Finished Product
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Commercial Printing Applications</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Corporate Brochures</strong>: Precise brand color reproduction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Package Design</strong>: Color consistency in product packaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Poster Advertising</strong>: Large format print color management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Book Publishing</strong>: Cost control for long-run printing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Design Workflow</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Digital Design</strong>: Precise color design using OKLCH</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Color Conversion</strong>: Convert to CMYK for print preview</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Proof Approval</strong>: Digital proofing vs actual printing comparison</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Mass Production</strong>: Ensure color consistency between batches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-16">
              <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">
                Professional Best Practices: Key Points for Optimal Conversion Results
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">1. Gamut Pre-checking</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Before conversion, check if OKLCH colors are within CMYK reproducible range:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Use gamut warning features to identify out-of-range colors</li>
                    <li>• Pre-adjust high saturation colors</li>
                    <li>• Consider using spot colors to supplement CMYK gamut</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">2. Total Area Coverage (TAC) Control</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Monitor and control total ink coverage to avoid printing issues:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Newsprint: TAC ≤ 240%</li>
                    <li>• Offset printing: TAC ≤ 300%</li>
                    <li>• High-quality printing: TAC ≤ 320%</li>
                    <li>• Use UCR/GCR techniques to optimize ink distribution</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">3. Print Condition Adaptation</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Adjust conversion parameters according to specific printing conditions:
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Select appropriate ICC profiles</li>
                    <li>• Consider paper type effects on color</li>
                    <li>• Adjust black generation curves</li>
                    <li>• Perform press calibration and color management</li>
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
                <Link href="/tools/cmyk-to-oklch" className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    CMYK to OKLCH Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert traditional CMYK print colors to modern OKLCH format for digital workflow upgrades.
                  </p>
                </Link>

                <Link href="/tools/oklch-to-rgb" className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    OKLCH to RGB Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert OKLCH colors to RGB format for digital display and web applications.
                  </p>
                </Link>

                <Link href="/tools/oklch-to-hex" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    OKLCH to HEX Converter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert OKLCH values to hexadecimal color codes for CSS and web development use.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}