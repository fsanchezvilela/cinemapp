module.exports = {
  root: true,
  settings: {
    'import/parsers': {
      'babel-eslint': ['.js', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['sonarjs', 'security'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: 'babel-eslint',
    },
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ['@typescript-eslint', 'react'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended', // React rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        // Resets
        '@typescript-eslint/camelcase': 'off',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/no-explicit-any': 'off',
        'no-constant-condition': 'off',

        // General formatting
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/func-call-spacing': 'error',

        // tslint
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        // '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        // '@typescript-eslint/no-non-null-assertion': 'error',
        // '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        // '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
        // tsrules
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // WARN only
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    // Best practices
    'no-shadow': 'off',
    'require-atomic-updates': 'error',
    'no-var': 'error',
    'prefer-object-spread': 'error',
    'no-nested-ternary': 'error',
    'no-duplicate-imports': 'error',
    // General formatting
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-trailing-spaces': 'error',
    curly: ['error', 'all'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    // 'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
    // 'multiline-ternary': [1, 'always-multiline'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    // 'linebreak-style': 'error',
    'space-in-parens': 'error',

    // 'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': true }],
    'constructor-super': 'error',
    'dot-notation': 'off',
    // 'eol-last': 'error',
    'guard-for-in': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-console': ['error'],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'error',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unused-labels': 'error',
    'prefer-const': 'error',
    radix: 'error',
    'no-shadowed-variable': 'off',
    'max-params': ['error', 3],
  },
};
