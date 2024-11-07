import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer';
import Home from '../pages/Home';
import About from '../pages/About';
import School from '../pages/Services';
import Collaboration from '../pages/Collaboration';
import AirCommunity from '../pages/AirCommunity';
import Contact from '../pages/Contact'

function AppRouters() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<School />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/community" element={<AirCommunity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouters;