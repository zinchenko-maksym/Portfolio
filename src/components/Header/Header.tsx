import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  width: 100%;
  padding: 20px 0;
  font-size:  1.2em;
  background-color: #2196F3;
  color: #fff;
  font-weight: 600;
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
`;
function Header() {
  return (
    <HeaderWrap className="Header">
      <Logo>Zinmax</Logo>
      <Navbar className="navbar">
        <div>Home</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;
