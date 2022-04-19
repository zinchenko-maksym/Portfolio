import React from 'react';
import styled from 'styled-components';
import Skill from './Skill/index';

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
    { skillName: 'HTML', url: './..' },
    { skillName: 'CSS', url: './..' },
    { skillName: 'JS', url: './..' },
    { skillName: 'TypeScript', url: './..' },
    { skillName: 'React', url: './..' },
    { skillName: 'NodeJS', url: './..' },
    { skillName: 'Express', url: './..' },
  ];
  const displaySkills = skills.map(
    (skill) => (
      <Skill
        key={skill.skillName}
        skillImage={skill.url}
        skillName={skill.skillName}
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
