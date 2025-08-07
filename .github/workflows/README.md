# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated code quality and build checks.

## Workflow

### `pr-checks.yml`
**Triggers:** Pull requests and pushes to `main` and `develop` branches

**Checks performed:**
1. **ESLint** - Code linting and style validation  
2. **Prettier** - Code formatting validation
3. **Build Test** - Verifies project builds successfully

**Features:**
- ✅ Simple, fast execution
- 🔍 Three essential quality gates
- 🚫 Blocks merging if any check fails
- 📦 Uses Node.js 20 with npm caching

## Required Status Checks

To enforce these checks on PRs, configure the following as a required status check in your GitHub repository settings:

1. **quality-gate** (from `pr-checks.yml`)

## Local Development

Before pushing changes, run the comprehensive check locally:

```bash
npm run ci:check
```

This runs all the same checks that will be performed in CI:
- `npm run type-check` - TypeScript validation
- `npm run lint` - ESLint validation  
- `npm run format:check` - Prettier formatting check
- `npm run build` - Production build test

## Fixing Issues

**TypeScript errors:**
```bash
npm run type-check
```

**Linting issues:**
```bash
npm run lint:fix
```

**Formatting issues:**
```bash
npm run format
```

## Workflow Status

All workflows must pass for PRs to be mergeable when configured as required status checks.
