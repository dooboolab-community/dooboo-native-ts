import 'react-native';
import * as React from 'react';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('[Button]', () => {
  let rendered: renderer.ReactTestRenderer;

  it('should render without crashing', () => {
    rendered = renderer.create(<Button />);
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.toJSON()).toBeTruthy();
  });

  describe('[Button] Interaction', () => {
    let cnt = 1;
    let root: renderer.ReactTestInstance;
    it('simulate onPress', () => {
      rendered = renderer.create(<Button onClick={() => {
        cnt++;
      }}/>);
      root = rendered.root;

      root.props.onClick();
      expect(cnt).toBe(2);
    });

    it('renders disabled', () => {
      rendered = renderer.create(<Button isDisabled={true}/>);
      root = rendered.root;

      const texts = root.findAll((el) => el.type === 'Text');
      expect(texts).toHaveLength(1);
    });
  });
});
