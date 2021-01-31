import 'react-native';

import React, {ReactElement} from 'react';
import {RenderAPI, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import IntroView from '../IntroView';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[IntroView] render', () => {
  props = createTestProps();

  component = createTestElement(<IntroView {...props} />);

  it('renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
