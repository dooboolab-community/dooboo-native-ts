import 'react-native';

import {RenderAPI, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import {ReactElement} from 'react';
import StackNavigator from '../RootStack';

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

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should renders [Dark] mode', () => {
    component = createTestElement(<StackNavigator {...props} />, 'dark');

    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    // jest.runAllTimers();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
