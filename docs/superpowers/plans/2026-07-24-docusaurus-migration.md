# Smol Gardens Docusaurus Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vite/React SPA foundation with a forked, upgraded Docusaurus 3 site, preserving the 4 existing marketing pages and their Tailwind card/spacing UI.

**Architecture:** Fork `femmecubator/open-sprints` (Docusaurus 2.4.1) into this repo, upgrade it to Docusaurus 3.x (React 18), wire Tailwind v4 via a PostCSS Docusaurus plugin (skipping Tailwind preflight so Infima survives), then port Home/Seedscore/About/Topics into `src/pages/` as Docusaurus custom pages. Docs/blog seed content from open-sprints is kept.

**Tech Stack:** Docusaurus 3.x, React 18, MDX 3, Tailwind CSS v4 (`@tailwindcss/postcss`), `lucide-react`, `motion`, Infima.

## Global Constraints

- Repo stays `launchpad-marketing-site`; remote `origin` = `github.com/kriziaf/launchpad-marketing-site` unchanged. Branch: `feat/docusaurus-migration`.
- Docusaurus **3.x** (not 2.4.1). React **18**. MDX **3**. `@mdx-js/react@^3`, `clsx@^2`, `prism-react-renderer@^2`.
- Node **>=18** (Docusaurus 3 floor). Package manager: **npm** (repo has `package-lock.json`; delete open-sprints `yarn.lock`).
- Tailwind v4 via `@tailwindcss/postcss` only — NOT `@tailwindcss/vite`. **Preflight must be skipped** (import only `theme` + `utilities` layers) to avoid clobbering Infima.
- Keep open-sprints `docs/` + `blog/` seed content; fix MDX v1→v3 breakage rather than deleting.
- Brand copy: nav = Home / About / Seedscore Tool / Topics; logo text "SMOL GARDENS"; primary accent `#761fb1`; CTA "Contact us".
- Every task ends with a passing `npm run build` (`docusaurus build`) unless the task explicitly runs `npm start` instead.
- Preserve visual parity with original SPA (reference commits `d04a10d`..`d6c426b`): card grid spacing, radii, colors unchanged.

---

## File Structure

- `docusaurus.config.js` — site config, navbar, footer, tailwind PostCSS plugin (rebranded Smol Gardens).
- `sidebars.js`, `babel.config.js` — from open-sprints, kept.
- `docs/`, `blog/` — open-sprints seed content, MDX-3-fixed.
- `plugins/tailwind-plugin.js` — Docusaurus plugin injecting `@tailwindcss/postcss`.
- `postcss` — configured through the plugin above (no root `postcss.config.js`).
- `src/css/custom.css` — Infima var overrides + Tailwind entry (theme+utilities layers) + font import + theme tokens.
- `src/components/Card.tsx` — extracted card used by Home (and reusable).
- `src/pages/index.tsx` — Home.
- `src/pages/seedscore.tsx`, `about.tsx`, `topics.tsx` — ported pages.
- `static/img/` — `hero-team.jpg`, `seedscore-report.png`, `about-postits.jpg`.
- Deleted at end: `vite.config.ts`, `index.html`, `src/main.tsx`, `src/app/App.tsx`, `src/app/routes.tsx`, `src/app/components/SiteHeader.tsx`, `src/styles/*`, `tsconfig.node.json`, `postcss.config.mjs`, `react-router` dep.

---

### Task 1: Fork open-sprints into repo + upgrade to Docusaurus 3

**Files:**
- Create (copied from open-sprints): `docusaurus.config.js`, `sidebars.js`, `babel.config.js`, `docs/**`, `blog/**`, `static/**`, `src/pages/**` (their samples, replaced later), `src/css/custom.css`, `src/components/**`.
- Modify: `package.json` (deps → Docusaurus 3), `.gitignore` (add `.docusaurus/`, `build/`).
- Delete: `yarn.lock` (keep npm).

**Interfaces:**
- Produces: a booting Docusaurus 3 site at repo root; `npm start` serves `/`, `/docs/intro`, `/blog`.

- [ ] **Step 1: Clone open-sprints to a temp dir**

```bash
git clone --depth 1 https://github.com/femmecubator/open-sprints /tmp/open-sprints
```

- [ ] **Step 2: Remove old SPA source that Docusaurus will replace**

Leave `src/app/**` and `src/styles/**` in place for now (needed as reference during page ports — deleted in Task 8). Remove only the Vite entry points that conflict with Docusaurus:

```bash
git rm -q index.html vite.config.ts postcss.config.mjs
```

- [ ] **Step 3: Copy Docusaurus scaffold from the clone**

```bash
cp -R /tmp/open-sprints/docs /tmp/open-sprints/blog /tmp/open-sprints/static .
cp /tmp/open-sprints/docusaurus.config.js /tmp/open-sprints/sidebars.js /tmp/open-sprints/babel.config.js .
mkdir -p src/css src/components
cp /tmp/open-sprints/src/css/custom.css src/css/custom.css
cp -R /tmp/open-sprints/src/components/. src/components/ 2>/dev/null || true
```

- [ ] **Step 4: Overwrite `package.json` deps/scripts with Docusaurus 3**

Replace `dependencies`, `devDependencies`, and `scripts` (keep `name`, `version`, `private`, `type` removed — Docusaurus uses CommonJS config so remove `"type": "module"`):

```json
{
  "name": "launchpad-marketing-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "serve": "docusaurus serve",
    "clear": "docusaurus clear",
    "swizzle": "docusaurus swizzle",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "^3.7.0",
    "@docusaurus/preset-classic": "^3.7.0",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.1.1",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "prism-react-renderer": "^2.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.7.0",
    "@docusaurus/tsconfig": "^3.7.0",
    "@docusaurus/types": "^3.7.0",
    "@tailwindcss/postcss": "4.1.12",
    "tailwindcss": "4.1.12",
    "typescript": "~5.6.3"
  },
  "engines": { "node": ">=18.0" }
}
```

- [ ] **Step 5: Replace `tsconfig.json` with Docusaurus base**

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": { "baseUrl": "." },
  "exclude": [".docusaurus", "build"]
}
```

Then `git rm -q tsconfig.node.json`.

- [ ] **Step 6: Install**

```bash
rm -f yarn.lock package-lock.json
npm install
```
Expected: installs without peer-dep errors (React 18 across the board).

- [ ] **Step 7: Fix MDX v1→v3 breakage in seed content**

Run the build to surface MDX errors, then fix each flagged file (common v3 breakers: unescaped `<`/`{`, HTML comments `<!-- -->` → `{/* */}`, `style="..."` string attrs → object):

```bash
npm run build 2>&1 | tee /tmp/mdxbuild.log
```
For each `docs/**` or `blog/**` file the log flags, apply the minimal MDX-3 fix. Re-run until clean.
Expected: `npm run build` exits 0.

- [ ] **Step 8: Verify dev server boots**

```bash
npm start
```
Expected: serves `http://localhost:3000/`, homepage + `/blog` render. Stop server (Ctrl-C).

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: fork open-sprints Docusaurus and upgrade to v3"
```

---

### Task 2: Wire Tailwind v4 via PostCSS (preflight skipped)

**Files:**
- Create: `plugins/tailwind-plugin.js`
- Modify: `docusaurus.config.js` (register plugin), `src/css/custom.css` (Tailwind entry)

**Interfaces:**
- Consumes: booting Docusaurus site from Task 1.
- Produces: Tailwind utility classes usable in any `src/pages/*` / `src/components/*` file, without resetting Infima base styles.

- [ ] **Step 1: Create the Tailwind Docusaurus plugin**

`plugins/tailwind-plugin.js`:
```js
module.exports = function tailwindPlugin() {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
};
```

- [ ] **Step 2: Register the plugin in `docusaurus.config.js`**

Add to the config object (top-level `plugins` array; create it if absent):
```js
plugins: [require.resolve("./plugins/tailwind-plugin.js")],
```

- [ ] **Step 3: Add Tailwind entry to `src/css/custom.css` (skip preflight)**

Prepend to the top of `src/css/custom.css` — import only theme + utilities layers so Tailwind's preflight reset does NOT override Infima:
```css
/* Tailwind v4 — theme + utilities only; preflight intentionally skipped to preserve Infima */
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "../**/*.{js,jsx,ts,tsx}";
```

- [ ] **Step 4: Add a temporary probe to a page to prove Tailwind renders**

In the existing copied `src/pages/index` (open-sprints sample, still present), wrap the returned content's outer element by adding `className="text-[#761fb1] underline"` to one heading element.

- [ ] **Step 5: Run dev server, verify utility applies + Infima intact**

```bash
npm start
```
Expected: probed heading is purple + underlined (Tailwind working) AND the Docusaurus navbar/footer still render with normal Infima styling (preflight did not nuke them). Remove the probe class. Stop server.

- [ ] **Step 6: Verify build**

```bash
npm run build
```
Expected: exit 0.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: wire Tailwind v4 into Docusaurus via PostCSS, skip preflight"
```

---

### Task 3: Port fonts, theme tokens, Card component, and rebrand navbar

**Files:**
- Modify: `src/css/custom.css` (fonts + tokens + Infima brand vars)
- Create: `src/components/Card.tsx`
- Modify: `docusaurus.config.js` (navbar/footer branding)

**Interfaces:**
- Consumes: Tailwind from Task 2.
- Produces: `Card` component — `export default function Card(props: { icon: LucideIcon; title: string; body: string; link: string }): JSX.Element`. Navbar shows Smol Gardens brand + Home/About/Seedscore Tool/Topics links.

- [ ] **Step 1: Add font import + brand tokens to `src/css/custom.css`**

Append after the Tailwind entry:
```css
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap");

:root {
  --ifm-color-primary: #761fb1;
  --ifm-color-primary-dark: #5f1790;
  --ifm-font-family-base: "Nunito Sans", system-ui, sans-serif;
}
```

- [ ] **Step 2: Create `src/components/Card.tsx`** (extracted from original `src/app/pages/Home.tsx` card markup, `<a href>` kept as-is)

```tsx
import type { LucideIcon } from "lucide-react";

export type CardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  link: string;
};

export default function Card({ icon: Icon, title, body, link }: CardProps) {
  return (
    <article className="flex flex-col items-center rounded-[16px] border border-[#cfcfcf] bg-white p-8 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-[#dcfce7]">
        <Icon size={32} className="text-[#16a34a]" strokeWidth={2} />
      </span>
      <h3 className="mt-5 font-['Nunito_Sans'] text-[18px] font-bold text-[#0a0a0a]">{title}</h3>
      <p className="mt-5 font-['Nunito_Sans'] text-[14px] leading-[24px] text-[#4a5565]">{body}</p>
      <a href="#" className="mt-2 font-['Nunito_Sans'] text-[14px] font-bold text-[#222] underline">
        {link}
      </a>
    </article>
  );
}
```

- [ ] **Step 3: Rebrand navbar + footer in `docusaurus.config.js`**

Set `title: "Smol Gardens"`, `tagline` per home hero. In `themeConfig.navbar`, set `title: "SMOL GARDENS"` and `items` to:
```js
items: [
  { to: "/", label: "Home", position: "left", activeBaseRegex: "^/$" },
  { to: "/about", label: "About", position: "left" },
  { to: "/seedscore", label: "Seedscore Tool", position: "left" },
  { to: "/topics", label: "Topics", position: "left" },
  { to: "/docs/intro", label: "Docs", position: "left" },
  { to: "/blog", label: "Blog", position: "left" },
  { href: "#contact", label: "Contact us", position: "right" },
],
```
(The bespoke black-pill SiteHeader is replaced by the idiomatic Infima navbar; visual accent handled by `--ifm-color-primary`.)

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: exit 0, no missing-route warnings for `/about` `/seedscore` `/topics` yet? Docusaurus warns on broken nav links to not-yet-created pages — acceptable this task; they are created in Tasks 4–7. If build fails hard on broken links, set `onBrokenLinks: "warn"` in config temporarily.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add fonts, brand tokens, Card component, rebrand navbar"
```

---

### Task 4: Port Home → `src/pages/index.tsx`

**Files:**
- Create: `src/pages/index.tsx` (replaces open-sprints sample index)
- Reference: `src/app/pages/Home.tsx` (original), `git show d04a10d:src/app/pages/Home.tsx`
- Uses asset: `static/img/hero-team.jpg`

**Interfaces:**
- Consumes: `Card` from Task 3; Docusaurus `Layout`.

- [ ] **Step 1: Move hero asset to `static/img/`**

```bash
mkdir -p static/img
git mv src/assets/hero-team.jpg static/img/hero-team.jpg
```

- [ ] **Step 2: Create `src/pages/index.tsx`**

Wrap the original Home body in Docusaurus `<Layout>`; swap the `<img src={heroTeam}>` import for the static path `/img/hero-team.jpg`; keep all Tailwind classes/markup identical; use the `Card` component for the three cards.

```tsx
import Layout from "@theme/Layout";
import { Heart, Users, MessageSquare } from "lucide-react";
import Card, { type CardProps } from "@site/src/components/Card";

const cards: CardProps[] = [
  { icon: Heart, title: "Build with Intention", body: "Explore our study on accountable AI workflow using Seedscore, a practical frameworks for builders who want to create responsibly.", link: "Learn about Smol Gardens >" },
  { icon: Users, title: "Contribute to this research", body: "Researchers, educators, and civic tech builders — join our working group and help shape accountable AI. Email us to get involved.", link: "Join the Working Group >" },
  { icon: MessageSquare, title: "Host a workshop", body: "Everything you need to run a Smol Gardens workshop — hosting instructions and materials included. Bring Smol Gardens to your community.", link: "Access workshop materials" },
];

export default function Home() {
  return (
    <Layout title="Smol Gardens" description="Accountable AI guide for Builders and Educators">
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px]" style={{ background: "radial-gradient(1200px 520px at 85% 8%, #d7f6e3 0%, rgba(215,246,227,0) 60%), radial-gradient(700px 380px at 78% 62%, #cfe0ff 0%, rgba(207,224,255,0) 65%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:px-10">
          <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h1 className="font-['Nunito_Sans'] text-[40px] font-medium leading-[1.15] text-[#222] md:text-[48px] md:leading-[56px]">Accountable AI<br />guide for Builders and Educators</h1>
              <a href="/seedscore" className="inline-flex h-[48px] w-fit items-center justify-center rounded-[10px] bg-[#761fb1] px-6 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]">Plan your projects with Seedscore</a>
            </div>
            <div className="lg:justify-self-end">
              <img src="/img/hero-team.jpg" alt="A team of builders and educators collaborating around a table" className="aspect-[492/328] w-full max-w-[492px] rounded-[16px] object-cover" />
            </div>
          </section>
          <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((c) => <Card key={c.title} {...c} />)}
          </section>
        </div>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 3: Run dev server, verify parity**

```bash
npm start
```
Expected: `/` shows hero (heading + purple CTA + image) and 3-card grid with identical spacing to original SPA. Stop server.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add -A
git commit -m "feat: port Home page to Docusaurus index"
```

---

### Task 5: Port Seedscore → `src/pages/seedscore.tsx`

**Files:**
- Create: `src/pages/seedscore.tsx`
- Reference: `src/app/pages/Seedscore.tsx`
- Asset: `static/img/seedscore-report.png`

**Interfaces:**
- Consumes: Docusaurus `Layout`.

- [ ] **Step 1: Move asset**

```bash
git mv src/assets/seedscore-report.png static/img/seedscore-report.png
```

- [ ] **Step 2: Create `src/pages/seedscore.tsx`**

Copy the JSX body of `src/app/pages/Seedscore.tsx` verbatim, then apply these mechanical transforms: (a) wrap the outer return in `<Layout title="Seedscore Tool">…</Layout>` with `import Layout from "@theme/Layout";`; (b) replace any `import img from "../../assets/seedscore-report.png"` + `src={img}` with `src="/img/seedscore-report.png"`; (c) replace any react-router `Link`/`NavLink to=` with plain `<a href=>` (or `import Link from "@docusaurus/Link"` and `Link to=`); (d) keep every Tailwind class unchanged.

- [ ] **Step 3: Verify render**

```bash
npm start
```
Expected: `/seedscore` matches original SPA page. Stop server.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add -A
git commit -m "feat: port Seedscore page to Docusaurus"
```

---

### Task 6: Port About → `src/pages/about.tsx`

**Files:**
- Create: `src/pages/about.tsx`
- Reference: `src/app/pages/About.tsx`
- Asset: `static/img/about-postits.jpg`

**Interfaces:**
- Consumes: Docusaurus `Layout`.

- [ ] **Step 1: Move asset**

```bash
git mv src/assets/about-postits.jpg static/img/about-postits.jpg
```

- [ ] **Step 2: Create `src/pages/about.tsx`**

Same mechanical transforms as Task 5 Step 2, applied to `src/app/pages/About.tsx`: wrap in `<Layout title="About">`, swap asset import for `/img/about-postits.jpg`, swap react-router links for `@docusaurus/Link`/`<a>`, keep Tailwind classes.

- [ ] **Step 3: Verify render**

```bash
npm start
```
Expected: `/about` matches original. Stop server.

- [ ] **Step 4: Build + commit**

```bash
npm run build
git add -A
git commit -m "feat: port About page to Docusaurus"
```

---

### Task 7: Port Topics → `src/pages/topics.tsx`

**Files:**
- Create: `src/pages/topics.tsx`
- Reference: `src/app/pages/Topics.tsx`

**Interfaces:**
- Consumes: Docusaurus `Layout`. Topics page has client-side search/tag-filter state (`useState`) — Docusaurus renders pages with React so hooks work; ensure it's a default-exported component using `useState` from `react`.

- [ ] **Step 1: Create `src/pages/topics.tsx`**

Copy `src/app/pages/Topics.tsx` body; transforms: wrap in `<Layout title="Topics">`; keep `import { useState } from "react"`; swap any react-router links for `@docusaurus/Link`/`<a>`; keep search + tag-filter logic and all Tailwind classes unchanged. If the page reads route params via react-router hooks, replace with `@docusaurus/router` `useLocation`/`useHistory` or local state — verify none remain.

- [ ] **Step 2: Verify render + interactivity**

```bash
npm start
```
Expected: `/topics` renders; search box filters; tag chips filter. Stop server.

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add -A
git commit -m "feat: port Topics page to Docusaurus"
```

---

### Task 8: Remove dead SPA files + finalize

**Files:**
- Delete: `src/app/**`, `src/styles/**`, `src/assets/**` (now empty), `src/vite-env.d.ts`, `tsconfig.node.json` (if still present)
- Modify: `docusaurus.config.js` (restore `onBrokenLinks: "throw"` if it was set to warn)

**Interfaces:**
- Produces: clean Docusaurus 3 site, no react-router, no Vite artifacts.

- [ ] **Step 1: Confirm no remaining imports from deleted dirs**

```bash
grep -rn "src/app\|react-router\|styles/index.css\|@tailwindcss/vite" src docusaurus.config.js || echo "clean"
```
Expected: `clean`. Fix any hit before deleting.

- [ ] **Step 2: Delete dead SPA tree**

```bash
git rm -rq src/app src/styles
git rm -q src/vite-env.d.ts 2>/dev/null || true
rmdir src/assets 2>/dev/null || true
```

- [ ] **Step 3: Remove `react-router` (and any stray Vite deps) from package.json**

Confirm `react-router`, `@tailwindcss/vite`, `@vitejs/plugin-react`, `tw-animate-css`, `tailwind-merge`, `vite`, `motion` (if unused) are gone from `dependencies`/`devDependencies`. Keep `motion` only if a ported page imports it; otherwise remove. Then:
```bash
npm install
```

- [ ] **Step 4: Restore strict broken-link check**

Set `onBrokenLinks: "throw"` in `docusaurus.config.js` (all 4 pages + docs/blog now exist).

- [ ] **Step 5: Full build + serve smoke test**

```bash
npm run build && npm run serve
```
Expected: build exits 0 with no broken-link errors; `serve` renders `/`, `/about`, `/seedscore`, `/topics`, `/docs/intro`, `/blog`. Stop server.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove dead Vite/SPA files and react-router"
```

---

## Self-Review

- **Spec coverage:** fork+replace (T1), Docusaurus 3 upgrade (T1), MDX v1→v3 (T1 S7), Tailwind PostCSS + preflight skip (T2), fonts/tokens/Card/navbar (T3), Home/Seedscore/About/Topics ports (T4–T7), file-based routing via `src/pages` (T4–T7), asset moves to `static/img` (T4–T7), react-router removal + cleanup (T8), keep docs/blog seed (T1). All spec units mapped.
- **Placeholder scan:** none — config files and Card component are complete; page-port tasks give exact mechanical transforms against named reference files.
- **Type consistency:** `Card`/`CardProps` defined in T3, consumed in T4 with matching shape (`icon: LucideIcon; title; body; link`). Asset paths `/img/*` consistent across T4–T7. Plugin export name `tailwindPlugin` consistent T2.
- **Known risk callouts:** broken-link build behavior handled (warn during T3, throw restored T8); MDX upgrade breakage handled iteratively (T1 S7); Tailwind preflight collision avoided by layer-selective import (T2 S3).
