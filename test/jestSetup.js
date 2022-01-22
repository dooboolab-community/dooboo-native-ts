jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  useHeaderHeight: () => 12,
}));

global.__reanimatedWorkletInit = jest.fn();
