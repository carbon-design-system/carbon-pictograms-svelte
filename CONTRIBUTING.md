# Contributing

`carbon-pictograms-svelte` turns [Carbon Design System](https://www.carbondesignsystem.com/guidelines/pictograms/library) SVG pictograms into Svelte components. The build reads `@carbon/pictograms` metadata, writes one `.svelte` file per pictogram to `lib/`, and emits a barrel export plus TypeScript definitions.

[README.md](README.md) documents import paths, props, and TypeScript usage. This file documents how the repo is built and how to change it.

Not sure what to build? [File an issue](https://github.com/carbon-design-system/carbon-pictograms-svelte/issues) before opening a PR.

## Prerequisites

- [Bun](https://bun.sh/docs/installation). The pinned version is in [`.bun-version`](.bun-version). CI reads it.

Bun handles packages, tests, and builds. You don't need a separate Node toolchain. Run scripts with `bun <script>` and one-off binaries with `bunx <bin>`.

## Project set-up

Fork the repo and clone your fork:

```sh
git clone <YOUR_FORK>
cd carbon-pictograms-svelte
```

Set the original repository as upstream:

```sh
git remote add upstream git@github.com:carbon-design-system/carbon-pictograms-svelte.git
# verify that the upstream is added
git remote -v
```

Install dependencies:

```sh
bun install
```

## Scripts

| Script | What it does |
| --- | --- |
| `bun test` | Run all tests. [`prepack`](package.json) calls this, so it's also the full build. |
| `bun run prepack` | Same as `bun test`. Builds `lib/`, regenerates [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) and docs assets, runs snapshot and unit tests. |
| `bun run build:docs-assets` | Run `buildPictograms()` only, no tests. Used by the docs site's `predev` / `prebuild` hooks. |
| `bun run test:types` | Link the local package and run `svelte-check` in [`tests/svelte@4/`](tests/svelte@4/) and [`tests/svelte@5/`](tests/svelte@5/). |

When iterating locally, scope test runs to what you changed. The full suite regenerates thousands of pictogram files and takes a while.

## How the build works

1. [`src/index.ts`](src/index.ts) imports `metadata.json` from the pinned `@carbon/pictograms` version in [`package.json`](package.json) `devDependencies`. It merges deprecated pictograms from older pinned packages and applies rename aliases (see [Backwards compatibility](#backwards-compatibility)).
2. Each pictogram in metadata maps to one Svelte component per `moduleName`.
3. [`src/template.ts`](src/template.ts) turns a `PictogramOutput` descriptor into a Svelte component string: props, accessibility attributes, SVG markup. [`templateSvg`](src/template.ts) produces the compact inline SVG for the docs preview grid.
4. `buildPictograms()` writes:
   - `lib/<PictogramName>.svelte`, one component per pictogram
   - `lib/<PictogramName>.svelte.d.ts`, per-pictogram type stub re-exporting from the barrel
   - `lib/index.js` and `lib/index.d.ts`, barrel export and `CarbonPictogramProps` type
   - [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md), committed pictogram list
   - `docs/public/build-info.<hash>.json` and [`docs/src/generated/build-info-url.ts`](docs/src/generated/build-info-url.ts), hashed preview data for the docs site (gitignored, regenerated each build)

[`buildPictograms()`](src/index.ts) is the only entry point. Tests call it directly. `prepack` runs those tests. `build:docs-assets` calls it for the docs app. [`src/global.d.ts`](src/global.d.ts) holds local type declarations for `@carbon/pictograms` metadata JSON imports.

`lib/` is gitignored. Only the generator source, snapshots, and [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) get committed.

## Backwards compatibility

`@carbon/pictograms` sometimes removes or renames pictograms between minor versions. We don't remove pictograms in minor releases of this library. [`src/index.ts`](src/index.ts) enforces that with two tables.

### Removal or rename?

Carbon doesn't always call out renames. A rename looks like a removal plus an unrelated addition in the [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) diff (e.g. `ExpandHorz` gone, `ExpandHorizontal` new in 12.83).

Unlike icons, pictogram renames often come with a redraw, so identical SVG content isn't a reliable test. `ExpandHorz` and `ExpandHorizontal` have different paths. Compare the metadata instead: a rename keeps the `category` and most of the `aliases` search terms, and the `friendlyName` usually just expands an abbreviation. Pin the previous version temporarily as an alias and run:

```sh
bun add -d "@carbon/pictograms-prev@npm:@carbon/pictograms@12.79.0"
bun -e '
const o = (await import("@carbon/pictograms-prev/metadata.json", { with: { type: "json" } })).default;
const n = (await import("@carbon/pictograms/metadata.json", { with: { type: "json" } })).default;
const find = (m, name) => m.icons.find((i) => i.output[0].moduleName === name);
const show = (m, name) => { const p = find(m, name); console.log(name, p.category, p.friendlyName, p.aliases); };
show(o, "ExpandHorz");
show(n, "ExpandHorizontal");
'
bun remove @carbon/pictograms-prev
```

Then eyeball both in the docs preview. Same concept: it's a rename, use [`RENAMED_PICTOGRAMS`](#renamed-pictograms-upstream-rename). The old name then renders the new drawing. Nothing equivalent: it's a removal, use [`DEPRECATED_PICTOGRAMS`](#deprecated-pictograms-upstream-removal), which keeps the old drawing.

### Deprecated pictograms (upstream removal)

When Carbon drops a pictogram, add it to `DEPRECATED_PICTOGRAMS` with the `@carbon/pictograms` version that still has it:

```ts
const DEPRECATED_PICTOGRAMS: Record<string, MetadataSource> = {
  SomeRemovedPictogram: metadata_12_79,
  // ...
};
```

Pin the source version as a separate devDependency alias (e.g. `"@carbon/pictograms-12.79": "npm:@carbon/pictograms@12.79.0"`), import its `metadata.json`, and add a matching `declare module` in [`src/global.d.ts`](src/global.d.ts) if TypeScript complains. The build pulls matching pictograms from the older metadata so existing imports keep working. The merge key is `output[0].moduleName`.

The table starts empty. The first deletion is when you add a pin.

### Renamed pictograms (upstream rename)

When Carbon renames a pictogram, map the old export name to the new one in `RENAMED_PICTOGRAMS`:

```ts
const RENAMED_PICTOGRAMS = {
  // From 12.83.x
  ExpandHorz: "ExpandHorizontal",
  ExpandVert: "ExpandVertical",
} as const;
```

The build then exports the old name from the barrel, writes an alias `.svelte` that forwards `title` and rest props to the new component (or re-exports directly when old and new names collide on case-insensitive filesystems; see `collidesOnCaseInsensitiveFs`), and puts `renamedPictograms` in the docs `build-info` payload.

[`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) lists canonical names only. The inventory snapshot includes alias names. Don't copy aliases into the index.

Don't remove a `DEPRECATED_PICTOGRAMS` or `RENAMED_PICTOGRAMS` entry in a minor release. That's a breaking change. Save it for a major bump and note it in the changelog.

## Svelte version compatibility

Svelte 4 and 5 are supported in `13.x`. Type-check coverage lives in `tests/svelte@4/` and `tests/svelte@5/`.

For Svelte 3, pin [`carbon-pictograms-svelte@12.12.0`](https://github.com/carbon-design-system/carbon-pictograms-svelte/tree/v12.12.0). Template changes shouldn't break Svelte 4 barrel imports or `CarbonPictogramProps`.

## Conventions

No repo-wide linter. Match what's already in `src/` and `tests/`.

- [`tsconfig.json`](tsconfig.json) sets `strict: true`. Keep `src/` and `tests/` type-clean.
- Use `node:` import specifiers: `import { createHash } from "node:crypto"`, not `"crypto"`.
- ESM only. [`package.json`](package.json) has `"type": "module"`. Import JSON with `import … with { type: "json" }`.
- Batch file writes with `Promise.all` in `buildPictograms`, not sequential awaits.
- Don't hand-edit generated output. Never commit `lib/`, `docs/public/build-info*.json`, or `docs/src/generated/`. Change the generator and re-run `bun test`.
- A change to [`src/template.ts`](src/template.ts) changes every emitted pictogram. Treat it like a public API change.

## Testing

Tests use Bun. They live in `tests/`.

```sh
bun test                         # everything, includes full rebuild
bun test template                # filter by file-path substring
bun test tests/template.test.ts  # a single file
```

### Pictogram inventory snapshot

[`tests/index.test.ts`](tests/index.test.ts) calls `buildPictograms()`, checks the total pictogram count, and snapshots the export names in [`tests/__snapshots__/index.test.ts.snap`](tests/__snapshots__/index.test.ts.snap). The count includes rename aliases. [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) uses the canonical Carbon count (aliases omitted).

When pictograms are added or removed (including `RENAMED_PICTOGRAMS` aliases), update the count:

```ts
expect(pictograms.length).toEqual(1578);
```

Run `bun test`. If the name list changed, read the snapshot diff before regenerating. Use `bun test --update-snapshots` on purpose. A snapshot diff is a behavior change.

### Template unit tests

[`tests/template.test.ts`](tests/template.test.ts) pins `template` and `templateSvg` for a few inputs: standard pictogram, empty content, complex content. Add a case when you change template logic instead of relying on the full pictogram snapshot.

### Type checks

[`tests/test-types.ts`](tests/test-types.ts) (`bun run test:types`) runs `bun link` at the repo root, then installs and runs `svelte-check` in each `tests/svelte@*` project. Those projects import from the barrel, import `carbon-pictograms-svelte/lib/<Pictogram>.svelte` directly, use `CarbonPictogramProps`, and check `ComponentProps` on Svelte 5 vs `satisfies CarbonPictogramProps` on Svelte 4.

Run `bun run prepack` first so `lib/` exists, then `bun run test:types`. CI runs both.

## Upgrading `@carbon/pictograms`

Most releases are just a dependency bump for new Carbon pictograms.

Carbon's monorepo release tags (e.g. `v11.118.0`) don't match the `@carbon/pictograms` version, and the per-package release notes don't reliably say whether pictograms changed. Go by npm and the build output instead: `npm view @carbon/pictograms version` gives the latest, and the [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) diff shows what actually changed. If the bump adds no pictograms (the diff only touches the header version), there's nothing worth shipping; discard it and wait for the next release.

1. `bun add -d -E @carbon/pictograms@<version>` (exact pin, updates `package.json` and `bun.lock`).
2. `bun test`. It fails on the pictogram count if anything was added or removed. That's expected.
3. Read the [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) diff. Apart from the header, every `-` line is an upstream removal or rename.
4. Handle removals and renames before going further ([Backwards compatibility](#backwards-compatibility)).
5. Update the pictogram count in [`tests/index.test.ts`](tests/index.test.ts) if the total changed. The assertion includes rename aliases.
6. `bun run prepack` (`bun test --update-snapshots` once the snapshot diff looks right).
7. Review [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md), the snapshot, and any new alias files in `lib/` locally (`lib/` is not committed).
8. Commit with a conventional message (below).

### Before you push

CI runs this. Run it locally too:

```sh
bun install
bun run prepack      # build lib/, snapshot test, template tests
bun run test:types   # svelte-check against Svelte 4 and 5
```

All three must pass. If `prepack` fails on the pictogram count, the snapshot moved, or a rename alias target is missing, fix the generator or compatibility tables before updating snapshots.

### Open a pull request

Most PRs here are `@carbon/pictograms` bumps. A clean upgrade (no upstream removals or renames) is a small diff. See [#118](https://github.com/carbon-design-system/carbon-pictograms-svelte/pull/118) (12.75.0 --> 12.77.0, net +14 pictograms).

**Branch.** Name it after the target version, e.g. `upgrade-12.77`.

**Commands.**

```sh
git fetch upstream
git checkout master
git merge upstream/master
git checkout -b upgrade-12.77

# edit package.json: bump devDependencies["@carbon/pictograms"]
bun install
bun run prepack
# if the count assertion fails, update tests/index.test.ts, then re-run
bun run test:types

git add package.json bun.lock PICTOGRAM_INDEX.md tests/
git commit -m "feat(deps-dev): upgrade \`@carbon/pictograms\` 12.75.0 --> 12.77.0"
git push -u origin upgrade-12.77
```

**Files that should change** in a clean upgrade:

| File | What changed |
| --- | --- |
| [`package.json`](package.json) | `@carbon/pictograms` version in `devDependencies` |
| [`bun.lock`](bun.lock) | Lockfile from `bun install` |
| [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) | Regenerated list; header line updates the Carbon version and canonical pictogram count (aliases omitted) |
| [`tests/index.test.ts`](tests/index.test.ts) | `expect(pictograms.length)` matches the new total (includes rename aliases) |
| [`tests/__snapshots__/index.test.ts.snap`](tests/__snapshots__/index.test.ts.snap) | New or removed export names |

**Files that should not be committed:** `lib/` (gitignored build output), `docs/public/build-info*.json`, `docs/src/generated/`. `bun run prepack` writes them locally; CI and the docs deploy hook regenerate them.

**Title.** Match the commit:

```
feat(deps-dev): upgrade `@carbon/pictograms` 12.75.0 --> 12.77.0
```

**Body.** One bullet under **Features** is enough for a clean bump. Use the canonical count from the [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) header for the net delta:

```markdown
**Features**

- upgrade `@carbon/pictograms` to v12.77.0 (net +14 pictograms)
```

Compute net pictograms as new header count minus old (e.g. 1563 − 1549 = +14 in [#118](https://github.com/carbon-design-system/carbon-pictograms-svelte/pull/118)). Use the singular for one: `(net +1 pictogram)`. If Carbon only changed existing SVGs and the count is unchanged, say so: `(no new pictograms)`.

Rename aliases don't count. The header lists canonical names only, so a rename is a wash there, even though the test count and snapshot go up by one alias each. 12.83 is `net +3 pictograms` (header 1572 → 1575), not +5 (test count 1572 → 1577 after the `ExpandHorz` / `ExpandVert` aliases).

**Renames in the changelog.** List renames as their own bullet so users know the old name is now an alias:

```markdown
**Features**

- upgrade `@carbon/pictograms` to v12.83.0 (net +3 pictograms)
- rename `ExpandHorz` -> `ExpandHorizontal`, `ExpandVert` -> `ExpandVertical` (old names kept as aliases)
```

**When it's not a clean upgrade.** If Carbon removed or renamed pictograms, don't ship only the version bump. Update `DEPRECATED_PICTOGRAMS` or `RENAMED_PICTOGRAMS` in [`src/index.ts`](src/index.ts) first ([Backwards compatibility](#backwards-compatibility)), then run the workflow above. Renames may also touch [`src/global.d.ts`](src/global.d.ts) or docs preview code. Those changes can live in the same PR as the bump or in a follow-up before the npm release (the 12.83 `ExpandHorz` / `ExpandVert` aliases are the first `RENAMED_PICTOGRAMS` entries).

**Changelog.** Contributors don't need to edit [`CHANGELOG.md`](CHANGELOG.md). Maintainers add the entry at release time.

**Review checklist.** Before requesting review, confirm locally:

1. `bun run prepack` passes (build, pictogram count, snapshot).
2. `bun run test:types` passes (Svelte 4 and 5).
3. The snapshot diff has only `+` lines. A `-` line means an upstream removal or rename slipped through.
4. [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) header version matches `package.json`.

## Docs site

[`docs/`](docs/) is a Vite + Svelte app that previews every pictogram. Separate `package.json` and lockfile:

```sh
cd docs
bun install
bun dev
```

`predev` and `prebuild` call `bun run --cwd .. build:docs-assets` to regenerate preview data. The site loads `BUILD_INFO_URL`, a content-hashed JSON file, for the pictogram grid, search, and rename aliases. Pictogram-only dependency bumps usually don't need docs changes. Changes to `build-info` shape or preview behavior do.

## Continuous integration

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every PR and on pushes to `master`:

1. `bun install`
2. `bun run prepack`
3. `bun run test:types`

Pushes to `master` also hit a Render deploy hook for the [preview site](https://carbon-pictograms-svelte.onrender.com).

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

Common types: `fix`, `feat`, `docs`, `chore`, `test`, `ci`, `refactor`. Scope is the area touched: `deps-dev`, `docs`, `types`, `template`, or omit for repo-wide changes. Append `!` after the scope for breaking changes. One line, imperative mood. Put detail in the body; reference issues with `Fixes #N`.

Pictogram upgrades:

```
feat(deps-dev): upgrade `@carbon/pictograms` 12.75.0 --> 12.77.0
```

Releases (maintainers):

```
v13.18.0
```

From the log:

```
docs: hash build-info.json and remove from source control
ci: pin action versions
chore(deps-dev): upgrade to TypeScript 6
```

## Submit a pull request

For `@carbon/pictograms` upgrades, follow [Open a pull request](#open-a-pull-request) above. That's the path you'll use most of the time.

For other changes, sync your fork, branch from `master`, and open a PR against `origin/master`:

```sh
git fetch upstream
git checkout master
git merge upstream/master
git checkout -b my-change
```

Keep PRs focused. Match the [commit message](#commit-messages) style.

## Maintainer guide

Maintainers only from here.

### Release

[`release.yml`](.github/workflows/release.yml) publishes to NPM with [provenance](https://docs.npmjs.com/generating-provenance-statements) when a `v*` tag is pushed. It installs, runs `bun run prepack`, prunes with `bunx culls --preserve=svelte`, and runs `npm publish`.

Two release lines are maintained:

| Branch | Version | npm dist-tag | GitHub release |
| :--- | :--- | :--- | :--- |
| `master` | `13.x` | `latest` | Marked latest |
| `v12` | `12.x` | `stable-12` | Not latest |

Each branch carries its own `release.yml`. The one on `v12` publishes with `--tag stable-12`, so a `v12.*` tag must point at a `v12` commit. Otherwise it'd publish under `latest`.

Every `@carbon/pictograms` upgrade ships on both lines as a minor bump, with the same changelog text. Release `v12` first and `master` second, so the 13.x GitHub release ends up as latest.

Commits and tags are GPG-signed (`git commit -S`, `git tag -s`). Release commits are pushed straight to the branch; no PR.

Use a detached HEAD (`git switch --detach origin/<branch>`) when working from a worktree, so the release doesn't collide with `master` or `v12` being checked out elsewhere.

#### 1. Release `v12`

Cherry-pick every `master` commit that should ship since the last release, oldest first. Usually that's just the upgrade PR. When a rename fix landed separately, take both: 12.83 shipped as #122 (the bump) plus #123 (the aliases).

```sh
git fetch origin --tags
git switch --detach origin/v12
git cherry-pick <upgrade-sha> [<follow-up-sha> ...]   # no -x
bun install
bun test                                               # must pass before tagging
```

If `bun.lock` conflicts (devDependencies have drifted between branches), keep `v12`'s lockfile with `git checkout HEAD -- bun.lock`, run `bun install`, `git add bun.lock`, and `git cherry-pick --continue`.

Bump `version` in `package.json` and prepend to [`CHANGELOG.md`](CHANGELOG.md):

```markdown
## [12.33.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.33.0) - 2026-09-24

**Features**

- upgrade `@carbon/pictograms` to v12.85.0 (net +1 pictogram)
```

Then commit, tag, and push:

```sh
git commit -am "v12.33.0"
git tag -s v12.33.0 -m v12.33.0
git push origin HEAD:v12
git push origin v12.33.0
```

Create the GitHub release, not marked latest. Leave the title empty (GitHub shows the tag). The body repeats the changelog entry, with the pictogram count linking to the `PICTOGRAM_INDEX.md` diff of the cherry-picked upgrade commit (`89088ec…` is the SHA-256 of `PICTOGRAM_INDEX.md`, GitHub's per-file diff anchor):

```sh
gh release create v12.33.0 --latest=false --title "" --notes '**Features**

- upgrade `@carbon/pictograms` to v12.85.0 (net [+1 pictogram](https://github.com/carbon-design-system/carbon-pictograms-svelte/commit/<v12-upgrade-sha>#diff-89088eceee17faca761d4a34d1c180367eb7386e5ae644aa884cd2dd58eeb3a9))'
```

#### 2. Release `master`

```sh
git switch --detach origin/master
# bump package.json version, prepend the CHANGELOG.md entry (same text, 13.x version)
git commit -am "v13.21.0"
git tag -s v13.21.0 -m v13.21.0
git push origin HEAD:master
git push origin v13.21.0

gh release create v13.21.0 --latest --title "" --notes '…'  # link to the master upgrade commit
```

#### 3. Verify

```sh
gh run list --workflow release.yml -L 2           # both publish runs succeed
npm view carbon-pictograms-svelte dist-tags       # latest: 13.x, stable-12: 12.x
gh release list -L 3                              # 13.x is Latest, 12.x isn't
```

npm can lag a minute or two behind a successful publish. If the workflow log shows `+ carbon-pictograms-svelte@<version>` but `npm view` 404s or still shows the old dist-tags, wait and re-check before assuming something broke.
