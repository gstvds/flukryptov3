import React, { useContext } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styled, { ThemeContext } from 'styled-components/native';

import lightHeader from '~/assets/light/header.png';
import darkHeader from '~/assets/dark/header.png'
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
  const { logout, onPress, disabled, title, color } = props;
  const theme = useContext(ThemeContext);

  if (logout) {
    return (
      <HeaderContainer>
        <ImageContainer>
          <Logo source={theme.name === 'dark' ? darkHeader : lightHeader} />
        </ImageContainer>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <BackButton onPress={onPress} disabled={disabled}>
        <Icon name="ios-arrow-down" size={26} color={theme.title} />
      </BackButton>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View<any>`
  background-color: ${props => props.theme.background};
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
  margin-right: ${metrics.half_padding + 26}px;
`;

const Title = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 26px;
  text-align: center;
  color: ${(props) => props.theme.button_text};
`;

const BackButton = styled.TouchableOpacity`
  margin-horizontal: ${metrics.half_padding}px;
`;

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
