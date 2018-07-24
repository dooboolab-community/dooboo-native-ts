import React from 'react';
import { AsyncStorage, View, Platform } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import appStore from '../../stores/appStore';
import IntroScreen from '../screen/Intro';
import NotFoundScreen from '../screen/NotFound';
import { observer, inject } from 'mobx-react/native';

interface IState {
  startPage: string;
}

const routeConfig = {
  Intro: {
    screen: IntroScreen,
    path: 'Intro',
  },
  NotFound: {
    screen: NotFoundScreen,
    path: 'NotFound',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  header: null,
  headerMode: 'none',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  transitionConfig: () => ({ screenInterpolator:
    appStore.rootNavigatorActionHorizontal
      ? StackViewStyleInterpolator.forHorizontal
      : StackViewStyleInterpolator.forVertical,
  }),
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

@inject('store') @observer
class RootNavigator extends React.Component<any, IState> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;
