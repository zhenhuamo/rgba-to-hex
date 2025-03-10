'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ColorContrast() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/contrast.svg" alt="Color Contrast Checker Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Color Contrast Checker
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Ensure your color combinations meet WCAG accessibility standards
            </p>
          </div>

          <div className="mb-8">
            <iframe 
              src="/tools/color-contrast-checker?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="800"
              title="Color Contrast Checker"
              loading="lazy"
            />
            
            <div className="flex justify-center mt-6 mb-4">
              <Link 
                href="/tools/color-contrast-checker" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Tool in New Page
              </Link>
            </div>
            
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
              </button>
            </div>
            
            {showEmbedCode && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-4">
                <h2 className="text-xl font-bold mb-4">Embed This Tool On Your Website</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You can easily add this color contrast checker to your own website by copying the code below:
                </p>
                
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<iframe src="https://rgbatohex.com/tools/color-contrast-checker?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Contrast Checker"></iframe>`}</code>
                  </pre>
                  <button
                    onClick={() => {
                      const code = `<iframe src="https://rgbatohex.com/tools/color-contrast-checker?embed=true" width="100%" height="800" style="border:none;border-radius:12px;overflow:hidden;" title="Color Contrast Checker"></iframe>`;
                      navigator.clipboard.writeText(code);
                    }}
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Understanding WCAG Standards</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <h3 className="font-medium text-lg">Minimum Requirements</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>WCAG Level AA requires a contrast ratio of at least 4.5:1</li>
                <li>WCAG Level AAA requires a contrast ratio of at least 7:1</li>
                <li>Large text (18pt+) can use a lower ratio of 3:1 for AA level</li>
              </ul>
              
              <h3 className="font-medium text-lg mt-4">Why It Matters</h3>
              <p>
                Good color contrast ensures text readability for all users, including those with visual impairments. Meeting WCAG standards is essential for creating accessible digital content and may be legally required for many websites.
              </p>
              
              <h3 className="font-medium text-lg mt-4">How to Use This Tool</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Choose your color format (HEX, RGB, or RGBA)</li>
                <li>Use the color picker, eyedropper, or enter values manually</li>
                <li>Adjust opacity if using RGBA format</li>
                <li>Test with different visual impairment simulations</li>
                <li>Check detailed accessibility compliance information</li>
              </ol>
              
              <h3 className="font-medium text-lg mt-4">Advanced Features</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the eyedropper to pick colors from your screen</li>
                <li>Test colors with different types of color blindness</li>
                <li>Check ADA and Section 508 compliance</li>
                <li>Adjust text size to test large text requirements</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Web Accessibility Color Contrast Checker</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our free online Color Contrast Checker helps web designers and developers ensure their content meets WCAG accessibility guidelines. Quickly evaluate text and background color combinations to verify they provide sufficient contrast for users with visual impairments.
              </p>
              <p>
                This tool analyzes your color choices against Web Content Accessibility Guidelines (WCAG) 2.1 criteria, helping you meet both AA and AAA compliance levels. It&apos;s essential for creating inclusive designs that work for all users, including those with low vision or color blindness.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Free Online Color Contrast Checker Tool</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our professional Color Contrast Checker is a free, comprehensive tool designed to help web designers, developers, and content creators ensure their color combinations meet WCAG accessibility standards. This tool combines the functionality of popular solutions like the WebAIM contrast checker, Adobe color contrast checker, and a11y color contrast checker into one powerful platform.
              </p>
              
              <h3 className="font-medium text-lg mt-4">Key Features of Our Color Contrast Checker</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Real-time contrast ratio calculation</li>
                <li>WCAG 2.1 compliance checking (AA and AAA levels)</li>
                <li>Support for HEX, RGB, and RGBA color formats</li>
                <li>Built-in eyedropper tool for color picking</li>
                <li>Visual impairment simulation</li>
                <li>Opacity and transparency support</li>
                <li>Color palette contrast checking</li>
                <li>ADA and Section 508 compliance verification</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Understanding WCAG Contrast Requirements</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <strong>WCAG 2.1 Level AA</strong> requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold and above).
              </p>
              <p>
                <strong>WCAG 2.1 Level AAA</strong> requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.
              </p>
              <p>
                Meeting these standards ensures that people with moderate visual impairments can read your content without requiring contrast-enhancing assistive technology.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Who Should Use This Tool</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Web Professionals</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Web Designers</li>
                  <li>UI/UX Designers</li>
                  <li>Front-end Developers</li>
                  <li>Accessibility Specialists</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Content Creators</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Graphic Designers</li>
                  <li>Marketing Professionals</li>
                  <li>Content Managers</li>
                  <li>Digital Artists</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Comprehensive Color Accessibility Testing</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our website color contrast checker goes beyond basic contrast checking by providing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Color palette contrast checking for comprehensive design systems</li>
              <li>Chrome extension compatibility for quick checks while browsing</li>
              <li>Free color contrast checker functionality with professional-grade features</li>
              <li>Advanced accessibility testing tools for ADA compliance</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Detailed Usage Guide</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-medium mb-2">1. Basic Color Contrast Checking</h4>
                <p>Use our free color contrast checker to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enter HEX, RGB, or RGBA color values</li>
                  <li>Use the color picker for visual selection</li>
                  <li>Check contrast ratios instantly</li>
                  <li>Verify WCAG compliance levels</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Advanced Features</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Test color combinations with opacity settings</li>
                  <li>Simulate different types of color blindness</li>
                  <li>Check text legibility at various sizes</li>
                  <li>Analyze entire color palettes for accessibility</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">3. Accessibility Compliance</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Verify WCAG 2.1 AA and AAA compliance</li>
                  <li>Check ADA requirements</li>
                  <li>Ensure Section 508 compliance</li>
                  <li>Generate accessibility reports</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Color Contrast Matters</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Proper color contrast is essential for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring content readability for all users</li>
                <li>Meeting legal accessibility requirements</li>
                <li>Improving user experience across devices</li>
                <li>Supporting users with visual impairments</li>
              </ul>
              <p>
                Our color contrast checker tool helps you achieve these goals while maintaining your design aesthetic.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Integration Options</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                This tool can be used with various platforms and workflows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Compatible with Adobe Creative Suite</li>
                <li>Available as a Chrome extension</li>
                <li>Works with popular design tools</li>
                <li>Integrates with accessibility testing workflows</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Best Practices for Color Contrast</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-medium mb-2">Design Tips</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Start with WCAG AA compliance as minimum</li>
                  <li>Test colors across different backgrounds</li>
                  <li>Consider color blindness variations</li>
                  <li>Use sufficient contrast for all text sizes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Common Mistakes to Avoid</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Assuming aesthetics over accessibility</li>
                  <li>Ignoring mobile device considerations</li>
                  <li>Overlooking color blindness testing</li>
                  <li>Using low contrast for decorative elements</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="font-medium text-lg mb-2">What is a color contrast checker?</h3>
                <p>
                  A color contrast checker is a tool that measures the contrast ratio between two colors to ensure they meet accessibility standards. Our tool provides comprehensive contrast checking capabilities for web accessibility compliance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Why should I use a color contrast checker?</h3>
                <p>
                  Using a color contrast checker helps ensure your content is readable by all users, including those with visual impairments. It&apos;s essential for meeting accessibility standards and legal requirements for web content.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">How does the color contrast checker work?</h3>
                <p>
                  Our tool calculates the contrast ratio between two colors using the WCAG algorithm. It supports multiple color formats (HEX, RGB, RGBA) and provides instant feedback on accessibility compliance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Is this color contrast checker free?</h3>
                <p>
                  Yes, our color contrast checker is completely free to use and provides professional-grade features including WCAG compliance checking, color blindness simulation, and accessibility reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 