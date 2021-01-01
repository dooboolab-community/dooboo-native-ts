import Container from '../index';
import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

it('should render correctly', () => {
  const component = renderer.create(
    <Container testID="wrapper">
      <Text>hello</Text>
    </Container>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
