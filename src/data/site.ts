import { SOURCES } from './sources';

export interface PageSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: { label: string; text: string };
}

export interface PageData {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  status: 'Verified' | 'Not yet verified' | 'Launch-day update';
  intro: string;
  sections: PageSection[];
  table?: { heading: string; headers: string[]; rows: string[][] };
}

export const SITE = {
  name: 'Moonlighter 2 Guide',
  shortName: 'M2',
  url: 'https://moonlighter2guide.org',
  tagline: 'Source-tracked fan guide',
  description:
    'Independent Moonlighter 2: The Endless Vault guide with source-tracked shop, item, price, dungeon, weapon, and beginner pages.',
  locale: 'en',
  gameName: 'Moonlighter 2: The Endless Vault',
  developer: 'Digital Sun',
  publisher: '11 bit studios',
  appId: '2350790',
  releaseWindow: 'Early Access since November 19, 2025',
  steamReleaseText: 'Nov 19, 2025',
  releaseStatus: 'Steam currently lists the game as released Early Access; no 1.0 date is published on the store page.',
  steamUrl: SOURCES.steam.url,
  steamNewsUrl: SOURCES.steamNews.url,
  contactEmail: 'hello@moonlighter2guide.org',
  lastVerified: '2026-08-07',
  heroImage: 'moonlighter-2-shot-1.jpg',
  themeColor: '#d99a50',
  genres: ['Action', 'Adventure', 'RPG', 'Early Access'],
  platforms: ['Windows'],
} as const;

export const NAV = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Items', href: '/items/' },
  { label: 'Prices', href: '/prices/' },
  { label: 'Shop', href: '/shop-guide/' },
  { label: 'Dungeons', href: '/dungeon-guide/' },
  { label: 'Weapons', href: '/weapons/' },
  { label: 'Release', href: '/release-date/' },
] as const;

export const LATEST_GUIDES = [
  {
    href: '/items/',
    title: 'Items tracker',
    description: 'A source-aware inventory of relics and loot categories, with unknown values kept visible until tested.',
    priority: 'Core tool',
  },
  {
    href: '/prices/',
    title: 'Prices tracker',
    description: 'A launch-ready table for observed sale prices and customer reactions, without invented numbers.',
    priority: 'Core tool',
  },
  {
    href: '/beginner-guide/',
    title: 'Beginner guide',
    description: 'A verified route through dungeon runs, loot organization, selling, and village reinvestment.',
    priority: 'Start here',
  },
] as const;

export const OFFICIAL_FACTS = [
  { label: 'Steam state', value: 'Released into Early Access on November 19, 2025; the current Steam page is not marked coming soon.', source: SOURCES.steam },
  { label: 'Developer / publisher', value: 'Digital Sun / 11 bit studios.', source: SOURCES.steam },
  { label: 'Core loop', value: 'Explore dungeons, gather relics, sell them in your shop, and reinvest in the village.', source: SOURCES.steam },
  { label: 'Pricing system', value: 'The Steam description says the player sets their own price and reads customers to find the right deal.', source: SOURCES.steam },
  { label: 'World anchor', value: 'The player and other townsfolk are stranded in the village of Tresna.', source: SOURCES.steam },
  { label: 'Endless Vault', value: 'The Endless Vault is described as an ancient artifact with trials that test merchants and reward town upgrades.', source: SOURCES.steam },
] as const;

export const REQUIRED_GUIDES = [
  { href: '/beginner-guide/', title: 'Beginner Guide', description: 'A fact-first first-session route built from the published dungeon, shop, and town loop.', priority: 'P0', image: 'shot2' },
  { href: '/items/', title: 'Items & Relics', description: 'Track what is officially described, what is observed, and what still needs a hands-on entry.', priority: 'P0', image: 'shot3' },
  { href: '/prices/', title: 'Item Prices', description: 'The core tool page for observed sale prices and customer responses after testing.', priority: 'P0', image: 'shot4' },
  { href: '/shop-guide/', title: 'Shop Guide', description: 'Use the confirmed pricing, customer-reading, decoration, and perk systems as the page spine.', priority: 'P1', image: 'shot5' },
  { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Plan routes around relic collection, risk, backpack space, and the published deeper-is-better reward loop.', priority: 'P1', image: 'hero' },
  { href: '/walkthrough/', title: 'Walkthrough', description: 'A release-aware route framework that avoids claiming unplayed story outcomes.', priority: 'P1', image: 'shot2' },
  { href: '/weapons/', title: 'Weapons & Upgrades', description: 'Officially confirmed weapon, armor, gadget, and village upgrade categories.', priority: 'P2', image: 'shot3' },
  { href: '/release-date/', title: 'Release Date', description: 'Current Steam Early Access status and a tracker for any future 1.0 announcement.', priority: 'P2', image: 'header' },
  { href: '/co-op-status/', title: 'Multiplayer Status', description: 'Steam-confirmed single-player status and the current answer on co-op or online multiplayer.', priority: 'Status', image: 'shot5' },
] as const;

export const FAQS = [
  {
    question: 'When did Moonlighter 2: The Endless Vault enter Early Access?',
    answer: 'The current Steam store page lists November 19, 2025 as the release date and identifies the game as Early Access. This guide does not replace that with an unverified 1.0 date.',
  },
  {
    question: 'Is Moonlighter 2 currently on Steam?',
    answer: 'Yes. Steam lists Moonlighter 2: The Endless Vault as a Windows game released into Early Access. The listing also includes single-player, controller support, Steam Cloud, and Family Sharing categories.',
  },
  {
    question: 'What is the main gameplay loop in Moonlighter 2?',
    answer: 'The Steam description connects dungeon exploration, relic collection, shop selling, player-set prices, village investment, and upgrades into one loop.',
  },
  {
    question: 'Can I see confirmed Moonlighter 2 item prices here?',
    answer: 'The prices page is prepared for observed data, but a number is only published after it has been checked in the game and recorded with a version or test note. Steam does not provide a complete item-price table.',
  },
  {
    question: 'Is Moonlighter 2 single-player?',
    answer: 'Steam currently lists Single-player as a category. It also lists full controller support and gamepad recommended.',
  },
] ;

export const PAGE_DATA: Record<string, PageData> = {
  guides: {
    slug: 'guides',
    title: 'Moonlighter 2 Guide Hub',
    description: 'A source-tracked Moonlighter 2 guide hub for beginners, items, prices, shops, dungeons, weapons, and release updates.',
    kicker: 'Guide hub',
    status: 'Verified',
    intro: 'This hub organizes the parts of Moonlighter 2 that the current Steam listing actually describes: a dungeon run, a backpack full of loot, a shop where you set prices, and a village that benefits when you reinvest.',
    sections: [
      { heading: 'What this guide can verify now', paragraphs: ['Moonlighter 2: The Endless Vault is an action RPG with roguelike elements in Early Access. Steam names Digital Sun as developer and 11 bit studios as publisher, and describes a stranded group rebuilding a life in Tresna.'], bullets: ['Dungeon exploration and relic collection', 'Player-set shop prices and customer reactions', 'Weapons, armor, shop decorations, perks, and town investment', 'The Endless Vault as a challenge tied to town upgrades'] },
      { heading: 'How to use the site', paragraphs: ['Use Items and Prices when you need a data table. Use Shop and Dungeon Guide when you need a repeatable loop. Use Walkthrough for a cautious route framework. Every page separates Steam facts from values that need an in-game test.'], note: { label: 'Data rule', text: 'A missing number is intentionally shown as unverified. It is more useful to keep a clean field ready for a hands-on entry than to publish a guessed value.' } },
    ],
  },
  'beginner-guide': {
    slug: 'beginner-guide',
    title: 'Moonlighter 2 Beginner Guide',
    description: 'A fact-first Moonlighter 2 beginner guide covering dungeon runs, relics, shop prices, and village reinvestment.',
    kicker: 'First session',
    status: 'Verified',
    intro: 'Moonlighter 2 asks you to manage two connected roles: adventurer and merchant. The reliable pre-launch plan is to understand the loop and reserve all exact builds, item values, and route claims for hands-on testing.',
    sections: [
      { heading: 'Start with the two-role loop', paragraphs: ['Steam presents the game as an action RPG with roguelike elements. You leave the village to explore dangerous dungeons, gather relics, return with a backpack of loot, and sell that loot in your shop.'], bullets: ['Treat a dungeon run as a risk-and-reward trip, not only a combat stage.', 'Keep the shop step connected to the run: loot has no value to your progress until it is sold or used for an upgrade.', 'Reinvest in the village because the Steam description links a growing village with better weapons, armor, upgrades, and new people.'] },
      { heading: 'What to record on the first real run', paragraphs: ['The Steam page confirms the systems, but it does not publish a complete item database. On the first playable run, record the item name, where it came from, the displayed sale price, customer reaction, and whether the result changed after an upgrade or event.'], note: { label: 'Not yet verified', text: 'No exact optimal price, best weapon, dungeon route, or boss strategy is published here before a reproducible in-game test.' } },
      { heading: 'The clean progression order', paragraphs: ['A sensible recording order follows the official loop: survive a dungeon, sort relics, test one price, sell, then check which village investment or equipment option became available. This is a workflow recommendation, not an unverified claim about the strongest build.'] },
    ],
  },
  items: {
    slug: 'items',
    title: 'Moonlighter 2 Items and Relics',
    description: 'A source-tracked Moonlighter 2 items and relics page with clear boundaries between Steam facts and future hands-on data.',
    kicker: 'Core tool',
    status: 'Launch-day update',
    intro: 'Steam confirms that dungeon runs produce relics and that the player sells loot to develop the shop and village. The complete names, stats, drop tables, and values need a playable data pass before they can be called a reliable item list.',
    sections: [
      { heading: 'Confirmed item role', paragraphs: ['The official store description uses relics, loot, battered scrap, weapons, armor, gadgets, shop decorations, and perks as the building blocks of the adventure-and-merchant loop. It also says value is not fixed by a published universal price: the player decides the sale price.'], bullets: ['Relics and other loot come from dungeon exploration.', 'Weapons, armor, and gadgets are listed as unlockable equipment categories.', 'Shop decorations and perks are part of shop progression.', 'Village investment is tied to better equipment and upgrades.'] },
      { heading: 'How this table will grow', paragraphs: ['Each future row should include an exact in-game name, source location, sale value, customer response, test version, and an update date. A community report can be useful as a lead, but it remains separate from a confirmed hands-on observation until reproduced.'], note: { label: 'Not yet verified', text: 'This page deliberately does not invent item names, rarity tiers, drop rates, or stat values that are not present on the current Steam page.' } },
    ],
    table: { heading: 'Current item evidence table', headers: ['Category', 'What Steam confirms', 'Current data state'], rows: [['Relics', 'Collected during dungeon exploration and sold as loot.', 'Names and values need hands-on entries.'], ['Weapons / armor', 'Unlockable equipment categories are mentioned.', 'Exact stats and upgrade costs are unverified.'], ['Gadgets', 'Listed as an unlockable category.', 'Exact gadget list is unverified.'], ['Shop decorations', 'Listed as an unlockable category.', 'Catalog and effects are unverified.']] },
  },
  prices: {
    slug: 'prices',
    title: 'Moonlighter 2 Item Prices',
    description: 'A Moonlighter 2 price tracker for observed shop values, customer reactions, and versioned hands-on updates.',
    kicker: 'Core tool',
    status: 'Launch-day update',
    intro: 'Pricing is the clearest differentiator for this guide. Steam confirms that you set your own price, read customers, and aim for the right deal, but it does not publish a complete price chart. This page is structured to hold measured values instead of guesses.',
    sections: [
      { heading: 'What a trustworthy price entry needs', paragraphs: ['A price number without context is easy to misread. The same item may need a test note for its source, shop state, event state, customer reaction, and game version. This guide will keep those fields visible so a reader can distinguish a measured observation from a community lead.'], bullets: ['Item name exactly as displayed', 'Starting price or first observed sale price', 'Customer reaction at the tested price', 'Where the item was acquired', 'Game version and test date'] },
      { heading: 'How to use the table after launch', paragraphs: ['Start with one item and record a small price range rather than claiming one universal best number. Then compare the result after shop upgrades or special events. The store page says special events can affect sales momentum, so event context belongs in the data row.'], note: { label: 'Not yet verified', text: 'No Moonlighter 2 item price is published on this site until it has been observed in-game and recorded with a reproducible note.' } },
    ],
    table: { heading: 'Price tracker framework', headers: ['Item', 'Observed price', 'Customer response', 'Evidence state'], rows: [['Pending hands-on entry', '—', '—', 'No value published yet'], ['Pending hands-on entry', '—', '—', 'No value published yet'], ['Pending hands-on entry', '—', '—', 'No value published yet']] },
  },
  'shop-guide': {
    slug: 'shop-guide',
    title: 'Moonlighter 2 Shop Guide',
    description: 'A source-tracked Moonlighter 2 shop guide covering player-set prices, customers, decorations, perks, and village investment.',
    kicker: 'Merchant systems',
    status: 'Verified',
    intro: 'The shop is not a separate menu from the adventure. Steam describes a merchant who returns from dangerous dimensions, arranges loot, reads customers, sets prices, uses special events, and invests in the village.',
    sections: [
      { heading: 'Price with customer feedback in mind', paragraphs: ['The Steam description explicitly says the player sets their own price and reads customers to score the perfect deal. That supports a test-driven price log, but not a single price formula until the released build can be measured.'], bullets: ['Record the displayed reaction instead of translating it into an assumed percentage.', 'Keep special-event rows separate because Steam says events can build sales momentum.', 'Compare results after shop decoration and perk changes rather than mixing all conditions together.'] },
      { heading: 'Shop and village progression', paragraphs: ['Steam says shop decorations and perks can improve sales momentum, while village investment unlocks better weapons, armor, and upgrades. The practical guide order is therefore run, sell, reinvest, then test the next run under the new condition.'], note: { label: 'Verified boundary', text: 'The categories are official. Exact decoration effects, perk names, unlock costs, and the best upgrade order still require hands-on data.' } },
    ],
  },
  'dungeon-guide': {
    slug: 'dungeon-guide',
    title: 'Moonlighter 2 Dungeon Guide',
    description: 'A Moonlighter 2 dungeon guide grounded in the Steam description: route planning, relic collection, backpack space, and escalating rewards.',
    kicker: 'Adventure systems',
    status: 'Verified',
    intro: 'Steam describes dangerous dungeons and vibrant dimensions full of loot and enemies. It also says deeper exploration brings greater rewards, which makes route planning and extraction decisions central to the guide.',
    sections: [
      { heading: 'Plan the run around extraction', paragraphs: ['The published game description advises players to plot a clever route, arrange loot carefully, and remember that deeper runs bring greater rewards. This gives us a confirmed decision pattern: what to carry, how far to push, and when to return matter as much as clearing enemies.'], bullets: ['Start with a route that leaves room for the loot you expect to collect.', 'Separate confirmed game text from future room-by-room navigation notes.', 'Record the depth, loot category, and outcome for every repeatable run.'] },
      { heading: 'Endless Vault context', paragraphs: ['The Endless Vault is described as an ancient artifact whose trials test merchants and raise the stakes for rewards and town upgrades. Its exact rooms, encounters, and boss behavior are not published in the current Steam description.'], note: { label: 'Not yet verified', text: 'There are no invented map names, boss patterns, or “best route” claims on this pre-release guide.' } },
    ],
  },
  walkthrough: {
    slug: 'walkthrough',
    title: 'Moonlighter 2 Walkthrough',
    description: 'A spoiler-aware Moonlighter 2 walkthrough framework for the Early Access build, with story and route findings reserved for hands-on verification.',
    kicker: 'Walkthrough',
    status: 'Launch-day update',
    intro: 'This walkthrough hub is intentionally a framework until the game version and route data are recorded. Steam confirms the starting premise and progression loop, but it does not publish a full quest order or story ending.',
    sections: [
      { heading: 'Published premise', paragraphs: ['The player starts without money alongside other townsfolk, stranded in Tresna. The stated goal is to rebuild the shop into the village’s economic center while exploring dungeons, collecting relics, and reinvesting in the community.'], bullets: ['Starting situation: stranded in the distant village of Tresna.', 'Progression loop: dungeon loot to shop sales to town and equipment upgrades.', 'Long-term challenge: the Endless Vault tests merchants through escalating trials.'] },
      { heading: 'What will be added from a playable build', paragraphs: ['Launch updates will add named objectives, route order, unlock conditions, and spoiler labels only when they can be reproduced. Each walkthrough step should keep a version note because Early Access data can change.'], note: { label: 'Launch-day update', text: 'Story outcomes, boss strategies, and exact objective order are intentionally not claimed from marketing text alone.' } },
    ],
  },
  weapons: {
    slug: 'weapons',
    title: 'Moonlighter 2 Weapons, Armor, and Upgrades',
    description: 'A source-tracked Moonlighter 2 weapons and upgrades guide based on official equipment categories and village progression.',
    kicker: 'Equipment',
    status: 'Verified',
    intro: 'Steam confirms that weapons, armor, gadgets, shop decorations, and upgrades are part of Moonlighter 2 progression. It does not publish the complete arsenal or enough stats to support a best-build ranking yet.',
    sections: [
      { heading: 'What is confirmed', paragraphs: ['The Steam page names weapons and armor as unlockable categories and ties equipment improvements to a village that grows through investment. It also mentions gadgets and shop decorations as additional unlockable categories.'], bullets: ['Weapons and armor: confirmed categories.', 'Gadgets: confirmed category, exact list unverified.', 'Village establishments: investment can lead to better equipment and upgrades.', 'Best build and tier list: not supportable before hands-on comparisons.'] },
      { heading: 'Build data policy', paragraphs: ['A useful equipment page should report the exact version, upgrade cost, stat line, and test condition. This guide will prefer a small reproducible comparison over a large unsourced tier list.'], note: { label: 'Not yet verified', text: 'No weapon names, damage values, upgrade costs, or optimal build are invented here.' } },
    ],
  },
  faq: {
    slug: 'faq',
    title: 'Moonlighter 2 FAQ',
    description: 'Frequently asked Moonlighter 2 questions with answers linked to the current Steam listing and explicit data boundaries.',
    kicker: 'FAQ',
    status: 'Verified',
    intro: 'These answers use the current Steam store page and Steam news hub. A future 1.0 announcement can change the release section, so the verification date is shown on every source panel.',
    sections: FAQS.map((item) => ({ heading: item.question, paragraphs: [item.answer] })),
  },
  'release-date': {
    slug: 'release-date',
    title: 'Moonlighter 2 Release Date and Early Access Status',
    description: 'The current Moonlighter 2 release date, Early Access status, and a source tracker for any future 1.0 announcement.',
    kicker: 'Release tracking',
    status: 'Verified',
    intro: 'The current Steam listing records Moonlighter 2: The Endless Vault as released on November 19, 2025 and identifies it as Early Access. This page keeps that platform fact separate from any unconfirmed 1.0 date.',
    sections: [
      { heading: 'Current Steam listing', paragraphs: ['Steam currently shows November 19, 2025 as the release date, with the game available as an Early Access Windows title. The page is not marked coming soon.'], bullets: ['App ID: 2350790', 'Developer: Digital Sun', 'Publisher: 11 bit studios', 'Platform shown: Windows', 'Current store state: Early Access'] },
      { heading: 'What about a September 2, 2026 1.0 date?', paragraphs: ['A September 2, 2026 date is not present in the current Steam store data checked for this site. It may be a planning estimate or a source that has not been published on Steam yet, so this guide does not present it as confirmed. The Steam news hub is the place to re-check for a first-party roadmap or 1.0 announcement.'], note: { label: 'Source discipline', text: 'This page will change only after a first-party page publishes a more exact 1.0 date.' } },
    ],
  },
  'co-op-status': {
    slug: 'co-op-status',
    title: 'Is Moonlighter 2 Multiplayer? Co-op Status',
    description: 'Is Moonlighter 2 multiplayer? Steam currently lists Moonlighter 2 as single-player with controller support and no official co-op mode.',
    kicker: 'Multiplayer status',
    status: 'Verified',
    intro: 'Moonlighter 2: The Endless Vault is currently listed as a single-player Early Access game on Steam. The store page does not list co-op, online multiplayer, or PvP, so this guide treats the current experience as solo while leaving room for a future first-party update.',
    sections: [
      { heading: 'Short answer: no co-op is confirmed', paragraphs: ['Steam lists Single-player for Moonlighter 2 and does not list Multi-player, Online Co-op, or PvP categories in the current store data checked on August 12, 2026. The game’s merchant-and-dungeon loop is therefore documented as a solo loop: one player explores, returns with relics, runs the shop, and invests in Tresna.'] },
      { heading: 'What you can do in the current build', paragraphs: ['The official description connects dungeon exploration, relic collection, shop pricing, customer reactions, village investment, and equipment upgrades. Those systems are designed around the player’s double life as adventurer and merchant, not a published shared-farm or party system.'], bullets: ['Explore dungeons and collect relics alone.', 'Set shop prices and read customers yourself.', 'Invest in the village and unlock equipment categories.', 'Use full controller support and Steam Cloud as listed platform features.'] },
      { heading: 'Could multiplayer be added later?', paragraphs: ['No official roadmap item in the tracked Steam news hub promises co-op or multiplayer. Moonlighter 2 is already in Early Access, so its feature set can change, but a future feature should be treated as confirmed only when Digital Sun, 11 bit studios, or the Steam listing says so.'] },
      { heading: 'What is still unknown', paragraphs: ['The current Steam page does not answer whether a future update could add co-op, whether a 1.0 release will change the player count, or whether any shared progression is planned. This page will update those fields only from a first-party announcement.'], note: { label: 'Current answer', text: 'Moonlighter 2 is listed as single-player. No official co-op or multiplayer mode is confirmed as of August 12, 2026.' } },
    ],
  },
  about: {
    slug: 'about',
    title: 'About Moonlighter 2 Guide',
    description: 'About this independent, source-tracked Moonlighter 2 fan guide.',
    kicker: 'Editorial policy',
    status: 'Verified',
    intro: 'Moonlighter 2 Guide is an independent fan project focused on readable, testable information for the shop-and-dungeon loop.',
    sections: [
      { heading: 'How facts are handled', paragraphs: ['Steam is the current baseline for title, developer, publisher, release state, platform, published systems, and local screenshots. Gameplay tables are updated from reproducible hands-on observations and labeled with a version or test date.'], note: { label: 'Disclaimer', text: 'This site is not affiliated with Digital Sun or 11 bit studios. Moonlighter 2 and all related trademarks belong to their respective owners.' } },
    ],
  },
  contact: {
    slug: 'contact',
    title: 'Contact Moonlighter 2 Guide',
    description: 'Contact the Moonlighter 2 Guide project about corrections, sources, or asset attribution.',
    kicker: 'Corrections',
    status: 'Verified',
    intro: 'Send a correction when a source changes, a gameplay table needs a version note, or an image credit needs adjustment.',
    sections: [
      { heading: 'What to include', paragraphs: ['Please include the page URL, the exact claim, the source or in-game version that supports the correction, and a screenshot when reporting a gameplay value.'], bullets: ['Email: hello@moonlighter2guide.org', 'Source corrections are reviewed against first-party pages first.', 'Unverified community leads stay labeled until reproduced.'] },
    ],
  },
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy information for Moonlighter 2 Guide.',
    kicker: 'Site policy',
    status: 'Verified',
    intro: 'This static guide does not require an account and does not ask visitors to submit personal gameplay data.',
    sections: [
      { heading: 'Basic policy', paragraphs: ['The site may later use privacy-respecting analytics or advertising after deployment. Any such service will be disclosed here before it is enabled. External Steam links are governed by their own policies.'], note: { label: 'Contact', text: 'For privacy questions, email hello@moonlighter2guide.org.' } },
    ],
  },
};
