import React from 'react';
import memoryGameImg from '../../assets/memory-game.png';
import countriesImg from '../../assets/Countries.png';
import rockImg from '../../assets/rock-paper-scissors.png';
import entertainImg from '../../assets/Entertainment.png';
import * as Styled from './PortfolioStyle';
import Project from './Project/Project';

function Portfolio() {
  const projects = [
    {
      adress: 'https://master.d3sbyiqrv7e0om.amplifyapp.com',
      image: rockImg,
      title: 'Rock Paper Scissors Game',
      usedTools: 'React | Redux | Styled Components',
    },
    {
      adress: 'https://master.doged4qnm8399.amplifyapp.com',
      image: entertainImg,
      title: 'Entertainment App',
      usedTools: 'React | Redux | NodeJS | Express',
    },
    {
      adress: 'https://main.d2fv15eroqkxmv.amplifyapp.com/main',
      image: countriesImg,
      title: 'Countries App',
      usedTools: 'React | TypesScript | Redux | Rest Api',
    },
    {
      adress: 'https://main.d2u7kn9w5l2vdz.amplifyapp.com',
      image: memoryGameImg,
      title: 'Memory Game',
      usedTools: 'React | NodeJS | Express',
    },
  ];
  const mapProjects = projects.map((item) => {
    return (
      <Styled.Project target="_blank" href={item.adress} key={item.title}>
        <Project
          image={item.image}
          title={item.title}
          usedTools={item.usedTools}
        />
      </Styled.Project>
    );
  });

  return (
    <Styled.PortfolioWrap id="Portfolio">
      <Styled.PortfolioTitle>Portfolio projects</Styled.PortfolioTitle>
      <Styled.ProjectList>{mapProjects}</Styled.ProjectList>
    </Styled.PortfolioWrap>
  );
}

export default Portfolio;
