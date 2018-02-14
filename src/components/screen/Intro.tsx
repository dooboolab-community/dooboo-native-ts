import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';

import appStore from '@stores/appStore';
import { ratio, bgColor } from '@utils/Styles';
import { IC_MASK } from '@utils/Icons';

import Button from '@shared/Button';

interface IState {
  isLoggingIn: boolean;
}

class Page extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}>DOOBOO NATIVE</Text>
        <View style={styles.btnBottomWrapper}>
          <Button
            isLoading={this.state.isLoggingIn}
            onPress={this.onLogin}
            btnStyle={styles.btnLogin}
            txtStyle={styles.txtLogin}
            imgLeftSrc={IC_MASK}
            imgLeftStyle={styles.imgBtn}
          />
        </View>
      </View>
    );
  }

  private onLogin = () => {
    console.log('onLogin');
    this.setState({ isLoggingIn: true });
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 140 * ratio,
    color: 'white',
    fontSize: 28 * ratio,
  },
  btnBottomWrapper: {
    position: 'absolute',
    bottom: 16 * ratio,
  },
  btnLogin: {
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
  txtLogin: {
    fontSize: 14 * ratio,
    color: 'white',
  },
  imgBtn: {
    width: 24 * ratio,
    height: 24 * ratio,
    position: 'absolute',
    left: 16 * ratio,
  },
});

export default Page;
