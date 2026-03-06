# vue-3-starter

A modern Vue 3 project starter with Vite, ESLint, Prettier, Commitlint, and Husky for a streamlined development workflow.

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: `^20.19.0` or `>=22.12.0` ([Download here](https://nodejs.org/))
- **npm**: `10.x` or higher (comes with Node.js)
- **Git**: For version control and Husky hooks

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Getting Started Locally

### 1. Clone the Repository

```sh
git clone <repository-url>
cd vue-3-starter
```

### 2. Install Dependencies

```sh
npm install
```

This command will:

- Install all project dependencies
- Initialize Husky Git hooks automatically (via the `prepare` script)

### 3. Verify Setup

To verify everything is set up correctly, run the linter:

```sh
npm run lint
```

## Project Setup

### Compile and Hot-Reload for Development

```sh
npm run dev
```

This starts the Vite development server with hot module reloading on `http://localhost:5173`.

### Compile and Minify for Production

```sh
npm run build
```

Optimizes and builds your project for production deployment.

### Preview Production Build

```sh
npm run preview
```

Locally preview the production build.

## Code Quality & Formatting

### Run Linting

```sh
npm run lint
```

This runs both **Oxlint** and **ESLint** to catch code issues.

### Format Code

```sh
npm run format
```

Formats all code in the `src/` directory using **Prettier**.

## Git Workflow with Commitlint & Husky

This project enforces conventional commit messages to maintain clean git history and enable automated changelog generation.

### Conventional Commit Format

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Examples

```sh
git commit -m "feat(auth): add login functionality"
git commit -m "fix(api): resolve timeout issue"
git commit -m "docs(readme): update setup instructions"
git commit -m "refactor(component): simplify button logic"
```

#### Allowed Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build, dependencies, or tooling changes
- **ci**: CI/CD pipeline changes

### Husky Hooks

- **commit-msg**: Automatically validates commit messages using Commitlint

If your commit message is invalid, Commitlint will reject it with helpful error messages.

## Project Structure

```
src/
├── components/          # Vue components
├── views/              # Page-level components
├── stores/             # Pinia state management (app, auth, user)
├── services/           # API services
├── api/                # API configuration and endpoints
├── router/             # Vue Router configuration
├── directives/         # Custom Vue directives
├── locales/            # i18n translations
├── layouts/            # Layout components
├── assets/             # Static assets
├── App.vue             # Root component
├── main.js             # Application entry point
├── main.css            # Global styles
└── i18n.js             # i18n configuration
```

## Technology Stack

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation build tool
- **Vue Router**: Client-side routing
- **Pinia**: State management
- **Axios**: HTTP client
- **TailwindCSS**: Utility-first CSS framework
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Commitlint**: Commit message validation
- **Husky**: Git hooks
- **i18n**: Internationalization support

## Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/).
