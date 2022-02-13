import styled from 'styled-components';
import myPhoto from '../../../assets/MyPhoto.jpg';

export const ProfilePicture = styled.div`
  position: relative;
`;
export const Photo = styled.img`
  margin-top: 20px;
  width: 240px;
  height: 240px;
  background-image: url(${myPhoto});
  background-size: 100%;
  border-radius: 120px;
`;

export const Socials = styled.div`
`;
export const SocialLink = styled.a`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColors.primary};
  position: absolute;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.mainColors.tertiary};
  border-radius: 30px;
  padding: 4px;
  &:nth-child(1) {
    left: 70%;
    top: 10%;
  }
  &:nth-child(2) {
    left: 89%;
    top: 32%;
  }
  &:nth-child(3) {
    left: 89%;
    top: 64%;
  }
  &:nth-child(4) {
    left: 70%;
    top: 85%;
  }
`;
