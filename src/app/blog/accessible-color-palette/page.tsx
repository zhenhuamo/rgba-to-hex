import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function AccessibleColorPaletteBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="mx-auto mt-8 max-w-5xl space-y-8">
          <header className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                Accessibility Workflow
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Accessible Color Palette: From Brand Color to Readable UI
              </h1>
              <p className="mt-5 text-xl leading-8 text-gray-600 dark:text-gray-300">
                If you are trying to choose accessible brand colors, find readable button colors, build a dark mode palette, or turn one product color into a stable UI system, this guide is for that exact job.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/accessible-palette-generator"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Open the Accessible Palette Generator
              </Link>
              <Link
                href="/tools/design-token-color-exporter"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/50"
              >
                Export the roles as tokens
              </Link>
            </div>
          </header>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why people search for an accessible palette, not just a pretty palette</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Teams usually do not search for an “accessible palette” because they want more color theory. They search because they are stuck on a practical problem: the brand color looks fine in a hero block, but fails when it becomes text, button fills, outlines, badges, or dark mode surfaces.
              </p>
              <p>
                That is why the <Link href="/tools/accessible-palette-generator" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">Accessible Palette Generator</Link> is useful. It is not another decorative palette toy. It turns one base color into semantic UI roles that can survive product work.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Real problems this workflow helps solve</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Choosing accessible text colors</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you need readable body text, muted labels, and high-density UI copy on one surface, role-based contrast checks are more helpful than guessing random dark swatches.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Picking better button colors</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Brand colors often become CTA colors by default, but filled buttons reverse polarity. That can make a pair feel worse than a quick ratio check suggests.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Building a more stable dark mode palette</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Dark surfaces often expose contrast problems that were hidden in light mocks. This workflow helps you review role separation before those issues spread across cards, modals, and overlays.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Turning brand color into token-ready roles</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Once the palette is expressed as primary, surface, text, and border roles, it becomes much easier to move into the <Link href="/tools/design-token-color-exporter" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">Design Token Color Exporter</Link> and ship consistently.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What roles matter in real UI</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                Product teams rarely ship anonymous swatches. They ship body text, muted helper text, page surfaces, border colors, accent highlights, and primary actions. Each role has a different job, so each needs a different level of visual separation.
              </p>
              <p>
                The first release keeps the model intentionally practical: primary, surface, text, muted text, border, and accent. That covers the most common UI decisions without turning the tool into a full design-system generator too early.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How APCA and WCAG help different decisions</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                WCAG ratios are still the baseline many teams need for compliance, documentation, and internal sign-off. APCA adds more nuance for reading comfort, polarity, and modern interface states where text on dark or tinted surfaces can feel wrong even if the ratio looks acceptable.
              </p>
              <p>
                That is why pairing this workflow with the <Link href="/tools/apca-contrast-checker" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">APCA Contrast Checker</Link> is valuable. The palette tool gives you candidate roles. APCA helps you decide whether those roles are actually comfortable in use.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">A simple workflow from brand color to usable interface colors</h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
              <li>1. Start with the base brand or feature color that needs to carry the visual identity.</li>
              <li>2. Generate candidate text, surface, border, accent, and primary roles instead of manually guessing every combination.</li>
              <li>3. Review the WCAG and APCA output to see which roles are strong, which are usable with care, and which still need more separation.</li>
              <li>4. If you need a fuller system behind the roles, build a supporting ramp in the <Link href="/tools/oklch-scale-generator" className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">OKLCH Scale Generator</Link>.</li>
              <li>5. Move the stable semantic values into the exporter so engineering gets reusable tokens instead of scattered color notes.</li>
            </ol>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/30">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who this helps most</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product designers</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when you need accessible defaults for text, buttons, borders, and surfaces without manually testing every swatch pair.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design-system teams</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when you need a repeatable role structure that can move into documentation, tokens, and future theme generation.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900/80">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-end engineers</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Useful when you want clearer semantic color inputs before building CSS variables, Tailwind config, or component tokens.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools/accessible-palette-generator"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Generate accessible roles
              </Link>
              <Link
                href="/tools/design-token-color-exporter"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900/50 dark:bg-gray-900 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
              >
                Export semantic tokens
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
