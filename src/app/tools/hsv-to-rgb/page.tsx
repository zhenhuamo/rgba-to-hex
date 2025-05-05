import React from 'react';
import Link from 'next/link';

const HsvToRgbPage = () => {
  return (
    // Add container and prose classes for styling
    <div className="max-w-3xl mx-auto px-4 py-8"> 
      <article className="prose prose-indigo lg:prose-lg"> {/* Apply prose */}
        <h1>HSV to RGB Color Converter</h1>

        <section> {/* Removed mb-6, prose handles margins */}
          <h2>Understanding the Color Models</h2>
          <p>
            This tool facilitates the essential conversion between two key methods of digital color representation: HSV (Hue, Saturation, Value) and RGB (Red, Green, Blue). Understanding when and how to switch between these models is crucial for achieving accurate and intended colors in digital design, web development, and graphic arts.
          </p>
          <h3>HSV (Hue, Saturation, Value)</h3>
          <p>
            HSV is often preferred for its intuitive approach, mirroring how humans perceive color attributes. It uses a cylindrical model, making it a popular choice in color pickers:
          </p>
          <ul> {/* Removed list-disc list-inside ml-4, prose handles list styling */}
            <li><strong>Hue (H):</strong> Represents the type of color (e.g., red, green, blue). It&apos;s measured in degrees from 0° to 360°.</li>
            <li><strong>Saturation (S):</strong> Represents the intensity or purity of the color, ranging from 0% (gray) to 100% (fully saturated).</li>
            <li><strong>Value (V):</strong> Represents the brightness or lightness of the color, ranging from 0% (black) to 100% (brightest). Also sometimes called Brightness (HSB).</li>
          </ul>
          <h3>RGB (Red, Green, Blue)</h3>
          <p>
            RGB is the foundational additive color model for most digital displays like monitors, cameras, and scanners. It defines colors by mixing specific intensities (0-255) of red, green, and blue light, making it the standard for screen-based media.
          </p>
        </section>

        <section>
          <h2>How the Conversion Works</h2>
          <p>
            Converting from HSV to RGB involves specific mathematical formulas that translate the intuitive HSV cylinder coordinates into the cubic RGB color space used by devices. The process accurately maps the hue angle, saturation percentage, and brightness (value) to calculate the required red, green, and blue light proportions. Our converter employs standard, reliable algorithms for this transformation.
          </p>
        </section>

        <section>
          <h2>Why Convert from HSV to RGB?</h2>
          <p>
            While an HSV color picker is excellent for selection, RGB is the lingua franca of digital displays and web technologies like CSS. Getting RGB values from an HSV input is common when you need to:
          </p>
          <ul>
            <li>Translate a color chosen from a visual tool (like a color wheel) into usable web color codes (e.g., for CSS styling, often further converted to HEX).</li>
            <li>Ensuring accurate color representation on screens.</li>
            <li>Programming applications that require RGB color values for rendering.</li>
          </ul>
        </section>

        <section>
          <h2>How to Use the Converter</h2>
          <p>
            Using this online HSV to RGB tool is simple and interactive:
          </p>
          <ol> {/* Removed list-decimal list-inside ml-4, prose handles list styling */}
            <li>Adjust the sliders or enter numerical values for Hue (0-360), Saturation (0-100), and Value (0-100).</li>
            <li>The corresponding RGB values (0-255 for each channel) will update automatically.</li>
            <li>A color preview swatch will show the resulting color.</li>
            <li>Click the &quot;Copy RGB Value&quot; button to copy the `rgb(R, G, B)` value to your clipboard.</li>
          </ol>
          {/* iframe container - prose might affect this, adjust if needed */}
           <div className="my-4 border rounded overflow-hidden not-prose"> {/* Add not-prose to exclude from typography if needed */}
             <iframe
               src="/tools/hsv-to-rgb-converter?embed=true"
               title="Interactive HSV to RGB Converter Tool"
               className="w-full h-96 block" // Ensure block display
               loading="lazy" 
             ></iframe>
           </div>
        </section>

        <section>
          <h2>Code Examples</h2>
          <p>
            If you need to implement HSV to RGB conversion in your own project, here are some basic examples:
          </p>
          
          <div> {/* Removed mb-4, prose handles margins */}
            <h3>JavaScript</h3>
            {/* Prose handles pre/code styling, removed manual classes */}
            <pre><code> 
  {`function hsvToRgb(h, s, v) {
    // Ensure inputs are in range [0, 360], [0, 100], [0, 100]
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s)) / 100;
    v = Math.max(0, Math.min(100, v)) / 100;
    if (h === 360) h = 0;

    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
    else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

    return { 
      r: Math.round((r + m) * 255), 
      g: Math.round((g + m) * 255), 
      b: Math.round((b + m) * 255) 
    };
  }`}
            </code></pre>
          </div>

          <div>
            <h3>Python</h3>
             <pre><code>
  {`import math

  def hsv_to_rgb(h, s, v):
      # Ensure inputs are in range [0, 360], [0, 100], [0, 100]
      h = max(0, min(360, h))
      s = max(0, min(100, s)) / 100.0
      v = max(0, min(100, v)) / 100.0
      if h == 360: h = 0

      c = v * s
      x = c * (1 - abs((h / 60.0) % 2 - 1))
      m = v - c
      r, g, b = 0, 0, 0

      if 0 <= h < 60: r, g, b = c, x, 0
      elif 60 <= h < 120: r, g, b = x, c, 0
      elif 120 <= h < 180: r, g, b = 0, c, x
      elif 180 <= h < 240: r, g, b = 0, x, c
      elif 240 <= h < 300: r, g, b = x, 0, c
      elif 300 <= h < 360: r, g, b = c, 0, x

      return {
          'r': round((r + m) * 255),
          'g': round((g + m) * 255),
          'b': round((b + m) * 255)
      }

  # Example usage:
  # rgb_color = hsv_to_rgb(120, 75, 50)
  # print(rgb_color) # Output: {'r': 32, 'g': 128, 'b': 32}`}
            </code></pre>
          </div>
        </section>

        <section>
          <h2>Frequently Asked Questions (FAQ)</h2>
          {/* Removed space-y-4, prose handles spacing */}
          <div> 
            <h3>What&apos;s the difference between HSV and HSL?</h3>
            <p>They are similar cylindrical models. HSV uses Value (brightness), while HSL uses Lightness. They represent the same range of colors but distribute them differently, especially affecting how pure bright colors (like primary red) are represented at maximum lightness/value.</p>
          </div>
          <div>
            <h3>Does this converter handle transparency (Alpha)?</h3>
            <p>No, this tool converts between standard HSV and opaque RGB. Transparency is typically handled as a separate Alpha channel in models like RGBA.</p>
          </div>
          <div>
            <h3>What are the valid input ranges?</h3>
            <p>Hue (H): 0 to 360 degrees. Saturation (S): 0 to 100 percent. Value (V): 0 to 100 percent.</p>
          </div>
           <div>
            <h3>Can I convert RGB back to HSV?</h3>
            <p>
              Yes, we offer a separate tool for that conversion. Visit our{' '}
              <Link href="/tools/rgb-to-hsv" className="text-indigo-600 hover:text-indigo-800 underline">
                RGB to HSV Converter
              </Link>.
            </p>
          </div>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            The HSV to RGB converter bridges the gap between intuitive color selection and the technical requirements of digital displays and web standards. Whether you&apos;re a designer translating a vision into code or a developer needing precise RGB values, this tool provides a quick and accurate solution for your color conversion needs.
          </p>
        </section>

      </article>
    </div>
  );
};

export default HsvToRgbPage; 