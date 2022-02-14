import React from 'react';
import styled from 'styled-components';
import memoryGameImg from '../../assets/memory-game.png';

const PortfolioWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.mainColors.secondary};
  padding: 40px 0;
`;
const Project = styled.a`
  width: 80%;
  margin: 20px 0;
  padding: 2px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(props) => props.theme.textColors.secondary};
`;
const ProjectImage = styled.img`
  border-radius: px;
  width: 100%;
`;
const ProjectDescription = styled.div`
  margin: 10px 15px 20px;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const ProjectTitle = styled.h2`
  text-align: start;
`;
const ProjectTools = styled.ul`
`;
function Portfolio() {
  return (
    <PortfolioWrap id="Portfolio">
      <Project href="https://memory-cards-zm.herokuapp.com">
        <ProjectImage src={memoryGameImg} />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools> React | NodeJS | Express</ProjectTools>
        </ProjectDescription>
      </Project>
      <Project href="https://memory-cards-zm.herokuapp.com">
        <ProjectImage src={memoryGameImg} />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools> React | NodeJS</ProjectTools>
        </ProjectDescription>
      </Project>
      <Project href="https://memory-cards-zm.herokuapp.com">
        <ProjectImage src={memoryGameImg} />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools> React | NodeJS | Express</ProjectTools>
        </ProjectDescription>
      </Project>
      <Project href="https://memory-cards-zm.herokuapp.com">
        <ProjectImage src={memoryGameImg} />
        <ProjectDescription>
          <ProjectTitle>Memory Game</ProjectTitle>
          <ProjectTools> React | NodeJS | Express</ProjectTools>
        </ProjectDescription>
      </Project>
    </PortfolioWrap>
  );
}

export default Portfolio;
