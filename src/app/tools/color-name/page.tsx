'use client';

import Navigation from '@/components/Navigation';

export default function ColorNamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-cyan-200 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 p-4 md:p-8">
      <Navigation />
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header Section */}
        <header className="text-center mb-10 md:mb-14">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-full mb-4 shadow-md">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 mb-4">
            The Ultimate Color Name Finder & Converter
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Instantly find the name for any color. Convert HEX and RGB codes to their official or closest color name, explore the full HTML & CSS color name list, and get insights for your projects. Perfect for web development, design, data science, and creative arts.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-blue-100 dark:bg-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HTML Colors</span>
            <span className="bg-cyan-100 dark:bg-cyan-700/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">CSS Colors</span>
            <span className="bg-indigo-100 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">HEX to Name</span>
            <span className="bg-teal-100 dark:bg-teal-700/50 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">RGB to Name</span>
            <span className="bg-purple-100 dark:bg-purple-700/50 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Color Search</span>
          </div>
        </header>

        {/* Interactive Tool Section */}
        <section aria-labelledby="interactive-tool-heading" className="mb-10">
          <h2 id="interactive-tool-heading" className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-cyan-500 pl-4">
            Interactive Color Name Converter & Search Tool
          </h2>
          <div className="w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9] max-w-6xl mx-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm">
            <iframe 
              src="/tools/color-name-converter?embed=true"
              className="w-full h-full border-none"
              title="Color Name Converter and Finder Tool"
            />
          </div>
          <div className="text-center mt-6">
            <a 
              href="/tools/color-name-converter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Open Full Color Tool
            </a>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* About Section with more keywords */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">
              About Our Color Name Finder & Converter
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Ever found yourself with a HEX code like <code>#1a2b3c</code> and wondered, &quot;What color is this?&quot; Or maybe you&apos;re trying to communicate a specific shade to a colleague, and &quot;that light-ish blue-green&quot; just isn&apos;t cutting it. Our Color Name Finder is designed to solve exactly this problem by bridging the gap between machine-readable color codes and human-friendly color names.
              </p>
              <p>
                This tool provides a comprehensive database of all official HTML and CSS color names, allowing you to perform a color name search or list all color names. Whether you need to find a color name from a HEX or RGB value or convert a known color name back to its code, this utility is your one-stop solution. It&apos;s an indispensable resource for anyone who works with color, from web development to digital art.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">HEX & RGB to Color Name</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Convert any HEX/RGB code to its nearest color name.</li>
                  <li>Get instant, accurate results for technical and design work.</li>
                  <li>Supports 3-digit and 6-digit hex codes.</li>
                  <li>Find the name for any color, from &apos;Red&apos; to &apos;RebeccaPurple&apos;.</li>
                </ul>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-3">Complete Color Name List</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Browse the full, searchable list of HTML & CSS color names.</li>
                  <li>An essential color name table for any developer or designer.</li>
                  <li>Includes all 140+ standard web colors.</li>
                  <li>Perfect for finding specific shades like &apos;firebrick&apos; or &apos;dodgerblue&apos;.</li>
                </ul>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Advanced Color Tools</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Discover similar and alternative colors.</li>
                  <li>Generate color palettes from a single name.</li>
                  <li>Explore web-safe colors for maximum compatibility.</li>
                  <li>A powerful color namer and generator in one tool.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Applications & Use Cases Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-green-500 pl-4">Who is this Tool For? (Applications & Use Cases)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Web Developers & Designers</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Quickly find names for colors in a design mockup from tools like Figma. Standardize CSS by using named colors instead of ambiguous hex codes. Ensure consistency across your web projects by referencing a definitive color name list.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Data Scientists & Analysts</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When creating plots and charts with libraries like Matplotlib in Python or generating reports in LaTeX, using named colors makes your code more readable and your visualizations easier to understand and reproduce.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Digital Artists & Hobbyists</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Find the perfect name for a specific shade in your digital painting. For game developers on platforms like Roblox, a color name predictor helps in scripting and asset creation. It&apos;s also great for finding color inspiration for fashion and interior design (e.g., for `abbinamento colori vestiti` or clothes color matching).
                </p>
              </div>
               <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">Anyone Working with Color</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  From marketing professionals creating brand guidelines to teachers explaining color theory, having a universal name for a color is essential for clear communication. This tool is for anyone who needs to name a color.
                </p>
              </div>
            </div>
          </section>
          
          {/* Deeper Dive Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">A Deeper Dive: Understanding Color Naming Systems</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The color names used in web development (like &quot;Tomato&quot; or &quot;SteelBlue&quot;) are part of a standardized list, primarily from the X11 color system, which is now a web standard in HTML and CSS. These names map directly to specific HEX and RGB values.
              </p>
              <p>
                You might also have heard of other systems like Pantone. It&apos;s important to understand that Pantone colors are designed for print (using the CMYK model) and are part of a proprietary matching system. While you can find the closest digital (RGB/HEX) equivalent to a Pantone color, there isn&apos;t a direct one-to-one conversion for names in the way web colors have. This tool focuses on the official names for digital, screen-based colors.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How do I find a color name from a HEX code?</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Simply enter your HEX code (e.g., #32CD32) into the tool, and it will instantly give you the name (in this case, &quot;LimeGreen&quot;).</p>
              </div>
              <div>
                <h3 className="font-semibold">Can I see all CSS color names in one list?</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Yes, our tool provides a complete, searchable color name table containing all 140+ standard CSS color names.</p>
              </div>
              <div>
                <h3 className="font-semibold">What rock lends its name to a blue-gray color?</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">The rock is <strong>Slate</strong>, which lends its name to colors like &quot;SlateGray&quot; and &quot;DarkSlateGray&quot;. You can find them all in our color list!</p>
              </div>
              <div>
                <h3 className="font-semibold">Is it possible to find skin color names?</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">While &quot;skin color&quot; varies greatly, you can find names for many common skin tones in our database, such as &quot;Bisque&quot;, &quot;Tan&quot;, &quot;SaddleBrown&quot;, and &quot;PeachPuff&quot;. Just input the HEX/RGB code of the skin tone you are looking for.</p>
              </div>
              <div>
                <h3 className="font-semibold">How do I use color names in Python or Matplotlib?</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Most Python visualization libraries, including Matplotlib, accept standard CSS color names as string inputs (e.g., `plt.plot(x, y, color=&apos;steelblue&apos;)`). Our programming examples below show this in action.</p>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-teal-500 pl-4">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mr-4 text-teal-600 dark:text-teal-300 font-semibold">1</div>
                  <div>
                    <div className="font-medium">Choose Input Type</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Select HEX, RGB, or color name input</div>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mr-4 text-teal-600 dark:text-teal-300 font-semibold">2</div>
                  <div>
                    <div className="font-medium">Enter Value</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Input your color value or name</div>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mr-4 text-teal-600 dark:text-teal-300 font-semibold">3</div>
                  <div>
                    <div className="font-medium">Get Results</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">View instant results with color preview</div>
                  </div>
                </div>
                <div className="flex items-center p-4 rounded-lg bg-teal-50 dark:bg-teal-900/30">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mr-4 text-teal-600 dark:text-teal-300 font-semibold">4</div>
                  <div>
                    <div className="font-medium">Explore Similar Colors</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Discover related colors and alternatives</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Tips for Best Results</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Use standard color formats (e.g., #FF0000 or 255,0,0)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Try both exact and approximate color names
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Check similar colors for alternatives
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Save your favorite colors for future reference
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Programming Examples */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-purple-500 pl-4">Color Naming in Code: JS & Python Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">JavaScript</h3>
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code className="text-sm">
{`// Convert color name to hex
const colorNameToHex = {
  'red': '#FF0000',
  'green': '#00FF00',
  'blue': '#0000FF'
};

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}`}
                </code></pre>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Python</h3>
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code className="text-sm">
{`# Convert RGB to hex
def rgb_to_hex(r, g, b):
    return '#{:02x}{:02x}{:02x}'.format(r, g, b)

# Convert hex to RGB
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))`}
                </code></pre>
              </div>
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-l-4 border-emerald-500 pl-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/tools/rgb-to-hex" className="block p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">RGB to HEX</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert RGB colors to hexadecimal format</p>
              </a>
              <a href="/tools/hex-to-rgb" className="block p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/50 dark:to-cyan-800/50 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                <h3 className="font-semibold text-cyan-800 dark:text-cyan-200">HEX to RGB</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Convert hexadecimal colors to RGB format</p>
              </a>
              <a href="/tools/color-palette-generator" className="block p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-200">Color Palette Generator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Create harmonious color combinations</p>
              </a>
              <a href="/tools/color-contrast-checker" className="block p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200">Color Contrast Checker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Check accessibility of color combinations</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 