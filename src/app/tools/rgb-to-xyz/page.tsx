'use client';

import Image from "next/image";
import Navigation from "@/components/Navigation";

const iframeCode = `<iframe \
  src="https://rgbatohex.com/tools/rgb-to-xyz-converter?embed=true" \
  width="100%" \
  height="700" \
  style="border:none;border-radius:18px;overflow:hidden;" \
  title="RGB to XYZ Converter"\
></iframe>`;

export default function RgbToXyzLanding() {
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(iframeCode).catch((error) => console.error("Copy failed", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-sky-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-3xl mx-auto text-center mt-10 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image src="/rgb.svg" alt="RGB to XYZ" width={48} height={48} priority />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-500 font-semibold">RGB → CIE XYZ</p>
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
                RGB to XYZ Color Converter
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            将设备相关的 RGB 值转换成 CIE XYZ 三刺激值与 (u, v) 色度坐标，支持嵌入到任何网站或教程中，帮助设计师、
            显示器工程师、调色师在网页与色彩科学之间搭建桥梁。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <iframe
              src="/tools/rgb-to-xyz-converter?embed=true"
              className="w-full rounded-2xl border-0 shadow-xl"
              height={700}
              loading="lazy"
              title="RGB to XYZ Real-time Converter"
            />
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="/tools/rgb-to-xyz-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">一键嵌入你的站点</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              复制下方 iframe 代码并粘贴到博客、文档或 Web App，即可提供专业的 RGB→XYZ 转换功能。可通过 URL 参数
              预设初始 RGB 值（<code className="font-mono">r</code>、<code className="font-mono">g</code>、<code className="font-mono">b</code> 0-255）。
            </p>
            <div className="relative">
              <pre className="bg-gray-900 text-sky-100 rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{iframeCode}</code>
              </pre>
              <button
                onClick={copyEmbedCode}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-sky-500 text-white text-sm hover:bg-sky-600"
              >
                复制代码
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">示例：预设天空蓝</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`<iframe src="https://rgbatohex.com/tools/rgb-to-xyz-converter?embed=true&r=95&g=180&b=255" width="100%" height="700" style="border:none;border-radius:18px;overflow:hidden;" title="RGB to XYZ Converter"></iframe>`}</code>
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">应用场景</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>🖥️ <strong>显示器 / 灯光校准</strong>：输出的 XYZ 可直接用于 ICC Profile 编写以及查找 CCT 曲线。</p>
              <p>🎨 <strong>设计系统桥接</strong>：先转换为 XYZ，再进入 LAB、OKLAB、OKLCH，确保跨设备一致表现。</p>
              <p>📊 <strong>教学内容</strong>：在博文中嵌入工具，实时展示 RGB 与 CIE 标准之间的数学关系。</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
