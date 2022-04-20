import styled from 'styled-components';

export const SkillWrap = styled.div`
  width: 40vw;
  height: 50vw;
  max-width: 160px;
  max-height: 220px;
  margin: 12px 10px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 4px 30px #222;
  user-select: none;
  transition: box-shadow 0.4s ease-out;
  &:hover{
    box-shadow: 0px 4px 30px ${(props) => props.theme.mainColors.tertiary};
  }
  @media (min-width: 1024px) {
    margin: 24px 20px;
  }
  @media (min-width: 1440px) {
    
  }
`;
export const SkillImage = styled.img`
  width: 70%;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const SkillName = styled.h3`
  font-size: 1em;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;
