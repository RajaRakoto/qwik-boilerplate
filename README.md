# qwik-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer Ready: A comprehensive template that works seamlessly for most Qwik projects. Designed for use with the latest active Qwik release, this setup includes [QwikCity](https://qwik.dev/qwikcity/overview/), an additional toolkit that enhances Qwik by simplifying the creation of full websites with features like directory-based routing, layouts, and more.**

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 5.4.5
- 🌐 React.js >= 18
- 🧅 Use Bun as package manager
- 🌈 ESM
- 🧪 Biome for code formatting and linting
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
- 🧺 Pre-configured setup for Redux or Zustand as state manager, easily removable if not needed
- 🌀 Tailwind CSS already set up with PostCSS for flexible usage
- 🩷 Sass extends CSS with features like variables, nested rules, mixins, imports, inheritance, built-in functions, and more ...

## Add Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
bun qwik add # or `bun qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `bun start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview # or `bun preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `bun build`
```
