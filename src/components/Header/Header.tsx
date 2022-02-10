import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

interface MenuButton {
  isOpen: boolean;
}

const HeaderWrap = styled.header`
  display: flex;
  height: 60px;
  font-size:  1.2em;
  background-color: ${(props) => props.theme.mainColors.dark};
  color: ${(props) => props.theme.textColors.main};
  font-weight: 600;
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: space-between;
`;
const Navbar = styled.nav<MenuButton>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  width: 70%;
  justify-content: space-around;
  @media (min-width: 767px){
    display: flex;
  }
  @media (max-width: 767px){
    height: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    align-items: flex-end;
    top: 99%;
    width: 100%;
    background-color: ${(props) => props.theme.mainColors.dark};
    padding: 5px 10px;
  }
`;
const Logo = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  font-family: "Mistral";
  font-size: 1.5em;
`;
const MenuButton = styled.div`
  margin-right: 10px;
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColors.main};
  padding: 8px;
  width: 50%;
  text-align: right;
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HeaderWrap className="Header">
      <Logo>Zinmaks</Logo>
      <Navbar isOpen={menuOpen} className="navbar">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Navbar>
      <MenuButton onClick={toggleMenu}>
        <HamburgerIcon />
      </MenuButton>
    </HeaderWrap>
  );
}

export default Header;
