import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

// Serve static assets
app.use(express.static('dist/client'));

app.get('*', async (req, res) => {
  try {
    const template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8');
    const { render } = await import('./dist/server/entry-server.js');
    const appHtml = render(req.url);
    
    const html = template.replace(`<!--ssr-outlet-->`, appHtml);
    res.status(200).send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});