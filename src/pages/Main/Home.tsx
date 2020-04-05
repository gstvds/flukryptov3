import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, ActivityIndicator, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import core from '~/core';

import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/helpers';

import CryptoCard from '~/components/CryptoCard';
import Header from '~/components/Header';

import { Coin } from 'core/interfaces';

const Home = () => {
  const navigation = useNavigation();

  const [page, setPage] = useState(0);
  const [storeData, setStoreData] = useState([]);
  const [allNames, setAllNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  let data: Array<object> = [];
  const fetchData = async () => {
    console.log(page);

    setIsLoading(true);

    const response = await core.routes.getData(page);

    setPage(page + 1);
    // @ts-ignore
    setStoreData(response.data.Data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    data = [];
    storeData.forEach((coin: Coin) => {
      data.push({
        fullName: coin.CoinInfo.FullName,
        name: coin.CoinInfo.Name,
        price: coin.DISPLAY.USD.PRICE,
        percentage: coin.DISPLAY.USD.CHANGEPCTDAY,
        volume: coin.DISPLAY.USD.TOTALVOLUME24HTO,
      });
    });
    // @ts-ignore
    setAllNames([...allNames, ...data]);
  }, [storeData]);

  return (
    <>
      <View style={{ backgroundColor: colors.light_background }}>
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
        <ScreenTitle>top tier volume</ScreenTitle>
      </TitleContainer>
      <MainContainer>
        {isLoading && page === 0 && (
          <Loading>
            <ActivityIndicator color={colors.green} size="small" />
          </Loading>
        )}
        <FlatList
          // @ts-ignore
          keyExtractor={(item) => `${item.name}${item.fullName}`}
          showsVerticalScrollIndicator={false}
          data={allNames}
          onEndReached={fetchData}
          onEndReachedThreshold={0.2}
          renderItem={({ item }) => (
            <CryptoView>
              <CryptoCard
                // @ts-ignore
                coinVolume={item.volume}
                // @ts-ignore
                coinValue={item.price}
                // @ts-ignore
                coinDayChange={item.percentage}
                // @ts-ignore
                cryptoName={item.name}
                // @ts-ignore
                iconName={subscribed ? 'ios-star' : 'ios-star-outline'}
                onPress={() => {}}
              />
            </CryptoView>
          )}
        />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.View`
  background-color: ${colors.light_background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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

const CryptoView = styled.View`
  width: 100%;
`;

export default Home;
