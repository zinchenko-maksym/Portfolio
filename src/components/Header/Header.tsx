import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrap = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  font-size:  1.2em;
  background-color: #3687FF;
  color: #fff;
  font-weight: 600;
  align-items: center;
`;
const Navbar = styled.nav`
  display: flex;
  width: 70%;
  justify-content: space-around;
`;
const Logo = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  font-family: "Mistral";
  font-size: 1.5em;
`;
function Header() {
  return (
    <HeaderWrap className="Header">
      <Logo>Zinmax</Logo>
      <Navbar className="navbar">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;
