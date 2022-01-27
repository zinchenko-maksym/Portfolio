import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html, body{
    
  }
  body {
    font-family: Times New Roman;
    margin: 0;
  }

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  #root{
    height: 100%;
    position: relative;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <GlobalStyle />
      <Background />
    </ThemeProvider>
  );
}

export default App;
