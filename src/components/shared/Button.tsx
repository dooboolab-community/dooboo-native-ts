import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
// import NativeButton from 'apsl-react-native-button';

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

    alignItems: 'center',
    justifyContent: 'center',
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
  onPress?: () => void;
  btnStyle?: View.propTypes.style;
  txtStyle?: Text.propTypes.style;
  imgLeftSrc?: Image.propTypes.source;
  imgLeftStyle?: Image.propTypes.style;
  indicatorColor?: string;
}

class Button extends Component<ItemProps, any> {
  private static defaultProps: Partial<ItemProps> = {
    isLoading: false,
    btnStyle: styles.btn,
    txtStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
    indicatorColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    if (this.props.isLoading) {
      return (
        <View style={this.props.btnStyle}>
          <ActivityIndicator size='small' color={this.props.indicatorColor} />
        </View>
      );
    }
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.props.onPress}
      >
        <View style={this.props.btnStyle}>
          {
            this.props.imgLeftSrc
              ? <Image
                style={this.props.imgLeftStyle}
                source={this.props.imgLeftSrc}
              />
              : null
          }
          <Text style={this.props.txtStyle}>Login</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
