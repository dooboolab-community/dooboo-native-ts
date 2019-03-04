import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const StyledButton = styled.View`
  background-color: transparent;
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: white;

  align-items: center;
  justify-content: center;
`;

const StyledButtonDisabled = styled(StyledButton)`
  background-color: rgb(224,224,224);
  border-color: rgb(200,200,200);
`;

const StyledText = styled.Text`
  font-size: 14;
  color: white;
`;

const StyledTextDisabled = styled(StyledText)`
  color: #969696;
`;

const StyledImage = styled.Image`
  width: 24;
  height: 24;
  position: absolute;
  left: 16;
`;

interface IProps {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: any;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function Button(props: IProps) {
  if (props.isDisabled) {
    return (
      <StyledButtonDisabled style={props.disabledStyle}>
        <StyledTextDisabled style={props.textStyle}>{props.text}</StyledTextDisabled>
      </StyledButtonDisabled>
    );
  }
  if (props.isLoading) {
    return (
      <StyledButton style={props.style}>
        <ActivityIndicator size='small' color={props.indicatorColor} />
      </StyledButton>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.onClick}
    >
      <StyledButton style={props.style}>
        {
          props.imgLeftSrc
            ? <StyledImage
              style={props.imgLeftStyle}
              source={props.imgLeftSrc}
            />
            : null
        }
        <StyledText style={props.textStyle}>{props.text}</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  indicatorColor: 'white',
  activeOpacity: 0.5,
};

export default Button;
