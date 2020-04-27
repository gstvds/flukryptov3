import React from 'react';

import { AuthStackScreen } from './Authentication';
import { HomeStackScreen } from './Main';

import core from '~/core';

const Routes: React.FC = () => {
  const logged = core.user.state.isLogged;
  return logged ? <HomeStackScreen /> : <AuthStackScreen />
};

export default Routes;
