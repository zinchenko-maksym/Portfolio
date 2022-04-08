/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import * as Styled from './style';

interface SkillProps {
  mastery: number,
  fillScale?: boolean ;
}

function MasteryScale({ mastery, fillScale = false }: SkillProps) {
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
