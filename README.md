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