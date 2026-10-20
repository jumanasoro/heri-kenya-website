# HERI-Kenya website

New website for HERI-Kenya (Health + Environmental Research Institute – Kenya), replacing the Elementor
WordPress site at heri-kenya.org. Static Astro site; WordPress stays as the content backend for news
(and later the learning platform). The owner is not a developer: explain changes in plain language.

## Structure

- `src/pages/` – one file per page; URLs match the old WordPress site (keep them for SEO).
- `src/content/projects/*.md` – project pages (`/projects/<file-name>/`).
- `src/data/` – shared content: `site.ts` (nav, stats, partners, contact), `team.ts`, `donate.ts`
  (donation details; `null` shows "details coming soon"), `bsf-tour.ts` (virtual tour stops).
- `src/lib/wordpress.ts` – reads posts from WordPress at build time (`WP_URL`, default heri-kenya.org).
- `public/api/form.php` – emails website forms to info@heri-kenya.org (PHP on Hostinger; not testable locally).
- `reference/wp-pages/` – text of the old WordPress pages, for rewriting.

## Develop

    npm run dev        # http://localhost:4321
    npx astro build    # must pass before publishing

## Deploy (Hostinger, account u750190153, order 1007890776)

The owner's normal network cannot reach Hostinger's file-upload server (srv1957-files.hstgr.io), so
deploys go through GitHub (private repo jumanasoro/heri-kenya-website; Hostinger has a read-only deploy key):

1. Commit, then `npm run publish:test` (or `publish:live`). This builds and force-pushes a single
   `site.zip` to branch `deploy-test` (or `deploy-live`). Needs network outside the sandbox.
2. Hostinger MCP `hosting_git_deploy-website-repository` with repository
   `git@github.com:jumanasoro/heri-kenya-website.git`, the branch, and `directory: "_release"`.
3. Hostinger MCP `hosting_websites_deploy-static-site-archive` with `archive_path: "_release/site.zip"`.
   This replaces the site's files and removes `_release/`, so step 2 clones fresh next time.
4. Verify with curl (page returns 200 and contains real page text).

Test site: https://lightyellow-tiger-876537.hostingersite.com (`deploy-test`, hidden from search engines).
heri-kenya.org is still the old WordPress site; switching it over is a separate, confirmed step.
