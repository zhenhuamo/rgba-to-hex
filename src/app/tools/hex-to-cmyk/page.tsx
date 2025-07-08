'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function HexToCmyk() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-2xl mx-auto mb-16">
          {/* Enhanced Title Section with SEO keywords */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/hex.svg" alt="HEX to CMYK Color Converter Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500">
                HEX to CMYK Color Converter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional online tool to convert web-based HEX colors to print-ready CMYK format. Transform web design HEX colors to print-compatible CMYK values for Adobe, Illustrator, and other professional design software.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Perfect for graphic designers, web developers, and print professionals who need accurate color conversion between digital and print media, including Pantone and PMS color matching.
            </p>
          </div>

          {/* Embed the HEX to CMYK conversion tool using iframe */}
          <div className="w-full">
            <iframe 
              src="/tools/hex-to-cmyk-converter?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="650"
              title="HEX to CMYK Color Converter"
              loading="lazy"
            />
            
            {/* Add navigation button */}
            <div className="flex justify-center mt-6">
              <a
                href="/tools/hex-to-cmyk-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500 rounded-full font-medium hover:from-cyan-600 hover:via-purple-600 hover:to-yellow-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full HEX to CMYK Converter
              </a>
            </div>
          </div>
          
          {/* Embed Guide Section - placed below the tool */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Embed This HEX to CMYK Converter on Your Website</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You can easily embed this HEX to CMYK converter tool into your own website, blog, or online application. Simply copy the iframe code below and paste it into your HTML:
            </p>
            
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-cmyk-converter?embed=true" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to CMYK Color Converter"
></iframe>`}</code>
              </pre>
              <button
                onClick={() => {
                  const code = `<iframe src="https://rgbatohex.com/tools/hex-to-cmyk-converter?embed=true" width="100%" height="650" style="border:none;border-radius:12px;overflow:hidden;" title="HEX to CMYK Color Converter"></iframe>`;
                  navigator.clipboard.writeText(code);
                }}
                className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Copy Code
              </button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Custom Embed Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can customize the initial HEX color value of the embedded tool using URL parameters:
            </p>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside mb-6">
              <li><strong>hex</strong>: Initial HEX color value (without the # symbol)</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For example, to set pure blue (#0000FF) as the initial color:
            </p>
            
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-6">
              <code>{`<iframe 
  src="https://rgbatohex.com/tools/hex-to-cmyk-converter?embed=true&hex=0000FF" 
  width="100%" 
  height="650" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="HEX to CMYK Color Converter - Blue"
></iframe>`}</code>
            </pre>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Embed Example</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Embedded in a Print Design Tutorial</h4>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800">
                <h5 className="text-lg font-medium mb-4">Preparing Web Colors for Print</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When preparing digital designs for printing, you need to convert web colors (HEX) to print-compatible formats. Use this converter to transform your web colors to CMYK values:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-2 mb-4">
                  <div className="text-xs text-gray-500 mb-1">HEX to CMYK Converter (Embed Example)</div>
                  <div className="bg-gray-50 dark:bg-gray-900 h-10 animate-pulse rounded"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Remember that due to gamut limitations, some HEX colors may appear differently in print media. If color accuracy is critical, be sure to check the converted colors on multiple devices.
                </p>
              </div>
            </div>
          </div>
          
          {/* Color Examples Section - Enhanced with more examples */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Complete HEX to CMYK Color Conversion Guide</h2>
            
            {/* Color Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Common HEX to CMYK Conversions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Web Primary Colors</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #0000FF → C:100% M:100% Y:0% K:0%
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-red-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #FF0000 → C:0% M:100% Y:100% K:0%
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-green-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #00FF00 → C:100% M:0% Y:100% K:0%
                      </code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Neutrals and Black</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-black"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #000000 → C:0% M:0% Y:0% K:100%
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-500"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #808080 → C:0% M:0% Y:0% K:50%
                      </code>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-gray-300"></div>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded flex-1">
                        #CCCCCC → C:0% M:0% Y:0% K:20%
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formula Explanation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Understanding the HEX to CMYK Conversion Process</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Converting HEX to CMYK involves first transforming HEX to RGB, then from RGB to CMYK. The formula is:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>HEX to RGB</strong>: <code>R = parseInt(hex.substring(0,2), 16)</code></li>
                  <li><code>G = parseInt(hex.substring(2,4), 16)</code></li>
                  <li><code>B = parseInt(hex.substring(4,6), 16)</code></li>
                  <li><strong>RGB to CMYK</strong>: See JavaScript implementation below</li>
                </ol>
              </div>
            </div>

            {/* JavaScript Implementation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">JavaScript Implementation of HEX to CMYK</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Here&apos;s a JavaScript function that converts HEX to CMYK values:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <code>{`// HEX to CMYK converter function
function hexToCmyk(hex) {
  // Remove # prefix if present
  hex = hex.replace('#', '');
  
  // Parse HEX to RGB
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  
  // Convert RGB to 0-1 range
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  
  // Calculate black (K)
  let k = 1 - Math.max(rNorm, gNorm, bNorm);
  
  // If k is 1, the color is pure black
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  
  // Calculate CMY values
  const c = (1 - rNorm - k) / (1 - k);
  const m = (1 - gNorm - k) / (1 - k);
  const y = (1 - bNorm - k) / (1 - k);
  
  // Convert to percentages with 2 decimal places
  return {
    c: Math.round(c * 100 * 100) / 100,
    m: Math.round(m * 100 * 100) / 100,
    y: Math.round(y * 100 * 100) / 100,
    k: Math.round(k * 100 * 100) / 100
  };
}`}</code>
              </pre>
            </div>
          </div>

          {/* Web to Print Considerations Section - Enhanced with professional terminology */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Web to Print: Important Considerations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Color Gamut Differences</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  CMYK is a subtractive color model used in print, while HEX represents colors in the RGB additive model used for digital displays. The CMYK gamut is smaller than RGB, meaning some web colors cannot be accurately reproduced in print. Our converter provides the closest possible match, but be aware of these limitations when working across mediums.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Rich Black vs. Web Black</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In print, a &quot;rich black&quot; (typically C:40 M:30 Y:30 K:100) creates a deeper black than using K:100 alone. However, on the web, black is simply #000000. Similar discrepancies exist for other colors, which is why professional designers often maintain separate color palettes for print and digital projects.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Total Ink Coverage Considerations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When printing, the sum of the four CMYK channels (total ink coverage) should not exceed 300%, which is the standard limit for most commercial printing. Exceeding this limit can lead to ink drying issues and reduced print quality. Our converter checks for total ink coverage and provides warnings, but always consider printing limitations when making conversions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Calibration and Consistency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For the most accurate color representation, it&apos;s important to use a calibrated monitor when working with color conversions. Additionally, to ensure the final printed result matches your expectations, it&apos;s advisable to obtain physical proofs before proceeding with large-scale printing.
                </p>
              </div>
            </div>
          </div>

          {/* NEW SECTION: Software-Specific Applications */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">HEX to CMYK Conversion in Design Software</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Adobe Illustrator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When converting HEX to CMYK in Adobe Illustrator, be aware that the software uses its own color conversion algorithms which may differ slightly from our online converter. To convert in Illustrator:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Open the Color panel (Window {'>'} Color)</li>
                  <li>Click on the panel menu and select CMYK</li>
                  <li>Enter your HEX value in the HEX field at the bottom of the panel</li>
                  <li>Illustrator will automatically display the CMYK equivalent</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Adobe Photoshop</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Converting HEX to CMYK in Photoshop requires changing your document color mode and using the Color Picker:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Ensure your document is in CMYK mode (Image {'>'} Mode {'>'} CMYK Color)</li>
                  <li>Open the Color Picker by clicking the foreground color</li>
                  <li>Enter your HEX value in the # field</li>
                  <li>Photoshop will show you the converted CMYK values</li>
                  <li>Note that Photoshop will adjust the color to fit within the CMYK gamut</li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Professional Tip</h4>
                <p className="text-blue-700 dark:text-blue-400 text-sm">
                  When preparing designs for commercial printing, always check with your print provider about their specific color requirements and profiles. Some print shops have customized CMYK profiles that may result in slightly different conversions.
                </p>
              </div>
            </div>
          </div>

          {/* NEW SECTION: Pantone and PMS Conversion */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">HEX to CMYK and Pantone/PMS Considerations</h2>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Converting HEX colors to Pantone or PMS (Pantone Matching System) colors is a more complex process than converting to CMYK, as Pantone colors are standardized spot colors that often exist outside the CMYK gamut.
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding HEX to Pantone Conversion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While our tool provides accurate HEX to CMYK conversions, converting to Pantone requires specialized software like Adobe Illustrator with Pantone libraries or the Pantone Color Finder tool. Keep in mind that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mt-2">
                  <li>The conversion is approximate and subjective</li>
                  <li>The same HEX color might match different Pantone colors depending on the conversion method</li>
                  <li>Pantone colors are physical ink formulations that can look different when printed on different materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">HEX to PMS Workflow</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For professional print work requiring Pantone colors, follow this recommended workflow:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Convert your HEX color to CMYK using our converter</li>
                  <li>Use the CMYK values as a starting point in Adobe software with Pantone libraries</li>
                  <li>Locate the closest Pantone match to your CMYK values</li>
                  <li>Check the match visually using physical Pantone swatch books</li>
                  <li>Remember that Pantone colors may appear different on coated (C) vs. uncoated (U) paper</li>
                </ol>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">Important Note About Pantone Conversion</h4>
                <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                  Pantone colors are proprietary and require licensing for accurate digital representation. For critical color matching in professional print jobs, consult with a print professional who has access to the latest Pantone swatch books and matching systems.
                </p>
              </div>
            </div>
          </div>

          {/* NEW SECTION: Practical Applications */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Practical Applications of HEX to CMYK Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Brand Identity Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When developing a brand identity system, you&apos;ll need both web (HEX) and print (CMYK) color specifications. Our HEX to CMYK converter helps ensure consistency across all brand touchpoints, from websites to business cards, brochures, and packaging.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Website to Print Publication</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you&apos;re adapting web content for print media like magazines, catalogs, or newspapers, you&apos;ll need to convert all HEX colors to CMYK. This tool helps you maintain visual consistency while accounting for the technical requirements of professional printing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">RGB to CMYK and HEX Values for Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For comprehensive design systems and style guides, you&apos;ll want to document colors in multiple formats. Our converter helps you generate the CMYK values needed alongside your HEX and RGB specifications, creating complete color documentation for designers and developers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Web Design to Product Manufacturing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  When translating web designs to physical products, accurate color conversion is essential. Use our HEX to CMYK converter as the first step in ensuring your products match your digital brand experience, then work with manufacturers to specify exact color requirements.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section - New for SEO */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About HEX to CMYK Conversion</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What&apos;s the difference between HEX and CMYK color systems?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HEX colors use an additive RGB model (mixing light) represented in hexadecimal format, typically used for digital displays. CMYK uses a subtractive model (mixing inks) with percentages of Cyan, Magenta, Yellow, and Key (black), used in professional printing. The key difference is that HEX/RGB can display colors that CMYK cannot reproduce.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Why do my printed colors look different than they do on screen?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This difference occurs because screens emit light (RGB) while printed materials reflect light (CMYK). Additionally, the CMYK gamut is smaller than RGB, meaning some vibrant digital colors cannot be reproduced in print. Factors like paper type, ink quality, and printing technology also affect the final appearance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Should I use HEX to CMYK conversion for professional printing?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For casual or in-house printing, our converter provides good approximations. For professional printing, use our tool as a starting point, but finalize colors in professional design software with proper color management and consult with your print provider about their specific requirements and color profiles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How do I convert HEX to CMYK in Adobe Illustrator?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In Adobe Illustrator, open the Color panel, select CMYK from the panel menu, and enter your HEX value in the HEX field at the bottom. Illustrator will automatically convert the value to CMYK. For best results, ensure your document is set to the CMYK color mode and use the appropriate color profile for your printing needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What is total ink coverage and why does it matter?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Total ink coverage is the sum of all four CMYK percentages (C+M+Y+K). Most commercial printing has a maximum limit around 300-320% to prevent issues like poor drying, smudging, and paper saturation. Our converter helps identify colors that might exceed this limit and may require adjustment before professional printing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 