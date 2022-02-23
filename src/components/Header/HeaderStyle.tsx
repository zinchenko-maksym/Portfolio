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
    padding: 6px 20px;
  }
`;
export const Logo = styled.div`
  display: flex;
  width: 120px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-family: "Mistral";
  font-size: 1.5em;
  cursor: pointer;
  @media (min-width: 768px){
    margin-left: 50px;
    font-size: 1.8em;
  }
  @media (min-width: 1024px){
    font-size: 2em;
  }
  @media (min-width: 1400px){
    margin-left: 80px;
    font-size: 2.1em;
  }
`;
export const Navbar = styled.nav<MenuButton>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  width: 70%;
  @media (min-width: 768px){
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 20px 0 auto;
  }
  @media (min-width: 1024px){
    margin: 0 10% 0 auto;
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

export const MenuButton = styled.div`
  font-size: 2em;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColors.secondary};
  padding: 8px;
  text-align: right;
  cursor: pointer;

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
    transition: color 0.2s;
    &:hover{
    color: ${(props) => props.theme.mainColors.primary};
    }
  }
  @media (min-width: 1024px){
    font-size: 1em;
  }
`;
