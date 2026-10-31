# Agent instructions

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Commit messages

Commits to the site framework follow Conventional Commits.
Commits to site content follow a separate convention.
A content commit that only adds or updates information uses the site section as its type and the page slug as its scope:

| Type | Content |
|---|---|
| `classes` | `src/content/docs/classes/YYYY.mdx`, scope is the year |
| `guides`, `reference`, `resources` | the page in that directory, scope is the page slug |
| `intro` | `src/content/docs/introduction.mdx` |
| `index` | `src/content/docs/index.mdx`, the home page |
| `sponsors` | a sponsor entry on the home page and its logo in `src/assets/sponsors/` |
| `contrib` | files in `contrib/` |

Omit the scope when the commit touches several pages in one section, as in `classes: sort in memoriam lists newest first`.
Content edits across several sections use `docs(content)`.
A content-only commit that fixes a defect, such as a broken link or wrong data, uses `fix` with the section as scope, as in `fix(classes): add missing mailto to 1972 contact link`.
A content-only commit that changes formatting and no information uses `style` the same way, as in `style(classes): indent video grids with spaces`.
Code, styles, config, CI, and dependencies use the standard types, so a change to the sponsor grid component is `feat(sponsors)`, not `sponsors`.
A meaningful change to the site framework also needs a changeset in the same commit; see "Record your change" in `README.md`.

Routine additions take a subject and no body, as in `classes(1976): add Del Steele to in memoriam`.
Agent-made commits end with an `Assisted-by: LLM` trailer.
The human committer adds `Signed-off-by`.
