export type SourceStatus = 'official' | 'platform' | 'official-media';

export interface SourceRef {
  label: string;
  url: string;
  publisher: string;
  status: SourceStatus;
  lastChecked: string;
  note: string;
}

export const SOURCES = {
  steam: {
    label: 'Moonlighter 2 Steam store page',
    url: 'https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: '2026-09-03',
    note: 'App id 2350790. Read September 3, 2026: the release field now shows Sep 2, 2026, the Early Access genre tag is gone, the listed genres are Action, Adventure and RPG, the platform is Windows, and the listing confirms Single-player, Steam Achievements, full controller support, Steam Cloud and Family Sharing.',
  },
  steamNews: {
    label: 'Moonlighter 2 Steam news hub',
    url: 'https://store.steampowered.com/news/app/2350790',
    publisher: 'Digital Sun / 11 bit studios',
    status: 'official',
    lastChecked: '2026-09-03',
    note: 'First-party announcement feed used to track version changes, hotfixes and feature updates after the 1.0 launch.',
  },
  steamLaunchNews: {
    label: 'Official Steam 1.0 date announcement (August 5, 2026)',
    url: 'https://store.steampowered.com/news/app/2350790/view/1840310314339143',
    publisher: 'Digital Sun / 11 bit studios',
    status: 'official',
    lastChecked: '2026-09-03',
    note: 'The pre-launch announcement: Moonlighter 2: The Endless Vault leaves Early Access on September 2, 2026. It listed the four Endless Weapon Aspects, a Machine Gun gadget, the Endless Armour set, Shop Level 5, Endless Vault VII, Hardcore Difficulty, the Bomb Path, and vendors including K33P3R Level 5 and Spark, plus a free demo and a Moonlighter giveaway that ran to August 9.',
  },
  steamVersionOneNews: {
    label: 'Official Steam 1.0 launch announcement (September 2, 2026)',
    url: 'https://store.steampowered.com/news/app/2350790/view/1842846814440235',
    publisher: 'Digital Sun / 11 bit studios',
    status: 'official',
    lastChecked: '2026-09-03',
    note: 'The launch-day post, “Moonlighter 2: The Endless Vault is Available Now!”, read September 3, 2026. It confirms the game is officially out of Early Access on PC with console versions available the same day, and describes the main story conclusion, the Infinite Endless Vault postgame, four Endless Weapon Aspects, Shop Level 5, the Bomb Path, Hardcore Mode, new vendors, cosmetics and Codex pages, and physical editions with Silver Lining Interactive on 13 November 2026.',
  },
} satisfies Record<string, SourceRef>;

export const CORE_SOURCES = [SOURCES.steam, SOURCES.steamNews] as const;
