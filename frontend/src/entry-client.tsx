import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <HelmetProvider>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </HelmetProvider>
)