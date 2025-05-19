'use client';

import React, { useState } from 'react';

const ColorTemperatureReference: React.FC = () => {
  const [activeTab, setActiveTab] = useState('photography');
  
  const tabs = [
    { id: 'photography', label: 'Photography/Film' },
    { id: 'lighting', label: 'Interior Lighting' },
    { id: 'display', label: 'Display Devices' },
    { id: 'science', label: 'Color Science' }
  ];
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'photography':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Color Temperature Standards in Photography and Film</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Application</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Recommended Temp. (K)</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Professional Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Daylight Film</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">5500-5600K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Standard for outdoor shooting, balanced for natural daylight</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Tungsten Film</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3200K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Studio lighting standard, matches traditional studio lights</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">ARRI Studio Lights</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3200K / 5600K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Professional film lighting with dual standards, adjustable with color filters</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Digital Cinema White Balance</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3200K / 4500K / 5600K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Preset white balance values for professional digital cinema cameras</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Portrait Studio Light</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">4000-5000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Modern LED studio light standard, optimal for skin tone reproduction</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Commercial Product Photography</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">5000-5500K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Standard lighting for accurate product color reproduction</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Color Printing Standard Light Source</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">5000K (D50)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">International standard light source for print color proofing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Film Emotional Tones</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Wide range</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Suspense/Horror: Bluish (7000K+), Romantic/Intimate: Warm (2700-3200K)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Professional Application Tips</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>For mixed lighting environments (e.g., indoor with window light), a compromise value of 4300K is recommended, or use CTO/CTB filters for correction</li>
                <li>In film-grade color grading, standard daylight footage is typically corrected to 5600K, while portraits tend toward 5000K for more flattering skin tones</li>
                <li>Professional color workflows require calibrated monitors (D65, 6500K) to ensure accurate color reproduction</li>
                <li>Digital cameras shooting in RAW format allow flexible color temperature adjustment in post-processing, while JPEG format requires precise white balance settings at capture</li>
              </ul>
            </div>
          </div>
        );
      
      case 'lighting':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Interior Lighting Color Temperature Standards and Applications</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Space Type</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Recommended Temp. (K)</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Physiological/Psychological Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Home Living/Bedroom</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">2700-3000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Promotes relaxation, comfort, and social atmosphere; supports melatonin production</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Kitchen/Dining</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3000-3500K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Balances comfort with functionality; enhances food visual appeal</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Bathroom/Makeup Area</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">4000-5000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Accurately reproduces skin tone and makeup effects; improves visual precision for detail activities</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Home Office</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">4000-5000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Increases alertness and productivity; reduces eye fatigue; lowers melatonin production</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Commercial Office Space</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">4000-5000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Enhances focus and efficiency; simulates natural daylight; maintains circadian rhythm</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Retail Store</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3000-4000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Creates a warm, inviting environment; enhances product appeal</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Art Gallery/Museum</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">3000-4000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Balances artwork preservation with viewing experience; reduces UV damage</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Medical/Laboratory</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">5000-6500K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Provides high-precision visual environment; promotes alertness; accurately presents clinical conditions</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Human Circadian Rhythm Considerations</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Daytime lighting (residential/work spaces): 4000-5000K recommended during the day to maintain circadian rhythm and improve alertness</li>
                <li>Evening transition: Gradually shift to warmer lighting below 3000K as sunset approaches to help the body prepare for rest</li>
                <li>Bedtime lighting: Below 2700K, ideally around 2000K warm light, to promote melatonin production</li>
                <li>Night auxiliary lighting: 1800K extremely warm light, minimizing blue light components to avoid disrupting sleep quality</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Modern Smart Lighting Recommendations</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Modern smart lighting systems can automatically adjust color temperature by time of day, simulating natural daylight patterns:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Morning (wake-up): Gradually transition from 2700K to 4000K</li>
                <li>Daytime (work): Maintain 4000-5000K</li>
                <li>Evening (relaxation): Gradually decrease to 3000K</li>
                <li>Bedtime (rest): 2000-2700K</li>
              </ul>
            </div>
          </div>
        );
      
      case 'display':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Display Device Color Temperature Standards</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Device Type</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Standard Temp. (K)</th>
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left">Industry Standard/Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Professional Display (D65)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">International standard for film, photography, design, and color calibration</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Print Production Monitor (D50)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">5000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Printing and publishing industry standard, matches print viewing environment</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Broadcast Television Production</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500K (Rec.709)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Television broadcasting industry standard white point, ensures consistent color reproduction</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">HDR Display</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500K (D65)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Reference white point for HDR10, Dolby Vision, and other HDR standards</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Film DI Workstation</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">International standard for digital intermediate color grading</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Consumer Computer Display</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500K (Standard Mode)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Standard color temperature for Windows/Mac OS operating systems</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Mobile Device (Night Mode)</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">2700-4000K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Reduces blue light, minimizes visual fatigue, improves night usage experience</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Gaming Display Mode</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">6500-9300K</td>
                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-600">Gaming modes often use higher color temperatures to enhance contrast and visual impact</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Display Calibration Guide</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Professional color work requires calibrating displays to D65 (6500K) and ensuring color gamut coverage meets application needs (sRGB/AdobeRGB/DCI-P3)</li>
                <li>Calibration requires professional equipment such as X-Rite i1Display or Datacolor Spyder series colorimeters</li>
                <li>Standard calibration environment requirements:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Ambient light controlled below 100 lux</li>
                    <li>Neutral gray environment (no colored wall reflections)</li>
                    <li>Ambient light with color temperature matching the display (D65 environment)</li>
                  </ul>
                </li>
                <li>Calibration frequency: monthly for professional applications, quarterly for consumer use</li>
              </ol>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Color Temperature and User Experience Considerations</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li>For extended display use, enable automatic color temperature adjustment to sync with ambient light changes</li>
                <li>Maintain 6500K standard setting during the day, gradually reducing to below 4000K after sunset</li>
                <li>Activate night mode (approximately 2700K) 2 hours before bedtime to reduce blue light suppression of melatonin secretion</li>
                <li>Temporarily disable these automatic adjustments for professional design and photography work to ensure color accuracy</li>
              </ul>
            </div>
          </div>
        );
      
      case 'science':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Scientific Principles of Color Temperature</h3>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Blackbody Radiation and Color Temperature Definition</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                The concept of color temperature originates from the theory of blackbody radiation in physics. A blackbody is an idealized object that absorbs all incident radiation and emits a specific spectrum of radiation based on its temperature. Color temperature, measured in Kelvin (K), represents the color of light emitted when a blackbody is heated to a specific temperature.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                According to Wien&apos;s displacement law, as the temperature of a blackbody increases, the peak wavelength of its radiation shifts toward shorter wavelengths, causing the color to change from red through yellow and white to blue. This is why lower color temperatures (2000-3000K) appear reddish-yellow, while higher color temperatures (6000-10000K) appear bluish.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Planckian Locus</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The Planckian locus is the path of color chromaticity coordinates that a blackbody radiator would follow in CIE color space as its temperature changes. Real light sources may not lie exactly on this locus, in which case correlated color temperature (CCT) is used, representing the temperature of the blackbody whose perceived color most closely resembles the light source.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Color Temperature and Tint</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Tint represents the degree to which a light source deviates from the Planckian locus, typically measured on the green-magenta axis. A perfect blackbody radiator has a tint of 0, while actual light sources often have some deviation. For example, fluorescent lights often have a green shift, while some LED sources may lean toward magenta.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Standard Illuminants and Color Temperature</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                The International Commission on Illumination (CIE) has defined various standard illuminants for color science research and industrial standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Standard Illuminant A</strong>: 2856K, simulates traditional tungsten lighting</li>
                <li><strong>Standard Illuminant B</strong>: 4874K, simulates noon sunlight (deprecated)</li>
                <li><strong>Standard Illuminant C</strong>: 6774K, simulates average daylight (deprecated)</li>
                <li><strong>Standard Illuminant D50</strong>: 5003K, printing industry standard, simulates horizon daylight</li>
                <li><strong>Standard Illuminant D65</strong>: 6504K, color science and digital media standard, simulates northern hemisphere noon daylight</li>
                <li><strong>Standard Illuminant D75</strong>: 7504K, simulates overcast light</li>
                <li><strong>Standard Illuminant E</strong>: Theoretical equal-energy source, with uniform energy distribution in CIE color space</li>
                <li><strong>Standard Illuminant F Series</strong>: Simulates different types of fluorescent lighting</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Color Temperature Calculation Formulas</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Mathematical conversion formulas between RGB color space and color temperature (simplified version):
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`// Kelvin to RGB (simplified algorithm)
function kelvinToRGB(kelvin) {
  // Limit color temperature to valid range
  kelvin = Math.max(1000, Math.min(40000, kelvin));
  
  let r, g, b;
  
  // Red channel
  if (kelvin <= 6600) {
    r = 255;
  } else {
    r = kelvin - 6000;
    r = 329.698727446 * Math.pow(r, -0.1332047592);
    r = Math.max(0, Math.min(255, r));
  }
  
  // Green channel
  if (kelvin <= 6600) {
    g = kelvin;
    g = 99.4708025861 * Math.log(g) - 161.1195681661;
  } else {
    g = kelvin - 6000;
    g = 288.1221695283 * Math.pow(g, -0.0755148492);
  }
  g = Math.max(0, Math.min(255, g));
  
  // Blue channel
  if (kelvin >= 6600) {
    b = 255;
  } else if (kelvin <= 1900) {
    b = 0;
  } else {
    b = kelvin - 1000;
    b = 138.5177312231 * Math.log(b) - 305.0447927307;
    b = Math.max(0, Math.min(255, b));
  }
  
  return [Math.round(r), Math.round(g), Math.round(b)];
}`}
              </pre>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                Note: This algorithm provides approximate values. Professional applications recommend using CIE color spaces and color management systems for precise conversions.
              </p>
            </div>
            
            <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              <p>* Color temperature science is a complex field involving interdisciplinary connections between physics, visual psychology, and color science.</p>
              <p>* Professional color management systems typically use ICC color profiles rather than simple color temperature adjustments to ensure color consistency between devices.</p>
            </div>
          </div>
        );
        
      default:
        return <div>Please select a tab to view related content</div>;
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Professional Color Temperature Reference</h2>
      
      <div className="mb-6">
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {renderTabContent()}
      
      <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">References</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>International Commission on Illumination (CIE). (2018). <em>Colorimetry – Part 1: CIE standard colorimetric observers.</em> (ISO/CIE 11664-1:2019)</li>
          <li>Wyszecki, G., & Stiles, W. S. (2000). <em>Color Science: Concepts and Methods, Quantitative Data and Formulae.</em> Wiley-Interscience.</li>
          <li>American Society of Cinematographers. (2021). <em>ASC Manual, 11th Edition.</em> ASC Press.</li>
          <li>International Telecommunication Union. (2015). <em>BT.709 : Parameter values for the HDTV standards for production and international programme exchange.</em> ITU-R.</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorTemperatureReference; 