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
  @media (min-width: 1440px) {
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
    padding: 50px 2% 80px;
  }
`;
const SkillsTitle = styled.h1`
  color: ${(props) => props.theme.textColors.primary};
  margin: 20px 10%;
  @media (min-width: 768px) {
  font-size: 2em;
  }
  @media (min-width: 1024px) {
  font-size: 3.2em;
  }
  @media (min-width: 1440px) {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
  }

`;

function Skills() {
  const skills = [
    {
      name: 'HTML & CSS',
      subSkills: [{ name: 'Sass', mastery: 70 }, { name: 'Styled Components', mastery: 80 }],
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
      name: 'Backend',
      subSkills: [{ name: 'Node.js', mastery: 70 }, { name: 'PostgreSQL', mastery: 50 }],
      mastery: 60,
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
