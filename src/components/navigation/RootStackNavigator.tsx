import Intro from '../screen/Intro';
import React from 'react';
import Temp from '../screen/Temp';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const routeConfig = {
  Intro: {
    screen: Intro,
    navigationOptions: ({ navigation, screenProps }): object => {
      const { theme } = screenProps;
      return {
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      };
    },
    path: 'intro',
  },
  Temp: {
    screen: Temp,
    navigationOptions: ({ navigation, screenProps }): object => {
      const { theme } = screenProps;
      return {
        headerTitle: (
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {navigation.state.routeName}
          </Text>
        ),
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      };
    },
    path: 'temp',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  // mode: 'card',
  // headerMode: 'screen',
  // headerMode: 'none',
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

// interface Props {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<Props> {
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
