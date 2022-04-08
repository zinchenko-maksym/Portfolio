import React, { Props } from 'react';
import * as Styled from './style';

interface ProjectProps {
  adress: string,
  image: string,
  title: string,
  usedTools: string,
}

function Project({
  adress, image, title, usedTools,
}: ProjectProps) {
  return (
    <Styled.Project target="_blank" href={adress}>
      <Styled.ProjectImageWrap>
        <Styled.ProjectImage src={image} />
        <Styled.ProjectImageHover>
          <Styled.OpenPage>Open Project</Styled.OpenPage>
        </Styled.ProjectImageHover>
      </Styled.ProjectImageWrap>
      <Styled.ProjectDescription>
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
