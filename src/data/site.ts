import { SOURCES } from './sources';
import type { SourceRef } from './sources';
import { WEAPON_PAGES } from './pages/weapons';
import { BOSS_PAGES, MINIBOSS_PAGES } from './pages/bosses';
import { CHARACTER_PAGES } from './pages/characters';
import { DUNGEON_PAGES } from './pages/dungeons';

export interface PageSection {
  heading: string;
  paragraphs?: string[];
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
  relatedPages?: { href: string; title: string; description: string }[];
  sources?: readonly SourceRef[];
  showImageCredit?: boolean;
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
  releaseWindow: 'Version 1.0 released September 2, 2026',
  steamReleaseText: 'Sep 2, 2026',
  releaseStatus: 'Moonlighter 2: The Endless Vault left Early Access on September 2, 2026. The Steam release field now reads Sep 2, 2026 and the Early Access tag is gone; Early Access began November 19, 2025.',
  steamUrl: SOURCES.steam.url,
  steamNewsUrl: SOURCES.steamNews.url,
  contactEmail: 'nmlkareem161@gmail.com',
  lastVerified: '2026-09-03',
  heroImage: 'moonlighter-2-shot-1.jpg',
  themeColor: '#d99a50',
  genres: ['Action', 'Adventure', 'RPG'],
  platforms: ['Windows'],
} as const;

export const NAV = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Beginner', href: '/beginner-guide/' },
  { label: 'Items', href: '/items/' },
  { label: 'Prices', href: '/prices/' },
  { label: 'Shop', href: '/shop-guide/' },
  { label: 'Dungeons', href: '/dungeon-guide/' },
  { label: 'Bosses', href: '/bosses/' },
  { label: 'Minibosses', href: '/minibosses/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Weapons', href: '/weapons/' },
  { label: 'Release', href: '/release-date/' },
] as const;

export const LATEST_GUIDES = [
  {
    href: '/version-1-0-update/',
    title: 'Moonlighter 2 Version 1.0 Update: Everything in the Launch Build',
    description:
      'The Infinite Endless Vault reset rule, Hardcore Mode, the four Endless Weapon Aspects, the Bomb Path, Shop Level 5, and the November 13 physical editions.',
    priority: 'New',
  },
  {
    href: '/save-transfer-progress-guide/',
    title: 'Moonlighter 2: The Endless Vault Save Transfer and Progress Guide',
    description:
      'What happened at the September 2, 2026 version 1.0 transition, what Steam Cloud covers, and why no official save rule was ever published.',
    priority: 'New',
  },
  {
    href: '/moonlighter-2-switch-2/',
    title: 'Moonlighter 2 Switch 2: Is It Coming to Nintendo Switch 2?',
    description: 'What the official Steam listing confirms about platforms, the Switch 2 question, and the September 2, 2026 1.0 launch.',
    priority: 'Platform status',
  },
  {
    href: '/gameplay-preview/',
    title: 'Moonlighter 2: The Endless Vault Gameplay Preview',
    description: 'A source-backed preview of the dungeon, relic, shop, pricing, village, and September 2, 2026 version 1.0 loop.',
    priority: 'New',
  },
  {
    href: '/version-1-release-date/',
    title: 'Version 1.0 Release Date',
    description: 'The official September 2, 2026 launch announcement and the new systems arriving with 1.0.',
    priority: 'New',
  },
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
  { label: 'Steam state', value: 'Version 1.0 released September 2, 2026. The Steam release field reads Sep 2, 2026, the Early Access tag is gone, and the listed genres are Action, Adventure and RPG. Early Access ran from November 19, 2025.', source: SOURCES.steam },
  { label: 'Version 1.0 scope', value: 'The launch announcement confirms the main story now concludes, plus the Infinite Endless Vault postgame, four Endless Weapon Aspects, Shop Level 5, the Bomb Path perk path, Hardcore Mode, new vendors, cosmetics and Codex pages.', source: SOURCES.steamVersionOneNews },
  { label: 'Developer / publisher', value: 'Digital Sun / 11 bit studios.', source: SOURCES.steam },
  { label: 'Core loop', value: 'Explore dungeons, gather relics, sell them in your shop, and reinvest in the village.', source: SOURCES.steam },
  { label: 'Pricing system', value: 'The Steam description says the player sets their own price and reads customers to find the right deal.', source: SOURCES.steam },
  { label: 'World anchor', value: 'The player and other townsfolk are stranded in the village of Tresna.', source: SOURCES.steam },
  { label: 'Endless Vault', value: 'The Endless Vault is described as an ancient artifact with trials that test merchants and reward town upgrades.', source: SOURCES.steam },
] as const;

export const REQUIRED_GUIDES = [
  { href: '/moonlighter-2-very-positive/', title: 'Very Positive Reviews', description: '1,580 of 1,903 Steam reviews: combat praise versus grind, Aeolia bugs, and a campaign that is only half the game.', priority: 'New', image: 'hotDesert' },
  { href: '/moonlighter-2-aeolia-bugs/', title: 'Aeolia Bugs', description: 'Why reviews say an hour-long Aeolia run can be wasted, plus the 7.6% Ultimate Challenge rate.', priority: 'New', image: 'hotCombat' },
  { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1 (September 10)', description: 'The DirectX 11/12 switch and every named fix: Kalina out-of-map, Hazy Jane input loss, Scarabastion invincibility.', priority: 'New', image: 'hotCombat' },
  { href: '/characters/', title: 'Characters', description: 'Will, Tresna, Hazy Jane, Babyl, Spark and every character the official posts name.', priority: 'New', image: 'shot5' },
  { href: '/moonlighter-2-best-weapon/', title: 'Moonlighter 2 Best Weapon', description: 'A version 1.0 weapon comparison built from the four named Endless Weapon Aspects and the limits of the published data.', priority: 'New', image: 'shot4' },
  { href: '/moonlighter-2-infinite-endless-vault-guide/', title: 'Infinite Endless Vault Guide', description: 'How the postgame thresholds work, what resets on a failed run, and which reward categories are confirmed.', priority: 'New', image: 'hero' },
  { href: '/moonlighter-2-hardcore-mode/', title: 'Hardcore Mode Guide', description: 'The version 1.0 Hardcore wording, the unresolved penalty descriptions, and a safe first-run decision.', priority: 'New', image: 'shot2' },
  { href: '/moonlighter-2-shop-level-5/', title: 'Shop Level 5 Guide', description: 'The two additions named for Shop Level 5: an extra Bloblet slot and a cosmetic placement slot.', priority: 'New', image: 'shot5' },
  { href: '/moonlighter-2-endless-weapon-aspects/', title: 'Endless Weapon Aspects', description: 'The four named version 1.0 aspects and what each special attack is confirmed to do.', priority: 'New', image: 'shot4' },
  { href: '/moonlighter-2-bomb-path/', title: 'Bomb Path Guide', description: 'How the Bomb Path perk path is described, with its hit-count trigger and unpublished values kept separate.', priority: 'New', image: 'shot3' },
  { href: '/moonlighter-2-relic-loot-guide/', title: 'Relic and Loot Guide', description: 'A practical post-launch way to log relics, backpack risk, shop value and versioned observations.', priority: 'P1', image: 'shot3' },
  { href: '/moonlighter-2-dungeon-extraction-guide/', title: 'Dungeon Extraction Guide', description: 'When to turn a Moonlighter 2 run around, how to preserve a valuable haul, and what the official loop confirms.', priority: 'P1', image: 'hero' },
  { href: '/moonlighter-2-boss-completion-guide/', title: 'Boss Completion Guide', description: 'How to track the named boss completion goals without inventing a full boss route or damage table.', priority: 'P1', image: 'shot2' },
  { href: '/moonlighter-2-postgame-guide/', title: 'Version 1.0 Postgame Guide', description: 'A post-launch checklist for the main story conclusion, Infinite Endless Vault, Shop Level 5 and new systems.', priority: 'New', image: 'shot5' },
  { href: '/version-1-0-update/', title: 'Version 1.0 Update: Everything in the Launch Build', description: 'The Infinite Endless Vault reset rule, Hardcore Mode, the four Endless Weapon Aspects, the Bomb Path, Shop Level 5, and the November 13 physical editions.', priority: 'New', image: 'shot4' },
  { href: '/bosses/', title: 'Moonlighter 2 Bosses', description: 'Every boss Steam names, ordered by how many owners have actually beaten them, plus the Ultimate Challenge and Endless Vault completion rates.', priority: 'New', image: 'hero' },
  { href: '/save-transfer-progress-guide/', title: 'Moonlighter 2: The Endless Vault Save Transfer and Progress Guide', description: 'What happened at the 1.0 transition, what Steam Cloud actually covers, and why no official wipe or migration rule was ever published.', priority: 'New', image: 'shot5' },
  { href: '/moonlighter-2-switch-2/', title: 'Moonlighter 2 Switch 2: Is It Coming to Nintendo Switch 2?', description: 'Current official platform evidence, the Switch 2 answer, and what to watch for in a first-party announcement.', priority: 'New', image: 'header' },
  { href: '/gameplay-preview/', title: 'Moonlighter 2: The Endless Vault Gameplay Preview', description: 'The official dungeon-to-shop gameplay loop, what version 1.0 added at both ends of it, and where the evidence stops.', priority: 'New', image: 'hero' },
  { href: '/release-date/', title: 'Release Date', description: 'The Early Access date, the September 2, 2026 version 1.0 date, and what the Steam listing shows now.', priority: 'P2', image: 'header' },
  { href: '/steam-features-guide/', title: 'Steam Features Guide', description: 'Controller support, Steam Cloud, single-player status, and what the current store listing actually confirms.', priority: 'New', image: 'shot4' },
  { href: '/beginner-guide/', title: 'Beginner Guide', description: 'A fact-first first-session route built from the published dungeon, shop, and town loop.', priority: 'P0', image: 'shot2' },
  { href: '/items/', title: 'Items & Relics', description: 'Track what is officially described, what is observed, and what still needs a hands-on entry.', priority: 'P0', image: 'shot3' },
  { href: '/prices/', title: 'Item Prices', description: 'The core tool page for observed sale prices and customer responses after testing.', priority: 'P0', image: 'hotShop' },
  { href: '/shop-guide/', title: 'Shop Guide', description: 'Use the confirmed pricing, customer-reading, decoration, and perk systems as the page spine.', priority: 'P1', image: 'shot5' },
  { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Plan routes around relic collection, risk, backpack space, and the published deeper-is-better reward loop.', priority: 'P1', image: 'hero' },
  { href: '/version-1-release-date/', title: 'Version 1.0 Release Date', description: 'September 2, 2026, and how the August announcement compares with what the launch-day post confirmed.', priority: 'New', image: 'shot5' },
  { href: '/walkthrough/', title: 'Walkthrough', description: 'A release-aware route framework that avoids claiming unplayed story outcomes.', priority: 'P1', image: 'shot2' },
  { href: '/weapons/', title: 'Weapons & Upgrades', description: 'Officially confirmed weapon, armor, gadget, and village upgrade categories.', priority: 'P2', image: 'shot3' },
  { href: '/co-op-status/', title: 'Multiplayer Status', description: 'Steam-confirmed single-player status and the current answer on co-op or online multiplayer.', priority: 'Status', image: 'shot5' },
] as const;

export const FAQS = [
  {
    question: 'Is Moonlighter 2 out of Early Access?',
    answer: 'Yes. Version 1.0 released on September 2, 2026. The Steam release field now reads Sep 2, 2026, the Early Access tag has been removed, and the listed genres are Action, Adventure and RPG. Early Access ran from November 19, 2025.',
  },
  {
    question: 'What is the Infinite Endless Vault in Moonlighter 2?',
    answer: 'It is the version 1.0 postgame, unlocked after completing the main story. It is an endless series of increasingly difficult thresholds, and the launch announcement states that each one must be completed in a single run, so failing to reach the required amount of gold resets your progress for that threshold. Rewards include equipment, shop upgrades, decorations and cosmetics. No gold values or threshold counts have been published.',
  },
  {
    question: 'What happens if you die in Moonlighter 2 Hardcore Mode?',
    answer: 'The launch-day announcement says dying means losing your progress and starting the journey again from the very beginning. The earlier August 5, 2026 announcement described the same mode differently, saying you lose all your relics upon defeat. The two wordings have never been reconciled officially, so the safer assumption is the harsher one until the in-game description says otherwise.',
  },
  {
    question: 'Is Moonlighter 2 coming to Nintendo Switch 2?',
    answer: 'No Nintendo Switch 2 version has been officially confirmed in the sources tracked here. The version 1.0 launch announcement says console versions are available without naming a single console, and the Steam listing shows Windows as the only platform.',
  },
  {
    question: 'Is Moonlighter 2 on Nintendo Switch?',
    answer: 'The official sources tracked here do not name a Nintendo Switch or Nintendo Switch 2 version. Steam lists Windows as the platform. The launch announcement asserts that console versions exist but does not identify them, so this should be rechecked whenever Digital Sun or 11 bit studios publishes a platform list.',
  },
  {
    question: 'When did Moonlighter 2: The Endless Vault enter Early Access?',
    answer: 'The game entered Early Access on November 19, 2025 and left it on September 2, 2026. Digital Sun and 11 bit studios first announced that 1.0 date in an official Steam announcement dated August 5, 2026.',
  },
  {
    question: 'Is Moonlighter 2 on Steam?',
    answer: 'Yes. Steam lists Moonlighter 2: The Endless Vault as a released Windows game. The listing also includes Single-player, full controller support, Steam Achievements, Steam Cloud, and Family Sharing categories.',
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
    answer: 'Steam lists Single-player as a category. It also lists full controller support and gamepad recommended, and does not list Multi-player, Online Co-op or PvP.',
  },
] ;

const INLINE_PAGES: Record<string, PageData> = {
  'moonlighter-2-switch-2': {
    slug: 'moonlighter-2-switch-2',
    title: 'Moonlighter 2 Switch 2: Is It Coming to Nintendo Switch 2?',
    description: 'Is Moonlighter 2 coming to Nintendo Switch 2? The official platform evidence, the Steam listing, and what the version 1.0 launch post says about consoles.',
    kicker: 'Platform status',
    status: 'Verified',
    intro: 'The short answer is that Moonlighter 2: The Endless Vault is not officially confirmed for Nintendo Switch 2. Steam lists Windows as the only platform. The version 1.0 launch announcement does say console versions are available — but it does not name a single console, which is not the same as confirming a Nintendo release.',
    sections: [
      { heading: 'Is Moonlighter 2 coming to Switch 2?', paragraphs: ['No Nintendo Switch 2 version has been named in the official sources tracked for this guide as of September 3, 2026. That is a status answer, not a claim that a Nintendo version can never happen. If Digital Sun or 11 bit studios names one, this page should be updated with the original announcement and the supported platform details.'] },
      { heading: 'What the official Steam page confirms', paragraphs: ['The live Moonlighter 2 Steam listing identifies the product as a released Windows game. It lists Single-player, Full controller support, Gamepad recommended, Steam Achievements, Steam Cloud, and Family Sharing. It does not list Nintendo Switch, Nintendo Switch 2, console availability, cross-platform saves, or a Nintendo eShop link.'], bullets: ['Platform shown: Windows PC.', 'Store state: released, out of Early Access.', 'Original Early Access release: November 19, 2025.', 'Version 1.0 release: September 2, 2026.', 'The listing does not show a Switch or Switch 2 platform.'] },
      { heading: 'What the launch announcement says about consoles', paragraphs: ['The September 2, 2026 launch post states that Moonlighter 2: The Endless Vault is “officially out of Early Access on PC, and console versions are available now”. That is the single strongest console claim in any first-party source tracked here, and it still names no platform, no storefront, no edition and no release note.', 'So the honest reading is narrow: the developer says console versions exist, and no official source tracked here identifies which consoles. A Switch 2 release is neither confirmed nor excluded by that sentence, and this page will not turn an unnamed console into a named one.'] },
      { heading: 'Why people are searching for Moonlighter 2 Switch 2', paragraphs: ['The query reflects a platform question from players who prefer Nintendo hardware, and the original Moonlighter shipped on Switch, which makes the expectation reasonable. The search interest itself is not proof of a port. Until an official source names Switch 2, the safe answer is “not confirmed,” and the page should not imply that a Nintendo release date exists.'] },
      { heading: 'Moonlighter 2 Switch versus Switch 2', paragraphs: ['The current evidence does not name either a Nintendo Switch version or a Nintendo Switch 2 version. These are separate platform questions, so a future announcement should state the exact hardware, release timing, edition, performance details, and whether saves or purchases carry across platforms.'] },
      { heading: 'How to verify a future Switch 2 announcement', paragraphs: ['A reliable update should come from Digital Sun, 11 bit studios, an official Nintendo product page, an official Nintendo eShop listing, or an updated official store listing that names the platform. A retailer listing, forum post, search suggestion, or an image without a first-party source is not enough to change the answer on this page.'], note: { label: 'Current answer', text: 'Moonlighter 2 is not officially confirmed for Nintendo Switch 2 as of September 3, 2026. Unnamed console versions are claimed by the developer as of the September 2, 2026 launch; Windows is the only platform the Steam listing shows.' } },
    ],
    relatedPages: [
      { href: '/release-date/', title: 'Moonlighter 2 Release Date', description: 'The Early Access date, the September 2, 2026 version 1.0 date, and what Steam shows now.' },
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Everything the launch-day announcement describes about the released build.' },
      { href: '/steam-features-guide/', title: 'Steam Features Guide', description: 'Windows availability, controller support, Steam Cloud, and current single-player status.' },
    ],
    sources: [SOURCES.steam, SOURCES.steamVersionOneNews, SOURCES.steamNews],
  },
  guides: {
    slug: 'guides',
    title: 'Moonlighter 2 Guide Hub',
    description: 'A source-tracked Moonlighter 2 guide hub for beginners, items, prices, shops, dungeons, weapons, and release updates.',
    kicker: 'Guide hub',
    status: 'Verified',
    intro: 'This hub organizes the parts of Moonlighter 2 that the current Steam listing actually describes: a dungeon run, a backpack full of loot, a shop where you set prices, and a village that benefits when you reinvest.',
    sections: [
      { heading: 'What this guide can verify now', paragraphs: ['Moonlighter 2: The Endless Vault is a released action RPG with roguelike elements, out of Early Access since September 2, 2026. Steam names Digital Sun as developer and 11 bit studios as publisher, and describes a stranded group rebuilding a life in Tresna.'], bullets: ['Dungeon exploration and relic collection', 'Player-set shop prices and customer reactions', 'Weapons, armor, shop decorations, perks, and town investment', 'The Endless Vault as a challenge tied to town upgrades', 'The version 1.0 postgame, Hardcore Mode, and the four Endless Weapon Aspects'] },
      { heading: 'How to use the site', paragraphs: ['Use Items and Prices when you need a data table. Use Shop and Dungeon Guide when you need a repeatable loop. Use Walkthrough for a cautious route framework. Every page separates Steam facts from values that need an in-game test.'], note: { label: 'Data rule', text: 'A missing number is intentionally shown as unverified. It is more useful to keep a clean field ready for a hands-on entry than to publish a guessed value.' } },
    ],
  },
  'beginner-guide': {
    slug: 'beginner-guide',
    title: 'Moonlighter 2 Beginner Guide',
    description: 'A fact-first Moonlighter 2 beginner guide covering dungeon runs, relics, shop prices, and village reinvestment.',
    kicker: 'First session',
    status: 'Verified',
    intro: 'Moonlighter 2 asks you to manage two connected roles: adventurer and merchant. The released-build starting plan is to understand the loop first, then keep exact builds, item values, and route claims tied to a versioned in-game check.',
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
      { heading: 'Shop Level 5 is the version 1.0 ceiling', paragraphs: ['Version 1.0 raised the shop ceiling by one level. The launch announcement names exactly two things Shop Level 5 adds: an additional Bloblet slot, and a new cosmetic placement slot for one more decoration.', 'It does not publish the unlock requirement, the unlock cost, or the total Bloblet count at that level, so treat the level as confirmed and the numbers around it as untested.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Shop Level 5 in context with the rest of the launch build.' },
      { href: '/prices/', title: 'Item Prices', description: 'The tool page for observed sale prices and customer responses.' },
      { href: '/items/', title: 'Items & Relics', description: 'What is officially described, what is observed, and what still needs testing.' },
    ],
    sources: [SOURCES.steam, SOURCES.steamVersionOneNews],
  },
  'dungeon-guide': {
    slug: 'dungeon-guide',
    title: 'Moonlighter 2 Dungeon Guide',
    description: 'A Moonlighter 2 dungeon guide grounded in the Steam description: route planning, relic collection, backpack space, and escalating rewards.',
    kicker: 'Adventure systems',
    status: 'Verified',
    intro: 'Steam describes dangerous dungeons and vibrant dimensions full of loot and enemies. It also says deeper exploration brings greater rewards, which makes route planning and extraction decisions central to the guide.',
    sections: [
      { heading: 'The three dimensions', paragraphs: ['Moonlighter 2 has three dimensions, each with an easier first floor and a harder second floor, and each running its own relic curse. Floors unlock through Tresna story quests rather than levels.'], bullets: ['<a href="/dungeons-kalina/">Kalina</a> — desert dimension; Burn and Armor curse; bosses The Herald and Thalaam.', '<a href="/dungeons-the-gallery/">The Gallery</a> — museum-machine dimension; Shock and Overcharge curse; bosses The Curator and Tyke.', '<a href="/dungeons-aeolia/">Aeolia</a> — windy magic isles; Petrify and Absorb curse; bosses Senda and Monte.'] },
      { heading: 'Plan the run around extraction', paragraphs: ['The published game description advises players to plot a clever route, arrange loot carefully, and remember that deeper runs bring greater rewards. This gives us a confirmed decision pattern: what to carry, how far to push, and when to return matter as much as clearing enemies.'], bullets: ['Start with a route that leaves room for the loot you expect to collect.', 'The pendant teleports you home at any time with everything in the bag; there is no penalty beyond skipped loot.', 'Record the depth, loot category, and outcome for every repeatable run.'] },
      { heading: 'Endless Vault context', paragraphs: ['The Endless Vault is described as an ancient artifact whose trials test merchants and raise the stakes for rewards and town upgrades. Its exact rooms, encounters, and boss behavior are not published in the Steam description.'], note: { label: 'Not yet verified', text: 'There are no invented map names, boss patterns, or “best route” claims here.' } },
      { heading: 'The Infinite Endless Vault changes how you plan a run', paragraphs: ['Version 1.0 added a postgame that unlocks after the main story, and it is the one place where the extraction decision has a published rule. The launch announcement describes an endless series of increasingly difficult thresholds and states that each one must be completed in a single run — failing to reach the required amount of gold resets your progress for that threshold.', 'That makes gold, not depth, the scoring metric there, and it removes the option of banking partial progress across trips. No gold target, threshold count or scaling rule has been published, so the only honest planning advice is to treat every threshold attempt as a single closed run.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'The Infinite Endless Vault rule in context with the rest of the launch build.' },
      { href: '/bosses/', title: 'Moonlighter 2 Bosses', description: 'Endless Vault challenge completion rates alongside the named boss kills.' },
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The four Endless Weapon Aspects and the confirmed equipment categories.' },
    ],
    sources: [SOURCES.steam, SOURCES.steamVersionOneNews],
  },
  walkthrough: {
    slug: 'walkthrough',
    title: 'Moonlighter 2 Walkthrough',
    description: 'A spoiler-aware Moonlighter 2 walkthrough framework for the version 1.0 build, with story and route findings reserved for hands-on verification.',
    kicker: 'Walkthrough',
    status: 'Launch-day update',
    intro: 'This walkthrough hub is intentionally a framework until the game version and route data are recorded. Steam confirms the starting premise and progression loop, and the version 1.0 announcement confirms the main story now has an ending — but neither publishes a quest order or the ending itself.',
    sections: [
      { heading: 'Published premise', paragraphs: ['The player starts without money alongside other townsfolk, stranded in Tresna. The stated goal is to rebuild the shop into the village’s economic center while exploring dungeons, collecting relics, and reinvesting in the community.'], bullets: ['Starting situation: stranded in the distant village of Tresna.', 'Progression loop: dungeon loot to shop sales to town and equipment upgrades.', 'Long-term challenge: the Endless Vault tests merchants through escalating trials.', 'Version 1.0 conclusion: new quests, cutscenes and discoveries bring Will’s journey to an end, followed by the Infinite Endless Vault postgame.'] },
      { heading: 'Choosing a difficulty', paragraphs: ['Difficulty in Moonlighter 2 is mostly about how much relic risk you carry out of a run. On Easy, Normal and Hard, dying halves the quality of every relic in your backpack; on Expert you lose those relics outright; and on Hardcore, added in Version 1.0, a death ends the whole save and you start over. Pick the mode that matches how much you are willing to lose when a run goes wrong — the enemy patterns are the same, but the penalty is not.'], bullets: ['Easy / Normal / Hard: death halves backpack relic quality.', 'Expert: death loses the relics in your backpack.', 'Hardcore (1.0): death loses your progress and restarts the save.'] },
      { heading: 'Picking your first weapon', paragraphs: ['There are four melee classes — Short Swords, Large Swords, Spears and Gauntlets — plus a gun that rides alongside your melee weapon. New players are steered to the <a href="/weapons-merchant-sword/">Merchant’s Sword</a>: fast, balanced, and the weapon most creators used for early money runs. Swap to the <a href="/weapons-aetherium-heart/">Aetherium Heart</a> or an Ultimate aspect once you can craft one. Whatever you carry, use the gun to knock flying enemies out of the air and keep one bullet in reserve for enemies winding up aerial attacks.'] },
      { heading: 'Reading the combat HUD', paragraphs: ['Each melee class has its own meter to watch: Short Swords chain into a Special Finisher after three hits, Large Swords spend and rebuild Sharpness, Spears plant spearheads the Special recalls, and Gauntlets fill a Berserk gauge. Your gun’s ammo refills slowly on its own and faster when you land melee hits.'], bullets: ['Weapon meter: the class resource (Finisher, Sharpness, spearheads or Berserk).', 'Ammo: refills on melee hits and breakables; keep one shot in reserve.', 'Rupture: an enemy at half health turns purple and can be launched with the backpack — but elites and minibosses never rupture.', 'Tomo’s Radar: the branching node map (chests, events, potions, blacksmith, elite, miniboss, boss, perk rooms) you pick a path through.'] },
      { heading: 'Getting potions and healing', paragraphs: ['<a href="/characters-eris/">Eris</a>, at the Witch Hut, sells potions, health and dungeon perk unlocks, and her riddles point to hidden weapon recipes. Creator guides agree she is the first vendor to upgrade: in the opening hours a reliable healing option matters more than raw damage, so buy more and stronger potions before you invest in weapons.'] },
      { heading: 'Managing the shop', paragraphs: ['The loop is dungeon loot to shop sales to upgrades. Sell relics for gold, then reinvest: <a href="/characters-miss-scratch/">Ms. Scratch</a> raises your shop level, <a href="/characters-k33p3r/">K33P3R</a> adds permanent merchant bonuses and Haggle customers, and <a href="/characters-the-countess/">the Countess</a> sells showcases that raise the price of a whole relic rarity. Nothing you buy in Tresna is lost on death, so shop upgrades are always safe investments — unlike the relics you carry in your backpack.'] },
      { heading: 'What still needs a playable build', paragraphs: ['Exact quest order and the story ending are added only when they can be reproduced first-hand; balance and layout can still shift across post-launch patches, so each step keeps a version note.'] },
    ],
  },
  weapons: {
    slug: 'weapons',
    title: 'Moonlighter 2 Weapons, Armor, and Upgrades',
    description: 'A source-tracked Moonlighter 2 weapons and upgrades guide based on official equipment categories and village progression.',
    kicker: 'Equipment',
    status: 'Verified',
    intro: 'Moonlighter 2 has four melee classes — Short Swords, Large Swords, Spears and Gauntlets — plus a gun that rides alongside your melee weapon and a set of armor. Every class has a Merchant’s starter, an Ultimate version, named Early Access aspects, a Boss Rush aspect from the Blob-Life update, and an Endless aspect from Version 1.0. This page indexes every weapon with its special effect, how to unlock it, and where it fits.',
    sections: [
      { heading: 'How the weapon classes work', bullets: ['Short Swords: three arcing slashes and an Attack Finisher; the Special is a spin that chains into a Special Finisher after three hits.', 'Large Swords: wide slashes that spend Sharpness; the Special rebuilds it, and damage scales with the current Sharpness level.', 'Spears: quick stabs that plant spearheads; the Special recalls every spearhead, hitting everything in their path.', 'Gauntlets: rapid punches that fill the Berserk meter; the Special slams both gauntlets and Berserk raises damage and attack speed.', 'Guns: built at Babyl’s Workshop, ammo refills on melee hits, and shots knock flying enemies out of the air.'] },
      { heading: 'Short Swords', bullets: ['<a href="/weapons-merchant-sword/">Merchant’s Sword</a> — bonus damage for 3s after a Special Finisher; the beginner pick.', '<a href="/weapons-everlasting-fury/">Everlasting Fury</a> — +50%/60%/75% damage to Elites, Minibosses and Bosses.', '<a href="/weapons-ray-axe/">Ray Axe</a> — chain the Special Finisher straight after the Attack Finisher for +20%.', '<a href="/weapons-ultimate-short-sword/">Ultimate Short Sword</a> — +20% Special Finisher; a kill grants 3s of infinite ammo.', '<a href="/weapons-starsign-horn/">Starsign Horn</a> — Blob-Life aspect, reward for Lita’s Kalina Boss Rush.', '<a href="/weapons-endless-short-sword/">Endless Short Sword</a> — Version 1.0: multi-hit piercing Special that scales with combo.'] },
      { heading: 'Large Swords', bullets: ['<a href="/weapons-merchant-large-sword/">Merchant’s Large Sword</a> — more damage while Sharpness is above a threshold.', '<a href="/weapons-the-vow/">The Vow</a> — attacks stop consuming Sharpness, but 2% drains per second.', '<a href="/weapons-aetherium-heart/">Aetherium Heart</a> — Special deals +40% per Sharpness level; a top-rated weapon.', '<a href="/weapons-ultimate-large-sword/">Ultimate Large Sword</a> — one less max Sharpness, but Sharpness boosts ailments.', '<a href="/weapons-protocol-breaker/">Protocol Breaker</a> — Blob-Life aspect, reward for Babyl’s Gallery Boss Rush.', '<a href="/weapons-endless-great-sword/">Endless Great Sword</a> — Version 1.0 Golden Guild block-and-counter stance.'] },
      { heading: 'Spears', bullets: ['<a href="/weapons-broom-spear/">Broom Spear</a> — the no-Special starting weapon; boss kills earn Humble Hero.', '<a href="/weapons-merchant-spear/">Merchant’s Spear</a> — spearheads deal bonus damage.', '<a href="/weapons-combat-rod/">Combat Rod</a> — slow recall dealing 200% continuous damage.', '<a href="/weapons-the-rectifier/">The Rectifier</a> — returned spearheads orbit you for 5s at +70%/85%/100%.', '<a href="/weapons-ultimate-spear/">Ultimate Spear</a> — homing recall; a top-rated weapon.', '<a href="/weapons-dreampiercer/">Dreampiercer</a> — Blob-Life aspect, reward for Julien’s Aeolia Boss Rush.', '<a href="/weapons-endless-spear/">Endless Spear</a> — Version 1.0: spends spearheads to empower basic attacks.'] },
      { heading: 'Gauntlets', bullets: ['<a href="/weapons-merchant-gauntlets/">Merchant’s Gauntlets</a> — extends Berserk duration.', '<a href="/weapons-sun-and-moon-ballad/">Sun and Moon Ballad</a> — double hits for 3s/4s after Berserk ends.', '<a href="/weapons-heartbeat-hunter/">Heartbeat Hunter</a> — +40% damage in Berserk, but you take double damage.', '<a href="/weapons-ultimate-gauntlets/">Ultimate Gauntlets</a> — bank charges for extra Special hits.', '<a href="/weapons-single-strike/">Single Strike</a> — Blob-Life aspect, reward for the Interdimensional Boss Rush.', '<a href="/weapons-endless-gauntlets/">Endless Gauntlets</a> — Version 1.0: much stronger attacks while Berserk is active.'] },
      { heading: 'Guns and gadgets', bullets: ['<a href="/weapons-blob-gun/">Blob Gun</a> — the default anti-air gun; refills on melee hits.', '<a href="/weapons-blo-blaster/">Blo-Blaster</a> — close-range cannon; hidden treasure in Aeolia.', '<a href="/weapons-blo-beam/">Blo-Beam</a> — long-range beam; a top-rated gun.', '<a href="/weapons-blo-blitz/">Blo-Blitz</a> — dual guns for on-hit perk builds (Greed & Glory).', '<a href="/weapons-blo-buddy/">Blo-Buddy</a> — floating auto-fire companion, great for Ice/Poison.', '<a href="/weapons-machine-gun/">Machine Gun</a> — a Version 1.0 craftable gadget.'] },
      { heading: 'Armor sets', bullets: ['<a href="/weapons-nimbus-regalia/">Nimbus Regalia</a> — a dungeon-start Shield that grants +20% damage on break (Greed & Glory).', '<a href="/weapons-endless-void-armour/">Endless Void Armour</a> — Version 1.0 crit set that scales with Spark perks.'] },
      { heading: 'Upgrading and best picks', paragraphs: ['Upgrades raise the number in a weapon’s effect text. Tiers cost 2,000 gold (Common), 5,000 (Uncommon), 20,000 (Rare) and 50,000 (Epic), each with a growing count of that weapon’s material; a Legendary tier exists but its full cost is not published. Early Access tier lists agree the Aetherium Heart, Ultimate Spear, Ultimate Short Sword and Blo-Beam are the strongest picks; the Version 1.0 Endless aspects have not been ranked yet.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Every system in the launch build, including the four Endless Weapon Aspects in context.' },
      { href: '/bosses/', title: 'Moonlighter 2 Bosses', description: 'The four bosses Steam names, ordered by how many owners have beaten each one.' },
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Route planning around relic collection, risk, and backpack space.' },
    ],
    sources: [SOURCES.steam, SOURCES.steamVersionOneNews, SOURCES.steamLaunchNews],
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
    title: 'Moonlighter 2 Release Date: Version 1.0 and Early Access History',
    description: 'The Moonlighter 2 release date: version 1.0 arrived September 2, 2026, after an Early Access run that started November 19, 2025.',
    kicker: 'Release tracking',
    status: 'Verified',
    intro: 'Moonlighter 2: The Endless Vault has two dates worth knowing. It entered Early Access on November 19, 2025, and version 1.0 released on September 2, 2026. The Steam listing now shows the second one.',
    sections: [
      { heading: 'Current Steam listing', paragraphs: ['Steam shows Sep 2, 2026 in the release field and no longer carries the Early Access tag. The listed genres are Action, Adventure and RPG, and the platform is Windows.'], bullets: ['App ID: 2350790', 'Developer: Digital Sun', 'Publisher: 11 bit studios', 'Platform shown: Windows', 'Steam release field: Sep 2, 2026', 'Current store state: released, out of Early Access'] },
      { heading: 'How the two dates fit together', paragraphs: ['November 19, 2025 is when the game became buyable and playable in Early Access. September 2, 2026 is when it left Early Access as version 1.0. Both are real release dates for different things, which is why search results disagree about them.'], bullets: ['Early Access start: November 19, 2025', 'Version 1.0 launch: September 2, 2026', 'Date first announced: August 5, 2026, in a first-party Steam post', 'Physical editions: 13 November 2026, with Silver Lining Interactive'] },
      { heading: 'Console versions', paragraphs: ['The launch-day announcement says console versions are available now, in the same sentence that confirms the PC version left Early Access. It does not name a single console, and the Steam listing still shows Windows only. So consoles are officially claimed to exist without an official platform list attached.'] },
    ],
    sources: [SOURCES.steamVersionOneNews, SOURCES.steamLaunchNews, SOURCES.steam],
  },
  'version-1-release-date': {
    slug: 'version-1-release-date',
    title: 'Moonlighter 2 Version 1.0 Release Date and New Content',
    description: 'Moonlighter 2 version 1.0 released on September 2, 2026, adding the Endless Weapon Aspects, Shop Level 5, the Bomb Path and Hardcore Mode.',
    kicker: 'Version 1.0 news',
    status: 'Verified',
    intro: 'Moonlighter 2: The Endless Vault released version 1.0 on September 2, 2026, the date Digital Sun and 11 bit studios announced on August 5, 2026. This page tracks what each announcement promised and what the launch-day post confirmed shipped.',
    sections: [
      { heading: 'When was Moonlighter 2 version 1.0?', paragraphs: ['September 2, 2026. The game had been in Steam Early Access since November 19, 2025, so 1.0 was a transition out of Early Access rather than a first release. The Steam listing now reads Sep 2, 2026 with no Early Access tag.'] },
      { heading: 'What the launch-day post confirmed', paragraphs: ['The September 2 announcement is the first-party record of what actually shipped. It describes the conclusion of the main story and names the new systems below.'], bullets: ['The Infinite Endless Vault postgame, unlocked after the main story.', 'Four Endless Weapon Aspects: Endless Short Sword, Endless Great Sword, Endless Spear and Endless Gauntlets.', 'Shop Level 5, with one more Bloblet slot and one more cosmetic placement slot.', 'The Bomb Path, a new perk path.', 'Hardcore Mode.', 'New vendors, Endless Vault cosmetics, and Codex pages covering enemies, characters, perks and furniture.'] },
      { heading: 'What only the August announcement listed', paragraphs: ['The August 5 post named several things the launch-day post does not mention again. They are kept separate here because they have no launch-day confirmation, which is not the same as being cut.'], bullets: ['A craftable Machine Gun gadget.', 'The Endless Armour set.', 'Endless Vault VII, described then as a brand-new threshold.', 'Vendors named as K33P3R Level 5 and Spark.'] },
      { heading: 'What to do with this information now', paragraphs: ['Use these lists as an index of what exists, not as an item database. Exact weapon damage, Machine Gun values, Hardcore rules, threshold gold targets and shop prices are not in either announcement and need a reproducible in-game check. The full breakdown of the launch build, including the one rule the postgame does publish, is on the version 1.0 update page.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Every system in the launch build, including the Infinite Endless Vault reset rule.' },
      { href: '/release-date/', title: 'Moonlighter 2 Release Date', description: 'The Early Access date, the 1.0 date, and what Steam shows now.' },
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The confirmed weapon, armor, gadget and village upgrade categories.' },
    ],
    sources: [SOURCES.steamVersionOneNews, SOURCES.steamLaunchNews, SOURCES.steam],
  },
  'gameplay-preview': {
    slug: 'gameplay-preview',
    title: 'Moonlighter 2: The Endless Vault Gameplay Preview',
    description: 'A source-backed Moonlighter 2: The Endless Vault gameplay preview covering dungeons, relics, shop pricing, village upgrades, and what version 1.0 added on September 2, 2026.',
    kicker: 'Gameplay preview',
    status: 'Verified',
    intro: 'Moonlighter 2: The Endless Vault connects an action-RPG dungeon run to a player-run shop and village. This preview uses the Steam listing and the official version 1.0 announcements while leaving exact prices, routes, and combat values for a reproducible build check.',
    sections: [
      { heading: 'The gameplay loop in one sentence', paragraphs: ['Steam describes a loop of exploring dangerous dungeons, gathering relics and loot, returning to the shop, setting prices, reading customers, and reinvesting in the village. That is the most reliable answer to “what is Moonlighter 2 gameplay?”: the adventure and merchant roles are designed to feed each other.'], bullets: ['Dungeon run: explore, fight, and collect relics.', 'Shop step: arrange loot, set a price, and read customer reactions.', 'Progression step: reinvest in the village, weapons, armor, upgrades, and shop systems.', 'Challenge step: push farther into the Endless Vault for greater risk and reward.'] },
      { heading: 'Why pricing is part of the gameplay', paragraphs: ['The official store description says the player sets their own price and reads customers to find the right deal. Steam does not publish a universal item-price chart, so a useful guide should record the item name, acquisition source, displayed reaction, shop state, event context, and game version rather than inventing a formula.'], note: { label: 'Not yet verified', text: 'No exact Moonlighter 2 price, customer multiplier, best shop decoration, or universal profit route is claimed here without a measured in-game entry.' } },
      { heading: 'What version 1.0 added to that loop', paragraphs: ['Version 1.0 released on September 2, 2026 and extended the loop at both ends. The main story now concludes, and past that ending the Infinite Endless Vault turns the challenge step into a gold-target ladder: each threshold has to be cleared in a single run, and falling short of the required gold resets progress on that threshold. The launch post also names four Endless Weapon Aspects, Shop Level 5, the Bomb Path perk path, Hardcore Mode, and new vendors, cosmetics and Codex pages. Those names are confirmed; their damage, prices, unlock conditions and gold targets are not published anywhere.'] },
      { heading: 'A clean first-session test', paragraphs: ['On a real build, keep the first comparison controlled: note the dungeon depth, relic category, backpack state, return decision, sale price, customer reaction, and village option unlocked afterward. Then repeat one variable at a time. That produces a useful gameplay guide without mixing Early Access observations, community claims, and 1.0 marketing copy.'] },
      { heading: 'What this preview does not claim', paragraphs: ['The official sources do not provide a complete item database, exact dungeon map, boss route, weapon tier list, price formula, or save-transfer rule. Those are good search intents, but they need a versioned hands-on entry on the 1.0 build rather than a guess based on the store description.'] },
    ],
    sources: [SOURCES.steamLaunchNews, SOURCES.steam],
  },
  'steam-features-guide': {
    slug: 'steam-features-guide',
    title: 'Moonlighter 2 Steam Features Guide — Controller, Cloud & Single-Player',
    description: 'Moonlighter 2 Steam features explained: controller support, Steam Cloud, Family Sharing, Windows availability, and the current single-player status.',
    kicker: 'Steam features',
    status: 'Verified',
    intro: 'If you are checking whether Moonlighter 2 supports a controller, Steam Cloud, or multiplayer on the version 1.0 build, this page separates the store categories from features that have never been announced.',
    sections: [
      { heading: 'What Steam currently confirms', paragraphs: ['The official Steam listing identifies Moonlighter 2: The Endless Vault as a released Windows game, out of Early Access since September 2, 2026. Its listed features include Single-player, Full controller support, Gamepad recommended, Steam Cloud, and Family Sharing.'], bullets: ['Platform listed: Windows PC.', 'Player mode listed: Single-player.', 'Input: Full controller support and Gamepad recommended.', 'Account features: Steam Cloud and Family Sharing.'] },
      { heading: 'Does Moonlighter 2 have co-op?', paragraphs: ['Not according to the current Steam categories. Steam does not list Multi-player, Online Co-op, or PvP for the released build. The shop-and-dungeon loop should therefore be planned as a solo experience unless Digital Sun or 11 bit studios publishes a first-party change.'] },
      { heading: 'What Steam Cloud tells you — and what it does not', paragraphs: ['Steam Cloud means the listing supports cloud synchronization, but the store page does not publish a save-slot count, conflict-resolution rule, or guarantee that any given update preserves every field. Keep an offline backup before a major update and treat first-party version notes as the authority on transition details.'], note: { label: 'Not confirmed', text: 'Cloud availability does not prove cross-platform saves, co-op saves, or any specific save-migration rule.' } },
      { heading: 'Controller details the store page does not cover', paragraphs: ['The Gamepad recommended label is useful for players deciding how to play, but it is not a button map. Exact bindings, remapping options, vibration behavior, and accessibility settings are not described by the store categories. Those details should be checked in the build rather than guessed from the action-RPG genre.'] },
      { heading: 'The 1.0 date is separate from the Early Access date', paragraphs: ['Moonlighter 2 entered Steam Early Access on November 19, 2025 and released version 1.0 on September 2, 2026. The feature categories above describe the current Steam listing and should be rechecked whenever a major update ships, since store categories are edited rather than versioned.'] },
    ],
    sources: [SOURCES.steam, SOURCES.steamLaunchNews],
  },
  'co-op-status': {
    slug: 'co-op-status',
    title: 'Is Moonlighter 2 Multiplayer? Co-op Status',
    description: 'Is Moonlighter 2 multiplayer? Steam currently lists Moonlighter 2 as single-player with controller support and no official co-op mode.',
    kicker: 'Multiplayer status',
    status: 'Verified',
    intro: 'Moonlighter 2: The Endless Vault is listed as a single-player game on Steam, and version 1.0 did not change that. The store page does not list co-op, online multiplayer, or PvP, so this guide treats the game as solo while leaving room for a future first-party update.',
    sections: [
      { heading: 'Short answer: no co-op is confirmed', paragraphs: ['Steam lists Single-player for Moonlighter 2 and does not list Multi-player, Online Co-op, or PvP categories in the store data checked on September 3, 2026, the day after version 1.0 released. The game’s merchant-and-dungeon loop is therefore documented as a solo loop: one player explores, returns with relics, runs the shop, and invests in Tresna.'] },
      { heading: 'What you can do in the current build', paragraphs: ['The official description connects dungeon exploration, relic collection, shop pricing, customer reactions, village investment, and equipment upgrades. Those systems are designed around the player’s double life as adventurer and merchant, not a published shared-farm or party system.'], bullets: ['Explore dungeons and collect relics alone.', 'Set shop prices and read customers yourself.', 'Invest in the village and unlock equipment categories.', 'Use full controller support and Steam Cloud as listed platform features.'] },
      { heading: 'Could multiplayer be added later?', paragraphs: ['Nothing in the tracked Steam news hub promises co-op or multiplayer, and the version 1.0 launch announcement does not mention either. The game is out of Early Access now, which makes a new player-count feature less likely than it was during development, but not impossible. Treat it as confirmed only when Digital Sun, 11 bit studios, or the Steam listing says so.'] },
      { heading: 'What is still unknown', paragraphs: ['The Steam page does not answer whether a future update could add co-op or whether any shared progression is planned. This page will update those fields only from a first-party announcement.'], note: { label: 'Current answer', text: 'Moonlighter 2 is listed as single-player. No official co-op or multiplayer mode is confirmed as of September 3, 2026, one day after the version 1.0 launch.' } },
    ],
  },
  'save-transfer-progress-guide': {
    slug: 'save-transfer-progress-guide',
    title: 'Moonlighter 2: The Endless Vault Save Transfer and Progress Guide',
    description: 'Moonlighter 2: The Endless Vault save transfer guide: what happened at the 1.0 transition, what Steam Cloud covers, and why no official wipe or migration rule was ever published.',
    kicker: 'Save transfer and progress',
    status: 'Launch-day update',
    intro: 'Moonlighter 2: The Endless Vault ran in Early Access from November 19, 2025 and released version 1.0 on September 2, 2026. Steam lists Steam Cloud, but the launch-day announcement does not mention saves at any point, so there is still no first-party statement about whether an Early Access file carries into 1.0.',
    sections: [
      { heading: 'Short answer: no official save rule was ever published', paragraphs: ['The version 1.0 transition has already happened. Digital Sun and 11 bit studios published a long launch-day announcement describing the story conclusion, the postgame, new weapons, a new perk path, a new shop level and a Hardcore mode — and not one line about save files, migration, or a wipe.', 'That silence is the whole answer to this question. There is no official rule to quote, in either direction.'], note: { label: 'Current answer', text: 'No first-party source says Early Access progress is preserved, and none says it is wiped. If your own file loaded normally after updating, that is a personal observation about your save, not a published policy.' } },
      { heading: 'What Steam Cloud confirms', paragraphs: ['The Steam listing includes Steam Cloud. That confirms the feature is offered, but it does not publish a save-slot count, a conflict-resolution rule, or a guarantee that any particular update preserves every field.'], bullets: ['Steam Cloud is listed.', 'Cross-platform save support is not confirmed by that label.', 'A migration rule between versions is not confirmed by that label.', 'The listing does not define how save conflicts or progress variants are handled.'] },
      { heading: 'Why this still matters after 1.0', paragraphs: ['Two groups of players still need this page. The first is anyone who has not launched the game since before September 2, 2026 and wants to know what happens to an old file on first load. The second is anyone playing now, because 1.0 is a starting point for patches rather than the end of updates, and the same absence of a published policy applies to those.', 'A third case is specific to the launch build: Hardcore Mode carries its own progress penalty by design. That is a game rule, not a save-transfer rule, and the two should not be confused when reading community reports.'] },
      { heading: 'Low-risk preparation for any update', paragraphs: ['The safest preparation is reversible and does not depend on an invented file path or migration command. Keep an offline backup of important save data before a major update, and keep that backup separate from any copy created afterwards.'], bullets: ['Record the current game version and the progress you want to check after the update.', 'Copy your save data somewhere outside the game folder before applying a large patch.', 'Do not overwrite the pre-update backup until you have confirmed the post-update result yourself.', 'Treat Steam Cloud as a listed feature, not as proof of cross-version preservation.', 'Keep any official version note that does discuss saves, since that would be the first real rule published.'] },
      { heading: 'How to read the Steam Cloud status safely', paragraphs: ['For this question, the useful confirmed fact is simply that Steam Cloud appears in the Steam feature listing. Use that to confirm the feature remains advertised, but do not turn it into a claim about cross-platform saves, a guaranteed restore, or a wipe decision. Those are separate questions that need explicit wording from the developer or a version note.'] },
      { heading: 'What to watch for next', paragraphs: ['A real update on this would come from Digital Sun or 11 bit studios in a developer announcement, patch note, or version note. Look for direct wording about save migration, wipe behavior, compatibility with existing progress, and any required player action. Until those terms are published, this page stays a preparation guide rather than a promise.'] },
    ],
    relatedPages: [
      { href: '/steam-features-guide/', title: 'Moonlighter 2 Steam Features Guide', description: 'Current Steam Cloud, controller, and single-player listing details.' },
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Everything the launch-day announcement does describe, including the postgame reset rule.' },
      { href: '/release-date/', title: 'Moonlighter 2 Release Date', description: 'The Early Access date, the 1.0 date, and what Steam shows now.' },
    ],
    sources: [],
  },
  'moonlighter-2-best-weapon': {
    slug: 'moonlighter-2-best-weapon',
    title: 'Moonlighter 2 Best Weapon: Version 1.0 Comparison',
    description: 'Moonlighter 2 best weapon guide comparing the four named Endless Weapon Aspects, their special attacks, and what the published version 1.0 data does not reveal.',
    kicker: 'Weapons · post-launch answer',
    status: 'Verified',
    intro: 'There is no official damage table that proves one Moonlighter 2 weapon is universally best. Version 1.0 does name four Endless Weapon Aspects and describes what each special does, which is enough to choose by playstyle without inventing a tier list.',
    showImageCredit: false,
    sections: [
      { heading: 'The four confirmed Endless Weapon Aspects', paragraphs: ['The launch build names Endless Short Sword, Endless Great Sword, Endless Spear and Endless Gauntlets. They are aspects for existing weapon classes, not a published list of four new base weapon categories.'], bullets: ['Short Sword: a multi-hit piercing special whose strike count rises with your combo.', 'Great Sword: a defensive stance that blocks attacks, raises Sharpness, then counterattacks.', 'Spear: consumes stored spearheads and empowers basic attacks for a limited time.', 'Gauntlets: attacks become significantly more powerful while Berserk is active.'] },
      { heading: 'Which one should you choose?', paragraphs: ['Choose Short Sword if you can keep a combo alive, Great Sword if you prefer a defensive opening, Spear if you already manage stored spearheads, and Gauntlets if your build reliably activates Berserk. Those are role recommendations from the published effects, not damage rankings.'] },
      { heading: 'What the public data does not give you', paragraphs: ['No official source tracked here publishes base damage, Sharpness values, exact hit counts, Berserk multipliers or a complete acquisition route. A real best-weapon test should name the version, weapon level, perk path, enemy, relics and shop state before comparing results.'] },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The wider weapon, armor, gadget and village upgrade categories.' },
      { href: '/moonlighter-2-endless-weapon-aspects/', title: 'Endless Weapon Aspects', description: 'Each named aspect and its confirmed special attack.' },
    ],
    sources: [],
  },
  'moonlighter-2-infinite-endless-vault-guide': {
    slug: 'moonlighter-2-infinite-endless-vault-guide',
    title: 'Moonlighter 2 Infinite Endless Vault Guide',
    description: 'How the Moonlighter 2 Infinite Endless Vault works after the main story, including single-run gold thresholds, resets and confirmed reward categories.',
    kicker: 'Postgame · Endless Vault',
    status: 'Verified',
    intro: 'The Infinite Endless Vault is the version 1.0 postgame in Moonlighter 2: The Endless Vault. It unlocks after the main story and turns the merchant loop into increasingly difficult gold thresholds that must be completed in one run.',
    showImageCredit: false,
    sections: [
      { heading: 'How the Endless Vault works', paragraphs: ['The launch announcement describes an endless series of increasingly difficult thresholds. Each threshold must be completed in a single run, and failing to reach its required amount of gold resets progress for that threshold. Partial gold progress does not bank between attempts.'] },
      { heading: 'What the Vault rewards', paragraphs: ['The confirmed reward categories are equipment, shop upgrades, decorations and cosmetics. The announcement does not publish a threshold count, exact gold target, scaling formula or final depth, so a guide should not fill those fields with a guessed number.'], bullets: ['Unlock: complete the main story.', 'Run rule: each threshold is completed in one run.', 'Failure: falling short of the gold requirement resets that threshold.', 'Rewards: equipment, shop upgrades, decorations and cosmetics.'] },
      { heading: 'A safe first attempt', paragraphs: ['Treat the first run as a route test. Record the vault stage, relic categories, backpack pressure, shop return decision and gold target shown by the build. Push only as far as you can extract without turning a valuable haul into an avoidable reset.'] },
    ],
    relatedPages: [
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'The risk, relic and route loop before the postgame.' },
      { href: '/moonlighter-2-dungeon-extraction-guide/', title: 'Dungeon Extraction Guide', description: 'How to decide when to return with a valuable backpack.' },
    ],
    sources: [],
  },
  'moonlighter-2-hardcore-mode': {
    slug: 'moonlighter-2-hardcore-mode',
    title: 'Moonlighter 2 Hardcore Mode Guide: What Happens on Death?',
    description: 'Moonlighter 2 Hardcore Mode explained: the launch-day wording, the earlier relic-loss wording, and the safer way to start a file.',
    kicker: 'Difficulty · Hardcore Mode',
    status: 'Launch-day update',
    intro: 'Moonlighter 2 version 1.0 includes Hardcore Mode. The launch-day announcement says dying means losing progress and starting from the very beginning, while an earlier announcement described losing relics on defeat. Because the two official wordings differ, the safe assumption is the harsher one.',
    showImageCredit: false,
    sections: [
      { heading: 'The current Hardcore wording', paragraphs: ['The September 2 launch post describes death as losing progress and starting the journey again from the very beginning. That is the wording attached to the build that shipped with version 1.0.'] },
      { heading: 'Why older guides disagree', paragraphs: ['The August 5 announcement described Hardcore Difficulty as losing all relics upon defeat in the Moonlighter style. Losing relics and restarting the whole journey are different penalties, and neither announcement explains the difference. This page keeps both statements visible instead of silently choosing one.'], note: { label: 'Practical rule', text: 'Until the in-game description or a later patch note clarifies the difference, assume a defeat can erase the run from the beginning.' } },
      { heading: 'Who should start Hardcore first?', paragraphs: ['Use a normal file to learn the shop, dungeon, relic and extraction loop before committing a Hardcore run. If you do start immediately, keep an offline save backup only for technical recovery; do not use it to claim that the mode has a different in-game death rule.'] },
    ],
    relatedPages: [
      { href: '/beginner-guide/', title: 'Beginner Guide', description: 'The safer first-session order for the released game.' },
      { href: '/save-transfer-progress-guide/', title: 'Save Transfer Guide', description: 'Steam Cloud and the absence of an official migration rule.' },
    ],
    sources: [],
  },
  'moonlighter-2-shop-level-5': {
    slug: 'moonlighter-2-shop-level-5',
    title: 'Moonlighter 2 Shop Level 5 Guide: New Slots Explained',
    description: 'What Moonlighter 2 Shop Level 5 adds in version 1.0: an additional Bloblet slot and one new cosmetic placement slot.',
    kicker: 'Shop progression · version 1.0',
    status: 'Verified',
    intro: 'Shop Level 5 raises the shop ceiling in Moonlighter 2 version 1.0. The launch announcement names exactly two additions: an additional Bloblet slot and a new cosmetic placement slot.',
    showImageCredit: false,
    sections: [
      { heading: 'What Shop Level 5 adds', paragraphs: ['The version 1.0 announcement says Shop Level 5 gives more room to customise the shop. Its two named additions are one additional Bloblet slot and one new cosmetic placement slot for another decoration.'], bullets: ['Additional Bloblet slot.', 'New cosmetic placement slot.', 'No published unlock cost or requirement in the announcement.'] },
      { heading: 'Why this matters to a shop build', paragraphs: ['The two slots improve shop capacity and presentation, but no official price multiplier, customer formula or decoration bonus is attached to them. Keep “more room” separate from a claim that Level 5 automatically creates more gold.'] },
      { heading: 'How to test the upgrade', paragraphs: ['Record the shop level before and after the upgrade, the number of active Bloblets, the available cosmetic positions and the same item’s customer reaction. Keep the item, price and shop state constant if you want to measure a change rather than a coincidence.'] },
    ],
    relatedPages: [
      { href: '/shop-guide/', title: 'Shop Guide', description: 'Pricing, customers, decorations and reinvestment.' },
      { href: '/prices/', title: 'Item Prices', description: 'Versioned sale observations instead of an invented universal price table.' },
    ],
    sources: [],
  },
  'moonlighter-2-endless-weapon-aspects': {
    slug: 'moonlighter-2-endless-weapon-aspects',
    title: 'Moonlighter 2 Endless Weapon Aspects Guide',
    description: 'Moonlighter 2 Endless Weapon Aspects explained: Short Sword, Great Sword, Spear and Gauntlets in the version 1.0 build.',
    kicker: 'Weapons · version 1.0',
    status: 'Verified',
    intro: 'Version 1.0 adds four named Endless Weapon Aspects to Moonlighter 2: Endless Short Sword, Endless Great Sword, Endless Spear and Endless Gauntlets. The official descriptions explain their specials but do not publish their damage values.',
    showImageCredit: false,
    sections: [
      { heading: 'Endless Short Sword', paragraphs: ['Its special becomes a swift piercing strike that lands multiple hits. The number of strikes increases with your combo, so the aspect rewards maintaining momentum between encounters.'] },
      { heading: 'Endless Great Sword', paragraphs: ['The Great Sword aspect is a Golden Guild craft. Its special enters a defensive stance that blocks attacks, increases Sharpness, and then counterattacks. It is the most explicitly defensive description among the four.'] },
      { heading: 'Endless Spear', paragraphs: ['The Spear aspect consumes all stored spearheads. Basic attacks become empowered special attacks for a limited time, with the bonus described as scaling with the number of spearheads consumed.'] },
      { heading: 'Endless Gauntlets', paragraphs: ['The Gauntlets aspect makes attacks significantly more powerful while Berserk is active. It amplifies a state-based build instead of adding a separate published input.'] },
      { heading: 'Numbers still need an in-game test', paragraphs: ['The launch announcement gives no damage, Sharpness, duration, strike-count maximum or acquisition table for the four aspects. Use the description to choose a playstyle, then record a versioned test before calling one the best.'] },
    ],
    sources: [],
  },
  'moonlighter-2-bomb-path': {
    slug: 'moonlighter-2-bomb-path',
    title: 'Moonlighter 2 Bomb Path Guide: How the Perk Works',
    description: 'How the Moonlighter 2 Bomb Path perk path is described in version 1.0, including its hit-count trigger and area damage.',
    kicker: 'Perks · version 1.0',
    status: 'Verified',
    intro: 'The Bomb Path is a new perk path in Moonlighter 2 version 1.0. It marks enemies with explosive effects that trigger after they take a certain number of attacks and damage nearby enemies when the bomb goes off.',
    showImageCredit: false,
    sections: [
      { heading: 'Bomb Path is a perk path', paragraphs: ['It is not described as a standalone bomb gadget. The launch announcement places it alongside existing perk paths and frames it as a new way to build your deck.'] },
      { heading: 'The confirmed trigger loop', paragraphs: ['Mark an enemy, land the required number of attacks, and let the explosive effect trigger. The resulting blast damages nearby enemies. The exact hit count and blast radius are not published, so do not quote a fixed number without a retail-build test.'] },
      { heading: 'How to test the path', paragraphs: ['Use one enemy group with a stable position. Count attacks from the mark to the detonation, note whether misses or environmental hits count, and record the number of nearby enemies affected. Repeat on the same build before comparing the path with another perk.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update', description: 'The wider launch-build feature list and its unanswered numbers.' },
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Route planning around relics, risk and backpack space.' },
    ],
    sources: [],
  },
  'moonlighter-2-relic-loot-guide': {
    slug: 'moonlighter-2-relic-loot-guide',
    title: 'Moonlighter 2 Relic and Loot Guide: What to Record',
    description: 'A Moonlighter 2 relic and loot guide for version 1.0 players tracking item categories, backpack risk, sale observations and unknown values.',
    kicker: 'Items · post-launch tracking',
    status: 'Verified',
    intro: 'Moonlighter 2’s core loop turns dungeon loot into shop decisions. The Steam listing does not provide a complete item-price database, so the most useful post-launch guide is a versioned record of what you found, how risky the route was, and what customers did with it.',
    showImageCredit: false,
    sections: [
      { heading: 'The five fields for every relic note', paragraphs: ['Record the displayed item name, the dungeon or run context, the backpack position, the listed or observed sale price, and the customer reaction. Add the game version when a patch could have changed an item or pricing rule.'] },
      { heading: 'Do not turn a category into a price table', paragraphs: ['The released store description confirms relic collection and player-set pricing, but not a universal value for every item. A guide that gives one “best price” without the item, shop state, customer reaction and version is not a reproducible economy guide.'] },
      { heading: 'What to carry home', paragraphs: ['Prioritize a haul you can extract safely over a larger backpack that forces a risky final room. Keep one note for items that were lost, discarded or used for an upgrade; the missing value is part of the route decision.'] },
    ],
    relatedPages: [
      { href: '/items/', title: 'Items & Relics', description: 'The tracked item categories and data boundaries.' },
      { href: '/prices/', title: 'Item Prices', description: 'Observed sale prices with version context.' },
      { href: '/moonlighter-2-dungeon-extraction-guide/', title: 'Dungeon Extraction Guide', description: 'When to leave with a valuable backpack.' },
    ],
    sources: [],
  },
  'moonlighter-2-dungeon-extraction-guide': {
    slug: 'moonlighter-2-dungeon-extraction-guide',
    title: 'Moonlighter 2 Dungeon Extraction Guide: When to Turn Back',
    description: 'When to leave a Moonlighter 2 dungeon, how to protect relics, and how to make a repeatable extraction decision after version 1.0.',
    kicker: 'Dungeons · risk management',
    status: 'Verified',
    intro: 'The safest Moonlighter 2 dungeon route is not always the deepest one. Extraction is the bridge between a successful fight and a shop inventory, so the decision should weigh relic value, backpack pressure, healing, route knowledge and the cost of a death.',
    showImageCredit: false,
    sections: [
      { heading: 'Leave when the haul has a clear purpose', paragraphs: ['Turn back when the backpack contains the item or category you came for, when the next branch is unknown and expensive, or when healing and safe exits are running low. The official loop rewards returning with loot; it does not require every run to reach the deepest room.'] },
      { heading: 'A simple extraction check', paragraphs: ['Before opening the next door, ask three questions: can I survive the next encounter, do I know the route back, and would losing this haul damage my shop plan? If two answers are no, extract and convert what you have into information, pricing and village progress.'] },
      { heading: 'Endless Vault is different', paragraphs: ['The Infinite Endless Vault uses one-run gold thresholds after the main story. Falling short resets progress for that threshold, so extraction planning there must account for the required gold shown by the build. No universal threshold number or depth is published.'] },
    ],
    relatedPages: [
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'The released game’s dungeon-to-shop loop.' },
      { href: '/beginner-guide/', title: 'Beginner Guide', description: 'A safer order for learning the first sessions.' },
    ],
    sources: [],
  },
  'moonlighter-2-boss-completion-guide': {
    slug: 'moonlighter-2-boss-completion-guide',
    title: 'Moonlighter 2 Boss Completion Guide: How to Track Progress',
    description: 'A Moonlighter 2 boss completion guide for the released version 1.0 build, with a clean checklist and no invented boss damage table.',
    kicker: 'Bosses · completion route',
    status: 'Verified',
    intro: 'Moonlighter 2’s Steam achievement data provides a useful completion signal for bosses, while the public store material does not provide a complete boss route, health table or universal weapon recommendation. Track each named encounter with the same versioned method.',
    showImageCredit: false,
    sections: [
      { heading: 'Separate boss completion from the main story', paragraphs: ['A boss defeat can be a story milestone, a Steam achievement, an Endless Vault test or a personal route objective. Log which kind it is. Completing the main story does not automatically prove that every postgame challenge or named encounter is complete.'] },
      { heading: 'The checklist fields that matter', paragraphs: ['For each boss, record the displayed name, location or dungeon label, weapon and relic setup, whether the run was normal or Hardcore, and the date or version. Add the reward only after it is visible in the build.'] },
      { heading: 'Avoid a fake best-build answer', paragraphs: ['The launch data confirms weapons, armor, gadgets and village upgrades as progression categories, but it does not publish a complete boss weakness or damage ranking. Test one variable at a time and describe a build as suitable for a specific encounter rather than universally best.'] },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'Moonlighter 2 Bosses', description: 'The named boss and achievement tracking hub.' },
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The released game’s confirmed upgrade categories.' },
    ],
    sources: [],
  },
  'moonlighter-2-postgame-guide': {
    slug: 'moonlighter-2-postgame-guide',
    title: 'Moonlighter 2 Postgame Guide: What to Do After Version 1.0',
    description: 'What to do after finishing Moonlighter 2 version 1.0: Infinite Endless Vault, Hardcore Mode, Endless Weapon Aspects, Bomb Path and Shop Level 5.',
    kicker: 'Postgame checklist · 1.0',
    status: 'Verified',
    intro: 'Moonlighter 2 version 1.0 released on September 2, 2026 and adds a postgame rather than ending the loop at the final story scene. The clean route is to finish the story, choose a new challenge, and keep the shop and dungeon records versioned.',
    showImageCredit: false,
    sections: [
      { heading: 'Finish the main story first', paragraphs: ['The Infinite Endless Vault unlocks after the main story. Finish that route before judging the postgame, because the Vault is explicitly framed as the next stage of the merchant-and-dungeon loop.'] },
      { heading: 'Pick one postgame goal', paragraphs: ['Choose between an Endless Vault threshold, a Hardcore file, an Endless Weapon Aspect test, the Bomb Path, Shop Level 5 or boss and achievement cleanup. Trying to measure all of them in one first postgame run makes the result hard to reproduce.'], bullets: ['Endless Vault: one-run gold thresholds with resets on a failed threshold.', 'Weapons: four named Endless Weapon Aspects.', 'Perks: the Bomb Path hit-count explosion loop.', 'Shop: Level 5 adds a Bloblet slot and a cosmetic placement slot.', 'Challenge: Hardcore Mode uses the harsher launch-day death wording.'] },
      { heading: 'What is still not a public database', paragraphs: ['The 1.0 announcement does not publish gold thresholds, damage values, boss routes, item prices, shop costs or a save-transfer rule. Those are excellent hands-on article topics, but they should be added only after a build-specific test rather than copied as precise numbers.'] },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update', description: 'The full launch-build feature breakdown.' },
      { href: '/moonlighter-2-infinite-endless-vault-guide/', title: 'Infinite Endless Vault', description: 'The postgame thresholds and reset rule.' },
      { href: '/moonlighter-2-hardcore-mode/', title: 'Hardcore Mode', description: 'The two official descriptions and safe preparation.' },
    ],
    sources: [],
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
      { heading: 'What to include', paragraphs: ['Please include the page URL, the exact claim, the source or in-game version that supports the correction, and a screenshot when reporting a gameplay value.'], bullets: ['Email: nmlkareem161@gmail.com', 'Source corrections are reviewed against first-party pages first.', 'Unverified community leads stay labeled until reproduced.'] },
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
      { heading: 'Basic policy', paragraphs: ['The site may later use privacy-respecting analytics or advertising after deployment. Any such service will be disclosed here before it is enabled. External Steam links are governed by their own policies.'], note: { label: 'Contact', text: 'For privacy questions, email nmlkareem161@gmail.com.' } },
    ],
  },
  minibosses: {
    slug: 'minibosses',
    title: 'Moonlighter 2 Minibosses: All 12 by Floor, with Drops',
    description: 'Every Moonlighter 2 miniboss: two per floor across Kalina, The Gallery and Aeolia, the material each one drops, and how to beat them.',
    kicker: 'Minibosses · 2 per floor',
    status: 'Verified',
    intro:
      'Every floor in Moonlighter 2 has two minibosses that appear at the halfway point of a run, before the floor boss. Each drops the crafting material used for that dimension’s early weapon upgrades. Minibosses spawn with two or three helpers — kill the helpers first, because taser and stun effects wear off much faster on the miniboss itself, and elites and minibosses never enter the Rupture state, so the backpack throw only works on their adds.',
    sections: [
      { heading: 'Kalina minibosses', bullets: ['<a href="/minibosses-dafest/">Dafest</a>, Guardian of Disco-Hell — Day Realm; drops Broken Microphone.', '<a href="/minibosses-garrx/">Garr’x</a>, Dancefloor Assassin — Day Realm; drops Broken Microphone.', '<a href="/minibosses-hajji/">Hajji</a>, Queen of Techno — Night Realm; drops Kalina rare material.', '<a href="/minibosses-punkest/">Punkest</a>, Oracle of the After — Night Realm; drops Kalina rare material.'] },
      { heading: 'The Gallery minibosses', bullets: ['<a href="/minibosses-4rt-tr4p/">4RT-TR4P</a>, Exhibition Champion — Exhibition Wing; drops Ancient Translator.', '<a href="/minibosses-v3nus/">V3NUS</a>, Muse of the Gallery — Exhibition Wing; drops Ancient Translator.', '<a href="/minibosses-sergeant-trajano/">Sergeant Trajano</a>, Treasury guard — Treasury Halls; drops Gallery rare material.', '<a href="/minibosses-sergeant-roberto/">Sergeant Roberto</a>, Treasury guard — Treasury Halls; drops Gallery rare material.'] },
      { heading: 'Aeolia minibosses', bullets: ['<a href="/minibosses-t-hawk/">T-Hawk</a>, Pro-Glider — Zephyr Fields; drops Oneiric Core.', '<a href="/minibosses-orphis/">Orphis</a>, The Orb Keeper — Zephyr Fields; drops Oneiric Core.', '<a href="/minibosses-ataulfo/">Ataulfo</a>, The Rumbling Colossus — Howling Harbor; drops Oneiric Core.', '<a href="/minibosses-wisteria/">Wisteria</a>, The Anchor — Howling Harbor; drops Oneiric Core.'] },
      { heading: 'Turning miniboss drops into boss materials', paragraphs: ['Nou and Anacard, at the Silent Exchange, swap miniboss materials for boss materials, so surplus Broken Microphones, Ancient Translators and Oneiric Cores are not wasted once you have upgraded that dimension’s early weapons.'] },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'All bosses', description: 'The six realm bosses and the Boss Rush challenges.' },
      { href: '/characters-nou-and-anacard/', title: 'Nou and Anacard', description: 'The vendors who swap miniboss materials for boss materials.' },
      { href: '/weapons/', title: 'Weapons', description: 'The aspects those upgrade materials feed.' },
    ],
    sources: [],
  },
  bosses: {
    slug: 'bosses',
    title: 'Moonlighter 2 Bosses: Every Confirmed Boss and the Order Players Beat Them',
    description:
      'Moonlighter 2 bosses: the Curator, Senda, Tyke and Monte are the four bosses Steam confirms by name, ordered by how many players have actually beaten each one.',
    kicker: 'Bosses · measured completion data',
    status: 'Verified',
    intro:
      'Moonlighter 2 has six realm bosses — two per dimension across Kalina, The Gallery and Aeolia — plus twelve minibosses and the story antagonist Moloch. Four of the six have a public "Defeat" achievement on Steam, so this page pairs the full boss roster with the measured completion rates where they exist, and marks clearly where a requirement is hidden.',
    sections: [
      {
        heading: 'The six realm bosses by floor',
        paragraphs: [
          'Each of the three dimensions has two floors, and each floor ends in a boss. Every realm boss drops a rare crafting material and two chests; each floor also has two minibosses at the halfway point that drop the material for that dimension’s early weapon upgrades.',
        ],
        bullets: [
          '<a href="/bosses-the-herald/">The Herald</a> — Kalina, Day Realm; 3 phases; drops Sound of Harmony.',
          '<a href="/bosses-thalaam/">Thalaam</a> — Kalina, Night Realm; 3 phases; bell-throwing shield fight.',
          '<a href="/bosses-the-curator/">The Curator</a> — The Gallery, Exhibition Wing; 3 phases; drops Quantum Core.',
          '<a href="/bosses-tyke/">Tyke</a> — The Gallery, Treasury Halls; 3 phases; frees a captured friend.',
          '<a href="/bosses-senda/">Senda</a> — Aeolia, Zephyr Fields; 2 phases; drops The King’s Left Mask.',
          '<a href="/bosses-monte/">Monte</a> — Aeolia, Howling Harbor; 3 phases; rated the hardest realm boss.',
          '<a href="/minibosses/">All twelve minibosses</a> and <a href="/bosses-moloch/">Moloch</a>, the story finale.',
        ],
      },
      {
        heading: 'The four confirmed bosses, hardest last',
        paragraphs: [
          'Every one of these four achievements says "Defeat" followed by a name, so there is no inference involved in calling them bosses. The percentage is the share of all owners who have done it, which makes the ordering a measurement of how far into the game each fight sits rather than an opinion about difficulty.',
          'The spread is narrower than it looks. Between the Curator at 43.6% and Monte at 21.2% you lose about half the player base, but the steps between adjacent bosses are 5 to 12 points each. There is no single wall where everyone stops.',
        ],
        bullets: [
          '<a href="/bosses-the-curator/">The Curator</a> — 43.6%, first named kill.',
          '<a href="/bosses-senda/">Senda</a> — 38.7%; Hotfix 1 restored second-phase gadget poison.',
          '<a href="/bosses-tyke/">Tyke</a> — 26.1%; largest gap on the named-boss list.',
          '<a href="/bosses-monte/">Monte</a> — 21.2%; rarest named kill.',
        ],
      },
      {
        heading: 'One hidden achievement sits inside the boss order',
        paragraphs: [
          'An achievement called The Fallen King sits at 29.4%, which places it between Senda (38.7%) and Tyke (26.1%). Its description is hidden on Steam, so what it requires is not published and this page does not claim it is a boss kill. What can be said is that whatever it needs, it happens at the same point in a run as the gap between the second and third confirmed bosses.',
          'Seven other achievements also have hidden descriptions, and they are spread right across the run: 70.3%, 64.2%, 57.8%, 53.3%, 18.7%, and two at 0.1%. Treat every one of them as a progress marker with an unpublished requirement, not as a fight.',
        ],
      },
      {
        heading: 'Beating a boss with the broom is not the flex you think',
        paragraphs: [
          'One achievement states its requirement openly and is genuinely surprising: defeating a boss with the broom, at 23.3% of owners. That sits above Monte (21.2%) and just below Tyke (26.1%) — meaning more people have won a boss fight with the joke weapon than have beaten the fourth confirmed boss at all.',
          'It is a real signal about how the combat is tuned. If a broom clears a boss for almost a quarter of the player base, the fights are readable pattern tests rather than damage checks. Gear matters less than knowing the moveset, which is worth remembering before you spend a run farming for a better weapon.',
        ],
      },
      {
        heading: 'The four Ultimate Challenges are the real endgame',
        paragraphs: [
          'Past the named bosses there are four achievements for completing an Ultimate Challenge in a specific area, and their rates put them well below any boss kill. These are the completion targets for players who have already finished the main run.',
          'The rates also give the four challenge names without any guesswork, since each achievement states the one it belongs to.',
        ],
        bullets: [
          'Ultimate Gallery Challenge — 10.4% of owners.',
          'Ultimate Kalina Challenge — 7.7%.',
          'Ultimate Aeolia Challenge — 7.6%.',
          'Ultimate Interdimensional Challenge — 3.8%, the rarest of the four.',
        ],
        note: {
          label: 'Area entry rates for context',
          text: 'Entering the Gallery for the first time is at 68.7% and entering Aeolia for the first time is at 49.9%. So about two in three players see the Gallery, and roughly one in seven of those goes on to clear its Ultimate Challenge.',
        },
      },
      {
        heading: 'The Endless Vault ladder is steeper than any boss',
        paragraphs: [
          'Seven achievements track the Endless Vault challenges in order, and this is where the completion curve genuinely collapses. The first challenge is more common than any boss kill; the seventh sits at the floor of the entire achievement list.',
          'The step from the fourth challenge (39.3%) to the fifth (13.7%) is the single largest drop anywhere in Moonlighter 2 achievement data — a fall of 25.6 points. If you are looking for the game\'s actual difficulty wall, it is there, not in a boss room.',
        ],
        bullets: [
          '1st challenge — 75.8% of owners.',
          '2nd challenge — 58.7%.',
          '3rd challenge — 46.7%.',
          '4th challenge — 39.3%.',
          '5th challenge — 13.7%.',
          '6th challenge — 5.4%.',
          '7th challenge — 0.1%.',
        ],
      },
      {
        heading: 'How long a boss run takes',
        paragraphs: [
          'Across a sample of 473 Steam reviews, the median reviewer had 15.5 hours logged when they posted, and those same accounts now sit at a median of 21.5 hours, with the top 10% past 49 hours and the longest single account at 116 hours. Only 6.6% reviewed inside the two-hour refund window, which is low, and it matches the store rating: 2,660 of 3,127 reviews are positive, or 85.1% — Very Positive.',
          'Read against the boss rates, that puts the Curator somewhere in the first several hours and Monte deep into a 20-hour-plus run. The distribution is weighted late, so the shop and dungeon loop is holding people well past the point where the confirmed bosses are done.',
        ],
        bullets: [
          'Under 2 hours: 6.6% of reviewers.',
          '2-5 hours: 15.4%.',
          '5-10 hours: 13.5%.',
          '10-20 hours: 23.7%.',
          '20-40 hours: 26.6%.',
          'Over 40 hours: 14.2%.',
        ],
      },
      {
        heading: 'What this page does not claim',
        paragraphs: [
          'The achievement list gives names, requirements where they are published, and completion rates. It gives nothing else, so none of the following appears above.',
        ],
        bullets: [
          'No movesets, attack patterns, phase counts, or health values for any boss.',
          'No arena locations or how to reach a given boss.',
          'No drop tables or rewards.',
          'No recommended weapon, gear level, or build for any fight.',
          'No claim that these four are every boss in the game — they are every boss Steam names.',
          'No requirement for any hidden achievement, including The Fallen King.',
        ],
        note: {
          label: 'When these figures were read',
          text: 'Unlock percentages and review data were read on September 2, 2026, the day version 1.0 released. The rates span the whole Early Access period from November 19, 2025 onward rather than 1.0 alone, and they will keep moving as the 1.0 audience plays through.',
        },
      },
    ],
    table: {
      heading: 'Confirmed boss kills by global unlock rate',
      headers: ['Boss', 'Achievement', 'Owners who have beaten it', 'Position'],
      rows: [
        ['The Curator', 'Forced Shutdown', '43.6%', 'First of the four'],
        ['Senda', 'Wind Slumber', '38.7%', 'Second'],
        ['Tyke', 'Dismissal Letter', '26.1%', 'Third'],
        ['Monte', 'Sweet Petrichor', '21.2%', 'Fourth and rarest'],
        ['Any boss, using the broom', 'Humble Hero', '23.3%', 'Not a progression step'],
      ],
    },
    relatedPages: [
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Route planning around relic collection, risk, and backpack space before a boss attempt.' },
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The confirmed weapon, armor, gadget, and village upgrade categories.' },
      { href: '/walkthrough/', title: 'Walkthrough', description: 'The release-aware route framework for working through the game in order.' },
    ],
    sources: [],
  },
  'version-1-0-update': {
    slug: 'version-1-0-update',
    title: 'Moonlighter 2 Version 1.0 Update: Everything in the Launch Build',
    description:
      'Moonlighter 2 version 1.0: the Infinite Endless Vault threshold rule, Hardcore Mode, the four Endless Weapon Aspects, the Bomb Path, Shop Level 5, and physical editions.',
    kicker: 'Version 1.0 · launch build contents',
    status: 'Launch-day update',
    intro:
      'Moonlighter 2: The Endless Vault left Early Access on September 2, 2026. The launch-day announcement from Digital Sun and 11 bit studios is the only first-party description of what actually shipped, and it is unusually specific in some places while giving no numbers at all in others. This page keeps those apart: the rules 1.0 publishes — the Infinite Endless Vault reset condition, what each Endless Weapon Aspect special does, what Hardcore Mode costs you — and the values it never provides.',
    sections: [
      {
        heading: 'What actually changed on September 2',
        paragraphs: [
          'The announcement opens with the line that matters for the store page: Moonlighter 2: The Endless Vault is “officially out of Early Access on PC, and console versions are available now”. The Steam listing has followed. The release field reads Sep 2, 2026, the Early Access tag is gone, and the genres are now Action, Adventure and RPG.',
          'Note what that sentence does not do: it asserts that console versions exist without naming a single console. Steam still lists Windows as the only platform, so if you came looking for confirmation of a specific console release, the launch post is not it.',
        ],
        bullets: [
          'Early Access ran from November 19, 2025 to September 2, 2026 — roughly nine and a half months.',
          'The main story now has an ending. Version 1.0 adds quests, cutscenes and discoveries that bring Will’s journey in Tresna to its conclusion, and changes the world around you along the way.',
          'A postgame exists past that ending, and it is the headline addition rather than a bonus mode.',
          'Platform listed on Steam: Windows. Console versions are asserted by the developer but not named.',
        ],
        note: {
          label: 'Store snapshot, September 3, 2026',
          text: 'Steam listed the base price at $29.99 with a 30% launch discount active at $20.99 when this page was checked. A launch discount is time-limited by definition, so treat $29.99 as the durable figure and the store page as the authority on what is running today.',
        },
      },
      {
        heading: 'The Infinite Endless Vault has one hard rule',
        paragraphs: [
          'The postgame unlocks after you complete the main story, and it is built as “an endless series of increasingly difficult thresholds”. One sentence defines how it works: “Each one must be completed in a single run, meaning that failing to reach the required amount of gold will reset your progress for that threshold.”',
          'That is worth reading twice, because it inverts a habit the rest of the game teaches. A threshold is a gold target, not a boss room, and it is scored per run. Partial progress does not bank. Come up short — by dying, or by leaving early — and that threshold starts from zero. The usual Moonlighter approach of chipping away at a dungeon across several trips does not transfer here.',
          'Rewards scale with how far you push, and the announcement names four categories that unlock along the way: equipment, shop upgrades, decorations and cosmetics. It does not say where the ladder ends. The post poses the question “Can you discover how far the Endless Vault truly goes?” rather than answering it.',
        ],
        bullets: [
          'Unlock condition: complete the main story.',
          'Structure: an endless series of thresholds, each harder than the last.',
          'Fail state: not reaching the required gold in one run resets your progress for that threshold.',
          'Scope: one run per threshold, with no partial progress carried between runs.',
          'Rewards: equipment, shop upgrades, decorations and cosmetics.',
        ],
        note: {
          label: 'No numbers are published',
          text: 'The announcement gives no gold value for any threshold, no threshold count and no scaling rule. Any specific gold requirement you see quoted is a player measurement, not an official figure.',
        },
      },
      {
        heading: 'The four Endless Weapon Aspects, by what their special actually does',
        paragraphs: [
          'These are aspects rather than new weapon types: each one re-specifies the special attack on a weapon class you already use. The descriptions are concrete about mechanics and silent about damage, which means you can plan a build from them but not compute one.',
          'Three of the four are explicitly risk-forward, framed around the Endless Vault’s own philosophy of risk and reward. The Great Sword is the outlier, and the only one whose special opens defensively.',
        ],
        bullets: [
          'Endless Short Sword — the special becomes a swift piercing strike that lands multiple hits, and the number of strikes increases with your combo. It pays for keeping momentum instead of resetting between engagements.',
          'Endless Great Sword — crafted by the Golden Guild. The special puts you into a defensive stance that blocks incoming attacks, increases Sharpness, then follows up with a counterattack.',
          'Endless Spear — the special consumes all stored spearheads and turns your basic attacks into empowered special attacks for a limited time, with bonus damage scaling on the number of spearheads consumed.',
          'Endless Gauntlets — while Berserk is active, your attacks become significantly more powerful. This one amplifies a playstyle rather than adding a new input.',
        ],
      },
      {
        heading: 'The Bomb Path is a perk path, not a gadget',
        paragraphs: [
          'The Bomb Path joins the existing perk paths. It lets you mark enemies with explosive effects that trigger after they have taken a certain number of attacks; when the bomb goes off, it damages nearby enemies.',
          'The trigger is a hit count rather than a timer, which is why the announcement frames the path as a new way to build your deck instead of a new item to use. Two things it does not publish: how many attacks the trigger needs, and how far the explosion reaches.',
        ],
      },
      {
        heading: 'Shop Level 5 adds exactly two slots',
        paragraphs: [
          'The shop ceiling moved up one level. Shop Level 5 gives more room to customise the shop, and the announcement names precisely two additions: an additional Bloblet slot, and a new cosmetic placement slot for one more decoration.',
          'No unlock cost or requirement is published for Shop Level 5, and the post does not say what the total Bloblet count becomes at that level.',
        ],
      },
      {
        heading: 'Hardcore Mode, and a wording change worth knowing about',
        paragraphs: [
          'The launch post describes Hardcore Mode in one line: “Death comes with a much greater cost, as dying means losing your progress and starting the journey again from the very beginning.”',
          'The August 5 announcement described the same feature differently. It called the mode Hardcore Difficulty and said it makes “you lose all your relics upon defeat in the ML1 style”. Losing your relics and restarting the whole journey are not the same penalty, and neither post reconciles the two.',
          'This page does not pick a winner. If you are deciding whether to start a Hardcore file, the safe reading is the harsher one: assume a defeat can cost the run from the beginning until the in-game description tells you otherwise.',
        ],
        note: {
          label: 'Unresolved between two official posts',
          text: 'August 5, 2026: lose all relics upon defeat. September 2, 2026: lose your progress and start again from the very beginning. Both are first-party. The second describes the build that actually shipped, which is why it is quoted first here.',
        },
      },
      {
        heading: 'Three August items the launch post never mentions again',
        paragraphs: [
          'The pre-launch announcement on August 5 listed content that the launch-day post does not bring up. Absence from one post is not removal, but it does mean these items have no launch-day confirmation, so they belong in their own list rather than mixed in above.',
        ],
        bullets: [
          'A craftable Machine Gun gadget.',
          'The Endless Armour set — described in August as forged by the Golden Guild, with increased base critical hit chance and additional critical damage for every Spark perk equipped.',
          'Endless Vault VII, described in August as introducing “a brand-new threshold to conquer”. The launch post discusses the Infinite Endless Vault instead and never uses the number VII, so whether these are one feature under two names is not something either announcement settles.',
          'Two named vendors: K33P3R Level 5, and Spark, called an endgame merchant. The launch post confirms “new vendors” without naming any of them.',
        ],
      },
      {
        heading: 'Everything else 1.0 lists without describing',
        paragraphs: [
          'The closing section of the announcement is a list rather than a description. It is still worth recording, because it marks where 1.0 content exists even though none of it arrives with specifics.',
        ],
        bullets: [
          'New vendors.',
          'New Endless Vault cosmetics.',
          'New Codex pages covering enemies, characters, perks and furniture.',
          'Additional quests and cutscenes.',
          'Unspecified improvements.',
        ],
      },
      {
        heading: 'Physical editions arrive November 13, 2026',
        paragraphs: [
          'Digital Sun and 11 bit studios are partnering with Silver Lining Interactive on physical editions releasing on 13 November 2026, more than two months after the digital launch. Two versions are announced: a standard boxed copy, and a Collector’s Edition.',
          'The Collector’s Edition contents are itemised: art cards, patches, a poster, stickers, a metal coin, and a digital artbook. No price, no platform list and no retailer is given for either edition.',
        ],
      },
      {
        heading: 'What 1.0 still does not answer',
        paragraphs: [
          'The announcement is a feature list, not a patch note. There is no version string, no build size, and no changelog of balance changes carried over from the last Early Access build. Every new system arrives without numbers attached.',
        ],
        bullets: [
          'No gold thresholds, threshold count or scaling rule for the Infinite Endless Vault.',
          'No damage, Sharpness or critical values for any Endless Weapon Aspect.',
          'No hit-count trigger or blast radius for the Bomb Path.',
          'No Shop Level 5 unlock cost, and no final Bloblet total.',
          'No save-transfer or wipe rule for Early Access files — the launch post does not mention saves at all.',
          'No console platform names, despite the post confirming console versions are out.',
        ],
      },
    ],
    table: {
      heading: 'Endless Weapon Aspects at a glance',
      headers: ['Aspect', 'What the special does', 'Scales with'],
      rows: [
        ['Endless Short Sword', 'A swift piercing strike that lands multiple hits', 'Your combo — a longer combo means more strikes'],
        ['Endless Great Sword', 'A blocking stance that raises Sharpness, then counterattacks', 'Nothing published; a Golden Guild craft'],
        ['Endless Spear', 'Consumes all stored spearheads, turning basic attacks into empowered specials for a limited time', 'The number of spearheads consumed'],
        ['Endless Gauntlets', 'Attacks become significantly more powerful', 'Berserk being active'],
      ],
    },
    relatedPages: [
      { href: '/version-1-release-date/', title: 'Version 1.0 Release Date', description: 'The announcement history behind the September 2, 2026 launch date.' },
      { href: '/bosses/', title: 'Moonlighter 2 Bosses', description: 'The four bosses Steam names, ordered by how many owners have beaten each one.' },
      { href: '/weapons/', title: 'Weapons & Upgrades', description: 'The confirmed weapon, armor, gadget and village upgrade categories.' },
    ],
    sources: [SOURCES.steamVersionOneNews, SOURCES.steamLaunchNews, SOURCES.steam],
  },
  'moonlighter-2-hotfix-1': {
    slug: 'moonlighter-2-hotfix-1',
    title: 'Moonlighter 2 Hotfix 1 (September 10): DX11/DX12 Option and Every Fix',
    description:
      'Moonlighter 2 version 1.0 Hotfix 1 adds a DirectX 11 / DirectX 12 switch and fixes Kalina map-out bugs, Hazy Jane input loss, the Scarabastion boss invincibility and more.',
    kicker: 'Patch · Hotfix 1',
    status: 'Launch-day update',
    intro:
      'Eight days after the September 2, 2026 version 1.0 release, Digital Sun shipped Hotfix 1 on September 10. The headline change is a DirectX 11 / DirectX 12 selection option, which the developers tie directly to the crash reports from launch week. The rest of the notes name specific quests, NPCs, enemies, weapons and dungeons that were broken — this page records exactly what the official notes say and what they do not.',
    sections: [
      {
        heading: 'The DirectX switch is the stability fix',
        paragraphs: [
          'The notes state that many of the crashes and performance issues players hit may be related to the graphics API, and recommend switching between DirectX 11 and DirectX 12 to see which runs best on your system. If you are crashing on the 1.0 build, this is the first setting to try before anything else.',
          'The developers also say the patch addresses "most of the concerns raised by the community during the 1.0 release" and that further balancing work will be assessed after the console port of these fixes ships.',
        ],
      },
      {
        heading: 'Progression and quest fixes',
        bullets: [
          'The Weapon Mastery quest marker pointed to the wrong location; fixed.',
          'A crash could occur right after completing a certain main quest; fixed.',
          'Talking to Hazy Jane in later stages could cause a loss of player input; fixed.',
          'The game could freeze on the loading screen when returning to Tresna during the tutorial; fixed.',
          'Babyl sometimes became duplicated, which could make Spark almost impossible to reach if Babyl had not been unlocked yet; fixed.',
        ],
      },
      {
        heading: 'Enemy behavior fixes',
        bullets: [
          'Senda no longer ignores poison damage from gadget shots during his second phase.',
          'Sergeant Roberto now reacts when shot from a distance.',
          'The CH4 Turret no longer gets stuck in its shooting animation after being tased.',
          'Tased Electric Slimes no longer deal electric field damage.',
        ],
      },
      {
        heading: 'Weapons, armor and dungeon fixes',
        bullets: [
          'A specific Wound + Ignite perk combination caused a crash; fixed.',
          'Spearhead projectiles froze in midair when reaching Will; fixed.',
          'The second greatsword\u2019s sharpness drain was not working as intended; fixed.',
          'The Vow weapon\u2019s description did not match its actual behavior; fixed.',
          'Equipping the Scarabastion could make players invincible during boss fights; fixed.',
          'A spot in the Kalina dungeon let players fall out of the map with no way to recover the run; fixed.',
          'Will could get stuck behind an obstacle in the Gallery area; fixed.',
          'Barrier Blessing shield charges were not restored when retrying a dungeon; fixed.',
          'Certain rewards did not appear in legendary chests dropped after defeating a miniboss; fixed.',
          'Dungeon music did not restart after the Bloblet room if you left before the track ended; fixed.',
          'The Shared Secret relic description contained placeholder text, debug text and a misspelling; fixed in English and Portuguese.',
        ],
      },
      {
        heading: 'What the patch does not change',
        paragraphs: [
          'No weapon, relic or perk balance numbers were touched in Hotfix 1 — every listed change is a crash, input, progression, or behavior fix. The developers say balancing comes after the console port, so if you are reading a version 1.0 guide that quotes stats, those quotes still describe the current build.',
        ],
        note: {
          label: 'Verification boundary',
          text: 'Everything on this page is quoted from the official Hotfix 1 announcement on the Steam news hub for App 2350790, read September 16, 2026. The notes do not publish repro steps or affected-save details, so this page does not invent them.',
        },
      },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0 Update Breakdown', description: 'Everything the launch build shipped with, before Hotfix 1.' },
      { href: '/moonlighter-2-best-weapon/', title: 'Best Weapon Guide', description: 'Weapon behavior notes that Hotfix 1 corrected for The Vow and the second greatsword.' },
      { href: '/dungeon-guide/', title: 'Dungeon Guide', description: 'Route planning for dungeons including Kalina and the Gallery area named in the fix list.' },
    ],
    sources: [],
  },
  'characters': {
    slug: 'characters',
    title: 'Moonlighter 2 Characters: Will, Tresna and the Named Cast',
    description:
      'Moonlighter 2 characters guide: Will, Hazy Jane, Babyl, Spark, Senda and Sergeant Roberto, with every fact the official 1.0 and Hotfix 1 announcements confirm.',
    kicker: 'Characters · named in official posts',
    status: 'Launch-day update',
    intro:
      'This page lists only characters that official Digital Sun / 11 bit studios posts name directly: the launch announcement, the August 5 pre-launch post, and the September 10 Hotfix 1 notes. Moonlighter 2 has not had a first-party full cast list published, so where a character\u2019s role is not documented, this page says so instead of guessing.',
    sections: [
      {
        heading: 'Will — the player character',
        paragraphs: [
          'Will is the merchant-dungeoner you play, and version 1.0 is built around finishing his arc: the launch post describes "the conclusion of the main story" that brings "Will\u2019s journey in Tresna to its conclusion." Hotfix 1 confirms he is still the only player character by fixing spearhead projectiles that froze "when reaching Will."',
        ],
      },
      {
        heading: 'Tresna — the town',
        paragraphs: [
          'Tresna is the settlement the whole loop runs on: the launch post frames the whole adventure as exploring Tresna and the vault beneath it, and Hotfix 1 fixes a tutorial freeze "when returning to Tresna," confirming it as the hub you move between dungeon runs.',
        ],
      },
      {
        heading: 'The Tresna vendors',
        bullets: [
          '<a href="/characters-andrei/">Andrei</a> — the Forge; crafts and upgrades weapons and armor.',
          '<a href="/characters-eris/">Eris</a> — the Witch Hut; potions, health, perk unlocks, and riddles pointing to hidden weapons.',
          '<a href="/characters-babyl/">Babyl</a> — the Workshop; guns and gadgets, and the Gallery Boss Rush.',
          '<a href="/characters-spark/">Spark</a> — the Version 1.0 endgame merchant, reached through Babyl.',
          '<a href="/characters-miss-scratch/">Ms. Scratch</a> — landlady; shop-level upgrades and cosmetics.',
          '<a href="/characters-tomo/">Tomo</a> — Trade Research; relic quality, Double Chests, and the Gallery-opening quest.',
          '<a href="/characters-the-countess/">The Countess</a> — Homeware; showcases and furniture that raise sell prices.',
          '<a href="/characters-julien/">Julien</a> — Tailoring; backpack patches, and the Aeolia Boss Rush.',
          '<a href="/characters-sliver/">Sliver</a> — Empty Pockets; backpack capacity and the Greed Colosseum.',
          '<a href="/characters-nou-and-anacard/">Nou and Anacard</a> — Silent Exchange; swap miniboss materials for boss materials.',
          '<a href="/characters-k33p3r/">K33P3R</a> — Merchant Progression; permanent shop bonuses and Haggle customers.',
          '<a href="/characters-hazy-jane/">Hazy Jane</a> — pet seller; Bloblet adoption (listed as Zane Jane in some guides).',
        ],
      },
      {
        heading: 'What is not documented',
        paragraphs: [
          'The official posts do not publish character bios, dialogue trees, quest-giver roles beyond the vendor names above, or a complete cast list. The Codex added in version 1.0 covers "enemies, characters, perks and furniture" in-game, but its text is not published online, so this page does not reproduce it. Expect this list to grow as Digital Sun names more characters in patch notes.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1 Patch Notes', description: 'The fix list that names Hazy Jane, Babyl, Spark, Senda and Sergeant Roberto.' },
      { href: '/shop-guide/', title: 'Shop Guide', description: 'The merchant loop Will runs from Tresna.' },
      { href: '/beginner-guide/', title: 'Beginner Guide', description: 'First hours in Tresna and the dungeon loop.' },
    ],
    sources: [],
  },
  'bosses-the-curator': {
    slug: 'bosses-the-curator',
    title: 'Moonlighter 2 The Curator Boss Guide',
    description:
      'The Curator is the first confirmed Moonlighter 2 boss. Steam says 43.6% of owners have defeated it — the most common named boss kill.',
    kicker: 'Boss · The Curator',
    status: 'Verified',
    intro:
      'The Curator is the first of four Moonlighter 2 bosses named in Steam achievements. The achievement requirement is simply “Defeat The Curator,” and 43.6% of owners have it. That makes this the first boss most players clear, somewhere in the early hours of a typical run.',
    sections: [
      {
        heading: 'What Steam confirms',
        bullets: [
          'Name: The Curator',
          'Requirement: Defeat The Curator',
          'Global unlock: 43.6% of owners',
          'Place in the named-boss order: first',
        ],
      },
      {
        heading: 'How to read the rate',
        paragraphs: [
          '43.6% is close to Senda at 38.7%. Most players who beat one beat the other. The Curator is not a wall; the first large drop on the boss list opens later, before Tyke.',
        ],
      },
      {
        heading: 'What is not published',
        paragraphs: [
          'Steam does not publish The Curator’s arena, health, moveset, or drops. Hotfix 1 also does not name this fight. This page does not invent a pattern chart.',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'All bosses', description: 'The four named bosses ordered by Steam unlock rate.' },
      { href: '/moonlighter-2-boss-completion-guide/', title: 'Boss completion guide', description: 'How the four kills sit against Ultimate Challenges and the Vault ladder.' },
    ],
    sources: [],
  },
  'bosses-senda': {
    slug: 'bosses-senda',
    title: 'Moonlighter 2 Senda Boss Guide',
    description:
      'Senda in Moonlighter 2: defeated by 38.7% of owners. Hotfix 1 confirmed a second phase that ignored poison from gadget shots — now fixed.',
    kicker: 'Boss · Senda',
    status: 'Launch-day update',
    intro:
      'Senda is the second named Moonlighter 2 boss. Steam lists the kill at 38.7%. Hotfix 1 (10 September 2026) is the only official patch note that describes a mechanic: Senda’s second phase ignored poison damage from gadget shots. That bug is fixed.',
    sections: [
      {
        heading: 'What Steam confirms',
        bullets: [
          'Name: Senda',
          'Requirement: Defeat Senda',
          'Global unlock: 38.7% of owners',
          'Place in the named-boss order: second',
        ],
      },
      {
        heading: 'What Hotfix 1 confirmed',
        paragraphs: [
          'Senda has at least two phases. Before Hotfix 1, gadget-shot poison did not apply in the second phase. After the patch, that damage works. No other move is named in the notes.',
        ],
      },
      {
        heading: 'What is not published',
        paragraphs: [
          'Arena, health, and the rest of the moveset are not in the achievement text or the hotfix. Do not copy another boss’s pattern onto Senda.',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'All bosses', description: 'Named-boss order and hidden achievements around this fight.' },
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'The patch that restored poison on Senda’s second phase.' },
    ],
    sources: [],
  },
  'bosses-tyke': {
    slug: 'bosses-tyke',
    title: 'Moonlighter 2 Tyke Boss Guide',
    description:
      'Tyke in Moonlighter 2: defeated by 26.1% of owners. The largest gap on the named-boss list opens before this fight.',
    kicker: 'Boss · Tyke',
    status: 'Verified',
    intro:
      'Tyke is the third named Moonlighter 2 boss. The kill sits at 26.1%. The step down from Senda (38.7%) is the largest gap among the four named bosses.',
    sections: [
      {
        heading: 'What Steam confirms',
        bullets: [
          'Name: Tyke',
          'Requirement: Defeat Tyke',
          'Global unlock: 26.1% of owners',
          'Place in the named-boss order: third',
        ],
      },
      {
        heading: 'How to read the gap',
        paragraphs: [
          'The hidden achievement The Fallen King sits at 29.4%, between Senda and Tyke. Its requirement is unpublished, so this page does not call it a boss. It only marks the same stretch of a run as the drop into Tyke.',
        ],
      },
      {
        heading: 'What is not published',
        paragraphs: [
          'No arena, health, or moveset is attached to the Tyke achievement. Official patch notes do not name this fight.',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'All bosses', description: 'The four named bosses and the hidden achievement between Senda and Tyke.' },
    ],
    sources: [],
  },
  'bosses-monte': {
    slug: 'bosses-monte',
    title: 'Moonlighter 2 Monte Boss Guide',
    description:
      'Monte in Moonlighter 2: defeated by 21.2% of owners, the rarest of the four confirmed named boss kills.',
    kicker: 'Boss · Monte',
    status: 'Verified',
    intro:
      'Monte is the fourth named Moonlighter 2 boss and the rarest confirmed kill at 21.2% of owners — roughly one player in five.',
    sections: [
      {
        heading: 'What Steam confirms',
        bullets: [
          'Name: Monte',
          'Requirement: Defeat Monte',
          'Global unlock: 21.2% of owners',
          'Place in the named-boss order: fourth / rarest named kill',
        ],
      },
      {
        heading: 'Context from other achievements',
        paragraphs: [
          'Defeating a boss with the broom sits at 23.3%, above Monte. More owners have won a named fight with the joke weapon than have beaten Monte. That is a signal that these fights are readable pattern tests more than raw damage checks — not a Monte-specific strategy.',
        ],
      },
      {
        heading: 'What is not published',
        paragraphs: [
          'No official arena, health, or moveset is published for Monte.',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'All bosses', description: 'Named-boss order, broom kill rate, and Ultimate Challenges past Monte.' },
    ],
    sources: [],
  },
  'weapons-endless-short-sword': {
    slug: 'weapons-endless-short-sword',
    title: 'Moonlighter 2 Endless Short Sword Guide',
    description:
      'Endless Short Sword in Moonlighter 2: the special becomes a multi-hit piercing strike, with more strikes as your combo grows.',
    kicker: 'Weapon · Endless Short Sword',
    status: 'Launch-day update',
    intro:
      'Endless Short Sword is one of four Endless Weapon Aspects named in the version 1.0 launch post. The special becomes a swift piercing strike that lands multiple hits. The number of strikes increases based on your combo.',
    sections: [
      {
        heading: 'Confirmed behaviour',
        bullets: [
          'Class: short sword aspect, not a new weapon class.',
          'Special: multi-hit piercing strike.',
          'Scaling: longer combo means more strikes.',
          'Damage numbers: not published.',
        ],
      },
      {
        heading: 'What Hotfix 1 did not change',
        paragraphs: [
          'Hotfix 1 did not retune this aspect. It fixed spearhead projectiles freezing when reaching Will, which belongs to the spear, not this sword.',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons hub', description: 'All four named aspects and unpublished equipment categories.' },
      { href: '/moonlighter-2-endless-weapon-aspects/', title: 'Endless Weapon Aspects', description: 'The four aspects compared from the launch post.' },
    ],
    sources: [],
  },
  'weapons-endless-great-sword': {
    slug: 'weapons-endless-great-sword',
    title: 'Moonlighter 2 Endless Great Sword Guide',
    description:
      'Endless Great Sword in Moonlighter 2: a Golden Guild craft. The special blocks, raises Sharpness, then counterattacks. Hotfix 1 fixed the second greatsword’s sharpness drain.',
    kicker: 'Weapon · Endless Great Sword',
    status: 'Launch-day update',
    intro:
      'Endless Great Sword is described as a Golden Guild craft. Its special enters a defensive stance that blocks incoming attacks, increases Sharpness, then follows with a counterattack.',
    sections: [
      {
        heading: 'Confirmed behaviour',
        bullets: [
          'Maker: Golden Guild.',
          'Special: block stance, Sharpness increase, then counterattack.',
          'Damage numbers: not published.',
        ],
      },
      {
        heading: 'Hotfix 1',
        paragraphs: [
          'Hotfix 1 fixed the second greatsword’s sharpness drain not working as intended. The notes do not say this aspect is that second greatsword, so treat the drain fix as greatsword-family, not as proof this aspect was broken.',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons hub', description: 'Named aspects and the August-only Endless Armour set.' },
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'Sharpness drain fix on the second greatsword.' },
    ],
    sources: [],
  },
  'weapons-endless-spear': {
    slug: 'weapons-endless-spear',
    title: 'Moonlighter 2 Endless Spear Guide',
    description:
      'Endless Spear in Moonlighter 2: the special spends stored spearheads to turn basic attacks into empowered specials. Bonus damage scales with spearheads consumed.',
    kicker: 'Weapon · Endless Spear',
    status: 'Launch-day update',
    intro:
      'Endless Spear consumes all stored spearheads on special. Basic attacks become empowered special attacks for a limited time, with bonus damage scaling on how many spearheads were spent.',
    sections: [
      {
        heading: 'Confirmed behaviour',
        bullets: [
          'Special spends every stored spearhead.',
          'Basic attacks become empowered specials for a limited time.',
          'Bonus damage scales with spearheads consumed.',
          'Exact duration and damage: not published.',
        ],
      },
      {
        heading: 'Hotfix 1',
        paragraphs: [
          'Spearhead projectiles could freeze in midair when reaching Will. That is fixed. It confirms spearheads are a real projectile resource in the 1.0 build.',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons hub', description: 'All four Endless Weapon Aspects.' },
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'Spearhead projectile freeze fix.' },
    ],
    sources: [],
  },
  'weapons-endless-gauntlets': {
    slug: 'weapons-endless-gauntlets',
    title: 'Moonlighter 2 Endless Gauntlets Guide',
    description:
      'Endless Gauntlets in Moonlighter 2: attacks become significantly more powerful while Berserk is active. No damage number is published.',
    kicker: 'Weapon · Endless Gauntlets',
    status: 'Launch-day update',
    intro:
      'Endless Gauntlets amplify offense while Berserk is active. The launch post gives that one rule and no numbers.',
    sections: [
      {
        heading: 'Confirmed behaviour',
        bullets: [
          'While Berserk is active, attacks become significantly more powerful.',
          'Berserk duration, trigger, and damage multiplier: not published.',
        ],
      },
      {
        heading: 'What is not published',
        paragraphs: [
          'Hotfix 1 does not name the gauntlets. Do not attach Wound/Ignite crash notes or other perk bugs to this aspect without a matching official line.',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons hub', description: 'The four named aspects from version 1.0.' },
      { href: '/moonlighter-2-endless-weapon-aspects/', title: 'Endless Weapon Aspects', description: 'Side-by-side of the four specials.' },
    ],
    sources: [],
  },
  'moonlighter-2-very-positive': {
    slug: 'moonlighter-2-very-positive',
    title: 'Moonlighter 2 Reviews — Very Positive, 1,580 of 1,903',
    description:
      'Moonlighter 2 is Very Positive on Steam: 1,580 of 1,903 reviews. Combat praise versus grind, inventory, Aeolia bugs, and a campaign that is only half the game.',
    kicker: 'Reviews',
    status: 'Verified',
    intro:
      'Moonlighter 2: The Endless Vault is Very Positive: 1,580 of 1,903 reviews, about 83%. Version 1.0 launched 2 September 2026 after Early Access from 19 November 2025.',
    sections: [
      {
        heading: 'What players like',
        bullets: [
          'Fast, precise combat; a better sequel loop than the first game for some owners.',
          'Shop perks make each sale run different.',
          'Finishing the campaign at about 50% completion, with more weapon sets and upgrades left.',
        ],
      },
      {
        heading: 'What they dislike',
        bullets: [
          'A major dungeon-clear mechanic feels grindy if you can take multiple loops in one room.',
          'Inventory management and the ending.',
          'Aeolia called so bugged that an hour-long run can be wasted.',
          'Some say it feels too easy.',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'Bosses', description: 'Named boss kill rates.' },
      { href: '/shop-guide/', title: 'Shop', description: 'Merchant loop.' },
    ],
    sources: [],
  },
  'moonlighter-2-aeolia-bugs': {
    slug: 'moonlighter-2-aeolia-bugs',
    title: 'Moonlighter 2 Aeolia Bugs — Why Runs Get Wasted',
    description:
      'Steam reviews call Aeolia so glitchy that a good hour-long run can be wasted. Ultimate Aeolia Challenge is 7.6% of owners; first entry to Aeolia is 49.9%.',
    kicker: 'Dungeons · Aeolia',
    status: 'Launch-day update',
    intro:
      'A recent review recommends the game but singles out Aeolia: annoying, and so bugged that a strong run can be thrown away. Entering Aeolia for the first time is 49.9% of owners. Completing the Ultimate Aeolia Challenge is 7.6%.',
    sections: [
      {
        heading: 'What is confirmed',
        bullets: [
          'Aeolia is a named area with an Ultimate Challenge achievement.',
          'Hotfix 1 named Kalina (fall out of map) and the Gallery (stuck behind an obstacle), not Aeolia specifically.',
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          'If your run dies to a geometry bug, treat it as a known risk in this dungeon family until a patch names Aeolia. Switch DirectX 11/12 if the issue is a crash rather than a trap.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'Named dungeon collision fixes.' },
      { href: '/dungeon-guide/', title: 'Dungeon guide', description: 'Extraction and backpack risk.' },
      { href: '/bosses/', title: 'Bosses', description: 'Ultimate Challenge rates including Aeolia.' },
    ],
    sources: [],
  },
  'moonlighter-2-grind': {
    slug: 'moonlighter-2-grind',
    title: 'Moonlighter 2 Grind — Multi-Clear Rooms and Shop Loops',
    description:
      'Players who like Moonlighter 2 still dislike a grindy room-clear rule: you can loop a cleared room for more loot. How that sits next to the shop loop.',
    kicker: 'Gameplay · grind',
    status: 'Verified',
    intro:
      'A first-time player with no comparison to Moonlighter 1 still flagged one mechanic: after clearing a room you can take multiple passes, which turns a good combat game into a grind. That is recent Steam language.',
    sections: [
      {
        heading: 'How it collides with the official loop',
        paragraphs: [
          'The store loop is dungeon, relics, shop prices, village. If a room can be farmed after it is clear, the dungeon step never ends. Extraction guides exist because leaving with a backpack is part of the design — not infinite clears.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-dungeon-extraction-guide/', title: 'Extraction', description: 'When to leave.' },
      { href: '/shop-guide/', title: 'Shop', description: 'Sell the haul instead of reclearing.' },
    ],
    sources: [],
  },
  'moonlighter-2-campaign-half': {
    slug: 'moonlighter-2-campaign-half',
    title: 'Moonlighter 2 Campaign Is Only Half the Game',
    description:
      'Players finish the Moonlighter 2 campaign around 50% completion, then find more weapon sets, upgrades, and the Infinite Endless Vault.',
    kicker: 'Postgame',
    status: 'Verified',
    intro:
      'A review after finishing the campaign still sat at about 50% completion, with more upgrades, weapon sets, and playstyles left. Version 1.0’s Infinite Endless Vault is the named postgame: thresholds that reset if you miss the gold target in a single run.',
    sections: [
      {
        heading: 'The numbers',
        bullets: [
          'Story ending exists in 1.0.',
          'Vault 1st challenge: 75.8% of owners; 7th: 0.1%.',
          'The drop from 4th (39.3%) to 5th (13.7%) is the real wall.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-infinite-endless-vault-guide/', title: 'Infinite Endless Vault', description: 'Threshold reset rule.' },
      { href: '/moonlighter-2-postgame-guide/', title: 'Postgame', description: 'What 1.0 added after the story.' },
    ],
    sources: [],
  },
  'moonlighter-2-too-easy': {
    slug: 'moonlighter-2-too-easy',
    title: 'Moonlighter 2 Too Easy? Hardcore Mode and Boss Tuning',
    description:
      'Some reviews say Moonlighter 2 feels too easy. Hardcore Mode exists in 1.0. Beating a boss with the broom is 23.3% of owners — above Monte at 21.2%.',
    kicker: 'Difficulty',
    status: 'Verified',
    intro:
      'Players who bounced on difficulty call the sequel too easy in small doses. The achievement list says a boss can be beaten with the broom (23.3%), which is more common than defeating Monte (21.2%). Hardcore Mode is the 1.0 setting that raises the cost of death.',
    sections: [
      {
        heading: 'Read the broom rate',
        paragraphs: [
          'If a joke weapon clears a named boss for nearly a quarter of owners, the fights are pattern tests. Gear farming is optional for the story bosses. Hardcore is the knob if default feels light.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-hardcore-mode/', title: 'Hardcore Mode', description: 'What 1.0 actually says about death cost.' },
      { href: '/bosses/', title: 'Bosses', description: 'Kill rates including the broom achievement.' },
    ],
    sources: [],
  },
  'moonlighter-2-will': {
    slug: 'moonlighter-2-will',
    title: 'Moonlighter 2 Will — Merchant and Dungeoneer',
    description:
      'Will is the player character in Moonlighter 2. Version 1.0 finishes his Tresna story. Hotfix 1 mentions spearhead projectiles freezing when reaching Will.',
    kicker: 'Characters · Will',
    status: 'Launch-day update',
    intro:
      'Will is the merchant-dungeoneer you play. The 1.0 launch post frames the update as the conclusion of Will’s journey in Tresna. Hotfix 1 confirms he is still the only player body by naming spearheads that froze when reaching Will.',
    sections: [
      {
        heading: 'Related pages',
        bullets: [
          '<a href="/characters/">Characters hub</a>',
          '<a href="/shop-guide/">Shop</a>',
          '<a href="/beginner-guide/">Beginner</a>',
        ],
      },
    ],
    sources: [],
  },
  'moonlighter-2-tresna': {
    slug: 'moonlighter-2-tresna',
    title: 'Moonlighter 2 Tresna — The Town Hub',
    description:
      'Tresna is Moonlighter 2’s town. Hotfix 1 fixed a tutorial freeze when returning to Tresna. Shop Level 5 and vendors live here.',
    kicker: 'Locations · Tresna',
    status: 'Launch-day update',
    intro:
      'Tresna is the settlement between dungeon runs. Hotfix 1 fixed the game freezing on the loading screen when returning to Tresna during the tutorial. Shop Level 5 adds a Bloblet slot and a cosmetic slot in the shop that sits in this town.',
    sections: [
      {
        heading: 'Related pages',
        bullets: [
          '<a href="/moonlighter-2-shop-level-5/">Shop Level 5</a>',
          '<a href="/characters/">Named NPCs</a>',
          '<a href="/dungeon-guide/">Dungeons</a>',
        ],
      },
    ],
    sources: [],
  },
  'moonlighter-2-kalina': {
    slug: 'moonlighter-2-kalina',
    title: 'Moonlighter 2 Kalina Dungeon — Out-of-Map Fix',
    description:
      'Hotfix 1 fixed a Kalina spot where players could fall out of the map with no way to recover the run. Ultimate Kalina Challenge is 7.7% of owners.',
    kicker: 'Dungeons · Kalina',
    status: 'Launch-day update',
    intro:
      'Kalina is a named dungeon. Hotfix 1 (10 September 2026) fixed a specific spot where you could fall out of the map and lose the run. The Ultimate Kalina Challenge achievement is at 7.7% of owners.',
    sections: [
      {
        heading: 'Related pages',
        bullets: [
          '<a href="/moonlighter-2-hotfix-1/">Hotfix 1</a>',
          '<a href="/bosses/">Ultimate Challenges</a>',
          '<a href="/dungeon-guide/">Dungeon guide</a>',
        ],
      },
    ],
    sources: [],
  },
  'moonlighter-2-gallery': {
    slug: 'moonlighter-2-gallery',
    title: 'Moonlighter 2 Gallery Dungeon — First Visit 68.7%',
    description:
      'Entering the Gallery for the first time is 68.7% of Moonlighter 2 owners. Hotfix 1 fixed Will getting stuck behind an obstacle there. Ultimate Gallery Challenge is 10.4%.',
    kicker: 'Dungeons · Gallery',
    status: 'Launch-day update',
    intro:
      'The Gallery is the most-entered named challenge area: 68.7% of owners have walked in. About one in seven of those finish the Ultimate Gallery Challenge (10.4%). Hotfix 1 fixed getting stuck behind an obstacle in the Gallery.',
    sections: [
      {
        heading: 'Related pages',
        bullets: [
          '<a href="/moonlighter-2-hotfix-1/">Hotfix 1</a>',
          '<a href="/bosses/">Bosses and challenges</a>',
        ],
      },
    ],
    sources: [],
  },
  'moonlighter-2-inventory': {
    slug: 'moonlighter-2-inventory',
    title: 'Moonlighter 2 Inventory — Why Reviews Call It a Weak Point',
    description:
      'Steam reviews that like Moonlighter 2 still list inventory management as a bad point, next to the ending. How that ties to backpack risk and shop sales.',
    kicker: 'Systems · inventory',
    status: 'Verified',
    intro:
      'A review that calls the game cute and the combat precise still names inventory management and the ending as the bad points. Official copy never publishes a backpack size. Extraction is the design answer: leave before the bag is a puzzle you hate.',
    sections: [
      {
        heading: 'Related pages',
        bullets: [
          '<a href="/moonlighter-2-dungeon-extraction-guide/">Extraction</a>',
          '<a href="/items/">Items</a>',
          '<a href="/prices/">Prices</a>',
        ],
      },
    ],
    sources: [],
  },
  'moonlighter-2-six-regions': {
    slug: 'moonlighter-2-six-regions',
    title: 'Moonlighter 2 Has Six Regions After 1.0',
    description: 'Moonlighter 2 version 1.0 runs six regions. Here is how a run uses two boon types without treating every region as a new ruleset.',
    kicker: 'Regions',
    status: 'Launch-day update',
    intro: "Players who finished the 1.0 build describe six regions and two boon types per run. That is the post-Early-Access shape. It is not the first game's single-town loop with a new coat.",
    sections: [
      {
        heading: 'How a run should feel',
        paragraphs: [
          'Pick the two boons and stay with them. Swapping fantasy every floor is how the shop and the dungeon stop talking to each other.',
          'Six regions is variety of ground, not six difficulty systems. The desert canyon in the current shots is one of those grounds: vertical platforms, a bridge, and elites that punish a bag you refused to extract.',
        ],
        bullets: [
          '<a href="/dungeon-guide/">Dungeons</a>',
          '<a href="/moonlighter-2-dungeon-extraction-guide/">Extraction</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/dungeon-guide/', title: 'Dungeons', description: 'Region loop' },
      { href: '/moonlighter-2-infinite-endless-vault-guide/', title: 'Endless Vault', description: 'What 1.0 reset' },
    ],
    sources: [],
  },
  'moonlighter-2-healing-and-dodge': {
    slug: 'moonlighter-2-healing-and-dodge',
    title: "Moonlighter 2 Healing: Why the First Game's Dodge Window Is Gone",
    description: "Moonlighter 2 does not give you the first game's mid-swing dodge. Healing is scarce because that cancel is gone.",
    kicker: 'Healing',
    status: 'Launch-day update',
    intro: 'The complaint that shows up next to the praise is healing. You cannot cancel an attack into a dodge the way Moonlighter 1 allowed. A swing you committed to is a hit you eat.',
    sections: [
      {
        heading: 'What to change',
        paragraphs: [
          'Stop swinging when an elite winds up. The desert elites with the red telegraph are the lesson. The dodge is before the swing, not during it.',
          'Buy healing at the shop before you buy a damage toy you cannot survive long enough to use. Shop Level 5 does not refund a death.',
          'If the screen flash on hits is the actual problem, that is a separate accessibility complaint players have filed. It is not a healing potion.',
        ],
        bullets: [
          '<a href="/shop-guide/">Shop</a>',
          '<a href="/weapons/">Weapons</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/shop-guide/', title: 'Shop', description: 'Where potions are a purchase' },
    ],
    sources: [],
  },
  'moonlighter-2-will-the-merchant': {
    slug: 'moonlighter-2-will-the-merchant',
    title: 'Will in Moonlighter 2: The Merchant Is Still the Point',
    description: 'Will is the merchant you play in Moonlighter 2. The 1.0 loop is still dungeon, bag, shop, not a pure roguelike score attack.',
    kicker: 'Will',
    status: 'Launch-day update',
    intro: 'Will is the kid with the backpack in the combat shots and the person behind the counter between runs. If you only play the dungeon, you are skipping the half of the game the price is for.',
    sections: [
      {
        heading: 'The loop',
        paragraphs: [
          'Clear until the bag is a decision, extract, price the relics, sleep, go back. Six regions do not replace that.',
          'Players keep asking for a clerk or a janitor. Those are wishes. The register is still yours in the 1.0 launch build and in Hotfix 1.',
        ],
        bullets: [
          '<a href="/characters/">Characters</a>',
          '<a href="/prices/">Prices</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/characters/', title: 'Characters', description: 'Who else is in town' },
    ],
    sources: [],
  },
  'moonlighter-2-two-boons': {
    slug: 'moonlighter-2-two-boons',
    title: 'Moonlighter 2 Two Boons Per Run',
    description: 'Moonlighter 2 limits you to two boon types in a run. That focus is the build. Adding a third in your head is how the bag overflows.',
    kicker: 'Boons',
    status: 'Launch-day update',
    intro: 'Reviews that like the 1.0 combat call out the two-boon limit as the thing that keeps a run readable. It is a constraint, not a bug.',
    sections: [
      {
        heading: 'Pick before the second region',
        paragraphs: [
          'One boon for the weapon you are actually swinging. One for the problem that region has, usually sustain or a bomb angle. A third idea belongs to the next run.',
          'Endless Weapon Aspects are a different system. Do not stack a boon plan and an aspect plan and then blame the shop when the bag is nonsense.',
        ],
        bullets: [
          '<a href="/moonlighter-2-endless-weapon-aspects/">Weapon aspects</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons', description: 'What the boon is attached to' },
    ],
    sources: [],
  },
  'moonlighter-2-elite-telegraph': {
    slug: 'moonlighter-2-elite-telegraph',
    title: 'Moonlighter 2 Elite Telegraphs in the Desert Region',
    description: "Red-outlined elites in Moonlighter 2 are the extract check. Dodge before the swing. The first game's cancel is not in this one.",
    kicker: 'Elites',
    status: 'Launch-day update',
    intro: 'The desert platforms show the tell: a red body, a wind-up, a bridge you should not be standing on. That enemy is why healing feels scarce.',
    sections: [
      {
        heading: 'The tell',
        paragraphs: [
          'If the elite is glowing, you are late to move and early to extract. Kill the small ones first only if they body-block the dodge.',
          'A full bag on that bridge is a failed run even if you win the fight. Extraction is the win condition. The kill is optional.',
        ],
        bullets: [
          '<a href="/moonlighter-2-dungeon-extraction-guide/">When to leave</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'Bosses', description: 'Named fights, not these elites' },
    ],
    sources: [],
  },
  'moonlighter-2-backpack-is-the-puzzle': {
    slug: 'moonlighter-2-backpack-is-the-puzzle',
    title: 'Moonlighter 2 Backpack: The Puzzle Is the Bag',
    description: 'Moonlighter 2 never publishes a single backpack size as a marketing number. The puzzle is still which relic you refuse to carry.',
    kicker: 'Bag',
    status: 'Launch-day update',
    intro: 'The currency counter in the corner goes up. The bag does not. That tension is the game. A review that wants a bigger bag is asking for a different game.',
    sections: [
      {
        heading: 'What to drop',
        paragraphs: [
          'Drop the relic you cannot price tonight. A famous item you will undercharge is worse than a small item you know.',
          'Hotfix 1 did not add a bag expansion. Shop Level 5 changes the store, not the dungeon grid.',
        ],
        bullets: [
          '<a href="/items/">Items</a>',
          '<a href="/prices/">Prices</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/items/', title: 'Items', description: 'What is worth a slot' },
    ],
    sources: [],
  },
  'moonlighter-2-sale-price-october': {
    slug: 'moonlighter-2-sale-price-october',
    title: 'Moonlighter 2 at $20.99: The October 2026 Price',
    description: 'Moonlighter 2 launched at $29.99 and is $20.99 on the US Steam listing in October 2026. The sale does not add a region.',
    kicker: 'Price',
    status: 'Launch-day update',
    intro: 'The US listing shows $20.99 against a $29.99 base. Version 1.0 has been out since September 2. The discount is a price, not a content patch.',
    sections: [
      {
        heading: 'What the sale includes',
        paragraphs: [
          'The six regions, the shop, Hardcore, and the Endless Vault rules that shipped in 1.0. Hotfix 1 is free on top.',
          "It does not include a Switch 2 version. It does not include a clerk NPC. It does not include the first game's dodge cancel.",
        ],
        bullets: [
          '<a href="/release-date/">Release</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0', description: 'What you are buying' },
    ],
    sources: [],
  },
  'moonlighter-2-screen-flash': {
    slug: 'moonlighter-2-screen-flash',
    title: 'Moonlighter 2 Screen Flash and Hit Effects',
    description: 'Some Moonlighter 2 players cannot play through the hit flash. It is a reported accessibility gap, separate from the combat being bad.',
    kicker: 'Accessibility',
    status: 'Launch-day update',
    intro: 'A negative review that would otherwise forgive the game names constant screen flashing, and says a community report was warned instead of fixed. That is a real gap in the 1.0 build.',
    sections: [
      {
        heading: 'What you can do now',
        paragraphs: [
          "Turn effect intensity and screen shake down in the options before you write the game off. If those sliders do not touch the flash you mean, they do not. Hotfix 1's notes are about DirectX, bosses, and input loss, not a photosensitivity preset.",
          'Do not buy the sale price to test a medical problem. Wishlist is the wrong state too. The game is out. The slider is either there or it is not.',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'What that patch did fix' },
    ],
    sources: [],
  },
  'moonlighter-2-shop-still-manual': {
    slug: 'moonlighter-2-shop-still-manual',
    title: 'Moonlighter 2 Shop: You Still Run the Register',
    description: 'Players want a clerk in Moonlighter 2. Version 1.0 and Hotfix 1 still leave the register in your hands.',
    kicker: 'The register',
    status: 'Launch-day update',
    intro: 'The wish shows up in otherwise positive reviews: someone to run the register, a janitor, a longer dungeon button. None of those shipped. The shop is still the second half of the run.',
    sections: [
      {
        heading: 'Run the shop like a system',
        paragraphs: [
          "Price from what sold yesterday, not from the relic's rarity color. The [prices page](/prices/) is the habit.",
          'A bad day at the counter is not a bug. It is the reason the next dungeon has a goal. If you want a score-attack roguelike with no counter, this is the wrong $20.99.',
        ],
        bullets: [
          '<a href="/shop-guide/">Shop guide</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/shop-guide/', title: 'Shop', description: 'The full counter loop' },
    ],
    sources: [],
  },
  'moonlighter-2-hotfix-1-still-the-crash-fix': {
    slug: 'moonlighter-2-hotfix-1-still-the-crash-fix',
    title: 'Moonlighter 2 After Hotfix 1: What Is Still Broken',
    description: 'Hotfix 1 fixed the DirectX crash switch and named bosses. It did not add dodge cancel, a clerk, or a seventh region.',
    kicker: 'After Hotfix 1',
    status: 'Launch-day update',
    intro: 'Hotfix 1 on September 10 is still the stability patch. October complaints about healing, flash, and the register are design, not a missed checkbox in that note.',
    sections: [
      {
        heading: 'Split the list',
        paragraphs: [
          'Install Hotfix 1 if the game crashes or a named boss is invincible. The notes name Kalina, Hazy Jane, and Scarabastion among others.',
          'Do not wait on Hotfix 1 for a longer dungeon or a mid-swing dodge. Those were not in the 1.0 promise, and they are not in the hotfix.',
        ],
        bullets: [
          '<a href="/moonlighter-2-hotfix-1/">Hotfix 1 notes</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'The actual list' },
    ],
    sources: [],
  },
  'moonlighter-2-very-positive-october': {
    slug: 'moonlighter-2-very-positive-october',
    title: 'Moonlighter 2 Very Positive in October 2026',
    description: 'Moonlighter 2 is Very Positive in October 2026: 1,672 of 2,022 reviews, Metacritic 72, $29.99. What the score actually buys.',
    kicker: 'Reviews',
    status: 'Launch-day update',
    intro: 'Checked October 12, 2026: Moonlighter 2: The Endless Vault is Very Positive — 1,672 positive out of 2,022. Metacritic is 72. The live PC price is $29.99, no discount. Fifty-six achievements. Version 1.0 shipped September 2.',
    sections: [
      {
        heading: 'How to read 72 and Very Positive together',
        paragraphs: [
          'The Steam pile likes the six-region loop, the two-boon limit, and watching the numbers go up. Files at 50–100 hours still recommend it, including one that 100%’d in about 100 hours. Metacritic 72 is the cooler critic number for the same product: a refined successor that is more roguelite than the first shop-sim.',
          'The complaint that sits next to the praise is still the split. After the third heal the run feels solvable. Healing is scarce because the mid-swing dodge from Moonlighter 1 is gone. Some files still want a clerk. None of that is a missing hotfix checkbox.',
        ],
        bullets: [
          '<a href="/moonlighter-2-too-easy/">Too easy after three heals</a>',
          '<a href="/moonlighter-2-healing-and-dodge/">Healing and dodge</a>',
          '<a href="/moonlighter-2-sale-price-october/">October price</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/version-1-0-update/', title: 'Version 1.0', description: 'What 1.0 added' },
      { href: '/moonlighter-2-hotfix-1/', title: 'Hotfix 1', description: 'What that patch fixed' },
    ],
    sources: [],
  },
  'moonlighter-2-hundred-percent': {
    slug: 'moonlighter-2-hundred-percent',
    title: 'Moonlighter 2 100% in About 100 Hours',
    description: 'A Moonlighter 2 file hit 100% achievements in about 100 hours. What that clock includes, and what it does not.',
    kicker: 'Completion',
    status: 'Launch-day update',
    intro: 'One long positive file at 113 hours says it took right about 100 hours to 100% the accomplishment list. Fifty-six achievements. That is a completion clock, not a story clock. A casual shop-and-dungeon run is much shorter.',
    sections: [
      {
        heading: 'What 100 hours is buying',
        paragraphs: [
          'The 100% file is weapon-type mastery, region coverage, and the postgame ladder — Infinite Endless Vault gold thresholds, Hardcore, Endless Weapon Aspects — not a first-weekend story. Six regions and two boons per run keep each expedition readable. They also mean a completionist repeats the loop until the list pops.',
          'Do not use 100 hours as a reason to skip the game. Use it as a reason not to promise a weekend 100%. The [six regions page](/moonlighter-2-six-regions/) is the shape. The [Endless Vault page](/moonlighter-2-infinite-endless-vault-guide/) is the postgame.',
        ],
        bullets: [
          '<a href="/moonlighter-2-very-positive-october/">Very Positive in October</a>',
          '<a href="/weapons/">Weapons</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-postgame-guide/', title: 'Postgame', description: 'What 1.0 added after the story' },
    ],
    sources: [],
  },
  'moonlighter-2-metacritic-72': {
    slug: 'moonlighter-2-metacritic-72',
    title: 'Moonlighter 2 Metacritic 72: Different, Not Broken',
    description: 'Moonlighter 2 sits at Metacritic 72 with Very Positive Steam reviews. Why the critic number is cooler than the shop-and-dungeon files.',
    kicker: 'Metacritic 72',
    status: 'Launch-day update',
    intro: 'Metacritic 72 and Very Positive on Steam (1,672 of 2,022) describe the same September 2 1.0 build. The critic number is cooler because the sequel is more Hades-like and less of a pure shop sim. Players who wanted Moonlighter 1 with a new coat are the 72. Players who wanted a six-region roguelite with a register are the Very Positive pile.',
    sections: [
      {
        heading: 'What 72 is not',
        paragraphs: [
          'It is not a missing clerk. It is not Hotfix 1 failing to add dodge-cancel. It is not a $20.99 sale from last week — the live tag is $29.99 again. Digital Sun developed it. 11 bit studios published it.',
          'If the first game’s mid-swing dodge is the thing you loved, read [healing and dodge](/moonlighter-2-healing-and-dodge/) before you treat 72 as a graphics complaint. If you 100% games, the [100-hour page](/moonlighter-2-hundred-percent/) is the clock.',
        ],
        bullets: [
          '<a href="/moonlighter-2-too-easy/">Too easy</a>',
          '<a href="/shop-guide/">Shop</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-very-positive-october/', title: 'Very Positive', description: 'The Steam pile' },
    ],
    sources: [],
  },
  'moonlighter-2-autosave': {
    slug: 'moonlighter-2-autosave',
    title: 'Moonlighter 2 Autosave: You Cannot Sleep Mid-Run',
    description: 'Moonlighter 2 autosave waits until the run ends. You cannot sleep whenever you want. How to treat that as a loop rule, not a missing Cloud setting.',
    kicker: 'Saves',
    status: 'Launch-day update',
    intro: 'A 20-hour file that still recommends the game warns the auto-save is terrible. A 3.9-hour negative file is blunter: saving is painful, you always have to finish the run, and you cannot sleep whenever you want. That is the 1.0 loop, not a Steam Cloud failure.',
    sections: [
      {
        heading: 'What the loop actually saves',
        paragraphs: [
          'Extract, sell, sleep in Tresna, then go back. Sleep is the hub save. A dungeon run that is still open is not a rest. Hardcore already ends the whole file on death. Do not confuse that penalty with an autosave that will not fire in the vault.',
          'Steam Cloud is on the listing. It syncs a file that exists. It does not add a mid-floor rest. See <a href="/save-transfer-progress-guide/">save transfer</a> for the 1.0 migration silence, and <a href="/shop-guide/">the shop</a> for the counter you still run yourself.',
        ],
        bullets: [
          '<a href="/moonlighter-2-dungeon-extraction-guide/">Extraction</a>',
          '<a href="/moonlighter-2-shop-still-manual/">The register</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/save-transfer-progress-guide/', title: 'Save transfer', description: 'Cloud is listed. A mid-run sleep is not.' },
    ],
    sources: [],
  },
  'moonlighter-2-price-october-16': {
    slug: 'moonlighter-2-price-october-16',
    title: 'Moonlighter 2 Price on October 16: Still $29.99',
    description: 'Moonlighter 2 is $29.99 on Steam with no discount. What the live tag buys after version 1.0 and Hotfix 1.',
    kicker: 'Price',
    status: 'Launch-day update',
    intro: 'Checked October 16, 2026: Steam App 2350790 lists Moonlighter 2: The Endless Vault at $29.99, discount 0. Version 1.0 left Early Access on September 2, 2026. Digital Sun developed it. 11 bit studios published it. Fifty-six achievements.',
    sections: [
      {
        heading: 'What $29.99 is buying now',
        paragraphs: [
          'The live tag is the full 1.0 game: the story conclusion, Infinite Endless Vault, four Endless Weapon Aspects, Shop Level 5, the Bomb Path, and Hardcore Mode. Hotfix 1 on September 10 is still the named stability patch. A checkout total can still change with region, tax, or a later promotion. This page is the US listing, not a sale timer.',
          'English Steam reviews are Very Positive: 1,688 positive out of 2,042. That pile likes the shop-and-dungeon loop. It does not add a mid-run sleep or a seventh region.',
        ],
        bullets: [
          '<a href="/moonlighter-2-autosave/">Autosave waits until the run ends</a>',
          '<a href="/version-1-0-update/">What version 1.0 added</a>',
          '<a href="/moonlighter-2-hotfix-1/">Hotfix 1</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/release-date/', title: 'Release date', description: 'September 2, 2026' },
    ],
    sources: [],
  },
  'moonlighter-2-56-achievements': {
    slug: 'moonlighter-2-56-achievements',
    title: 'Moonlighter 2 Has 56 Steam Achievements',
    description: 'Steam lists 56 achievements for Moonlighter 2. How to treat that count as a completion clock, not a weekend checklist.',
    kicker: 'Achievements',
    status: 'Launch-day update',
    intro: 'Steam App 2350790 lists 56 achievements. A long positive file put a full clear near 100 hours. That clock is weapon-type mastery, six regions, and the postgame ladder. It is not the length of a first shop weekend.',
    sections: [
      {
        heading: 'How to use the count',
        paragraphs: [
          'Do not start a new file just to chase the number. Finish a run, sell, and sleep in Tresna before you judge a missing pop. Hardcore ends the file on death. The Infinite Endless Vault resets a failed gold threshold. Those two rules eat more time than any single achievement name.',
          'The listing does not publish a missable table. If a pop fails after Hotfix 1, retest the same save on the current build before you assume the achievement is gone.',
        ],
        bullets: [
          '<a href="/moonlighter-2-hundred-percent/">The 100-hour completion clock</a>',
          '<a href="/moonlighter-2-infinite-endless-vault-guide/">Infinite Endless Vault</a>',
          '<a href="/moonlighter-2-hardcore-mode/">Hardcore Mode</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'Bosses', description: 'Named completion targets' },
    ],
    sources: [],
  },
  'moonlighter-2-reviews-october-16': {
    slug: 'moonlighter-2-reviews-october-16',
    title: 'Moonlighter 2 Reviews on October 16: Very Positive',
    description: 'Moonlighter 2 is Very Positive on October 16: 1,688 of 2,042 English Steam reviews. What that score still agrees on.',
    kicker: 'Reviews',
    status: 'Launch-day update',
    intro: 'Checked October 16, 2026: English Steam reviews for Moonlighter 2 are Very Positive, 1,688 positive out of 2,042. The live PC price is $29.99. The score moved up from the October 12 snapshot of 1,672 out of 2,022. The complaint next to the praise did not move.',
    sections: [
      {
        heading: 'What the new reviews still say',
        paragraphs: [
          'Praise stays on the six-region loop, the two-boon limit, and the register. The complaint stays on healing, the missing mid-swing dodge, and a run you cannot sleep through. Hotfix 1 fixed named crashes and boss bugs. It did not add a clerk or a dodge cancel.',
          'Use the newer count if you are deciding today. Do not treat 1,688 of 2,042 as a promise that every Aeolia run is safe. A long dungeon can still be wasted if you die before extraction.',
        ],
        bullets: [
          '<a href="/moonlighter-2-aeolia-bugs/">Aeolia runs</a>',
          '<a href="/moonlighter-2-healing-and-dodge/">Healing and dodge</a>',
          '<a href="/moonlighter-2-very-positive-october/">The October 12 snapshot</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-price-october-16/', title: 'October 16 price', description: '$29.99, no discount' },
    ],
    sources: [],
  },
  'moonlighter-2-windows-only': {
    slug: 'moonlighter-2-windows-only',
    title: 'Moonlighter 2 on Steam Is Windows Only',
    description: 'The Moonlighter 2 Steam listing is Windows only at $29.99. What that does and does not say about consoles.',
    kicker: 'Platforms',
    status: 'Launch-day update',
    intro: 'Steam App 2350790 lists Windows as the storefront platform and $29.99 as the US price. The September 2 launch post said console versions were available the same day. It did not name Nintendo Switch 2 on the Steam page.',
    sections: [
      {
        heading: 'Read the listing, then the announcement',
        paragraphs: [
          'If you are buying on Steam, you are buying the Windows build. Steam Cloud, achievements, and full controller support are storefront features of that listing. They are not a Deck verification badge, and they are not a Switch 2 SKU.',
          'A console copy is a different storefront. Do not wait on the Steam page to grow a second platform row. Check the publisher post if you need a named console, then come back here for the PC loop.',
        ],
        bullets: [
          '<a href="/moonlighter-2-switch-2/">Switch 2 status</a>',
          '<a href="/steam-features-guide/">Steam features</a>',
          '<a href="/co-op-status/">Single-player status</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/steam-features-guide/', title: 'Steam features', description: 'Cloud, controller, and the Windows listing' },
    ],
    sources: [],
  },
  'moonlighter-2-when-to-extract': {
    slug: 'moonlighter-2-when-to-extract',
    title: 'Moonlighter 2: When to Extract',
    description: 'Use the pendant to leave a Moonlighter 2 dungeon with the bag intact. Death, not depth, is the penalty.',
    kicker: 'Dungeon loop',
    status: 'Launch-day update',
    intro: 'The pendant teleports you home with everything in the bag. There is no penalty beyond the loot you did not pick up. Death is the penalty. On Easy, Normal, and Hard it halves relic quality. On Expert you lose the relics. On Hardcore it can end the save.',
    sections: [
      {
        heading: 'Leave before the bag is the prize',
        paragraphs: [
          'Deeper rooms pay more. They also put the haul you already have on the line. If the next room is an elite and the bag is full of relics you meant to sell, use the pendant. Skipped loot is cheaper than a halved backpack.',
          'The Infinite Endless Vault is the exception. Each gold threshold is one closed run. Falling short resets that threshold. Do not pendant out of a threshold and expect the gold to bank. See the extraction guide for the same rule in longer form.',
        ],
        bullets: [
          '<a href="/moonlighter-2-dungeon-extraction-guide/">Extraction guide</a>',
          '<a href="/moonlighter-2-hardcore-mode/">Hardcore death</a>',
          '<a href="/moonlighter-2-backpack-is-the-puzzle/">The backpack</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/dungeon-guide/', title: 'Dungeon guide', description: 'The run, not the shop' },
    ],
    sources: [],
  },
  'moonlighter-2-two-boons-per-run': {
    slug: 'moonlighter-2-two-boons-per-run',
    title: 'Moonlighter 2: Only Two Boons per Run',
    description: 'A Moonlighter 2 run keeps two boons. Pick them for the next elite, not for a six-region shopping list.',
    kicker: 'Boons',
    status: 'Launch-day update',
    intro: 'Two boons per run is the limit players keep naming, and it is why a six-region loop stays readable. A third offer is a replacement, not a stack. Endless Weapon Aspects are a different system. Do not plan a boon and an aspect as if they share a slot.',
    sections: [
      {
        heading: 'Pick for the room you are about to enter',
        paragraphs: [
          'If the next node on Tomo’s Radar is an elite or a miniboss, take the boon that answers that room. A damage boon you cannot trigger before the pendant is wasted. A defensive boon on a run you already mean to extract is also wasted.',
          'Elites and minibosses do not rupture. The backpack launch is for a normal enemy at half health, the one that turns purple. Do not save a boon for a rupture on a boss.',
        ],
        bullets: [
          '<a href="/moonlighter-2-two-boons/">Two boons</a>',
          '<a href="/moonlighter-2-elite-telegraph/">Elite telegraphs</a>',
          '<a href="/moonlighter-2-endless-weapon-aspects/">Endless Weapon Aspects</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons', description: 'The four melee meters' },
    ],
    sources: [],
  },
  'moonlighter-2-weapon-meters': {
    slug: 'moonlighter-2-weapon-meters',
    title: 'Moonlighter 2 Weapon Meters: Finisher, Sharpness, Spear, Berserk',
    description: 'Each Moonlighter 2 melee class has its own meter. How to read Finisher, Sharpness, spearheads, and Berserk.',
    kicker: 'Combat',
    status: 'Launch-day update',
    intro: 'Short Swords chain into a Special Finisher after three hits. Large Swords spend and rebuild Sharpness. Spears plant spearheads the Special recalls. Gauntlets fill a Berserk gauge. The gun refills on its own, and faster when melee hits land. Keep one shot.',
    sections: [
      {
        heading: 'Fight the meter you equipped',
        paragraphs: [
          'A Short Sword that never reaches the third hit is a fast poke with no finisher. A Large Sword that dumps Sharpness into a whiff is a slow recovery. Plant spearheads where the recall will hit, not into an empty lane. Gauntlets want the gauge full before the elite, not after you are already dodging.',
          'Breakables and melee hits refill ammo. Do not empty the gun on the first add if the elite is the next node. Rupture — purple at half health, then the backpack launch — is for normal enemies only.',
        ],
        bullets: [
          '<a href="/beginner-guide/">First-session loop</a>',
          '<a href="/moonlighter-2-healing-and-dodge/">Healing and the missing mid-swing dodge</a>',
          '<a href="/characters-eris/">Eris potions</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/weapons/', title: 'Weapons', description: 'Named swords, spears, and gauntlets' },
    ],
    sources: [],
  },
  'moonlighter-2-how-to-beat-tyke': {
    slug: 'moonlighter-2-how-to-beat-tyke',
    title: 'Moonlighter 2: How to Beat Tyke',
    description: 'Tyke is the Gallery Treasury Halls boss. Dodge the pink orbs, punish the recovery, and extract if the bag is already full.',
    kicker: 'Boss',
    status: 'Launch-day update',
    intro: 'Tyke is a 3-phase fight at the end of The Gallery Treasury Halls. The achievement is Dismissal Letter. Beating it is required for that floor’s story quest and frees a captured friend. The full room notes are on the Tyke page.',
    sections: [
      {
        heading: 'Fight the recovery, not the orb wave',
        paragraphs: [
          'The arena fills with pink energy orbs. Every attack has a wind-up you can dodge. Do not swing through the wave. Wait for the recovery, then punish. Gauntlets are the burst tool for that short window, if that is the meter you brought. A Short Sword still needs its three-hit finisher. Do not change weapons in the doorway.',
          'Elites and this boss do not rupture. The backpack launch is for purple normal enemies, not for Tyke. If the bag is already full of relics you meant to sell, pendant out before the door. A death here halves relic quality on Easy, Normal, and Hard.',
        ],
        bullets: [
          '<a href="/bosses-tyke/">Tyke boss page</a>',
          '<a href="/moonlighter-2-weapon-meters/">Weapon meters</a>',
          '<a href="/moonlighter-2-when-to-extract/">When to extract</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/bosses/', title: 'Bosses', description: 'The other named floors' },
    ],
    sources: [],
  },
  'moonlighter-2-herald-shields': {
    slug: 'moonlighter-2-herald-shields',
    title: 'Moonlighter 2: Strip the Herald’s Shields',
    description: 'The Herald starts each phase behind energy shields. Catch the purple blobs and throw them back before you swing.',
    kicker: 'Boss',
    status: 'Launch-day update',
    intro: 'The Herald is the first boss, at the end of Kalina’s Day Realm. Three phases. Beating it the first time starts the quest that opens the Night Realm. The hidden achievement is Out of Tune. It starts every phase behind energy shields.',
    sections: [
      {
        heading: 'Throw the blobs, then hit',
        paragraphs: [
          'Phase 1 puts six energy shields up. Catch the purple bomb blobs with the backpack and throw them back to strip the shields. Swinging the sword at the shields does not replace that throw. If you fail to push the phase during the stun, it returns with three shields instead of six. That is a smaller job, not a reset.',
          'Phase 2 breaks the right-hand cover and adds a two-way laser. Phase 3 removes the cover and layers bombardment on the laser. Dodge the laser, then use the same blob throw. Do not stand in the old cover spot after phase 2.',
        ],
        bullets: [
          '<a href="/bosses-the-herald/">The Herald</a>',
          '<a href="/moonlighter-2-two-boons-per-run/">Two boons</a>',
          '<a href="/dungeon-guide/">Dungeon loop</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-how-to-beat-tyke/', title: 'Tyke', description: 'The next wall' },
    ],
    sources: [],
  },
  'moonlighter-2-sell-before-you-upgrade': {
    slug: 'moonlighter-2-sell-before-you-upgrade',
    title: 'Moonlighter 2: Sell the Bag Before You Upgrade',
    description: 'Moonlighter 2 shop upgrades survive death. Backpack relics do not. Sell, then buy potions from Eris.',
    kicker: 'Shop',
    status: 'Launch-day update',
    intro: 'Nothing you buy in Tresna is lost on death. Relics in the backpack are. The first coins should become potions and a shop level, not a weapon you have not learned the meter for.',
    sections: [
      {
        heading: 'A return to town, in order',
        paragraphs: [
          'Extract with the pendant if the bag is the prize. Sleep is the hub save. You cannot sleep mid-run. Put relics on the displays, read the customer, and take the sale before you open a weapon menu.',
          'Eris at the Witch Hut is the first vendor players upgrade: potions, health, and dungeon perk unlocks. Ms. Scratch raises the shop level. K33P3R adds merchant bonuses. The Countess sells showcases that raise a whole rarity. Those are safe spends. A new sword is not, until the meter on the current one is boring.',
        ],
        bullets: [
          '<a href="/shop-guide/">Shop guide</a>',
          '<a href="/characters-eris/">Eris</a>',
          '<a href="/moonlighter-2-autosave/">Autosave</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/prices/', title: 'Prices', description: 'What to write down after a sale' },
    ],
    sources: [],
  },
  "moonlighter-2-relic-curses": {
    slug: "moonlighter-2-relic-curses",
    title: "Moonlighter 2 Relic Curses: Burn, Shock and Petrify Explained",
    description:
      "Every Moonlighter 2 relic curse: Burn and Armor in Kalina, Shock and Overcharge in The Gallery, Petrify and Absorb in Aeolia, and how to pack a backpack around each.",
    kicker: "Backpack",
    status: 'Launch-day update',
    intro: "Each of the three dimensions puts a different curse on the relics you pick up, and the curse is why the backpack is a puzzle instead of a list. Pack wrong and the relic you crossed a floor for is destroyed before you reach the pendant.",
    sections: [
      {
        heading: "One dimension, one curse",
        paragraphs: [
          "The curse is a property of the dimension, not of the relic. Walk into Kalina and everything you pick up plays by Burn and Armor rules; walk into The Gallery and the same slot behaves completely differently.",
          "That means the packing habit you built in your first dimension actively hurts you in the second. Re-learn the grid each time you unlock a new region.",
        ],
        bullets: [
          "<a href=\"/dungeons-kalina/\">Kalina</a> — desert, Tier 1",
          "<a href=\"/dungeons-the-gallery/\">The Gallery</a> — museum machines, Tier 2",
          "<a href=\"/dungeons-aeolia/\">Aeolia</a> — witches and storms, Tier 3",
        ],
      },
      {
        heading: "Kalina — Burn and Armor",
        paragraphs: [
          "A burning relic is destroyed unless an **Armored** relic sits next to it. Armor is not loot you are saving for later; it is the firewall you build the rest of the bag around.",
          "Practical rule: never let a burning relic take a slot that has no Armored neighbour. If you only have one Armored relic, you only have room for one burning relic, no matter how much empty space is left.",
        ],
      },
      {
        heading: "The Gallery — Shock and Overcharge",
        paragraphs: [
          "A shocked relic becomes **Overcharged** and gains quality — which makes this the one curse you can farm deliberately. Shock it a second time and it explodes, unless a **Battery** drains it.",
          "So the Gallery bag is a risk ladder: one shock is a free upgrade, two is a loss, and a Battery is what turns the second shock back into a profit. Carry the Battery before you start chasing Overcharge.",
        ],
      },
      {
        heading: "Aeolia — Petrify and Absorb",
        paragraphs: [
          "Petrified relics become **Aetherium crystals**, and other relics **Absorb** those crystals for quality. Leftover Aetherium is destroyed when the run ends, so an unabsorbed crystal is a wasted slot.",
          "That makes Aeolia the dimension where extraction timing is a quality decision, not just a safety one. Finish the absorbing before you pull the pendant, or you carry home a bag of nothing.",
        ],
      },
      {
        heading: "How to pack any of them",
        paragraphs: [
          "Decide the curse interaction at the moment you pick a relic up, not at the exit. Every one of these three systems punishes a bag you planned to sort later.",
          "Elites and bosses do not rupture, so you cannot clear space with a backpack launch mid-fight. The space you have at the door is the space you fight with.",
        ],
        bullets: [
          "<a href=\"/moonlighter-2-backpack-is-the-puzzle/\">The backpack is the puzzle</a>",
          "<a href=\"/moonlighter-2-when-to-extract/\">When to extract</a>",
          "<a href=\"/moonlighter-2-relic-loot-guide/\">Relic and loot guide</a>",
        ],
      },
    ],
    table: {
      heading: "Relic curses by dimension",
      headers: ["Dimension", "Curse", "What it does", "What you must carry"],
      rows: [
        ["Kalina", "Burn and Armor", "Burning relics are destroyed", "An Armored relic beside every burning one"],
        ["The Gallery", "Shock and Overcharge", "First shock raises quality, second explodes", "A Battery to drain the second shock"],
        ["Aeolia", "Petrify and Absorb", "Petrified relics become Aetherium crystals", "Relics that can Absorb before the run ends"],
      ],
    },
    relatedPages: [
      { href: "/dungeon-guide/", title: "Dungeon guide", description: "Route planning across all three dimensions" },
      { href: "/items/", title: "Items and relics", description: "What each relic category is worth" },
    ],
    sources: [],
  },
  "moonlighter-2-radar-nodes": {
    slug: "moonlighter-2-radar-nodes",
    title: "Moonlighter 2 Tomo’s Radar: Every Node Type and Which Branch to Take",
    description:
      "Every node on Tomo’s Radar in Moonlighter 2 — chest, event, potion, blacksmith, recipe, elite, miniboss, boss and perk rooms — and how node colour sets relic quality.",
    kicker: "Routing",
    status: 'Launch-day update',
    intro: "Tomo’s Radar turns each floor into a branching map, and you choose one branch at every step. The run is decided here, not in the fights — a route that skips the perk room and ends on an elite is a route you planned badly.",
    sections: [
      {
        heading: "The node types",
        paragraphs: [
          "Every floor in all three dimensions uses the same node vocabulary. Learn it once and the routing transfers.",
        ],
        bullets: [
          "**Chest** — a few Common relics plus a choice between two higher-rarity ones",
          "**Event** — a situational room; take it when the bag is light",
          "**Potion** — healing stock, which is the cheapest insurance in the game",
          "**Blacksmith** — in-run weapon work",
          "**Recipe** — unlocks, including gadget recipes",
          "**Ice or Thunder perk rooms** — combat pedestals that hand out run perks",
          "**Elite**, **Miniboss**, **Boss** — the fights that gate materials and quests",
        ],
      },
      {
        heading: "Node colour is the quality dial",
        paragraphs: [
          "Chests appear after chest nodes, minibosses and bosses, and **the node colour on the radar sets the relic quality** inside. A longer branch through richer nodes is worth more than a short branch to the boss.",
          "That is the whole routing decision in one sentence: you are not choosing a path to the exit, you are choosing how much the bag is worth when you get there.",
        ],
      },
      {
        heading: "A branch order that works",
        paragraphs: [
          "**Perk room first.** A perk you take on node two works for the whole floor; the same perk taken before the boss works for one fight. The [perk path guide](/moonlighter-2-perk-paths/) covers which to stack.",
          "**Potions before elites.** Elites and minibosses never rupture, so you cannot clear a bad fight with a backpack launch. Healing is how you survive them.",
          "**Chests while the bag has room.** A high-rarity chest you cannot carry is worse than a Common one you can — and the curse rules mean \"room\" is not just empty slots.",
          "**Miniboss for materials.** Each floor’s two minibosses drop the material for that dimension’s early weapon upgrades, and Nou and Anacard at the Silent Exchange will swap surplus miniboss materials for boss materials.",
        ],
      },
      {
        heading: "When to stop routing and leave",
        paragraphs: [
          "The pendant teleports you home at any time with everything in the bag, and there is no penalty beyond the loot you skipped. \"Back to Tresna\" relic effects also trigger on the way out.",
          "Because floors unlock through Tresna story quests rather than levels, there is no XP to grind — extract and bank freely. The only thing a longer run buys is relics and materials, and the only thing it risks is the bag you already filled.",
        ],
        bullets: [
          "<a href=\"/moonlighter-2-when-to-extract/\">When to extract</a>",
          "<a href=\"/dungeon-guide/\">Dungeon guide</a>",
          "<a href=\"/moonlighter-2-difficulty-and-death/\">What death costs</a>",
        ],
      },
    ],
    relatedPages: [
      { href: "/dungeons-kalina/", title: "Kalina", description: "The desert dimension and its floors" },
      { href: "/moonlighter-2-six-regions/", title: "Six regions", description: "How a 1.0 run is shaped" },
    ],
    sources: [],
  },
  "moonlighter-2-perk-paths": {
    slug: "moonlighter-2-perk-paths",
    title: "Moonlighter 2 Perk Paths: Stack One Element, Not Three",
    description:
      "How combat pedestals and run perks work in Moonlighter 2: why stacking all Thunder or all Ignite beats mixing, and the one-on-the-gun, one-on-the-weapon split.",
    kicker: "Perks",
    status: 'Launch-day update',
    intro: "Combat pedestals hand out run perks, and the single biggest damage decision in a run is whether you stack one element or collect a souvenir from each. Stacking wins, and it is not close.",
    sections: [
      {
        heading: "Stack one path",
        paragraphs: [
          "Perk rooms on Tomo’s Radar come in **Ice** and **Thunder** flavours, and pedestals inside hand out the run perks. Taking all Thunder, or all Ignite, beats mixing — the stacked path compounds, the mixed one gives you three effects that never reach the threshold where they matter.",
          "Pick the element on the first perk room you enter and then route toward more of it. A run where you took one of everything is a run where nothing procced.",
        ],
      },
      {
        heading: "One on the gun, one on the weapon",
        paragraphs: [
          "The usual split is **one perk on the gun and one on the melee weapon**. That covers both ranges without breaking the stack, because both are feeding the same element.",
          "This is also why weapon class matters here: a Short Sword still needs its three-hit finisher to land, and Gauntlets are a burst tool for a short recovery window. A perk that triggers on hit count behaves very differently on each.",
        ],
      },
      {
        heading: "Perks are not boons, and neither is an Aspect",
        paragraphs: [
          "Three separate systems share the word \"upgrade\" and they do not stack into one plan:",
          "Run **perks** come from combat pedestals inside a floor and last for that run. **Boons** are limited to two per run, and a third offer replaces one rather than adding to it. **Endless Weapon Aspects** are a version 1.0 weapon system and have nothing to do with either.",
        ],
        bullets: [
          "<a href=\"/moonlighter-2-two-boons-per-run/\">Only two boons per run</a>",
          "<a href=\"/moonlighter-2-endless-weapon-aspects/\">Endless Weapon Aspects</a>",
          "<a href=\"/moonlighter-2-bomb-path/\">Bomb Path</a>",
        ],
      },
      {
        heading: "Route for the perk, then for the chest",
        paragraphs: [
          "A perk room taken early works for the entire floor. A perk room taken before the boss works for one fight. If the radar offers a perk branch and a chest branch at node two, the perk is almost always the better pick — the chest at the end of a stacked run is worth more anyway.",
          "If the next node is an elite or a miniboss, take the perk that answers that room rather than the one that fits your fantasy build. Elites do not rupture, so damage you cannot apply is damage you do not have.",
        ],
      },
    ],
    relatedPages: [
      { href: "/moonlighter-2-radar-nodes/", title: "Tomo’s Radar nodes", description: "Which branch to take and why" },
      { href: "/moonlighter-2-weapon-meters/", title: "Weapon meters", description: "How each class actually lands damage" },
    ],
    sources: [],
  },
  "moonlighter-2-rupture-guide": {
    slug: "moonlighter-2-rupture-guide",
    title: "Moonlighter 2 Rupture: The Backpack Launch and What It Does Not Work On",
    description:
      "How rupture works in Moonlighter 2: purple enemies at half health launch off the backpack into walls or off the edge — and why elites and bosses never rupture.",
    kicker: "Combat",
    status: 'Launch-day update',
    intro: "Rupture is the most satisfying mechanic in the game and the most commonly misread. An enemy at half health turns purple, and the backpack launches it into a wall, into another enemy, or off the edge. It also never, ever works on the fights where you most want it.",
    sections: [
      {
        heading: "How a rupture happens",
        paragraphs: [
          "Bring a normal enemy to **half health** and it turns purple. That purple state is the window: the backpack launch sends it flying into walls, into other enemies, or off a ledge entirely.",
          "The launch is crowd control as much as damage. A purple enemy thrown into a group is how you reset a room that was closing in on you, and an edge is a free kill regardless of what health the target had left.",
        ],
      },
      {
        heading: "What never ruptures",
        paragraphs: [
          "**Elites and minibosses never rupture. Bosses never rupture.** This is the rule people learn the hard way, usually in a boss doorway with a full bag.",
          "If a fight is an elite, a miniboss or a boss, the backpack is not a weapon — it is just your inventory. Everything in that fight has to be solved with the weapon meter, the perk stack and your dodge.",
        ],
        note: { label: "Rule of thumb", text: "If it has a name on the radar, it does not rupture." },
      },
      {
        heading: "Purple is the signal to change targets",
        paragraphs: [
          "In a mixed room, a purple enemy is worth more than a full-health one, because the launch is faster than finishing it normally and it damages whatever it lands on. Switch targets when something turns purple rather than finishing the swing you started.",
          "Against groups beside a ledge, this flips the whole fight: you are no longer killing six enemies, you are rupturing three and throwing them at the other three.",
        ],
      },
      {
        heading: "Why it matters for the bag",
        paragraphs: [
          "The backpack is both your launcher and your loot, which is the joke the system is built on. You cannot free up space mid-fight by rupturing, and the space you walked in with is the space you fight with.",
          "That is also why a full bag in front of a boss door is a decision, not an accident — the pendant is still right there.",
        ],
        bullets: [
          "<a href=\"/moonlighter-2-elite-telegraph/\">Elite telegraphs</a>",
          "<a href=\"/minibosses/\">Minibosses</a>",
          "<a href=\"/moonlighter-2-when-to-extract/\">When to extract</a>",
        ],
      },
    ],
    relatedPages: [
      { href: "/moonlighter-2-healing-and-dodge/", title: "Healing and dodge", description: "The other half of staying alive" },
      { href: "/bosses/", title: "Bosses", description: "Every boss and how many players have beaten it" },
    ],
    sources: [],
  },
  "moonlighter-2-difficulty-and-death": {
    slug: "moonlighter-2-difficulty-and-death",
    title: "Moonlighter 2 Difficulty and Death: What You Lose on Each Setting",
    description:
      "What dying costs in Moonlighter 2 on each difficulty: half relic quality on Easy, Normal and Hard, outright relic loss on Expert, and full progress loss on Hardcore.",
    kicker: "Difficulty",
    status: 'Launch-day update',
    intro: "Moonlighter 2 does not make enemies spongier as the difficulty rises. It changes what a death takes from your backpack — and on one setting, from your save. Pick the setting by how much you want a bad run to cost.",
    sections: [
      {
        heading: "The death penalty ladder",
        paragraphs: [
          "Every difficulty uses the same dungeons and the same relic curses. The difference is what happens to the bag when you go down.",
        ],
        bullets: [
          "**Easy, Normal and Hard** — every relic in your backpack loses half its quality",
          "**Expert** — you lose the relics outright",
          "**Hardcore** (added in version 1.0) — you lose your progress and start over",
        ],
      },
      {
        heading: "Which to pick",
        paragraphs: [
          "**Normal** is the setting the loop is tuned for. Half quality on a death stings enough to make extraction a real decision, without turning one bad room into an evening.",
          "**Expert** changes how you route rather than how you fight: losing the relics outright makes every extra node a wager, so you pendant out earlier and run shorter, richer loops.",
          "**Hardcore** is a second-playthrough mode. Its wording is a progress loss, not a relic loss — treat it as a separate campaign, not a difficulty tweak on your main save.",
        ],
      },
      {
        heading: "What difficulty does not change",
        paragraphs: [
          "Floors unlock through Tresna story quests, not levels, so there is no XP curve to soften. Nothing you buy in Tresna is lost on death either — shop upgrades, vendor unlocks and shop level all survive.",
          "That asymmetry is the whole strategy: **spend before you explore**. Coins turned into potions, a shop level or a vendor unlock cannot be lost. Relics in the backpack always can.",
        ],
        bullets: [
          "<a href=\"/moonlighter-2-sell-before-you-upgrade/\">Sell the bag before you upgrade</a>",
          "<a href=\"/moonlighter-2-hardcore-mode/\">Hardcore mode</a>",
          "<a href=\"/moonlighter-2-autosave/\">Autosave and sleeping</a>",
        ],
      },
      {
        heading: "Where the game sits now",
        paragraphs: [
          "Moonlighter 2: The Endless Vault is **Very Positive** on Steam with **3,446 positive of 4,238 reviews** on 17 October 2026, at **$29.99** with **56 achievements** and a Metacritic score of **72**. Version 1.0 landed on 2 September 2026.",
          "The recurring criticism in the negative pile is grind rather than difficulty — which is another way of saying the death penalty, not the enemy health bar, is what people are actually reacting to.",
        ],
      },
    ],
    table: {
      heading: "What a death costs",
      headers: ["Difficulty", "Relics in the backpack", "Progress"],
      rows: [
        ["Easy", "Half quality", "Kept"],
        ["Normal", "Half quality", "Kept"],
        ["Hard", "Half quality", "Kept"],
        ["Expert", "Lost outright", "Kept"],
        ["Hardcore", "Lost", "Start over"],
      ],
    },
    relatedPages: [
      { href: "/moonlighter-2-when-to-extract/", title: "When to extract", description: "Turning a run around before it costs you" },
      { href: "/moonlighter-2-grind/", title: "Is it a grind?", description: "What the reviews actually complain about" },
    ],
    sources: [],
  },
  'steam-reviews-now': {
    slug: 'steam-reviews-now',
    title: 'Moonlighter 2 Steam Reviews Right Now',
    description: 'Moonlighter 2 is Very Positive on October 19, 2026: 1,692 of 2,046 English reviews, still $29.99.',
    kicker: 'Reviews',
    status: 'Launch-day update',
    intro: 'Checked October 19, 2026: English Steam reviews are Very Positive, 1,692 positive out of 2,046. The US price is $29.99, discount 0. Fifty-six achievements. Version 1.0 left Early Access on September 2, 2026.',
    sections: [
      {
        heading: 'Use this count, not the October 16 one',
        paragraphs: [
          'The October 16 page said 1,688 of 2,042. That page is a dated snapshot. This one is the current English summary. The complaint beside the praise is still the same: you cannot sleep mid-run, and a death still taxes the bag.',
          'Easy, Normal, and Hard halve relic quality on death. Expert loses the relics. Hardcore can end the save. Extract before the next elite if the bag is the prize.',
        ],
        bullets: [
          '<a href="/moonlighter-2-reviews-october-16/">October 16 snapshot</a>',
          '<a href="/moonlighter-2-when-to-extract/">When to extract</a>',
          '<a href="/moonlighter-2-difficulty-and-death/">What a death costs</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/moonlighter-2-price-october-16/', title: 'Price', description: '$29.99, no discount' },
    ],
    sources: [],
  },
  'how-to-buy-a-potion': {
    slug: 'how-to-buy-a-potion',
    title: 'How to Buy a Potion in Moonlighter 2',
    description: 'Buy Moonlighter 2 potions from Eris after you sell the bag. A potion in town survives death. A relic in the bag may not.',
    kicker: 'Shop',
    status: 'Launch-day update',
    intro: 'Eris at the Witch Hut sells potions, health, and dungeon perk unlocks. She is the first vendor to fund. The coins come from a bag you already extracted and sold.',
    sections: [
      {
        heading: 'Town order',
        paragraphs: [
          'Pendant out if the relics are the prize. Sleep in Tresna. Put the relics on the displays and take the sale. Then buy the potion. A weapon meter you have not learned is a worse spend than a heal you will use on the next elite.',
          'Nothing bought in Tresna is lost on death. Relics still in the backpack are. Do not walk back into Kalina with the coins unspent and the bag full.',
        ],
        bullets: [
          '<a href="/characters-eris/">Eris</a>',
          '<a href="/moonlighter-2-sell-before-you-upgrade/">Sell before you upgrade</a>',
          '<a href="/shop-guide/">Shop guide</a>',
        ],
      },
    ],
    relatedPages: [
      { href: '/prices/', title: 'Prices', description: 'What to write down after the sale' },
    ],
    sources: [],
  },
};



export const PAGE_DATA: Record<string, PageData> = {
  ...INLINE_PAGES,
  ...WEAPON_PAGES,
  ...CHARACTER_PAGES,
  ...DUNGEON_PAGES,
  ...MINIBOSS_PAGES,
  ...BOSS_PAGES,
};
