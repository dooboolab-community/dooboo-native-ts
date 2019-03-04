import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
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
