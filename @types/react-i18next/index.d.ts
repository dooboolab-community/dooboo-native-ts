import 'react-i18next';
import {resources} from '../../src/translates/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.en;
    returnNull: false;
  }
}
