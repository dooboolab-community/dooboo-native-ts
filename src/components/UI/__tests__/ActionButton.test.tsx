import 'react-native';

import * as React from 'react';

import {RenderAPI, act, fireEvent, render} from '@testing-library/react-native';

import ActionButton from '../molecules/ActionButton';
import {ThemeType} from '../../../providers/ThemeProvider';
import {createTestElement} from '../../../../test/testUtils';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;
let testingLib: RenderAPI;

describe('[Button]', () => {
  let cnt = 1;

  beforeEach(() => {
    props = {
      onPress: (): number => cnt++,
      testID: 'btn',
    };

    component = createTestElement(<ActionButton {...props} />);
  });

  it('[ThemeType.Light] renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [ThemeType.Dark] without crashing', () => {
    component = createTestElement(<ActionButton {...props} />, ThemeType.DARK);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [isDisabled] status without crashing', () => {
    props.isDisabled = true;
    component = createTestElement(<ActionButton {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [isLoading] status without crashing', () => {
    props.isLoading = true;
    component = createTestElement(<ActionButton {...props} />);

    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      const btn = testingLib.queryByTestId('btn');

      act(() => {
        fireEvent.press(btn);
        fireEvent.press(btn);
      });

      expect(cnt).toBe(3);
    });
  });
});
