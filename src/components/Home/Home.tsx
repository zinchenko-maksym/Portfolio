import React from 'react';
import styled from 'styled-components';

const HomeWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  align-items: center;
  color: #2196F3;
`;
const Photo = styled.img`
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 120px;
`;
const AboutMeHeader = styled.h1`
  font-size: 1.2em;
  margin: 0.3em 0;
`;
const AboutMe = styled.div`
padding: 0 1em;
  color: black;
`;

const AboutMeText = styled.p`
  margin: 0;
`;
const Resume = styled.button`
  margin: 0;
`;
function Home() {
  return (
    <HomeWrap>
      <Photo />
      <AboutMe>
        <AboutMeHeader> Hello, my name is Maksym</AboutMeHeader>
        <AboutMeText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium voluptates doloribus quasi nesciunt, esse earum! Esse vel
          saepe eaque doloribus ratione eius dolor obcaecati vitae iure!
          Porro laudantium est quibusdam.
        </AboutMeText>
      </AboutMe>
      <Resume>Download my resume</Resume>
      <div>
        Look at my portfolio -
        {'>'}
      </div>
    </HomeWrap>
  );
}

export default Home;
