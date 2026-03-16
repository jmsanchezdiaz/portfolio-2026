# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with HMR
pnpm build      # Type-check (tsc -b) then bundle with Vite
pnpm lint       # Run ESLint
pnpm preview    # Preview production build locally
```

Package manager: **pnpm**

## Architecture

React 19 + TypeScript + Vite SPA. Entry point is `src/main.tsx` → `src/App.tsx`.

- `src/` — components, styles, and assets
- `public/` — static assets served as-is (favicon, SVG icon sprite)
- `index.html` — HTML shell with `<div id="root">`

**TypeScript:** Strict mode, ES2023 target, `react-jsx` transform, no unused locals/params enforced.

**ESLint:** Flat config (v9), covers React Hooks and React Refresh rules.
