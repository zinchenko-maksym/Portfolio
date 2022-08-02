import styled from 'styled-components';

export const SkillWrap = styled.div`
  position: relative;
  top: 0;
  width: 40vw;
  height: 50vw;
  max-width: 140px;
  max-height: 180px;
  margin: 12px 10px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 4px 30px #333;
  user-select: none;
  transition: box-shadow 0.4s ease-out, top 0.2s ease-out;
  &:hover {
    box-shadow: 0px 4px 30px ${(props) => { return props.theme.mainColors.tertiary; }};
    top: -4px;
  }
  @media (min-width: 1024px) {
    margin: 24px 20px;
  }
  @media (min-width: 1440px) {
  }
`;
export const SkillImage = styled.img`
  width: 70%;
`;

export const SkillName = styled.h3`
  color: ${(props) => { return props.theme.textColors.secondary; }};
  font-size: 0.9em;
  font-family: 'Outfit', sans-serif;
  @media (min-width: 768px) {
    font-size: 1em;
  }
`;
