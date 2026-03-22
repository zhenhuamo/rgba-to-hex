import Link from 'next/link';
import Navigation from '@/components/Navigation';

const sections = [
  { id: 'what-is-apca', label: 'What Is APCA' },
  { id: 'how-wcag-works', label: 'How WCAG Works' },
  { id: 'key-differences', label: 'Key Differences' },
  { id: 'when-to-use-each', label: 'When To Use Each' },
  { id: 'test-with-tool', label: 'Test With The Tool' },
  { id: 'practical-guidance', label: 'Practical Guidance' },
] as const;

function ToolCta({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/30">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{description}</p>
      <Link
        href="/tools/apca-contrast-checker"
        className="mt-5 inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {label}
      </Link>
    </div>
  );
}

export default function ApcaVsWcagBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <article className="mx-auto mt-8 max-w-5xl">
          <header className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                Accessibility Workflow Guide
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                APCA vs WCAG
              </h1>
              <p className="mt-5 text-xl leading-8 text-gray-600 dark:text-gray-300">
                APCA and WCAG are both trying to answer the same question: can people actually read this text against this background? The difference is that WCAG gives you a familiar ratio, while APCA focuses more directly on perceptual readability, polarity, and modern UI behavior.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900/70">
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you are evaluating body text, muted labels, dark surfaces, or button fills, this guide will help you decide what each system is telling you and when to trust each signal.
                </p>
              </div>
              <Link
                href="/tools/apca-contrast-checker"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Try the APCA Contrast Checker
              </Link>
            </div>
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
          </section>

          <div className="mt-8 space-y-8">
            <section id="what-is-apca" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Is APCA</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  APCA stands for Advanced Perceptual Contrast Algorithm. Instead of treating contrast as a single ratio that behaves the same way in every context, it tries to model how people actually perceive readability. That matters more in interfaces where text can be light-on-dark, thin, muted, or embedded inside layered components.
                </p>
                <p>
                  In practical product work, APCA becomes useful when a team starts asking harder questions: does this muted label still read well? Is this dark mode card actually comfortable? Does this button fill feel strong enough, or just technically acceptable?
                </p>
                <p>
                  Our <Link href="/tools/apca-contrast-checker" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">APCA Contrast Checker</Link> is built for exactly that kind of review, while still keeping the traditional WCAG result visible for teams that need both signals.
                </p>
              </div>
            </section>

            <section id="how-wcag-works" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How WCAG Contrast Works</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  WCAG contrast uses a ratio. That ratio is deeply familiar to designers and developers because it is the benchmark most accessibility tooling, design reviews, and compliance checklists still rely on. If you have ever checked for AA or AAA, you were using this model.
                </p>
                <p>
                  The strength of WCAG is consistency. It is simple to explain, easy to compare, and still necessary in many production workflows. The limitation is that the same ratio does not always capture how comfortable something feels when the polarity flips or when typography becomes subtle.
                </p>
                <p>
                  That is why many teams still need the classic <Link href="/tools/color-contrast" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Color Contrast Checker</Link> and an APCA view side by side.
                </p>
              </div>
            </section>

            <section id="key-differences" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">APCA vs WCAG: Key Differences</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">WCAG ratio</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    <li>Uses a familiar contrast ratio scale</li>
                    <li>Maps easily to AA and AAA checkpoints</li>
                    <li>Still expected in many design-system reviews</li>
                    <li>Best when you need a standardized compliance benchmark</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">APCA score</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    <li>Focuses on perceptual readability instead of a pure ratio</li>
                    <li>Responds differently to light text on dark surfaces</li>
                    <li>Helpful for muted copy, buttons, and dark mode UI</li>
                    <li>Better suited for modern interface states and reading comfort checks</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  The most important mental model is this: the two systems do not always disagree because one is broken. They disagree because they optimize for different signals. If a pair feels questionable in dark mode or for low-emphasis copy, APCA is often the more revealing metric.
                </p>
              </div>
            </section>

            <ToolCta
              title="Compare APCA and WCAG on your colors"
              description="Use the live checker to test the exact pair you are working with, then inspect how it behaves for body text, muted text, buttons, and dark surfaces."
              label="Open the APCA Contrast Checker"
            />

            <section id="when-to-use-each" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">When To Use Each</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Use APCA when reviewing</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    <li>Body text readability in modern UI</li>
                    <li>Muted text and metadata labels</li>
                    <li>CTA buttons and filled controls</li>
                    <li>Dark mode cards and layered surfaces</li>
                    <li>Design-system role decisions</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Use WCAG when reviewing</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    <li>Compliance-oriented documentation</li>
                    <li>Existing workflow baselines and checklists</li>
                    <li>Quick pass/fail contrast reviews</li>
                    <li>Legacy design QA where ratio is still the standard language</li>
                    <li>Cross-team comparisons using a familiar benchmark</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="test-with-tool" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How To Test With The Tool</h2>
              <ol className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300">
                <li>1. Enter your foreground and background colors as HEX values.</li>
                <li>2. Compare the classic WCAG ratio with the APCA Lc score for the same pair.</li>
                <li>3. Review the four scenario previews: body text, muted text, button, and dark mode surface.</li>
                <li>4. Use the result to decide whether the pair is only technically acceptable or actually readable in context.</li>
              </ol>
              <div className="mt-6 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  If you are also testing how those colors behave across different vision conditions, pair the contrast workflow with the <Link href="/tools/color-blindness-simulator" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Color Blindness Simulator</Link> before locking a production token.
                </p>
              </div>
            </section>

            <section id="practical-guidance" className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Practical UI Guidance</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                <p>Do not rely on a single number without looking at the role. A pair that passes for a large button label may still feel weak for body copy.</p>
                <p>Dark mode is where teams often discover the limits of ratio-only thinking. If the interface looks technically compliant but still tiring, APCA usually gives a better clue about why.</p>
                <p>For design systems, the best practice is not to replace WCAG with APCA overnight. Record both. Use WCAG to preserve compliance language, and use APCA to make better day-to-day readability decisions.</p>
                <p>
                  When you are done comparing, go back to the live <Link href="/tools/apca-contrast-checker" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">APCA Contrast Checker</Link> and validate the exact roles you intend to ship.
                </p>
              </div>
            </section>

            <ToolCta
              title="Test your text and background pair now"
              description="Run the live APCA workflow, compare the score with WCAG, and use the scenario previews to decide whether your pair is strong enough for production UI."
              label="Test your colors now"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
