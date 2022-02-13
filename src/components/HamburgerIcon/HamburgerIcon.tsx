import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`
  display: none;
  @media (max-width: 767px){
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
  }
  
`;
const Burger = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColors.secondary};
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

function HamburgerIcon() {
  return (
    <Hamburger>
      <Burger />
      <Burger />
      <Burger />
    </Hamburger>
  );
}

export default HamburgerIcon;
