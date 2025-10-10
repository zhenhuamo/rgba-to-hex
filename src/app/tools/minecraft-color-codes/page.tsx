'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
// Note: metadata is defined in layout.tsx (this file is a client component)
import Navigation from '@/components/Navigation';
import { copyToClipboard } from '@/utils/clipboard';

type LegacyColor = {
  code: string; // 0-9, a-f
  name: string; // Minecraft named color
  hex: string;  // Web hex for preview
};

type FormatCode = {
  code: string; // k,l,m,n,o,r
  name: string;
  previewClass?: string; // Tailwind preview class
  note?: string;
};

// Official-ish palette used by most resources for preview
const LEGACY_COLORS: LegacyColor[] = [
  { code: '0', name: 'Black',         hex: '#000000' },
  { code: '1', name: 'Dark Blue',     hex: '#0000AA' },
  { code: '2', name: 'Dark Green',    hex: '#00AA00' },
  { code: '3', name: 'Dark Aqua',     hex: '#00AAAA' },
  { code: '4', name: 'Dark Red',      hex: '#AA0000' },
  { code: '5', name: 'Dark Purple',   hex: '#AA00AA' },
  { code: '6', name: 'Gold',          hex: '#FFAA00' },
  { code: '7', name: 'Gray',          hex: '#AAAAAA' },
  { code: '8', name: 'Dark Gray',     hex: '#555555' },
  { code: '9', name: 'Blue',          hex: '#5555FF' },
  { code: 'a', name: 'Green',         hex: '#55FF55' },
  { code: 'b', name: 'Aqua',          hex: '#55FFFF' },
  { code: 'c', name: 'Red',           hex: '#FF5555' },
  { code: 'd', name: 'Light Purple',  hex: '#FF55FF' },
  { code: 'e', name: 'Yellow',        hex: '#FFFF55' },
  { code: 'f', name: 'White',         hex: '#FFFFFF' },
];

const FORMAT_CODES: FormatCode[] = [
  { code: 'k', name: 'Obfuscated',  note: 'Randomized “magic” text effect (client-side).', previewClass: 'animate-pulse' },
  { code: 'l', name: 'Bold',        previewClass: 'font-bold' },
  { code: 'm', name: 'Strikethrough', previewClass: 'line-through' },
  { code: 'n', name: 'Underline',   previewClass: 'underline' },
  { code: 'o', name: 'Italic',      previewClass: 'italic' },
  { code: 'r', name: 'Reset',       note: 'Resets color and styles.' },
];

export default function MinecraftColorCodes() {
  const [prefix, setPrefix] = useState<'§' | '&'>('§');
  const [showEmbed, setShowEmbed] = useState(false);
  const [builderText, setBuilderText] = useState('Hello Minecraft');
  const [builderUseNamed, setBuilderUseNamed] = useState(true);
  const [builderNamed, setBuilderNamed] = useState<LegacyColor['name']>('Gold');
  const [builderHex, setBuilderHex] = useState('#FFAA00');
  const [builderBold, setBuilderBold] = useState(false);
  const [builderItalic, setBuilderItalic] = useState(false);
  const [builderUnderline, setBuilderUnderline] = useState(false);
  const [builderStrikethrough, setBuilderStrikethrough] = useState(false);
  const [builderObfuscated, setBuilderObfuscated] = useState(false);

  // Minimal embed mode: hide Navigation and heavy sections
  const [isEmbed, setIsEmbed] = useState(false);
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      setIsEmbed(url.searchParams.get('embed') === 'true');
    } catch {}
  }, []);

  // Sync builder color when named is toggled
  useEffect(() => {
    if (builderUseNamed) {
      const c = LEGACY_COLORS.find((x) => x.name === builderNamed) || LEGACY_COLORS[6];
      setBuilderHex(c.hex);
    }
  }, [builderUseNamed, builderNamed]);

  const jsonComponent = useMemo(() => {
    const colorValue = builderUseNamed
      ? (LEGACY_COLORS.find((c) => c.name === builderNamed)?.name || 'Gold').toLowerCase().replace(/\s+/g, '_')
      : builderHex;
    const obj: Record<string, unknown> = { text: builderText, color: colorValue };
    if (builderBold) obj.bold = true;
    if (builderItalic) obj.italic = true;
    if (builderUnderline) obj.underlined = true;
    if (builderStrikethrough) obj.strikethrough = true;
    if (builderObfuscated) obj.obfuscated = true;
    return JSON.stringify(obj, null, 2);
  }, [builderText, builderUseNamed, builderNamed, builderHex, builderBold, builderItalic, builderUnderline, builderStrikethrough, builderObfuscated]);

  const tellrawCommand = useMemo(() => `/tellraw @a ${jsonComponent}`, [jsonComponent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-200/20 to-transparent dark:from-green-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-200/20 to-transparent dark:from-teal-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {!isEmbed && <Navigation />}

        {/* Structured data for SEO (moved to layout or can be added later if needed) */}

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <Image src="/palette.svg" alt="Minecraft Color Codes" width={40} height={40} priority className="relative z-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-gradient">
                Minecraft Color Codes & Formatter
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Use this free <strong>minecraft color codes generator</strong> to create and copy <strong>color codes minecraft</strong> for chat, signs, and JSON (1.16+). Quick reference for legacy (§/&amp;), formatting, and hex — copy with one click.
            </p>
          </div>

          {/* Prefix Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Copy prefix</span>
            <div className="inline-flex rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-lg">
              <button
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${prefix === '§' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                onClick={() => setPrefix('§')}
                aria-pressed={prefix === '§'}
              >
                § (section)
              </button>
              <button
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${prefix === '&' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                onClick={() => setPrefix('&')}
                aria-pressed={prefix === '&'}
              >
                & (plugins)
              </button>
            </div>
          </div>

          {/* Color Codes Grid */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Minecraft Color Codes (Legacy §0–§f)
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              A quick reference so <strong>color codes minecraft</strong> are easy to scan and copy.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {LEGACY_COLORS.map((c) => (
                <div key={c.code} className="group rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 hover:border-green-400 dark:hover:border-green-500">
                  <div className="h-12 rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-300 relative overflow-hidden" style={{ backgroundColor: c.hex }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{c.name}</div>
                      <div className="text-sm font-mono text-gray-500">{prefix}{c.code}</div>
                    </div>
                    <button
                      className="text-xs px-3 py-1.5 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white dark:bg-gray-700 dark:hover:bg-green-500 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                      onClick={() => copyToClipboard(`${prefix}${c.code}`)}
                    >
                      Copy
                    </button>
                  </div>
                  <div className="text-sm font-medium" style={{ color: c.hex }}>
                    Sample text
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
              💡 Note: Legacy codes colorize in chat, books, signs, MOTD (server/clients or plugins permitting). Use § in vanilla; many plugins also accept &.
            </p>
          </div>

          {/* Formatting Codes */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Formatting Codes
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {FORMAT_CODES.map((f) => (
                <div key={f.code} className="group rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 hover:border-teal-400 dark:hover:border-teal-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{f.name}</div>
                      <div className="text-sm font-mono text-gray-500">{prefix}{f.code}</div>
                    </div>
                    <button
                      className="text-xs px-3 py-1.5 rounded-md bg-gray-100 hover:bg-teal-500 hover:text-white dark:bg-gray-700 dark:hover:bg-teal-500 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                      onClick={() => copyToClipboard(`${prefix}${f.code}`)}
                    >
                      Copy
                    </button>
                  </div>
                  <div className={`text-sm font-medium ${f.previewClass || ''} group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors`}>
                    Sample text preview
                  </div>
                  {f.note && <div className="text-xs text-gray-500 bg-gray-50 dark:bg-gray-900/50 p-2 rounded">{f.note}</div>}
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-4 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
              💡 Use {prefix}r to reset color and styles.
            </div>
          </div>

          {/* JSON Text Component Builder (1.16+) */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              JSON Text Component Builder (1.16+)
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
              💎 Java Edition 1.16+ supports hex like <span className="font-mono font-semibold">#RRGGBB</span> in JSON text (tellraw, signs, books). Legacy chat does not support <span className="font-mono">§#</span>.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
              This builder doubles as a lightweight <strong>minecraft color codes generator</strong> — switch between named legacy colors and hex to output the exact format you need.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Text</label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                  value={builderText}
                  onChange={(e) => setBuilderText(e.target.value)}
                />

                <div className="flex items-center gap-2 mt-4">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Color mode:</label>
                  <button
                    className={`text-sm px-4 py-2 rounded-full border-2 transition-all duration-300 ${builderUseNamed ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg' : 'bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'}`}
                    onClick={() => setBuilderUseNamed(true)}
                  >
                    Named
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded-full border-2 transition-all duration-300 ${!builderUseNamed ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg' : 'bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'}`}
                    onClick={() => setBuilderUseNamed(false)}
                  >
                    Hex
                  </button>
                </div>

                {builderUseNamed ? (
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Named color</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                      value={builderNamed}
                      onChange={(e) => setBuilderNamed(e.target.value)}
                    >
                      {LEGACY_COLORS.map((c) => (
                        <option key={c.code} value={c.name}>{c.name} ({c.hex})</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="mt-2">
                    <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Hex color</label>
                    <div className="flex items-center gap-2">
                      <input type="color" value={builderHex} onChange={(e) => setBuilderHex(e.target.value)} className="h-12 w-12 p-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-transform" />
                      <input
                        className="flex-1 px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                        value={builderHex}
                        onChange={(e) => setBuilderHex(e.target.value)}
                        placeholder="#RRGGBB"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <input type="checkbox" checked={builderBold} onChange={(e) => setBuilderBold(e.target.checked)} className="w-4 h-4 rounded accent-blue-500" />
                    <span className="font-medium">bold</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <input type="checkbox" checked={builderItalic} onChange={(e) => setBuilderItalic(e.target.checked)} className="w-4 h-4 rounded accent-blue-500" />
                    <span className="font-medium">italic</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <input type="checkbox" checked={builderUnderline} onChange={(e) => setBuilderUnderline(e.target.checked)} className="w-4 h-4 rounded accent-blue-500" />
                    <span className="font-medium">underlined</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <input type="checkbox" checked={builderStrikethrough} onChange={(e) => setBuilderStrikethrough(e.target.checked)} className="w-4 h-4 rounded accent-blue-500" />
                    <span className="font-medium">strikethrough</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <input type="checkbox" checked={builderObfuscated} onChange={(e) => setBuilderObfuscated(e.target.checked)} className="w-4 h-4 rounded accent-blue-500" />
                    <span className="font-medium">obfuscated</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">JSON preview</label>
                <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 shadow-inner"><code>{jsonComponent}</code></pre>
                <div className="flex gap-2">
                  <button
                    className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                    onClick={() => copyToClipboard(jsonComponent)}
                  >
                    📋 Copy JSON
                  </button>
                  <button
                    className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                    onClick={() => copyToClipboard(tellrawCommand)}
                  >
                    ⚡ Copy /tellraw
                  </button>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">/tellraw example</div>
                  <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 shadow-inner"><code>{tellrawCommand}</code></pre>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Generator */}
          <GradientGenerator prefix={prefix} />

          {/* Examples */}
          {!isEmbed && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                Usage Examples
              </h2>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🖥️</span>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Server MOTD (server.properties)</div>
                  </div>
                  <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner group-hover:shadow-lg transition-shadow"><code className="text-sm">{`motd=\u00A76Welcome to \u00A7lMy Server\u00A7r`}</code></pre>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    💡 Use \u00A7 for the section sign in properties files. With plugins like EssentialsX, & codes may be supported in configs.
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🪧</span>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Sign JSON (Java 1.20+)</div>
                  </div>
                  <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner group-hover:shadow-lg transition-shadow"><code className="text-sm">{`data modify block ~ ~ ~ front_text.messages[0] set value {"text":"Welcome","color":"dark_green","bold":true}`}</code></pre>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">💬</span>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Chat (legacy codes)</div>
                  </div>
                  <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner group-hover:shadow-lg transition-shadow"><code className="text-sm">{`${prefix}6Gold ${prefix}lBold${prefix}r Normal`}</code></pre>
                </div>
              </div>
            </div>
          )}

          {/* Embed code */}
          {!isEmbed && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-10 border-2 border-indigo-200/50 dark:border-indigo-700/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  Embed This Tool
                </h2>
                <button
                  className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                  onClick={() => setShowEmbed(!showEmbed)}
                >
                  {showEmbed ? '🔼 Hide' : '🔽 Show'} Embed Code
                </button>
              </div>
              {showEmbed && (
                <div className="space-y-3 animate-fade-in">
                  <p className="text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-indigo-200 dark:border-indigo-700">
                    📝 Copy the iframe below to embed this tool on your website:
                  </p>
                  <div className="relative group">
                    <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 pr-24 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 shadow-inner"><code>{`<iframe src="https://rgbatohex.com/tools/minecraft-color-codes?embed=true" width="100%" height="900" style="border:none;border-radius:12px;overflow:hidden;" title="Minecraft Color Codes"></iframe>`}</code></pre>
                    <button
                      className="absolute top-3 right-3 text-xs px-3 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 opacity-90 group-hover:opacity-100"
                      onClick={() => copyToClipboard(`<iframe src="https://rgbatohex.com/tools/minecraft-color-codes?embed=true" width="100%" height="900" style="border:none;border-radius:12px;overflow:hidden;" title="Minecraft Color Codes"></iframe>`)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SEO Landing Content */}
          {!isEmbed && (
            <article className="prose prose-lg dark:prose-invert max-w-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
              <div className="not-prose mb-8">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  📖 Minecraft Color Codes: Complete Guide and Free Generator
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              </div>

              <p className="text-lg leading-relaxed">
                This page is a practical guide and free <strong className="text-green-600 dark:text-green-400">minecraft color codes generator</strong>. It covers legacy <strong>§ minecraft color codes</strong> and formatting, how to type the <strong>minecraft color codes symbol</strong> (§), Java vs Bedrock differences, <strong>minecraft chat color codes</strong>, <strong>minecraft chat colors hex codes</strong> in JSON (1.16+), <strong>minecraft sign color codes</strong>, and even <strong>minecraft gradient color codes</strong> for stylish text. Many players also search variants like <em>color codes minecraft</em>, <em>color codes minecraft java</em>, and <em>minecraft rgb color codes</em>—you'll find them all here.
              </p>

              <div className="not-prose my-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>🎮</span> What Are Minecraft Color Codes?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Minecraft uses special <strong>color codes</strong> to style text. In legacy chat and many plugin contexts, a <strong>section sign (§)</strong> precedes a single character (0–9, a–f, k–o, r). For example, <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">§a</code> makes text green and <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">§l</code> makes it bold. In modern Java (1.16+), you can also use full <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">#RRGGBB</code> hex colors in <strong>JSON text components</strong> (e.g. <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">/tellraw</code>, signs, books). That's why some people search for <em>§ minecraft color codes</em> and others for <em>minecraft chat colors hex codes</em>—both are valid, just for different contexts.
                </p>
              </div>

              <div className="not-prose my-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>⚔️</span> Java vs Bedrock: Key Differences
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">☕</span>
                    <div>
                      <strong className="text-green-600 dark:text-green-400">Java Edition (legacy):</strong> supports <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">§0–§f</code> colors and formatting <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">§k, §l, §m, §n, §o, §r</code> in chat, signs, and many server plugins. Some plugins accept <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">&amp;</code> as an alias.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">💎</span>
                    <div>
                      <strong className="text-blue-600 dark:text-blue-400">Java Edition (1.16+ JSON):</strong> supports hex colors with <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">{'{'}"color":"#RRGGBB"{'}'}</code> in JSON components (e.g., <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">/tellraw</code>). Hex does not work as <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">§#RRGGBB</code> in chat.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">📱</span>
                    <div>
                      <strong className="text-purple-600 dark:text-purple-400">Bedrock Edition:</strong> many UI texts support colors differently and may not accept Java's JSON/hex features the same way. If you search <em>minecraft bedrock color codes</em>, verify commands/resources for Bedrock specifically.
                    </div>
                  </div>
                </div>
              </div>

              <div className="not-prose my-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>⌨️</span> How to Type the § Minecraft Color Codes Symbol
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-2 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <span className="text-xl">🪟</span>
                    <div>
                      <div className="font-semibold text-sm">Windows</div>
                      <code className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Alt+0167</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <span className="text-xl">🍎</span>
                    <div>
                      <div className="font-semibold text-sm">macOS</div>
                      <code className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Option+6</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <span className="text-xl">🐧</span>
                    <div>
                      <div className="font-semibold text-sm">Linux</div>
                      <code className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl+Shift+U 00a7</code>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  💡 Many servers/plugins prefer <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">&amp;</code> as an input alias (e.g., <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">&amp;a</code> equals <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">§a</code>).
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>💬</span> Minecraft Chat Color Codes (Legacy)
              </h3>
              <p>
                Legacy <strong>minecraft chat color codes</strong> use <code>§</code> + one character. Colors are <code>§0–§9</code>, <code>§a–§f</code>; formatting is <code>§k</code> (obfuscated), <code>§l</code> (bold), <code>§m</code> (strikethrough), <code>§n</code> (underline), <code>§o</code> (italic), and <code>§r</code> (reset). Example: <code>§6Gold §lBold§r Normal</code>. Our tool above lets you copy any code instantly.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>🎨</span> Hex Colors in JSON (Java 1.16+)
              </h3>
              <p>
                To use <strong>hex</strong>, switch to <strong>JSON text components</strong> (e.g. <code>/tellraw</code>). Example: <code>{'{'}"text":"Hello","color":"#FFAA00","bold":true{'}'}</code>. This is the correct way for <em>minecraft chat colors hex codes</em> in Java—chat itself still only supports 16 legacy colors.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>🌈</span> Minecraft Gradient Color Codes
              </h3>
              <p>
                For <strong>minecraft gradient color codes</strong>, use the built‑in Gradient Generator on this page. It outputs two formats:
                a legacy approximation (mapped to the closest 16 colors) and a perfect JSON gradient (per‑character hex). You can copy the legacy string (with <code>§</code> or <code>&amp;</code>) or the JSON array and directly paste it into <code>/tellraw</code>.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>🪧</span> Minecraft Sign Color Codes and MOTD
              </h3>
              <p>
                For <strong>minecraft sign color codes</strong> on modern Java, use JSON commands (1.20+ sign data) for reliable results. For server MOTD, prefer <code>\u00A7</code> Unicode escapes in <code>server.properties</code> (e.g., <code>motd=\u00A76Welcome \u00A7lServer\u00A7r</code>), since raw § can break encoding. Plugins like EssentialsX often support <code>&amp;</code> input.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>⚡</span> Color Codes Minecraft Java vs Bedrock
              </h3>
              <p>
                If you search <em>color codes minecraft java</em> vs <em>minecraft bedrock color codes</em>, remember they're not fully identical. Java allows both legacy § codes and advanced JSON hex (1.16+). Bedrock's behavior differs and depends on context/UI—check Bedrock‑specific docs or tools before relying on hex.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2">
                <span>🔢</span> Minecraft RGB Color Codes
              </h3>
              <p>
                Want <strong>minecraft rgb color codes</strong>? In JSON (Java 1.16+), just convert RGB to hex and set <code>"color":"#RRGGBB"</code>. For legacy chat only 16 colors exist, so our generator maps your target color to the closest of <code>§0–§f</code> and emits compact §/&amp; sequences.
              </p>

              <div className="not-prose my-10 p-6 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>❓</span> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400 mb-2">Do hex colors work in chat?</h4>
                    <p className="text-gray-700 dark:text-gray-300">No. Hex works in JSON (Java 1.16+). Chat uses 16 legacy colors only.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400 mb-2">Why doesn't § work when I type it?</h4>
                    <p className="text-gray-700 dark:text-gray-300">Clients often block direct § input; copy/paste or use plugin aliases like <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">&amp;</code>. Servers may require permissions to use colors.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400 mb-2">How do I reset styles?</h4>
                    <p className="text-gray-700 dark:text-gray-300">Use <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">§r</code> (or <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">&amp;r</code>) to reset color and formatting.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-700 dark:text-teal-400 mb-2">Can I embed this generator?</h4>
                    <p className="text-gray-700 dark:text-gray-300">Yes. Use the iframe snippet in the "Embed This Tool" section above.</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed">
                In short, <strong>minecraft color codes</strong> let you style text across chat, signs, and JSON. When you need them fast, this <strong>minecraft color codes generator</strong> outputs compact legacy strings or precise hex JSON. Keep this page handy any time you need quick <strong>color codes minecraft</strong> for Java or Bedrock contexts.
              </p>

              <div className="not-prose mt-10 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span>🔍</span> Related Searches
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  People also look for: <em>minecraft color codes</em>, <em>color codes minecraft</em>, <em>minecraft color codes generator</em>, <em>§ minecraft color codes</em>, <em>minecraft color codes symbol</em>, <em>minecraft gradient color codes</em>, <em>minecraft chat color codes</em>, <em>minecraft bedrock color codes</em>, <em>minecraft chat colors hex codes</em>, <em>minecraft sign color codes</em>, <em>color codes minecraft java</em>, and <em>minecraft rgb color codes</em>.
                </p>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

// -------- Gradient Generator (MVP) --------
function GradientGenerator({ prefix }: { prefix: '§' | '&' }) {
  const [gradText, setGradText] = useState('Gradient Text');
  const [startHex, setStartHex] = useState('#FF0080');
  const [endHex, setEndHex] = useState('#00E5FF');
  const [appendReset, setAppendReset] = useState(true);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underlined, setUnderlined] = useState(false);
  const [strikethrough, setStrikethrough] = useState(false);
  const [obfuscated, setObfuscated] = useState(false);

  // Helpers
  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  const hexToRgb = (hex: string) => {
    let h = hex.replace(/^#/, '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const n = parseInt(h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  };
  const rgbToHex = (r: number, g: number, b: number) =>
    `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const colors = useMemo(() => {
    const n = gradText.length;
    if (n === 0) return [] as string[];
    const s = hexToRgb(startHex);
    const e = hexToRgb(endHex);
    const arr: string[] = [];
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0 : clamp01(i / (n - 1));
      const r = Math.round(lerp(s.r, e.r, t));
      const g = Math.round(lerp(s.g, e.g, t));
      const b = Math.round(lerp(s.b, e.b, t));
      arr.push(rgbToHex(r, g, b));
    }
    return arr;
  }, [gradText, startHex, endHex]);

  // Map an sRGB color to the closest legacy palette color
  const nearestLegacyCode = (hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    let best = { code: 'f', dist: Number.POSITIVE_INFINITY };
    for (const c of LEGACY_COLORS) {
      const rc = hexToRgb(c.hex);
      const d = (r - rc.r) * (r - rc.r) + (g - rc.g) * (g - rc.g) + (b - rc.b) * (b - rc.b);
      if (d < best.dist) best = { code: c.code, dist: d };
    }
    return best.code;
  };

  // Build legacy (§/& 16-color) string, minimizing redundant codes
  const legacyString = useMemo(() => {
    if (gradText.length === 0) return '';
    let out = '';
    // Optional: add style codes at start
    if (obfuscated) out += `${prefix}k`;
    if (bold) out += `${prefix}l`;
    if (strikethrough) out += `${prefix}m`;
    if (underlined) out += `${prefix}n`;
    if (italic) out += `${prefix}o`;

    let currentCode: string | null = null;
    for (let i = 0; i < gradText.length; i++) {
      const ch = gradText[i];
      const code = nearestLegacyCode(colors[i] || startHex);
      if (code !== currentCode) {
        out += `${prefix}${code}`;
        currentCode = code;
      }
      out += ch;
    }
    if (appendReset) out += `${prefix}r`;
    return out;
  }, [gradText, colors, prefix, bold, italic, underlined, strikethrough, obfuscated, appendReset, startHex]);

  // Build JSON array (1.16+), merging adjacent same-color runs, include style flags
  const jsonArray = useMemo(() => {
    const arr: Array<Record<string, unknown>> = [];
    if (gradText.length === 0) return arr;
    let runColor = colors[0] || startHex;
    let runText = '';
    const pushRun = () => {
      if (!runText) return;
      const o: Record<string, unknown> = { text: runText, color: runColor };
      if (bold) o.bold = true;
      if (italic) o.italic = true;
      if (underlined) o.underlined = true;
      if (strikethrough) o.strikethrough = true;
      if (obfuscated) o.obfuscated = true;
      arr.push(o);
    };
    for (let i = 0; i < gradText.length; i++) {
      const ch = gradText[i];
      const c = colors[i] || runColor;
      if (c !== runColor && runText) {
        pushRun();
        runText = '';
        runColor = c;
      }
      runText += ch;
    }
    pushRun();
    return arr;
  }, [gradText, colors, bold, italic, underlined, strikethrough, obfuscated, startHex]);

  const jsonString = useMemo(() => JSON.stringify(jsonArray, null, 2), [jsonArray]);

  const tellraw = useMemo(() => (jsonArray.length ? `/tellraw @a ${JSON.stringify({ text: '', extra: jsonArray })}` : ''), [jsonArray]);

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-2xl">🌈</span>
        Gradient Generator
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
        ✨ Create linear gradients for text. Outputs legacy {prefix} codes (approx. 16 colors) and 1.16+ JSON hex colors.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Text</label>
          <textarea
            value={gradText}
            onChange={(e) => setGradText(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all"
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Start color</label>
              <div className="flex items-center gap-2">
                <input type="color" value={startHex} onChange={(e) => setStartHex(e.target.value)} className="h-12 w-12 p-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-transform" />
                <input value={startHex} onChange={(e) => setStartHex(e.target.value)} className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono text-sm focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">End color</label>
              <div className="flex items-center gap-2">
                <input type="color" value={endHex} onChange={(e) => setEndHex(e.target.value)} className="h-12 w-12 p-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-transform" />
                <input value={endHex} onChange={(e) => setEndHex(e.target.value)} className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono text-sm focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={bold} onChange={(e) => setBold(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">bold</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={italic} onChange={(e) => setItalic(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">italic</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={underlined} onChange={(e) => setUnderlined(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">underlined</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={strikethrough} onChange={(e) => setStrikethrough(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">strikethrough</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={obfuscated} onChange={(e) => setObfuscated(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">obfuscated</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input type="checkbox" checked={appendReset} onChange={(e) => setAppendReset(e.target.checked)} className="w-4 h-4 rounded accent-purple-500" />
              <span className="font-medium">append reset ({prefix}r)</span>
            </label>
          </div>
        </div>

        {/* Preview and Outputs */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Preview</label>
          <div className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-xl font-medium overflow-auto min-h-[80px] flex items-center justify-center shadow-inner">
            {gradText.split('').map((ch, i) => (
              <span key={i} style={{ color: colors[i] || startHex }} className="transition-all duration-300">{ch}</span>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Legacy string ({prefix} codes)</div>
              <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-200 font-medium shadow-sm hover:shadow-md hover:scale-105" onClick={() => copyToClipboard(legacyString)}>📋 Copy</button>
            </div>
            <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-3 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 shadow-inner"><code>{legacyString || '(empty)'}</code></pre>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">JSON array (1.16+)</div>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-200 font-medium shadow-sm hover:shadow-md hover:scale-105" onClick={() => copyToClipboard(jsonString)}>📋 Copy JSON</button>
                <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white transition-all duration-200 font-medium shadow-sm hover:shadow-md hover:scale-105" onClick={() => copyToClipboard(tellraw)}>⚡ Copy /tellraw</button>
              </div>
            </div>
            <pre className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 p-3 rounded-lg overflow-x-auto text-sm border border-gray-200 dark:border-gray-700 shadow-inner max-h-64"><code>{jsonString || '[]'}</code></pre>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
        💡 Notes: chat only supports 16 legacy colors; full hex works in JSON (Java 1.16+). For plugin-specific hex syntaxes (MiniMessage, EssentialsX, Spigot §x), export options will be added later.
      </p>
    </div>
  );
}

// (metadata moved to layout.tsx)
