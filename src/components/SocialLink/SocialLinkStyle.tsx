import styled, { keyframes } from 'styled-components';

const scaleOut = keyframes`
  from {
    transform: scale(.3, .3);
    opacity: .3;
  }
  to {
    transform: scale(1.3, 1.3);
    opacity: 0;
  }
`;
const scaleIn = keyframes`
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0.95, 0.95);
  }
`;
export const PulsingCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  top: 0px;
  left: 0px;
  background-color: #fff;
  opacity: 0;
`;
export const MainCircle = styled.div`
  background-color: ${(props) => props.theme.mainColors.tertiary};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
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
  border-radius: 60px;
  cursor: pointer;
  &:nth-child(1) {
    left: 99%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(2) {
    left: 95%;
    top: 72%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(3) {
    left: 82%;
    top: 90%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(4) {
    left: 61%;
    top: 101%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 768px) {
    width: 6vw;
    height: 6vw;
    &:hover ${PulsingCircle}{
      animation: ${scaleOut} 1s infinite cubic-bezier(.3,.44,.86,1.56);
    }
    &:hover ${MainCircle}{
      animation: ${scaleIn} 1s infinite cubic-bezier(.3,.44,.86,1.56);
    }
  }


  
`;
