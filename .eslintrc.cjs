const eslintConfig = {
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 0,
    'no-html-link-for-pages': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: `^_`,
      },
    ],
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.*',
          '**/*.config.*',
          '*.config.*',
          'tsup.config.ts',
        ],
      },
    ],
    'import/order': 0,
    'jsx-quotes': 2,
    'object-shorthand': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/self-closing-comp': 2,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          // Note that if you use the `node:` prefix for Node.js builtins,
          // you can avoid this complexity: You can simply use "^node:".
          ['^node:'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 2,
    'unicorn/no-null': 0,
    'unicorn/prevent-abbreviations': 0, // annoying
  },

  // parser: "@babel/eslint-parser",
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
          '.md',
          '.cjs',
          '.mjs',
          '.sh',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './*/*/tsconfig.json',
      './packages/*/tsconfig.json',
    ],
    extraFileExtensions: ['.json', '.md'],
  },
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = eslintConfig
