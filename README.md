# aromerob1.github.io

Personal portfolio of Andrés Romero — full-stack developer (SvelteKit, React, NestJS, TypeScript, AWS & GCP, LLMs and AI agents).

Live at **https://aromerob1.github.io**

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Oxlint](https://oxc.rs) for linting
- Hosted on GitHub Pages

## Project structure

```
index.html            Meta tags (description, Open Graph, Twitter card)
src/data.ts           All the content: about, experience, projects, skills, links
src/components/       One component per section (Hero, About, Experience, Projects, Skills, Contact…)
src/index.css         Design tokens (colors, fonts) and global styles
public/               Static files: CV (PDF), og.png, project screenshots
tools/og.html         Source of the social preview image (public/og.png)
```

To change what the site says, edit `src/data.ts` — the components only render it.

## Development

```bash
npm ci --include=dev
npm run dev       # local dev server
npm run lint      # oxlint
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

If your shell exports `NODE_ENV=production`, install with `NODE_ENV=development npm ci --include=dev`, otherwise the dev dependencies (TypeScript, Vite) are skipped.

## Deployment

The source lives on the `source` branch. GitHub Pages serves the `gh-pages` branch, which only holds the built output.

```bash
NODE_ENV=production npm run deploy
```

This builds the site and pushes `dist/` to `gh-pages`. Pages takes about a minute to pick it up. Build with `NODE_ENV=production`; a development build ships a larger, unoptimized bundle.

## Social preview image

`public/og.png` (1200×630) is a screenshot of `tools/og.html`. To regenerate it, open that file in a browser at a 1200×630 viewport, take a screenshot and save it over `public/og.png`.

## Notes

- The Finny dashboard screenshot (`public/finny-dashboard.webp`) uses sample data, not real figures.
- The CV served at `/Andres-Romero-CV.pdf` is `public/Andres-Romero-CV.pdf`; replace the file to update it.
