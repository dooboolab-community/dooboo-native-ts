module.exports = {
  root: true,
  extends: '@dooboo/eslint-config',
  rules: {
    'no-spaced-func': 1, // disallow space between function identifier and application
    'space-in-brackets': 0, // require or disallow spaces inside brackets (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 1, // require spaces around operators
    'space-unary-ops': [1, { words: true, nonwords: false }],
  },
};
