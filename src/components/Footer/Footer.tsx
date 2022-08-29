import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const FooterWrap = styled.footer`
  background-color: ${(props) => {
    return props.theme.mainColors.primary;
  }};
  display: flex;
  justify-content: center;
`;
const SocialLink = styled.a`
  display: flex;
  position: relative;
  color: ${(props) => {
    return props.theme.mainColors.white;
  }};
  margin: 18px 16px;
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: 768px) {
    margin: 20px 3%;
  }
  @media (min-width: 1440px) {
    margin: 20px 3%;
  }
  top: 0;
  transition: top ease-in 0.2s;
  &:hover {
    top: -4px;
  }
`;
function Footer() {
  return (
    <FooterWrap>
      <SocialLink target="_blank" href="https://t.me/Maksym_Zinchenko">
        <FaTelegramPlane />
      </SocialLink>
      <SocialLink
        target="_blank"
        href="https://www.facebook.com/maksym.zinchenko.54"
      >
        <FaFacebookF />
      </SocialLink>
      <SocialLink target="_blank" href="https://github.com/maklaut007">
        <FaGithub />
      </SocialLink>
      <SocialLink
        target="_blank"
        href="https://www.linkedin.com/in/maksym-zinchenko-818390175/"
      >
        <FaLinkedinIn />
      </SocialLink>
    </FooterWrap>
  );
}

export default Footer;
