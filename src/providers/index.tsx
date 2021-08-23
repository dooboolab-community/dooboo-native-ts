import {ThemeProvider, ThemeType} from 'dooboo-ui';

import {AppProvider} from './AppProvider';
import React from 'react';
import {theme} from '../utils/theme';

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({
  initialThemeType,
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider initialThemeType={initialThemeType} customTheme={theme}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
