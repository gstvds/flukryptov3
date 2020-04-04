import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import Header from '~/components/Header';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header
      onPress={() => navigation.goBack()}
      title='cadastrar'
      />
      <SignUpContainer>
        <Text>Login Screen</Text>
        <SignUpButton
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text>Navigate to Login</Text>
        </SignUpButton>
      </SignUpContainer>
    </>
  );
};

const SignUpContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled(TouchableOpacity)`
  background-color: #0ef500;
  height: 25px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 18px;
`;

export default SignUp;
