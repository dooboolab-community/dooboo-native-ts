/* eslint-disable @typescript-eslint/no-var-requires */
const jestPreset = require('@testing-library/react-native/jest-preset');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  automock: false,
  preset: '@testing-library/react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    ...jestPreset.setupFiles,
    '<rootDir>/test/jestSetup.ts',
  ],
  /* eslint-disable */
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules-*|sentry-expo|native-base|@dooboo-ui)',
  ],
  /* eslint-enable */
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  // 'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'ios.ts',
    'ios.tsx',
    'android.ts',
    'android.tsx',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/assetsTransformer.js',
  },
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
    providesModuleNodeModules: ['react', 'react-native'],
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'assetsTransformer.js'],
};
