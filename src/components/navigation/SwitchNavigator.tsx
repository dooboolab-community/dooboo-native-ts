import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RootNavigator from './RootStackNavigator';
const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
