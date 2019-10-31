import 'react-native';

import React, { ReactElement } from 'react';

import RootProviders from '../src/providers';
import { ThemeType } from '../src/types';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProviders initialThemeType={themeType}>{child}</RootProviders>
);

export const createTestProps = (
  obj: object,
  moreScreenProps?: object,
): object | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  screenProps: {
    changeThemeType: jest.fn,
    ...moreScreenProps,
  },
  ...obj,
});
