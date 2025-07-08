import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Binary to Text Converter & Binary Decoder - Convert Binary Code to English Text | Free Online Tool',
  description: 'Convert binary to text instantly with our free binary decoder and converter. Decode binary code to English, translate binary language to readable text, and convert binary numbers online.',
  keywords: 'binary to text converter, convert binary to text, binary decoder, decode binary code, binary language translator, binary code translator to text, binary to English translator, binary code converter, from binary to text',
  openGraph: {
    title: 'Binary to Text Converter & Binary Decoder - Convert Binary Code to English',
    description: 'Free online binary to text converter and decoder. Convert binary code to readable English text instantly with our binary language translator.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rgba-to-hex.com/tools/binary-to-text'
  }
};

export default function BinaryToText() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 mb-6">
            Binary to Text Converter & Binary Decoder - Convert Binary Code to Text
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Convert binary to text and decode binary code to readable English text instantly with our free binary decoder and converter. 
            Translate binary language, decode binary numbers, and convert binary code to text with accurate results using our advanced binary language translator.
          </p>
        </div>

        {/* Embedded Converter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Binary Code to Text Converter & Binary Decoder Tool</h2>
              <p className="text-green-100">Enter binary code and get instant English text translation with our binary decoder</p>
            </div>
            
            <div className="p-8">
              <iframe 
                src="/tools/binary-to-text-converter?embed=true" 
                className="w-full border-0 rounded-lg"
                style={{ minHeight: '600px' }}
                title="Binary to Text Converter & Binary Decoder Tool - Convert Binary Code to English Text"
              />
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 border-t">
              <div className="flex justify-center">
                <a
                  href="/tools/binary-to-text-converter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Open Full Binary Decoder & Converter Tool →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
              How Binary to Text Conversion Works - Binary Decoder & Convert Binary Code Guide
            </h2>
            
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Binary Code Decoding Process - Convert Binary to Text</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Binary Code → Decimal (ASCII) → Character</strong><br />
                    <strong>Example: 01001000 → 72 → &apos;H&apos;</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Our binary to text converter and binary decoder reads binary code in 8-bit chunks (bytes), converts each chunk to its decimal ASCII value, 
                  then translates that ASCII code to the corresponding English character. This process effectively decodes binary language into readable text using our advanced binary language translator to convert binary to text seamlessly.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Binary to Text Example: &quot;Hello&quot; Decoded</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="grid grid-cols-3 gap-2 text-xs font-bold border-b pb-2">
                      <span>Binary Code</span>
                      <span>ASCII</span>
                      <span>Character</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01001000</span>
                      <span>72</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">&apos;H&apos;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01100101</span>
                      <span>101</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">&apos;e&apos;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101100</span>
                      <span>108</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">&apos;l&apos;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101100</span>
                      <span>108</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">&apos;l&apos;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101111</span>
                      <span>111</span>
                      <span className="text-green-600 dark:text-green-400 font-bold">&apos;o&apos;</span>
                    </div>
                    <div className="border-t pt-2 mt-3 text-xs">
                      <div className="font-bold">Original Binary:</div>
                      <div className="break-all text-blue-600 dark:text-blue-400 mb-2">
                        01001000 01100101 01101100 01101100 01101111
                      </div>
                      <div className="font-bold">Decoded Text:</div>
                      <div className="text-green-600 dark:text-green-400 font-bold text-lg">
                        Hello
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    This shows how our binary code decoder and converter processes each 8-bit binary chunk to decode the message and convert binary to text.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Binary Code Formats Supported by Our Binary Decoder</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Spaced Binary</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">01001000 01100101 01101100</div>
                      <div className="text-xs text-gray-500">8-bit chunks separated by spaces</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Continuous Binary</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">010010000110010101101100</div>
                      <div className="text-xs text-gray-500">24-bit continuous string (auto-grouped)</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Mixed Separators</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">01001000,01100101-01101100</div>
                      <div className="text-xs text-gray-500">Multiple separators supported</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Our binary to text converter and binary decoder automatically handles various binary code formats to convert binary to text efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Examples */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Binary to Text Programming Examples - Convert Binary Code & Binary Decoder Implementation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* JavaScript Example */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-.98-.85l-1.49.81zm5.24-.85c.57 1.03 1.67 1.55 2.8 1.55 1.65 0 2.68-.83 2.68-2.07 0-1.18-.68-1.86-1.93-2.51l-.42-.18c-.58-.24-.83-.4-.83-.79 0-.3.23-.53.59-.53.36 0 .58.15.8.53l1.38-.89c-.47-.82-1.33-1.33-2.18-1.33-1.35 0-2.23.86-2.23 1.99 0 1.16.68 1.84 1.66 2.42l.42.18c.6.26.94.44.94.89 0 .38-.34.66-.87.66-.6 0-1.18-.26-1.38-.81l-1.43.94z"/>
                  </svg>
                  JavaScript Binary Decoder - Convert Binary to Text
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// JavaScript binary to text decoder
function binaryToText(binary) {
  // Split by whitespace and filter valid chunks
  return binary
    .trim()
    .split(/[\s,.-]+/)
    .filter(chunk => chunk.length === 8)
    .map(binaryByte => {
      const decimal = parseInt(binaryByte, 2);
      return String.fromCharCode(decimal);
    })
    .join('');
}

// Usage example - decode binary to English
const binaryCode = "01001000 01100101 01101100 01101100 01101111";
const decodedText = binaryToText(binaryCode);
console.log(decodedText); 
// Output: "Hello"

// Smart binary parsing function
function smartBinaryToText(input) {
  // Remove all non-binary characters except separators
  const cleaned = input.replace(/[^01\s,.-]/g, '');
  
  // Auto-group if continuous string
  if (cleaned.includes(' ') || cleaned.includes(',')) {
    return binaryToText(cleaned);
  } else {
    // Group into 8-bit chunks
    const grouped = cleaned.match(/.{1,8}/g)?.join(' ') || '';
    return binaryToText(grouped);
  }
}`}</code>
                </pre>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                  These programming examples show how to implement a binary to text converter and binary decoder to convert binary code to text in different languages. 
                  Each example demonstrates the fundamental process of decoding binary language into readable text using ASCII character mapping.
                </p>
              </div>

              {/* Python Example */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                  </svg>
                  Python Binary Decoder - Convert Binary to Text
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`# Python binary to text decoder
import re

def binary_to_text(binary_string):
    """Decode binary code to English text"""
    # Clean and split binary string
    binary_clean = re.sub(r'[^01\s,.-]', '', binary_string)
    
    # Split by various separators
    binary_chunks = re.split(r'[\s,.-]+', binary_clean.strip())
    
    # Filter valid 8-bit chunks
    valid_chunks = [chunk for chunk in binary_chunks if len(chunk) == 8]
    
    # Convert each binary chunk to character
    text = ''
    for chunk in valid_chunks:
        try:
            decimal_value = int(chunk, 2)
            if 0 <= decimal_value <= 127:  # Valid ASCII range
                text += chr(decimal_value)
        except ValueError:
            continue
    
    return text

def smart_binary_decode(binary_input):
    """Smart binary decoder with auto-grouping"""
    # Remove invalid characters
    clean = re.sub(r'[^01\s,.-]', '', binary_input)
    
    # Check if already grouped
    if re.search(r'[\s,.-]', clean):
        return binary_to_text(clean)
    
    # Auto-group continuous string into 8-bit chunks
    grouped = ' '.join([clean[i:i+8] for i in range(0, len(clean), 8)])
    return binary_to_text(grouped)

# Usage examples
binary_code = "01001000 01100101 01101100 01101100 01101111"
decoded = binary_to_text(binary_code)
print(f"Decoded: {decoded}")  # Output: "Hello"

# Continuous binary
continuous = "0100100001100101011011000110110001101111"
decoded_smart = smart_binary_decode(continuous)
print(f"Smart decoded: {decoded_smart}")  # Output: "Hello"`}</code>
                </pre>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                  These programming examples show how to implement a binary to text converter and binary decoder to convert binary code to text in different languages. 
                  Each example demonstrates the fundamental process of decoding binary language into readable text using ASCII character mapping.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Binary Decoder Applications - Convert Binary to Text Use Cases & Binary Language Translation
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Data Analysis & Binary Decoding",
                  desc: "Decode binary data files, convert binary logs to text, and analyze binary-encoded information using our binary decoder for data processing tasks."
                },
                {
                  icon: "🔍",
                  title: "Security Research & Binary Analysis", 
                  desc: "Convert binary code to text for security analysis, decode binary malware samples, and translate binary communications using advanced binary language decoder tools."
                },
                {
                  icon: "💻",
                  title: "Programming & Software Development",
                  desc: "Debug binary outputs, convert binary configuration files to text, decode binary protocol messages, and translate binary data structures for software development."
                },
                {
                  icon: "🎓",
                  title: "Education & Binary Learning",
                  desc: "Learn how to convert binary to text, understand binary decoding principles, practice binary language translation, and master binary-to-text conversion techniques."
                },
                {
                  icon: "📱",
                  title: "Digital Communications & Binary Translation",
                  desc: "Decode binary messages, convert binary communications to text, translate binary-encoded data streams, and analyze digital protocol binary language."
                },
                {
                  icon: "🔧",
                  title: "System Administration & Binary Processing",
                  desc: "Convert binary log files to text, decode binary system outputs, translate binary configuration data, and process binary information for system management."
                }
              ].map((item, index) => (
                <div key={index} className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Related Binary Tools - Complete Binary Decoder & Converter Suite
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/tools/text-to-binary" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Text to Binary Converter</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Convert English text to binary code and encode text to binary language using our reverse binary converter tool.</p>
              </a>

              <a href="/tools/base64-encoder" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Base64 Encoder/Decoder</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Encode and decode Base64 data, another essential encoding format commonly used alongside binary conversion.</p>
              </a>

              <a href="/tools/ascii-table" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">ASCII Table Reference</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Complete ASCII character table showing decimal, binary, and hexadecimal values for understanding binary to text conversion.</p>
              </a>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
              Binary to Text Converter Features - Advanced Binary Decoder & Code Translation Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
                  🚀 Instant Binary Decoding & Conversion
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Convert binary to text instantly with our high-speed binary decoder. No delays - get immediate results when you decode binary code to English text using our optimized binary language translator.
                </p>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-teal-800 dark:text-teal-200">
                  📱 Smart Binary Format Detection
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Our binary decoder automatically detects different binary code formats (spaced, continuous, or mixed separators) and converts binary to text accordingly without manual format selection.
                </p>
              </div>
              
              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-pink-800 dark:text-pink-200">
                  🔒 Privacy-First Binary Processing
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  All binary to text conversion happens locally in your browser. Your binary code never leaves your device when using our binary decoder to convert binary to text, ensuring complete data privacy.
                </p>
              </div>
              
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-emerald-800 dark:text-emerald-200">
                  📋 Easy Copy & Binary Analysis Tools
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Quickly copy decoded text results, view detailed character analysis, examine binary chunks, and utilize comprehensive tools to analyze how our binary decoder converts binary to text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 