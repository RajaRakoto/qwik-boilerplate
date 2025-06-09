# ESLint Migration to Flat Config

This project has been migrated from ESLint legacy config (`.eslintrc.cjs`) to the new flat config system (`eslint.config.js`).

## Changes Made

1. **Configuration File**: Replaced `.eslintrc.cjs` with `eslint.config.js`
2. **Ignore File**: Migrated `.eslintignore` patterns to the `ignores` property in the config
3. **Package Script**: Updated the ESLint script to remove the `--config` flag
4. **Plugin Configuration**: Updated plugin configurations to work with the flat config format

## New Configuration Structure

The new configuration includes:

- **Global ignores**: Replaces `.eslintignore` functionality
- **TypeScript files** (`**/*.{ts,tsx}`): Full TypeScript + Qwik + Jest rules
- **JavaScript files** (`**/*.{js,jsx}`): Basic rules without TypeScript-specific ones
- **CommonJS files** (`**/*.cjs`): Node.js environment with script source type
- **Service Worker files**: Appropriate globals for service worker environment

## Benefits

- Faster ESLint execution
- Better configuration validation
- Improved plugin compatibility
- Modern ESLint v9 support

## Migration Notes

- Removed the `root: true` key (not needed in flat config)
- Fixed TypeScript rule references in CommonJS files
- Separated configurations by file type for better performance
- Added proper global variable definitions for different environments
