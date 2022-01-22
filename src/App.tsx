import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import RootProvider from './providers';
import RootStack from './components/navigations/RootStack';
import {initFbt} from './utils/fbt';

initFbt();

function App(): React.ReactElement {
  return <RootStack />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootProvider>
        <App />
      </RootProvider>
    </GestureHandlerRootView>
  );
}

export default ProviderWrapper;
