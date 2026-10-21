#!/usr/bin/env bash
# Build the site and push it, as a single site.zip, to a deploy branch on GitHub.
#
#   bash scripts/publish.sh test   -> branch deploy-test (hidden from search engines)
#   bash scripts/publish.sh live   -> branch deploy-live (heri-kenya.org)
#
# Hostinger then pulls the branch into the website's _release/ folder and unpacks
# _release/site.zip as the website. This avoids Hostinger's file-upload server,
# which some networks cannot reach.
set -euo pipefail

target="${1:-test}"
case "$target" in
  test) branch=deploy-test; noindex=true; site_url=https://lightyellow-tiger-876537.hostingersite.com ;;
  live) branch=deploy-live; noindex=false; site_url=https://heri-kenya.org ;;
  *) echo "Usage: bash scripts/publish.sh [test|live]" >&2; exit 1 ;;
esac

root="$(git rev-parse --show-toplevel)"
cd "$root"

if [ -n "$(git status --porcelain)" ]; then
  echo "Commit or discard your changes first, so the published site matches a saved version." >&2
  exit 1
fi
source_commit="$(git rev-parse --short HEAD)"

echo "Building ($target)..."
rm -rf dist
SITE_URL="$site_url" PUBLIC_NOINDEX="$noindex" npx astro build >/dev/null

work="$(mktemp -d)"
trap 'git worktree remove --force "$work" >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

# Each publish is a fresh single-commit branch, so old zips don't pile up on GitHub.
git worktree add --force --orphan -b "$branch-tmp" "$work" >/dev/null
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$(cygpath -w "$root/scripts/zip-dist.ps1")" \
  -Out "$(cygpath -w "$work/site.zip")"

cd "$work"
git add site.zip
git commit -q -m "Publish $target build of $source_commit"
git push -q --force origin "HEAD:$branch"
cd "$root"
git worktree remove --force "$work"
git branch -q -D "$branch-tmp"
echo "Published $source_commit to $branch ($(du -h dist | tail -1 | cut -f1) site)."
