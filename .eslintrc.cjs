module.exports = {
  extends: ['@shlroland'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['*.config.*', 'config/*'] },
    ],
    'react-hooks/rules-of-hooks': 'off',
    'import/no-default-export': 'off',
    'import/first': 'off',
  },
}
