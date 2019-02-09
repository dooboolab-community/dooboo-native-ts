import 'react-native';
import * as React from 'react';
import Intro from '../Intro';
import Button from '../../shared/Button';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import User from '../../../models/User';
import { Provider } from 'mobx-react/native';

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

  it('shallow renders match snapshot', () => {
    const shallow = ShallowRenderer.createRenderer();
    const result = shallow.render(component);
    expect(result).toMatchSnapshot();
  });
});

describe('Interaction', () => {
  let rendered: any;
  let root: ReactTestRenderer['root'] | any;
  const component = (
    <Intro { ...props }/>
  );

  beforeEach(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('simulate click', () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(root.instance.wrappedInstance, 'onLogin');
    const buttons = root.findAllByType(Button);
    root.instance.wrappedInstance.onLogin(); // == buttons[0].props.onPress();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(root.instance.wrappedInstance.state.isLoggingIn).toEqual(true);

    jest.runAllTimers();
    expect(root.instance.wrappedInstance.state.isLoggingIn).toEqual(false);
    expect(props.store.user.displayName).toEqual('dooboolab');
    expect(props.store.user.age).toEqual(30);
    expect(props.store.user.job).toEqual('developer');
    buttons[1].props.onPress();
    expect(spy).toHaveBeenCalled();
    expect(props.navigation.navigate).toBeCalledWith('Temp');
  });

  it('componentWillUnmount', () => {
    rendered.unmount();
  });
});
