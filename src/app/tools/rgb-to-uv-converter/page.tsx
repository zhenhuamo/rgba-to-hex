'use client';

import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { rgbaToHex, rgbToXyz, rgbToUv } from "@/utils/colorConverter";

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

export default function RgbToUvPage() {
  const [rgb, setRgb] = useState({ r: 95, g: 180, b: 255 });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const xyz = useMemo(() => rgbToXyz(rgb), [rgb]);
  const uv = useMemo(() => rgbToUv(rgb), [rgb]);
  const hex = useMemo(() => rgbaToHex({ ...rgb, a: 1 }), [rgb]);

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

  const luminance = xyz.y;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-5xl mx-auto mt-8">
          <header className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500 font-semibold">
              RGB → CIE 1960 UCS
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
              RGB to (u, v) Chromaticity Converter
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Instant conversion from RGB into CIE XYZ and chromaticity coordinates (u, v). Ideal for color temperature analysis,
              lighting workflows, and plotting color gamuts within UCS diagrams.
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
                        className="w-20 text-right bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    <p className="text-sm text-gray-500">HEX</p>
                    <p className="font-mono text-lg text-gray-900 dark:text-gray-100">{hex}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">CIE 1960 UCS</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Chromaticity (u, v)</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("uv", `uv(${uv.u}, ${uv.v})`)}
                    className="text-sm px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 dark:bg-sky-900/30 dark:text-sky-200"
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
                  (u, v) points describe chromaticity regardless of luminance, making them perfect for plotting lighting gamuts or locating
                  correlated color temperature lines.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Tristimulus support</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">XYZ snapshot</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("xyz", `xyz(${xyz.x}, ${xyz.y}, ${xyz.z})`)}
                    className="text-sm px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-200"
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
                  <p className="text-sm text-gray-500 flex items-center justify-between">
                    <span>Relative luminance (Y)</span>
                    <span className="font-mono text-base text-gray-900 dark:text-gray-100">{luminance.toFixed(3)}</span>
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                      style={{ width: `${Math.min(100, Math.max(0, luminance))}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">How to use the values</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Plot chromaticity</h3>
                <p>Feed (u, v) into UCS diagrams to visualize gamut coverage, LED bins, or daylight loci.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Convert to temperature</h3>
                <p>Use the coordinates to approximate correlated color temperature (CCT) or Duv offsets in color research.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Chain conversions</h3>
                <p>XYZ values allow you to continue into LAB/OKLAB, compute Delta E, or match ICC profiles.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
