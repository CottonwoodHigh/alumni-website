// @ts-check
// Tells IndexNow (Bing and the engines that share its feed) that the pages in
// the sitemap may have changed, so they recrawl them soon. IndexNow fetches
// the key file from the live site to check the request, so run this only
// after a production deploy. Any failure throws, so the process exits
// non-zero and the CI job shows the failure.
// Protocol: https://www.indexnow.org/documentation
import { readdir, readFile } from 'node:fs/promises';

const files = await readdir('dist');

// The key file in public/ is the only place the key lives. This site's key
// is 32 lowercase hex characters, so no other file in dist/ matches.
const keyFile = files.find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) throw new Error('no IndexNow key file in dist/');
const key = keyFile.slice(0, -'.txt'.length);

// @astrojs/sitemap starts a second file only past 45,000 URLs, and IndexNow
// takes at most 10,000 per request, so one file is all this site needs.
const xml = await readFile('dist/sitemap-0.xml', 'utf8');
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => loc);
if (urlList.length === 0) throw new Error('no URLs in the sitemap');

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(urlList[0]).host, key, urlList }),
  // A hung request would hold the CI job until GitHub kills it after six
  // hours. IndexNow answers in well under a second, so 10 s is generous.
  signal: AbortSignal.timeout(10_000),
});
if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
// IndexNow answers 202, not an error, while it has yet to fetch and check
// the key file. Only 200 means the key was confirmed.
const note = response.status === 202 ? ' (key check pending)' : '';
console.log(`IndexNow received ${urlList.length} URL(s): HTTP ${response.status}${note}`);
