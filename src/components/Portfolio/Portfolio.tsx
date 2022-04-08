import React from 'react';
import memoryGameImg from '../../assets/memory-game.png';
import countriesImg from '../../assets/Countries.png';
import rockImg from '../../assets/rock-paper-scissors.png';
import entertainImg from '../../assets/Entertainment.png';
import * as Styled from './PortfolioStyle';
import Project from './Project/Project';

function Portfolio() {
  return (
    <Styled.PortfolioWrap id="Portfolio">
      <Styled.PortfolioTitle>Portfolio projects</Styled.PortfolioTitle>
      <Project
        adress="https://master.d3sbyiqrv7e0om.amplifyapp.com"
        image={rockImg}
        title="Rock Paper Scissors Game"
        usedTools="React | Redux | Styled Components"
      />
      <Project
        adress="https://master.doged4qnm8399.amplifyapp.com"
        image={entertainImg}
        title="Entertainment App"
        usedTools="React | Redux | NodeJS | Express"
      />
      <Project
        adress="https://frontendmentorcountries.herokuapp.com/main"
        image={countriesImg}
        title="Countries App"
        usedTools="React | TypesScript | Redux | Rest Api"
      />
      <Project
        adress="https://memory-cards-zm.herokuapp.com"
        image={memoryGameImg}
        title="Memory Game"
        usedTools="React | NodeJS | Express"
      />
    </Styled.PortfolioWrap>
  );
}

export default Portfolio;
