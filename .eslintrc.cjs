module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: ['error', 'always'],
    indent: ['error', 2],
    quotes: ["error", "single"],
    "@typescript-eslint/no-unused-vars": "off", // unused-imports/no-unused-importsとの干渉防止
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
        "warn",
        {
            "vars": "all",
            "varsIgnorePattern": "^_",
            "args": "after-used",
            "argsIgnorePattern": "^_",
        },
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'keyword-spacing': ["error", { "before" : true }],
    'comma-spacing': ["error", { "before": false, "after": true }],
    'array-bracket-spacing': ["error", "never"],
    'object-curly-spacing': ["error", "always"],
    'space-in-parens': ["error", "never"],
    'key-spacing': ["error", { "beforeColon": false }],
    // ESLintによる自動修正不可のルール
    'max-len': ['error', { code: 200 }],
  },
}
