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
    lastChecked: '2026-08-07',
    note: 'App id 2350790, Early Access status, developer, publisher, release field, Windows platform, categories, screenshots, and published game description.',
  },
  steamNews: {
    label: 'Moonlighter 2 Steam news hub',
    url: 'https://store.steampowered.com/news/app/2350790',
    publisher: 'Digital Sun / 11 bit studios',
    status: 'official',
    lastChecked: '2026-08-07',
    note: 'First-party announcements and roadmap updates used to track any future 1.0 date or feature change.',
  },
} satisfies Record<string, SourceRef>;

export const CORE_SOURCES = [SOURCES.steam, SOURCES.steamNews] as const;
