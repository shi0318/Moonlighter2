import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
test('guide directory lists real Moonlighter guides', async () => {
 const html = await readFile(new URL('../dist/guides/index.html', import.meta.url), 'utf8');
 assert.match(html, /Moonlighter/);
 assert.ok((html.match(/<a\b/g) ?? []).length > 10);
 assert.doesNotMatch(html, /farming-crafting-investigation|killer-decisions-and-replay/);
});
