# AGENTS.md

## Project
Personal portfolio site for Daniel García (Full Stack Developer). SPA built with **Vite 8 + React 18**, plain CSS (BEM-like `pf-` prefix), deployed to **GitHub Pages** at danidev.es.

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — ESLint (includes react, react-hooks, react-refresh plugins)
- `npm run deploy` — runs `build` then publishes `dist/` via `gh-pages`

## Deploy quirks
- `vite.config.js` sets `base: './'` — required for GitHub Pages asset resolution
- CNAME file (`danidev.es`) lives at repo root; `gh-pages` publishes it as-is
- No CI workflows; deploy is manual via `npm run deploy`
- `dist/` is gitignored

## Codebase structure
- `src/main.jsx` — entrypoint; mounts `<App />` into `#root`
- `src/App.jsx` — shell layout with Header, Presentation, Proyects sections
- `src/components/` — components with co-located CSS modules (e.g. `HeaderComponent.jsx` + `HeaderComponent.css`)
- `public/assets/DanielGarcia.pdf` — CV download; referenced via `import.meta.env.BASE_URL`
- `src/components/.jsx` — `LanguageCard` component using `PropTypes` (not in package.json; resolved transitively via React)

## Testing
No test framework installed. No test commands.

## Dependencies worth knowing
- `react-icons` (fa6, si) — used in `ProyectsComponent.jsx`
- No CSS framework or Tailwind
