import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import NativeButton from 'apsl-react-native-button';

import { ratio, bgColor } from '@utils/Styles';

const styles: any = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 4 * ratio,
    borderWidth: 2 * ratio,
    width: 320 * ratio,
    height: 52 * ratio,
    borderColor: 'white',
  },
  txt: {
    fontSize: 14 * ratio,
    color: 'white',
  },
  imgLeft: {
    width: 24 * ratio,
    height: 24 * ratio,
    position: 'absolute',
    left: 16 * ratio,
  },
});

interface ItemProps {
  isLoading?: boolean;
  onClick?: () => void;
  btnStyle?: View.propTypes.style;
  txtStyle?: Text.propTypes.style;
  imgLeftSrc?: Image.propTypes.source;
  imgLeftStyle?: Image.propTypes.style;
}

class Button extends Component<ItemProps, any> {
  private static defaultProps: Partial<ItemProps> = {
    isLoading: false,
    btnStyle: styles.btn,
    txtStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <NativeButton
        onPress={this.props.onClick}
        isLoading={this.props.isLoading}
        activeOpacity={0.5}
        style={this.props.btnStyle}
        textStyle={ this.props.txtStyle }
      >
        {
          this.props.imgLeftSrc
            ? <Image
              style={this.props.imgLeftStyle}
              source={this.props.imgLeftSrc}
            />
            : null
        }
        Login
      </NativeButton>
    );
  }
}

export default Button;
