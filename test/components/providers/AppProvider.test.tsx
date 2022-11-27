import {Button, Text, View} from 'react-native';

import React from 'react';
import type {ReactElement} from 'react';
import {render} from '@testing-library/react-native';
import {useAppContext} from '../../../src/providers/AppProvider';

function FakeChild(): ReactElement {
  const {state, resetUser, callDefault} = useAppContext();

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
      <Button
        testID="BUTTON_NOT_VALID"
        onPress={(): void => {
          callDefault();
        }}
        title="Button"
      />
    </View>
  );
}

describe('[AppProvider] error rendering test', () => {
  let error: Error;
  const component = <FakeChild />;

  it('should throw error when [AppProvider] is not wrapped', () => {
    try {
      render(component);
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(Error);
  });
});
