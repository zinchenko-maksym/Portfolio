import styled from 'styled-components';
import { Link } from 'react-scroll';

interface MenuButton {
  isOpen: boolean;
}

export const HeaderWrap = styled.header`
  display: flex;
  height: 60px;
  font-size:  1.2em;
  background-color: ${(props) => props.theme.mainColors.white};
  color: ${(props) => props.theme.textColors.secondary};
  font-weight: 600;
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
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
`;
export const MenuButton = styled.div`
  margin-right: 10px;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColors.secondary};
  padding: 8px;
  width: 50%;
  text-align: right;
  cursor: pointer;
`;
