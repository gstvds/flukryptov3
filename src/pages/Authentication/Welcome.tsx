import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import MainLogo from '~/assets/logo.png';

import MainButton from '~/components/MainButton';
import { metrics } from '~/helpers';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <LogoContainer>
        <Logo source={MainLogo} />
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

const MainContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled(View)`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;

export default Welcome;
