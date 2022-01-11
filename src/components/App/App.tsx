import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer>Socials</footer>
    </div>
  );
}

export default App;
