export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

const colors = {
  darkGray: '#00000070',
  mediumGray: '#00000030',
  lightGray: '#CFCED0',
};

export const light = {
  background: '#FFFFFF',
  paper: '#EAEBF4',
  link: '#393D7A',
  heading: '#393D7A',
  titleText: '#000000',
  subText: '#404040',
  text: '#000000',
  disabled: colors.mediumGray,
};

export type Theme = typeof light;

export const dark = {
  background: '#2C2C2C',
  paper: '#EAEBF4',
  link: '#E0E0E0',
  heading: '#FFFFFF',
  titleText: '#8A96DC',
  subText: '#D3D8E8',
  text: '#D3D8E8',
  disabled: colors.mediumGray,
};

export const theme = {
  light,
  dark,
};
