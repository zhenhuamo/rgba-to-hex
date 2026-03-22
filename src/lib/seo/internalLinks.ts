export type InternalLinkItem = {
  href: string;
  label: string;
  description: string;
};

export type InternalLinkGroup = {
  title: string;
  links: ReadonlyArray<InternalLinkItem>;
};

export const HOME_INTERNAL_LINK_GROUPS: ReadonlyArray<InternalLinkGroup> = [
  {
    title: 'Popular Tools',
    links: [
      {
        href: '/tools/hex-to-rgba',
        label: 'HEX to RGBA Converter',
        description: 'Convert HEX values back to RGBA with alpha transparency support.',
      },
      {
        href: '/tools/color-contrast',
        label: 'Color Contrast Checker',
        description: 'Test contrast ratios and review WCAG accessibility compliance.',
      },
      {
        href: '/tools/palette-generator',
        label: 'Palette Generator',
        description: 'Generate matching color palettes for UI, branding, and illustration work.',
      },
    ],
  },
  {
    title: 'Explore More',
    links: [
      {
        href: '/tools',
        label: 'Browse All Tools',
        description: 'Open the full tool directory and jump into color, image, and utility workflows.',
      },
      {
        href: '/blog',
        label: 'Read the Blog',
        description: 'Find converter guides, accessibility explainers, and workflow tutorials.',
      },
      {
        href: '/color-shades',
        label: 'Color Shades Library',
        description: 'Browse curated shade collections for popular colors and design references.',
      },
    ],
  },
] as const;

export const TOOLS_HUB_INTERNAL_LINK_GROUPS: ReadonlyArray<InternalLinkGroup> = [
  {
    title: 'Core Workflows',
    links: [
      {
        href: '/',
        label: 'RGBA to HEX Converter',
        description: 'Return to the primary converter and embed-friendly homepage entry point.',
      },
      {
        href: '/tools/color-contrast',
        label: 'Color Contrast Checker',
        description: 'Review accessibility ratios before shipping UI colors to production.',
      },
      {
        href: '/tools/palette-generator',
        label: 'Palette Generator',
        description: 'Build matching palettes after converting a base color.',
      },
      {
        href: '/tools/apca-contrast-checker',
        label: 'APCA Contrast Checker',
        description: 'Compare APCA and WCAG results for text, buttons, and dark surfaces.',
      },
    ],
  },
  {
    title: 'Content Hubs',
    links: [
      {
        href: '/blog',
        label: 'Blog Guides',
        description: 'Read long-form tutorials and conversion explainers for the featured tools.',
      },
      {
        href: '/color-shades',
        label: 'Color Shades',
        description: 'Use shade collections to explore variations for common design colors.',
      },
      {
        href: '/tools/en/invert-image',
        label: 'Invert Image Tool',
        description: 'Open the multilingual image inversion workflow and related language variants.',
      },
    ],
  },
] as const;

const defaultToolGroups: ReadonlyArray<InternalLinkGroup> = [
  {
    title: 'Related Tool Paths',
    links: [
      {
        href: '/tools',
        label: 'All Tools',
        description: 'Browse the full tool index for adjacent color and image workflows.',
      },
      {
        href: '/blog',
        label: 'Blog Guides',
        description: 'Read practical walkthroughs and educational articles for key tools.',
      },
      {
        href: '/color-shades',
        label: 'Color Shades',
        description: 'Explore curated shade references to extend color exploration.',
      },
    ],
  },
] as const;

const defaultBlogGroups: ReadonlyArray<InternalLinkGroup> = [
  {
    title: 'Keep Exploring',
    links: [
      {
        href: '/blog',
        label: 'More Blog Articles',
        description: 'Continue with related conversion explainers and workflow tutorials.',
      },
      {
        href: '/tools',
        label: 'Browse All Tools',
        description: 'Open the working tools behind the guides and run live conversions.',
      },
      {
        href: '/color-shades',
        label: 'Color Shades',
        description: 'Jump from theory into practical color references and shade collections.',
      },
    ],
  },
] as const;

const toolRelatedLinksMap: Record<string, ReadonlyArray<InternalLinkGroup>> = {
  '/tools/color-contrast': [
    {
      title: 'Accessibility Workflow',
      links: [
        { href: '/tools/apca-contrast-checker', label: 'APCA Contrast Checker', description: 'Compare perceptual APCA scoring with the classic WCAG ratio workflow.' },
        { href: '/tools/color-blindness-simulator', label: 'Color Blindness Simulator', description: 'Preview how color choices behave across common vision conditions.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Build accessible palette variations after checking contrast.' },
        { href: '/blog/color-contrast-checker', label: 'Color Contrast Checker Guide', description: 'Read the supporting article behind the live contrast workflow.' },
      ],
    },
  ],
  '/tools/palette-generator': [
    {
      title: 'Palette Workflow',
      links: [
        { href: '/tools/color-wheel', label: 'Color Wheel', description: 'Review harmony relationships before generating a palette.' },
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Validate palette combinations for readability and accessibility.' },
        { href: '/tools/oklch-scale-generator', label: 'OKLCH Scale Generator', description: 'Turn a base brand color into a smooth 50-950 ramp for tokens and UI systems.' },
        { href: '/blog/color-wheel-tool', label: 'Color Wheel Guide', description: 'Learn the theory behind complementary and analogous palette building.' },
      ],
    },
  ],
  '/tools/hex-to-rgba': [
    {
      title: 'Conversion Workflow',
      links: [
        { href: '/', label: 'RGBA to HEX Converter', description: 'Switch back to the primary RGBA to HEX conversion workflow.' },
        { href: '/tools/rgb-to-hsl', label: 'RGB to HSL Converter', description: 'Translate output colors into HSL for easier visual tuning.' },
        { href: '/blog/hex-to-rgba-converter', label: 'HEX to RGBA Guide', description: 'Read the related article covering use cases and examples.' },
      ],
    },
  ],
  '/tools/hsl-to-hex': [
    {
      title: 'Conversion Workflow',
      links: [
        { href: '/tools/rgb-to-hsl', label: 'RGB to HSL Converter', description: 'Move between RGB and HSL while refining hue, saturation, and lightness.' },
        { href: '/tools/color-wheel', label: 'Color Wheel', description: 'Use hue relationships to validate HSL adjustments visually.' },
        { href: '/blog/hsl-to-hex-converter', label: 'HSL to HEX Guide', description: 'Open the matching article for examples and implementation notes.' },
      ],
    },
  ],
  '/tools/cmyk-to-hex': [
    {
      title: 'Print to Screen Workflow',
      links: [
        { href: '/tools/rgb-to-cmyk', label: 'RGB to CMYK Converter', description: 'Move designs back toward print-ready values when needed.' },
        { href: '/tools/cmyk-to-rgb', label: 'CMYK to RGB Converter', description: 'Check RGB output before converting to HEX for digital use.' },
        { href: '/blog/cmyk-to-hex-converter', label: 'CMYK to HEX Guide', description: 'Read the workflow explanation and digital color context.' },
      ],
    },
  ],
  '/tools/rgb-to-hsl': [
    {
      title: 'Color Editing Workflow',
      links: [
        { href: '/tools/hsl-to-hex', label: 'HSL to HEX Converter', description: 'Convert tuned HSL values into production-ready HEX output.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Create related palettes once hue and saturation are dialed in.' },
        { href: '/blog/rgb-to-hsl-converter', label: 'RGB to HSL Guide', description: 'Review the related article for theory and usage patterns.' },
      ],
    },
  ],
  '/tools/rgb-to-cmyk': [
    {
      title: 'Screen to Print Workflow',
      links: [
        { href: '/tools/cmyk-to-rgb', label: 'CMYK to RGB Converter', description: 'Round-trip values between print and screen color spaces.' },
        { href: '/tools/cmyk-to-hex', label: 'CMYK to HEX Converter', description: 'Convert print-oriented colors into a web-safe HEX endpoint.' },
        { href: '/blog/rgb-to-cmyk-converter', label: 'RGB to CMYK Guide', description: 'Read the article covering print preparation and channel shifts.' },
      ],
    },
  ],
  '/tools/cmyk-to-rgb': [
    {
      title: 'Print to Screen Workflow',
      links: [
        { href: '/tools/cmyk-to-hex', label: 'CMYK to HEX Converter', description: 'Move from print colors to a web-ready hexadecimal format.' },
        { href: '/tools/rgb-to-cmyk', label: 'RGB to CMYK Converter', description: 'Compare reverse conversion results during design handoff.' },
        { href: '/blog/cmyk-to-rgb-converter', label: 'CMYK to RGB Guide', description: 'Open the matching article for device and channel context.' },
      ],
    },
  ],
  '/tools/apca-contrast-checker': [
    {
      title: 'Accessibility Review Workflow',
      links: [
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Compare APCA scoring with the classic WCAG ratio workflow.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Turn high-contrast pairs into reusable palettes for product UI.' },
        { href: '/blog/apca-vs-wcag', label: 'APCA vs WCAG Guide', description: 'Read the dedicated explainer before standardizing contrast decisions in your system.' },
      ],
    },
  ],
  '/tools/oklch-scale-generator': [
    {
      title: 'Scale Building Workflow',
      links: [
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Start from a base color idea, then turn it into a full OKLCH ramp.' },
        { href: '/tools/color-wheel', label: 'Color Wheel', description: 'Review hue relationships before locking your 50-950 scale.' },
        { href: '/blog/oklch-color-scale', label: 'OKLCH Scale Guide', description: 'Read why OKLCH produces cleaner 50-950 ramps for modern product systems.' },
        { href: '/tools/apca-contrast-checker', label: 'APCA Contrast Checker', description: 'Pressure-test the generated steps for readable text and dark surfaces.' },
      ],
    },
  ],
} as const;

const blogRelatedLinksMap: Record<string, ReadonlyArray<InternalLinkGroup>> = {
  '/blog/rgba-to-hex-converter': [
    {
      title: 'Use The Tool',
      links: [
        { href: '/', label: 'RGBA to HEX Converter', description: 'Run the live converter described in this article.' },
        { href: '/tools/hex-to-rgba', label: 'HEX to RGBA Converter', description: 'Switch directions when you need to recover alpha-enabled RGBA values.' },
        { href: '/blog/hex-to-rgba-converter', label: 'HEX to RGBA Guide', description: 'Read the reverse workflow article for implementation context.' },
      ],
    },
  ],
  '/blog/hex-to-rgba-converter': [
    {
      title: 'Use The Tool',
      links: [
        { href: '/tools/hex-to-rgba', label: 'HEX to RGBA Converter', description: 'Open the working converter referenced in this guide.' },
        { href: '/', label: 'RGBA to HEX Converter', description: 'Compare reverse conversion results on the homepage tool.' },
        { href: '/blog/rgba-to-hex-converter', label: 'RGBA to HEX Guide', description: 'Continue with the opposite conversion path.' },
      ],
    },
  ],
  '/blog/hsl-to-hex-converter': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/tools/hsl-to-hex', label: 'HSL to HEX Converter', description: 'Run live HSL to HEX conversion while reading the guide.' },
        { href: '/tools/rgb-to-hsl', label: 'RGB to HSL Converter', description: 'Convert RGB colors into editable HSL values first.' },
        { href: '/blog/rgb-to-hsl-converter', label: 'RGB to HSL Guide', description: 'Read the complementary HSL workflow article.' },
      ],
    },
  ],
  '/blog/cmyk-to-hex-converter': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/tools/cmyk-to-hex', label: 'CMYK to HEX Converter', description: 'Use the live converter behind this article.' },
        { href: '/tools/cmyk-to-rgb', label: 'CMYK to RGB Converter', description: 'Check RGB output before moving to HEX.' },
        { href: '/blog/cmyk-to-rgb-converter', label: 'CMYK to RGB Guide', description: 'Continue with the screen conversion explainer.' },
      ],
    },
  ],
  '/blog/cmyk-to-rgb-converter': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/tools/cmyk-to-rgb', label: 'CMYK to RGB Converter', description: 'Use the live converter referenced in this article.' },
        { href: '/tools/rgb-to-cmyk', label: 'RGB to CMYK Converter', description: 'Compare forward and reverse print workflows.' },
        { href: '/blog/rgb-to-cmyk-converter', label: 'RGB to CMYK Guide', description: 'Open the paired article for the reverse conversion.' },
      ],
    },
  ],
  '/blog/rgb-to-cmyk-converter': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/tools/rgb-to-cmyk', label: 'RGB to CMYK Converter', description: 'Open the live converter used in this tutorial.' },
        { href: '/tools/cmyk-to-rgb', label: 'CMYK to RGB Converter', description: 'Check the return path back to digital output.' },
        { href: '/blog/cmyk-to-hex-converter', label: 'CMYK to HEX Guide', description: 'Continue toward web-ready print conversion output.' },
      ],
    },
  ],
  '/blog/rgb-to-hsl-converter': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/tools/rgb-to-hsl', label: 'RGB to HSL Converter', description: 'Use the matching tool while adjusting color channels.' },
        { href: '/tools/hsl-to-hex', label: 'HSL to HEX Converter', description: 'Move tuned HSL colors into a HEX workflow.' },
        { href: '/blog/hsl-to-hex-converter', label: 'HSL to HEX Guide', description: 'Read the next step in the HSL-based conversion chain.' },
      ],
    },
  ],
  '/blog/color-contrast-checker': [
    {
      title: 'Accessibility Workflow',
      links: [
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Test contrast combinations directly in the live tool.' },
        { href: '/tools/color-blindness-simulator', label: 'Color Blindness Simulator', description: 'Review accessibility choices across vision conditions.' },
        { href: '/blog/color-blindness-simulator', label: 'Color Blindness Simulator Guide', description: 'Continue with adjacent accessibility guidance.' },
      ],
    },
  ],
  '/blog/color-blindness-simulator': [
    {
      title: 'Accessibility Workflow',
      links: [
        { href: '/tools/color-blindness-simulator', label: 'Color Blindness Simulator', description: 'Open the live simulation tool alongside this article.' },
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Validate text and UI contrast after simulation checks.' },
        { href: '/blog/color-contrast-checker', label: 'Color Contrast Checker Guide', description: 'Keep exploring accessibility-focused color guidance.' },
      ],
    },
  ],
  '/blog/color-wheel-tool': [
    {
      title: 'Color Theory Workflow',
      links: [
        { href: '/tools/color-wheel', label: 'Color Wheel', description: 'Use the live wheel while reviewing harmony concepts.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Turn harmony choices into reusable palette outputs.' },
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Validate the final combinations for readability.' },
      ],
    },
  ],
  '/blog/mixbox-paint-mixer': [
    {
      title: 'Related Color Tools',
      links: [
        { href: '/tools/mixer-painter', label: 'Painter Mixer Tool', description: 'Open the practical mixing workflow connected to this article.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Create digital palette variations after paint mixing decisions.' },
        { href: '/tools/color-wheel', label: 'Color Wheel', description: 'Use harmony references to refine paint combinations.' },
      ],
    },
  ],
  '/blog/rgba-to-hex-8-digit-converter': [
    {
      title: 'Alpha Color Workflow',
      links: [
        { href: '/', label: 'RGBA to HEX Converter', description: 'Use the live converter for transparency-aware color output.' },
        { href: '/tools/hex-to-rgba', label: 'HEX to RGBA Converter', description: 'Decode 8-digit HEX values back into RGBA channels.' },
        { href: '/blog/rgba-to-hex-converter', label: 'RGBA to HEX Guide', description: 'Review the broader RGBA to HEX conversion basics.' },
      ],
    },
  ],
  '/blog/rgba-to-hex': [
    {
      title: 'Related Conversion Paths',
      links: [
        { href: '/', label: 'RGBA to HEX Converter', description: 'Launch the core converter from the article overview.' },
        { href: '/blog/rgba-to-hex-converter', label: 'RGBA to HEX Converter Guide', description: 'Open the detailed tutorial for this conversion flow.' },
        { href: '/tools/hex-to-rgba', label: 'HEX to RGBA Converter', description: 'Jump to the reverse conversion when needed.' },
      ],
    },
  ],
  '/blog/apca-vs-wcag': [
    {
      title: 'APCA Workflow',
      links: [
        { href: '/tools/apca-contrast-checker', label: 'APCA Contrast Checker', description: 'Test the exact foreground/background pair discussed in this guide.' },
        { href: '/tools/color-contrast', label: 'Color Contrast Checker', description: 'Compare the traditional WCAG ratio workflow against APCA results.' },
        { href: '/tools/color-blindness-simulator', label: 'Color Blindness Simulator', description: 'Check whether readable contrast also survives different vision conditions.' },
      ],
    },
  ],
  '/blog/oklch-color-scale': [
    {
      title: 'OKLCH Workflow',
      links: [
        { href: '/tools/oklch-scale-generator', label: 'OKLCH Scale Generator', description: 'Generate the 50-950 ramp described in this guide and export it for real product use.' },
        { href: '/tools/palette-generator', label: 'Palette Generator', description: 'Explore broader palette directions before narrowing to a production scale.' },
        { href: '/tools/apca-contrast-checker', label: 'APCA Contrast Checker', description: 'Validate important scale steps for text, buttons, and dark mode surfaces.' },
      ],
    },
  ],
} as const;

export function getToolRelatedLinkGroups(path: string): ReadonlyArray<InternalLinkGroup> {
  return toolRelatedLinksMap[path] ?? defaultToolGroups;
}

export function getBlogRelatedLinkGroups(path: string): ReadonlyArray<InternalLinkGroup> {
  return blogRelatedLinksMap[path] ?? defaultBlogGroups;
}
