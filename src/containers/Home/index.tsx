import React, { FC, useContext } from 'react';
import { Home } from '../../components';
import { StoreContext } from '../../store';

export const HomeContainer: FC = () => {
  const { user } = useContext(StoreContext);
  return <Home userInfo={user} />;
};
