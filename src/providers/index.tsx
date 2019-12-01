import { ThemeProvider, ThemeType } from '@dooboo-ui/native-theme';
import { dark, light } from '../theme';

import { AppProvider } from './AppProvider';
import React from 'react';

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

// Add providers here
const RootProvider = ({
  initialThemeType = ThemeType.LIGHT,
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider
      initialThemeType={initialThemeType}
      customTheme={{ light, dark }}
    >
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
