import React, { useState } from 'react';
import { Theme, ThemeType, createTheme } from 'theme';

import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import createCtx from 'utils/createCtx';

interface Context {
  theme: Theme;
  themeType: ThemeType;
  changeTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
const [useCtx, Provider] = createCtx<Context>();

const initialThemeType: ThemeType = ThemeType.LIGHT;

interface Props {
  children?: React.ReactElement;
}

function ThemeProvider(props: Props): React.ReactElement {
  const [themeType, changeTheme] = useState(initialThemeType);
  const theme = createTheme(themeType);
  return (
    <Provider
      value={{
        changeTheme,
        themeType,
        theme,
      }}
    >
      <OriginalThemeProvider theme={theme}>
        {props.children}
      </OriginalThemeProvider>
    </Provider>
  );
}

export { useCtx as useThemeProvicer, ThemeProvider };
