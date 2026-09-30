# CLAUDE.md

This file provides guidance when working with this repository.

## Commands

Package manager is pnpm.

- `pnpm dev` — dev server at http://localhost:5340
- `pnpm build` / `pnpm preview` — production build / preview at port 4173
- `pnpm check` — svelte-kit sync + svelte-check (type checking)
- `pnpm lint` — prettier --check + eslint
- `pnpm format` — prettier write (with svelte + tailwindcss plugins)
- `pnpm test:unit` — Vitest (matches `src/**/*.{test,spec}.{js,ts}`)

No `.env` file required — this is a static portfolio with no backend.

## What this app is

Samuel Teshale Terefe's professional portfolio website.

**Stack:** SvelteKit 2 + Svelte 5 (runes), TypeScript, Tailwind CSS 4.

**Framework conventions:**
- Svelte 5 runes (`$state`, `$props`, `$derived`, `$effect`) — not legacy `export let` / `$:`
- `src/lib/components/ui/` — shadcn-svelte-style primitives (button, badge, input, dialog, etc.)
- `src/lib/components/portfolio/` — all portfolio section components
- `src/lib/portfolio/data.ts` — single source of truth for CV data
- `src/lib/portfolio/types.ts` — TypeScript interfaces for portfolio data

## Architecture

### Data layer
All portfolio content lives in `src/lib/portfolio/data.ts`. This is the single source of truth
derived from Samuel's CV. Do NOT add fabricated metrics, fake links, or invented experience.

### Portfolio sections (in order)
1. **Hero** — name, animated titles, CTA buttons, SVG tech visualisation
2. **About** — bio, identity card, focus areas
3. **Skills** — categorised skill tags from CV
4. **Projects** — cards with case study modal
5. **Achievements** — Huawei ICT Competition wins
6. **Certifications** — Huawei + ALX Africa certs
7. **Education** — University of Gondar B.Sc. Computer Engineering
8. **Philosophy** — engineering focus areas
9. **Contact** — direct links + mailto form
10. **Footer** — minimal professional footer

### Navigation
Fixed top nav in `+layout.svelte`. Hash links (`#about`, `#skills`, etc.) match `id=` attributes
on each section. Dark/light theme toggle reads/writes `localStorage.theme` and applies `.dark`
class to `<html>`.

### CV download
`static/samuel-teshale-cv.pdf` — place Samuel's actual CV PDF here before deployment.
The Hero component links to `/samuel-teshale-cv.pdf`.

### Deployment
Uses `@sveltejs/adapter-node` — outputs to `build/`. Run with `node build/index.js`.
Set `PORT` env var to change the port (defaults to 3000).

## Known warnings (pre-existing, not our code)
- `toggle-group.svelte` — shadcn-svelte library warns about `$state` references
- `tsconfig.json` — SvelteKit-generated tsconfig references `@types/node` (harmless)
- `prettier-plugin-tailwindcss` + `prettier-plugin-svelte` — known version incompatibility
  when running `pnpm format` on `.svelte` files; format Svelte files individually with
  `pnpm exec prettier --write --plugin prettier-plugin-svelte "src/**/*.svelte"` if needed
