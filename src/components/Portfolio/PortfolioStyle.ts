import styled from 'styled-components';

export const PortfolioWrap = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainColors.secondary};
  font-size:  1.2em;
  @media (min-width: 768px) {
    padding-bottom: 50px ;
  }
  @media (min-width: 1024px) {
    padding-bottom: 70px ;
  }
`;
export const ProjectList = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding:  0 40px ;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const ProjectWrapCenter = styled.a`
@media (min-width: 768px) {
  display: flex;
  width: 50%;
  z-index:2;
  }
  
`;
export const ProjectWrapSide = styled.article`
  @media (min-width: 768px) {
    width: 36%;
    position: absolute;
    box-shadow: inset 1px 1px 4px rgba(255,255,255,0.5);
    display: flex;
    top: 10%;
    @media (min-width: 1024px) {
      
    }
  }
`;
export const ProjectWrapLeft = styled(ProjectWrapSide)`
  @media (min-width: 768px) {
    left:40px;
  }
  @media (min-width: 1024px) {
    left: 5%;
  }
`;
export const ProjectWrapRight = styled(ProjectWrapSide)`
  @media (min-width: 768px) {
    right:40px;
  }
  @media (min-width: 1024px) {
    right: 5%;
  }
`;
export const PortfolioTitle = styled.h1`
  color: ${(props) => props.theme.textColors.secondary};
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  font-size: 1.8em;
  margin: 30px 0;
  @media (min-width: 768px) {
    margin: 40px 0;
    text-align: center;
    font-size: 2em;
  }
  @media (min-width: 1024px) {
    margin: 50px 0;
    font-size: 3.2em;
  }
`;
