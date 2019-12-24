import 'react-native';

import React, { ReactElement } from 'react';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import StackNavigator from '../RootStackNavigator';
import renderer from 'react-test-renderer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let props: any;
let component: ReactElement;

describe('[Stack] navigator', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(
      <StackNavigator {...props} />,
    );
  });

  it('should renders without crashing', () => {
    jest.useFakeTimers();
    renderer.create(component).toJSON();
    jest.runAllTimers();
    // expect(rendered).toMatchSnapshot();
    // expect(rendered).toBeTruthy();
  });
});
