// Add a path only after that page has had a material, verifiable update.
const PAGE_LASTMOD = {
  '/version-1-0-update/': '2026-09-03',
  '/release-date/': '2026-09-03',
  '/version-1-release-date/': '2026-09-03',
  '/gameplay-preview/': '2026-09-03',
  '/save-transfer-progress-guide/': '2026-09-03',
  '/steam-features-guide/': '2026-09-03',
  '/co-op-status/': '2026-09-03',
  '/moonlighter-2-switch-2/': '2026-09-03',
  '/weapons/': '2026-09-03',
  '/shop-guide/': '2026-09-03',
  '/dungeon-guide/': '2026-09-03',
  '/walkthrough/': '2026-09-03',
  '/bosses/': '2026-09-02',
};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
