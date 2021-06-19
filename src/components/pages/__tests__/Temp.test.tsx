import 'react-native';

import {
  RenderAPI,
  act,
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../../test/testUtils';

import {ReactElement} from 'react';
import Temp from '../Temp';

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

  afterEach(cleanup);

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

  afterEach(cleanup);

  it('should simulate [onClick] when button has been clicked', () => {
    const btnInstance = renderResult.getByTestId('btn-back');

    act(() => {
      fireEvent.press(btnInstance);
    });

    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
