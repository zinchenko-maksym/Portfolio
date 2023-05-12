import React from 'react';
import { FaDownload } from 'react-icons/fa';
import * as Styled from './AboutMeStyle';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ResumeFile from '../../assets/Resume.pdf';

function AboutMe() {
  return (
    <Styled.AboutMeWrap id="About">
      <ProfilePicture />
      <Styled.Info>
        <Styled.AboutMeHeader>
          Hello! I&apos;m
          <br />
          <Styled.MyName> Maksym Zinchenko</Styled.MyName>
        </Styled.AboutMeHeader>
        <Styled.AboutMeText>
          Full Stack Developer located in Chicago, IL.
        </Styled.AboutMeText>
        <Styled.Resume target="_blank" href="https://docs.google.com/document/d/18r0XNVw5_TXRoouKsc7p1IKCf1hbMH6W/edit?usp=sharing&ouid=108817685570052935018&rtpof=true&sd=true" download>
          <Styled.Circle>
            <FaDownload />
          </Styled.Circle>
          <Styled.ResumeBtnText>My Resume</Styled.ResumeBtnText>
          <Styled.ResumeBtnHover>Open doc</Styled.ResumeBtnHover>
        </Styled.Resume>
      </Styled.Info>
    </Styled.AboutMeWrap>
  );
}

export default AboutMe;
