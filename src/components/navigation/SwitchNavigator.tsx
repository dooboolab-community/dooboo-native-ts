import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import React from 'react';
import RootNavigator from './RootStackNavigator';
import { Theme } from '../../theme';
import { useThemeContext } from 'providers/ThemeProvider';

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
  theme: Theme;
}

export default function Navigator(): React.ReactElement {
  const { theme } = useThemeContext();
  return <AppContainer screenProps={{ theme }} />;
}
