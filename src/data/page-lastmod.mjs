// Add a path only after that page has had a material, verifiable update.
const PAGE_LASTMOD = {
  '/co-op-status/': '2026-08-12',
  '/release-date/': '2026-08-14',
  '/version-1-release-date/': '2026-08-14',
};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
