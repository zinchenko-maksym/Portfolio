import React, { useState } from 'react';
import * as Styled from './SkillStyle';
import MasteryScale from './MasteryScale/MasteryScale';

interface SubSkill {
  name: string;
  mastery: number;
}
interface SkillProps {
  skillName: string;
  mastery: number;
  subSkills: SubSkill[];
}

function Skill({ skillName, mastery, subSkills }: SkillProps) {
  const [subSkillDisplay, setSubSkillDisplay] = useState(false);
  const toggleSubscills = () => {
    setSubSkillDisplay(!subSkillDisplay);
  };
  const mapSubSkills = subSkills.map(
    (subSkill) => (
      <Styled.SubSkill key={subSkill.name} $display={subSkillDisplay}>
        <Styled.SkillName>{subSkill.name}</Styled.SkillName>
        <Styled.SkillMastery percent={subSkill.mastery}>
          {subSkill.mastery}
          %
        </Styled.SkillMastery>
        <MasteryScale mastery={subSkill.mastery} />
      </Styled.SubSkill>
    ),
  );
  return (
    <Styled.SkillWrap>
      <Styled.SkillName>
        {skillName}
      </Styled.SkillName>
      <Styled.SkillMastery percent={mastery}>
        {mastery}
        %
        <Styled.OpenSubskillsBtn
          $display={!!subSkills.length}
          rotated={subSkillDisplay}
          onClick={toggleSubscills}
        >
          &#9658;
        </Styled.OpenSubskillsBtn>
      </Styled.SkillMastery>
      <MasteryScale mastery={mastery} />
      {mapSubSkills}
    </Styled.SkillWrap>
  );
}

export default Skill;
