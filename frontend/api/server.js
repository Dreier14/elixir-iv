import fs from 'node:fs/promises';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

const app = express();

// Middleware setup
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv(path.join(__dirname, '../dist/client'), { extensions: [] }));
}

// SSR Handler
app.get('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template, render;
    if (!isProduction) {
      template = await fs.readFile(path.join(__dirname, './index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = await fs.readFile(path.join(__dirname, '../dist/client/index.html'), 'utf-8');
      render = (await import('../dist/server/entry-server.js')).render;
    }

    const rendered = await render(url, isProduction 
      ? JSON.parse(await fs.readFile(path.join(__dirname, '../dist/client/.vite/ssr-manifest.json'), 'utf-8'))
      : undefined);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});