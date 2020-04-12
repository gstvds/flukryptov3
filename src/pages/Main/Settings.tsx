import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styled, { ThemeContext } from 'styled-components/native';

import Header from '~/components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fonts, metrics } from '~/helpers';
import { usePulse } from '~/../pulse/dist';
import core from '~/core';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const [themed] = usePulse([core.themed]);

  const theme: any = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await core.routes.logout();
    navigation.navigate('Welcome');
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
          <TouchableOpacity
            onPress={() => {
              core.themed.set(!themed);
            }}
            style={{
              borderBottomWidth: 1,
              borderColor: theme.title,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ButtonText>{themed ? 'dark mode' : 'light mode'}</ButtonText>
              <Icon
                name={themed ? 'ios-moon' : 'ios-sunny'}
                size={22}
                color={theme.icon}
              />
            </View>
          </TouchableOpacity>
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

const MainContainer = styled.View<any>`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.background};
`;

const ScreenTitle = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 22px;
  color: ${(props) => props.theme.title};
`;

const TitleContainer = styled.View<any>`
  background-color: ${(props) => props.theme.background};
  height: ${metrics.screen_width / 5 - metrics.padding}px;
  padding-horizontal: ${metrics.double_padding}px;
  padding-top: ${metrics.double_padding}px;
`;

const ButtonContainer = styled.View<any>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${metrics.double_padding + metrics.double_padding}px;
  padding-horizontal: ${metrics.padding}px;
`;

const ButtonText = styled.Text<any>`
  color: ${(props) => props.theme.title};
  font-size: 24px;
  font-family: ${fonts.quicksand};
  margin-right: ${metrics.padding}px;
  text-align: center;
`;

const LogoutButton = styled.TouchableOpacity<any>``;

const SpaceContainer = styled.View`
  flex: 1;
  background-color: red;
  padding-bottom: ${metrics.double_padding}px;
`;

const LogoutContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${metrics.double_padding}px;
`;

const LogoutText = styled.Text<any>`
  color: ${(props) => props.theme.red};
  font-size: 24px;
  font-family: ${fonts.quicksand};
  text-align: center;
`;

export default Settings;
