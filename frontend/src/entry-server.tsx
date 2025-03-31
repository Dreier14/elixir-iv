import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from 'react-dom/server';
import { Router } from './router';
import { HelmetProvider } from 'react-helmet-async';

interface IRenderProps { 
  path: string;
}

export function render({ path }: IRenderProps) {
  const helmetContext = {}; // Ensure this is not cast to FilledContext

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as any; // Cast only when needed

  console.log("Helmet Context:", helmet); // Debugging output

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet?.title.toString() || ""}
        ${helmet?.meta.toString() || ""}
        ${helmet?.script.toString() || ""}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}