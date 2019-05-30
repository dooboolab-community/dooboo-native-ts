import 'react-native';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';
import { createTheme, ThemeType } from '../../../theme';

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

const props: any = createTestProps({});

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  const component = (
    <AppProvider>
      <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
        <Intro {...props} />
      </ThemeProvider>
    </AppProvider>
  );
  let json: renderer.ReactTestRendererJSON;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  const component = (
    <AppProvider>
      <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
        <Intro {...props} />
      </ThemeProvider>
    </AppProvider>
  );

  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let testingLib: any;

  it('should simulate [onLogin] click', () => {
    rendered = renderer.create(component);
    root = rendered.root;
    testingLib = render(component);

    jest.useFakeTimers();
    const buttons = root.findAllByType(Button);
    fireEvent(testingLib.getByTestId('btn1'), 'click');

    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));

    jest.runAllTimers();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(buttons[0].props.isLoading).toEqual(false); // TODO: test with useState
  });

  it('should simulate [navigate] click', () => {
    rendered = renderer.create(component);
    root = rendered.root;

    // const buttons = root.findAllByType(Button);
    // buttons[1].props.onClick();
    fireEvent(testingLib.getByTestId('btn2'), 'click');
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
