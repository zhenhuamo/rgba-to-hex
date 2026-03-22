type PreviewTone = 'pass' | 'fail' | 'caution' | 'planned';
type PreviewVariant = 'text' | 'button' | 'surface';

type ColorRolePreviewProps = {
  title: string;
  foregroundColor: string;
  backgroundColor: string;
  sampleText?: string;
  eyebrow?: string;
  caption?: string;
  variant?: PreviewVariant;
  statusLabel?: string;
  statusTone?: PreviewTone;
};

const TONE_STYLES: Record<PreviewTone, string> = {
  pass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  caution: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  fail: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
  planned: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
};

export default function ColorRolePreview({
  title,
  foregroundColor,
  backgroundColor,
  sampleText = 'Accessible color systems start with meaningful role pairs.',
  eyebrow,
  caption,
  variant = 'text',
  statusLabel,
  statusTone = 'planned',
}: ColorRolePreviewProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">{eyebrow}</p> : null}
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
        {statusLabel ? (
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${TONE_STYLES[statusTone]}`}>
            {statusLabel}
          </span>
        ) : null}
      </div>

      {variant === 'button' ? (
        <div className="rounded-3xl border border-black/5 p-8 shadow-inner" style={{ backgroundColor: backgroundColor }}>
          <button
            type="button"
            className="rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg transition"
            style={{ backgroundColor: foregroundColor, color: backgroundColor }}
          >
            {sampleText}
          </button>
          <p className="mt-4 text-sm leading-6" style={{ color: foregroundColor }}>
            Button fills flip the pair direction, which is useful for testing CTA readability and action emphasis.
          </p>
        </div>
      ) : null}

      {variant === 'surface' ? (
        <div className="rounded-3xl border border-black/5 p-6 shadow-inner" style={{ backgroundColor, color: foregroundColor }}>
          <div className="rounded-2xl border border-white/10 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Surface Preview</p>
            <p className="mt-3 text-2xl font-bold">{sampleText}</p>
            <p className="mt-3 text-sm leading-6 opacity-85">
              Cards, settings drawers, and dark surfaces benefit from stronger perceptual separation than simple decorative panels.
            </p>
          </div>
        </div>
      ) : null}

      {variant === 'text' ? (
        <div
          className="rounded-3xl border border-black/5 p-8 shadow-inner"
          style={{ backgroundColor, color: foregroundColor }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">Preview Pair</p>
          <p className="mt-4 text-3xl font-bold leading-tight">{sampleText}</p>
          <p className="mt-4 text-sm leading-6 opacity-85">
            This shared preview block is meant for future APCA, WCAG, palette, and design-token workflows.
          </p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
          <p className="font-medium text-gray-900 dark:text-white">Foreground</p>
          <p className="mt-1 font-mono uppercase tracking-wide">{foregroundColor}</p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
          <p className="font-medium text-gray-900 dark:text-white">Background</p>
          <p className="mt-1 font-mono uppercase tracking-wide">{backgroundColor}</p>
        </div>
      </div>

      {caption ? <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{caption}</p> : null}
    </section>
  );
}
