import React, { useEffect, useState } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

import Header from '~/components/Header';
import { colors, fonts, metrics } from '~/helpers';
import CryptoCard from '~/components/CryptoCard';
import core from '~/core';

const Favorites = () => {
  const navigation = useNavigation();
  const [allData, setAllData] = useState<Array<any>>([]);
  const [submited, setSubmited] = useState<boolean>(false);

  useEffect(() => {
    if (submited) {
      setAllData(core.coins.collections.CoinCollection.getGroup('subscribes').output);
      setSubmited(false);
    }
  }, [submited]);

  const handleLogout = async () => {
    await core.routes.logout();
    navigation.navigate('Welcome');
  }

  return (
    navigation.addListener('focus', () => {
      setAllData(core.coins.collections.CoinCollection.getGroup('subscribes').output);
      let data = core.coins.collections.CoinCollection.getGroup('subscribes').output;
    }) && (
      <>
        <View style={{ backgroundColor: colors.white }}>
          <Header
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
            logout
          />
        </View>
        <TitleContainer>
          <ScreenTitle>favoritas</ScreenTitle>
        </TitleContainer>
        <MainContainer>
          <FlatList
            keyExtractor={(item: any) => `${item.name}${item.fullName}`}
            showsVerticalScrollIndicator={false}
            data={allData}
            renderItem={({ item }: any) => (
              <CryptoView>
                <CryptoCard
                  onPressCard={() => {}}
                  down={Number(item.percentage) < 0 ? true : false}
                  coinVolume={item.volume}
                  coinValue={item.price}
                  coinDayChange={item.percentage}
                  cryptoName={item.name}
                  iconName={
                    core.coins.collections.CoinCollection.getGroup('subscribes').has(item.id)
                      ? 'ios-star'
                      : 'ios-star-outline'
                  }
                  onPress={() => {
                    core.coins.routes.Subscribe(item.id, [
                      item,
                    ]);
                    setSubmited(true);
                  }}
                />
              </CryptoView>
            )}
          />
        </MainContainer>
      </>
    )
  );
};

const ScreenTitle = styled.Text`
  font-family: ${fonts.quicksand_bold};
  font-size: 22px;
  color: ${colors.black};
`;

const TitleContainer = styled.View`
  background-color: ${colors.light_background};
  height: ${metrics.screen_width / 5 - metrics.padding}px;
  padding-horizontal: ${metrics.double_padding}px;
  padding-top: ${metrics.double_padding}px;
`;

const MainContainer = styled.View`
  background-color: ${colors.light_background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CryptoView = styled.View`
  width: 100%;
`;

export default Favorites;
