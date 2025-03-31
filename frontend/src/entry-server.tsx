import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from 'react-dom/server';
import { Router } from './router';

interface IRenderProps { 
  path: string;
}

export function render({ path }: IRenderProps) {
  const appHtml = renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </React.StrictMode>
  );

  return {
    html: appHtml,
    head: `
      <title>ELIXIR IV</title>
      <meta name="description" content="Your trusted IV therapy provider">
    `
  };
}