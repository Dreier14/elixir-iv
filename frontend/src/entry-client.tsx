import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

if (typeof window !== 'undefined') {
  (window as any).__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = true;
}

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <HelmetProvider>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </HelmetProvider>
)