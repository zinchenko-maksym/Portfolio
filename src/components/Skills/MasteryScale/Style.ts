import styled, { keyframes } from 'styled-components';

interface ScaleProps {
  percent: number;
}

export const SkillMasteryScale = styled.div`
  display: flex;
  height: 4px;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(0,0,0, 0.3);

  @media (min-width: 768px) {
    height: 7px;
  }
  @media (min-width: 1024px) {
    right: 12px;
  }
  @media (min-width: 1440px) {
    margin-top: 10px;
  }
`;
export const SkillMasteryFill = styled.div<ScaleProps>`
  height: 100%;
  border-radius: 10px;
  width: ${(props) => (props.percent)}%;
  background-color: ${(props) => props.theme.mainColors.secondary};
  transition: width 0.8s ease-out;
`;

export const OpenSubskillsBtn = styled.div`

`;
