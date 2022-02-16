import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import * as Styled from './HeaderStyle';

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Styled.HeaderWrap className="Header">
      <Styled.Logo>Zinmaks</Styled.Logo>
      <Styled.Navbar isOpen={menuOpen} className="navbar">
        <Styled.StyledLink to="About" spy smooth>About Me</Styled.StyledLink>
        <Styled.StyledLink to="Portfolio" spy smooth>Portfolio</Styled.StyledLink>
        <Styled.StyledLink to="Skills" spy smooth>Skills</Styled.StyledLink>
        <Styled.StyledLink to="Contact" spy smooth>Contact Me</Styled.StyledLink>
      </Styled.Navbar>
      <Styled.MenuButton onClick={toggleMenu}>
        <HamburgerIcon open={menuOpen} />
      </Styled.MenuButton>
    </Styled.HeaderWrap>
  );
}

export default Header;
