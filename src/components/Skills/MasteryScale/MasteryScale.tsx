/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import * as Styled from './Style';

interface SkillProps {
  mastery: number,
  fillScale?: boolean ;
}

function MasteryScale({ mastery, fillScale = true }: SkillProps) {
  const [percent, setPersent] = useState(0);
  useEffect(() => {
    if (fillScale === true) {
      setPersent(mastery);
    }
  }, [fillScale]);

  return (
    <Styled.SkillMasteryScale>
      <Styled.SkillMasteryFill percent={percent} />
    </Styled.SkillMasteryScale>
  );
}

export default MasteryScale;
