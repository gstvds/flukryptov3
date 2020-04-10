import React from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { ButtonProps } from '~/core/interfaces';

import { colors, metrics, fonts } from '~/helpers';

const SmallButton = (props: ButtonProps) => {
  const {
    status,
    onPress,
    disabled,
    title,
  } = props;

  return (
    <View>
      {!status && (
        <MainContainer>
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
          >
            <ButtonContainer>
              <ButtonTitle>{title}</ButtonTitle>
            </ButtonContainer>
          </TouchableOpacity>
        </MainContainer>
      )}
      {status && (
        <Loading>
          <ActivityIndicator color={colors.black} size="small" />
        </Loading>
      )}
    </View>
  );
};

const MainContainer = styled.View<any>`
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

const ButtonContainer = styled.View<any>`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${metrics.padding}px;
  margin-vertical: ${metrics.half_padding}px;
  padding-vertical: ${metrics.half_padding}px;
  background-color: ${(props) => props.color || colors.green};
  width: ${metrics.screen_width / 2.5}px;
`;

const ButtonTitle = styled.Text<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 20px;
  margin-bottom: 3px;
  color: ${(props) => props.fontColor || colors.black};
`;

const Loading = styled(View)<any>`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${metrics.double_padding}px;
  padding-vertical: ${metrics.padding + 2}px;
  margin-vertical: ${metrics.half_padding}px;
  background-color: ${props => props.color || colors.green};
`

export default SmallButton;
