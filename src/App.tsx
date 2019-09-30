import AllProviders from './providers';
import React from 'react';
import SwitchNavigator from './components/navigation/SwitchNavigator';

function App(): React.ReactElement {
  return (
    <AllProviders>
      <SwitchNavigator />
    </AllProviders>
  );
}

export default App;
