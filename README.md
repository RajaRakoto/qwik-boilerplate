# qwik-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer Ready: A comprehensive template that works seamlessly for most Qwik projects. Designed for use with the latest active Qwik release, this setup includes [QwikCity](https://qwik.dev/qwikcity/overview/), an additional toolkit that enhances Qwik by simplifying the creation of full websites with features like directory-based routing, layouts, and more.**

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 5.5.4
- 🌐 Qwik >= 1.8.0
- 🌐 Qwik City >= 1.8.0
- 🧅 Use Bun as package manager
- 🌈 ESM
- 🧪 Biome for JavaScript code formatting and linting
- ✅ Jest or Bun test for fast unit testing and code coverage
- 📚 Type definitions for Bun.js and Jest
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- 📝 Simple example of Tsx code
- 🐗 Run tasks with Grunt (example for backup)
- 🖥️ Ungit for version control (git) with a GUI
- ⚡ Use Vite for lightning fast HMR (hot reload)
- ⚡ Optimized build by Vite
- 🧪 E2E test with Playwright
- 🐳 Containerization for easy deployment and scaling with Docker
- 🌀 Tailwind CSS already set up with PostCSS for flexible usage
- 🩷 Sass extends CSS with features like variables, nested rules, mixins, imports, inheritance, built-in functions, and more ...

> You can customize your website faster with [PLUM](https://github.com/RajaRakoto/plum), a mixins toolset powered by SASS. Quickly produce consistent, scalable CSS output, regardless of project size.

---

### 📌 Usage

To use this template, use the following commands:

```bash
bun create github.com/RajaRakoto/qwik-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> NOTE 1: I employ the `MIT license` for this starter kit, which includes my name and GitHub profile. Please remember to adjust or remove it if deemed unnecessary.

> NOTE 2: In order to help you better understand the structure of this boilerplate, there is a `README.md` file in each subdirectory of src.

> NOTE 3: For certain configurations in the `package.json` file, you need to modify them to tailor them to your project (e.g: name, description, author, keywords, main, repository, ...).

---

### 📌 Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```bash
bun qwik add
```

---

### 📌 NPM Scripts

**Start**
- 📜 `start` - Launches the Vite.js server in SSR mode and automatically opens the app in the browser.

**Preview**
- 📜 `preview` - Builds a preview with Qwik and runs a Vite.js preview, automatically opening the app.

**Clean**
- 📜 `clean` - Removes the `server`, `build`, `dist`, `coverage`, and `playwright-report` folders.

**Development**
- 📜 `dev` - Starts Vite.js in SSR mode.

**Development with Debugging**
- 📜 `dev:debug` - Starts Vite.js in SSR mode with Node.js debugger enabled.

**Build**
- 📜 `build` - Builds the application with Qwik.
- 📜 `build.client` - Builds the client with Vite.js.
- 📜 `build.preview` - Builds the project in SSR mode from `src/entry.preview.tsx`.
- 📜 `build.types` - Manages TypeScript type compilation without emitting files.

**Testing**
- 📜 `test:unit` - Runs unit tests with Bun.js.
- 📜 `test:unit:watch` - Interactive mode for automatically re-running unit tests with Bun.js.
- 📜 `test:e2e` - Deletes Playwright reports and runs end-to-end (e2e) tests with Playwright.

**Linting and Formatting**
- 📜 `biome:start` - Starts the Biome daemon server.
- 📜 `biome:stop` - Stops the Biome daemon server.
- 📜 `biome:fix` - Applies automatic fixes (linter & formatter) using Biome.
- 📜 `biome:unsafe` - Applies riskier fixes using Biome.
- 📜 `eslint` - Lints the project with ESLint and reports unhandled errors.
- 📜 `prettier` - Formats code according to the `.prettierrc` rules.

**Backup and Dependency Management**
- 📜 `backups` - Backs up files with Grunt.
- 📜 `pkg-check` - Checks for unused dependencies with depcheck.
- 📜 `pkg-upgrade` - Updates outdated dependencies interactively using npm-check-updates, configured for Bun.js.

**Versioning**
- 📜 `versioning` - Starts the ungit server.
- 📜 `npm-version:major` - Increments the project's major version.
- 📜 `npm-version:minor` - Increments the project's minor version.
- 📜 `npm-version:patch` - Increments the project's patch version.

**NVM**
- 📜 `nvm` - Manages multiple versions of Node.js.

**Scripts**
- 📜 `script:sass-charset` - Adds the `@charset "UTF-8"` declaration at the beginning of SCSS files using a Bun script.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)
