import React, { FC, useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { SignIn } from '../../components';
import { SignInData } from '../../types';
import { setUser } from '../../store/actionCreators';

export const SignInContainer: FC = () => {
  const [signInOK, setSignInOk] = useState(false);

  const handleOnSubmit = useCallback(async ({ email, name }: SignInData) => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({ user: { email, name } }),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUser({ id: data.id, ...data.user });
      setSignInOk(true);
    }
  }, []);
  return (
    <>
      <SignIn onSubmit={handleOnSubmit} />
      {signInOK && <Redirect to="/home" />}
    </>
  );
};
