import { StaticRouter } from "react-router-dom/server";
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from './router';

interface IRenderProps { 
  path: string;
}

export function render({ path }: IRenderProps) {
  // Create a helmet context for SSR
  const helmetContext: any = {};

  // Render the app to a string
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </HelmetProvider>
  );


  const { helmet } = helmetContext;

  // Construct the full HTML with the rendered app and helmet meta data
  const html = `
    <!DOCTYPE html>
    <html ${helmet?.htmlAttributes.toString()}>
      <head>
        ${helmet?.title.toString()}
        ${helmet?.meta.toString()}
        ${helmet?.link.toString()}
        <!-- Add other tags (e.g., styles, scripts) here -->
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <!-- Add your JS bundles/scripts here -->
      </body>
    </html>
  `;

  return { html };
}