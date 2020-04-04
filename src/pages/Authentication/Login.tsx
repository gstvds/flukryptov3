import React, { useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import Header from '~/components/Header';
import Input from '~/components/Input';
import { colors, metrics } from '~/helpers';
import MainButton from '~/components/MainButton';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [repeatPasswordFocused, setRepeatPasswordFocusedFocused] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Header onPress={() => navigation.goBack()} title="entrar" />
      <MainContainer>
        <LoginContainer>
          <View style={{ margin: metrics.padding }}>
          <Input
            value={email}
            onBlur={() => setEmailFocused(false)}
            onFocus={() => setEmailFocused(true)}
            isFocused={emailFocused}
            onChangeText={(text: string) => setEmail(text)}
            label="email"
            status={false}
            error={''}
            keyboard='email-address'
          />
          <Input
            value={password}
            onBlur={() => setPasswordFocused(false)}
            onFocus={() => setPasswordFocused(true)}
            isFocused={passwordFocused}
            onChangeText={(text: string) => setPassword(text)}
            label="password"
            status={false}
            error={''}
            keyboard='number-pad'
            secureTextEntry
          />
          </View>
        </LoginContainer>
        <MainButton
          onPress={() => {}}
          title='entrar'
          status={false}
          disabled={false}
        />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.View`
  color: #FCFCFC;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const LoginContainer = styled.View`
  margin-top: ${metrics.double_padding};
  /* background-color: ${colors.background}; */
  background-color: #e8e8e8;
  border-radius: 20px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #0ef500;
  height: 25px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 18px;
`;

export default Login;
