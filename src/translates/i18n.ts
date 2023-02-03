import en from './en/translation.json';
import {getLocales} from 'react-native-localize';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ko from './ko/translation.json';

export const resources = {
  en: {translation: en},
  ko: {translation: ko},
};

const lng = getLocales()[0].languageCode;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'ko'],
  debug: false,
  ns: ['translation'],
  defaultNS: 'translation',
  lng,
  resources,
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
