module.exports = {
  root: true,
  extends: '@dooboo/eslint-config',
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [0],
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 0,
  },
};
