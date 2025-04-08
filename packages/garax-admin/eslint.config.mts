import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({    
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'next', 
        'next/core-web-vitals', 
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
  }),
  {
    ignores: ['.next/**/*', 'node_modules/'],
  },
]

export default eslintConfig