'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

export default function FontGenerator() {
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Unicode Font Generator | Convert Text to Stylish Fonts | Free Online Tool</title>
        <meta name="description" content="Transform regular text into unique Unicode font styles with our free online Font Generator tool. Perfect for social media, design, and creative projects. Create fancy text, small caps, superscript, and more!" />
        <meta name="keywords" content="font generator, unicode font styles, fancy text generator, text converter, stylish fonts, social media fonts, unicode text, font changer, text transformer, creative fonts, aesthetic fonts, special character fonts, font styles" />
        <meta property="og:title" content="Unicode Font Generator | Convert Text to Stylish Fonts | Free Online Tool" />
        <meta property="og:description" content="Transform regular text into stylish Unicode font styles for social media, design, and creative projects with our free online font generator tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rgbatohex.com/tools/font-generator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unicode Font Generator | Transform Text with Stylish Unicode Fonts" />
        <meta name="twitter:description" content="Create stylish text with over 30 Unicode font styles including fancy script, bold, italic, circled, and more - perfect for social media profiles and creative design." />
        <link rel="canonical" href="https://rgbatohex.com/tools/font-generator" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Minimal Title Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image src="/font-icon.svg" alt="Unicode Font Generator Tool" width={40} height={40} priority />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Unicode Font Generator
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Transform regular text into stylish Unicode font styles instantly
            </p>
          </div>

          {/* Embed the font generator tool via iframe - Main Focus */}
          <div className="w-full mb-6">
            <iframe 
              src="/tools/font-generator-tool?embed=true" 
              className="w-full border-none rounded-2xl shadow-xl"
              height="700"
              title="Unicode Font Generator"
              loading="lazy"
            />
            
            {/* Tool Actions - Below the iframe */}
            <div className="mt-4 flex justify-between items-center">
              <a
                href="/tools/font-generator-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full-Featured Font Generator
              </a>
              
              <button
                onClick={() => setShowEmbedCode(!showEmbedCode)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {showEmbedCode ? 'Hide Embed Code' : 'Show Embed Code'}
              </button>
            </div>
          </div>
          
          {/* Embed Code Section - Only shown when button is clicked */}
          {showEmbedCode && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Embed This Font Generator On Your Website</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can easily add this Unicode font generator tool to your own website by copying the code below:
              </p>
              
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<iframe src="https://rgbatohex.com/tools/font-generator-tool?embed=true" width="100%" height="700" style="border:none;border-radius:12px;overflow:hidden;" title="Unicode Font Generator"></iframe>`}</code>
                </pre>
                <button
                  onClick={() => {
                    const code = `<iframe src="https://rgbatohex.com/tools/font-generator-tool?embed=true" width="100%" height="700" style="border:none;border-radius:12px;overflow:hidden;" title="Unicode Font Generator"></iframe>`;
                    navigator.clipboard.writeText(code);
                  }}
                  className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Copy Code
                </button>
              </div>
            </div>
          )}

          {/* Detailed Content Section - Below the tool */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What is a Unicode Font Generator Tool?</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                A <strong>Unicode font generator</strong> is an advanced online tool that transforms ordinary text into various stylish and unique Unicode font styles. Unlike traditional fonts that require installation, our <strong>font generator</strong> utilizes Unicode character mapping technology to instantly convert your text into special characters that can be pasted anywhere - social media profiles, messages, documents, and design projects.
              </p>
              <p>
                Our <strong>free font generator</strong> offers over 30 different <strong>font styles</strong> across multiple categories, allowing you to create <strong>aesthetic text</strong> for any purpose. The converted text maintains compatibility across most modern platforms and devices, as it uses standardized Unicode characters rather than actual font files.
              </p>
              <p>
                Whether you need <strong>fancy fonts for Instagram</strong>, stylish text for Twitter/X, creative typography for design projects, or unique text for brand identity, our <strong>text converter</strong> provides instant results with no registration or downloads required.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Comprehensive Font Style Categories</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Our <strong>Unicode font generator</strong> offers an extensive collection of font styles organized into several categories for easy navigation. Each style transforms your text in unique ways while maintaining readability across platforms:
              </p>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Basic Font Styles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our fundamental text transformation options provide clean, professional alternatives to standard text:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Serif Font Variations:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Normal Text</strong>: Standard Unicode text without modifications</li>
                      <li><strong>Bold Serif</strong>: 𝐁𝐨𝐥𝐝 𝐭𝐞𝐱𝐭 with enhanced weight for emphasis</li>
                      <li><strong>Italic Serif</strong>: 𝐼𝑡𝑎𝑙𝑖𝑐 𝑡𝑒𝑥𝑡 with elegant slanted appearance</li>
                      <li><strong>Bold Italic Serif</strong>: 𝑩𝒐𝒍𝒅 𝒊𝒕𝒂𝒍𝒊𝒄 combining both styles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Mathematical Text Styles:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Mathematical Monospace</strong>: 𝚂𝚝𝚢𝚕𝚒𝚜𝚑 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎𝚍 𝚝𝚎𝚡𝚝</li>
                      <li><strong>Double Struck</strong>: 𝕌𝕟𝕚𝕢𝕦𝕖 𝕠𝕦𝕥𝕝𝕚𝕟𝕖𝕕 𝕔𝕙𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕤</li>
                      <li><strong>Small Caps</strong>: ᴄᴏɴᴠᴇʀᴛꜱ ᴛᴇxᴛ ᴛᴏ ꜱᴍᴀʟʟ ᴄᴀᴘɪᴛᴀʟꜱ</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Decorative & Creative Font Styles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For more expressive and eye-catching text transformations:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Elegant Script Styles:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Script/Fancy</strong>: 𝓑𝓮𝓪𝓾𝓽𝓲𝓯𝓾𝓵 𝓼𝓬𝓻𝓲𝓹𝓽 𝓽𝓮𝔁𝓽 with flowing curves</li>
                      <li><strong>Cursive</strong>: 𝒞𝓊𝓇𝓈𝒾𝓋𝑒 𝓉𝑒𝓍𝓉 with elegant handwritten appearance</li>
                      <li><strong>Old English/Fraktur</strong>: 𝔒𝔩𝔡 𝔈𝔫𝔤𝔩𝔦𝔰𝔥 𝔰𝔱𝔶𝔩𝔢 with medieval look</li>
                      <li><strong>Bold Fraktur</strong>: 𝖂𝖊𝖎𝖌𝖍𝖙𝖞 𝖔𝖑𝖉 𝖊𝖓𝖌𝖑𝖎𝖘𝖍 text</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Symbolic & Enclosed Styles:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Circled Text</strong>: Ⓔⓝⓒⓛⓞⓢⓔⓓ ⓘⓝ ⓒⓘⓡⓒⓛⓔⓢ for visual appeal</li>
                      <li><strong>Squared Text</strong>: 🅂🅀🅄🄰🅁🄴🄳 🅃🄴🅇🅃 with boxed characters</li>
                      <li><strong>Bubbles</strong>: ⓑⓤⓑⓑⓛⓔ-ⓛⓘⓚⓔ enclosed characters</li>
                      <li><strong>Inverted Squares</strong>: 🅸🅽🆅🅴🆁🆃🅴🅳 🆂🆀🆄🅰🆁🅴🆂 with contrast</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Special Format Font Styles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Unique text transformations for specific applications:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Position & Size Variants:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Superscript</strong>: ᵀᵉˣᵗ ʳᵃⁱˢᵉᵈ ᵃᵇᵒᵛᵉ the baseline</li>
                      <li><strong>Subscript</strong>: ₜₑₓₜ ₗₒwₑᵣₑd below the baseline</li>
                      <li><strong>Full Width</strong>: Ｗｉｄｅ－ｓｐａｃｅｄ　aesthetic text</li>
                      <li><strong>Vaporwave</strong>: Ａｅｓｔｈｅｔｉｃ text with full-width spacing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Decorative Effect Styles:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Sparkles</strong>: ✨ Text ✨ with sparkling decorations</li>
                      <li><strong>Hearts</strong>: ❤️ Text ❤️ with heart symbols</li>
                      <li><strong>Stars</strong>: ★ Text ★ with star decorations</li>
                      <li><strong>Creepy (Zalgo)</strong>: G̷l̵i̶t̶c̴h̵e̷d̵ text with overlapping marks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Text Formatting Effects</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Special formatting transformations for creative text display:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <li><strong>Mirror Text</strong>: Reverses the character order</li>
                  <li><strong>Parentheses</strong>: Adds (p)(a)(r)(e)(n)(t)(h)(e)(s)(e)(s) around each letter</li>
                  <li><strong>Strike Through</strong>: A̶d̶d̶s̶ ̶s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶t̶o̶ ̶t̶e̶x̶t̶</li>
                  <li><strong>Dashes</strong>: Adds d-a-s-h-e-s between characters</li>
                  <li><strong>Dots</strong>: Adds d·o·t·s between characters</li>
                  <li><strong>Wave Text</strong>: ᗯᗩᐯY curved character effect</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Features of Our Unicode Font Generator</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Powerful Font Transformations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>30+ Font Styles</strong>: Extensive collection of Unicode font transformations</li>
                  <li><strong>Real-time Preview</strong>: See your styled text instantly as you type</li>
                  <li><strong>One-Click Copy</strong>: Copy transformed text to clipboard with a single click</li>
                  <li><strong>Font Categories</strong>: Well-organized styles for easy navigation</li>
                  <li><strong>Font Search</strong>: Quickly find specific font styles</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Advanced Text Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Text Statistics</strong>: Character, word, and line counting</li>
                  <li><strong>Social Media Optimization</strong>: Character limits for different platforms</li>
                  <li><strong>Style Saving</strong>: Save your favorite text transformations</li>
                  <li><strong>Custom Combinations</strong>: Create and save custom style combinations</li>
                  <li><strong>Dark/Light Mode</strong>: Theme switching for comfortable usage</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Sharing & Export Options</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Clipboard Support</strong>: Easily copy styled text for any application</li>
                  <li><strong>QR Code Generation</strong>: Convert your styled text to scannable QR codes</li>
                  <li><strong>File Import/Export</strong>: Import text from files and export styled text</li>
                  <li><strong>Embed Code</strong>: Add this tool to your own website with simple iframe code</li>
                  <li><strong>Multiple Export Formats</strong>: Save as TXT, JSON, or HTML files</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-rose-600 dark:text-rose-400">User Experience Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Responsive Design</strong>: Works perfectly on mobile and desktop devices</li>
                  <li><strong>No Registration</strong>: Free to use without account creation</li>
                  <li><strong>No Downloads</strong>: Works entirely in your browser</li>
                  <li><strong>Visual Feedback</strong>: Clear notifications for user actions</li>
                  <li><strong>Accessibility</strong>: Designed with usability in mind</li>
                </ul>
              </div>
            </div>
            
            {/* 新增智能功能和创意工具部分 */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Smart & Creative Features</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Smart Emoji Integration</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Intelligent Emoji Insertion</strong>: Automatically suggest and add relevant emojis to your text</li>
                    <li><strong>Adjustable Emoji Density</strong>: Control how many emojis appear in your text (scale 0-5)</li>
                    <li><strong>Emoji Settings</strong>: Customize placement and style of emoji additions</li>
                    <li><strong>Context-Aware</strong>: Emojis selected based on the meaning of your text</li>
                    <li><strong>Modern Communication</strong>: Enhance your messages with expressive visuals</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">QR Code Generator</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Convert Text to QR</strong>: Turn any styled text into a scannable QR code instantly</li>
                    <li><strong>High Resolution</strong>: Generate clear, high-quality QR codes suitable for printing</li>
                    <li><strong>Download Options</strong>: Save your QR code as PNG image for use anywhere</li>
                    <li><strong>Perfect for Sharing</strong>: Ideal for links, contact info, or stylized text</li>
                    <li><strong>Customization</strong>: Configure QR code settings for optimal scanning</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Utility Text Tools</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Case Converter</strong>: Transform text to UPPERCASE, lowercase, Title Case, or Sentence case</li>
                    <li><strong>Text Operations</strong>: Reverse text, sort lines, remove duplicates, clean whitespace</li>
                    <li><strong>Simple Encryption</strong>: Apply basic Caesar cipher encryption/decryption</li>
                    <li><strong>Password Generator</strong>: Create secure random passwords in various lengths</li>
                    <li><strong>Text Formatting</strong>: Apply mirrors, parentheses, strikethroughs and other effects</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">AI-Enhanced Creativity</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>AI Text Suggestions</strong>: Get inspired with AI-generated text ideas</li>
                    <li><strong>Creative Combinations</strong>: Discover unique style combinations you might not think of</li>
                    <li><strong>Visual Customization</strong>: Add backgrounds, borders and visual styling</li>
                    <li><strong>Smart Formatting</strong>: Intelligent formatting suggestions for different platforms</li>
                    <li><strong>Random Inspiration</strong>: Generate creative starting points with a click</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Subtle CTA in content */}
            <div className="mt-6 text-right">
              <a
                href="/tools/font-generator-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                <span>Explore all font generator features</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Practical Applications of Unicode Font Generator</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Social Media Enhancement</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Instagram Bios</strong>: Create standout profile descriptions with fancy fonts</li>
                  <li><strong>Twitter/X Usernames</strong>: Make your profile name unique with stylish characters</li>
                  <li><strong>Facebook Posts</strong>: Add visual interest to status updates and comments</li>
                  <li><strong>TikTok Captions</strong>: Enhance video descriptions with eye-catching text</li>
                  <li><strong>Discord Nicknames</strong>: Stand out in servers with styled usernames</li>
                  <li><strong>LinkedIn Headlines</strong>: Create professional yet distinctive profile text</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Design & Creative Projects</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Logo Design</strong>: Create unique typography for brand identities</li>
                  <li><strong>Marketing Materials</strong>: Add visual interest to digital marketing assets</li>
                  <li><strong>Website Headers</strong>: Create distinctive headlines without custom fonts</li>
                  <li><strong>Digital Art</strong>: Incorporate interesting typography into artwork</li>
                  <li><strong>Email Signatures</strong>: Stand out with styled professional signatures</li>
                  <li><strong>Presentation Slides</strong>: Create engaging titles and headings</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Messaging & Communication</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>WhatsApp Messages</strong>: Send eye-catching texts in personal chats</li>
                  <li><strong>Email Subject Lines</strong>: Increase open rates with distinctive text</li>
                  <li><strong>Online Forums</strong>: Make your posts and usernames stand out</li>
                  <li><strong>Digital Cards</strong>: Create stylish text for e-cards and invitations</li>
                  <li><strong>Team Chat</strong>: Emphasize important messages in work communications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Educational & Fun Applications</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Teaching Typography</strong>: Demonstrate Unicode character variations</li>
                  <li><strong>Mathematical Notation</strong>: Create proper mathematical text formatting</li>
                  <li><strong>Gaming Profiles</strong>: Create distinctive usernames and in-game chat</li>
                  <li><strong>Creative Writing</strong>: Add typographical flair to stories and poems</li>
                  <li><strong>Personalized Text Gifts</strong>: Create unique text for customized items</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">How to Use the Unicode Font Generator</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Our <strong>font generator tool</strong> is designed for simplicity and ease of use. Follow these straightforward steps to transform your text:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mr-3">1</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Enter Your Text</h3>
                    <p>Type or paste your desired text in the input box. The tool will work with any length of text, though keep in mind platform-specific character limits if sharing on social media.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mr-3">2</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Browse Font Styles</h3>
                    <p>Navigate through different font style categories using the tabs or search for specific styles. You`&apos;ll see real-time previews of how your text looks in each style.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold mr-3">3</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Select Your Preferred Style</h3>
                    <p>Click on any font style to see a complete preview. Explore different options until you find the perfect style for your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold mr-3">4</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Enhance with Smart Features</h3>
                    <p>Try the Creative Tools tab to access emoji integration, formatting options, and AI-suggestions. Add emojis to your text by adjusting the emoji density slider and applying the transformation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 flex items-center justify-center font-bold mr-3">5</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Generate QR Code (Optional)</h3>
                    <p>If you want to share your styled text as a QR code, click the QR Code Generator option in the Utilities tab. Preview your QR code and download it for printing or digital sharing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mr-3">6</span>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Copy and Use</h3>
                    <p>Once satisfied with your styled text (with or without emojis), click the &quot;Copy&quot; button. The transformed text is now on your clipboard, ready to paste anywhere you need it.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-6">
                <h3 className="text-lg font-medium mb-2 text-purple-700 dark:text-purple-300">Pro Tips</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Use the emoji slider to control exactly how many emojis appear in your text</li>
                  <li>Combine font styles with emoji additions for extra expressive content</li>
                  <li>Generate QR codes for your styled text to share on printed materials</li>
                  <li>Try the utility tools for additional text transformations beyond font styling</li>
                  <li>Save your emoji-enhanced text styles for quick access in future sessions</li>
                  <li>Use AI suggestions when you need inspiration for creative text content</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Are these really fonts or just special characters?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While we call it a <strong>font generator</strong>, technically this tool converts regular text into special Unicode characters rather than changing the actual font. These special characters are part of the Unicode standard and display as stylistic variations of regular letters. The advantage is that you can paste these characters anywhere, not just in applications that support custom fonts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Will these fancy fonts work everywhere?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Most modern platforms and applications support Unicode characters, so these <strong>stylish fonts</strong> can usually be displayed normally on social media, chat apps, and web pages. However, some special fonts may appear as boxes or question marks on older systems or specific applications with limited Unicode support. Popular platforms like Instagram, Facebook, Twitter/X, TikTok, and WhatsApp generally display these fonts correctly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How does the emoji integration feature work?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our <strong>smart emoji integration</strong> feature analyzes your text and intelligently inserts relevant emojis based on the content. You can control the emoji density using a slider (from 0-5), with higher values adding more emojis. The feature is perfect for making your social media posts more engaging and expressive without manually searching for appropriate emojis. The algorithm selects emojis that match the context and sentiment of your text.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I scan the QR codes generated by this tool?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, the QR codes generated by our tool are fully functional and can be scanned by any standard QR code scanner or smartphone camera. The QR code will contain your styled text, making it perfect for sharing links, contact information, or creative messages. You can download the generated QR code as an image file to use in digital or printed materials. For best scanning results, we recommend not using extremely long text in your QR codes.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use these font styles for my business?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! The <strong>Unicode font styles</strong> generated by our tool can be used for commercial purposes, including business profiles, marketing materials, and branding. However, for official business documents or logos that need consistent rendering across all platforms, traditional font installation might be more appropriate.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Why aren`&apos;t all characters converting to the selected style?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Not all Unicode variants cover the complete character set. In particular, some special symbols, numbers, or non-Latin letters may not have corresponding variant forms in certain styles, and these characters will remain unchanged. Each <strong>font style</strong> supports a different range of characters, with letters (A-Z, a-z) having the most complete coverage.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What are the utility tools included with the font generator?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our <strong>font generator</strong> includes several useful utility tools to enhance your text experience. These include: case converters (UPPERCASE, lowercase, Title Case, Sentence case), text operations (reverse text, sort lines, remove duplicates, clean whitespace), simple encryption using Caesar cipher, random password generation, and text formatting effects like mirror text, parentheses, strikethrough, and more. These utilities complement the font styles to give you complete control over your text formatting.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Will search engines properly index content with these font styles?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Search engines may have varying degrees of success processing special Unicode characters. For content where SEO is important, it`&apos;s best to use standard text for the main content and reserve <strong>fancy text</strong> for headings, titles, or visual elements. The transformed text is technically different from regular characters, which may impact searchability.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Is this font generator free to use?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, our <strong>Unicode font generator</strong> is completely free to use with no hidden costs or premium features. You can use it as often as you need without registration or account creation. We also offer an embed code that allows you to add this tool to your own website for free.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How can I save my favorite font styles for future use?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our <strong>text generator</strong> allows you to save your favorite combinations of text and styles using the &quot;Save&quot; button next to each font style. Your saved items will appear in the &quot;Saved&quot; tab, where you can easily access them in future sessions. This feature uses your browser`&apos;s local storage, so your saved styles will remain available as long as you use the same browser and don`&apos;t clear your browser data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
