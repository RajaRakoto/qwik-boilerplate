<div align="center">
<img src="https://rajarakoto.github.io/github-docs/boilerplate/qwik-boilerplate.jpg">
</div>

# qwik-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://rajarakoto.github.io/github-docs/badge/build-by.svg)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer-ready, minimalistic fullstack boilerplate for building blazing-fast applications with [Qwik](https://qwik.dev) + [QwikCity](https://qwik.dev/qwikcity/overview/), powered by [Bun](https://bun.sh) & [Vite](https://vitejs.dev).**

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)

## ✨ Features

| Area | Stack |
|------|-------|
| Framework | Qwik + QwikCity (resumability, zero hydration, fine-grained lazy loading) |
| Runtime | Bun (package manager + test runner), Node ≥ 20.19 or ≥ 22.12 |
| Build | Vite 7 SSR with HMR |
| Language | TypeScript (strict mode), path aliases `@/*` → `src/`, `~/*` → `public/` |
| Styling | Tailwind CSS 4, Sass (variables, mixins), self-hosted Fontsource fonts |
| Quality | Biome, ESLint (eslint-plugin-qwik), Prettier, EditorConfig |
| Testing | Playwright (e2e) + Bun test (unit) |
| Icons | qwikest/icons (180k+ icons) |
| Perf | Partytown (third-party scripts off main thread), service worker prefetching |
| Ops | Docker, Grunt backups, depcheck, npm-check-updates, ungit |

> 💡 Optionally pair with [PLUM](https://github.com/RajaRakoto/plum), a Sass mixins toolset. For smooth integration it is recommended to keep Sass `1.77.6`.

## 🚀 Quick Start

```bash
bun create github.com/RajaRakoto/qwik-boilerplate <project-name>
cd <project-name>
bun install
bun run dev
```

> 1. MIT license uses your name/GitHub — update or remove if needed.
> 2. Each subdirectory in `src` has its own `README.md` explaining its purpose.
> 3. Adjust `package.json` (name, description, author, etc.) to fit your project.

## 📁 Project Structure

```
src/
├── @types/          Global type declarations
├── api/             API clients & server communication
├── assets/          Static assets (images, logos)
├── auth/            Authentication logic
├── common/          Shared components (e.g. QwikLogo)
├── components/      UI components
│   └── starter/     Demo components (hero, counter, gauge, header, footer, …)
├── constants/       Shared constants (getting-started steps)
├── data/            Data sources / mocks
├── extras/          Optional add-ons
├── pages/           Page-level components
├── routes/          QwikCity file-based routing
│   ├── layout.tsx         Root layout (header/footer, cache headers, server time)
│   ├── service-worker.ts  Prefetching service worker
│   └── demo/              Demo apps (flower, todolist)
├── styles/          Global styles (Sass + Tailwind)
├── types/           Ambient type declarations (Partytown)
├── utils/           Utility functions
├── entry.dev.tsx    Dev-only entry point
├── entry.preview.tsx Vite preview entry point
├── entry.ssr.tsx    SSR entry point
└── root.tsx         QwikCityProvider root
```

`api/`, `auth/`, `data/`, `extras/`, `pages/` are placeholders that keep the structure ready for common concerns — drop your code in, each folder documents itself via its `README.md`.

## 🌐 Routes

- `/` — Landing page: hero, counter, getting-started walkthrough
- `/demo/flower` — Reactive flower generator (`useTask$`, `useStore`)
- `/demo/todolist` — Todo list demo (`routeLoader$` + `routeAction$` + Zod, works without JS)

## 📜 Scripts

All commands run with `bun run <script>`.

| Script | Description |
|--------|-------------|
| `dev` | Start dev server (SSR + HMR) |
| `dev:debug` | Start dev server with Node.js debugger |
| `start` | Start dev server and open the browser |
| `preview` | Build production and serve a preview |
| `build` | Production build (client + SSR) |
| `build.client` | Build client bundle only |
| `build.preview` | Build SSR preview bundle (`entry.preview.tsx`) |
| `build.types` | TypeScript type-check (no emit) |
| `clean` | Remove `server`, `build`, `dist`, `coverage`, `playwright-report` |
| `test:unit` / `test:unit:watch` | Unit tests (Bun), watch mode |
| `test:e2e` | End-to-end tests (Playwright) |
| `biome:fix` | Lint & format with Biome |
| `biome:unsafe` | Biome with unsafe fixes |
| `biome:start` / `biome:stop` | Manage the Biome daemon |
| `eslint` | Lint with ESLint (warnings fail the run) |
| `prettier` | Format with Prettier |
| `pkg-check` | Find unused dependencies (depcheck) |
| `pkg-upgrade` | Interactive dependency upgrade (npm-check-updates) |
| `backups` | Incremental backups with Grunt |
| `versioning` | Start ungit (Git GUI) |
| `npm-version:major/minor/patch` | Bump version via npm |
| `nvm` | Switch to the project's Node version |
| `script:sass-charset` | Prepend `@charset "UTF-8"` to all SCSS files |

## 🔌 Integrations & Deployment

Use `bun qwik add` to add an adapter (Cloudflare, Netlify, Express…) or the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/). A base `Dockerfile` is included for containerized deployment.

## 🔗 Similar

Check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)
