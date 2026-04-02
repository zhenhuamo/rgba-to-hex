export type ToolRegistryCategory =
  | 'accessibility'
  | 'color-scale'
  | 'design-tokens'
  | 'color-conversion'
  | 'color-tools';

export type ToolRegistryPriority = 'P0' | 'P1' | 'P2';

export type ToolRegistryStatus = 'live' | 'planned' | 'draft';

export type ToolRegistryItem = {
  name: string;
  href: string;
  category: ToolRegistryCategory;
  priority: ToolRegistryPriority;
  keywords: string[];
  status: ToolRegistryStatus;
  featured: boolean;
  indexable: boolean;
  changeFrequency: 'weekly' | 'monthly';
  sitemapPriority: number;
};

const FEATURED_TOOL_ORDER = [
  '/',
  '/tools/color-contrast',
  '/tools/palette-generator',
  '/tools/hex-to-rgba',
  '/tools/hsl-to-hex',
  '/tools/rgb-to-hsl',
  '/tools/apca-contrast-checker',
  '/tools/accessible-palette-generator',
  '/tools/light-dark-theme-generator',
  '/tools/oklch-scale-generator',
  '/tools/design-token-color-exporter',
] as const;

const STATUS_ORDER: Record<ToolRegistryStatus, number> = {
  live: 0,
  planned: 1,
  draft: 2,
};

export const TOOL_REGISTRY: ReadonlyArray<ToolRegistryItem> = [
  {
    name: 'RGBA to HEX Converter',
    href: '/',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['rgba to hex', 'hex color converter', 'rgba converter', 'color conversion'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 1,
  },
  {
    name: 'Color Contrast Checker',
    href: '/tools/color-contrast',
    category: 'accessibility',
    priority: 'P0',
    keywords: ['color contrast checker', 'wcag contrast checker', 'accessibility color checker'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'Palette Generator',
    href: '/tools/palette-generator',
    category: 'color-tools',
    priority: 'P0',
    keywords: ['palette generator', 'color palette generator', 'ui palette tool'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'HEX to RGBA',
    href: '/tools/hex-to-rgba',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['hex to rgba', 'hex converter', 'rgba color converter'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'HSL to HEX',
    href: '/tools/hsl-to-hex',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['hsl to hex', 'hsl color converter', 'hex conversion tool'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'RGB to HSL',
    href: '/tools/rgb-to-hsl',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['rgb to hsl', 'rgb color converter', 'hsl conversion tool'],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'RGB to CMYK',
    href: '/tools/rgb-to-cmyk',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['rgb to cmyk', 'print color converter', 'rgb cmyk conversion'],
    status: 'live',
    featured: false,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'CMYK to RGB',
    href: '/tools/cmyk-to-rgb',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['cmyk to rgb', 'screen color converter', 'cmyk rgb conversion'],
    status: 'live',
    featured: false,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'CMYK to HEX',
    href: '/tools/cmyk-to-hex',
    category: 'color-conversion',
    priority: 'P0',
    keywords: ['cmyk to hex', 'print to hex', 'cmyk hex conversion'],
    status: 'live',
    featured: false,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'APCA Contrast Checker',
    href: '/tools/apca-contrast-checker',
    category: 'accessibility',
    priority: 'P0',
    keywords: [
      'apca contrast checker',
      'wcag and apca contrast',
      'apca accessibility tool',
      'accessible color checker',
      'dark mode contrast checker',
    ],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'Accessible Palette Generator',
    href: '/tools/accessible-palette-generator',
    category: 'accessibility',
    priority: 'P1',
    keywords: [
      'accessible palette generator',
      'wcag color palette',
      'apca color palette',
      'accessible color roles',
      'ui accessibility palette',
      'color accessibility generator',
    ],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'Light & Dark Theme Generator',
    href: '/tools/light-dark-theme-generator',
    category: 'design-tokens',
    priority: 'P1',
    keywords: [
      'light dark theme generator',
      'dark mode color palette generator',
      'theme token generator',
      'shadcn theme generator',
      'accessible dark mode colors',
      'brand color dark mode',
    ],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'OKLCH Scale Generator',
    href: '/tools/oklch-scale-generator',
    category: 'color-scale',
    priority: 'P0',
    keywords: [
      'oklch scale generator',
      'oklch palette generator',
      '50 950 color scale',
      'tailwind color scale generator',
      'brand color scale',
      'oklch to hex palette',
    ],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
  {
    name: 'Design Token Color Exporter',
    href: '/tools/design-token-color-exporter',
    category: 'design-tokens',
    priority: 'P0',
    keywords: [
      'design token color exporter',
      'css variables generator',
      'tailwind color tokens',
      'json design tokens',
      'color token exporter',
      'design system color tokens',
    ],
    status: 'live',
    featured: true,
    indexable: true,
    changeFrequency: 'monthly',
    sitemapPriority: 0.8,
  },
] as const;

function sortToolsByRegistryRules(tools: ReadonlyArray<ToolRegistryItem>) {
  return [...tools].sort((left, right) => {
    const statusOrder = STATUS_ORDER[left.status] - STATUS_ORDER[right.status];
    if (statusOrder !== 0) {
      return statusOrder;
    }

    const leftIndex = FEATURED_TOOL_ORDER.indexOf(left.href as (typeof FEATURED_TOOL_ORDER)[number]);
    const rightIndex = FEATURED_TOOL_ORDER.indexOf(right.href as (typeof FEATURED_TOOL_ORDER)[number]);

    const normalizedLeftIndex = leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex;
    const normalizedRightIndex = rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex;

    if (normalizedLeftIndex !== normalizedRightIndex) {
      return normalizedLeftIndex - normalizedRightIndex;
    }

    return left.name.localeCompare(right.name);
  });
}

export function getFeaturedTools(): ReadonlyArray<ToolRegistryItem> {
  return sortToolsByRegistryRules(
    TOOL_REGISTRY.filter((tool) => tool.featured && tool.status !== 'draft')
  );
}

export function getLiveTools(): ReadonlyArray<ToolRegistryItem> {
  return TOOL_REGISTRY.filter((tool) => tool.status === 'live');
}
