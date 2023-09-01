module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  'plugin:react-hooks/recommended',
  'plugin:prettier/recommended',
],
ignorePatterns:['dist','.eslintrc.cjs'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  settings: { react: {version:'18.2'} },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
