import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import 'intl'

import styled from 'styled-components/native';
import { colors, fonts, metrics } from '~/helpers';

import { CryptoProps } from 'core/interfaces';

const CryptoCard = (props: CryptoProps) => {

  useEffect(() => {
    console.log(Number(props.coinDayChange) < 0)
  }, [])

  return (
    <MainContainer>
      <TopContainer>
      <CoinName>
        {props.cryptoName}
      </CoinName>
      <IconContainer onPress={props.onPress}>
        <Icon name={props.iconName} size={22} color={colors.light_grey} />
      </IconContainer>
      </TopContainer>
      <BottomContainer>
        <Wrapper>
        <CoinInfoTitle>
          valor (USD)
        </CoinInfoTitle>
        <CoinInfoContainer>
          <CoinInfoValue>
          {props.coinValue}
          </CoinInfoValue>
        </CoinInfoContainer>
        </Wrapper>
        <Wrapper>
        <CoinInfoTitle>
          volume
        </CoinInfoTitle>
        <CoinInfoContainer>
          <CoinInfoValue>
            {props.coinVolume}
          </CoinInfoValue>
        </CoinInfoContainer>
        </Wrapper>
        <Wrapper>
        <CoinInfoTitle>
          variação/dia
        </CoinInfoTitle>
        <CoinInfoContainer percentage down={props.down}>
          <CoinInfoValue>
            {props.coinDayChange} %
          </CoinInfoValue>
        </CoinInfoContainer>
        </Wrapper>
      </BottomContainer>
    </MainContainer>
  );
}

const MainContainer = styled.View`
  width: 100%;
  padding-horizontal: ${metrics.half_padding}px;
  padding-top: ${metrics.half_padding}px;
  padding-bottom: ${metrics.padding}px;
  background-color: ${colors.background};
  border-radius: 22px;
  justify-content: space-between;
  margin-vertical: ${metrics.padding}px;
`;

const TopContainer = styled.View`
  margin-top: ${metrics.half_padding}px;
  flex-direction: row;
  justify-content: space-between;
`;

const IconContainer = styled.TouchableOpacity`
  margin-horizontal: ${metrics.padding - 5}px;
`;

const CoinName = styled.Text`
  margin-left: ${metrics.half_padding}px;
  text-align: left;
  font-family: ${fonts.quicksand_bold};
  font-size: 20px;
  color: ${colors.light_grey};
`;

const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: ${metrics.half_padding}px;
  margin-bottom: ${metrics.half_padding - 5}px;
`;

const Wrapper = styled.View`
  margin-top: ${metrics.half_padding}px;
  padding-horizontal: ${metrics.half_padding}px;
  justify-content: center;
  align-items: center;
`;

const CoinInfoTitle = styled.Text`
  text-align: center;
  font-family: ${fonts.quicksand};
  font-size: 16px;
  color: ${colors.light_grey};
`;

const CoinInfoContainer = styled.View<any>`
  margin-top: ${metrics.half_padding - 5}px;
  background-color: ${props => props.percentage === true ? (props.down ? colors.red : colors.green) : colors.light_dark_grey};
  border-radius: 22px;
  width: 90px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const CoinInfoValue = styled.Text`
  text-align: center;
  font-family: ${fonts.quicksand_medium};
  font-size: 16px;
  color: ${colors.light_grey};
`;

export default CryptoCard;