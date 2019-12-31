import { StyleProp, TextStyle } from 'react-native';

import { AbortController } from 'abort-controller';
import { SFC } from 'react';

export interface RequestInitCustom extends RequestInit {
  signal?: AbortController['signal'] | null;
}
export interface User {
  displayName: string;
  age: number;
  job: string;
}

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
