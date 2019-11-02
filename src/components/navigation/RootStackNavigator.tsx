import Intro from '../screen/Intro';
import { NavigationNativeContainer } from '@react-navigation/native';
import React from 'react';
import Temp from '../screen/Temp';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootNavigator({ screenProps }): React.ReactElement {
  const { theme } = screenProps;
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator;

// const routeConfig = {
//   Intro: {
//     screen: Intro,
//     path: 'intro',
//   },
//   Temp: {
//     screen: Temp,
//     path: 'temp',
//   },
// };

// const navigatorConfig = {
//   initialRouteName: 'Intro',
//   defaultNavigationOptions: ({ navigation, screenProps }): object => {
//     const { theme } = screenProps;
//     return {
//       headerTitle: (
//         <Text
//           style={{
//             fontSize: 18,
//             color: theme.fontColor,
//           }}
//         >
//           {navigation.state.routeName}
//         </Text>
//       ),
//       headerStyle: {
//         backgroundColor: theme.background,
//       },
//       headerTitleStyle: { color: theme.fontColor },
//       headerTintColor: theme.tintColor,
//     };
//   },
//   // mode: 'card',
//   // headerMode: 'screen',
//   // headerMode: 'none',
// };
