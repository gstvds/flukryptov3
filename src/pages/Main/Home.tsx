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

  const [storeData, setStoreData] = useState([]);
  const [allNames, setAllNames] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [subscribed, setSubscribed] = useState(true);
  let names: any = [];

  const makeRequest = useCallback(async () => {
    const response = await core.routes.getData();
    setStoreData(response.data.Data);
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    makeRequest();
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    storeData.forEach((coin: Coin) => {
      // @ts-ignore
      names.push({
        fullName: coin.CoinInfo.FullName,
        name: coin.CoinInfo.Name,
        price: coin.DISPLAY.USD.PRICE,
        percentage: coin.DISPLAY.USD.CHANGEPCTDAY,
        volume: coin.DISPLAY.USD.TOTALVOLUME24HTO,
      });
    });
    setAllNames(names);
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
        top tier volume
      </ScreenTitle>
    </TitleContainer>
    <MainContainer>
      {isLoading && (
        <ActivityIndicator color={colors.green} size='small'/>
      )}
      {!isLoading &&  (
      <FlatList
        // @ts-ignore
        keyExtractor={(name) => name.name}
        data={allNames}
        renderItem={({ item }) => (
          <CryptoView>
            <CryptoCard
              coinVolume={item.volume}
              coinValue={item.price}
              coinDayChange={item.percentage}
              cryptoName={item.name}
              iconName={subscribed ? 'ios-star' : 'ios-star-outline'}
              onPress={() => setSubscribed(!subscribed)}
            />
          </CryptoView>
        )}
      />
      )}
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

// const Loading = styled.ActivityIndicator`
//   color: ${colors.green};
//   justify-content: center;
//   align-items: center;
// `;

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

const CryptoView = styled.View`
  width: 100%;
`;

export default Home;
