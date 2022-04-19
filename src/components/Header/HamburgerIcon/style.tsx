import styled from 'styled-components';

interface IconProps {
  open: boolean;
}

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 767px){
    height: 40px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    z-index: 10;
  }
  transition: transform 0.2s ease-out;
`;
export const Slice = styled.div<IconProps>`
  position: relative;
  width: 36px;
  height: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColors.secondary};
  transform-origin: 1px;
  margin: 4px 0px;
  transform-origin: center;
`;

export const SliceTop = styled(Slice)`
  transition: ${(props) => (props.open ? 'top 0.20s linear, transform 0.20s linear  0.3s' : 'top 0.20s linear  0.3s, transform 0.25s linear')} ;
  transform: ${(props) => (props.open ? 'rotate(135deg)' : 'rotate(0)')};
  top: ${(props) => (props.open ? '13px' : '0')}; 
`;
export const SliceMiddle = styled(Slice)`
  opacity: ${(props) => (props.open ? '0%' : '100%')};
  transition: ${(props) => (props.open ? 'opacity 0.1s ease-out' : 'opacity 0.5s ease-out 0.20s')};
`;
export const SliceBottom = styled(Slice)`
  transition: ${(props) => (props.open ? 'bottom 0.20s linear, transform 0.20s linear  0.3s' : 'bottom 0.20s linear  0.3s, transform 0.20s linear')} ;
  transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  bottom: ${(props) => (props.open ? '13px' : '0')}; 

`;
