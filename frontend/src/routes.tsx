import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { aboutSections } from './assets/static/AboutSection/AboutSection';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About data={aboutSections} />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/hydra-therapy" component={HydrationPage} />
    <Route path="/energy-boost" component={EnergyBoostPage} />
    <Route path="/immunity-support" component={ImmunitySupportPage} /> */}
    </Routes>
  );
};

export default RoutesConfig;
