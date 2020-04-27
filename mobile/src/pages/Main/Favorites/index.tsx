import React, { useEffect, useState, useContext } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components/native';
import { CryptoView, TitleContainer, ScreenTitle, MainContainer } from './styles';

import CryptoCard from '~/components/CryptoCard';
import Header from '~/components/Header';

import core from '~/core';

const Favorites = () => {
  const [allData, setAllData] = useState<Array<any>>([]);
  const [submited, setSubmited] = useState<boolean>(false);

  const navigation = useNavigation();
  const theme: any = useContext(ThemeContext);

  useEffect(() => {
    if (submited) {
      setAllData(core.coins.collections.CoinCollection.getGroup('subscribes').output);
      setSubmited(false);
    }
  }, [submited]);

  return (
    navigation.addListener('focus', () => {
      setAllData(core.coins.collections.CoinCollection.getGroup('subscribes').output);
      let data = core.coins.collections.CoinCollection.getGroup('subscribes').output;
    }) && (
      <>
        <View style={{ backgroundColor: theme.background }}>
          <Header
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
                  cryptoName={item.fullName}
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

export default Favorites;
