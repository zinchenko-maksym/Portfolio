import styled from 'styled-components';

export const ContactWrap = styled.section`
  padding: 40px 10px;
  width: 100%;
  background-color: ${(props) => { return props.theme.mainColors.secondary; }};
  display: flex;
  align-items: center;
  flex-flow: column;
  @media (min-width: 768px) {
    padding: 60px 10px;
  }
`;
export const ContactTitle = styled.h1`
  margin: 10px 10px 20px;
  @media (min-width: 768px) {
    font-size: 2em;
    margin-bottom: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 2.4em;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 600px;
  }
`;
export const TextImput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: inherit;
  border: 1px solid ${(props) => { return props.theme.mainColors.tertiary; }};
  border-radius: 2px;
  font-size: 1em;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
export const TextAreaImput = styled.textarea`
  width: 100%;
  min-height: 80px;
  margin: 10px 0;
  padding: 8px 10px;
  background-color: inherit;
  border: 1px solid ${(props) => { return props.theme.mainColors.tertiary; }};
  border-radius: 2px;
  font-size: 1em;
  resize: none;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  background-color: ${(props) => { return props.theme.mainColors.tertiary; }};
  color: ${(props) => { return props.theme.textColors.primary; }};
  margin: 16px 0;
  padding: 12px 10px;
  align-self: flex-start;
  border-radius: 2px;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    transform: scale(0.97, 0.97);
    transition: transform 0.2s, box-shadow 0.2s;

    box-shadow: inset 0px -1px 10px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
