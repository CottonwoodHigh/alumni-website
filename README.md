<h1 align="center">
    🐎<br>
    cottonwood-alumni
</h1>
<div align="center">
    <strong>An alumni-run website for Cottonwood High School.</strong>
</div>
<br>
<div align="center">
  <a href="https://github.com/lukehsiao/cottonwood-alumni/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-BlueOak--1.0.0-blue?style=flat" alt="License">
  </a>
  <a href="https://starlight.astro.build">
    <img src="https://astro.badg.es/v2/built-with-starlight/tiny.svg" alt="starlight">
  </a>
</div>
<br>


This repository hosts the source for <https://alumni.cottonwoodhigh.school>.

## 🚀 Project Structure

Inside this Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
