# React Native Typescript Starter
> Specification
* typescript
* react-navigation
* test jest with typescript
* localization
* mobx
* data models

# Gain points
```
1. Typescript support. No need to run tsc because webpack is doing it for you with ts-loader.
2. Sample of mobx and data modeling.
3. Able to learn how to structure react app with typescript and mobx.
4. Test with jest-ts.
5. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. npm start
```

# Structures
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
│  └─ models
│  └─ stores
│  └─ utils
│  └─ index.tsx
├─ test/
├─ .babelrc
├─ .buckconfig
├─ .flowconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ index.js
├─ package.json
├─ README.md
├─ rn-cli.config.js
├─ STRINGS.js
├─ tsconfig.json
└─ tslint.json
```

# Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

## Troubleshoot
* If android build failed, apply below in `build.gradle` for `react-native-localization` module.
  ```gradl
  apply plugin: 'com.android.library'

  android {
    compileSdkVersion 26
    buildToolsVersion "26.0.2"

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 26
        versionCode 1
        versionName "1.0"
        ndk {
            abiFilters "armeabi-v7a", "x86"
        }
    }
  }

  dependencies { compile 'com.facebook.react:react-native:+' }
  ```
* Facing `Can't find variable Symbol` error in `window` or `ubuntu`.
  ```
  npm install --save mobx@3.6.2
  npm install --save mobx-react@4.4.3
  ```

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

## Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

## Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
We used [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) pacakage for this one.
```
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    LOGIN: 'Login',
  },
  kr: {
    LOGIN: '로그인',
  },
});

export {
  strings,
};
```

Fixed jest setup by adding following in jestSetup.

```
import { NativeModules } from 'react-native';

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.ReactLocalization = {
  language: 'en_US',
};
```

## React version
16.3.1

## React Native version
0.55.4

## React navigation
2.2.0
