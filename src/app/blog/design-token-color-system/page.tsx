import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function DesignTokenColorSystemBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="mx-auto mt-8 max-w-5xl space-y-8">
          <header className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                Design System Workflow
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Design Token Color System: From Palette to Production
              </h1>
              <p className="mt-5 text-xl leading-8 text-gray-600 dark:text-gray-300">
                If you are trying to export CSS variables from a palette, generate Tailwind colors, structure semantic roles, or move brand color decisions from design into code, this is the workflow that makes that handoff practical.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/design-token-color-exporter"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Open the Design Token Exporter
              </Link>
              <Link
                href="/tools/oklch-scale-generator"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 dark:border-indigo-900/50 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:bg-indigo-950/50"
              >
                Generate a scale first
              </Link>
            </div>
          </header>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why palettes alone are not enough</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                A palette can help a team explore color direction, but product delivery needs more than a list of swatches. Teams eventually need names, structure, and export formats that code can consume repeatedly.
              </p>
              <p>
                That is where the <Link href="/tools/design-token-color-exporter" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">Design Token Color Exporter</Link> becomes useful. It turns palette decisions into something design systems, front-end code, and documentation can all share.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What people are usually trying to solve when they search for a color token exporter</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Export CSS variables from a palette</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when your team wants framework-agnostic color tokens that can flow into component styles, themes, or multi-brand products.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Generate Tailwind color config</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when you already have a 50-950 scale and do not want to hand-type every color step into Tailwind config.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create semantic roles for UI systems</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when your team needs primary, surface, text, and border roles instead of shipping anonymous color values through components.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Improve design-to-dev handoff</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when design decisions keep getting rewritten during implementation because the color system never became a reusable code structure.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why semantic roles matter more than raw hex values</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Teams rarely ship colors as unnamed swatches. They ship decisions like primary action, text on surface, border emphasis, and interactive accent. Semantic roles help those decisions survive handoff, refactors, and future theming work.
              </p>
              <p>
                Once roles are named, they become easier to reuse in components, easier to document, and easier to change later without searching for dozens of disconnected hard-coded values.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">When to use a scale and when to use semantic roles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Use a 50-950 scale when</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  <li>- You need Tailwind-style ramps for utilities, components, or documentation.</li>
                  <li>- You want one brand color expanded into light and dark steps.</li>
                  <li>- You are still shaping a broader system and need more exploration range.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-white p-6 dark:border-indigo-900/40 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Use semantic roles when</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  <li>- You already know the UI jobs the colors need to do.</li>
                  <li>- You want cleaner handoff into component libraries or theme tokens.</li>
                  <li>- You care more about implementation stability than palette exploration.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">A practical workflow from base color to exported tokens</h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              <li>1. Start with a stable ramp from the <Link href="/tools/oklch-scale-generator" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">OKLCH Scale Generator</Link> if you need a broader palette.</li>
              <li>2. If the real problem is UI role selection, generate semantic values with the <Link href="/tools/accessible-palette-generator" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">Accessible Palette Generator</Link>.</li>
              <li>3. Move the chosen values into the exporter and generate CSS variables, Tailwind config, or JSON tokens.</li>
              <li>4. Validate high-risk text and surface pairs with the <Link href="/tools/apca-contrast-checker" className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">APCA Contrast Checker</Link> before rollout.</li>
            </ol>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Export formats teams actually use</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">CSS Variables</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when tokens need to flow into component styles, theming layers, or framework-agnostic UI systems.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tailwind Config</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when product teams want token-like structure inside a Tailwind workflow without rebuilding scales by hand.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">JSON Tokens</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when color decisions need to move between systems, pipelines, or docs in a structured machine-readable format.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm dark:border-indigo-900/50 dark:bg-indigo-950/30">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recommended workflow: OKLCH + Accessible Roles + Exporter + APCA</h2>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Use OKLCH when you need a smoother scale, use semantic roles when you need implementation-ready UI structure, use the exporter to translate those decisions into code, and use APCA to validate readability where the token system touches real text and surfaces.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/design-token-color-exporter"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Export your token set
              </Link>
              <Link
                href="/tools/accessible-palette-generator"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-900/50 dark:bg-gray-900 dark:text-indigo-300 dark:hover:bg-indigo-950/20"
              >
                Generate semantic roles first
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
