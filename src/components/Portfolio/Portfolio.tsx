import React from 'react';
import styled from 'styled-components';
import memoryGameImg from '../../assets/memory-game.png';
import countriesImg from '../../assets/Countries.png';

const PortfolioWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.mainColors.secondary};
  padding: 40px 0;
  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;
const Project = styled.a`
  width: 80%;
  margin: 20px 0;
  padding: 2px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(props) => props.theme.textColors.secondary};
  @media (min-width: 1024px) {
    width: 40%;
  }
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
      <Project href="https://frontendmentorcountries.herokuapp.com/main">
        <ProjectImage src={countriesImg} />
        <ProjectDescription>
          <ProjectTitle>Countries App</ProjectTitle>
          <ProjectTools> React | TypesScript | Redux | Rest Api</ProjectTools>
        </ProjectDescription>
      </Project>
    </PortfolioWrap>
  );
}

export default Portfolio;
