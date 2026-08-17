import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('Moonlighter 2 site config uses its real game identity', async () => {
  const source = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8');
  assert.match(source, /Moonlighter 2: The Endless Vault/);
  assert.match(source, /moonlighter2guide\.org/);
  assert.match(source, /2350790/);
  assert.match(source, /\/prices\//);
});
