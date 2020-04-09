import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import core from '~/core';

import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/helpers';

import CryptoCard from '~/components/CryptoCard';
import Header from '~/components/Header';

import { Coin } from 'core/interfaces';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [submited, setSubmited] = useState(false);
  let data: Array<object> = [];

  const fetchData = async () => {
    data = [];
    setIsLoading(true);
    const response = await core.routes.getData(page);
    setPage(page + 1);
    response.data.Data.forEach((coin: Coin) => {
      data.push({
        id: `${coin.CoinInfo.Name}${coin.CoinInfo.FullName}`,
        fullName: coin.CoinInfo.FullName,
        name: coin.CoinInfo.Name,
        price: coin.DISPLAY.USD.PRICE,
        percentage: coin.DISPLAY.USD.CHANGEPCT24HOUR,
        volume: coin.DISPLAY.USD.TOTALVOLUME24HTO,
      });
    });
    core.collections.CoinCollection.collect(data, 'all');
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (submited) {
      setSubmited(false);
    }
  }, [submited])

  const isCloseToBottom = (nativeEvent: any) => {
    const paddingToBottom = 20;
    return (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom
    );
  };

  const handleLogout = async () => {
    await core.routes.logout();
    navigation.navigate('Welcome');
  }

  return (
    navigation.addListener('focus', () => {
      setSubmited(true);
    }) && (
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
                { text: 'OK', onPress: () => handleLogout() },
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
        <ScrollView
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              fetchData();
            }
          }}
        >
          {core.collections.CoinCollection.getGroup('all').output.map(
            (object) => (
              <CryptoView key={object.id} >
                <CryptoCard
                  onPressCard={() => {}}
                  down={Number(object.percentage) < 0 ? true : false}
                  coinVolume={object.volume}
                  cryptoName={object.name}
                  coinDayChange={object.percentage}
                  coinValue={object.price}
                  onPress={() => {
                    core.collections.Subscribe(object.id, [
                      {
                        id: object.id,
                        name: object.name,
                        volume: object.volume,
                        percentage: object.percentage,
                        price: object.price,
                      },
                    ]);
                    setSubmited(true);
                  }}
                  iconName={
                    core.collections.CoinCollection.getGroup('subscribes').has(object.id)
                    ? 'ios-star'
                    : 'ios-star-outline'
                  }
                />
              </CryptoView>
            ),
          )}
        </ScrollView>
      </MainContainer>
    </>
  ));
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
