# RGBA to HEX Color Converter

🎨 Visit: [rgbatohex.com](https://rgbatohex.com/)

## Overview

A professional online color conversion tool that provides multiple color format conversions. Key features include:

- RGBA to HEX conversion
- HEX to RGBA conversion
- HSL to HEX conversion
- CMYK to HEX conversion
- RGB to HSL conversion
- RGB to CMYK conversion

### Key Features

- 🔄 Real-time color preview
- 📊 Professional color management
- 🎯 Transparency support
- 🎨 Professional color scheme suggestions
- ♿ WCAG 2.0 accessibility compliance
- 📱 Responsive design for all devices

### Tech Stack

- Next.js 15（`output: 'export'` 静态导出）
- React
- TypeScript
- Tailwind CSS
- Cloudflare Workers 静态资源托管

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static export (outputs to out/)
npm run build

# Preview the real static build locally on http://localhost:8787
npm run preview
```

## Deployment

The site is deployed to Cloudflare Workers as an assets-only Worker (no runtime
script), and takes over `rgbatohex.com/*` through a **Workers route** — the
existing proxied DNS records are kept as-is, so there is no DNS cutover and no
downtime. `www.rgbatohex.com/*` is handled by a second tiny Worker that 301s to
the apex domain.

```bash
# one-off: authenticate wrangler (the account that owns the rgbatohex.com zone)
npx wrangler login

# build + deploy both Workers
npm run deploy
```

Pushing to `master` also deploys automatically via
`.github/workflows/deploy-cloudflare.yml` (requires `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` repository secrets).

Full migration notes, verification checklist and rollback procedure:
[docs/cloudflare-migration.md](docs/cloudflare-migration.md).

## Online Tools

- [RGBA to HEX Converter](https://rgbatohex.com/)
- [HEX to RGBA Converter](https://rgbatohex.com/tools/hex-to-rgba)
- [HSL to HEX Converter](https://rgbatohex.com/tools/hsl-to-hex)
- [CMYK to HEX Converter](https://rgbatohex.com/tools/cmyk-to-hex)
- [RGB to HSL Converter](https://rgbatohex.com/tools/rgb-to-hsl)
- [RGB to CMYK Converter](https://rgbatohex.com/tools/rgb-to-cmyk)

## Blog Articles

We provide detailed technical articles explaining the principles and implementation of various color conversions:

- [Complete Guide to RGBA to HEX Conversion](https://rgbatohex.com/blog/rgba-to-hex-converter)
- [Understanding HEX to RGBA Conversion](https://rgbatohex.com/blog/hex-to-rgba-converter)
- [HSL to HEX Conversion Tutorial](https://rgbatohex.com/blog/hsl-to-hex-converter)
- [Professional Guide to CMYK to HEX](https://rgbatohex.com/blog/cmyk-to-hex-converter)

## Contributing

We welcome Pull Requests to improve this project. Here's how to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - See [LICENSE](LICENSE) file for details
