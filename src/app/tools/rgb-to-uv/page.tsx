'use client';

import Image from "next/image";
import Navigation from "@/components/Navigation";

const iframeCode = `<iframe \
  src="https://rgbatohex.com/tools/rgb-to-uv-converter?embed=true" \
  width="100%" \
  height="720" \
  style="border:none;border-radius:18px;overflow:hidden;" \
  title="RGB to (u, v) Chromaticity Converter"\
></iframe>`;

export default function RgbToUvLanding() {
  const copyEmbedCode = () => {
    navigator.clipboard.writeText(iframeCode).catch((error) => console.error("Copy failed", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Navigation />

        <div className="max-w-3xl mx-auto text-center mt-10 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image src="/rgb.svg" alt="RGB to (u, v)" width={48} height={48} priority />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-500 font-semibold">RGB → CIE 1960 UCS</p>
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600">
                RGB to (u, v) Chromaticity Converter
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            支持显示/照明行业常用的 CIE 1960 UCS 色度坐标。工具会同步输出 XYZ 与 Y 亮度，可直接嵌入到实验记录、
            色温教程以及 LED 调校页面。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <iframe
              src="/tools/rgb-to-uv-converter?embed=true"
              className="w-full rounded-2xl border-0 shadow-xl"
              height={720}
              loading="lazy"
              title="RGB to (u, v) Converter"
            />
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="/tools/rgb-to-uv-converter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg"
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">嵌入代码 + 自定义参数</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              通过简单的 iframe 即可获取 (u, v) 色度值、XYZ 三刺激值与 Y 亮度条。支持 <code className="font-mono">r</code>、
              <code className="font-mono">g</code>、<code className="font-mono">b</code> 参数预设输入。
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">示例：高色温蓝光</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`<iframe src="https://rgbatohex.com/tools/rgb-to-uv-converter?embed=true&r=95&g=180&b=255" width="100%" height="720" style="border:none;border-radius:18px;overflow:hidden;" title="RGB to (u, v) Chromaticity Converter"></iframe>`}</code>
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-white/60 dark:border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">适用人群</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>💡 <strong>照明工程</strong>：对比 LED BIN、计算 CCT/Δuv。</p>
              <p>🧪 <strong>色彩实验</strong>：课堂演示 RGB→XYZ→uv 的完整链路。</p>
              <p>📈 <strong>数据可视化</strong>：在仪表板中嵌入实时色度信息，与其它传感器数据联动。</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
