# Agent Instructions

## Project Shape

- This is a single-page Astro CV site. The page entry point is [src/pages/index.astro](src/pages/index.astro).
- CV content is centralized in [src/data/resume.ts](src/data/resume.ts). Update that data source instead of hardcoding profile, contact, experience, or skills text in components.
- [src/layouts/CvLayout.astro](src/layouts/CvLayout.astro) owns document metadata and the global stylesheet.
- [src/components/Header.astro](src/components/Header.astro), [src/components/ResumeSections.astro](src/components/ResumeSections.astro), and [src/components/Footer.astro](src/components/Footer.astro) render the page sections and receive the inferred `Resume` type as props.
- [src/scripts/interactions.ts](src/scripts/interactions.ts) owns theme persistence, print behavior, and section reveal animations.

## Development

- Install reproducibly with `npm ci`.
- Use Node.js 24, matching the GitHub Actions workflows.
- Run locally with `npm run dev`.
- Validate production output with `npm run build`; this runs `astro check` and `astro build`.
- Preview the built site with `npm run preview`.
- Format files with `npm run format` and verify formatting with `npm run format:check`.
- There are no test or ESLint scripts. Follow the Prettier configuration in [.prettierrc](.prettierrc).

## Editing Rules

- Global styles live in [public/style.css](public/style.css); preserve its light/dark theme, responsive, reduced-motion, and print behavior when changing the UI.
- Keep public assets and root-relative URLs consistent with [astro.config.mjs](astro.config.mjs). Preserve [public/CNAME](public/CNAME), the custom-domain setting, and the existing profile-image dimensions unless the hosting or loading behavior is intentionally changing.
- Sections depend on `src/scripts/interactions.ts` to receive the `visible` class. Ensure content remains usable if client-side enhancement is unavailable, and keep print output working.
- Do not edit generated `.astro/` or `dist/` output.
- Keep unrelated user changes intact when working in a dirty tree.
- Do not create branches, commit, or push unless the user explicitly asks.

## CI and Deployment

- Pull requests targeting `main` run the build in [.github/workflows/pr-build.yml](.github/workflows/pr-build.yml).
- Pushes to `main` and manual dispatch deploy `dist/` through [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- See [README.md](README.md) for project context and user-facing setup details.
