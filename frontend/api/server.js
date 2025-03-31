import fs from 'node:fs/promises';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const base = process.env.BASE || '/';

// Production middleware
if (isProduction) {
  const compression = require('compression');
  const sirv = require('sirv');
  app.use(compression());
  app.use(base, sirv(path.join(__dirname, '../dist/client'), { extensions: [] }));
}

// SSR Handler
app.get('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');
    
    let template, render;
    if (!isProduction) {
      const { createServer } = await import('vite');
      const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
      });
      template = await fs.readFile(path.join(__dirname, '../index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule(path.join(__dirname, '../src/entry-server.tsx'))).render;
    } else {
      template = await fs.readFile(path.join(__dirname, '../dist/client/index.html'), 'utf-8');
      const ssrManifest = await fs.readFile(path.join(__dirname, '../dist/client/.vite/ssr-manifest.json'), 'utf-8');
      render = (await import(path.join(__dirname, '../dist/server/entry-server.js'))).render;
    }

    const rendered = await render(url, isProduction ? JSON.parse(ssrManifest) : undefined);
    
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default app;