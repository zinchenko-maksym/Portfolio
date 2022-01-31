import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const FooterWrap = styled.footer`
  background-color: ${(props) => props.theme.mainColors.dark};
  display: flex;
  justify-content: center;
`;
const SocialLink = styled.a`
  display: flex;
  color: ${(props) => props.theme.textColors.main};
  margin: 5px 10px;
  font-size: 1.8rem;
  text-align: center;
`;
function Footer() {
  return (
    <FooterWrap>
      <SocialLink href="https://t.me/Maksym_Zinchenko">
        <FaTelegramPlane />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/maksym.zinchenko.54">
        <FaFacebookF />
      </SocialLink>
      <SocialLink href="https://github.com/maklaut007">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/maksym-zinchenko-818390175/">
        <FaLinkedinIn />
      </SocialLink>
    </FooterWrap>
  );
}

export default Footer;
