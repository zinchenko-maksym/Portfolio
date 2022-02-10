import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const SkillsWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  padding-top: 60px;
  max-width: 400px;
`;

function Skills() {
  return (
    <SkillsWrap>
      <Skill skillName="HTML" mastery={100} />
      <Skill skillName="CSS" mastery={90} />
      <Skill skillName="ReactJS" mastery={90} />
      <Skill skillName="Node.js" mastery={60} />
      <Skill skillName="SQL" mastery={90} />
    </SkillsWrap>
  );
}

export default Skills;
