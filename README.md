# Sai Guntupalli — Personal Portfolio

Static single-page portfolio site: plain HTML + CSS + a small amount of vanilla
JS. No build step, no frameworks, no tracking. Deploys to **GitHub Pages**.

All content is sourced from `public/Sai_Guntupalli_Senior_Data_Engineer.pdf`. Everything is
served with **relative paths**, so the site works both at
`https://<user>.github.io/<repo>/` (repo subpath) and at a user-site root.

## Theming

Light and dark are driven by `data-theme` on `<html>`, set by a small inline
script in `<head>` (before the stylesheet, so a saved choice never flashes the
wrong palette).

- No saved choice → the site follows the OS `prefers-color-scheme` setting, and
  keeps following it if the visitor changes it mid-session.
- The header toggle writes an explicit `light`/`dark` choice to `localStorage`,
  which then wins over the OS setting.
- Without JS the media query in `css/styles.css` still themes the page and the
  toggle is hidden.

The dark palette is intentionally written twice in `css/styles.css` — once for
`[data-theme="dark"]` and once inside the media query for the no-JS fallback.
Keep the two token lists identical when editing.

## Icons

Every SVG in `public/icons/` is single-colour and carries a `fill` on its root
element, which cascades to its paths. They are tinted **in the files**, not in
CSS, because an `<img>` renders its SVG in an isolated document and cannot
inherit `currentColor` or read your custom properties.

Colours are the **official brand hex** from Simple Icons. A few brand colours
are far too light to see on the icon plate — JavaScript's `#F7DF1E` measures
just 1.19:1 — so any colour below 3:1 is darkened along the same hue to reach
3:1. Currently adjusted:

| Icon | Official | Used | Icon | Official | Used |
| --- | --- | --- | --- | --- | --- |
| JavaScript | `#F7DF1E` | `#9C8C06` | Docker | `#2496ED` | `#148FEC` |
| Hugging Face | `#FFD21E` | `#A98700` | MongoDB | `#47A248` | `#459D46` |
| LangChain / LangGraph | `#7FC8FF` | `#008DF7` | GitLab | `#FC6D26` | `#F55303` |
| scikit-learn | `#F7931E` | `#CF7307` | NVIDIA | `#76B900` | `#629A00` |
| Snowflake | `#29B5E8` | `#1595C4` | Amazon | `#FF9900` | `#C87800` |

A few brands were dropped from Simple Icons after these files were downloaded
(AWS, LinkedIn, OpenAI, Matplotlib, seaborn); their hex values came from older
Simple Icons releases and each project's own branding. `aws` uses its official
`#232F3E` navy rather than the orange smile. `sql-database.svg` and `shell.svg`
are custom glyphs with no brand mark, so they use `--accent`.

Re-tint a single icon by editing its root `fill`. The plates behind the icons
(`--surface-icon`) stay light in **both** themes, which is why low-luminance
brand colours like Kafka's near-black still read correctly.

## Project structure

```
.
├── index.html                      # All sections, site config + theme boot script (head)
├── css/styles.css                  # Design tokens, layout, components
├── js/main.js                      # Nav toggle, experience expand/collapse, theme toggle, year
├── public/
│   ├── Sai_Guntupalli_Senior_Data_Engineer.pdf  # Resume (linked from the hero, downloads)
│   ├── favicon.svg
│   ├── images/profile.jpeg         # Hero photo — 640×640 (replace with your photo)
│   └── icons/                      # Local SVG icons — pre-tinted with the accent (see below)
└── .github/workflows/deploy.yml    # Pages deployment (push to main)
```

## Run locally

No build step required:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Any static file server works. Opening `index.html` directly via file:// also
works except for the small JS behaviors.)

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `personal-website`) and push this folder to
   its `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. In the repo: **Settings → Pages → Build and deployment → Source:
   "GitHub Actions"**.

3. The included workflow (`.github/workflows/deploy.yml`) deploys on every push
   to `main` (you can also trigger it from the **Actions** tab → **Deploy to
   GitHub Pages** → **Run workflow**).

4. Site URL: `https://<username>.github.io/<repo>/` — all asset paths in the
   site are relative, so no base-path configuration is needed.

## Things to update before/after launch

| Item | Where |
| --- | --- |
| LinkedIn profile URL | set — `https://www.linkedin.com/in/sai-sri-vatsava-guntupalli` in `index.html` `SITE_CONFIG` (top of file) + the two static anchors |
| Your photo | replace `public/images/profile.jpeg` — export it square at **640×640** (2× the largest on-screen size of 320px). A 720px export was 141 KB; 640px is 73 KB. Then update the `width`/`height` in `index.html` if the shape changes |
| Personal projects | `index.html`, "Personal Projects" section — **Data Engineering Handbook** is already live there (links to its public gallery). The other two cards are placeholders: fill `project-desc`, tags, add `project-actions` links, replace the "Coming soon" badges, or delete the cards |
| `og:url` / `og:image` (optional) | `index.html` `<head>` |
# Sai Guntupalli - Personal Website

Minimal personal portfolio inspired by [michaelmannucci.com](https://michaelmannucci.com/).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Motion (scroll reveals, reduced-motion aware)
- Phosphor Icons (SSR entry)

Light and dark mode follow `prefers-color-scheme`. Tokens live in `src/app/globals.css`.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (GitHub Pages, when ready)

Nothing deploys automatically. When the site is ready to publish:

1. `Settings > Pages > Build and deployment > Source: "GitHub Actions"` (one time)
2. `Actions > Deploy to GitHub Pages > Run workflow`

This serves the site at `https://sai-guntupalli.github.io/sai-guntupalli/`. To publish it at the root instead, rename the repo to `sai-guntupalli.github.io` and drop the `NEXT_PUBLIC_BASE_PATH` line from `.github/workflows/deploy-pages.yml`.

Local dry run of the exact Pages build:

```bash
EXPORT=1 NEXT_PUBLIC_BASE_PATH=/sai-guntupalli npm run build
# -> static site in out/, including out/.nojekyll
```

## Customize

- Site copy, projects, and posts: `src/lib/content.ts`
- Portrait: replace `public/sai-portrait.png` with your photo (transparent PNG works best with the teal backdrop)
- Resume: replace `public/sai-guntupalli-resume.pdf`
- Colors, dark mode, and motion: `src/app/globals.css`
