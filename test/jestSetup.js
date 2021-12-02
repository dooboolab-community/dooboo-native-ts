jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  useHeaderHeight: () => 12,
}));
