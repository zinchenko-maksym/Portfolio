import React from 'react';
import * as Styled from './style';

interface SkillProps {
  skillName: string;
  skillImage: string;
}

function Skill({ skillName, skillImage }: SkillProps) {
  return (
    <Styled.SkillWrap>
      <Styled.SkillImage src={skillImage} />
      <Styled.SkillName>{skillName}</Styled.SkillName>
    </Styled.SkillWrap>
  );
}

export default Skill;
