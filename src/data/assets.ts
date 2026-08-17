export interface SiteAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl: string;
}

const steamUrl = 'https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/';

export const ASSETS = {
  hero: {
    src: '/images/moonlighter-2-shot-1.jpg',
    alt: 'Moonlighter 2 screenshot showing a colorful dungeon combat scene.',
    width: 1920,
    height: 1080,
    credit: 'Moonlighter 2 Steam store screenshot',
    sourceUrl: steamUrl,
  },
  header: {
    src: '/images/moonlighter-2-header.jpg',
    alt: 'Moonlighter 2: The Endless Vault Steam header artwork.',
    width: 460,
    height: 215,
    credit: 'Moonlighter 2 Steam store header',
    sourceUrl: steamUrl,
  },
  shot2: {
    src: '/images/moonlighter-2-shot-2.jpg',
    alt: 'Moonlighter 2 screenshot from the Steam store gallery.',
    width: 1920,
    height: 1080,
    credit: 'Moonlighter 2 Steam store screenshot',
    sourceUrl: steamUrl,
  },
  shot3: {
    src: '/images/moonlighter-2-shot-3.jpg',
    alt: 'Moonlighter 2 screenshot from the Steam store gallery.',
    width: 1920,
    height: 1080,
    credit: 'Moonlighter 2 Steam store screenshot',
    sourceUrl: steamUrl,
  },
  shot4: {
    src: '/images/moonlighter-2-shot-4.jpg',
    alt: 'Moonlighter 2 screenshot from the Steam store gallery.',
    width: 1920,
    height: 1080,
    credit: 'Moonlighter 2 Steam store screenshot',
    sourceUrl: steamUrl,
  },
  shot5: {
    src: '/images/moonlighter-2-shot-5.jpg',
    alt: 'Moonlighter 2 screenshot from the Steam store gallery.',
    width: 1920,
    height: 1080,
    credit: 'Moonlighter 2 Steam store screenshot',
    sourceUrl: steamUrl,
  },
} satisfies Record<string, SiteAsset>;

export type AssetKey = keyof typeof ASSETS;

export const PAGE_ASSETS: Record<string, AssetKey> = {
  guides: 'hero',
  'moonlighter-2-switch-2': 'header',
  'gameplay-preview': 'hero',
  'beginner-guide': 'shot2',
  items: 'shot3',
  prices: 'shot4',
  'shop-guide': 'shot5',
  'dungeon-guide': 'shot2',
  walkthrough: 'shot3',
  weapons: 'shot4',
  'release-date': 'header',
  'co-op-status': 'shot5',
  'version-1-release-date': 'shot5',
  faq: 'shot5',
  about: 'header',
  contact: 'shot2',
  'privacy-policy': 'header',
};

export function getPageAsset(slug: string): SiteAsset {
  return ASSETS[PAGE_ASSETS[slug] ?? 'hero'];
}
