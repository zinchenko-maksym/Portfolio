import React from 'react';
import styled from 'styled-components';

interface IconProps {
  open: boolean;
}

const Hamburger = styled.div<IconProps>`
  display: none;
  @media (max-width: 767px){
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
  }
  transform: ${(props) => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-out;
`;
const Burger = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColors.secondary};
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

function HamburgerIcon({ open }: IconProps) {
  return (
    <Hamburger open={open}>
      <Burger />
      <Burger />
      <Burger />
    </Hamburger>
  );
}

export default HamburgerIcon;
