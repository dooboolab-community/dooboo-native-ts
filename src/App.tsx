import React from 'react';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';

const App = () => {
  return (
    <Provider>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
