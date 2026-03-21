import Link from 'next/link';
import type { InternalLinkGroup } from '@/lib/seo/internalLinks';

type InternalLinkSectionProps = {
  groups: ReadonlyArray<InternalLinkGroup>;
  title?: string;
};

export default function InternalLinkSection({
  groups,
  title = 'Related Links',
}: InternalLinkSectionProps) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12" aria-label={title}>
      <div className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-800/70">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{group.title}</h3>
              <div className="mt-4 space-y-4">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl border border-transparent p-3 transition hover:border-blue-200 hover:bg-blue-50 dark:hover:border-blue-800/60 dark:hover:bg-gray-900/70"
                  >
                    <span className="block text-base font-medium text-blue-700 dark:text-blue-400">{link.label}</span>
                    <span className="mt-1 block text-sm text-gray-600 dark:text-gray-300">{link.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
