import React from 'react';
import styled from 'styled-components';
import Skill from './Skill/index';
import htmlImg from '../../assets/skills/html.png';
import cssImg from '../../assets/skills/css3.png';
import jsImg from '../../assets/skills/javascript.png';
import tsImg from '../../assets/skills/typescript.png';
import reactImg from '../../assets/skills/react.png';
import nodeImg from '../../assets/skills/node-js.png';
import sassImg from '../../assets/skills/sass.png';
import gitImg from '../../assets/skills/git.png';
import reduxImg from '../../assets/skills/redux.png';
import postgreImg from '../../assets/skills/postgresql.png';

const SkillsWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
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
const SkillGroup = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-flow: row wrap;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;
const GroupName = styled.h2`
  width: 100%;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  color: ${(props) => props.theme.textColors.primary};
  margin: 30px 0 20px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;
const SkillsTitle = styled.h1`
  color: ${(props) => props.theme.textColors.primary};
  width: 80%;
  margin: 0px 10%;
  background-color: ${(props) => props.theme.mainColors.primary};
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
interface SkillProps{
  skillName: string,
  url: any,
}
interface SkillGroupProps{
  groupName: string,
  list: SkillProps[],
}

function Skills() {
  const skills = [
    {
      groupName: 'Front-end',
      list: [
        { skillName: 'HTML', url: htmlImg },
        { skillName: 'CSS', url: cssImg },
        { skillName: 'SASS', url: sassImg },
        { skillName: 'React', url: reactImg },
        { skillName: 'Redux', url: reduxImg },
        { skillName: 'JS', url: jsImg },
      ],
    },
    {
      groupName: 'Back-end',
      list: [
        { skillName: 'NodeJS', url: nodeImg },
        { skillName: 'Postge SQL', url: postgreImg },
      ],
    },
    {
      groupName: 'Other',
      list: [
        { skillName: 'TypeScript', url: tsImg },
        { skillName: 'Git', url: gitImg },
      ],
    },
  ];

  const displaySkills = (index: number) => skills[index].list.map(
    (skill) => (
      <Skill
        key={skill.skillName}
        skillImage={skill.url}
        skillName={skill.skillName}
      />
    ),
  );
  const displaySkillsGroups = skills.map(
    (group: SkillGroupProps, index) => (
      <SkillGroup key={group.groupName}>
        <GroupName>{group.groupName}</GroupName>
        {displaySkills(index)}
      </SkillGroup>
    ),
  );
  return (
    <SkillsWrap id="Skills">
      <SkillsTitle>Coding Skills</SkillsTitle>

      {displaySkillsGroups}
    </SkillsWrap>
  );
}

export default Skills;
