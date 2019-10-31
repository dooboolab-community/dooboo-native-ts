### ANNOUNCEMENT

DO NOT MODIFY OR CHANGE THE CODE BEFORE CONFIRMED BY `DOOBOOLAB`. THIS REPOSITORY IS USED IN `DOOBOO-CLI`.

# React Native TS Boilerplate

[![codecov](https://codecov.io/gh/dooboolab/dooboo-native-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/dooboo-native-ts)
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-native-ts.svg?style=svg)](https://circleci.com/gh/dooboolab/dooboo-native-ts) [![Greenkeeper badge](https://badges.greenkeeper.io/dooboolab/dooboo-native-ts.svg)](https://greenkeeper.io/)

> Specification

- [react-native](https://github.com/facebook/react-native)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [typescript](https://github.com/Microsoft/TypeScript)
- [localization](https://github.com/react-native-community/react-native-localize)
- [styled-components](https://github.com/styled-components/styled-components)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [react-hook](https://reactjs.org/docs/hooks-intro.html)
- [@testing-library/react-native](https://github.com/testing-library/native-testing-library)
- [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)
- [prettier](https://prettier.io)

### Gain points

```
1. Sample of context-api with `react-hook` (`useContext`).
2. Know how to structure react native app with typescript.
3. Know how to navigate between screens with `react-navigation`.
4. Know how to write test code with `testing-library`.
5. Know how to `lint` your project with `eslint` for both `ts` and maybe some `js`.
6. Know how to localize your project.
```

### INSTALL

```
npm install && npm start
// or
yarn && yarn start
```

### Structures

```text
app/
├─ .doobooo // necessary if using dooboo-cli
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│     └─ navigations
│     └─ screen
│     └─ shared
│  └─ providers
│  └─ utils
│  └─ App.tsx
├─ test/
├─ .buckconfig
├─ .flowconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ babel.config.js
├─ index.js
├─ jest.config.js
├─ package.json
├─ README.md
├─ STRINGS.js
├─ tsconfig.json
└─ eslint.json
```

### Running the project

Running the project is as simple as running

```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

## Testing the project

Testing is also just a command away:

```sh
npm test
```

> Result

```
> jest -u

 PASS  src/components/shared/__tests__/Button.test.tsx
 PASS  src/components/screen/__tests__/Intro.test.tsx
 › 2 snapshots written.

Snapshot Summary
 › 2 snapshots written in 1 test suite.

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   2 added, 4 passed, 6 total
Time:        3.055s, estimated 6s
Ran all test suites
```

### Writing tests with Jest

We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

### Vscode prettier and eslint setup

```
"eslint.enable": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
// prettier extension setting
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.arrowParens": "always",
"prettier.jsxSingleQuote": true
```

### Using Context Api

Whenever you add your own Context provider you can add it to `providers/` and use it inside of `providers/index.tsx`

- [Splitting provider is preferred](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

```tsx
// Add providers here
const RootProvider = ({
  initialThemeType,
  children,
}: Props): React.ReactElement => {
  return (
    <AppProvider>
      <ThemeProvider
        initialThemeType={initialThemeType ? ThemeType.LIGHT : ThemeType.DARK}
      >
        {children}
      </ThemeProvider>
    </AppProvider>
  );
};
```

The `RootProvider` is being used at `App.tsx` and test files easily

```tsx
// App.tsx
function App(): React.ReactElement {
  return (
    <RootProvider>
      <SwitchNavigator />
    </RootProvider>
  );
}
```

```tsx
// test files
const component = (props): React.ReactElement => {
  return (
    <RootProvider initialThemeType>
      <Intro {...props} />
    </RootProvider>
  );
};
```

> using consistent theme(ThemeType.LIGHT as default) explicitly is encouraged in testing for avoiding unexpected snapshot test errors

### Localization

We've defined Localization strings in `STRINGS.js` which is in root dir.
We used [react-native-localize](https://github.com/react-native-community/react-native-localize) pacakage for this one which use [i18n-js](https://github.com/fnando/i18n-js) together.

- How it is installed

  ```tsx
  import * as Localization from 'react-native-localize';

  import en from './assets/langs/en.json';
  import i18n from 'i18n-js';
  import ja from './assets/langs/ja.json';
  import ko from './assets/langs/ko.json';

  const locales = Localization.getLocales();

  if (Array.isArray(locales)) {
    i18n.locale = locales[0].languageTag;
  }

  i18n.fallbacks = true;
  i18n.translations = { en, ko, ja };

  export const getString = (param: string, mapObj?: object): string => {
    if (mapObj) {
      i18n.t(param, mapObj);
    }
    return i18n.t(param);
  };
  ```

- How it is used

  > Import locales in `assets/langs`. Currently, `ko.json` and `en.json` is installed. If you want to add more languages you can add it in `STRINGS.ts` and `i18n.translations = { en, ko };` add more languages inside `i18n.translations`.

  ```ts
  import { getString } from '../../../STRINGS';

  getString('LOGIN');
  ```

- How it is mocked

  > Fixed jest setup by adding following in `__mocks__/react-native-localize.ts`.

  ```ts
  interface Locale {
    countryCode: string;
    languageTag: string;
    languageCode: string;
    isRTL: boolean;
  }
  const getLocales = (): Locale[] => [
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
    {
      countryCode: 'EC',
      languageTag: 'es-EC',
      languageCode: 'es',
      isRTL: false,
    },
  ];

  const findBestAvailableLanguage = (): Partial<Locale> => ({
    languageTag: 'es',
    isRTL: false,
  });

  const getNumberFormatSettings = (): object => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  });

  const getCalendar = (): string => 'gregorian'; // or "japanese", "buddhist"
  const getCountry = (): string => 'ES'; // the country code you want
  const getCurrencies = (): [string] => ['USD']; // can be empty array
  const getTemperatureUnit = (): string => 'celsius'; // or "fahrenheit"
  const getTimeZone = (): string => 'Ecuador/Guayaquil'; // the timezone you want
  const uses24HourClock = (): boolean => true;
  const usesMetricSystem = (): boolean => true;

  const addEventListener = jest.fn();
  const removeEventListener = jest.fn();

  export {
    findBestAvailableLanguage,
    getLocales,
    getNumberFormatSettings,
    getCalendar,
    getCountry,
    getCurrencies,
    getTemperatureUnit,
    getTimeZone,
    uses24HourClock,
    usesMetricSystem,
    addEventListener,
    removeEventListener,
  };
  ```

### React version

16.9

### React Native version

0.61

### React navigation

4
