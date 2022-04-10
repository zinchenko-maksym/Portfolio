import styled from 'styled-components';

interface MenuButton {
  isCurrent?: boolean;
}
export const PortfolioWrap = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.mainColors.secondary};
  padding: 40px 0;
  font-size:  1.2em;
  
`;
export const ProjectList = styled.section`
  height: 500px;   /* change */
  display: flex;
  position: relative;
`;
export const ProjectWrap = styled.article<MenuButton>`
  display: flex;
  top: 50%;
  position: absolute;
`;
export const ProjectWrapCenter = styled(ProjectWrap)`
  width: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:2;
`;
export const ProjectWrapLeft = styled(ProjectWrap)`
  width: 40%;
  opacity: 50%;
  left:20px;
  transform: translate(0, -50%);
`;
export const ProjectWrapRight = styled(ProjectWrap)`
  width: 40%;
  opacity: 50%;
  right: 20px;
  transform: translate(0, -50%);
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
