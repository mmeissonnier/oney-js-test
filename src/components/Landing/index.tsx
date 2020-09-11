import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Screen } from '../common/Screen';

const Logo = styled.img`
  width: auto;
  height: 100px;
`;

export const Landing: FC = () => (
  <Screen>
    <Logo src="https://x-squad.com/images/logo.png" alt="logo" />
    <Link to="/signin">Register with my email</Link>
  </Screen>
);
