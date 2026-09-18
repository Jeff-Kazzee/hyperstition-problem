# The Hyperstition Problem

A long-form essay site on hyperstition — fictions that make themselves real — and what it means for people whose work is publishing as much as possible about AI doom.

## Structure

- `src/content/chapters/*.md` — the essay, one file per part. Frontmatter: `title`, `subtitle`, `order`, `description`. Add a file and set `order` to add a chapter; navigation and the table of contents update automatically.
- `src/pages/index.astro` — home page and table of contents.
- `src/pages/chapters/[id].astro` — chapter route with prev/next.
- `src/pages/about.astro`, `llms.txt.ts`, `robots.txt.ts`
- `src/layouts/Layout.astro`, `src/styles/global.css` — single layout, light/dark via `prefers-color-scheme`.

## Commands

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run check     # astro type check
```

Set `SITE_URL` (and `BASE_PATH` for a sub-path host like GitHub Pages) when building for production so canonical URLs, sitemap and llms.txt point at the right place. `.github/workflows/deploy.yml` does this automatically and publishes to GitHub Pages on every push to `main`.
