module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'new-cap': 0,
    'no-underscore-dangle': 0,
    'max-len': 0,
    'no-param-reassign': 0,
  },
};
