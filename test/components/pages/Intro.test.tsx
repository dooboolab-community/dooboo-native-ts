import {act, fireEvent, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../utils/testUtils';

import Intro from '../../../src/components/pages/Intro';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[Intro] screen rendering test', () => {
  it('should render outer component and snapshot matches', () => {
    props = createTestProps();
    component = createTestElement(<Intro {...props} />);
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should render [Dark] theme', () => {
    props = createTestProps();
    component = createTestElement(<Intro {...props} />);
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should render [isLoading] status', () => {
    props = createTestProps({
      isLoading: true,
    });

    component = createTestElement(<Intro {...props} />, 'dark');
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should render [isDisabled] status', () => {
    props = createTestProps({
      isDisabled: true,
    });

    component = createTestElement(<Intro {...props} />, 'dark');
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});

describe('[Intro] Interaction', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<Intro {...props} />);
    testingLib = render(component);
  });

  it('should login when button has clicked', async () => {
    const btnLogin = await testingLib.findByTestId('btn-login');
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    fireEvent.press(btnLogin);

    expect(setTimeout).toHaveBeenCalled();
    expect(testingLib.toJSON()).toMatchSnapshot();
  });

  it('should navigate when button has clicked', () => {
    fireEvent.press(testingLib.getByTestId('btn-navigate'));

    expect(props.navigation.navigate).toHaveBeenCalledWith('Temp', {
      param: 'GO BACK',
    });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should change theme when button has clicked', () => {
    fireEvent.press(testingLib.getByTestId('btn-theme'));
  });
});
