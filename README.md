<div align="center">
  <img height="150" src="./src/assets/colt.png" alt="Cottonwood Colts logo"/>
</div>
<h1 align="center">
    cottonwood-alumni
</h1>
<div align="center">
    <strong>An alumni-run website for Cottonwood High School.</strong>
</div>
<br>
<div align="center">
  <a href="https://github.com/CottonwoodHigh/alumni-website/blob/main/LICENSE.md">
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
