import styled from 'styled-components/native';

import { metrics } from '~/helpers';

export const MainContainer = styled.View<any>`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const SignUpContainer = styled.View<any>`
  margin-top: ${metrics.double_padding}px;
  background-color: ${(props) => props.theme.input_background};
  padding-horizontal: ${metrics.padding}px;
  padding-top: ${metrics.padding}px;
  padding-bottom: ${metrics.double_padding}px;
  border-radius: 25px;
`;