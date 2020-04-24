import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { Logo, MainContainer, LogoContainer } from './styles';

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

export default Welcome;
