import React, { useContext } from 'react';
import { View, Alert, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from 'styled-components/native';
import { metrics } from '~/helpers';
import {
  ButtonContainer,
  MainContainer,
  ScreenTitle,
  TitleContainer,
  ButtonText,
  LogoutContainer,
  LogoutText,
  SpaceContainer,
  SwitchContainer,
} from './styles';

import { usePulse } from '~/../pulse/dist';
import core from '~/core';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '~/components/Header';

const Settings = () => {
  const [themed] = usePulse([core.themed]);

  const theme: any = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await core.routes.logout(navigation.navigate);
  };

  return (
    <>
      <View style={{ backgroundColor: theme.background }}>
        <Header logout />
      </View>
      <TitleContainer>
        <ScreenTitle>configurações</ScreenTitle>
      </TitleContainer>
      <MainContainer>
        <ButtonContainer>
          <ButtonText>trocar modo:</ButtonText>
          <SwitchContainer>
            <Icon
              name={themed ? 'ios-moon' : 'ios-sunny'}
              size={22}
              color={theme.theme_icon}
              style={{ marginRight: metrics.padding }}
            />
            <Switch
              value={themed}
              onValueChange={() => {
                core.themed.set(!themed);
              }}
              trackColor={{
                false: theme.input_background,
                true: theme.green,
              }}
              thumbColor={theme.white}
            />
          </SwitchContainer>
        </ButtonContainer>
        <SpaceContainer />
        <LogoutContainer>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Fazer Logout?',
                'Você irá sair da sua conta no aplicativo',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => handleLogout() },
                ],
                { cancelable: false },
              );
            }}
            style={{
              borderColor: theme.red,
              borderBottomWidth: 1,
            }}
          >
            <LogoutText>sair</LogoutText>
          </TouchableOpacity>
        </LogoutContainer>
      </MainContainer>
    </>
  );
};

export default Settings;
