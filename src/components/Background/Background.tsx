import React from 'react';
import styled from 'styled-components';

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: -webkit-linear-gradient(-130deg, ${(props) => props.theme.mainColors.light} 50%, ${(props) => props.theme.mainColors.dark} 52%);
  top: 0;
  left: 0;
  z-index: -1;
  
`;
const TriangleOne = styled.div`
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(-50deg, ${(props) => props.theme.mainColors.light} 50%, ${(props) => props.theme.mainColors.dark} 52%);
  opacity: 50%; 
`;

function Background() {
  return (
    <BackgroundWrap>
      <TriangleOne />
    </BackgroundWrap>
  );
}

export default Background;
