import React from 'react';
import * as Styled from './style';

interface SkillProps {
  mastery: number;
}

function MasteryScale({ mastery }: SkillProps) {
  return (
    <Styled.SkillMasteryScale>
      <Styled.SkillMasteryFill percent={mastery} />
    </Styled.SkillMasteryScale>
  );
}

export default MasteryScale;
