import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, NavigationRouteConfig, StackNavigatorConfig } from 'react-navigation';

import IntroScreen from '../screen/Intro';
import TempScreen from '../screen/Temp';

const routeConfig: NavigationRouteConfig = {
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      title: 'Intro',
    },
    path: 'intro',
  },
  Temp: {
    screen: TempScreen,
    navigationOptions: {
      headerTitle: <Text style={{
        fontSize: 18,
      }}>Temp</Text>,
    },
    path: 'temp',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Intro',
  // headerMode: 'none',
  navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any}) => {
    const { theme } = screenProps;
    return ({
      headerStyle: {
        backgroundColor: theme.background,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: { color: theme.fontColor },
      headerTintColor: theme.tintColor,
    });
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation?: any;
  theme?: object;
}

class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
        screenProps={{ theme: this.props.theme }}
      />
    );
  }
}

export default RootNavigator;
