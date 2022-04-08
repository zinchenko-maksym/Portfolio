import styled from 'styled-components';

interface ScaleProps {
  percent: number;
}
interface SubSkillProps {
  $display: boolean;
  rotated?: boolean;
}

export const SkillWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90%;
  margin: 16px;
  color: ${(props) => props.theme.mainColors.white};
  @media (min-width: 768px) {
    width: 80%;
    max-width: 760px;

  }
  @media (min-width: 1440px) {
    width: 18vw;
    max-width: 760px;
  }
`;
export const SkillName = styled.p`
  display: flex;
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
  @media (min-width: 1024px) {
    font-size: 2em;
  }
  @media (min-width: 1440px) {
    font-size: 1.4em;
  }
`;
export const SkillMastery = styled.div<ScaleProps>`
  display: flex;
  margin-right: 10px;
  font-size: 0.8em;
  position: relative;
  margin-right: calc(100% - ${(props) => (props.percent)}%);
  @media (min-width: 768px) {
    font-size: 1em;
  }
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
  @media (min-width: 1440px) {
    font-size: 1em;
    align-items: flex-end;
  }
`;
export const SkillMasteryScale = styled.div<ScaleProps>`
  height: 4px;
  border-radius: 10px;
  width: ${(props) => (props.percent)}%;
  background-color: ${(props) => props.theme.mainColors.secondary};
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
export const SubSkill = styled.div<SubSkillProps>`
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 0.7em;
  margin: 20px 0 10px 10%;
  border-radius: 2px;
  width: 90%;
  @media (min-width: 1440px) {
    display: flex;
  }
`;
export const OpenSubskillsBtn = styled.div<SubSkillProps>`
  cursor: pointer;
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  transform: ${(props) => (props.rotated ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.1s;
  position: absolute;
  right: -20px;
  user-select: none;
  @media (min-width: 768px) {
    right: -30px;
  }
  @media (min-width: 1024px) {
    right: -40px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
