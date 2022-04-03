import styled from 'styled-components';

export const AboutMeWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  align-items: center;
  padding: 60px 24px 0;
  background-color: ${(props) => props.theme.mainColors.primary};
  @media (min-width: 768px) {
    flex-flow: row-reverse nowrap;
    padding: 90px 60px 40px;
    min-height: 450px;
    height: 50vw;
  }
  @media (min-width: 1024px) {
    height: 49vw;
    padding-left: 10vw;
  }
`;
export const AboutMeHeader = styled.h1`
  font-size: 1.7em;
  text-align: left;
  line-height: 1.4em;
  @media (min-width: 1024px) {
    font-size: 2.4em;
  }
  @media (min-width: 1400px) {
    font-size: 3.2em;
  }
`;
export const MyName = styled.span`
  font-size: 1.4em;
  font-weight: 600;
`;
export const Info = styled.div`
  margin: 20px 0;
  color: ${(props) => props.theme.textColors.primary};
  align-self: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    min-height: 100%;
    justify-content: center;
  }
`;
export const AboutMeText = styled.p`
  margin: 10px 0;
  color: ${(props) => props.theme.mainColors.secondary};
  font-family: 'Outfit', sans-serif;
  @media (min-width: 768px) {
    margin: 30px 0;
  }
  @media (min-width: 1024px) {
    font-size: 1.4em;
  }
  @media (min-width: 1400px) {
    font-size: 1.8em;
  }
`;

export const ResumeBtnText = styled.span`
  position: absolute;
  left: 36%;
  opacity: 100%;
  transition: left 0.4s ease-out, opacity 0.3s ease-in;
`;
export const ResumeBtnHover = styled.span`
  position: absolute;
  opacity: 0%;
  left: 30%;
  transition: left 0.4s ease-out, opacity 0.3s ease-in;
`;
export const Circle = styled.span`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.theme.textColors.primary};
    left: 15%;
    transition: left 0.4s ease-out;
`;
export const Resume = styled.a`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
  margin: 10px 0 40px;
  width: 190px;
  height: 50px;
  border-radius: 18px;
  box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.32);
  background-color: ${(props) => props.theme.mainColors.tertiary};
  font-size: 0.9em;
  border: 2px solid ${(props) => props.theme.mainColors.primary};
  color: ${(props) => props.theme.textColors.primary};
  &:hover{
    cursor: pointer;
    ${ResumeBtnText} {
      opacity: 0%;
      left: 20%;
    }
    ${ResumeBtnHover} {
      opacity: 100%;
      left: 15%;
    }
    ${Circle} {
      left: 75%;
    }
  }
  @media (min-width: 1400px) {
    width: 260px;
    height: 70px;
    font-size: 1.2em;
  }
`;
