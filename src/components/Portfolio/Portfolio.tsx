import React from 'react';
import memoryGameImg from '../../assets/memory-game.png';
import countriesImg from '../../assets/Countries.png';
import rockImg from '../../assets/rock-paper-scissors.png';
import entertainImg from '../../assets/Entertainment.png';
import * as Styled from './PortfolioStyle';

function Portfolio() {
  return (
    <Styled.PortfolioWrap id="Portfolio">
      <Styled.PortfolioTitle>Portfolio projects</Styled.PortfolioTitle>
      <Styled.Project href="https://master.d3sbyiqrv7e0om.amplifyapp.com">
        <Styled.ProjectImageWrap>
          <Styled.ProjectImage src={rockImg} />
          <Styled.ProjectImageHover>
            <Styled.OpenPage>Open Project</Styled.OpenPage>
          </Styled.ProjectImageHover>
        </Styled.ProjectImageWrap>
        <Styled.ProjectDescription>
          <Styled.ProjectTitle>Rock Paper Scissors Game</Styled.ProjectTitle>
          <Styled.ProjectTools> React | Redux | Styled Components</Styled.ProjectTools>
        </Styled.ProjectDescription>
      </Styled.Project>
      <Styled.Project href="https://frontendmentorcountries.herokuapp.com/main">
        <Styled.ProjectImageWrap>
          <Styled.ProjectImage src={countriesImg} />
          <Styled.ProjectImageHover>
            <Styled.OpenPage>Open Project</Styled.OpenPage>
          </Styled.ProjectImageHover>
        </Styled.ProjectImageWrap>
        <Styled.ProjectDescription>
          <Styled.ProjectTitle>Countries App</Styled.ProjectTitle>
          <Styled.ProjectTools> React | TypesScript | Redux | Rest Api</Styled.ProjectTools>
        </Styled.ProjectDescription>
      </Styled.Project>
      <Styled.Project href="https://memory-cards-zm.herokuapp.com">
        <Styled.ProjectImageWrap>
          <Styled.ProjectImage src={memoryGameImg} />
          <Styled.ProjectImageHover>
            <Styled.OpenPage>Open Project</Styled.OpenPage>
          </Styled.ProjectImageHover>
        </Styled.ProjectImageWrap>
        <Styled.ProjectDescription>
          <Styled.ProjectTitle>Memory Game</Styled.ProjectTitle>
          <Styled.ProjectTools> React | NodeJS | Express</Styled.ProjectTools>
        </Styled.ProjectDescription>
      </Styled.Project>
      <Styled.Project href="https://master.doged4qnm8399.amplifyapp.com">
        <Styled.ProjectImageWrap>
          <Styled.ProjectImage src={entertainImg} />
          <Styled.ProjectImageHover>
            <Styled.OpenPage>Open Project</Styled.OpenPage>
          </Styled.ProjectImageHover>
        </Styled.ProjectImageWrap>

        <Styled.ProjectDescription>
          <Styled.ProjectTitle>Entertainment App</Styled.ProjectTitle>
          <Styled.ProjectTools> React | Redux | NodeJS | Express</Styled.ProjectTools>
        </Styled.ProjectDescription>
      </Styled.Project>
    </Styled.PortfolioWrap>
  );
}

export default Portfolio;
