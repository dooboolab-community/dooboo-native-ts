import 'react-native';

import {RenderAPI, cleanup, render} from '@testing-library/react-native';
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

  afterEach(cleanup);

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should renders [Dark] mode', () => {
    jest.useFakeTimers();

    component = createTestElement(<StackNavigator {...props} />, 'dark');

    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
