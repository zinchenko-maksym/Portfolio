import styled from 'styled-components';

export const SkillWrap = styled.div`
  cursor: pointer;
  width: 150px;
  height: 200px;
  background-color: red;
  @media (min-width: 1440px) {
    display: flex;
  }
`;
export const SkillImage = styled.img`
  @media (min-width: 768px) {
    right: -30px;
  }
  @media (min-width: 1024px) {
    right: -40px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SkillName = styled.h3`
  @media (min-width: 768px) {
    right: -30px;
  }
  @media (min-width: 1024px) {
    right: -40px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
