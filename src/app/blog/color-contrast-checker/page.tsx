'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ColorContrastBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        
        <article className="max-w-5xl mx-auto mt-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Color Contrast Checker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free online tool for checking color contrast ratios and ensuring web accessibility standards. Perfect for designers and developers.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#online-tool" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Online Tool
              </a>
              <a href="#chrome-extension" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Chrome Extension
              </a>
              <a href="#accessibility" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Accessibility
              </a>
              <a href="#advanced-features" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                Advanced Features
              </a>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {/* Online Tool Section */}
            <section id="online-tool" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Free Online Color Contrast Checker</h2>
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  Our color contrast checker is a powerful online tool that helps ensure your web designs meet accessibility standards. Check contrast ratios instantly and validate WCAG compliance.
                </p>

                <div className="my-8 grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      <li>✓ Real-time contrast ratio calculation</li>
                      <li>✓ WCAG 2.1 compliance checking</li>
                      <li>✓ Support for multiple color formats</li>
                      <li>✓ Visual preview with different text sizes</li>
                      <li>✓ Eyedropper tool for color picking</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Supported Formats</h3>
                    <ul className="space-y-2">
                      <li>• HEX colors (#FFFFFF)</li>
                      <li>• RGB values (rgb(255, 255, 255))</li>
                      <li>• RGBA with opacity</li>
                      <li>• HSL color space</li>
                      <li>• Named colors (white, black, etc.)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">How to Use</h3>
                  <ol className="space-y-3">
                    <li>1. Enter your text color (foreground)</li>
                    <li>2. Enter your background color</li>
                    <li>3. View the contrast ratio result</li>
                    <li>4. Check WCAG compliance indicators</li>
                    <li>5. Adjust colors if needed</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Chrome Extension Section */}
            <section id="chrome-extension" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Chrome Extension for Quick Checks</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Our Chrome extension brings the power of contrast checking directly to your browser. Check any website&apos;s color contrast with a single click.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Extension Features</h3>
                    <ul className="space-y-2">
                      <li>• Instant color picking from any webpage</li>
                      <li>• Automatic contrast calculation</li>
                      <li>• WCAG compliance checking</li>
                      <li>• Color suggestions for better contrast</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Installation Steps</h3>
                    <ol className="space-y-2">
                      <li>1. Visit Chrome Web Store</li>
                      <li>2. Search for &quot;Color Contrast Checker&quot;</li>
                      <li>3. Click &quot;Add to Chrome&quot;</li>
                      <li>4. Start checking contrast instantly</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility Section */}
            <section id="accessibility" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Web Accessibility Guidelines</h2>
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  Understanding color contrast accessibility is crucial for creating inclusive web designs that comply with WCAG standards and ADA requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">WCAG Compliance Levels</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Level AA (Minimum)</h4>
                        <ul className="space-y-2">
                          <li>• Normal text: 4.5:1 ratio</li>
                          <li>• Large text: 3:1 ratio</li>
                          <li>• UI components: 3:1 ratio</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Level AAA (Enhanced)</h4>
                        <ul className="space-y-2">
                          <li>• Normal text: 7:1 ratio</li>
                          <li>• Large text: 4.5:1 ratio</li>
                          <li>• UI components: 3:1 ratio</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                    <ul className="space-y-2">
                      <li>• Test contrast in different lighting conditions</li>
                      <li>• Consider color blindness and visual impairments</li>
                      <li>• Use sufficient contrast for all interactive elements</li>
                      <li>• Don&apos;t rely solely on color to convey information</li>
                      <li>• Test with real users and accessibility tools</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Common Accessibility Issues</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">What to Avoid</h4>
                      <ul className="space-y-2">
                        <li>✗ Low contrast text on light backgrounds</li>
                        <li>✗ White text on bright colors</li>
                        <li>✗ Text over busy images</li>
                        <li>✗ Gray on gray combinations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Recommended Solutions</h4>
                      <ul className="space-y-2">
                        <li>✓ Use dark text on light backgrounds</li>
                        <li>✓ Add text shadow or overlay for image text</li>
                        <li>✓ Maintain minimum contrast ratios</li>
                        <li>✓ Test with accessibility tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Features Section */}
            <section id="advanced-features" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">Advanced Features and Tools</h2>
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Eyedropper Tool</h3>
                    <ul className="space-y-2">
                      <li>• Pick colors from any screen area</li>
                      <li>• Real-time color preview</li>
                      <li>• Multiple format support</li>
                      <li>• Color history tracking</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Opacity Handling</h3>
                    <ul className="space-y-2">
                      <li>• RGBA color support</li>
                      <li>• Transparency calculations</li>
                      <li>• Background blending</li>
                      <li>• Alpha channel preview</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Batch Analysis</h3>
                    <ul className="space-y-2">
                      <li>• Multiple color pair testing</li>
                      <li>• Bulk contrast checking</li>
                      <li>• Report generation</li>
                      <li>• CSV export support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Developer Tools</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">API Access</h4>
                      <ul className="space-y-2">
                        <li>• RESTful API endpoints</li>
                        <li>• JSON response format</li>
                        <li>• Rate limiting options</li>
                        <li>• Authentication support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Integration Options</h4>
                      <ul className="space-y-2">
                        <li>• NPM package available</li>
                        <li>• WebSocket real-time updates</li>
                        <li>• Custom webhook support</li>
                        <li>• Documentation and examples</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Color Analysis Tools</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Color Suggestions</h4>
                      <ul className="space-y-2">
                        <li>• AI-powered recommendations</li>
                        <li>• Brand color matching</li>
                        <li>• Accessible alternatives</li>
                        <li>• Color harmony analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visualization Tools</h4>
                      <ul className="space-y-2">
                        <li>• Color blindness simulation</li>
                        <li>• Contrast heat maps</li>
                        <li>• Pattern analysis</li>
                        <li>• Visual hierarchy check</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Check Your Colors?</h2>
              <p className="text-xl mb-6">
                Start using our free color contrast checker tool now and ensure your designs are accessible to everyone.
              </p>
              <Link 
                href="/tools/color-contrast"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Try Color Contrast Checker
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 