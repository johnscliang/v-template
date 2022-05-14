module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
    'promise',
  ],
  rules: {
    'semi': [2, 'never'],
    'import/no-unresolved': 'off',
    'vue/no-multiple-template-root': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'vue/comment-directive': 'off'
  },
};
