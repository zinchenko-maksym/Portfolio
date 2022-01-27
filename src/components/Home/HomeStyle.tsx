import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrap = styled.div`
  display: flex;
  font-size:  1.2em;
  font-weight: 600;
  flex-flow: column wrap;
  align-items: center;
  padding-top: 60px;
`;
export const Photo = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background-color: green;
  border-radius: 120px;
`;
export const AboutMeHeader = styled.h1`
  font-size: 1.7em;
  margin: 0.3em 0;
  text-align: center;
  line-height: 1.4em;
  margin: 20px auto 6px;
`;
export const AboutMe = styled.div`
padding: 0 1em;
  color: ${(props) => props.theme.textColors.secondary};
`;
export const AboutMeText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textColors.main};
`;

export const Circle = styled.span`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.mainColors.dark};
    display: flex;
    height: 34px;
    width: 34px;
    border-radius: 17px;
    color: ${(props) => props.theme.textColors.main};
    left: 10%;
    transition: left 0.4s ease-out;
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

export const Resume = styled.button`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
  margin: 16px;
  width: 174px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 9px 10px 0px rgba(0,0,0,0.32);
  background-color: ${(props) => props.theme.mainColors.light};
  font-size: 0.9em;
  border: 2px solid ${(props) => props.theme.mainColors.medium};
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
      left: 70%;
    }
  }

`;

export const NextPageLink = styled(Link)`
  margin: 30px 30px;
  font-size: 0.8em;
  color: #fff;
  align-self: flex-end;
  position: relative;
    background-image: linear-gradient(to right, #fff, #fff);
    background-position: bottom  center;
    background-repeat: no-repeat;
    background-size: 80% 2px;
    transition: background-size .5s ease;

  &:after{
    content: '»';
    position: absolute;
    font-size: 1.4rem;
    top: -0.3rem;
    right: -16px;
    transition: 0.5s;
  }
  &:hover{
    background-size: 100% 2px;
    &:after{
      right: -13px;
    }
  }
`;
