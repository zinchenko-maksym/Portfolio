import React, { useState } from 'react';
import memoryGameImg from '../../assets/memory-game.png';
import countriesImg from '../../assets/Countries.png';
import rockImg from '../../assets/rock-paper-scissors.png';
import entertainImg from '../../assets/Entertainment.png';
import * as Styled from './PortfolioStyle';
import Project from './Project/Project';

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      adress: 'https://frontendmentorcountries.herokuapp.com/main',
      image: countriesImg,
      title: 'Countries App',
      usedTools: 'React | TypesScript | Redux | Rest Api',
    },
    {
      adress: 'https://memory-cards-zm.herokuapp.com',
      image: memoryGameImg,
      title: 'Memory Game',
      usedTools: 'React | NodeJS | Express',
    },
  ];
  const handleSlideChange = (moveDirection: string) => {
    if (moveDirection === 'left') {
      if (currentSlide === 0) {
        setCurrentSlide(projects.length - 1);
      } else { setCurrentSlide(currentSlide - 1); }
    } else if (moveDirection === 'right') {
      if (currentSlide === projects.length - 1) {
        setCurrentSlide(0);
      } else { setCurrentSlide(currentSlide + 1); }
    }
  };
  const mapProjects = projects.map((item, index) => {
    if (index === currentSlide - 1 || (currentSlide === 0 && index === projects.length - 1)) {
      return (
        <Styled.ProjectWrapLeft onClick={() => handleSlideChange('left')} key={item.title}>
          <Project
            adress={item.adress}
            image={item.image}
            title={item.title}
            usedTools={item.usedTools}
          />
        </Styled.ProjectWrapLeft>
      );
    }
    if (index === currentSlide) {
      return (
        <Styled.ProjectWrapCenter key={item.title} isCurrent>
          <Project
            adress={item.adress}
            image={item.image}
            title={item.title}
            usedTools={item.usedTools}
          />
        </Styled.ProjectWrapCenter>
      );
    }
    if (index === currentSlide + 1 || (currentSlide === projects.length - 1 && index === 0)) {
      return (
        <Styled.ProjectWrapRight onClick={() => handleSlideChange('right')} key={item.title}>
          <Project
            adress={item.adress}
            image={item.image}
            title={item.title}
            usedTools={item.usedTools}
          />
        </Styled.ProjectWrapRight>
      );
    }
    return null;
  });

  return (
    <Styled.PortfolioWrap id="Portfolio">
      <Styled.PortfolioTitle>Portfolio projects</Styled.PortfolioTitle>
      <Styled.ProjectList>{mapProjects}</Styled.ProjectList>
    </Styled.PortfolioWrap>
  );
}

export default Portfolio;
