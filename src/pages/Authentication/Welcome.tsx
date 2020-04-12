import React, { useContext } from 'react';
import { View } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import LightLogo from '~/assets/light/logo.png';
import DarkLogo from '~/assets/dark/logo.png';

import MainButton from '~/components/MainButton';
import { metrics } from '~/helpers';

const Welcome = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <MainContainer>
      <LogoContainer>
        <Logo source={theme.name === 'dark' ? DarkLogo : LightLogo} />
     </LogoContainer>
      <View style={{ marginTop: metrics.padding }} />
      <MainButton
        onPress={() => navigation.navigate('Login')}
        disabled={false}
        status={false}
        title="login"
      />
      <MainButton
        onPress={() => navigation.navigate('SignUp')}
        disabled={false}
        status={false}
        title="cadastrar"
        outline
      />
    </MainContainer>
  );
};

const MainContainer = styled.View<any>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const LogoContainer = styled.View<any>`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const Logo = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;

export default Welcome;
