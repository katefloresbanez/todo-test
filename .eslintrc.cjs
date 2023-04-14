module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'typescript-eslint/explicit-function-return-type': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
