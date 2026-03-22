type ContrastScoreCardStatus = 'ready' | 'warning' | 'planned' | 'pass' | 'fail' | 'caution';

type ContrastScoreCardProps = {
  title: string;
  score: string;
  status: ContrastScoreCardStatus;
  description: string;
  details?: ReadonlyArray<string>;
};

const STATUS_STYLES: Record<ContrastScoreCardStatus, { badge: string; panel: string; label: string }> = {
  ready: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    panel: 'from-emerald-50 to-white dark:from-emerald-950/50 dark:to-gray-900',
    label: 'Ready',
  },
  warning: {
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    panel: 'from-amber-50 to-white dark:from-amber-950/40 dark:to-gray-900',
    label: 'Review',
  },
  planned: {
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
    panel: 'from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-900',
    label: 'Planned',
  },
  pass: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    panel: 'from-emerald-50 to-white dark:from-emerald-950/50 dark:to-gray-900',
    label: 'Pass',
  },
  fail: {
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
    panel: 'from-rose-50 to-white dark:from-rose-950/40 dark:to-gray-900',
    label: 'Fail',
  },
  caution: {
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    panel: 'from-amber-50 to-white dark:from-amber-950/40 dark:to-gray-900',
    label: 'Caution',
  },
};

export default function ContrastScoreCard({
  title,
  score,
  status,
  description,
  details = [],
}: ContrastScoreCardProps) {
  const styles = STATUS_STYLES[status];

  return (
    <section className={`rounded-3xl border border-gray-200 bg-gradient-to-br ${styles.panel} p-6 shadow-sm dark:border-gray-700`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{score}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles.badge}`}>
          {styles.label}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>

      {details.length ? (
        <ul className="mt-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-current opacity-70" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
