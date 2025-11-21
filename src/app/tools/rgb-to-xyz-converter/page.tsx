'use client';

import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { rgbToXyz, xyzToUv } from "@/utils/colorConverter";

type Channel = "r" | "g" | "b";

const channelMeta: Record<Channel, { label: string; accent: string }> = {
  r: { label: "Red (R)", accent: "#ef4444" },
  g: { label: "Green (G)", accent: "#22c55e" },
  b: { label: "Blue (B)", accent: "#3b82f6" },
};

const clampChannel = (value: number) => {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(255, Math.round(value)));
};

export default function RgbToXyzPage() {
  const [rgb, setRgb] = useState({ r: 64, g: 120, b: 210 });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const xyz = useMemo(() => rgbToXyz(rgb), [rgb]);
  const uv = useMemo(() => xyzToUv(xyz), [xyz]);

  const handleChannelChange = (channel: Channel, value: string) => {
    const numericValue = clampChannel(Number(value));
    setRgb((prev) => ({ ...prev, [channel]: numericValue }));
  };

  const handleCopy = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField((current) => (current === label ? null : current)), 1600);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-5xl mx-auto mt-8">
          <header className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">
              RGB → CIE XYZ
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
              RGB to XYZ Converter
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Convert device-dependent RGB values into CIE XYZ tristimulus coordinates using the sRGB D65 matrix.
              Useful for color science workflows, ICC profiles, and bridging perceptual color spaces.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">RGB Input</h2>
              <div className="space-y-6">
                {(Object.keys(channelMeta) as Channel[]).map((channel) => (
                  <div key={channel}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: channelMeta[channel].accent }} />
                        {channelMeta[channel].label}
                      </div>
                      <input
                        type="number"
                        min={0}
                        max={255}
                        value={rgb[channel]}
                        onChange={(event) => handleChannelChange(channel, event.target.value)}
                        className="w-20 text-right bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={255}
                      value={rgb[channel]}
                      onChange={(event) => handleChannelChange(channel, event.target.value)}
                      className="w-full h-2 rounded-full appearance-none bg-gray-200 dark:bg-gray-700"
                      style={{ accentColor: channelMeta[channel].accent }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Preview</p>
                <div className="mt-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div
                    className="w-24 h-24 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                    aria-label="Current RGB color preview"
                  />
                  <div className="text-right">
                    <p className="text-sm text-gray-500">RGB</p>
                    <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                      {`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">CIE XYZ</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tristimulus Values</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("xyz", `xyz(${xyz.x}, ${xyz.y}, ${xyz.z})`)}
                    className="text-sm px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-200"
                  >
                    {copiedField === "xyz" ? "Copied" : "Copy XYZ"}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "X", value: xyz.x },
                    { label: "Y", value: xyz.y },
                    { label: "Z", value: xyz.z },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                      <p className="text-xs uppercase tracking-widest text-gray-500">{item.label}</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {item.value.toFixed(3)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-2">CSS xyz() string</p>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto">
                    {`xyz(${xyz.x.toFixed(3)} ${xyz.y.toFixed(3)} ${xyz.z.toFixed(3)})`}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">CIE 1960 UCS</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Chromaticity (u, v)</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("uv", `uv(${uv.u}, ${uv.v})`)}
                    className="text-sm px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/40 dark:text-purple-200"
                  >
                    {copiedField === "uv" ? "Copied" : "Copy uv"}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "u", value: uv.u },
                    { label: "v", value: uv.v },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                      <p className="text-xs uppercase tracking-widest text-gray-500">{item.label}</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {item.value.toFixed(6)}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Values follow the CIE 1960 UCS definition (u = 4X / (X + 15Y + 3Z), v = 6Y / (X + 15Y + 3Z)).
                </p>
              </div>
            </section>
          </div>

          <section className="mt-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Conversion overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Matrix</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  We use the standard sRGB to CIE XYZ matrix with D65 white point. Each channel is gamma-linearized before
                  multiplying the transformation matrix. All numeric output is clamped to three decimals to keep the values readable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Use cases</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  XYZ values are device-independent and perfect for converting to LAB/OKLAB, calculating Delta E, or deriving
                  chromaticity coordinates for lighting calculations.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
