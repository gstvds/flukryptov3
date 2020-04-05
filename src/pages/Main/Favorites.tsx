import React from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

import Header from '~/components/Header';
import { colors, fonts, metrics } from '~/helpers';

const Favorites = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ backgroundColor: colors.white}} >
        <Header
          onPress={() => {
            Alert.alert(
              'Fazer Logout?',
              'Você irá sair da sua conta no aplicativo',
              [
                {
                  text: 'Cancel',
                  onPress: () => { },
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => navigation.navigate('Welcome') },
              ],
              { cancelable: false },
            );
          }}
          logout
        />
      </View>
      <TitleContainer>
      <ScreenTitle>
        favoritas
      </ScreenTitle>
    </TitleContainer>
    </>
  )
}

const ScreenTitle = styled.Text`
  font-family: ${fonts.quicksand_bold};
  font-size: 22px;
  color: ${colors.black};
`;

const TitleContainer = styled.View`
  background-color: ${colors.light_background};
  height: ${(metrics.screen_width / 5) - metrics.padding}px;
  padding-horizontal: ${metrics.double_padding}px;
  padding-top: ${metrics.double_padding}px;
`;

export default Favorites