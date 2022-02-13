import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const SkillsWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  padding: 60px 10px;
  background-color: ${(props) => props.theme.mainColors.primary};
`;

function Skills() {
  const skills = [
    {
      name: 'HTML5',
      subSkills: [],
      mastery: 100,
    },
    {
      name: 'CSS',
      subSkills: [],
      mastery: 90,
    },
    {
      name: 'ReactJS',
      subSkills: [{ name: 'Redux', mastery: 100 }, { name: 'Styled Components', mastery: 90 }],
      mastery: 90,
    },
    {
      name: 'Node.js',
      subSkills: [],
      mastery: 90,
    },
    {
      name: 'Databases',
      subSkills: [],
      mastery: 90,
    },
  ];
  const displaySkills = skills.map(
    (skill) => (
      <Skill
        subSkills={skill.subSkills}
        key={skill.name}
        skillName={skill.name}
        mastery={skill.mastery}
      />
    ),
  );
  return (
    <SkillsWrap>
      {displaySkills}
    </SkillsWrap>
  );
}

export default Skills;
