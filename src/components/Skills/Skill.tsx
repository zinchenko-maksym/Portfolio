import React, { useState } from 'react';
import styled from 'styled-components';

interface SkillProps {
  skillName: string;
  mastery: number;
}

interface ScaleProps {
  percent: number;
}

const SkillWrap = styled.div`
  margin: 10px;
`;
const SkillName = styled.div`
`;
const SkillMasteryScale = styled.div<ScaleProps>`
  height: 4px;
  border-radius: 2px;
  width: ${(props) => (props.percent)}%;
  background-color: red;
`;

function Skill({ skillName, mastery }: SkillProps) {
  return (
    <SkillWrap>
      <SkillName>{skillName}</SkillName>
      <SkillMasteryScale percent={mastery} />
    </SkillWrap>
  );
}

export default Skill;
