# Norbert Cseh's CV

This project is a modern, responsive, and interactive CV/Resume built with Astro, TypeScript, and CSS.

## Features

- **Modern UI**: Clean and professional design using JetBrains fonts.
- **Dark/Light Mode Toggle**: Integrated theme switching with system preference detection and `localStorage`
  persistence.
- **Interactive Elements**: Intersection Observer for section fade-in animations.
- **Print Optimized**: Custom print styles to ensure high-quality PDF/Paper output.
- **Responsive Design**: Adapts beautifully to various screen sizes.

## Personal Information

- **Name**: Norbert Cseh
- **Website**: [www.ncseh.hu](https://www.ncseh.hu)
- **LinkedIn**: [norbertistvancseh](https://www.linkedin.com/in/norbertistvancseh/)
- **GitHub**: [NorbertCseh](https://github.com/NorbertCseh)

## Development

This project is built using [Astro](https://astro.build/). The CV content lives in `src/data/resume.ts`, and the Astro page renders the site from that single source.

Install dependencies and start the development server with:

```sh
npm install
npm run dev
```

Create the production output with `npm run build` and preview it with `npm run preview`.
Use `npm run format:check` to verify formatting, or `npm run format` to apply Prettier.

Pushes to `main` build and deploy `dist` to GitHub Pages. Pull requests run the same build as a check. The custom domain is retained through `public/CNAME`.
