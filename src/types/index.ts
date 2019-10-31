import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { StyleProp, TextStyle } from 'react-native';

import { SFC } from 'react';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type DefaultNavigationProps<
  T extends NavigationState = NavigationState
> = NavigationScreenProp<T, NavigationParams>;

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
