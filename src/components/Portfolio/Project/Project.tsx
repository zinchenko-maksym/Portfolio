import React from 'react';
import * as Styled from './style';

interface ProjectProps {
  image: string;
  title: string;
  usedTools: string;
}

function Project({ image, title, usedTools }: ProjectProps) {
  return (
    <Styled.Project>
      <Styled.ProjectInnerShadow />
      <Styled.ProjectImageWrap>
        <Styled.ProjectImage src={image} />
      </Styled.ProjectImageWrap>
      <Styled.ProjectDescription>
        <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
        <Styled.ProjectTools>{usedTools}</Styled.ProjectTools>
      </Styled.ProjectDescription>
    </Styled.Project>
  );
}

export default Project;
