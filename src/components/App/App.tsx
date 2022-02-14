import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Home from '../Home/Home';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import theme from './theme';
import Skills from '../Skills/Skills';

const GlobalStyle = createGlobalStyle`

  html, body{
    
  }
  body {
    margin: 0;
  }

  * {
    border: 0;
    outline: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: Lora, sans-serif;
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
      <Home />
      <Portfolio />
      <Skills />
      <ContactPage />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
