import { AppProvider } from './AppProvider';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ThemeType } from '../types';

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
    <AppProvider>
      <ThemeProvider
        initialThemeType={
          initialThemeType === ThemeType.LIGHT ? ThemeType.LIGHT : undefined
        }
      >
        {children}
      </ThemeProvider>
    </AppProvider>
  );
};

export default RootProvider;
