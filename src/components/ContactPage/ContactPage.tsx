import React, { useState } from 'react';
import * as Styled from './ContactStyled';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <Styled.ContactWrap id="Contact">
      <Styled.ContactTitle>Have a question? Feel free to contact me!</Styled.ContactTitle>
      <Styled.ContactForm method="POST" onSubmit={handleSubmit}>
        <Styled.TextImput type="name" placeholder="Full Name" required />
        <Styled.TextImput type="email" placeholder="Email Adress" required />
        <Styled.TextImput type="phone" placeholder="Phone (Optional)" />
        <Styled.TextAreaImput placeholder="Your message" required />
        <Styled.SubmitButton type="submit">Send message</Styled.SubmitButton>
      </Styled.ContactForm>
    </Styled.ContactWrap>
  );
}

export default ContactPage;
