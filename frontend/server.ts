import express from 'express';
import fs from 'fs';
import path from 'path';
import { render } from "./dist/server/entry-server.js";

const app = express();

// Serve static assets
app.use(express.static('dist/client'));

app.get('*', async (req, res) => {
  const template = fs.readFileSync(path.resolve('dist/client/index.html'), 'utf-8');
  const appHtml = render(req.url);
  
  const html = template.replace(`<!--ssr-outlet-->`, appHtml);
  res.status(200).send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
