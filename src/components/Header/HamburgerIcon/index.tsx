import React from 'react';
import styled from 'styled-components';
import * as Styled from './style';

interface IconProps {
  open: boolean;
}

function HamburgerIcon({ open }: IconProps) {
  return (
    <Styled.Hamburger>
      <Styled.SliceTop open={open} />
      <Styled.SliceMiddle open={open} />
      <Styled.SliceBottom open={open} />
    </Styled.Hamburger>
  );
}

export default HamburgerIcon;
