import React, { useState } from 'react';
import styled from 'styled-components';

interface SubSkill {
  name: string;
  mastery: number;
}
interface SkillProps {
  skillName: string;
  mastery: number;
  subSkills: SubSkill[];
}

interface ScaleProps {
  percent: number;
}
interface SubSkillProps {
  $display: boolean;
  rotated?: boolean;
}

const SkillWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90%;
  margin: 16px;
  color: ${(props) => props.theme.mainColors.white};
  @media (min-width: 768px) {
    width: 80%;
    max-width: 760px;
    margin: 16px;
  }
`;
const SkillName = styled.p`
  display: flex;
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;
const SkillMastery = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 0.8em;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 1em;
  }
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
`;
const SkillMasteryScale = styled.div<ScaleProps>`
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
`;
const SubSkill = styled.div<SubSkillProps>`
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: 0.7em;
  margin: 20px 0 10px 10%;
  border-radius: 2px;
  width: 90%;
`;
const OpenSubskillsBtn = styled.div<SubSkillProps>`
  cursor: pointer;
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  transform: ${(props) => (props.rotated ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.1s;
  position: absolute;
  right: -20px;
  @media (min-width: 768px) {
    right: -30px;
  }
  @media (min-width: 1024px) {
    right: -40px;
  }
`;

function Skill({ skillName, mastery, subSkills }: SkillProps) {
  const [subSkillDisplay, setSubSkillDisplay] = useState(false);
  const toggleSubscills = () => {
    setSubSkillDisplay(!subSkillDisplay);
  };
  const mapSubSkills = subSkills.map(
    (subSkill) => (
      <SubSkill key={subSkill.name} $display={subSkillDisplay}>
        <SkillName>{subSkill.name}</SkillName>
        <SkillMastery>
          {subSkill.mastery}
          %
        </SkillMastery>
        <SkillMasteryScale percent={subSkill.mastery} />
      </SubSkill>
    ),
  );
  return (
    <SkillWrap>
      <SkillName>
        {skillName}
      </SkillName>
      <SkillMastery>
        {mastery}
        %
        <OpenSubskillsBtn
          $display={!!subSkills.length}
          rotated={subSkillDisplay}
          onClick={toggleSubscills}
        >
          &#9658;
        </OpenSubskillsBtn>
      </SkillMastery>
      <SkillMasteryScale percent={mastery} />
      {mapSubSkills}
    </SkillWrap>
  );
}

export default Skill;
