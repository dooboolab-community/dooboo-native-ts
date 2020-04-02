import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ThemeType, useThemeContext } from '@dooboo-ui/native-theme';

import Intro from '../screen/Intro';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Temp from '../screen/Temp';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Temp: { param: string };
}

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  const { theme, themeType } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
        headerMode={
          themeType === ThemeType.DARK ? 'screen' : 'float'
        }
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
