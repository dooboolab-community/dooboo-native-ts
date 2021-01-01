import 'styled-components';
import type {Theme} from './utils/theme';

type AllTheme = Theme;

interface CustomTheme extends AllTheme {
  background: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    background: string;
  }
}
