import styled from 'styled-components';

export const ProfilePicture = styled.div`
  position: relative;
  display: flex;
  @media (min-width: 1024px) {
    width: 40vw;
    height: 40vw; 
    max-width: 670px;
    max-height: 670px;
    margin-right: 10%;
  }
`;
export const Photo = styled.img`
  margin-top: 20px;
  height: 80vw; 
  width: 80vw;
  max-width: 560px;
  max-height: 560px;
  background-size: 101%;
  background-color: ${(props) => props.theme.mainColors.primary};
  border-radius: 100%;
  @media (min-width: 768px) {
    width: 40vw;
    height: 40vw; 
  }
  @media (min-width: 1024px) {
    max-width: 670px;
    max-height: 670px;
  }
`;
export const Socials = styled.div`
`;
export const SocialLink = styled.a`
  display: flex;
  width: 12vw;
  height: 12vw;
  max-width: 70px;
  max-height: 70px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColors.primary};
  position: absolute;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.mainColors.tertiary};
  border-radius: 60px;
  padding: 4px;
  &:nth-child(1) {
    left: 99%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(2) {
    left: 95%;
    top: 71%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(3) {
    left: 82%;
    top: 88%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(4) {
    left: 61%;
    top: 97%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 768px) {
    width: 6vw;
    height: 6vw;
  }
`;
