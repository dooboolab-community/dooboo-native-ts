import 'react-native';
import * as React from 'react';
import Intro from '../Intro';
import Button from '../../shared/Button';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';

const props = {
  store: appStore,
  navigation: {
    navigate: jest.fn(),
  },
};

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  let tree: ReactTestRendererJSON;
  const component = <Intro { ...props } />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Interaction', () => {
  let rendered: any;
  let root: ReactTestRenderer['root'] | any;
  const component = <Intro { ...props }/>;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onClick', () => {
    root.instance.state = {
      isLoggingIn: false,
    };

    jest.useFakeTimers();
    // const spy = jest.spyOn(instance.getInstance(), 'onLogin');
    const buttons = root.findAllByType(Button);
    buttons[0].props.onPress();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(root.instance.state.isLoggingIn).toEqual(true);
    jest.runAllTimers();
    // expect(root.instance.state.isLoggingIn).toEqual(false);
    expect(props.store.user.displayName).toEqual('dooboolab');
    expect(props.store.user.age).toEqual(30);
    expect(props.store.user.job).toEqual('developer');
    // expect(spy).toBeCalled();
    buttons[1].props.onPress();
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });
});
