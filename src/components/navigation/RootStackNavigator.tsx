import React from 'react';
import { AsyncStorage, View, Platform } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Intro from '@screen/Intro';
import NotFound from '@screen/NotFound';
import { observer } from 'mobx-react/native';
import appStore from '@stores/appStore';

interface IState {
  startPage: string;
}

@observer
class RootNavigator extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      startPage: '',
    };
  }

  public componentDidMount() {
    this.initPage();
  }

  public initPage = async () => {
    const startPage = 'Intro';
    console.log('startPage: ' + startPage);
    this.setState({ startPage });
  }

  public render() {
    const routeConfig = {
      Intro: {
        screen: Intro,
        path: 'intro',
      },
      NotFound: {
        screen: NotFound,
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.startPage,
      header: null,
      headerMode: 'none',
      gesturesEnabled: true,
      statusBarStyle: 'light-content',
      transitionConfig: () => ({ screenInterpolator:
        appStore.$rootNavigatorActionHorizontal
          ? CardStackStyleInterpolator.forHorizontal
          : CardStackStyleInterpolator.forVertical,
      }),
    };

    // FIXED: Current fix for navigating twice
    const RootStackNavigator = StackNavigator(routeConfig, navigatorConfig);
    // if (Platform.OS === 'ios') {
    //   const navigateOnce = (getStateForAction) => (action, state) => {
    //     const { type, routeName } = action;
    //     return (
    //       state &&
    //       type === NavigationActions.NAVIGATE &&
    //       routeName === state.routes[state.routes.length - 1].routeName
    //     ) ? null : getStateForAction(action, state);
    //   };
    //   RootStackNavigator.router.getStateForAction = navigateOnce(RootStackNavigator.router.getStateForAction);
    // }

    return (
      <RootStackNavigator />
    );
  }
}

export default RootNavigator;
