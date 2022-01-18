import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Times New Roman;
    margin: 0;
  }
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
`;
const theme = {
  main: 'mediumseagreen',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer>Socials</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
