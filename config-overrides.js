const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  useBabelRc,
} = require('customize-cra');

const path = require('path');

module.exports = override(
  useBabelRc(),

  // disable eslint in webpack
  disableEsLint(),

  // adjust the underlying workbox
  adjustWorkbox((wb) =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat('index.html'),
    }),
  ),
);
