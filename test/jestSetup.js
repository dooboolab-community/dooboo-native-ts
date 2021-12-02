jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  useHeaderHeight: () => 12,
}));

jest.mock('../src/utils/wrapper', () => ({
  withScreen: (WrappedComponent: React.ComponentType<any>) => {
    return (props) => {
      return <WrappedComponent {...props} />};
  },
}));

global.__reanimatedWorkletInit = jest.fn();
