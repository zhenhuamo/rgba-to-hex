'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useState, useEffect } from 'react';

export default function TextToBinary() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Set iframe URL only on client side to avoid hydration mismatch
    setIframeUrl('/tools/text-to-binary-converter?embed=true');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Tool Section */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Enhanced SEO-Optimized Title Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Binary to Text Converter & Text to Binary Translator - Free Online Binary Decoder Tool
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Convert binary to text and text to binary instantly with our professional binary decoder and translator. Features binary to text converter, text to binary encoding, ASCII decoding table, character analysis, and programming code examples. Perfect binary text translator for developers, students, and anyone learning binary encoding and decoding.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Master binary to text conversion and text to binary encoding with step-by-step character decoding, ASCII table reference, and comprehensive programming examples. Supports all binary conversion scenarios including binary code to text decoding, binary to text online conversion, convert binary to text operations, and ASCII character binary representation with detailed analysis.
            </p>
          </div>

          {/* Converter Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            {iframeUrl ? (
              <iframe 
                src={iframeUrl}
                className="w-full border-none rounded-2xl shadow-xl"
                height="600"
                title="Binary to Text Converter & Text to Binary Translator Tool - Online Binary Decoder"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[600px] bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading text to binary converter...</div>
              </div>
            )}
            
            <div className="flex justify-center mt-6">
              <Link 
                href="/tools/text-to-binary-converter" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 shadow-md transition-all hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full Binary to Text & Text to Binary Converter Tool
              </Link>
            </div>
          </div>

          {/* ASCII Encoding Principles */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Binary to Text Decoding Principles & Text to Binary Conversion - ASCII Encoding Guide</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">How Binary to Text Decoding & Text to Binary Conversion Works</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-lg mb-4">
                  <div className="text-center">
                    <strong>Binary (8-bit) → ASCII Code → Character</strong><br />
                    <strong>Example: 01001000 → 72 → &apos;H&apos;</strong><br />
                    <strong>Reverse: &apos;H&apos; → 72 → 01001000</strong>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Binary to text decoding and text to binary conversion both use ASCII (American Standard Code for Information Interchange) encoding where each character corresponds to a unique number (0-127 for standard ASCII). Our binary decoder converts 8-bit binary representations back to readable text, while our text to binary converter transforms characters into their binary equivalents. This dual-direction binary text translator ensures accurate conversion for both binary to text online operations and text to binary encoding tasks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Binary to Text Example: Decode &quot;01001000 01100101 01101100 01101100 01101111&quot;</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="grid grid-cols-4 gap-2 text-xs font-bold border-b pb-2">
                      <span>Binary</span>
                      <span>ASCII</span>
                      <span>Char</span>
                      <span>Hex</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01001000</span>
                      <span>72</span>
                      <span>&apos;H&apos;</span>
                      <span>48</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01100101</span>
                      <span>101</span>
                      <span>&apos;e&apos;</span>
                      <span>65</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101100</span>
                      <span>108</span>
                      <span>&apos;l&apos;</span>
                      <span>6C</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101100</span>
                      <span>108</span>
                      <span>&apos;l&apos;</span>
                      <span>6C</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">01101111</span>
                      <span>111</span>
                      <span>&apos;o&apos;</span>
                      <span>6F</span>
                    </div>
                    <div className="border-t pt-2 mt-3 text-xs">
                      <div className="font-bold">Decoded Text Result:</div>
                      <div className="break-all text-green-600 dark:text-green-400">
                        Hello
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    This demonstrates how our binary to text decoder processes each binary chunk to convert binary to text.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">ASCII Character Categories</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Control Characters (0-31)</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Tab, Newline, Carriage Return, etc.</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Printable Characters (32-126)</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Letters, numbers, punctuation, symbols</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <div className="font-semibold">Extended ASCII (128-255)</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Special characters, accented letters</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    Our binary to text converter and text to binary encoder support all ASCII character ranges for comprehensive binary decoding and encoding operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ASCII Character Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">ASCII Character Encoding Table - Binary to Text & Text to Binary Reference Guide</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Common Printable ASCII */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Common ASCII Characters (32-95)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                    <thead>
                      <tr className="bg-blue-100 dark:bg-blue-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Char</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">ASCII</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Hex</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        [' ', '32', '00100000', '20'], ['!', '33', '00100001', '21'], ['"', '34', '00100010', '22'], ['#', '35', '00100011', '23'],
                        ['$', '36', '00100100', '24'], ['%', '37', '00100101', '25'], ['&', '38', '00100110', '26'], ['\'', '39', '00100111', '27'],
                        ['(', '40', '00101000', '28'], [')', '41', '00101001', '29'], ['*', '42', '00101010', '2A'], ['+', '43', '00101011', '2B'],
                        [',', '44', '00101100', '2C'], ['-', '45', '00101101', '2D'], ['.', '46', '00101110', '2E'], ['/', '47', '00101111', '2F'],
                        ['0', '48', '00110000', '30'], ['1', '49', '00110001', '31'], ['2', '50', '00110010', '32'], ['3', '51', '00110011', '33'],
                        ['4', '52', '00110100', '34'], ['5', '53', '00110101', '35'], ['6', '54', '00110110', '36'], ['7', '55', '00110111', '37']
                      ].map(([char, ascii, binary, hex], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center font-bold text-blue-600 dark:text-blue-400">
                            {char === ' ' ? 'SPC' : char}
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center">{ascii}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-xs font-bold text-green-600 dark:text-green-400">{binary}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-xs">{hex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Letters A-Z */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Alphabet Characters (A-Z, a-z)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                    <thead>
                      <tr className="bg-purple-100 dark:bg-purple-900">
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Char</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">ASCII</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Binary</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-semibold">Hex</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      {[
                        ['A', '65', '01000001', '41'], ['B', '66', '01000010', '42'], ['C', '67', '01000011', '43'], ['D', '68', '01000100', '44'],
                        ['E', '69', '01000101', '45'], ['F', '70', '01000110', '46'], ['G', '71', '01000111', '47'], ['H', '72', '01001000', '48'],
                        ['I', '73', '01001001', '49'], ['J', '74', '01001010', '4A'], ['K', '75', '01001011', '4B'], ['L', '76', '01001100', '4C'],
                        ['M', '77', '01001101', '4D'], ['N', '78', '01001110', '4E'], ['O', '79', '01001111', '4F'], ['P', '80', '01010000', '50'],
                        ['a', '97', '01100001', '61'], ['b', '98', '01100010', '62'], ['c', '99', '01100011', '63'], ['d', '100', '01100100', '64'],
                        ['e', '101', '01100101', '65'], ['f', '102', '01100110', '66'], ['g', '103', '01100111', '67'], ['h', '104', '01101000', '68']
                      ].map(([char, ascii, binary, hex], index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center font-bold text-purple-600 dark:text-purple-400">{char}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center">{ascii}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-xs font-bold text-green-600 dark:text-green-400">{binary}</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-center text-xs">{hex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Programming Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Binary to Text & Text to Binary Programming Examples - Convert & Decode Code Implementations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* JavaScript Example */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-.98-.85l-1.49.81zm5.24-.85c.57 1.03 1.67 1.55 2.8 1.55 1.65 0 2.68-.83 2.68-2.07 0-1.18-.68-1.86-1.93-2.51l-.42-.18c-.58-.24-.83-.4-.83-.79 0-.3.23-.53.59-.53.36 0 .58.15.8.53l1.38-.89c-.47-.82-1.33-1.33-2.18-1.33-1.35 0-2.23.86-2.23 1.99 0 1.16.68 1.84 1.66 2.42l.42.18c.6.26.94.44.94.89 0 .38-.34.66-.87.66-.6 0-1.18-.26-1.38-.81l-1.43.94z"/>
                  </svg>
                  JavaScript Binary to Text & Text to Binary Converter
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// JavaScript text to binary converter
function textToBinary(text) {
  return text
    .split('')
    .map(char => {
      return char.charCodeAt(0)
        .toString(2)
        .padStart(8, '0');
    })
    .join(' ');
}

// Usage example
const text = "Hello";
const binary = textToBinary(text);
console.log(binary);
// Output: "01001000 01100101 01101100 01101100 01101111"

// Binary to text converter
function binaryToText(binary) {
  return binary
    .split(' ')
    .map(byte => {
      return String.fromCharCode(
        parseInt(byte, 2)
      );
    })
    .join('');
}`}</code>
                </pre>
              </div>

              {/* Python Example */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                  </svg>
                  Python Binary to Text & Text to Binary Converter
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`# Python text to binary converter
def text_to_binary(text):
    """Convert text to binary representation"""
    return ' '.join(format(ord(char), '08b') for char in text)

def binary_to_text(binary):
    """Convert binary to text"""
    binary_values = binary.split()
    return ''.join(chr(int(bv, 2)) for bv in binary_values)

# Usage example
text = "Hello"
binary = text_to_binary(text)
print(f"Text: {text}")
print(f"Binary: {binary}")
# Output: Binary: 01001000 01100101 01101100 01101100 01101111

# Convert back to text
decoded_text = binary_to_text(binary)
print(f"Decoded: {decoded_text}")
# Output: Decoded: Hello

# Character analysis
def analyze_character(char):
    ascii_val = ord(char)
    binary_val = format(ascii_val, '08b')
    hex_val = format(ascii_val, '02X')
    return {
        'char': char,
        'ascii': ascii_val,
        'binary': binary_val,
        'hex': hex_val
    }`}</code>
                </pre>
              </div>

              {/* Java Example */}
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                  </svg>
                  Java Binary to Text & Text to Binary Converter
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Java text to binary converter
public class TextToBinaryConverter {
    
    public static String textToBinary(String text) {
        StringBuilder binary = new StringBuilder();
        for (char character : text.toCharArray()) {
            String binaryString = Integer.toBinaryString(character);
            // Pad with zeros to make it 8 bits
            while (binaryString.length() < 8) {
                binaryString = "0" + binaryString;
            }
            binary.append(binaryString).append(" ");
        }
        return binary.toString().trim();
    }
    
    public static String binaryToText(String binary) {
        StringBuilder text = new StringBuilder();
        String[] binaryValues = binary.split(" ");
        for (String binaryValue : binaryValues) {
            int ascii = Integer.parseInt(binaryValue, 2);
            text.append((char) ascii);
        }
        return text.toString();
    }
    
    public static void main(String[] args) {
        String text = "Hello";
        String binary = textToBinary(text);
        System.out.println("Text: " + text);
        System.out.println("Binary: " + binary);
        
        String decodedText = binaryToText(binary);
        System.out.println("Decoded: " + decodedText);
    }
}`}</code>
                </pre>
              </div>

              {/* C++ Example */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.398.543.923.69 1.525.69l8.426 4.864c.509.294 1.34.294 1.848 0l8.426-4.864c.588-.294 1.127-1.013 1.127-1.6V6.91c.003-.294-.1-.62-.266-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891 19.109 8.08 19.109 12 15.92 19.109 12 19.109zm.955-11.959v4.807l4.077-2.403z"/>
                  </svg>
                  C++ Binary to Text & Text to Binary Converter
                </h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`#include <iostream>
#include <string>
#include <bitset>
#include <sstream>

class TextToBinaryConverter {
public:
    static std::string textToBinary(const std::string& text) {
        std::string binary;
        for (char c : text) {
            std::bitset<8> bits(c);
            binary += bits.to_string() + " ";
        }
        // Remove trailing space
        if (!binary.empty()) {
            binary.pop_back();
        }
        return binary;
    }
    
    static std::string binaryToText(const std::string& binary) {
        std::string text;
        std::istringstream iss(binary);
        std::string byte;
        
        while (iss >> byte) {
            if (byte.length() == 8) {
                std::bitset<8> bits(byte);
                text += static_cast<char>(bits.to_ulong());
            }
        }
        return text;
    }
};

int main() {
    std::string text = "Hello";
    std::string binary = TextToBinaryConverter::textToBinary(text);
    
    std::cout << "Text: " << text << std::endl;
    std::cout << "Binary: " << binary << std::endl;
    
    std::string decoded = TextToBinaryConverter::binaryToText(binary);
    std::cout << "Decoded: " << decoded << std::endl;
    
    return 0;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Binary to Text Decoder & Text to Binary Converter - Common Use Cases & Applications</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Education & Learning</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Computer Science coursework</li>
                  <li>• Understanding ASCII encoding & decoding</li>
                  <li>• Binary number system learning</li>
                  <li>• Data representation concepts</li>
                  <li>• Digital communication principles</li>
                  <li>• Binary to text conversion practice</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Programming & Development</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Debugging character encoding issues</li>
                  <li>• Low-level programming projects</li>
                  <li>• Network protocol development</li>
                  <li>• Embedded systems programming</li>
                  <li>• Data serialization tasks</li>
                  <li>• Binary data analysis & decode operations</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Security & Analysis</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Cryptography applications</li>
                  <li>• Steganography projects</li>
                  <li>• Digital forensics analysis</li>
                  <li>• Malware analysis & binary decode</li>
                  <li>• Reverse engineering tasks</li>
                  <li>• Binary file to text conversion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Related Binary Converter & Decoder Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/tools/binary-to-text" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Binary to Text Decoder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert binary code to readable text instantly</p>
              </Link>
              <Link href="/tools/binary-to-decimal" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Binary to Decimal Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert binary numbers to decimal format</p>
              </Link>
              <Link href="/tools/ascii-converter" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">ASCII Text Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Text to ASCII code conversion & decoding</p>
              </Link>
              <Link href="/tools/hex-to-binary" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Hex to Binary Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert hexadecimal to binary format</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 