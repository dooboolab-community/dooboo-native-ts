import '@emotion/react';
import type {DoobooTheme} from './utils/theme';

declare module '@emotion/react' {
  export interface Theme extends DoobooTheme {
    isMobile?: boolean;
    isTablet?: boolean;
    isDesktop?: boolean;
  }
}
