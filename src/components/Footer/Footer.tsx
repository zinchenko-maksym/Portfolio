import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTelegram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const FooterWrap = styled.footer`
  background-color: #3687FF;
  display: flex;
  justify-content: center;
`;
const SocialLink = styled.a`
  color: white;
  margin: 5px;
  font-size: 0.9rem;
`;
function Footer() {
  return (
    <FooterWrap>
      <SocialLink href="https://www.facebook.com/maksym.zinchenko.54">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </SocialLink>
      <SocialLink href="https://t.me/Maksym_Zinchenko">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/maksym-zinchenko-818390175/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </SocialLink>
      <SocialLink href="https://github.com/maklaut007">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </SocialLink>
    </FooterWrap>
  );
}

export default Footer;
