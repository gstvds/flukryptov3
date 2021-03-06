import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { ButtonProps } from '~/core/interfaces';

import { metrics, fonts, colors } from '../helpers';
import styled, { ThemeContext } from 'styled-components/native';

const MainButton = (props: ButtonProps) => {
  const {
    outline,
    onPress,
    disabled,
    title,
    status,
  } = props;
  const theme = useContext(ThemeContext);

  if (outline) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
      >
        <OutlineButtonView>
          <ButtonTitle allowFontScaling={false}>
            {title}
          </ButtonTitle>
        </OutlineButtonView>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      {!status
        && (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
          >
            <FullButtonView>
              <ButtonTitle allowFontScaling={false}>
                {title}
              </ButtonTitle>
            </FullButtonView>
          </TouchableOpacity>
        )
      }
      {
        status
        && (
          <Loading>
            <ActivityIndicator color={colors.black} size='small' />
          </Loading>
        )
      }
    </View>
  );
}

const FullButtonView = styled.View<any>`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${metrics.padding}px;
  padding-vertical: ${metrics.padding + 2}px;
  margin-vertical: ${metrics.double_padding}px;
  background-color: ${(props) => props.color || props.theme.green };
  width: ${metrics.screen_width / 1.8}px;
`

const Loading = styled(View)<any>`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${metrics.double_padding}px;
  padding-vertical: ${metrics.padding + 2}px;
  margin-vertical: ${metrics.half_padding}px;
  background-color: ${props => props.color || props.theme.green};
`

const OutlineButtonView = styled(View)<any>`
  border-radius: 100px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-horizontal: ${metrics.double_padding}px;
  padding-vertical: ${metrics.padding + 2}px;
  margin-vertical: ${metrics.half_padding}px;
  border-color: ${props => props.color || props.theme.button_text};
  width: ${metrics.screen_width / 1.8}px;
`

const ButtonTitle = styled(Text)<any>`
  font-family: ${fonts.quicksand_bold};
  font-size: 20px;
  margin-bottom: 3px;
  color: ${props => props.fontColor || props.theme.button_text};
`

export default MainButton;