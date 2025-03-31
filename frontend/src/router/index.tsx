import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Error from '../pages/Error/Error';
import { aboutSections } from '../assets/static/AboutSection/AboutSection';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Router: React.FC = () => {
  return (
    <>
        <Navigation />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About data={aboutSections} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </>
  );
};

export { Router };
