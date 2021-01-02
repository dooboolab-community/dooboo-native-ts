import {
  DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
} from 'styled-components/native';
import React, {useState} from 'react';
import {
  ThemeParam,
  ThemeType,
  createTheme,
  dark as darkTheme,
  light as lightTheme,
} from '../utils/theme';

import createCtx from '../utils/createCtx';

interface Context {
  themeType: ThemeType;
  theme: DefaultTheme;
  changeThemeType: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export const defaultThemeType: ThemeType = ThemeType.LIGHT;

interface Props {
  children?: React.ReactElement;
  // Using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
  customTheme?: ThemeParam;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
  customTheme,
}: Props): React.ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);

  const changeThemeType = (): void => {
    const newThemeType =
      themeType === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;

    setThemeType(newThemeType);
  };

  let theme: DefaultTheme;

  if (customTheme)
    theme = createTheme(themeType, {
      light: {
        ...lightTheme,
        ...customTheme.light,
      },
      dark: {
        ...darkTheme,
        ...customTheme.dark,
      },
    }) as DefaultTheme;
  else theme = createTheme(themeType, {light: {}, dark: {}}) as DefaultTheme;

  return (
    <Provider
      value={{
        themeType,
        changeThemeType,
        theme: theme,
      }}>
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

export {useCtx as useThemeContext, ThemeProvider, ThemeType};
