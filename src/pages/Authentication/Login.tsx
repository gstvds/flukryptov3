import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native'
;
import styled from 'styled-components/native';
import { colors, metrics, validators } from '~/helpers';

import Header from '~/components/Header';
import Input from '~/components/Input';
import MainButton from '~/components/MainButton';

import core from '~/core';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState({ status: false, error: '' });
  const [emailError, setEmailError] = useState({ status: false, error: '' });

  const [submited, setSubmited] = useState(false);

  const digitsOnly = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][a-zA-Z]+/;
  const navigation = useNavigation();

  const cleanErrors = () => {
    setEmailError({ status: false, error: ''});
    setPasswordError({ status: false, error: ''});
  }

  const checkEntries = () => {
    if (email === '') {
      setEmailError({ status: true, error: 'O email não pode estar vazio' });
      return false;
    }
    if (password === '') {
      setPasswordError({ status: true, error: 'A senha não pode estar vazia' });
      return false;
    }
    if (password.length < 4) {
      setPasswordError({ status: true, error: 'A senha deve conter no mínimo 4 dígitos' });
      return false;
    }
    if (!validators.emailValidator(email)) {
      setEmailError({ status: true, error: 'Email inválido' });
      return false;
    }
    return true;
  }

  useEffect(() => {
    async function login() {
      const response = await core.routes.login({
        email,
        password,
      });
      if (response === 'auth/user-not-found') {
        setEmailError({ status: true, error: 'Email não cadastrado' });
        setSubmited(false);
      } else if (response === 'auth/wrong-password') {
        setPasswordError({ status: true, error: 'Senha inválida' });
        setSubmited(false);
      } else {
        setSubmited(false);
        navigation.navigate('Home',{ isSignedIn: true });
      }
    }
    if (submited) {
      login();
    }
  }, [submited]);

  return (
    <>
      <Header onPress={() => navigation.goBack()} title="entrar" />
      <MainContainer>
        <LoginContainer>
          <View style={{ margin: metrics.padding }}>
          <Input
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            label="email"
            status={emailError.status}
            error={emailError.error}
            keyboard='email-address'
          />
          <Input
            value={password}
            onChangeText={(text: string) => {
              if (!digitsOnly.test(text) && text.length <= 10) {
                setPassword(text)
              }
            }}
            label="password"
            status={passwordError.status}
            error={passwordError.error}
            keyboard='number-pad'
            secureTextEntry
          />
          </View>
        </LoginContainer>
        <MainButton
          onPress={() => {
            cleanErrors();
            if (checkEntries()) {
              setSubmited(true);
            }
          }}
          title='entrar'
          status={submited}
          disabled={submited}
        />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.View`
  color: ${colors.light_background};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const LoginContainer = styled.View`
  margin-top: ${metrics.double_padding}px;
  background-color: ${colors.input_background};
  border-radius: 20px;
`;

export default Login;
