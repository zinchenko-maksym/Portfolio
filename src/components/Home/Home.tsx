import React from 'react';
import { FaDownload } from 'react-icons/fa';
import * as Styled from './HomeStyle';

function Home() {
  return (
    <Styled.HomeWrap>
      <Styled.Photo />
      <Styled.AboutMe>
        <Styled.AboutMeHeader> Hi, I&apos;m Maksym Web Developer</Styled.AboutMeHeader>
        <Styled.AboutMeText>
          I started learning web development couple years ago when I was living in Ukraine.
          Now I&apos;m located in Chicago US.
          You can check my portfolio or download my resume.
        </Styled.AboutMeText>
      </Styled.AboutMe>
      <Styled.Resume href="https://docs.google.com/uc?export=download&id=1_SR1_un469Hdmwk6gcKbu3ExSnllUbAD">
        <Styled.Circle><FaDownload /></Styled.Circle>
        {' '}
        <Styled.ResumeBtnText>My Resume</Styled.ResumeBtnText>
        <Styled.ResumeBtnHover>Download</Styled.ResumeBtnHover>
      </Styled.Resume>
      <Styled.NextPageLink to="/portfolio">
        Check portfolio
      </Styled.NextPageLink>
    </Styled.HomeWrap>
  );
}

export default Home;
