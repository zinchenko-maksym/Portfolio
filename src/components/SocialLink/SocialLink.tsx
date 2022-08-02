import React from 'react';
import * as Styled from './SocialLinkStyle';

interface SocialLinkProps {
  adress: string;
  children: JSX.Element;
}
function SocialLink({ adress, children }: SocialLinkProps) {
  return (
    <Styled.SocialLink href={adress} target="_blank">
      <Styled.MainCircle>{children}</Styled.MainCircle>
      <Styled.PulsingCircle />
    </Styled.SocialLink>
  );
}

export default SocialLink;
