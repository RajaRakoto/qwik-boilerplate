import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import qwikPlugin from 'eslint-plugin-qwik';
import jestPlugin from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Global ignores (equivalent to .eslintignore)
  {
    ignores: [
      'build/**',
      'dist/**',
      'dist-dev/**',
      'bazel-*/**',
      'bazel-bin/**',
      'bazel-out/**',
      'bazel-qwik/**',
      'bazel-testlogs/**',
      'lib/**',
      'lib-types/**',
      'etc/**',
      'external/**',
      'tsc-out/**',
      'target/**',
      'output/**',
      'server/**',
      'tsconfig.tsbuildinfo',
      'tsdoc-metadata.json',
      '.pnp',
      '.pnp.js',
      '.yarn/**',
      'node_modules/**',
      'bower_components/**',
      'jspm_packages/**',
      '*.local',
      '.rollup.cache/**',
      '.cache/**',
      '.netlify/**',
      'backups/**',
      'tmp/**',
      'eslint.config.js'
    ]
  },
  
  // Base ESLint recommended rules
  eslint.configs.recommended,
  
  // TypeScript configuration for most files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'qwik': qwikPlugin,
      'jest': jestPlugin
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...qwikPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      
      // Custom rules from your original config
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn'
    }
  },
  
  // Configuration for JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      'jest': jestPlugin
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off'
    }
  },
  
  // Configuration for CommonJS files
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.node,
        ...globals.commonjs
      }
    },
    rules: {
      'no-console': 'off'
    }
  },
  
  // Configuration for Service Worker
  {
    files: ['**/service-worker.ts', '**/sw.ts'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  },
  
  // Prettier config (should be last to override conflicting rules)
  prettierConfig
];

