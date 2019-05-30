import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RootNavigator from './RootStackNavigator';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';

const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{ theme: createTheme(theme)}}
      />
    </ThemeProvider>
  )
};
