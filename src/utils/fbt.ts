import { NativeModules, Platform } from 'react-native';

import { init } from 'fbt';
import intl from './i18n/fbt/translatedFbts.json';

const DEFAULT_LOCALE = 'en';

export const viewerContext = {
  locale: DEFAULT_LOCALE,
};

export const initFbt = (): void => {
  if (Platform.OS === 'web') {
    if (navigator) {
      viewerContext.locale = navigator.language.substr(0, 2);
    }

    init({
      translations: intl as FBT.Translations,
      hooks: {
        getViewerContext: (): { locale: string } => viewerContext,
      },
    });

    return;
  }

  const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
              NativeModules?.SettingsManager?.settings?.AppleLanguages[0] // iOS 13
            : NativeModules?.I18nManager?.localeIdentifier;

  if (deviceLanguage) {
    viewerContext.locale = deviceLanguage;
  }

  init({
    translations: intl as FBT.Translations,
    hooks: {
      getViewerContext: (): { locale: string } => viewerContext,
    },
  });
};

export const changeLocale = (locale: string): void => {
  viewerContext.locale = locale;
};
