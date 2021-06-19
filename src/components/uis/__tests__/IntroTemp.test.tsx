import 'react-native';

import {RenderAPI, cleanup, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import IntroTemp from '../IntroTemp';
import {ReactElement} from 'react';

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

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
