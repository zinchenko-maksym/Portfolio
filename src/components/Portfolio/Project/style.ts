import styled from 'styled-components';

export const ProjectDescription = styled.div`
    @media (min-width: 1440px){
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 20px 30px 50px 30px;
      transition: opacity 0.6s ease-out, bottom 0.5s ease-out;
      background-color: ${(props) => props.theme.mainColors.tertiary};
      color: white;
      bottom: -40%;
      left: 0px;
      width: 100%;
      opacity: 0%;
    }
`;

export const ProjectInnerShadow = styled.section`
  opacity: 0;
  @media (min-width: 1440px){
  transition: opacity 0.6s ease-out;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  }
  
`;
export const Project = styled.section`
  margin-bottom: 30px;
  width: 100%;
  position: relative;
  &:hover {
    ${ProjectDescription} {
      transition: opacity 0.6s ease-out, bottom 0.5s ease-out;
      bottom: 0;
      opacity: 100%;
    }
    ${ProjectInnerShadow} {
      transition: opacity 0.6s ease-out;
      opacity: 50%;
    }
  }
  @media (min-width: 1440px){
    margin-bottom: 0;
  }
`;

export const ProjectImageWrap = styled.section`
  box-shadow: inset 0px 0px 2px white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 20px #555;
  @media (min-width: 1440px){
    box-shadow: none;
  }
`;

export const ProjectImage = styled.img`
  width: 90vw;
  vertical-align: top;
  @media (min-width: 1024px){
    width: 100%;
    }
`;

export const ProjectTitle = styled.h2`
  margin-top: 10px;
  text-align: start;
  font-family: 'Outfit', sans-serif;
  font-size: 1.4em;
  
`;
export const ProjectTools = styled.ul`
`;
