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
    'html',
    '@typescript-eslint',
    'import',
    'promise',
  ],
  rules: {
    'semi': [2, 'never'],
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/no-multiple-template-root': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'padded-blocks': 'off',
    'lines-between-class-members': 'off',
    'no-param-reassign': 'off',
    'quotes': 'off',
    'object-shorthand': 'off'
  },
};
