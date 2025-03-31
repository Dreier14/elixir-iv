import fs from 'node:fs/promises';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

// Improved Vercel path resolution
const getDistPath = () => {
  if (isProduction && process.env.VERCEL) {
    // Vercel puts everything in /var/task
    return '/var/task/dist/client';
  }
  return path.join(__dirname, '../dist/client');
};

const app = express();

// Verify dist exists in production
if (isProduction) {
  try {
    await fs.access(getDistPath());
    console.log('Found production build at:', getDistPath());
  } catch (err) {
    console.error('Production build not found at:', getDistPath());
    console.error('Did you forget to run `npm run build`?');
    process.exit(1);
  }
}

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
  
  // Use the verified dist path
  const clientDir = getDistPath();
  app.use(base, sirv(clientDir, { 
    extensions: [],
    dev: !isProduction,
    // Handle missing files gracefully
    onNoMatch: (req, res) => {
      res.status(404).send('Not found');
    }
  }));
}

// SSR Handler (unchanged)
app.get('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template, render;
    if (!isProduction) {
      template = await fs.readFile(path.join(__dirname, './index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = await fs.readFile(path.join(getDistPath(), 'index.html'), 'utf-8');
      render = (await import('/var/task/dist/server/entry-server.js')).render;
    }

    const rendered = await render(url, isProduction 
      ? JSON.parse(await fs.readFile(path.join(getDistPath(), '.vite/ssr-manifest.json'), 'utf-8'))
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

export default app;