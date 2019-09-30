import * as React from 'react';

import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import AllProviders from '../../../providers';
import Button from '../../shared/Button';
import Intro from '../Intro';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.

const createTestProps = (obj: object): object => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

// `any` here is necessary for test, so turn off eslint rule for this line
const props: any = createTestProps({}); // eslint-disable-line @typescript-eslint/no-explicit-any

const component = (props): React.ReactElement => {
  return (
    <AllProviders isTest>
      <Intro {...props} />
    </AllProviders>
  );
};

describe('[Intro] screen rendering test', () => {
  it('should render outer component and snapshot matches', () => {
    const json = renderer.create(component(props)).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });
});

describe('[Intro] Interaction', () => {
  let testingLib: RenderResult;
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;

  it('should simulate [onLogin] click', () => {
    testingLib = render(component(props));
    rendered = renderer.create(component(props));
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
    testingLib = render(component(props));

    act(() => {
      fireEvent.press(testingLib.getByTestId('btn2'), 'click');
    });
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
