import styled from 'styled-components';

export const SkillsWrap = styled.section`
  font-size: 1.2em;
  background-color: ${(props) => { return props.theme.mainColors.primary; }};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (min-width: 1440px) {
    flex-flow: column wrap;
    justify-content: space-around;
  }
`;
export const SkillsTitle = styled.h1`
  color: ${(props) => { return props.theme.textColors.primary; }};
  text-align: center;
  width: 100%;
  margin: 30px 0;
  font-size: 1.6em;
  @media (min-width: 768px) {
    font-size: 1.8em;
  }
  @media (min-width: 1024px) {
    font-size: 2em;
  }
  @media (min-width: 1440px) {
    font-size: 3em;
    margin: 70px 0 50px;
  }
`;
export const SkillsList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SkillGroup = styled.article`
  width: calc(100vw - 20px);
  padding: 0 10px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: auto;
  }
`;
export const GroupName = styled.h2`
  font-size: 1.2em;
  margin: 0 30px;
  color: ${(props) => { return props.theme.textColors.primary; }};

  @media (min-width: 768px) {
    font-size: 1.4em;
    text-align: center;
  }
  @media (min-width: 1024px) {
    font-size: 1.6em;
  }
  @media (min-width: 1440px) {
    font-size: 1.8em;
  }
`;
