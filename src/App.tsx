import { DefaultTheme } from 'styled-components';
import React from 'react';
import RootNavigator from './components/navigation/RootStackNavigator';
import RootProvider from './providers';
import { useThemeContext } from './providers/ThemeProvider';

export interface ScreenProps {
  theme: DefaultTheme;
  changeThemeType: Function;
}

function App(): React.ReactElement {
  const { theme, changeThemeType } = useThemeContext();
  return <RootNavigator screenProps={{ theme, changeThemeType }} />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
