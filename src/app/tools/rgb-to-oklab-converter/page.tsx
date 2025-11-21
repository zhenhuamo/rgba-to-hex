'use client';

import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { rgbaToHex, rgbToOklab, oklabToCss, oklabToOklch } from "@/utils/colorConverter";

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

export default function RgbToOklabPage() {
  const [rgb, setRgb] = useState({ r: 230, g: 103, b: 70 });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const oklab = useMemo(() => rgbToOklab(rgb), [rgb]);
  const oklch = useMemo(() => oklabToOklch(oklab), [oklab]);
  const hex = useMemo(() => rgbaToHex({ ...rgb, a: 1 }), [rgb]);
  const cssString = useMemo(() => oklabToCss(oklab), [oklab]);

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-5xl mx-auto mt-8">
          <header className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-500 font-semibold">
              RGB → OKLAB
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-orange-500 to-pink-600">
              RGB to OKLAB Converter
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Convert standard RGB values into perceptually uniform OKLAB coordinates. Useful when building color systems that require
              predictable contrast steps, tone curves, or OKLCH gradients for CSS Color Level 4.
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
                        className="w-20 text-right bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Perceptual space</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">OKLAB coordinates</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("oklab", cssString)}
                    className="text-sm px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-900/40 dark:text-rose-200"
                  >
                    {copiedField === "oklab" ? "Copied" : "Copy oklab()"}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "L", value: oklab.l },
                    { label: "a", value: oklab.a },
                    { label: "b", value: oklab.b },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                      <p className="text-xs uppercase tracking-widest text-gray-500">{item.label}</p>
                      <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {item.value.toFixed(4)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-sm text-gray-500">CSS string</p>
                  <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto">{cssString}</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">OKLCH helper</p>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Lightness / Chroma / Hue</h2>
                  </div>
                  <button
                    onClick={() => handleCopy("oklch", `oklch(${oklch.l.toFixed(4)} ${oklch.c.toFixed(4)} ${oklch.h.toFixed(2)})`)}
                    className="text-sm px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-200"
                  >
                    {copiedField === "oklch" ? "Copied" : "Copy oklch()"}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-500">L</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-white">{oklch.l.toFixed(4)}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-500">C</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-white">{oklch.c.toFixed(4)}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-500">H°</p>
                    <p className="text-3xl font-semibold text-gray-900 dark:text-white">{oklch.h.toFixed(1)}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  OKLAB places equal perceptual steps along the a/b axes. OKLCH makes it easy to build gradients or palettes with
                  consistent chroma and hue rotations.
                </p>
              </div>
            </section>
          </div>

          <section className="mt-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Why OKLAB?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Perceptual lightness</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  The L value follows perceived brightness far better than HSL/HSV. That makes it ideal for typographic scales,
                  contrast-aware themes, and accessible UI components.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Modern CSS support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  CSS Color Level 4 introduces <code className="font-mono">oklab()</code> and <code className="font-mono">oklch()</code> functions, allowing native OKLAB colors in the browser.
                  Use the values above directly in stylesheets or design tokens.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
