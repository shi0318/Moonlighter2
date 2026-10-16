import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const sourceUrls = [
  'https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/',
  'https://store.steampowered.com/news/app/2350790',
];
const requiredPages = [
  '/', '/guides/', '/beginner-guide/', '/items/', '/prices/', '/shop-guide/',
  '/dungeon-guide/', '/walkthrough/', '/weapons/', '/faq/', '/release-date/',
  '/version-1-0-update/',
  '/moonlighter-2-switch-2/', '/save-transfer-progress-guide/', '/about/', '/contact/', '/privacy-policy/',
];
const requiredImages = [
  'public/images/moonlighter-2-header.jpg',
  'public/images/moonlighter-2-shot-1.jpg',
  'public/images/moonlighter-2-shot-2.jpg',
  'public/images/moonlighter-2-shot-3.jpg',
  'public/images/moonlighter-2-shot-4.jpg',
  'public/images/moonlighter-2-shot-5.jpg',
];
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

for (const image of requiredImages) {
  assert(existsSync(join(root, image)), 'Missing local Steam image: ' + image);
  if (existsSync(join(root, image))) assert(readFileSync(join(root, image)).length > 10000, 'Steam image is unexpectedly small: ' + image);
}

for (const page of requiredPages) {
  const output = page === '/'
    ? join(root, 'dist', 'index.html')
    : join(root, 'dist', page.replace(/^\/|\/$/g, ''), 'index.html');
  assert(existsSync(output), 'Missing built route: ' + page);
}

const distIndex = join(root, 'dist', 'index.html');
if (existsSync(distIndex)) {
  const html = readFileSync(distIndex, 'utf8');
  const body = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  assert(html.includes('Moonlighter 2 Guide'), 'Homepage title or H1 is missing.');
  assert(html.includes('2350790'), 'Steam App ID is missing from homepage output.');
  assert(html.includes('application/ld+json'), 'JSON-LD schema is missing.');
  assert(html.includes('FAQPage'), 'FAQPage schema is missing.');
  assert(body.split(/\s+/).filter(Boolean).length >= 650, 'Homepage content is too thin.');
  assert(html.includes('Moonlighter 2 Steam store page'), 'Visible source panel is missing.');
  assert(!html.includes('Grave Seasons'), 'Copied Grave Seasons content remains in homepage output.');
  assert(!html.includes('>Early Access</dd>'), 'Homepage still presents Early Access as the current Steam state.');
  assert(html.includes('Left Early Access Sep 2, 2026'), 'Homepage no longer records the version 1.0 release state.');

  const homeCardImages = {
    '/moonlighter-2-very-positive/': '/images/m2-hot-0.webp',
    '/moonlighter-2-aeolia-bugs/': '/images/m2-hot-6.webp',
    '/moonlighter-2-hotfix-1/': '/images/m2-hot-6.webp',
    '/characters/': '/images/moonlighter-2-shot-5.jpg',
    '/moonlighter-2-best-weapon/': '/images/moonlighter-2-shot-4.jpg',
    '/moonlighter-2-infinite-endless-vault-guide/': '/images/moonlighter-2-shot-1.jpg',
    '/moonlighter-2-hardcore-mode/': '/images/moonlighter-2-shot-2.jpg',
    '/moonlighter-2-shop-level-5/': '/images/moonlighter-2-shot-5.jpg',
  };
  for (const [href, image] of Object.entries(homeCardImages)) {
    const cardPattern = new RegExp(`<a href="${href}"[^>]*>\\s*<img[^>]*src="${image}"`, 'i');
    assert(cardPattern.test(html), `Homepage card ${href} is missing its mapped Steam image.`);
  }
}

const articleImages = {
  '/moonlighter-2-switch-2/': 'moonlighter-2-header.jpg',
  '/save-transfer-progress-guide/': 'moonlighter-2-shot-5.jpg',
  '/version-1-0-update/': 'moonlighter-2-shot-4.jpg',
  '/items/': 'moonlighter-2-shot-3.jpg',
  '/prices/': 'm2-hot-2.webp',
  '/shop-guide/': 'm2-hot-2.webp',
  '/release-date/': 'moonlighter-2-header.jpg',
};
for (const [page, image] of Object.entries(articleImages)) {
  const output = join(root, 'dist', page.replace(/^\/|\/$/g, ''), 'index.html');
  if (!existsSync(output)) continue;
  const html = readFileSync(output, 'utf8');
  const expectedUrl = `https://moonlighter2guide.org/images/${image}`;
  assert(html.includes(`property="og:image" content="${expectedUrl}"`), `${page} is missing its page-specific Open Graph image.`);
}

const saveTransferPath = join(root, 'dist', 'save-transfer-progress-guide', 'index.html');
if (existsSync(saveTransferPath)) {
  const saveTransferText = readFileSync(saveTransferPath, 'utf8');
  const articleMarkup = saveTransferText.match(/<article[\s\S]*?<\/article>/i)?.[0] ?? '';
  assert(saveTransferText.includes('Moonlighter 2: The Endless Vault Save Transfer and Progress Guide'), 'Save-transfer page title or H1 is missing the complete game name.');
  assert(saveTransferText.includes('name="description" content="Moonlighter 2: The Endless Vault save transfer guide'), 'Save-transfer page description is missing the complete game name.');
  assert(articleMarkup.includes('/images/moonlighter-2-shot-5.jpg'), 'Save-transfer page is missing its shot5 image.');
  assert(!articleMarkup.includes('Fact sources') && !articleMarkup.includes('Sources and verification'), 'Save-transfer page must not render a source panel.');
  assert(!articleMarkup.includes('store.steampowered.com') && !articleMarkup.includes('steamcommunity.com'), 'Save-transfer article body must not display source links.');
}

const guidesPath = join(root, 'dist', 'guides', 'index.html');
const guidesPage2 = join(root, 'dist', 'guides', 'page', '2', 'index.html');
if (existsSync(guidesPath)) {
  const guidesText = readFileSync(guidesPath, 'utf8');
  for (const href of ['/moonlighter-2-very-positive/', '/moonlighter-2-aeolia-bugs/', '/moonlighter-2-hotfix-1/']) {
    assert(guidesText.includes(`href="${href}"`), `Guide directory must list ${href}.`);
  }
}
if (existsSync(guidesPage2)) {
  const page2 = readFileSync(guidesPage2, 'utf8');
  assert(page2.includes('href="/save-transfer-progress-guide/"'), 'Guide directory page 2 must list the save-transfer page.');
  assert(page2.includes('href="/version-1-0-update/"'), 'Guide directory page 2 must list the version 1.0 update page.');
}

const homeHeader = existsSync(distIndex) ? readFileSync(distIndex, 'utf8').match(/<header[\s\S]*?<\/header>/i)?.[0] ?? '' : '';
assert(!homeHeader.includes('href="/save-transfer-progress-guide/"'), 'Save-transfer page must stay out of primary navigation.');

const sitemapPath = join(root, 'dist', 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const href of ['/moonlighter-2-very-positive/', '/moonlighter-2-aeolia-bugs/', '/moonlighter-2-very-positive-october/', '/moonlighter-2-autosave/']) {
    assert(sitemap.includes(`<loc>https://moonlighter2guide.org${href}</loc><lastmod>2026-10-15T00:00:00.000Z</lastmod>`), `Sitemap must include ${href} with the 2026-10-15 lastmod.`);
  }
  assert(sitemap.includes('<loc>https://moonlighter2guide.org/save-transfer-progress-guide/</loc><lastmod>2026-09-03T00:00:00.000Z</lastmod>'), 'Sitemap must retain the save-transfer page lastmod.');
  assert(sitemap.includes('<loc>https://moonlighter2guide.org/version-1-0-update/</loc><lastmod>2026-09-03T00:00:00.000Z</lastmod>'), 'Sitemap must retain the version 1.0 update page lastmod.');
}

const siteSourcePath = join(root, 'src', 'data', 'site.ts');
if (existsSync(siteSourcePath)) {
  const siteSource = readFileSync(siteSourcePath, 'utf8');
  assert(siteSource.includes("releaseWindow: 'Version 1.0 released September 2, 2026'"), 'SITE.releaseWindow no longer records the shipped 1.0 state.');
  assert(siteSource.includes("steamReleaseText: 'Sep 2, 2026'"), 'SITE.steamReleaseText no longer matches the Steam release field.');
  assert(!siteSource.includes("'Current store state: Early Access'"), 'A page still presents Early Access as the current store state.');
}

const sourceFiles = ['src/data/site.ts', 'src/data/sources.ts', 'src/pages/index.astro', 'src/components/Footer.astro'].map((file) => join(root, file));
for (const sourceUrl of sourceUrls) {
  assert(sourceFiles.some((file) => existsSync(file) && readFileSync(file, 'utf8').includes(sourceUrl)), 'Missing source URL in project source: ' + sourceUrl);
}
for (const file of sourceFiles) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8');
  assert(!text.includes('Grave Seasons'), 'Old Grave Seasons claim found in ' + file);
}

if (failures.length) {
  console.error('SEO check failed with ' + failures.length + ' issue(s):');
  failures.forEach((failure) => console.error('- ' + failure));
  process.exit(1);
}

console.log('SEO check passed: ' + requiredPages.length + ' routes, ' + requiredImages.length + ' local Steam images, and ' + sourceUrls.length + ' source URLs verified.');
