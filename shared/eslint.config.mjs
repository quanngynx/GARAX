import baseConfig from '../packages/garax-server/eslint.config.mjs';

// import tsParser from '@typescript-eslint/parser';
/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    ignores: ['!**/*']
  },
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {}
  }
];
