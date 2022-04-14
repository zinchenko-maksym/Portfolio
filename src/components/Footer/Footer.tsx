import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const FooterWrap = styled.footer`
  background-color: ${(props) => props.theme.mainColors.primary};
  display: flex;
  justify-content: center;
`;
const SocialLink = styled.a`
  display: flex;
  position: relative;
  color: ${(props) => props.theme.mainColors.white};
  margin: 10px 16px;
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: 768px) {
    margin: 12px 3%;
  }
  top: 0;
  transition: top ease-in 0.3s;
  &:hover{
    top: -8px;
  }
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
