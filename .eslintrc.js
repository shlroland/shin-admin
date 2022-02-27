module.exports = {
  extends: ['@antfu'],
  rules: {
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
}
