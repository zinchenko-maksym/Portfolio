import styled from 'styled-components';
import { Link } from 'react-scroll';

interface MenuButton {
  isOpen: boolean;
}

export const HeaderWrap = styled.header`
  display: flex;
  font-size:  1.2em;
  background-color: ${(props) => props.theme.mainColors.white};
  color: ${(props) => props.theme.textColors.secondary};
  font-weight: 600;
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  padding: 12px 20px;
  @media (min-width: 1024px){
    padding: 16px 20px;
  }
`;
export const Navbar = styled.nav<MenuButton>`
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
    right: 0%;
    width: 100%;
    background-color: ${(props) => props.theme.mainColors.white};
    padding: 5px 10px;
  }
`;
export const Logo = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  font-family: "Mistral";
  font-size: 1.5em;
  @media (min-width: 767px){
    font-size: 1.8em;
  }
  @media (min-width: 1024px){
    font-size: 2em;
  }
  @media (min-width: 1400px){
    font-size: 2.6em;
  }
`;
export const MenuButton = styled.div`
  font-size: 2em;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColors.secondary};
  padding: 8px;
  width: 50%;
  text-align: right;
  cursor: pointer;
  @media (min-width: 767px){
    width: 25%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px){
    font-size: 1.2em;
  }
  @media (min-width: 1400px){
    font-size: 1.4em;
  }
`;
