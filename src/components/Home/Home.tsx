import React from 'react';
import { FaDownload } from 'react-icons/fa';
import * as Styled from './HomeStyle';
import ProfilePicture from './ProfilePicture/ProfilePicture';

function Home() {
  return (
    <Styled.HomeWrap>
      <ProfilePicture />
      <Styled.AboutMe>
        <Styled.AboutMeHeader>
          Hello! I&apos;m
          <br />
          <Styled.MyName> Maksym Zinchenko</Styled.MyName>
        </Styled.AboutMeHeader>
        <Styled.AboutMeText>
          Web Developer located in Chicago, IL.
        </Styled.AboutMeText>
      </Styled.AboutMe>
      <Styled.Resume href="https://docs.google.com/uc?export=download&id=1_SR1_un469Hdmwk6gcKbu3ExSnllUbAD">
        <Styled.Circle><FaDownload /></Styled.Circle>
        {' '}
        <Styled.ResumeBtnText>My Resume</Styled.ResumeBtnText>
        <Styled.ResumeBtnHover>Download</Styled.ResumeBtnHover>
      </Styled.Resume>
    </Styled.HomeWrap>
  );
}

export default Home;
