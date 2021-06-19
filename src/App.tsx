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
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
