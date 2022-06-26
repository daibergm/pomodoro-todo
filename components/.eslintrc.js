module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended', 
    'plugin:storybook/recommended',
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  ignorePatterns: [
    '.eslintrc.js', 
    'commitlint.config.js'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "import/order": ["error", {
      "groups": ["type", "builtin", "external", "internal", "index", "sibling", "parent", "object"], 
      "newlines-between": "always-and-inside-groups",
      "alphabetize": {"order": "asc", "caseInsensitive": true}
  }],
  }
};
