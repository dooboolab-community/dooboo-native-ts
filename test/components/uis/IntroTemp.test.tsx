import 'react-native';

import {cleanup, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../utils/testUtils';

import IntroTemp from '../../../src/components/uis/IntroTemp';
import React from 'react';
import type {ReactElement} from 'react';
import type {RenderAPI} from '@testing-library/react-native';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[IntroTemp] render', () => {
  props = createTestProps();

  component = createTestElement(<IntroTemp {...props} />);

  afterEach(cleanup);

  it('renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toBeTruthy();
  });
});
