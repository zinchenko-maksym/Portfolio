import React from 'react';
import styled from 'styled-components';
import Background from '../Background/Background';

const HomeWrap = styled.div`
  display: flex;
  width: 100%;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  align-items: center;
`;
const Photo = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background-color: green;
  border-radius: 120px;
`;
const AboutMeHeader = styled.h1`
  font-size: 1.7em;
  margin: 0.3em 0;
  text-align: center;
  line-height: 1.4em;
  margin: 20px auto 6px;
`;
const AboutMe = styled.div`
padding: 0 1em;
  color: black;
`;

const AboutMeText = styled.p`
  margin: 0;
  color: #fff;
`;
const Resume = styled.button`
  align-self: flex-start;
  margin: 16px;
  width: 186px;
  height: 40px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.32);
  background-color: #fff;
  font-size: 0.9em;
`;
const NextPageLink = styled.a`
  margin: 30px 10px 10px 10px;
  color: #fff;
  align-self: flex-end;
`;

function Home() {
  return (
    <HomeWrap>
      <Photo />
      <AboutMe>
        <AboutMeHeader> Hi, I&apos;m Maksym Web Developer</AboutMeHeader>
        <AboutMeText>
          I started learning web development couple years ago when I was living in Ukraine.
          Now I&apos;m located in Chicago US.
          You can check my portfolio or download my resume.
        </AboutMeText>
      </AboutMe>
      <Resume>Download resume</Resume>
      <NextPageLink href="#">
        Check my portfolio -
        {'>'}
      </NextPageLink>
      <Background />
    </HomeWrap>
  );
}

export default Home;
