import type {DefaultTheme} from 'styled-components/native';

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const colors = {
  skyBlue: '#069ccd',
  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: 'white',
  lightBackgroundLight: '#f7f6f3',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
};

export const light = {
  background: colors.lightBackground,
  btnPrimary: colors.skyBlue,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.whiteGray,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  fontColor: 'black',
  tintColor: '#333333',
};

export type Theme = typeof light;

export const dark = {
  background: colors.darkBackground,
  btnPrimary: colors.skyBlue,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.whiteGray,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  fontColor: 'white',
  tintColor: '#a3a3a3',
};

export const theme = {
  light,
  dark,
};

export interface ThemeParam {
  light: Partial<Theme>;
  dark: Partial<Theme>;
}

export const createTheme = (
  type: ThemeType,
  themes: ThemeParam = {
    light,
    dark,
  },
): Partial<DefaultTheme> => {
  switch (type) {
    case ThemeType.LIGHT:
      return {...theme.light, ...themes.light};
    case ThemeType.DARK:
      return {...theme.dark, ...themes.dark};
  }
};
