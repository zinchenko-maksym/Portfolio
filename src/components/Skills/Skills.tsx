import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const SkillsWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  padding: 30px 10px 70px;
  background-color: ${(props) => props.theme.mainColors.primary};
  @media (min-width: 768px) {
  align-items: center;
  }
  @media (min-width: 1024px) {
    padding-bottom: 110px;
  }
`;
const SkillsTitle = styled.h1`
  color: ${(props) => props.theme.textColors.primary};
  margin: 20px 10%;
  @media (min-width: 768px) {
  font-size: 2em;
  }
  @media (min-width: 1024px) {
  font-size: 2.6em;
  }

`;

function Skills() {
  const skills = [
    {
      name: 'HTML5',
      subSkills: [],
      mastery: 90,
    },
    {
      name: 'CSS',
      subSkills: [{ name: 'CSS3', mastery: 80 }, { name: 'Sass', mastery: 70 }, { name: 'Styled Components', mastery: 80 }],
      mastery: 80,
    },
    {
      name: 'JavaScript',
      subSkills: [{ name: 'ES6+', mastery: 90 }, { name: 'TypeScript', mastery: 70 }, { name: 'Rest APIs', mastery: 90 }],
      mastery: 80,
    },
    {
      name: 'ReactJS',
      subSkills: [{ name: 'Hooks', mastery: 80 }, { name: 'Redux', mastery: 90 }, { name: 'Styled Components', mastery: 80 }, { name: 'Redux-saga', mastery: 70 }],
      mastery: 80,
    },
    {
      name: 'Node.js',
      subSkills: [],
      mastery: 60,
    },
    {
      name: 'Databases',
      subSkills: [{ name: 'MySQL', mastery: 80 }, { name: 'MongoDB', mastery: 50 }],
      mastery: 70,
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
    <SkillsWrap id="Skills">
      <SkillsTitle>Coding Skills</SkillsTitle>
      {displaySkills}
    </SkillsWrap>
  );
}

export default Skills;
