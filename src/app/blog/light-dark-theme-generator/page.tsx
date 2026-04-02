import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { metadata } from './metadata';

export { metadata };

export default function LightDarkThemeGeneratorBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="mx-auto mt-8 max-w-5xl space-y-8">
          <header className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                Theme System Workflow
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Light &amp; Dark Theme Generator: Build a Complete UI Theme from One Brand Color
              </h1>
              <p className="mt-5 text-xl leading-8 text-gray-600 dark:text-gray-300">
                You have a brand color. What you still need is a theme — background, surface, primary, muted, border — working in both light and dark mode, passing contrast, and ready to drop into CSS variables or Tailwind. This guide covers that full path.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/light-dark-theme-generator"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Open the Theme Generator
              </Link>
              <Link
                href="/tools/apca-contrast-checker"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-100 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50"
              >
                Validate contrast details
              </Link>
            </div>
          </header>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The real bottleneck is not color picking — it is theme mapping</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Most teams can pick a primary color and put together a rough palette. The friction starts the moment implementation begins: which shade goes on the page background, how do cards visually separate from the page, should your primary button use light or dark text on that specific brand color, and is dark mode really just a white-to-black swap?
              </p>
              <p>
                That is the problem <Link href="/tools/light-dark-theme-generator" className="font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">Light &amp; Dark Theme Generator</Link> is designed to solve. It does not give you a set of pretty swatches — it gives you semantic roles that map directly to real theme variables your codebase can actually use.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Searching for a dark mode color palette generator? Here is what the job actually requires</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                People searching for a <strong>dark mode color palette generator</strong>, <strong>brand color dark mode</strong>, <strong>theme token generator</strong>, or <strong>shadcn theme generator</strong> are usually solving the same underlying problem: turning one brand color into a semantic theme that is actually shippable. The search terms differ; the need does not.
              </p>
              <p>
                Shippable means more than ten coordinated shades. It means a background color that feels intentional, a surface layer that gives cards breathing room, action colors that stay readable across states, muted content that does not disappear in dark mode, and export formats that plug straight into CSS variables, Tailwind config, or a shadcn setup without manual renaming.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why this is hard to solve reliably by hand</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Light and dark are not simple inversions</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Flipping the background from white to dark is only the start. Text polarity, button emphasis levels, muted content visibility, and border contrast all need to be re-evaluated independently for dark mode to feel intentional rather than hacked.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">One brand color is not a full theme</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  What actually ships in code is a set of semantic roles — <code>background</code>, <code>surface</code>, <code>primary</code>, <code>muted</code>, <code>border</code>, <code>ring</code> — not a group of anonymous HEX values that look good together on a swatch board.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">WCAG alone is not enough for dark mode</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  A color pair can pass a WCAG ratio and still feel difficult to read in real dark-mode conditions. APCA captures perceptual lightness more accurately, especially for body text and action elements on dark backgrounds.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Design and code rarely share the same language</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Design tools show visual hierarchy with colors. Code needs structured variable definitions — <code>:root</code>, <code>.dark</code>, and named tokens like <code>--card-foreground</code>. That translation step is where themes stall without the right export format.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The core workflow this tool handles</h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              <li>1. Enter one base brand color in HEX.</li>
              <li>2. Generate a brand scale and a low-chroma neutral scale using OKLCH — so backgrounds and surfaces feel related to your brand rather than generic gray.</li>
              <li>3. Automatically assign semantic roles: background, surface, primary, muted, border, and ring — for both light and dark themes.</li>
              <li>4. Validate critical foreground-background pairs against WCAG contrast ratios and APCA scores, catching combinations that pass a number but still read poorly.</li>
              <li>5. Export as Theme CSS variables, shadcn / Tailwind v4 mappings, or JSON design tokens — ready to paste into your codebase.</li>
            </ol>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to use the Light &amp; Dark Theme Generator</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Start with one brand HEX</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Paste in a single HEX value. The tool builds both a brand scale and a brand-tinted neutral scale, so the final theme feels cohesive rather than a brand color sitting on top of borrowed grays.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Review light and dark previews side by side</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  The preview shows real UI roles in context — page background, card surface, primary button, secondary button, muted block, input field, and focus ring — rather than an abstract swatch grid.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Check WCAG and APCA accessibility diagnostics</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  This step is where <strong>accessible dark mode colors</strong> either hold up or fall apart. It flags combinations that look fine visually but are still weak under real reading conditions, before they ever make it into production.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4. Export directly into your stack</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Choose Theme CSS for raw <code>:root</code> and <code>.dark</code> variable blocks, shadcn / Tailwind v4 mappings for component-ready theming, or JSON Tokens for design system pipelines that need token transport.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why semantic roles matter more than color scales</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Scales are great for exploration — you can see the full range, compare lightness steps, and decide if a color has enough variation to work. But a scale does not tell you which step is the page background or which step is the muted foreground. Semantic roles do. They define what each color is responsible for, not just what it looks like.
              </p>
              <p>
                That is why it makes sense to use the <Link href="/tools/oklch-scale-generator" className="font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300">OKLCH Scale Generator</Link> first when you are still exploring a color direction — then switch to a semantic tool like Light &amp; Dark Theme Generator once you are ready to move something into a component library or a production theme system.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Need a shadcn theme generator or theme token generator? Here is what the output looks like</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Most people searching for a <strong>shadcn theme generator</strong> are not looking for color theory — they want output that maps cleanly into <code>:root</code> and <code>.dark</code> without extra work. Similarly, anyone searching for a <strong>theme token generator</strong> needs role names like <code>background</code>, <code>card</code>, <code>primary</code>, and <code>ring</code> — not just shade-50 through shade-950.
              </p>
              <p>
                The generator addresses both. Theme CSS gives you direct <code>:root</code> / <code>.dark</code> variable blocks. The shadcn / Tailwind v4 export wires into app-level theming. JSON Tokens cover design system pipelines that depend on token transport. The goal is the same in each case: close the gap between one brand color and a theme your codebase can actually consume.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Suggested order of use</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6 dark:border-cyan-900/40 dark:bg-cyan-950/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Lock the base brand color first</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Still choosing a direction? Work through palette and color-wheel tools before committing to a brand color — it is easier to adjust early than to rethink a full theme system later.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-white p-6 dark:border-cyan-900/40 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Generate both themes in one pass</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Once the brand color is settled, generate light and dark semantic roles together rather than building them in separate steps or in two different tools.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-white p-6 dark:border-cyan-900/40 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Validate, then export</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Run the APCA diagnostics for a closer look at high-risk text and action pairs. When everything checks out, move the export directly into your component library or design system.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common questions this tool answers</h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How do I generate dark mode colors from one brand color?</h3>
                <p className="mt-2">
                  You need more than an inverted palette. Light and dark themes require separate semantic role assignments — the background, surface, action, muted, and border layers each need independent decisions, plus contrast validation before anything ships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How do I keep a dark theme accessible?</h3>
                <p className="mt-2">
                  Check both WCAG and APCA, and do it for every critical pair — body text, button labels, muted content, and focus states. Dark mode tends to break on the details teams skip during review, not on the obvious high-contrast spots.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How do I generate theme tokens for Tailwind or CSS variables?</h3>
                <p className="mt-2">
                  Export semantic tokens rather than raw color scales. Named roles like <code>background</code>, <code>primary</code>, and <code>muted</code> give your codebase stable variable names that stay meaningful as the design evolves.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Can one tool cover brand color, dark mode, and export in the same workflow?</h3>
                <p className="mt-2">
                  That is the point. One brand HEX goes in, a complete light-and-dark token system comes out — with live preview, contrast diagnostics, and export formats all in the same place, without switching between multiple tools.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-sm dark:border-cyan-900/50 dark:bg-cyan-950/30">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to generate a real theme?</h2>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              If you already have a brand color, you do not need to keep assembling color tables by hand, adjusting button states manually, or guessing at what dark mode should look like. Paste a HEX value and get a complete, validated, export-ready light and dark theme in one pass.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/light-dark-theme-generator"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Generate your theme
              </Link>
              <Link
                href="/tools/design-token-color-exporter"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-cyan-900/50 dark:bg-gray-900 dark:text-cyan-300 dark:hover:bg-cyan-950/20"
              >
                Open token exporter
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
