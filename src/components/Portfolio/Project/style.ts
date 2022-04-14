import styled from 'styled-components';

interface MenuButton {
  place: string;
}

export const Project = styled.section<MenuButton>`
  display: ${(props) => (props.place === 'hidden' ? 'none' : 'block')};
  width: 100%;
  border-radius: 4px;
  text-decoration: none;
  color: ${(props) => props.theme.textColors.secondary};
  cursor: pointer;
`;
export const ProjectImageWrap = styled.section`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
`;

export const ProjectImage = styled.img`

  width: 100%;
  border-radius: 8px;
  vertical-align: top;
`;

export const ProjectImageHover = styled.div<MenuButton>`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.place === 'center' ? '0' : '80%')};
    background-color: black;
    transition: opacity 0.3s ease-out;
    background-color: rgba(0,0,0,0.7);
    font-weight: 600;
    letter-spacing: 1px;
    &:hover{
      opacity: ${(props) => (props.place === 'center' ? '100%' : '50%')};
    }
  }
  
`;

export const OpenPage = styled.div<MenuButton>`
  @media (min-width: 768px) {
    display: ${(props) => (props.place === 'center' ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 20%;
    border-radius: 100px;
    background-color: rgba(255,255,255,0.2);
    color: ${(props) => props.theme.textColors.primary};
    text-transform: uppercase;
    font-size: 1em;
    font-family: 'Outfit', sans-serif;
  } 
`;

export const ProjectDescription = styled.div<MenuButton>`
  margin: 10px 0 30px;
  
  flex-flow: column nowrap;
  width: 100%;
  @media (min-width: 768px) {
    display: ${(props) => (props.place === 'center' ? 'flex' : 'none')};
    margin: 20px 0;
  }
`;
export const ProjectTitle = styled.h2`
  text-align: start;
  font-family: 'Outfit', sans-serif;
`;
export const ProjectTools = styled.ul`
`;
