import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error: React.FC = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-message">The page you're looking for doesn't exist.</p>
      <Link to="/" className="error-link">Go back to Home</Link>
    </div>
  );
};

export default Error;
