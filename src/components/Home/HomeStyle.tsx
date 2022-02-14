import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myPhoto from '../../assets/MyPhoto.jpg';

export const HomeWrap = styled.section`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  align-items: center;
  padding-top: 60px;
  background-color: ${(props) => props.theme.mainColors.primary};
`;
export const Photo = styled.img`
  margin-top: 20px;
  width: 240px;
  height: 240px;
  background-image: url(${myPhoto});
  background-size: 100%;
  border-radius: 120px;
`;
export const AboutMeHeader = styled.h1`
  font-size: 1.7em;
  margin: 0.3em 0;
  text-align: left;
  line-height: 1.4em;
  margin: 20px auto 6px;
`;
export const MyName = styled.span`
  font-size: 1.4em;
  font-weight: 600;
`;
export const AboutMe = styled.div`
padding: 0 1em;
  color: ${(props) => props.theme.textColors.primary};
`;
export const AboutMeText = styled.p`
  margin: 10px 0;
  color: ${(props) => props.theme.mainColors.secondary};
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
  margin: 10px 16px 40px;
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

`;
