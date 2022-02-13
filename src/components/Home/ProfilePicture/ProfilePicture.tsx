import React from 'react';
import {
  FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaGithubSquare,
} from 'react-icons/fa';
import * as Styled from './ProfilePictureStyle';

function ProfilePicture() {
  return (
    <Styled.ProfilePicture>
      <Styled.Photo />
      <Styled.Socials>
        <Styled.SocialLink href="https://t.me/Maksym_Zinchenko">
          <FaTelegramPlane />
        </Styled.SocialLink>
        <Styled.SocialLink href="https://www.facebook.com/maksym.zinchenko.54">
          <FaFacebookF />
        </Styled.SocialLink>
        <Styled.SocialLink href="https://github.com/maklaut007">
          <FaGithubSquare />
        </Styled.SocialLink>
        <Styled.SocialLink href="https://www.linkedin.com/in/maksym-zinchenko-818390175/">
          <FaLinkedinIn />
        </Styled.SocialLink>
      </Styled.Socials>
    </Styled.ProfilePicture>
  );
}

export default ProfilePicture;
