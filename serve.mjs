import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';

const port = Number(process.env.PORT || 8797);
const root = new URL('./dist/', import.meta.url);
const mime = { html:'text/html; charset=utf-8', js:'text/javascript; charset=utf-8', css:'text/css; charset=utf-8', txt:'text/plain; charset=utf-8', xml:'text/xml', webp:'image/webp', png:'image/png', woff2:'font/woff2' };
await import('./build.mjs');

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://127.0.0.1').pathname;
    const name = decodeURIComponent(pathname.slice(1)) || 'index.html';
    const file = new URL(name, root);
    if (!file.href.startsWith(root.href) || !(await stat(file)).isFile()) throw new Error('Not found');
    response.writeHead(200, { 'Content-Type': mime[name.split('.').at(-1)] ?? 'application/octet-stream' });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`ABODE http://127.0.0.1:${port}/`));
