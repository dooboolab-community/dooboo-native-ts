import { getStatusBarHeight } from 'react-native-status-bar-height';
// import { observer } from 'mobx-react/native';
import React from 'react';
import { Provider } from 'mobx-react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import appStore from './stores/appStore';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { ratio } from './utils/Styles';

class App extends React.Component {
  public render() {
    return (
      <Provider store={ appStore }>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(false) : 0, // false to get height of android too.
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
