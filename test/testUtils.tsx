import 'react-native';

import React, { ReactElement } from 'react';

import RootProvider from '../src/providers';
import { ThemeType } from '@dooboo-ui/native-theme';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>{child}</RootProvider>
);

export const createTestProps = (obj?: object): object | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...obj,
});
