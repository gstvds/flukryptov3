import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import 'intl';

import styled, { ThemeContext } from 'styled-components/native';
import { fonts, metrics } from '~/helpers';

import { CryptoProps } from 'core/interfaces';

const CryptoCard = (props: CryptoProps) => {
  const {
    onPressCard,
    onPress,
    cryptoName,
    iconName,
    coinValue,
    coinVolume,
    coinDayChange,
    down,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <MainContainer>
      <TouchableOpacity onPress={onPressCard}>
        <TopContainer>
          <CoinName>{cryptoName}</CoinName>
          <IconContainer onPress={onPress}>
            <Icon name={iconName} size={22} color={theme.icon} />
          </IconContainer>
        </TopContainer>
        <BottomContainer>
          <Wrapper>
            <CoinInfoTitle>valor (USD)</CoinInfoTitle>
            <CoinInfoContainer>
              <CoinInfoValue>{coinValue}</CoinInfoValue>
            </CoinInfoContainer>
          </Wrapper>
          <Wrapper>
            <CoinInfoTitle>volume</CoinInfoTitle>
            <CoinInfoContainer>
              <CoinInfoValue>{coinVolume}</CoinInfoValue>
            </CoinInfoContainer>
          </Wrapper>
          <Wrapper>
            <CoinInfoTitle>variação/dia</CoinInfoTitle>
            <CoinInfoContainer percentage down={down}>
              <CoinInfoValue>{coinDayChange} %</CoinInfoValue>
            </CoinInfoContainer>
          </Wrapper>
        </BottomContainer>
      </TouchableOpacity>
    </MainContainer>
  );
};

const MainContainer = styled.View<any>`
  width: 100%;
  padding-horizontal: ${metrics.half_padding}px;
  padding-top: ${metrics.half_padding}px;
  padding-bottom: ${metrics.padding}px;
  background-color: ${props => props.theme.card_background};
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

const CoinName = styled.Text<any>`
  margin-left: ${metrics.half_padding}px;
  text-align: left;
  font-family: ${fonts.quicksand_bold};
  font-size: 20px;
  color: ${props => props.theme.card_text};
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

const CoinInfoTitle = styled.Text<any>`
  text-align: center;
  font-family: ${fonts.quicksand};
  font-size: 16px;
  color: ${props => props.theme.card_text};
`;

const CoinInfoContainer = styled.View<any>`
  margin-top: ${metrics.half_padding - 5}px;
  background-color: ${(props) =>
    props.percentage === true
      ? props.down
        ? props.theme.red
        : props.theme.green
      : props.theme.small_card_background};
  border-radius: 22px;
  width: 90px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const CoinInfoValue = styled.Text<any>`
  text-align: center;
  font-family: ${fonts.quicksand_medium};
  font-size: 16px;
  color: ${props => props.theme.card_text};
`;

export default CryptoCard;
