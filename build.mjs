import { cp, mkdir } from 'node:fs/promises';

const destination = new URL('./dist/', import.meta.url);
await mkdir(destination, { recursive: true });
await Promise.all(['index.html', 'robots.txt', 'sitemap.xml', 'assets'].map((name) =>
  cp(new URL(name, import.meta.url), new URL(name, destination), { recursive: true }),
));
console.log('Built the static ABODE site in dist/');
