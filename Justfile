# just manual: https://github.com/casey/just

_list:
    @just --list

# Check for typos
[group('linting')]
typos:
    typos 

# Run a lychee-based link check
[group('linting')]
link-check *FLAGS:
    pnpm run build
    -lychee --insecure --root-dir {{ justfile_directory() }}/dist --accept '100..=103,200..=299' --cache --cache-exclude-status='401,403,404,429' --max-cache-age 7d -E {{FLAGS}} 'dist/**/*.html'
    rm -r dist/

# Update all dependencies
[group('build')]
upgrade:
    pnpm dlx @astrojs/upgrade
    pnpm up --recursive
    pnpm install
    
# Serve the site locally for development
[group('editing')]
watch *FLAGS:
    pnpm run dev {{FLAGS}}

# Preview a production build of the site
[group('editing')]
preview:
    pnpm build
    pnpm preview

# Create a new class page
[group('editing')]
new-class YEAR:
    echo "---\ntitle: '{{YEAR}}'\ndescription: 'Class page for the graduating class of {{YEAR}} of Cottonwood High School.'\n---" > src/content/docs/classes/{{YEAR}}.mdx
