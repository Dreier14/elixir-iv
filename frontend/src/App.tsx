import React from 'react';
import RoutesConfig from './routes';  
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import ScrollToTop from './components/Universal/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div id="root">
      <Navigation />
      <ScrollToTop />
      <RoutesConfig />
      <Footer />
    </div>
  );
};

export default App;
