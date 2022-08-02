import React from 'react';
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
import pythonImg from '../../assets/skills/python.png';
import * as Styled from './SkillsStyle';

interface SkillProps {
  skillName: string;
  url: string;
}
interface SkillGroupProps {
  groupName: string;
  list: SkillProps[];
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
        { skillName: 'JavaScript', url: jsImg },
      ],
    },
    {
      groupName: 'Back-end',
      list: [
        { skillName: 'NodeJS', url: nodeImg },
        { skillName: 'Postge SQL', url: postgreImg },
        { skillName: 'Python', url: pythonImg },
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

  const displaySkills = (index: number) => {
    return skills[index].list.map((skill) => {
      return (
        <Skill
          key={skill.skillName}
          skillImage={skill.url}
          skillName={skill.skillName}
        />
      );
    });
  };
  const displaySkillsGroups = skills.map((group: SkillGroupProps, index) => {
    return (
      <Styled.SkillGroup key={group.groupName}>
        <Styled.GroupName>{group.groupName}</Styled.GroupName>
        <Styled.SkillsList>{displaySkills(index)}</Styled.SkillsList>
      </Styled.SkillGroup>
    );
  });
  return (
    <Styled.SkillsWrap id="Skills">
      <Styled.SkillsTitle>Coding Skills</Styled.SkillsTitle>

      {displaySkillsGroups}
    </Styled.SkillsWrap>
  );
}

export default Skills;
