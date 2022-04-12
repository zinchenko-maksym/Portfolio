import React, { Props } from 'react';
import * as Styled from './style';

interface ProjectProps {
  image: string,
  title: string,
  usedTools: string,
  place: string
}

function Project({
  image, title, usedTools, place,
}: ProjectProps) {
  return (
    <Styled.Project place={place}>
      <Styled.ProjectImageWrap>
        <Styled.ProjectImage src={image} />
        <Styled.ProjectImageHover place={place}>
          <Styled.OpenPage place={place}>Open Project</Styled.OpenPage>
        </Styled.ProjectImageHover>
      </Styled.ProjectImageWrap>
      <Styled.ProjectDescription place={place}>
        <Styled.ProjectTitle>
          {title}
        </Styled.ProjectTitle>
        <Styled.ProjectTools>
          {usedTools}
        </Styled.ProjectTools>
      </Styled.ProjectDescription>
    </Styled.Project>
  );
}

export default Project;
