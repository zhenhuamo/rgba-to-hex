'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const DeltaECalculatorPage: React.FC = () => {
  const toolEmbedUrl = "/tools/delta-e-calculator-embed";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-6xl mx-auto">
        
        {/* Interactive Tool Section - Moved to top for immediate visibility */}
        <section aria-labelledby="interactive-tool-heading" className="mb-10 mt-6">
          <h2 id="interactive-tool-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">Interactive Delta-E Calculator Tool</h2> 
          <div className="w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] max-w-6xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src={toolEmbedUrl}
              className="w-full h-full border-none"
              title="Interactive Delta-E Calculator"
              loading="eager"
            />
          </div>
          <div className="text-center mt-6">
            <Link 
              href={toolEmbedUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Open Standalone Tool
            </Link>
          </div>
        </section>
        
        {/* Header Section */}
        <header className="text-center mb-10 md:mb-14">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 mb-4">
            Delta-E Color Difference Calculator
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Precisely calculate and compare the perceptual difference between colors using CIE76, CIE94, and CIEDE2000 standards. The professional color assessment tool for designers and developers.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CIE76</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CIE94</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CIEDE2000</span>
            <span className="bg-teal-100 dark:bg-teal-700/50 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Screen Color Picker</span>
            <span className="bg-emerald-100 dark:bg-emerald-700/50 text-emerald-800 dark:text-emerald-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">LAB Color Space</span>
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">RGB to HEX</span>
          </div>
        </header>

        {/* Definition Section */}
        <section className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">What is Delta-E Color Difference?</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <strong>Delta-E</strong> (commonly written as ΔE) is the standard metric used to measure and quantify the perceptual difference between two colors. This value represents the degree of color difference that can be perceived by the human eye, with lower values indicating greater similarity between colors. Delta-E calculations are extensively used in printing, design, photography, display calibration, and any field requiring precise color management.
            </p>
            <p>
              The term &quot;Delta&quot; comes from mathematics, representing change or difference, while &quot;E&quot; refers to &quot;Empfindung&quot; (German for &quot;sensation&quot;). In color science, several formulas have been developed to calculate Delta-E values, with each subsequent standard improving on the accuracy of human color perception modeling:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>CIE76</strong>: The original formula based on Euclidean distance in the Lab color space</li>
              <li><strong>CIE94</strong>: An improved formula that accounts for perceptual non-uniformities</li>
              <li><strong>CIEDE2000</strong>: The most advanced and accurate standard, especially for blue regions and neutral grays</li>
            </ul>
            <p>
              Our calculator supports all three standards, allowing you to choose the appropriate method for your specific application, whether you&apos;re working with hex colors, RGB values, or LAB coordinates.
            </p>
          </div>
        </section>

        {/* Delta-E Standards Section */}
        <section className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">Color Difference Standards Explained</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-5">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">CIE76 Standard</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The simplest color difference calculation method based on Euclidean distance in the CIELAB color space. While straightforward to compute, it lacks accuracy in certain color regions (particularly blues and grays). Primarily used for quick, approximate color difference estimation when computational efficiency is prioritized over absolute accuracy.
              </p>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Formula:</strong> ΔE*<sub>ab</sub> = √[(L₂* - L₁*)² + (a₂* - a₁*)² + (b₂* - b₁*)²]
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-5">
              <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3">CIE94 Standard</h3>
              <p className="text-gray-700 dark:text-gray-300">
                An improved version of CIE76 that accounts for the human eye&apos;s varying sensitivity to hue, saturation, and lightness. Performs better in graphic arts and textile applications, offering a closer approximation to actual human perception. Introduces weighting factors to address perceptual non-uniformities in the CIELAB color space.
              </p>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Applications:</strong> Graphic design, textile manufacturing, commercial printing
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-5">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">CIEDE2000 Standard</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The latest and most sophisticated color difference standard, providing further refinements to the modeling of human color perception. Although computationally complex, it delivers the most accurate results, especially in blue regions and neutral grays. Recommended for applications requiring high precision color matching and quality control.
              </p>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Key improvements:</strong> Hue rotation term, lightness and chroma scaling, interactive terms between hue and chroma differences
              </div>
            </div>
          </div>
        </section>

        {/* Color Difference Interpretation */}
        <section className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-teal-500 pl-4">Interpreting Delta-E Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/30">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
              <div>
                <div className="font-medium">Less than 1.0: Not perceptible</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Imperceptible difference to the human eye</div>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
              <div>
                <div className="font-medium">1.0-2.0: Slight difference</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Only perceptible by trained observers</div>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/30">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
              <div>
                <div className="font-medium">2.0-3.5: Noticeable difference</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Moderate difference observable by average person</div>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-orange-50 dark:bg-orange-900/30">
              <div className="w-4 h-4 rounded-full bg-orange-500 mr-3"></div>
              <div>
                <div className="font-medium">3.5-5.0: Significant difference</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Clearly visible color difference</div>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-red-50 dark:bg-red-900/30 md:col-span-2">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
              <div>
                <div className="font-medium">Greater than 5.0: Distinct colors</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Two colors perceived as completely different</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
            <strong>Industry standards vary:</strong> In professional printing, a Delta-E of less than 2.0 is typically acceptable. Display calibration aims for Delta-E below 1.0, while textile manufacturing may allow values up to 4.0 depending on the application.
          </div>
        </section>

        {/* Additional Information */}
        <article className="prose dark:prose-invert lg:prose-lg max-w-none bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 md:p-10 backdrop-blur-sm mb-12">
          <section id="usage-examples">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4 !mt-0">Applications of Delta-E in Color Management</h2>
            <p>
              Delta-E color difference calculations are fundamental across various industries where precise color management is critical. Here&apos;s how different sectors utilize this essential metric:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Printing & Packaging</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Brand color consistency assurance</li>
                  <li>Batch-to-batch color variation control</li>
                  <li>Color matching and correction</li>
                  <li>Print quality control</li>
                  <li>Cross-media color transformation</li>
                  <li>ICC profile creation and evaluation</li>
                </ul>
              </div>
              
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-3">Digital Design</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>UI/UX design color consistency</li>
                  <li>Web design color harmony</li>
                  <li>Brand guideline color specifications</li>
                  <li>Monitor calibration</li>
                  <li>Cross-device color matching</li>
                  <li>RGB to HEX color conversion validation</li>
                  <li>Dark mode color palette development</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Photography & Image Processing</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Color calibration and management</li>
                  <li>Photo restoration and matching</li>
                  <li>Filter and effect evaluation</li>
                  <li>Color consistency across lighting conditions</li>
                  <li>Camera profile creation</li>
                  <li>Digital asset management</li>
                  <li>Fine art reproduction</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">Manufacturing & Quality Control</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Product color quality control</li>
                  <li>Textile dyeing consistency</li>
                  <li>Automotive paint inspection</li>
                  <li>Consumer electronics appearance</li>
                  <li>Food and pharmaceutical appearance monitoring</li>
                  <li>Chemical formulation quality assurance</li>
                  <li>Industrial coating uniformity assessment</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="color-spaces" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">Understanding Color Spaces in Delta-E Calculations</h2>
            <p>
              Delta-E calculations are performed in perceptually uniform color spaces, primarily the CIELAB (L*a*b*) color space. Understanding the different color spaces and their relationships is crucial for accurate color difference assessment:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">CIELAB (L*a*b*) Color Space</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The CIELAB color space is designed to be perceptually uniform, meaning equal distances in the space correspond to roughly equal perceived differences. The L* component represents lightness (0-100), a* represents the green-red axis, and b* represents the blue-yellow axis. This device-independent color space is the foundation for Delta-E calculations.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">RGB Color Space</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  RGB is a device-dependent color space used in digital displays, defining colors through red, green, and blue light combinations. For Delta-E calculations, RGB values must first be converted to CIELAB, typically through an intermediate XYZ transformation. This conversion requires knowledge of the specific RGB color space (sRGB, Adobe RGB, etc.).
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">HEX Color Codes</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hexadecimal color codes (like #FF5733) are a notation system for RGB colors used in web design and digital applications. Our calculator can accept HEX values directly, converting them to LAB coordinates internally for accurate Delta-E calculation. This makes it easy to compare website colors without manual conversion.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">CMYK Color Space</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CMYK (Cyan, Magenta, Yellow, Key/Black) is used in printing processes. Due to its device-dependent nature and smaller gamut compared to RGB, accurate conversion to LAB requires color management profiles. For print applications, measuring printed samples directly in LAB provides the most accurate Delta-E assessments.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Why choose CIEDE2000 over other standards?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CIEDE2000 offers the most accurate color difference assessment despite its computational complexity. For professional applications requiring high-precision color matching, such as brand color management or print quality inspection, CIEDE2000 is the optimal choice. For general applications, CIE94 provides a good balance between accuracy and computational efficiency, while CIE76 is suitable for applications where speed is critical.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What Delta-E value is considered acceptable?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Acceptable Delta-E values vary by industry and application. Professional printing typically requires Delta-E less than 2.0, high-end display calibration aims for Delta-E below 1.0, and general commercial printing may accept Delta-E between 3-5. Specialized industries like automotive painting may have stricter standards, while web design applications might be more lenient. Always refer to your industry&apos;s specific standards for guidance.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">What&apos;s the difference between RGB and LAB color spaces?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  RGB is a device-dependent color space used primarily for electronic displays, based on additive color mixing of red, green, and blue. LAB is a device-independent color space designed to approximate human vision, where L represents lightness, a represents the green-red axis, and b represents the blue-yellow axis. Delta-E calculations are typically performed in LAB space because it better corresponds to human perception. Converting from RGB to LAB requires intermediate transformations and knowledge of the specific RGB color profile.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">How can I improve color matching between two colors?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  To reduce color difference, first determine which dimension (lightness, hue, or saturation) contributes most to the difference. The human eye is most sensitive to lightness differences, followed by hue, and then saturation. Therefore, first adjust lightness to match, then fine-tune hue and saturation. Using professional color management software and calibrated devices can help achieve more precise color matching. For digital colors, our calculator can help identify which color components need adjustment to reduce Delta-E values.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Can I use Delta-E calculations in Excel?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Yes, you can implement Delta-E calculations in Excel using formulas for the various standards. For CIE76, the formula is relatively straightforward using the Euclidean distance. For CIE94 and CIEDE2000, the formulas are more complex and may require multiple cells for intermediate calculations. Alternatively, you can use Excel add-ins or macros specifically designed for color science applications. Our online calculator provides a simpler solution for occasional calculations without the need for complex spreadsheet formulas.
                </p>
              </div>
            </div>
          </section>

          <section id="embedding" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">Embed the Delta-E Calculator</h2>
            <p>
              You can embed this Delta-E calculator in your own website or blog by using the following iframe code:
            </p>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden mt-6">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-gray-300 text-sm font-medium">HTML Iframe Embed Code</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`<iframe src="https://rgbatohex.com/tools/delta-e-calculator-embed" width="100%" height="600" style="border: none; border-radius: 8px;" title="Delta-E Color Difference Calculator" loading="lazy"></iframe>`);
                  }}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                >
                  Copy
                </button>
              </div>
              <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/delta-e-calculator-embed" 
  width="100%" 
  height="600" 
  style="border: none; border-radius: 8px;" 
  title="Delta-E Color Difference Calculator" 
  loading="lazy">
</iframe>`}</code>
              </pre>
            </div>
          </section>

          <section id="related-tools" className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-teal-500 pl-4">Related Color Tools</h2>
            <p>
              Explore our other color tools to enhance your design workflow:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Link href="/tools/color-harmony" className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Color Harmony Generator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create harmonious color schemes based on color theory principles</p>
              </Link>
              
              <Link href="/tools/color-contrast" className="block p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">Color Contrast Checker</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Verify accessibility of color combinations</p>
              </Link>
              
              <Link href="/tools/color-palette" className="block p-4 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-cyan-800 dark:text-cyan-200">Color Palette Generator</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create complete color schemes for your projects</p>
              </Link>
              
              <Link href="/tools/rgba-to-hex" className="block p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-teal-800 dark:text-teal-200">RGBA to HEX Converter</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Easily convert between different color formats</p>
              </Link>
            </div>
          </section>
        </article>

        {/* Footer CTA */}
        <div className="text-center py-12 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Start Measuring Color Differences Precisely
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Use our Delta-E calculator to compare colors and ensure your designs and brand maintain consistent color fidelity across all mediums.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
              </svg>
              Explore More Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeltaECalculatorPage;
