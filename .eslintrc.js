/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-shorthand': 'error',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'clsx'],
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
}
