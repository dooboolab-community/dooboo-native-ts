import 'styled-components';
import { Theme } from './theme';

type AllTheme = Theme;

interface CustomTheme extends AllTheme {
  background: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    background: string;
  }
}
