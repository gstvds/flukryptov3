import React, { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import LightLogo from '~/assets/light/logo.png';
import DarkLogo from '~/assets/dark/logo.png';

import styled, { ThemeContext } from 'styled-components/native';

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

const MainContainer = styled.View<any>`
  align-items: center;
  flex: 1;
  padding-horizontal: 20px;
  justify-content: space-around;
`;

const LogoContainer = styled.View<any>`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const Logo = styled.Image`
  resize-mode: contain;
  width: 200px;
  height: 200px;
`;

export default Loading;
