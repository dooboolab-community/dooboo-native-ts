import { AppProvider } from './providers/AppProvider';
import React from 'react';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { ThemeProvider } from 'providers/ThemeProvider';

function App(): React.ReactElement {
  return (
    <AppProvider>
      <ThemeProvider>
        <SwitchNavigator />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
