import styled from 'styled-components';

export const PortfolioWrap = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => { return props.theme.mainColors.secondary; }};
  align-items: center;
  font-size: 1em;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
  @media (min-width: 1024px) {
    padding: 40px 5vw;
  }
`;
export const ProjectList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Project = styled.a`
  margin-top: 20px;
  cursor: pointer;
  color: ${(props) => { return props.theme.textColors.secondary; }};
  @media (min-width: 1024px) {
    max-width: 40vw;
  }
  @media (min-width: 1440px) {
    border-radius: 10px;
    box-shadow: 0 2px 20px #555;
    overflow: hidden;
    margin: 40px 0;
  }
`;
export const PortfolioTitle = styled.h1`
  font-size: 2em;
  @media (min-width: 768px) {
    font-size: 2.2em;
  }
  @media (min-width: 1024px) {
    font-size: 2.6em;
    margin-bottom: 20px;
  }
`;
