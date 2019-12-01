import 'react-native';

import React, { ReactElement } from 'react';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import Temp from '../Temp';
import { ThemeType } from '@dooboo-ui/native-theme';
import renderer from 'react-test-renderer';

let props;
let component: ReactElement;

describe('[Temp] render', () => {
  props = createTestProps();
  component = createTestElement(<Temp {...props} />);

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [Dark] theme', () => {
    props = createTestProps();
    component = createTestElement(<Temp {...props} />, ThemeType.DARK);
    const json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance = renderResult.getByTestId('btn');
    act(() => {
      fireEvent.press(btnInstance);
    });
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
