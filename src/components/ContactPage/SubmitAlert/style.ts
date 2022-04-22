import styled from 'styled-components';

interface AlertProps {
  submited: boolean,

}

export const SubmitAlert = styled.section<AlertProps>`
  position: fixed;
  background-color: ${(props) => props.theme.mainColors.tertiary};
  color: ${(props) => props.theme.textColors.primary};
  top: 70px;
  right: ${(props) => (props.submited ? '10px' : '-100vw')};
  transition: right 0.3s ease-out;
  border-radius: 5px;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    top: 90px;
    right: ${(props) => (props.submited ? '20px' : '-100vw')};
    font-size: 1.1em;
  }
  @media (min-width: 1024px){
    font-size: 1.2em;
    padding: 12px 24px;
  }

`;
export const CloseAlert = styled.div`
  margin-left: 10px;
  font-size: 1.2em;
  cursor: pointer;
  @media (min-width: 1024px){
    margin-left: 16px;
  }
  &:hover{
    color: red;
  }
`;
