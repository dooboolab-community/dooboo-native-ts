import 'react-native';

import {
  createTestElement,
  createTestProps,
} from '../../../test/utils/testUtils';

import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import StackNavigator from '../../../src/components/navigations/RootStack';
import {render} from '@testing-library/react-native';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[Stack] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(<StackNavigator {...props} />);
  });

  it('should renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toBeTruthy();
  });

  it('should renders [Dark] mode', () => {
    component = createTestElement(<StackNavigator {...props} />, 'dark');

    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    // jest.runAllTimers();
    expect(baseElement).toBeTruthy();
  });
});
