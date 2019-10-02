import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { DefaultTheme } from 'styled-components';
import React from 'react';
import RootNavigator from './RootStackNavigator';
import { useThemeContext } from '../../providers/ThemeProvider';

const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export interface ScreenProps {
  theme: DefaultTheme;
  changeThemeType: Function;
}

export default function Navigator(): React.ReactElement {
  const { theme, changeThemeType } = useThemeContext();
  return <AppContainer screenProps={{ theme, changeThemeType }} />;
}
