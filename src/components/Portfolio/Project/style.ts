import styled from 'styled-components';

export const Project = styled.a`
  width: 80%;
  margin: 20px 0;
  padding: 2px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(props) => props.theme.textColors.secondary};
  border-radius: 20px;
  @media (min-width: 1024px) {
    width: 40%;
  }
`;
export const ProjectImageWrap = styled.section`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  border-radius: px;
  width: 100%;
  border-radius: 8px;
  vertical-align: top;
`;

export const ProjectImageHover = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0%;
    background-color: black;
    transition: opacity 0.3s ease-out;
    background-color: rgba(0,0,0,0.7);
    font-weight: 600;
    letter-spacing: 1px;
    &:hover{
      opacity: 100%;
    }
  }
  
`;

export const OpenPage = styled.div`
  @media (min-width: 1024px) {
    display: flex;
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

export const ProjectDescription = styled.div`
  margin: 10px 0;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;
export const ProjectTitle = styled.h2`
  text-align: start;
  font-family: 'Outfit', sans-serif;
`;
export const ProjectTools = styled.ul`
`;
export const PortfolioTitle = styled.h1`
  color: ${(props) => props.theme.textColors.secondary};
  letter-spacing: 1px;
  padding: 30px 10%;
  width: 100%;
  @media (min-width: 768px) {
    text-align: center;
    padding: 30px 0 70px;
  }
  @media (min-width: 768px) {
  font-size: 2em;
  }
  @media (min-width: 1024px) {
  font-size: 3em;
  }
`;
