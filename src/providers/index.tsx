import { AppProvider } from './AppProvider';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ThemeType } from '../types';

interface Props {
  isTest?: boolean;
  children?: React.ReactElement;
}

// Add providers here
const AllProviders = ({ isTest, children }: Props): React.ReactElement => {
  return (
    <AppProvider>
      <ThemeProvider initialThemeType={isTest ? ThemeType.LIGHT : undefined}>
        {children}
      </ThemeProvider>
    </AppProvider>
  );
};

export default AllProviders;
