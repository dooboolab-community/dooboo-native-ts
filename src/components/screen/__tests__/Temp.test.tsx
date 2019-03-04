import 'react-native';
import * as React from 'react';
import Temp from '../Temp';

import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Temp {...props}/>).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  const component = <Temp {...props} />;
  let renderResult: any;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance: renderer.ReactTestInstance = renderResult.getByTestId('btn');
    fireEvent(btnInstance, 'click');
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
