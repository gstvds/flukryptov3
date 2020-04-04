import React  from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

import header from '~/assets/header.png';
import { metrics, fonts, colors } from '~/helpers';

interface HeaderProps {
  children?: React.ReactNode;
  main?: boolean;
  title?: string;
  logout?: boolean;
  disabled?: boolean;
  onPress: any;
}

const Header = (props: HeaderProps) => {
  if (props.logout) {
    return (
      <HeaderContainer>
        <ImageContainer>
          <Logo source={header} />
        </ImageContainer>
        <LogoutButton disabled={props.disabled} onPress={props.onPress}>
          <Icon name="ios-log-out" size={26} />
        </LogoutButton>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <BackButton
        onPress={props.onPress}
        disabled={props.disabled}
      >
        <Icon name="ios-arrow-down" size={26} />
      </BackButton>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 60px;
  flex-direction: row;
  margin-horizontal: ${metrics.padding};
  margin-top: 10px;
`;

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: ${(metrics.half_padding) + 26};
`;

const Title = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 26px;
  text-align: center;
  color: ${(props) => props.color || colors.black};
`;

const BackButton = styled.TouchableOpacity`
  margin-horizontal: ${metrics.half_padding};
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
