import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import Header from '../../components/Header';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <LoginContainer>
        <Text>Login Screen</Text>
        <LoginButton
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text>Navigate to SignUp</Text>
        </LoginButton>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled(TouchableOpacity)`
  background-color: #0ef500;
  height: 25px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 18px;
`;

export default Login;
