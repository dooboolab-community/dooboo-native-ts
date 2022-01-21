// eslint-disable-next-line
const path = require('path');

const fbtEnumPath = path.join(
  __dirname,
  'src/utils/i18n/fbt/.enum_manifest.json',
);

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
    ['module:react-native-dotenv'],
    'babel-plugin-fbt-runtime',
    [
      'babel-plugin-fbt',
      {
        fbtEnumPath,
        extraOptions: {__self: true},
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
