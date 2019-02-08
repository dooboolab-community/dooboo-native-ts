import 'react-native';
import * as React from 'react';
import Temp from '../Temp';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Temp', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Temp store={appStore}/>).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
