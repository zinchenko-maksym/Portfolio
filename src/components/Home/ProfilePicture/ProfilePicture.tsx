import React from 'react';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithubSquare,
} from 'react-icons/fa';
import * as Styled from './ProfilePictureStyle';
import myPhoto from '../../../assets/MyPhoto.jpg';
import SocialLink from '../../SocialLink/SocialLink';

function ProfilePicture() {
  return (
    <Styled.ProfilePicture>
      <Styled.Photo src={myPhoto} />
      <Styled.Socials>
        <SocialLink adress="https://t.me/Maksym_Zinchenko">
          <FaTelegramPlane />
        </SocialLink>
        <SocialLink adress="https://www.facebook.com/maksym.zinchenko.54">
          <FaFacebookF />
        </SocialLink>
        <SocialLink adress="https://github.com/maklaut007">
          <FaGithubSquare />
        </SocialLink>
        <SocialLink adress="https://github.com/maklaut007">
          <FaLinkedinIn />
        </SocialLink>
      </Styled.Socials>
    </Styled.ProfilePicture>
  );
}

export default ProfilePicture;
