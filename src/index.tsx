import {AppRegistry, Platform} from 'react-native';

import App from './App';

AppRegistry.registerComponent('dooboo', () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication('dooboo', {
    rootTag: document.getElementById('root'),
  });
}

export default App;
