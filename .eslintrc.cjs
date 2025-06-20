/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', // prettier와 충돌 방지
  ],
  rules: {
    // 세미콜론
    semi: ['error', 'always'],

    // 변수, 함수명 카멜 케이스
    camelcase: ['error', { properties: 'always' }],

    // 타입, 컴포넌트 이름 등 파스칼 케이스 강제
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
        suffix: ['Type'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
    ],

    // var 금지, const 우선
    'no-var': 'error',
    'prefer-const': 'error',

    // 축약 메소드 금지
    'object-shorthand': ['error', 'never'],

    // 함수는 선언식 or 화살표 함수만
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // 블록이 하나여도 괄호 사용
    curly: ['error', 'all'],

    // switch-case 마무리
    'default-case': 'error',
    'no-fallthrough': 'error',

    // 삼중 등호
    eqeqeq: ['error', 'always'],

    // 공백 관련
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],

    // 템플릿 리터럴
    'prefer-template': 'error',

    // 객체/배열 속성 줄바꿈
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'array-element-newline': ['error', 'consistent'],

    // React 관련
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
