import React, { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import LightLogo from '~/assets/light/logo.png';
import DarkLogo from '~/assets/dark/logo.png';

import { ThemeContext } from 'styled-components';
import { Logo, MainContainer } from './styles';

import core from '~/core';
import { usePulse } from '~/../pulse/dist';

const Loading = () => {
  const [loading, currentUser] = usePulse([
    core.loading,
    core.user.state.currentUser,
  ]);

  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (!loading && currentUser.status === 'noUser') {
      core.routes.getUser();
    } else if (!loading && currentUser.isAnonymous) {
      navigation.navigate('Welcome');
    } else if (!loading && !currentUser.isAnonymous) {
      navigation.navigate('Home');
    }
  }, [currentUser]);

  return (
    <MainContainer>
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      >
        <Logo source={theme.name === 'dark' ? DarkLogo : LightLogo} />
      </Animatable.View>
    </MainContainer>
  );
};

export default Loading;
