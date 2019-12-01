import 'react-native';

import * as React from 'react';

import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import Button from '../Button';
import { createTestElement } from '../../../../test/testUtils';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props: object;
let component: React.ReactElement;
let testingLib: RenderResult;

describe('[Button]', () => {
  let cnt = 1;

  beforeEach(() => {
    props = {
      onClick: (): number => cnt++,
      testID: 'btn',
    };
    component = createTestElement(<Button {...props} />);
  });

  it('[ThemeType.Light] renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('[ThemeType.Dark] renders without crashing', () => {
    component = createTestElement(<Button {...props} />);

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
