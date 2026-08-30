# Repository Instructions

## Commands

- Run `npm install` after dependency changes; the `postinstall` script runs `nuxt prepare`.
- Use `npm run dev` for local development at `http://localhost:3000`; keep work local unless deployment is explicitly requested.
- Use `npm run build` to validate a production build and `npm run generate` only when static-output validation is needed.
- There are currently no lint, test, or typecheck scripts in `package.json`.
- On this Windows/Node 26 setup, `nuxt.config.ts` uses Nuxt Content's native SQLite connector; do not switch back to `better-sqlite3` without a concrete reason.

## Content Architecture

- Nuxt Content pages live under `content/units/*.md` and belong to the `units` collection defined in `content.config.ts`; frontmatter must satisfy its zod schema, including the 120-175 character top-level description and the required `pdf` field pointing at a file under `/decks/`.
- Unit routes are handled by `app/pages/[...slug].vue`, which queries the `units` collection and renders content with `<ContentRenderer>`.
- Markdown math uses `remark-math` and `rehype-katex` configured under `content.build.markdown`; KaTeX CSS is globally loaded from `katex/dist/katex.min.css`.
- MDC components used by content belong in `app/components/content/`; `::deck-embed` and `::seo-strip` map to `DeckEmbed.vue` and `SeoStrip.vue`. `SlideDeck.vue`/`Slide.vue` are legacy from the former HTML-deck presentation and are currently unused.
- The content presentation is PDF-embed-first: each unit page embeds its lecture deck from `public/decks/unit-N-<slug>.pdf` via `::deck-embed`, with only the compact `::seo-strip` (key formulas + FAQ one-liners) below it. Original PowerPoint and PDF sources stay in `coordinate_systems/`; when new decks are added, export to PDF and copy into `public/decks/` following the same naming scheme.
- When converting source decks, preserve engineering notation, especially Cartesian, cylindrical (ISO 31-11), and spherical (physics convention) coordinate conventions.

## Application Conventions

- Global application styling is in `app/assets/css/main.css`; the current visual language is a light academic slide-library theme.
- SEO metadata and JSON-LD are generated in `app/pages/[...slug].vue` from Markdown frontmatter. `runtimeConfig.public.siteUrl` is intentionally empty during local development; do not add a placeholder production canonical URL.
- Units not yet published should remain non-linked "coming soon" entries on the home page rather than dead internal links.
- `.nuxt`, `.output`, `.data`, `node_modules`, and logs are ignored/generated artifacts; do not edit or commit them.
