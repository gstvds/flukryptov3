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
  const [allData, setAllData] = useState([]);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (submited) {
      // @ts-ignore
      setAllData(core.collections.CoinCollection.getGroup('subscribes').output);
      setSubmited(false);
    }
  }, [submited])

  return (
    navigation.addListener('focus', () => {
      // @ts-ignore
      setAllData(core.collections.CoinCollection.getGroup('subscribes').output);
      let data = core.collections.CoinCollection.getGroup('subscribes').output;
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
                  { text: 'OK', onPress: () => navigation.navigate('Welcome') },
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
            // @ts-ignore
            keyExtractor={(item) => `${item.name}${item.fullName}`}
            showsVerticalScrollIndicator={false}
            data={allData}
            renderItem={({ item }) => (
              <CryptoView>
                <CryptoCard
                  onPressCard={() => {}}
                  // @ts-ignore
                  down={Number(item.percentage) < 0 ? true : false}
                  // @ts-ignore
                  coinVolume={item.volume}
                  // @ts-ignore
                  coinValue={item.price}
                  // @ts-ignore
                  coinDayChange={item.percentage}
                  // @ts-ignore
                  cryptoName={item.name}
                  iconName={
                    // @ts-ignore
                    core.collections.CoinCollection.getGroup('subscribes').has(item.id)
                      ? 'ios-star'
                      : 'ios-star-outline'
                  }
                  onPress={() => {
                    // @ts-ignore
                    core.collections.Subscribe(item.id, [
                      {
                        // @ts-ignore
                        id: item.id,
                        // @ts-ignore
                        name: item.name,
                        // @ts-ignore
                        volume: item.volume,
                        // @ts-ignore
                        percentage: item.percentage,
                        // @ts-ignore
                        price: item.price,
                      },
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
