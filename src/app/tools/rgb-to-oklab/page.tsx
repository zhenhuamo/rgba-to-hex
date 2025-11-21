'use client';

import Image from "next/image";
import Navigation from "@/components/Navigation";

const iframeCode = `<iframe \
  src="https://rgbatohex.com/tools/rgb-to-oklab-converter?embed=true" \
  width="100%" \
  height="720" \
  style="border:none;border-radius:18px;overflow:hidden;" \
  title="RGB to OKLAB Converter"\
></iframe>`;

export default function RgbToOklabLanding() {
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(iframeCode).catch((error) => console.error("Copy failed", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-3xl mx-auto text-center mt-10 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image src="/rgb.svg" alt="RGB to OKLAB" width={48} height={48} priority />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-rose-500 font-semibold">RGB → OKLAB</p>
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-orange-500 to-pink-600">
                RGB to OKLAB Converter
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            OKLAB/OKLCH 是现代 CSS Color Level 4 引入的感知均匀色彩空间。通过嵌入本工具，用户可以即时获得
            可用于设计系统、主题调色与可访问性对比的 OKLAB/OKLCH 数值与 CSS 字符串。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <iframe
              src="/tools/rgb-to-oklab-converter?embed=true"
              className="w-full rounded-2xl border-0 shadow-xl"
              height={720}
              loading="lazy"
              title="RGB to OKLAB Real-time Converter"
            />
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="/tools/rgb-to-oklab-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-lg"
              >
                打开完整工具
              </a>
              <a
                href="#embed"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
              >
                嵌入指南
              </a>
            </div>
          </section>

          <section id="embed" className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">嵌入代码</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              复制 iframe 代码即可将转换器添加到任何教程或 UI 文档中。通过 <code className="font-mono">r</code>、
              <code className="font-mono">g</code>、<code className="font-mono">b</code> 参数（0-255）预设初始颜色，方便演示品牌色或主题色。
            </p>
            <div className="relative">
              <pre className="bg-gray-900 text-rose-100 rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{iframeCode}</code>
              </pre>
              <button
                onClick={copyEmbedCode}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-rose-500 text-white text-sm hover:bg-rose-600"
              >
                复制代码
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">示例：品牌橙</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`<iframe src="https://rgbatohex.com/tools/rgb-to-oklab-converter?embed=true&r=230&g=103&b=70" width="100%" height="720" style="border:none;border-radius:18px;overflow:hidden;" title="RGB to OKLAB Converter"></iframe>`}</code>
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">为什么需要 OKLAB?</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc list-inside text-left">
              <li>感知线性：OKLAB 的 L 轴与真实亮度更接近，构建浅/深模式更可靠。</li>
              <li>CSS 原生：现代浏览器可直接识别 <code className="font-mono">oklab()</code> 和 <code className="font-mono">oklch()</code> 字符串。</li>
              <li>品牌一致：通过锁定 L/C/H，可在整个产品体系复制同样的饱和度与对比关系。</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
