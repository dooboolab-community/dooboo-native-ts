const path = require('path');

module.exports = {
  babel: {
    presets: [
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {runtime: 'automatic', importSource: '@emotion/react'},
      ],
    ],
    plugins: [
      [
        'babel-plugin-fbt',
        {
          fbtEnumManifest: require('./src/utils/i18n/fbt/.enum_manifest.json'),
          extraOptions: {__self: true},
        },
      ],
      '@babel/plugin-syntax-class-properties',
      'babel-plugin-fbt-runtime',
      '@emotion/babel-plugin',
    ],
  },
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.ttf$/,
            loader: 'url-loader', // or directly file-loader
            include: path.resolve(
              __dirname,
              'node_modules/react-native-vector-icons',
            ),
          },
        ],
      },
    },
  },
};
