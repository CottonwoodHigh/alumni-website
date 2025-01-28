# just manual: https://github.com/casey/just

_list:
    @just --list

# Create a new class page
new-class YEAR:
    echo -e "---\ntitle: '{{YEAR}}'\ndescription: 'Class page for the graduating class of {{YEAR}} of Cottonwood High School.'\n---" > src/content/docs/classes/{{YEAR}}.mdx

# Check for typos
typos:
    typos src/

# Run a lychee-based link check
link-check *FLAGS:
    npm run build
    -lychee --insecure --base https://alumni.cottonwoodhigh.school --accept '100..=103,200..=299' --cache --cache-exclude-status='401,403,404,429' --max-cache-age 7d -E {{FLAGS}} 'dist/**/*.html'
    rm -r dist/

# Serve the site locally
watch *FLAGS:
    npm run dev {{FLAGS}}
