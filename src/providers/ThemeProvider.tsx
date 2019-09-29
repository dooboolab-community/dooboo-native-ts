import React, { useState } from 'react';
import { Theme, ThemeType, createTheme } from '../theme';

import { ThemeProvider as OriginalThemeProvider } from 'styled-components/native';
import createCtx from '../utils/createCtx';

interface Context {
  theme: Theme;
  themeType: ThemeType;
  changeThemeType: () => void;
}
const [useCtx, Provider] = createCtx<Context>();

const defaultThemeType: ThemeType = ThemeType.LIGHT;

interface Props {
  children?: React.ReactElement;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): React.ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);
  const changeThemeType = (): void => {
    setThemeType(ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT);
  };
  const theme = createTheme(themeType);

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
      }}
    >
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export { useCtx as useThemeProvider, ThemeProvider };
