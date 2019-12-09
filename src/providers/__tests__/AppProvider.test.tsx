import * as React from 'react';

import { AppProvider, useAppContext } from '../AppProvider';
import { Button, Text, View } from 'react-native';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let testingLib: RenderResult;

const FakeChild = (): React.ReactElement => {
  const { state, resetUser } = useAppContext();

  return (
    <View>
      <Text testID="TEXT">{JSON.stringify(state, null, 2)}</Text>
      <Button
        testID="BUTTON"
        onPress={(): void => {
          resetUser();
        }}
        title="Button"
      />
    </View>
  );
};

describe('[AppProvider] rendering test', () => {
  let json: renderer.ReactTestRendererJSON;
  const component = (
    <AppProvider>
      <FakeChild />
    </AppProvider>
  );

  it('should match component and snapshot', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });

  it('should call [resetUser] when button pressed', () => {
    testingLib = render(component);
    const btn = testingLib.queryByTestId('BUTTON');
    act(() => {
      fireEvent.press(btn);
    });
  });
});
