# just manual: https://github.com/casey/just

_list:
    @just --list

# Check for typos
[group('linting')]
typos:
    typos 

# Lint prose with vale
[group('linting')]
vale *FLAGS: _vale-sync
    @# --no-global: a user-level vale config (~/.config/vale/.vale.ini) is
    @# merged into every run, and its [*] section then governs any file the
    @# [*.{md,mdx}] section here does not cover, linting it with whatever
    @# styles that contributor happens to have. The --glob below is what
    @# keeps such files out today; this flag makes the run hermetic even if
    @# the glob is ever loosened.
    vale --no-global --glob='*.{md,mdx}' {{FLAGS}} README.md contrib/ src/content/

# Download the vale style packages listed in .vale.ini
[group('linting')]
vale-sync:
    vale sync

_vale-sync:
    #!/usr/bin/env bash
    set -euo pipefail

    # The checked dirs mirror Packages in .vale.ini and must be updated with
    # it; if they drift, the lint fails loudly (E100: style does not exist
    # on StylesPath) rather than passing silently.
    for pkg in write-good proselint alex; do
        if [ ! -d ".vale/styles/$pkg" ]; then
            just vale-sync
            break
        fi
    done

# Run a lychee-based link check
[group('linting')]
link-check *FLAGS:
    pnpm run build
    -lychee {{FLAGS}} 'dist/**/*.html'
    rm -r dist/

# Install all dependencies
[group('build')]
install:
    pnpm install

# Update all dependencies
[group('build')]
upgrade:
    pnpm dlx @astrojs/upgrade
    pnpm up --recursive
    pnpm install
    
# Serve the site locally for development
[continue]
[group('editing')]
watch *FLAGS:
    @trap 'exit 0' INT; pnpm exec astro dev {{FLAGS}}

# Preview a production build of the site
[continue]
[group('editing')]
preview:
    pnpm build
    @trap 'exit 0' INT; pnpm exec astro preview

# Create a new class page
[group('editing')]
new-class YEAR:
    echo -e "---\ntitle: '{{YEAR}}'\ndescription: 'Class page for the graduating class of {{YEAR}} of Cottonwood High School.'\n---" > src/content/docs/classes/{{YEAR}}.mdx

# Interactively create a changeset.
[group('release')]
changeset *args:
	pnpm changeset {{ args }}

# Append git-stats to the latest CHANGELOG entry
_append-git-stats:
	#!/usr/bin/env bash
	set -euo pipefail

	version=$(jaq -r '.version' package.json)
	prev_tag=$(git describe --tags --abbrev=0 2>/dev/null || true)

	if [ -z "$prev_tag" ]; then
	    echo "No previous tag found, skipping git-stats"
	    exit 0
	fi

	if ! command -v git-stats &> /dev/null; then
	    echo "Warning: git-stats not found, skipping"
	    exit 0
	fi

	if ! grep -q "^## ${version}$" CHANGELOG.md; then
	    echo "Warning: '## ${version}' not found in CHANGELOG.md, skipping"
	    exit 0
	fi

	stats=$(git-stats "${prev_tag}..HEAD")

	# Find the new version header line number
	version_line=$(grep -n "^## ${version}$" CHANGELOG.md | head -1 | cut -d: -f1)

	# Find the next section boundary (## or ---) after it
	next_section=$(tail -n "+$((version_line + 1))" CHANGELOG.md \
	    | grep -n "^## \|^---$" \
	    | head -1 \
	    | cut -d: -f1)

	if [ -n "$next_section" ]; then
	    insert_at=$((version_line + next_section - 1))
	else
	    insert_at=$(wc -l < CHANGELOG.md)
	fi

	# Build the stats block (HTML pre tag survives changesets processing)
	stats_block=$(printf '<pre>\n$ git-stats %s..v%s\n%s\n</pre>' "$prev_tag" "$version" "$stats")

	# Insert into CHANGELOG.md
	{
	    head -n "$insert_at" CHANGELOG.md
	    echo "$stats_block"
	    echo
	    tail -n "+$((insert_at + 1))" CHANGELOG.md
	} > CHANGELOG.md.tmp
	mv CHANGELOG.md.tmp CHANGELOG.md

	echo "Added git-stats to CHANGELOG.md for v${version}"

# Create a version bump
[group('release')]
version *args:
	pnpm changeset version {{ args }}
	just _append-git-stats

# Show pending changesets and expected version bumps.
[group('release')]
status *args:
	pnpm changeset status {{ args }}
