import styled from 'styled-components';
import { Link } from 'react-scroll';

interface MenuButton {
  isOpen: boolean;
}

export const Header = styled.header`
  position: relative;
  width: 100%;
`;
export const HeaderWrap = styled.div<MenuButton>`
  z-index: 100;
  display: flex;
  position: fixed;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden; 
  background-color: #fff;
  padding: 10px 20px;
  height: ${(props) => (props.isOpen ? '290px' : '60px')};
  transition: height 0.3s ease-out;
  @media (min-width: 768px){

  }
  @media (min-width: 1024px){
    padding: 15px 40px;
    height: 70px;
  }
  @media (min-width: 1400px){
    padding: 15px 80px;
  }
`;
export const Logo = styled.div`
  display: flex;
  font-family: "Mistral";
  font-size: 2.2em;
  font-weight: 700;
  
  cursor: pointer;
  background-color: #f3ec78;
  background-image: linear-gradient(5deg, #ffd700 50%, #0057b7 50%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;
export const Navbar = styled.nav<MenuButton>`
  padding: 20px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.6em;
  @media (min-width: 768px){
    font-size: 1.4em;
    font-weight: 700;
    justify-content: flex-end;
    flex-direction: row;
    width: 70%;
    padding: 0;
  }
`;

export const MenuButton = styled.div`

`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  padding: 8px;
  @media (min-width: 768px){
    padding: 0;
    margin: 6px 10px;
    transition: color 0.4s;
    &:hover{
      color: ${(props) => props.theme.mainColors.primary};
    }
  }
  @media (min-width: 1024px){
    margin: 6px 24px;
  }
  @media (min-width: 1400px){
    margin: 6px 3vw;
}
`;
