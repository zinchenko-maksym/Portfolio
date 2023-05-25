import React, { useState } from 'react';
import axios from 'axios';
import * as Styled from './ContactStyled';
import SubmitAlert from './SubmitAlert';

interface Values {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactPage() {
  const [submited, setSubmited] = useState({
    complete: false,
    status: -1,
  });

  const submitHandle = (com = false, st = -1) => {
    setSubmited({
      status: st,
      complete: com,
    });
  };

  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleChangeTextArea = (
    // eslint-disable-next-line comma-dangle
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({ ...values, message: event.target.value });
  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios
      .post('https://zinmaks.herokuapp.com/email', {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })
      .then((res) => {
        submitHandle(true, res.status);
      })
      .catch((error) => {
        throw error;
      });
    await setValues({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  return (
    <Styled.ContactWrap id="Contact">
      <Styled.ContactTitle>
        Have a question? Feel free to contact me!
      </Styled.ContactTitle>
      <Styled.ContactForm
        onSubmit={(e:any) => {
          return handleSubmit(e);
        }}
      >
        <Styled.TextImput
          onChange={handleChangeInput}
          value={values.name}
          type="name"
          name="name"
          placeholder="Full Name"
          required
        />
        <Styled.TextImput
          onChange={handleChangeInput}
          value={values.email}
          type="email"
          name="email"
          placeholder="Email Adress"
          required
        />
        <Styled.TextImput
          onChange={handleChangeInput}
          value={values.phone}
          type="phone"
          name="phone"
          placeholder="Phone (Optional)"
        />
        <Styled.TextAreaImput
          onChange={handleChangeTextArea}
          value={values.message}
          placeholder="Your message"
          required
        />
        <Styled.SubmitButton type="submit">Send message</Styled.SubmitButton>
      </Styled.ContactForm>
      <SubmitAlert
        submited={submited.complete}
        submitHandle={submitHandle}
      />
    </Styled.ContactWrap>
  );
}

export default ContactPage;
