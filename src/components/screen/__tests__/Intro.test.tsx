import React, { ReactElement } from 'react';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import Button from '../../shared/Button';
import Intro from '../Intro';
import { ThemeType } from '@dooboo-ui/native-theme';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;

describe('[Intro] screen rendering test', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<Intro {...props} />);
  });

  it('should render outer component and snapshot matches', () => {
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });

  it('should render [Dark] theme', () => {
    component = createTestElement(<Intro {...props} />, ThemeType.DARK);
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });

  it('should render [isLoading] status', () => {
    props = createTestProps({
      isLoading: true,
    });
    component = createTestElement(<Intro {...props} />, ThemeType.DARK);
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });

  it('should render [isDisabled] status', () => {
    props = createTestProps({
      isDisabled: true,
    });
    component = createTestElement(<Intro {...props} />, ThemeType.DARK);
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });
});

describe('[Intro] Interaction', () => {
  let testingLib: RenderResult;
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;

  it('should simulate [onLogin] click', () => {
    testingLib = render(component);
    rendered = renderer.create(component);
    root = rendered.root;

    jest.useFakeTimers();
    const buttons = root.findAllByType(Button);

    const button = testingLib.getByTestId('btn1');
    act(() => {
      fireEvent.press(button);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      jest.runAllTimers();
    });

    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(buttons[0].props.isLoading).toEqual(false);
  });

  it('should simulate [navigate] click', () => {
    testingLib = render(component);

    act(() => {
      fireEvent.press(testingLib.getByTestId('btn2'), 'click');
    });
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });

  it('should simulate [changeTheme] click', () => {
    testingLib = render(component);

    act(() => {
      fireEvent.press(testingLib.getByTestId('btn3'), 'click');
    });
  });
});
