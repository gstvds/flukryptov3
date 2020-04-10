import React  from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

import header from '~/assets/header.png';
import { metrics, fonts, colors } from '~/helpers';

import { HeaderProps } from 'core/interfaces';

/**
 * 
 * @param props React Native properties
 * @param logout Boolean that determinates if the header have logout button or not
 * @param title String that determinates header title
 * @param disabled Boolean that determinates if the button should be disabled or not
 * @param onPress Void that determinates onPress action
 */
const Header = (props: HeaderProps) => {
  const {
    logout,
    onPress,
    disabled,
    title,
    color,
  } = props;
  
  if (logout) {
    return (
      <HeaderContainer>
        <ImageContainer>
          <Logo source={header} />
        </ImageContainer>
        <LogoutButton disabled={disabled} onPress={onPress}>
          <Icon name="ios-log-out" size={26} />
        </LogoutButton>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <BackButton
        onPress={onPress}
        disabled={disabled}
      >
        <Icon name="ios-arrow-down" size={26} />
      </BackButton>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View<any>`
  align-items: center;
  justify-content: space-between;
  height: 60px;
  flex-direction: row;
  margin-horizontal: ${metrics.padding}px;
  margin-top: 10px;
`;

const TitleContainer = styled.View<any>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: ${(metrics.half_padding) + 26}px;
`;

const Title = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 26px;
  text-align: center;
  color: ${(props) => props.color || colors.black};
`;

const BackButton = styled.TouchableOpacity`
  margin-horizontal: ${metrics.half_padding}px;
`;

const LogoutButton = styled.TouchableOpacity``;

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  resize-mode: contain;
  width: 75%;
  height: 75%;
`;

export default Header;
