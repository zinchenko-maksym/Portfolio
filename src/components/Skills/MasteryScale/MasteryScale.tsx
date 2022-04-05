/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import * as Styled from './Style';

interface SubSkill {
  name: string;
  mastery: number;
}
interface SkillProps {
  skillName: string;
  mastery: number;
  subSkills: SubSkill[];
}

function MasteryScale({ mastery, subSkills }: SkillProps) {
  const [subSkillDisplay, setSubSkillDisplay] = useState(false);
  const toggleSubscills = () => {
    setSubSkillDisplay(!subSkillDisplay);
  };
  return (
    <Styled.SkillMastery>
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
  );
}

export default MasteryScale;
