import React from 'react';
import { FaDownload } from 'react-icons/fa';
import * as Styled from './AboutMeStyle';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ResumeFile from '../../assets/Resume.docx';

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
          Web Developer located in Chicago, IL.
        </Styled.AboutMeText>
        <Styled.Resume href={ResumeFile} download>
          <Styled.Circle>
            <FaDownload />
          </Styled.Circle>
          <Styled.ResumeBtnText>My Resume</Styled.ResumeBtnText>
          <Styled.ResumeBtnHover>Download</Styled.ResumeBtnHover>
        </Styled.Resume>
      </Styled.Info>
    </Styled.AboutMeWrap>
  );
}

export default AboutMe;
