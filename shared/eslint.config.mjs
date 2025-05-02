// import tsParser from '@typescript-eslint/parser';
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    extends: ["../../packages/garax-server/eslint.config.mjs"],
    ignorePatterns: ["!**/*"],
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
        rules: {}
      },
      {
        files: ["*.ts", "*.tsx"],
        rules: {}
      },
      {
        files: ["*.js", "*.jsx"],
        rules: {}
      }
    ]
  }
];
