import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, NavigationRouteConfig, StackNavigatorConfig } from 'react-navigation';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

const routeConfig: NavigationRouteConfig = {
  Intro: {
    screen: Intro,
    navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any }) => {
      const { theme } = screenProps;
      return ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      });
    },
    path: 'intro',
  },
  Temp: {
    screen: Temp,
    navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any }) => {
      const { theme } = screenProps;
      return ({
        headerTitle: <Text style={{
          fontSize: 18,
        }}>{navigation.state.routeName}</Text>,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      });
    },
    path: 'temp',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Intro',
  mode: 'card',
  headerMode: 'screen',
  // headerMode: 'none',
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

// interface IProps {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<IProps> {
//   private static router = RootStackNavigator.router;

//   public render() {
//     return (
//       <RootStackNavigator
//         navigation={this.props.navigation}
//         screenProps={{ theme: this.props.theme }}
//       />
//     );
//   }
// }

export default RootStackNavigator;
