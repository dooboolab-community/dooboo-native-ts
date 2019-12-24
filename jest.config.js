/* eslint-disable @typescript-eslint/no-var-requires */
const jestPreset = require('@testing-library/react-native/jest-preset');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  preset: '@testing-library/react-native',
  automock: false,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'svg', 'png', 'json'],
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
      diagnostics: false,
    },
  },
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
  ],
  // 'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: ['./test/setupTest.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    ...jestPreset.setupFiles,
    '<rootDir>/test/jestSetup.ts',
  ],
  // 'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  /* eslint-disable */
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@dooboo-ui)',
  ],
  /* eslint-enable */
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
    providesModuleNodeModules: ['react', 'react-native'],
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
};
