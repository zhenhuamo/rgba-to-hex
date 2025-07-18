import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function InvertImageEnLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-6">
            Invert Image Online - Professional Image Color Inverter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Transform your images with our powerful tool to invert image online. Easily invert image colors, create stunning negative effects,
            and apply professional color inversions without downloading any software. Our free online image inverter supports multiple inversion modes
            including negative effects, brightness inversion, and custom color channel manipulation.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Whether you need to invert image online for artistic projects, create inverted images for design work, or simply experiment with
            visual effects, our online image inversion tool provides professional-grade results instantly in your browser.
          </p>
          
          {/* Language Links */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md font-medium">English</span>
            <Link href="/tools/es/invertir-imagen" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">Español</Link>
            <Link href="/tools/pt/inverter-imagem" className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition">Português</Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/tools/en/invert-image/tool"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-300/30 text-lg font-semibold"
            >
              Start Inverting Images →
            </Link>
            <Link
              href="/tools/en/invert-image/tool"
              target="_blank"
              className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg text-lg font-semibold"
            >
              Open Tool in New Window ↗
            </Link>
          </div>

          {/* Tool Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
              Try the Tool Below
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
              <iframe
                src="/tools/en/invert-image/tool"
                className="w-full h-full border-0"
                title="Image Inverter Tool"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Advanced Modes to Invert Image Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our online image inverter offers multiple professional modes to invert image online: negative effect for classic film-style inversions,
              brightness inversion to maintain color relationships, and custom color channel inversion for precise control over red, green, and blue channels.
              Perfect for creating inverted images with professional quality results when you invert image online.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Secure Way to Invert Image Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our secure platform to invert image online processes everything locally in your browser. When you invert image online using our tool,
              your original images never leave your device or get uploaded to any server. This ensures complete privacy and security
              for your personal photos and professional design work when you invert image online.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Instant Image Color Inversion</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience lightning-fast image processing with our optimized image color inverter. Invert colors of image instantly 
              without any waiting time or upload delays. Our tool can handle high-resolution images and process multiple inversions 
              quickly, making it perfect for batch processing and professional workflows.
            </p>
          </div>
        </div>

        {/* What is Image Inversion */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            What is Image Inversion and How Does it Work?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Understanding Image Color Inversion</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Image inversion, also known as color inversion or negative effect, is a digital image processing technique that reverses the colors in an image. 
                When you invert image colors, each pixel&apos;s color value is mathematically transformed to its opposite on the color spectrum. For example,
                black becomes white, red becomes cyan, and blue becomes yellow.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our image color inverter uses advanced algorithms to process RGB color channels individually, allowing for precise control over the inversion process. 
                You can choose to invert all colors for a complete negative effect, or selectively invert specific color channels for creative artistic effects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Professional Applications</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Photography:</strong> Create artistic negative effects and experimental photo manipulations for portfolio work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Graphic Design:</strong> Generate unique visual effects for logos, banners, and creative marketing materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Web Development:</strong> Create hover effects, dark mode variations, and interactive UI elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Print Media:</strong> Prepare images for special printing techniques and artistic publications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Education:</strong> Demonstrate color theory concepts and digital image processing principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            How to Use Our Online Image Inverter Tool
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Follow these simple steps to invert image online and create professional negative effects with our free tool to invert image online.
            No software installation required - everything works directly in your web browser when you invert image online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Upload Your Image</h3>
              <p className="text-gray-600 dark:text-gray-300">Choose any image file (JPG, PNG, GIF, WebP, BMP) from your device. Our image inverter supports all common formats and maintains original quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Select Inversion Mode</h3>
              <p className="text-gray-600 dark:text-gray-300">Choose from multiple inversion modes: negative effect, brightness inversion, or custom color channel inversion. Adjust intensity and advanced settings as needed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Invert Colors Instantly</h3>
              <p className="text-gray-600 dark:text-gray-300">Click the &quot;Invert Image&quot; button to apply color inversion instantly. Watch as your image transforms with professional-quality results in real-time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Download Inverted Image</h3>
              <p className="text-gray-600 dark:text-gray-300">Save your professionally inverted image to your device in high quality. The processed image maintains original resolution and supports transparency.</p>
            </div>
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Advanced Image Inverter Features for Professional Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Precision Color Channel Control</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our advanced image color inverter allows you to invert colors of image with unprecedented precision. Unlike basic tools that only offer simple negative effects,
                our professional image inverter provides individual RGB channel control. You can selectively invert image colors by choosing specific color channels -
                red, green, or blue - to create unique artistic effects and precise color manipulations that aren&apos;t possible with standard inversion tools.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Individual red, green, and blue channel inversion control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Adjustable inversion intensity from 0% to 100%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Real-time preview of inverted image results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Transparency preservation for PNG images</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Professional Inversion Modes</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Negative Effect Mode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Classic photographic negative effect that inverts all color channels simultaneously. Perfect for creating traditional film-style negative images
                    and artistic photography effects. This mode is ideal when you need to invert image colors completely for dramatic visual impact.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Brightness Inversion Mode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced brightness inversion that maintains color relationships while inverting luminosity values. This sophisticated approach to invert colors image
                    preserves the natural color harmony while creating unique visual effects perfect for artistic and design applications.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Custom Channel Inversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Professional-grade selective color channel inversion for precise color manipulation. Choose exactly which color channels to invert - red, green, blue,
                    or any combination. This advanced feature allows you to create complex color effects and achieve specific artistic visions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases and Applications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            When and Why to Invert Image Colors: Professional Use Cases
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Creative and Artistic Applications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Photography and Visual Arts</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Professional photographers use our image inverter to create striking negative effects, experimental art pieces, and unique portfolio work.
                    Invert image colors to transform ordinary photos into extraordinary artistic statements. Perfect for creating dramatic portraits,
                    surreal landscapes, and abstract visual compositions.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Digital Art and Illustration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Digital artists leverage our advanced image color inverter to explore color relationships, create concept art variations, and develop unique visual styles.
                    Use selective channel inversion to achieve specific color palettes and artistic effects that would be impossible to create manually.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Social Media Content Creation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Content creators use our online image inverter to produce eye-catching social media posts, Instagram stories, and viral content.
                    Inverted images stand out in social feeds and create memorable visual impact that increases engagement and shares.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Professional and Technical Applications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Graphic Design and Branding</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Graphic designers utilize our image color inverter for logo variations, brand color exploration, and creating alternative design concepts.
                    Invert colors of image to test how designs work in different color schemes and create dark mode versions of visual elements.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Web Development and UI Design</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Web developers and UI designers use our tool to create hover effects, dark theme variations, and interactive visual elements.
                    Our image inverter helps create consistent dark mode experiences and dynamic user interface components.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Document Processing and Scanning</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Process scanned documents, negatives, and technical drawings by inverting image colors to improve readability and contrast.
                    Our tool is perfect for converting negative scans to positive images and enhancing document visibility.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Educational and Research Applications</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Educators and researchers use our image color inverter to demonstrate color theory principles, create visual aids, and analyze image data.
                    Perfect for teaching digital image processing concepts and color science fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison with Other Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Why Choose Our Image Inverter Over Other Tools?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-purple-200 dark:border-purple-700">
                  <th className="text-left p-4 font-semibold text-gray-800 dark:text-white">Feature</th>
                  <th className="text-center p-4 font-semibold text-purple-700 dark:text-purple-300">Our Image Inverter</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Basic Online Tools</th>
                  <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Desktop Software</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Individual Channel Control</td>
                  <td className="p-4 text-center text-green-600">✓ Advanced</td>
                  <td className="p-4 text-center text-red-600">✗ Not Available</td>
                  <td className="p-4 text-center text-yellow-600">~ Limited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">No Software Installation</td>
                  <td className="p-4 text-center text-green-600">✓ Browser-Based</td>
                  <td className="p-4 text-center text-green-600">✓ Online</td>
                  <td className="p-4 text-center text-red-600">✗ Requires Install</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Privacy & Security</td>
                  <td className="p-4 text-center text-green-600">✓ Local Processing</td>
                  <td className="p-4 text-center text-red-600">✗ Server Upload</td>
                  <td className="p-4 text-center text-green-600">✓ Local</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Multiple Inversion Modes</td>
                  <td className="p-4 text-center text-green-600">✓ 4+ Modes</td>
                  <td className="p-4 text-center text-red-600">✗ Basic Only</td>
                  <td className="p-4 text-center text-yellow-600">~ Some</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-800 dark:text-white">Real-time Preview</td>
                  <td className="p-4 text-center text-green-600">✓ Instant</td>
                  <td className="p-4 text-center text-yellow-600">~ Slow</td>
                  <td className="p-4 text-center text-green-600">✓ Fast</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-800 dark:text-white">Cost</td>
                  <td className="p-4 text-center text-green-600">✓ Free Forever</td>
                  <td className="p-4 text-center text-yellow-600">~ Limited Free</td>
                  <td className="p-4 text-center text-red-600">✗ Paid License</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-100 dark:border-purple-900">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8 text-center">
            Frequently Asked Questions About Image Color Inversion
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                What does it mean to invert image colors and how does it work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To invert image colors means to reverse each pixel&apos;s color values to their mathematical opposite on the color spectrum. When you invert colors of image,
                black pixels become white, red becomes cyan, green becomes magenta, and blue becomes yellow. This process creates a negative effect similar to traditional
                film photography negatives. Our image color inverter performs this transformation digitally using advanced algorithms that process RGB color channels individually,
                allowing you to create inverted images with precise control over the inversion process. The mathematical formula involves subtracting each color value from 255
                (the maximum RGB value), effectively flipping the color spectrum.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Is this online image inverter completely free to use?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, our online image color inverter is 100% free to use for both personal and commercial projects. You can invert image colors unlimited times
                without any hidden fees, watermarks, subscription requirements, or usage restrictions. Whether you&apos;re a professional designer, photographer, student, or hobbyist,
                you can use our image inverter tool as much as you need without any cost. We believe in providing accessible, high-quality image processing tools to everyone,
                which is why our advanced features like individual channel control and multiple inversion modes are all included at no charge.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                What image formats does the image color inverter support?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our online image inverter supports all major image formats including JPG, JPEG, PNG, GIF, WebP, and BMP files. When you invert image colors,
                the tool automatically preserves transparency in PNG files and maintains the original image quality throughout the color inversion process.
                You can upload images up to 10MB in size for processing. The tool handles both RGB and RGBA color spaces, ensuring that transparent backgrounds
                and alpha channels are properly maintained in the inverted image output. For best results, we recommend using PNG format for images with transparency
                and JPG for photographs without transparency requirements.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                How is this different from simply applying a negative filter in photo editing software?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                While basic negative filters in photo editing software only offer simple color inversion, our advanced image color inverter provides multiple sophisticated
                inversion modes and precise control options. Unlike standard negative filters, our tool offers individual RGB channel control, adjustable inversion intensity,
                brightness-preserving inversion modes, and real-time preview capabilities. You can selectively invert colors of image by choosing specific color channels,
                create partial inversions with custom intensity levels, and maintain color relationships while inverting luminosity. This level of control allows for
                creative effects and professional results that aren&apos;t possible with basic negative filters.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Can I invert image online on mobile devices and tablets?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! Our tool to invert image online is fully responsive and optimized for mobile devices, tablets, and desktop computers. You can invert image online seamlessly
                in mobile browsers including Safari on iOS, Chrome on Android, and other mobile browsers. You can upload images from your device&apos;s camera roll,
                apply inversion effects, and download the results directly to your mobile device. The touch-friendly interface makes it easy to adjust settings
                and preview results on smaller screens when you invert image online. Since all processing happens locally in your browser, you don&apos;t need to worry about slow upload speeds
                or data usage when you invert image online on mobile networks.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Is my image data secure when using this online image color inverter?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, your image data is completely secure and private. Our image inverter processes everything locally in your web browser using client-side JavaScript.
                When you invert image colors, your original images never leave your device or get uploaded to any server. This means your personal photos,
                confidential documents, or proprietary design work remain completely private. The entire color inversion process happens on your device,
                ensuring maximum security and privacy. This approach also means faster processing times and no dependency on internet connection speed for the actual image processing.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                What&apos;s the difference between negative effect and brightness inversion modes?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The negative effect mode performs a complete color inversion by reversing all RGB color channels simultaneously, creating a traditional photographic negative appearance.
                This mode inverts colors of image by subtracting each color value from 255, resulting in black becoming white, red becoming cyan, etc.
                Brightness inversion mode, on the other hand, is more sophisticated - it inverts the luminosity (brightness) values while attempting to preserve
                the natural color relationships and hue information. This creates unique artistic effects where the image appears inverted but maintains more natural color harmony.
                Brightness inversion is particularly useful for creating surreal effects while keeping the image visually appealing and less jarring than traditional negative effects.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Can I batch process multiple images or invert colors of multiple images at once?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, our image color inverter is designed for single-image processing to ensure optimal performance and user experience. However, you can quickly process
                multiple images by using the &quot;Change Image&quot; button to switch between different images while maintaining your preferred inversion settings.
                This approach allows you to apply the same inversion effects to multiple images efficiently. For users who frequently need to invert colors of image
                in large quantities, we recommend bookmarking the tool and using the same browser session to maintain your custom settings across multiple image processing sessions.
                We&apos;re considering adding batch processing capabilities in future updates based on user feedback and demand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
