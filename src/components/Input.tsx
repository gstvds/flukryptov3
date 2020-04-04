import React, { useState, FC } from 'react';

import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/helpers';

interface InputProps {
  children?: { value: string };
  label: string;
  error: string;
  status: boolean;
  onFocus: any;
  onBlur: any;
  isFocused: boolean;
  keyboard?: string;
}

const Input: FC<InputProps> = (props) => {
  return (
    <FormContainer>
      <InputLabel>{props.label}</InputLabel>
      <CustomInput
        {...props}
        type="custom"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        blurOnSubmit
        autoCorrect={false}
        keyboardType={props.keyboard}
      />
    </FormContainer>
  );
};

const FormContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.Text<any>`
  width: ${metrics.screen_width - metrics.double_padding * 5};
  font-size: 20px;
  font-family: ${fonts.quicksand};
  color: ${(props) => (props.status ? colors.red : colors.light_grey)};
  margin-left: ${metrics.padding};
  margin-right: ${metrics.padding};
`;

const CustomInput = styled.TextInput<any>`
  color: ${colors.light_grey};
  height: 45px;
  font-size: 20px;
  font-family: ${fonts.quicksand_medium};
  border-bottom-width: 1px;
  border-color: ${colors.light_grey};
  width: ${metrics.screen_width - metrics.double_padding * 5};
  margin-horizontal: ${metrics.padding};
  margin-bottom: ${metrics.padding};
`;

export default Input;
