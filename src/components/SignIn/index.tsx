import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Screen } from '../common/Screen';
import { SignInData } from '../../types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  font-weight: bold;
  color: red;
`;

type SignInProps = {
  onSubmit: (data: SignInData) => void;
};

export const SignIn: FC<SignInProps> = ({ onSubmit }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChangeLogin = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handleChangePassword = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!email.match(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/)) {
        setError('Invalid email');
      } else {
        onSubmit({ email, name });
      }
    },
    [email, name, onSubmit]
  );

  return (
    <Screen>
      <Form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          data-testid="input.email"
          value={email}
          onChange={handleChangeLogin}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          data-testid="input.name"
          value={name}
          onChange={handleChangePassword}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          data-testid="signin.form.submit"
        >
          Create my account
        </button>
        <Error>{error}</Error>
      </Form>
    </Screen>
  );
};
