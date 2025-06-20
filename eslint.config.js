import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      camelcase: ['error', { properties: 'always' }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['typeLike'],
          format: ['PascalCase'],
          suffix: ['Type'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
      ],
      'no-var': 'error',
      'prefer-const': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      curly: ['error', 'all'],
      'default-case': 'error',
      'no-fallthrough': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'space-in-parens': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'object-curly-newline': ['error', { multiline: true, consistent: true }],
      'array-element-newline': ['error', 'consistent'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
];
