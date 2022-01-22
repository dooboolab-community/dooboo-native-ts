import {RenderAPI, act, fireEvent, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import Intro from '../Intro';
import {ReactElement} from 'react';

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

    act(() => {
      fireEvent.press(btnLogin);
    });

    expect(setTimeout).toHaveBeenCalled();
    expect(testingLib.toJSON()).toMatchSnapshot();
  });

  it('should navigate when button has clicked', () => {
    act(() => {
      fireEvent.press(testingLib.getByTestId('btn-navigate'));
    });

    expect(props.navigation.navigate).toHaveBeenCalledWith('Temp', {
      param: 'GO BACK',
    });
  });

  it('should change theme when button has clicked', () => {
    act(() => {
      fireEvent.press(testingLib.getByTestId('btn-theme'));
    });
  });
});
