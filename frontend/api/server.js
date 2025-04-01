import fs from 'node:fs/promises';
import { accessSync } from 'node:fs';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

// Improved path resolution that works for both local and Vercel
const getClientPath = () => {
  const possiblePaths = [
    path.join(__dirname, '../dist/client'),       // Local development
    '/var/task/dist/client',                     // Vercel default location
    path.join(process.cwd(), 'dist/client')      // Fallback location
  ];

  for (const p of possiblePaths) {
    try {
      accessSync(p);
      console.log(`Found client build at: ${p}`);
      return p;
    } catch (e) {
      console.log(`Path not found: ${p}`);
    }
  }
  throw new Error(`Could not find client build in any of: ${possiblePaths.join(', ')}`);
};

const getServerPath = () => {
  const possiblePaths = [
    path.join(__dirname, '../dist/server/entry-server.js'),  // Local
    '/var/task/dist/server/entry-server.js',                // Vercel
    path.join(process.cwd(), 'dist/server/entry-server.js') // Fallback
  ];

  for (const p of possiblePaths) {
    try {
      accessSync(p);
      console.log(`Found server entry at: ${p}`);
      return p;
    } catch (e) {
      console.log(`Path not found: ${p}`);
    }
  }
  throw new Error(`Could not find server entry in any of: ${possiblePaths.join(', ')}`);
};

const app = express();

// Verify production build exists
if (isProduction) {
  try {
    const clientPath = getClientPath();
    const serverPath = getServerPath();
    console.log('Production build verified');
  } catch (err) {
    console.error('Production build verification failed:', err.message);
    console.error('Did you run `npm run build` before deployment?');
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
  
  const clientDir = getClientPath();
  console.log(`Serving static files from: ${clientDir}`);
  app.use(base, sirv(clientDir, { 
    extensions: [],
    onNoMatch: (req, res) => {
      res.status(404).send('Not found');
    }
  }));
}

app.use('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
  Disallow: /admin
  Allow: /
  Sitemap: https://elixirivtherapy.com/sitemap.xml`);
});

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
      const clientPath = getClientPath();
      template = await fs.readFile(path.join(clientPath, 'index.html'), 'utf-8');
      
      const serverPath = getServerPath();
      render = (await import(serverPath)).render;
    }

    const manifestPath = path.join(getClientPath(), '.vite/ssr-manifest.json');
    const manifest = isProduction 
      ? JSON.parse(await fs.readFile(manifestPath, 'utf-8'))
      : undefined;

      const rendered = await render({ path: url, manifest: manifest });

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error('SSR Error:', e.stack);
    res.status(500).end(e.stack);
  }
});

// Only start the server if not in Vercel environment
if (process.env.VERCEL !== '1') {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }

export default app;