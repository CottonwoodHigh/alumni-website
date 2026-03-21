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


This is the source for [alumni.cottonwoodhigh.school](https://alumni.cottonwoodhigh.school), maintained by Cottonwood High alumni.
If you're here, you probably want to add a class page, fix something, or figure out how the project works.

---

## Table of contents

- [Project overview](#project-overview)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Development workflow](#development-workflow)
  - [Just commands](#just-commands)
  - [Adding a new class page](#adding-a-new-class-page)
  - [Linting](#linting)
  - [Releases](#releases)
- [License](#license)

---

## Project overview

The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), a documentation-focused framework where pages are authored in Markdown or MDX.
Content lives in `src/content/docs/` and gets compiled to static HTML.

## Tech stack

| Tool                                                                      | Purpose                  |
| ------------------------------------------------------------------------- | ------------------------ |
| [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) | Site framework           |
| [pnpm](https://pnpm.io)                                                   | Package manager          |
| [just](https://github.com/casey/just)                                     | Task runner (`Justfile`) |
| [mise](https://mise.jdx.dev)                                              | Tool version manager     |
| [Changesets](https://github.com/changesets/changesets)                    | Versioning & changelog   |
| [typos](https://github.com/crate-ci/typos)                                | Spell checking           |
| [lychee](https://github.com/lycheeverse/lychee)                           | Broken link checking     |

## Prerequisites

Install these before you start.

- [mise](https://mise.jdx.dev): manages Node.js (LTS) and pnpm (latest) via `mise.toml`
- [just](https://github.com/casey/just): the task runner
- [typos](https://github.com/crate-ci/typos): spell checking
- [lychee](https://github.com/lycheeverse/lychee): link checking (optional locally, runs in CI)

Once `mise` is installed:

```bash
mise trust
mise install
```

## Getting started

```sh
# 1. Clone the repo
git clone https://github.com/CottonwoodHigh/alumni-website.git
cd alumni-website

# 2. Install Node.js and pnpm
mise trust
mise install

# 3. Install project dependencies
just install

# 4. Start the dev server
just watch
```

The site will be at `http://localhost:4321`.

## Project structure

```
.
├── .changeset/          # Pending changeset files for versioning
├── .github/             # GitHub Actions workflows
├── contrib/             # Contributor resources / assets
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images referenced in Markdown (e.g. colt.png)
│   └── content/
│       └── docs/        # ✏️  All site pages live here as .md / .mdx files
│           └── classes/ # One file per graduating class
├── astro.config.mjs     # Astro + Starlight configuration
├── Justfile             # Task runner commands (see below)
├── mise.toml            # Tool versions (Node LTS, pnpm latest)
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

Every `.md` or `.mdx` file in `src/content/docs/` becomes a route on the site, based on its path and filename.

## Development workflow

1. Create a branch for your change.
2. Run `just watch` for a live-reloading dev server.
3. Edit files in `src/content/docs/`.
4. Run `just typos` before committing.
5. Open a pull request against `main`.

### Just commands

Run `just` with no arguments to list everything available.

```bash
❯ just
Available recipes:
    [build]
    install           # Install all dependencies
    upgrade           # Update all dependencies

    [editing]
    new-class YEAR    # Create a new class page
    preview           # Preview a production build of the site
    watch *FLAGS      # Serve the site locally for development

    [linting]
    link-check *FLAGS # Run a lychee-based link check
    typos             # Check for typos

    [release]
    changeset *args   # Interactively create a changeset.
    status *args      # Show pending changesets and expected version bumps.
    version *args     # Create a version bump
```

### Adding a new class page

```sh
just new-class 1995
```

That creates `src/content/docs/classes/1995.mdx` with this frontmatter:

```mdx
---
title: '1995'
description: 'Class page for the graduating class of 1995 of Cottonwood High School.'
---
```

Open the file and add whatever you have: reunion details, photos, a list of names.
MDX supports standard Markdown plus JSX components if you need them.
See the [Starlight docs](https://starlight.astro.build/guides/authoring-content/) for a guide to writing in Markdown.

### Linting

#### Spell checking

[`typos`](https://github.com/crate-ci/typos) is fast and low on false positives. Custom exceptions live in `.typos.toml`.

```sh
just typos
```

#### Link checking

[`lychee`](https://github.com/lycheeverse/lychee) builds the full site and crawls every HTML file for broken links. Known-bad URLs are excluded via `.lycheeignore` and `lychee.toml`.

```sh
just link-check
```

### Releases

Versioning is handled with [Changesets](https://github.com/changesets/changesets).

#### Record your change

After any meaningful change to the framework, create a changeset:

```sh
just changeset
```

You'll get an interactive prompt for the change type (patch/minor/major) and a short description.
The result is a small Markdown file in `.changeset/`.
Commit this alongside your code.

## License

[BlueOak-1.0.0](./LICENSE.md).
