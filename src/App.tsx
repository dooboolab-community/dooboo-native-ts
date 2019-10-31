import React from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';

function App(): React.ReactElement {
  return (
    <RootProvider>
      <SwitchNavigator />
    </RootProvider>
  );
}

export default App;
