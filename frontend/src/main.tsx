// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import './index.css';
import App from './App.tsx';

// Wrap the App component with Router
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>  {/* Router is only needed at this level */}
      <App />
    </Router>
  </StrictMode>
);
