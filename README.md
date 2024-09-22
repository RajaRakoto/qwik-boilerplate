<div align="center">
<img src="https://rajarakoto.github.io/github-docs/boilerplate/qwik-boilerplate.jpg">
</div>

# qwik-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://rajarakoto.github.io/github-docs/badge/build-by.svg)](https://forthebadge.com)

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
- 🧹 ESlint with some initial rules recommendation
- 🧪 Biome for JavaScript code formatting and linting
- ✅ Jest or Bun test for fast unit testing and code coverage
- 📚 Type definitions for Bun.js and Jest
- 🎨 Prettier to enforce consistent code style
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- 📝 Simple example of Tsx code
- 🐗 Run tasks with Grunt (example for backup)
- 🖥️ Ungit for version control (git) with a GUI
- ⚡ Use Vite for lightning fast HMR (hot reload) in SSR mode
- ⚡ Optimized build by Vite
- 🧪 E2E test with Playwright
- 🕚 A modern and efficient interface for managing HTTP requests with Undici
- 🥏 Easily add over 180000+ icons to your Qwik app with qwikest/icons
- 🧵 Defer third party scripts like Google Analytics, Facebook Pixel, etc off the main thread by using a web worker with partytown
- 🖋️ Self-host fonts effortlessly using Fontsource, which includes Google Fonts and other open-source options.
- 🐳 Containerization for easy deployment and scaling with Docker
- 🌀 Tailwind CSS already set up with PostCSS for flexible usage
- 🩷 Sass extends CSS with features like variables, nested rules, mixins, imports, inheritance, built-in functions, and more ...

> You can customize your website faster with [PLUM](https://github.com/RajaRakoto/plum), a mixins toolset powered by SASS. Quickly produce consistent, scalable CSS output, regardless of project size. For the best experience, it is recommended to use SASS version `1.77.6` to ensure smooth integration with PLUM.

---

### 📌 Usage

To use this template, use the following commands:

```bash
bun create github.com/RajaRakoto/qwik-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> 1. This starter kit uses the MIT license with my name and GitHub profile—update or remove if needed.
> 2. Each subdirectory in `src` has a `README.md` to explain its structure.
> 3. Adjust the `package.json` (name, description, author, etc.) to fit your project.

---

### 📌 Integrations and Deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

---

### 📌 NPM Scripts

**Start**

- 📜 `start` - Launches the Vite.js server in SSR mode and automatically opens the app in the browser.

**Preview**

- 📜 `preview` - Run your app with preview mode.

**Clean**

- 📜 `clean` - Removes server, build, dist, coverage, playwright-report ...

**Development**

- 📜 `dev` - Launch Vite.js development server using hot module remplacement (HMR) + SSR mode.
- 📜 `dev:debug` - Starts Vite.js in SSR mode with Node.js debugger enabled.

**Build**

- 📜 `build` - Builds the application with Qwik.
- 📜 `build.client` - Builds the client with Vite.js.
- 📜 `build.preview` - Builds the project in SSR mode from `src/entry.preview.tsx`.
- 📜 `build.types` - Manages TypeScript type compilation without emitting files.

**Testing**

- 📜 `test:unit` - Run unit testing with Bun.js.
- 📜 `test:unit:watch` - Interactive watch mode to automatically re-run unit testing with Bun.js.
- 📜 `test:e2e` - Run end to end (e2e) testing with Playwright.

**Linting and Formatting**

- 📜 `biome:start` - Starts the Biome daemon server. You can specify a custom configuration file path using the `--config-path` option.
- 📜 `biome:stop` - Stops the Biome daemon server.
- 📜 `biome:fix` - Runs a source code check and applies automatic fixes (linter & formatter) according to the defined rules.
- 📜 `biome:unsafe` - Works like `biome:fix`, but may apply more invasive or risky changes.
- 📜 `eslint` - Lints the project with ESLint and reports unhandled errors.
- 📜 `prettier` - Formats code according to the `.prettierrc` rules.

**Backup and Dependency Management**

- 📜 `backup` - Backup files with Grunt.
- 📜 `pkg-check` - Check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - Start ungit server.

**NPM commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.

**NVM**

- 📜 `nvm` - Manage multiple node.js versions. Easily switch between node versions per project to ensure compatibility.

**Scripts**

- 📜 `script:sass-charset` - Adds the @charset "UTF-8" declaration at the beginning of all SCSS files in the project.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)
