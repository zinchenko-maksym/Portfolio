import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrap = styled.section`
  padding: 30px 10px;
  width: 100%;
  background-color: ${(props) => props.theme.mainColors.secondary};
  display: flex;
  align-items: center;
  flex-flow: column;
`;
const ContactTitle = styled.h1`
  margin: 10px 10px 20px;
  
`;
const ContactForm = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
`;
const TextImput = styled.input`
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  padding: 8px 10px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.mainColors.tertiary};
  border-radius: 2px;
`;
const TextAreaImput = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 80px;
  margin: 10px 0;
  padding: 8px 10px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.mainColors.tertiary};
  border-radius: 2px;
`;
const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  background-color: ${(props) => props.theme.mainColors.tertiary};
  color: ${(props) => props.theme.textColors.primary};;
  margin: 16px 0;
  padding: 12px 10px;
  align-self: flex-start;
`;
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <ContactWrap id="Contact">
      <ContactTitle>Have a question? Feel free to contact me!</ContactTitle>
      <ContactForm method="POST" onSubmit={handleSubmit}>
        <TextImput type="name" placeholder="Full Name" required />
        <TextImput type="email" placeholder="Email Adress" required />
        <TextImput type="phone" placeholder="Phone (Optional)" />
        <TextAreaImput placeholder="Your message" required />
        <SubmitButton type="submit">Send message</SubmitButton>
      </ContactForm>
    </ContactWrap>
  );
}

export default ContactPage;
