import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('layout does not load nonessential Google tracking or advertising',()=>{
 const layout=readFileSync(new URL('../src/layouts/Layout.astro',import.meta.url),'utf8');
 assert.doesNotMatch(layout, /googletagmanager\.com|pagead2\.googlesyndication\.com|gtag\('config'/);
 assert.match(layout,/google-adsense-account/);
});
test('guide template does not claim every page is verified',()=>{
 const page=readFileSync(new URL('../src/components/GuidePage.astro',import.meta.url),'utf8');
 assert.doesNotMatch(page,/\{page\.status\}/);
});
test('footer makes all trust pages discoverable without blanket verification dates',()=>{
 const footer=readFileSync(new URL('../src/components/Footer.astro',import.meta.url),'utf8');
 for(const href of ['/terms/','/editorial-policy/','/privacy-policy/']) assert.ok(footer.includes(href));
 assert.doesNotMatch(footer,/SITE.lastVerified/);
});
