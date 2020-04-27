import styled from 'styled-components/native';

import { fonts, metrics } from '~/helpers';

export const MainContainer = styled.View<any>`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.background};
`;

export const ScreenTitle = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 22px;
  color: ${(props) => props.theme.title};
`;

export const TitleContainer = styled.View<any>`
  background-color: ${(props) => props.theme.background};
  height: ${metrics.screen_width / 5 - metrics.padding}px;
  padding-horizontal: ${metrics.double_padding}px;
  padding-top: ${metrics.double_padding}px;
`;

export const ButtonContainer = styled.View<any>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${metrics.double_padding + metrics.double_padding}px;
  padding-horizontal: ${metrics.padding}px;
`;

export const ButtonText = styled.Text<any>`
  color: ${(props) => props.theme.title};
  font-size: 24px;
  font-family: ${fonts.quicksand};
  margin-left: ${metrics.padding}px;
  text-align: center;
`;

export const SwitchContainer = styled.View<any>`
  flex-direction: row;
  justify-content: space-around;
  margin-right: ${metrics.padding}px;
`;

export const SpaceContainer = styled.View`
  flex: 1;
  padding-bottom: ${metrics.double_padding}px;
`;

export const LogoutContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${metrics.double_padding}px;
`;

export const LogoutText = styled.Text<any>`
  color: ${(props) => props.theme.red};
  font-size: 24px;
  font-family: ${fonts.quicksand};
  text-align: center;
`;