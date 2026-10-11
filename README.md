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

## Customize

- Site copy, projects, and posts: `src/lib/content.ts`
- Portrait: replace `public/sai-portrait.png` with your photo (transparent PNG works best with the teal backdrop)
- Resume: replace `public/sai-guntupalli-resume.pdf`
- Colors, dark mode, and motion: `src/app/globals.css`