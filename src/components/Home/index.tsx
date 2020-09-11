import React, { FC } from 'react';
import { Screen } from '../common/Screen';
import { SignInData } from '../../types';

type HomeProps = {
  userInfo: SignInData & { id: number };
};

export const Home: FC<HomeProps> = ({ userInfo }: HomeProps) => (
  <Screen>
    <h1>Home page</h1>
    <h2>User Infos</h2>
    <p>{JSON.stringify(userInfo)}</p>
  </Screen>
);
