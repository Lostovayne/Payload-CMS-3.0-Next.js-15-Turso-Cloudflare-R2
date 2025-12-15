import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      '.cache/**',
      'public/**',
      '.vercel/**',
      'migrations/**',
      'src/payload-types.ts',
      'src/app/(payload)/admin/importMap.js',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Semicolons
      semi: ['error', 'always'],
      'no-extra-semi': 'error',

      // Quotes
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

      // Trailing commas
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',

      // Best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',

      // Disable rules that conflict with Prettier
      indent: 'off',
      '@typescript-eslint/indent': 'off',
    },
  },
];
