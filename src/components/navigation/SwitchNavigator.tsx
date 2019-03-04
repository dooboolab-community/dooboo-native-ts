import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RootNavigator from './RootStackNavigator';
const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
