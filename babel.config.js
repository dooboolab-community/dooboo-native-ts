// eslint-disable-next-line
const path = require('path');

module.exports = {
  presets: ['babel-preset-expo', '@babel/preset-typescript'],
  sourceMaps: 'inline',
  plugins: [
    '@emotion',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/plugin-syntax-class-properties',
    'react-native-reanimated/plugin',
    'inline-dotenv',
  ],
};
