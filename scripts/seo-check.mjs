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
  assert(!html.includes('2026-09-02'), 'Unverified 1.0 date is presented in homepage output.');

  const homeCardImages = {
    '/save-transfer-progress-guide/': '/images/moonlighter-2-shot-5.jpg',
    '/moonlighter-2-switch-2/': '/images/moonlighter-2-header.jpg',
    '/beginner-guide/': '/images/moonlighter-2-shot-2.jpg',
    '/items/': '/images/moonlighter-2-shot-3.jpg',
    '/prices/': '/images/moonlighter-2-shot-4.jpg',
    '/shop-guide/': '/images/moonlighter-2-shot-5.jpg',
    '/dungeon-guide/': '/images/moonlighter-2-shot-1.jpg',
    '/release-date/': '/images/moonlighter-2-header.jpg',
  };
  for (const [href, image] of Object.entries(homeCardImages)) {
    const cardPattern = new RegExp(`<a href="${href}"[^>]*>\\s*<img[^>]*src="${image}"`, 'i');
    assert(cardPattern.test(html), `Homepage card ${href} is missing its mapped Steam image.`);
  }
}

const articleImages = {
  '/moonlighter-2-switch-2/': 'moonlighter-2-header.jpg',
  '/save-transfer-progress-guide/': 'moonlighter-2-shot-5.jpg',
  '/items/': 'moonlighter-2-shot-3.jpg',
  '/prices/': 'moonlighter-2-shot-4.jpg',
  '/shop-guide/': 'moonlighter-2-shot-5.jpg',
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
if (existsSync(guidesPath)) {
  const guidesText = readFileSync(guidesPath, 'utf8');
  assert(guidesText.includes('href="/save-transfer-progress-guide/"'), 'Guide directory must list the save-transfer page.');
}

const homeHeader = existsSync(distIndex) ? readFileSync(distIndex, 'utf8').match(/<header[\s\S]*?<\/header>/i)?.[0] ?? '' : '';
assert(!homeHeader.includes('href="/save-transfer-progress-guide/"'), 'Save-transfer page must stay out of primary navigation.');

const sitemapPath = join(root, 'dist', 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  assert(sitemap.includes('<loc>https://moonlighter2guide.org/save-transfer-progress-guide/</loc><lastmod>2026-08-31T00:00:00.000Z</lastmod>'), 'Sitemap must include the save-transfer page with the 2026-08-31 lastmod.');
}

const sourceFiles = ['src/data/site.ts', 'src/data/sources.ts', 'src/pages/index.astro', 'src/components/Footer.astro'].map((file) => join(root, file));
for (const sourceUrl of sourceUrls) {
  assert(sourceFiles.some((file) => existsSync(file) && readFileSync(file, 'utf8').includes(sourceUrl)), 'Missing source URL in project source: ' + sourceUrl);
}
for (const file of sourceFiles) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8');
  assert(!text.includes('2026-09-02'), 'Unverified Moonlighter 2 1.0 date found in ' + file);
  assert(!text.includes('Grave Seasons'), 'Old Grave Seasons claim found in ' + file);
}

if (failures.length) {
  console.error('SEO check failed with ' + failures.length + ' issue(s):');
  failures.forEach((failure) => console.error('- ' + failure));
  process.exit(1);
}

console.log('SEO check passed: ' + requiredPages.length + ' routes, ' + requiredImages.length + ' local Steam images, and ' + sourceUrls.length + ' source URLs verified.');
