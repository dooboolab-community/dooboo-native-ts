import React from 'react';
import RootProviders from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';

function App(): React.ReactElement {
  return (
    <RootProviders>
      <SwitchNavigator />
    </RootProviders>
  );
}

export default App;
