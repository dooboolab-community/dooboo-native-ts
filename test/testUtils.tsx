import {FC, ReactElement} from 'react';

import RootProvider from '../src/providers';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThemeType} from 'dooboo-ui';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>{child}</RootProvider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...obj,
});

type NavigationStub<T extends {}> = {
  [K in keyof StackNavigationProp<T>]: jest.Mock;
};

/**
 * Create a navigation stub which can be used to mock `useNavigation` hook.
 * Each method can be overriden for each test cases.
 * @example
 * const mockNavigation = createMockNavigation();
 * const mockRoute = {}; // Provide your own route params here.
 * mockNavigation.setParams.mockImplementation(() => {
 *   // Your implementation can go here.
 * });
 * jest.mock('@react-navigation/core', () => ({
 *   ...jest.requireActual<typeof ReactNavigation>('@react-navigation/core'),
 *   useNavigation: () => mockNavigation,
 *   useRoute: () => mockRoute,
 * }));
 * @returns the generated navigation stub.
 */
export function createMockNavigation<T = {}>(): NavigationStub<T> {
  return {
    addListener: jest.fn(),
    canGoBack: jest.fn(),
    dangerouslyGetParent: jest.fn(),
    dangerouslyGetState: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    navigate: jest.fn(),
    removeListener: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    setParams: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
  };
}

export const TestSafeAreaProvider: FC = ({children}) => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      {children}
    </SafeAreaProvider>
  );
};
