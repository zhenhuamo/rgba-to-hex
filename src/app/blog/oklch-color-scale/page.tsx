import Link from 'next/link';
import Navigation from '@/components/Navigation';

const sections = [
  { id: 'what-is-oklch', label: 'What Is OKLCH' },
  { id: 'why-scales-break', label: 'Why Scales Break' },
  { id: 'why-oklch-works', label: 'Why OKLCH Works' },
  { id: 'how-to-build', label: 'How To Build 50-950' },
  { id: 'export-workflow', label: 'Export Workflow' },
  { id: 'practical-tips', label: 'Practical Tips' },
] as const;

const anchorClassName =
  'inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300 dark:hover:border-violet-700 dark:hover:bg-violet-950';

function SectionAnchorLinks({
  title,
  links,
}: {
  title?: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 p-4 dark:border-violet-900/60 dark:bg-violet-950/20">
      {title ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">{title}</p> : null}
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={anchorClassName}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ToolCta({ title, description, label }: { title: string; description: string; label: string }) {
  return (
    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm dark:border-violet-900/50 dark:bg-violet-950/30">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{description}</p>
      <Link
        href="/tools/oklch-scale-generator"
        className="mt-5 inline-flex items-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
      >
        {label}
      </Link>
    </div>
  );
}

export default function OklchColorScaleBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article id="top" className="mx-auto mt-8 max-w-5xl">
          <header className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-violet-600 transition hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                Modern Palette Guide
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                OKLCH Color Scale
              </h1>
              <p className="mt-5 text-xl leading-8 text-gray-600 dark:text-gray-300">
                If you want cleaner 50-950 ramps for product UI, brand tokens, and dark mode systems, OKLCH is one of the most practical color spaces you can use. It gives you a more stable lightness axis, smoother steps, and fewer strange jumps than RGB or HSL ramps.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900/70">
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  This guide explains why OKLCH works so well for palette generation, what makes 50-950 scales feel smoother, and how to move directly from a base color to export-ready design tokens.
                </p>
              </div>
              <Link
                href="/tools/oklch-scale-generator"
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Open the OKLCH Scale Generator
              </Link>
            </div>

            <SectionAnchorLinks
              title="Jump straight to"
              links={[
                { href: '#what-is-oklch', label: 'Start with OKLCH basics' },
                { href: '#why-oklch-works', label: 'See why the ramp feels smoother' },
                { href: '#how-to-build', label: 'Build a 50-950 scale' },
                { href: '#export-workflow', label: 'Export tokens' },
              ]}
            />
          </header>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-800 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Navigation</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-2xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-950"
                >
                  {section.label}
                </a>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <a href="#how-to-build" className={anchorClassName}>
                Want the practical workflow?
              </a>
              <a href="#export-workflow" className={anchorClassName}>
                Need export formats?
              </a>
              <a href="#practical-tips" className={anchorClassName}>
                Skip to implementation tips
              </a>
            </div>
          </section>

          <div className="mt-8 space-y-8">
            <section id="what-is-oklch" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Is OKLCH</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  OKLCH is a perceptual color space built around three values: lightness, chroma, and hue. The reason designers care about it is simple: those values behave more like the way people actually experience color shifts in interfaces.
                </p>
                <p>
                  In practical terms, that means you can lighten or darken a base brand color while preserving a more believable visual rhythm. That is exactly what a{' '}
                  <a href="#how-to-build" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                    50-950 palette workflow
                  </a>{' '}
                  needs when it has to power surfaces, borders, text, chips, and dark mode states.
                </p>
                <p>
                  Our <Link href="/tools/oklch-scale-generator" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">OKLCH Scale Generator</Link> takes that logic and turns it into a fast 50-950 workflow that can be exported directly into product tokens.
                </p>
              </div>
              <SectionAnchorLinks
                title="Read next"
                links={[
                  { href: '#why-scales-break', label: 'Why traditional ramps break' },
                  { href: '#why-oklch-works', label: 'Why OKLCH works better' },
                ]}
              />
            </section>

            <section id="why-scales-break" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Traditional Scales Break</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  A lot of palette systems start from RGB or HSL because those formats are familiar. The problem is that familiarity does not guarantee smooth ramps. Light steps may flatten too early, dark steps may get muddy, and saturation can swing harder than expected.
                </p>
                <p>
                  That is why some scales look fine around 400-600 but feel unstable at the edges. The top of the ramp becomes chalky, while the bottom starts collapsing into a heavy dark block that is hard to use consistently across surfaces and text roles.
                </p>
                <p>
                  If you have ever struggled to make a brand scale feel balanced from background tints to deep emphasis states, you have already felt the limitation of non-perceptual ramps. The fix starts when you move to a{' '}
                  <a href="#why-oklch-works" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                    more perceptually stable scale model
                  </a>
                  .
                </p>
              </div>
              <SectionAnchorLinks
                title="Continue the guide"
                links={[
                  { href: '#why-oklch-works', label: 'See the OKLCH advantages' },
                  { href: '#how-to-build', label: 'Jump to the build steps' },
                ]}
              />
            </section>

            <section id="why-oklch-works" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why OKLCH Works Better for 50-950 Palettes</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Perceptual lightness</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    The lightness channel in OKLCH behaves more evenly, so adjacent steps feel more consistent when you use them in UI components.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Controlled chroma</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    You can intentionally pull chroma back at the very light and very dark ends, which keeps the scale useful instead of washed out or muddy.
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  This is especially useful when the same ramp needs to support multiple product roles: light surfaces, hover states, data highlights, headings, and dark theme surfaces. The scale becomes easier to trust because it feels intentional at both ends.
                </p>
                <p>
                  If you are already convinced by the smoother step progression, move straight to the{' '}
                  <a href="#export-workflow" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                    export workflow
                  </a>{' '}
                  or go build the ramp live in the{' '}
                  <Link href="/tools/oklch-scale-generator" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                    generator
                  </Link>
                  .
                </p>
              </div>
              <SectionAnchorLinks
                title="Next actions"
                links={[
                  { href: '#how-to-build', label: 'Build the scale step by step' },
                  { href: '#export-workflow', label: 'See export-ready outputs' },
                ]}
              />
            </section>

            <ToolCta
              title="Generate a 50-950 ramp from your base color"
              description="Start with one HEX color, preview the full OKLCH ramp, and switch between HEX, RGB, HSL, and OKLCH output before exporting tokens."
              label="Try the OKLCH Scale Generator"
            />

            <section id="how-to-build" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How To Build a Better 50-950 Scale</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <ol className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
                <li>1. Start from a strong base tone that feels correct around the 500 step.</li>
                <li>2. Push lightness upward for 50-400 while reducing chroma so the upper ramp stays usable for surfaces.</li>
                <li>3. Pull lightness downward for 600-950 and recover just enough chroma so the dark end stays rich without becoming muddy.</li>
                <li>4. Test the resulting steps in real UI roles, especially text and dark surfaces, not just palette swatches.</li>
              </ol>
              <div className="mt-6 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  Once the ramp exists, use the <Link href="/tools/apca-contrast-checker" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">APCA Contrast Checker</Link> to pressure-test key steps for text, button fills, and dark mode surfaces.
                </p>
              </div>
              <SectionAnchorLinks
                title="After the build"
                links={[
                  { href: '#export-workflow', label: 'Export the finished scale' },
                  { href: '#practical-tips', label: 'Review implementation tips' },
                ]}
              />
            </section>

            <section id="export-workflow" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Export Workflow</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  A scale is only useful if it can move into production. That is why the generator exports CSS variables, a Tailwind-style colors object, and JSON tokens from the same ramp.
                </p>
                <p>
                  This is where OKLCH becomes more than a color science topic. It becomes a practical token workflow for design systems, front-end code, and product UI decisions.
                </p>
                <p>
                  If you still need broader palette exploration before locking a final ramp, pair the generator with the <Link href="/tools/palette-generator" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">Palette Generator</Link> or review hue relationships in the <Link href="/tools/color-wheel" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">Color Wheel</Link>.
                </p>
                <p>
                  When your export is ready, finish with the{' '}
                  <a href="#practical-tips" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                    implementation checklist
                  </a>{' '}
                  below so the scale survives real product use.
                </p>
              </div>
              <SectionAnchorLinks
                title="Finish the guide"
                links={[
                  { href: '#practical-tips', label: 'Go to practical tips' },
                  { href: '#how-to-build', label: 'Review the build steps again' },
                ]}
              />
            </section>

            <section id="practical-tips" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Practical Tips for Product Teams</h2>
                <a href="#top" className={anchorClassName}>
                  Back to top
                </a>
              </div>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>Do not judge your scale by the middle only. Good ramps survive both light surfaces and very dark UI states.</p>
                <p>Do not over-protect chroma at the ends. Cleaner ramps often come from letting the scale calm down at the top and bottom.</p>
                <p>Always validate a generated ramp against actual roles: text, button fill, card surface, border, and selected state.</p>
                <p>
                  Once you have a draft ramp, return to the live <Link href="/tools/oklch-scale-generator" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">OKLCH Scale Generator</Link> and export the token format your team uses today.
                </p>
              </div>
              <SectionAnchorLinks
                title="Useful jumps"
                links={[
                  { href: '#what-is-oklch', label: 'Back to OKLCH basics' },
                  { href: '#export-workflow', label: 'Back to export workflow' },
                ]}
              />
            </section>

            <ToolCta
              title="Build and export your scale now"
              description="Generate a clean 50-950 ramp, review each step, and export CSS variables, Tailwind config, or JSON tokens in one pass."
              label="Build your OKLCH scale"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
