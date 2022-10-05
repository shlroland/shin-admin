module.exports = {
  extends: ['@shlroland'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['*.config.*', 'config/*'] },
    ],
  },
}
