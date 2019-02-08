import 'react-native';
import * as React from 'react';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRenderer } from 'react-test-renderer';

describe('Button', () => {
  let rendered: any;

  it('renders without crashing', () => {
    rendered = renderer.create(<Button />);
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.toJSON()).toBeTruthy();
  });

  describe('component test', () => {
    let cnt = 1;
    let root: ReactTestRenderer['root'];
    it('simulate onPress', () => {
      rendered = renderer.create(<Button onPress={() => {
        cnt++;
      }}/>);
      root = rendered.root;

      root.props.onPress();
      expect(cnt).toBe(2);
    });

    it('renders disabled', () => {
      rendered = renderer.create(<Button isDisabled={true} />);
      root = rendered.root;

      const texts = root.findAll((el) => el.type === 'Text');
      expect(texts).toHaveLength(1);
    });
  });
});
