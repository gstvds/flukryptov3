import React from 'react';

import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/helpers';

interface InputProps {
  children?: React.ReactNode;
  label: string;
  error: string;
  status: boolean;
  keyboard?: string;
  value: string;
  onChangeText: any;
  secureTextEntry?: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    error,
    status,
    keyboard,
    value,
    onChangeText,
    secureTextEntry,
  } = props;

  return (
    <FormContainer>
      <InputLabel>{label}</InputLabel>
      <CustomInput
        {...props}
        type="custom"
        blurOnSubmit
        autoCorrect={false}
        keyboardType={keyboard}
      />
      {status && (
        <ErrorText allowFontScaling={false}>
          {error}
        </ErrorText>
      )  
      }
    </FormContainer>
  );
};

const FormContainer = styled.View`
  width: 100%;
`;

const InputLabel = styled.Text<any>`
  width: ${metrics.screen_width - metrics.double_padding * 5}px;
  font-size: 20px;
  font-family: ${fonts.quicksand};
  color: ${props => (props.status ? colors.red : colors.light_grey)};
  margin-vertical: 3px;
  margin-horizontal: ${metrics.padding}px;
`;

const CustomInput = styled.TextInput<any>`
  color: ${props => (props.status ? colors.red : colors.light_grey)};
  font-size: 20px;
  font-family: ${fonts.quicksand_medium};
  border-bottom-width: 1px;
  border-color: ${colors.light_grey};
  padding-horizontal: 2px;
  padding-vertical: 2px;
  width: ${metrics.screen_width - metrics.double_padding * 5}px;
  margin-horizontal: ${metrics.padding}px;
  margin-bottom: ${metrics.half_padding}px;
`;

const ErrorText = styled.Text`
  font-family: ${fonts.quicksand_bold};
  color: ${colors.red};
  margin-horizontal: ${metrics.padding}px;
  align-self: flex-start;
  font-size: 14px;
`;

export default Input;
