# Smol Gardens — Docusaurus Migration Design

**Date:** 2026-07-24
**Branch:** `feat/docusaurus-migration`
**Status:** Approved (design)

## Problem

Phase 2 required the Smol Gardens landing page to fork the Docusaurus site from
`femmecubator/open-sprints` (confirmed Docusaurus: `docusaurus.config.js`,
`sidebars.js`, `docs/`, `blog/`). Previous work instead built a hand-rolled
**Vite 6 + React 18 + react-router** SPA in `kriziaf/launchpad-marketing-site`.
The marketing pages (Home, Topics, Seedscore, About) and their card
spacing/sectioning are good, but the foundation contradicts the ask: no
Docusaurus, so no docs/blog/sidebar/versioning/MDX.

This migration replaces the SPA foundation with a forked, upgraded Docusaurus
site while preserving the already-built page UI.

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Fork target | **Replace this repo** — fork open-sprints as new base in `launchpad-marketing-site`, keep name/remote. Old SPA stays in git history. |
| CSS strategy | **Wire Tailwind v4 into Docusaurus** (PostCSS plugin). Port pages near-verbatim. |
| Seed content | **Keep** open-sprints `docs/`+`blog/` as starting content; adapt for Smol Gardens later. |
| Docusaurus version | **Upgrade 2.4.1 → 3.x** on fork (gets React 18 → keeps `motion`/`lucide`/ported pages). |
| Branch | `feat/docusaurus-migration` (fresh). |

## Stack conflicts (must resolve during migration)

1. **React 17 vs 18.** open-sprints ships Docusaurus 2.4.1 → React 17. Current
   pages use React 18 + `motion@12` + `lucide-react@0.487`, both requiring
   React 18. → Upgrade fork to Docusaurus 3.x (React 18) rather than downgrade
   pages.
2. **Tailwind Vite plugin.** Repo uses `@tailwindcss/vite`; Docusaurus is
   Webpack. → Replace with `@tailwindcss/postcss` + Docusaurus PostCSS plugin
   config.
3. **Tailwind preflight vs Infima.** Tailwind's global reset collides with
   Docusaurus's Infima base styles. → Scope/disable Tailwind preflight so it
   doesn't override Infima layout.
4. **MDX v1 → v3.** Docusaurus 3 upgrade changes MDX major on the seed
   `docs/`+`blog/` content. → Run MDX v1→v3 fixes on seed content during upgrade.

## Target structure (post-migration)

```
launchpad-marketing-site/            same repo + remote
├─ docusaurus.config.js              from open-sprints, rebranded Smol Gardens
├─ sidebars.js                       kept
├─ docs/  blog/                      open-sprints seed content (kept)
├─ tailwind.config.js
├─ postcss.config.js                 @tailwindcss/postcss
├─ src/
│  ├─ pages/                         index (Home), topics, seedscore, about
│  ├─ components/                    Card; SiteHeader → navbar
│  └─ css/custom.css                 Infima vars + Tailwind entry + fonts/tokens
└─ static/img/                       hero-team.jpg, seedscore-report.png, about-postits.jpg
```

Dead SPA files removed at end: `vite.config.ts`, `src/main.tsx`,
`src/app/routes.tsx`, `index.html`, `tsconfig.node.json`, react-router dep.

## Migration units (independently verifiable, ordered)

1. **Fork + boot + upgrade.** Bring open-sprints into repo, upgrade Docusaurus
   2.4.1 → 3.x, fix MDX v1→v3 on seed content. Verify: `npm start` serves,
   `docusaurus build` clean.
2. **Tailwind wiring.** Add `@tailwindcss/postcss` + PostCSS config; Tailwind
   entry in `custom.css`; scope preflight. Verify: a Tailwind utility renders
   without breaking Infima navbar/layout.
3. **Port shared foundation.** Fonts (Nunito Sans / Inter), theme tokens, `Card`
   component, `SiteHeader` → Docusaurus navbar (swizzle or config). Verify:
   components render on a scratch page.
4. **Port pages one at a time.** `Home → src/pages/index`, then Seedscore,
   About, Topics. Each: renders + styled + spacing matches original. Verify per
   page.
5. **Rebrand + assets.** `docusaurus.config.js` title/nav/footer/favicon =
   Smol Gardens; move 3 images to `static/img/`. Verify: nav + branding correct.
6. **Routing.** Adopt Docusaurus file-based routing; remove react-router usage.
   Verify: all 4 pages reachable by URL.
7. **Cleanup.** Delete dead Vite/SPA files + deps. Verify: `docusaurus build`
   clean, no unused deps, no react-router import remains.

## Testing / verification strategy

- Each unit ends with `docusaurus build` succeeding (no broken links, no MDX
  errors) + manual page render check.
- Page-parity check: ported page spacing/card sectioning visually matches the
  original SPA (reference commits `d04a10d`..`d6c426b`).
- Final: full `docusaurus build` + `docusaurus serve` smoke test of all routes.

## Out of scope

- Rewriting/authoring new Smol Gardens docs/blog content (seed kept as-is).
- Deployment/CI setup (separate follow-up).
- Design-system extraction ("Future Design System Scope" per Phase 2 note).
