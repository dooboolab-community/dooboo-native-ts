import { StyleProp, TextStyle } from 'react-native';

import { SFC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

type StackParamList = {
  default: undefined;
  Intro: { userId: string };
  Temp: undefined;
};

export type DefaultNavigationProps<
  T extends keyof StackParamList
> = StackNavigationProp<StackParamList, T>;

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
