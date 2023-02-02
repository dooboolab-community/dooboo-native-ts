import 'react-native';

import {createTestElement, createTestProps} from '../../utils/testUtils';
import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';
import Temp from '../../../src/components/pages/Temp';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[Temp] render', () => {
  props = createTestProps({
    route: {
      params: {
        param: 'GO BACK',
      },
    },
  });

  component = createTestElement(<Temp {...props} />);

  it('renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should render [Dark] theme', () => {
    props = createTestProps({
      route: {
        params: {
          param: 'GO BACK',
        },
      },
    });

    component = createTestElement(<Temp {...props} />, 'dark');
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderAPI;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when button has been clicked', () => {
    const btnInstance = renderResult.getByTestId('btn-back');

    fireEvent.press(btnInstance);

    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
