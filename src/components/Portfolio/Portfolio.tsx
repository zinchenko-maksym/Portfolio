import React from 'react';
import styled from 'styled-components';
import memoryGameImg from '../../assets/memory-game.png';

const PortfolioWrap = styled.main`
  padding-top: 100px;
`;
const Project = styled.article`
  margin: 0px auto  40px;
  width: 80%;
  background-color: ${(props) => props.theme.mainColors.medium};
`;
const ProjectLink = styled.a`
  display: flex;
  height: auto;
  width: 100%;
`;
const ProjectImage = styled.img`
  width: 100%;
`;
const ProjectDescription = styled.div`
  height: 200px;
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
        <ProjectLink href="https://memory-cards-zm.herokuapp.com">
          <ProjectImage src={memoryGameImg} />
        </ProjectLink>
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
        <ProjectLink href="https://memory-cards-zm.herokuapp.com">
          <ProjectImage src={memoryGameImg} />
        </ProjectLink>
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
