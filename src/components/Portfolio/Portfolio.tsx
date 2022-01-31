import React from 'react';
import styled from 'styled-components';

const PortfolioWrap = styled.main`
  padding-top: 100px;
`;
const Project = styled.article`
  margin: 0px auto  40px;
  width: 80%;
  background-color: ${(props) => props.theme.mainColors.medium};
`;
const ProjectImage = styled.img`
  height: 300px;
  width: 100%;
`;
const ProjectDescription = styled.div`
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const ProjectTitle = styled.h2`
  text-align: center;
`;
const ProjectTools = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
`;
const Tool = styled.li`
  margin: 10px 0;
`;
function Portfolio() {
  return (
    <PortfolioWrap>
      <Project>
        <ProjectImage />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools>
            <Tool>React</Tool>
            <Tool>React</Tool>
            <Tool>React</Tool>
          </ProjectTools>
        </ProjectDescription>
      </Project>
      <Project>
        <ProjectImage />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools>
            <Tool>React</Tool>
            <Tool>React</Tool>
            <Tool>React</Tool>
          </ProjectTools>
        </ProjectDescription>
      </Project>
    </PortfolioWrap>
  );
}

export default Portfolio;
