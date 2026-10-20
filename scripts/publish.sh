#!/usr/bin/env bash
# Build the site and push the finished files to a deploy branch on GitHub.
# Hostinger deploys that branch automatically.
#
#   bash scripts/publish.sh test   -> branch deploy-test (hidden from search engines)
#   bash scripts/publish.sh live   -> branch deploy-live (heri-kenya.org)
set -euo pipefail

target="${1:-test}"
case "$target" in
  test) branch=deploy-test; noindex=true ;;
  live) branch=deploy-live; noindex=false ;;
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
PUBLIC_NOINDEX="$noindex" npx astro build >/dev/null

work="$(mktemp -d)"
trap 'git worktree remove --force "$work" >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

# Check out the deploy branch (or start it empty) in a separate folder.
git fetch origin "$branch" >/dev/null 2>&1 || true
if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
  git worktree add --force -B "$branch" "$work" "origin/$branch" >/dev/null
else
  git worktree add --force --orphan -b "$branch" "$work" >/dev/null
fi

# Replace its contents with the new build.
find "$work" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$work/"

cd "$work"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed since the last publish."
  exit 0
fi
git commit -q -m "Publish $target build of $source_commit"
git push -q origin "$branch"
echo "Published $source_commit to $branch."
