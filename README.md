# Astro Portfolio

My personal portfolio, built with [Astro](https://astro.build): a minimalist, single-scroll site presenting my background, projects and skills.

The code is open source and you can reuse it for your own portfolio. The content (photos, texts, CVs) is mine and is not reusable. See [License](#-license).

## ✨ Features

- **Single-scroll layout** with a side navigation that follows the current section
- **Ambient background** that fades between colour themes as you scroll
- **Education timeline**, experience cards and a project grid with spotlight cards
- **Self-playing Snake** in the Skills section: it eats one skill icon at a time and fills in the skills list as it goes
- **Content in JSON**: every entry is a file in `src/content/`, validated by a schema at build time
- **No client-side framework**: plain Astro components and a few small scripts

## 🛠️ Stack

- [Astro](https://astro.build) — main framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- TypeScript

## 🚀 Running locally

Requires Node.js 22.12 or later.

```bash
# Clone the repo
git clone https://github.com/arbasti/astro-portfolio.git
cd astro-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

## 📦 Build

```bash
npm run build
npm run preview
```

## 🧩 Use it for your own portfolio

Fork the repo, then replace my content with yours:

1. **Content**: replace the JSON files in `src/content/`. The expected fields are defined in `src/content.config.ts`, and the build fails with a clear message if one is missing or wrong.
2. **Files**: replace everything in `public/` (photo, images, CVs, PDFs). Paths in the JSON files are relative to `public/`, so `/projects/foo/cover.webp` points to `public/projects/foo/cover.webp`.
3. **Hero**: edit `src/components/Hero.astro` for your name, tagline, bio, CV links and profile links. These are written directly in the component.
4. **Page title and language**: edit `<title>` and `<html lang>` in `src/layouts/Layout.astro`.
5. **Colours**: edit the theme variables in `src/styles/global.css`.

Two things to know when editing content:

- **Ordering**: entries are sorted by their `order` field, lowest first. Projects are numbered in steps of 10 (0, 10, 20, ...) so you can insert one between two others without renumbering. Decimals work too.
- **Education themes**: each education entry has a `theme` name, and the background fades to the matching `data-layer` in `src/layouts/Layout.astro`. If you add or rename a theme, add or rename its layer there.

## ☁️ Deploy

The site is fully static: `npm run build` outputs it to `dist/`. It deploys as-is on [Vercel](https://vercel.com), Netlify, GitHub Pages or any static host, with no configuration needed.

## 📄 License

This repository uses two licenses:

- **Code**: [MIT License](./LICENSE). Use it, modify it, build your own portfolio with it.
- **Content**: all rights reserved, see [LICENSE-CONTENT.md](./LICENSE-CONTENT.md). This covers everything in `public/` and `src/content/`, and the personal text in the components.
