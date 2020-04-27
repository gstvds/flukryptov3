import styled from 'styled-components/native';

import { fonts, metrics } from '~/helpers';

export const ScreenTitle = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 22px;
  color: ${props => props.theme.title};
`;

export const TitleContainer = styled.View<any>`
  background-color: ${props => props.theme.background};
  height: ${metrics.screen_width / 5 - metrics.padding}px;
  padding-horizontal: ${metrics.double_padding}px;
  padding-top: ${metrics.double_padding}px;
`;

export const MainContainer = styled.View<any>`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CryptoView = styled.View`
  width: 100%;
`;