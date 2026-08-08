# Moonlighter 2 Guide

An independent, source-tracked fan guide for **Moonlighter 2: The Endless Vault**.

Live site: <https://moonlighter2guide.com>

The site focuses on beginner routes, items, prices, shop strategy, dungeons, weapons, and release updates. Current platform facts and screenshots are checked against the official Steam store and news pages. Gameplay values remain marked for hands-on verification until they are tested in a playable build.

## Tech stack

- Astro 5 with static output
- Tailwind CSS 4 through `@tailwindcss/vite`
- `@astrojs/sitemap` for sitemap generation
- Local Steam screenshots in `public/images/`

## Local commands

```text
npm install
npm run dev
npm run test
npm run build
npm run preview
```

The production build is written to `dist/`. The repository intentionally does not include `node_modules/`, `dist/`, `.astro/`, or local `output/` files.

## Cloudflare Pages

Use these project settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20`

No server adapter is required because this project outputs a static site.

## Sources

- <https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/>
- <https://store.steampowered.com/news/app/2350790>

## Disclaimer

This is an independent fan site and is not affiliated with or endorsed by Digital Sun or 11 bit studios. Moonlighter 2: The Endless Vault, its screenshots, names, and trademarks belong to their respective owners.
