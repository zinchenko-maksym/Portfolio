import React from 'react';
import styled from 'styled-components';

const BackgroundWrap = styled.div`
  width: 100%;
  position: absolute;
  background-color: #3687FF;
  height: 100%;   /*fix this*/
  top: 0;
  
  z-index: -1;
`;

function Background() {
  return (
    <BackgroundWrap>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            stroke="#fff"
            id="tringleLeft"
            d="m0,0 l399,0 l-399,399 l0,-399z"
            opacity="40%"
            fill="#fff"
          />
          <path
            stroke="#fff"
            id="tringleRight"
            d="m399,0l-399,0l399,399l0,-399z"
            opacity="50%"
            fill="#fff"
          />
        </g>
      </svg>
    </BackgroundWrap>
  );
}

export default Background;
