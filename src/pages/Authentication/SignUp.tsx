import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styled, { ThemeContext } from 'styled-components/native';

import core from '~/core/index';
import { metrics, validators } from '~/helpers';

import Header from '~/components/Header';
import Input from '~/components/Input';
import MainButton from '~/components/MainButton';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [nameError, setNameError] = useState({ status: false, error: '' });
  const [emailError, setEmailError] = useState({ status: false, error: '' });
  const [passwordError, setPasswordError] = useState({
    status: false,
    error: '',
  });
  const [repeatPasswordError, setRepeatPasswordError] = useState({
    status: false,
    error: '',
  });

  const [submited, setSubmited] = useState(false);

  const digitsOnly = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][a-zA-Z]+/;
  const navigation = useNavigation();

  const theme: any = useContext(ThemeContext);

  const cleanErrors = () => {
    setNameError({ status: false, error: '' });
    setEmailError({ status: false, error: '' });
    setPasswordError({ status: false, error: '' });
    setRepeatPasswordError({ status: false, error: '' });
  };

  const checkEntries = () => {
    if (name === '') {
      setNameError({ status: true, error: 'O nome não pode estar vazio' });
      return false;
    }
    if (email === '') {
      setEmailError({ status: true, error: 'O email não pode estar vazio' });
      return false;
    }
    if (password === '') {
      setPasswordError({ status: true, error: 'A senha não pode estar vazia' });
      return false;
    }
    if (password.length < 4) {
      setPasswordError({
        status: true,
        error: 'A senha deve conter no mínimo 4 dígitos',
      });
      return false;
    }
    if (repeatPassword === '') {
      setRepeatPasswordError({
        status: true,
        error: 'A senha não pode estar vazia',
      });
      return false;
    }
    if (password !== repeatPassword) {
      setRepeatPasswordError({
        status: true,
        error: 'As senhas não coincidem',
      });
      return false;
    }
    if (!validators.emailValidator(email)) {
      setEmailError({ status: true, error: 'Email inválido' });
      return false;
    }
    return true;
  };

  useEffect(() => {
    async function signUp() {
      await core.routes.signUp({
        email,
        password,
        name,
      });
      setSubmited(false);
      navigation.navigate('Home');
    }
    if (submited) {
      signUp();
    }
  }, [submited]);

  return (
    <>
      <View style={{ backgroundColor: theme.background }} >
        <Header onPress={() => navigation.goBack()} title="cadastrar" />
      </View>
      <MainContainer>
        <SignUpContainer>
          <Input
            value={name}
            onChangeText={(text: string) => setName(text)}
            label="nome"
            status={nameError.status}
            error={nameError.error}
          />
          <Input
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            label="email"
            status={emailError.status}
            error={emailError.error}
          />
          <Input
            value={password}
            onChangeText={(text: string) => {
              if (!digitsOnly.test(text) && text.length <= 10) {
                setPassword(text);
              }
            }}
            label="senha"
            status={passwordError.status}
            error={passwordError.error}
            secureTextEntry
          />
          <Input
            value={repeatPassword}
            onChangeText={(text: string) => {
              if (!digitsOnly.test(text) && text.length <= 10) {
                setRepeatPassword(text);
              }
            }}
            label="repetir senha"
            status={repeatPasswordError.status}
            error={repeatPasswordError.error}
            secureTextEntry
          />
        </SignUpContainer>
        <MainButton
          onPress={() => {
            cleanErrors();
            if (checkEntries()) {
              setSubmited(true);
            }
          }}
          title="cadastrar"
          disabled={submited}
          status={submited}
        />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.View<any>`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const SignUpContainer = styled.View<any>`
  margin-top: ${metrics.double_padding}px;
  background-color: ${(props) => props.theme.input_background};
  padding-horizontal: ${metrics.padding}px;
  padding-top: ${metrics.padding}px;
  padding-bottom: ${metrics.double_padding}px;
  border-radius: 25px;
`;

export default SignUp;
