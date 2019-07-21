module.exports =  {
  extends:  [
    'standard',
    'plugin:react/recommended',
  ],
  parser:  '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  env: {
    'browser': true,
    'jest': true
  },
  parserOptions:  {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules:  {
    'no-unused-vars': 0,
    // '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/interface-name-prefix': 'warn',
    'no-console': 'error',
    "react/jsx-uses-vars": [2],
    'max-len': ['error', { code: 80 }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': [2, 'always'],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'space-before-function-paren': ['error', {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
    }],
  },
};
