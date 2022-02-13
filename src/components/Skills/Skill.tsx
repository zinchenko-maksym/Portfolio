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
  display: boolean;
}

const SkillWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 500px;
  margin: 10px;
  color: ${(props) => props.theme.mainColors.white};
`;
const SkillName = styled.p`
  display: flex;
`;
const SkillMastery = styled.p`
  display: flex;
  margin-right: 10px;
  font-size: 0.8em;
  position: relative;
`;
const SkillMasteryScale = styled.div<ScaleProps>`
  height: 4px;
  border-radius: 2px;
  width: ${(props) => (props.percent)}%;
  background-color: ${(props) => props.theme.mainColors.secondary};
`;
const SubSkill = styled.div<SubSkillProps>`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  font-size: 0.8em;
  margin: 10px 0 10px 10%;
  border-radius: 2px;
  width: 90%;
`;
const OpenSubskillsBtn = styled.div<SubSkillProps>`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  position: absolute;
  right: -20px;
`;

function Skill({ skillName, mastery, subSkills }: SkillProps) {
  const [subSkillDisplay, setSubSkillDisplay] = useState(false);
  const toggleSubscills = () => {
    setSubSkillDisplay(!subSkillDisplay);
  };
  const mapSubSkills = subSkills.map(
    (subSkill) => (
      <SubSkill key={subSkill.name} display={subSkillDisplay}>
        {subSkill.name}
        {subSkill.mastery}
        %
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
          display={!!subSkills.length}
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
