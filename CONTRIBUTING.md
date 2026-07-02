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

1. [`src/index.ts`](src/index.ts) imports `metadata.json` from the pinned `@carbon/pictograms` version in [`package.json`](package.json) `devDependencies`.
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

[`tests/index.test.ts`](tests/index.test.ts) calls `buildPictograms()`, checks the total pictogram count, and snapshots the sorted export names in [`tests/__snapshots__/index.test.ts.snap`](tests/__snapshots__/index.test.ts.snap).

When pictograms are added or removed, update the count:

```ts
expect(pictograms.length).toEqual(1563);
```

Run `bun test`. If the name list changed, read the snapshot diff before regenerating. Use `bun test --update-snapshots` on purpose. A snapshot diff is a behavior change.

### Template unit tests

[`tests/template.test.ts`](tests/template.test.ts) pins `template` and `templateSvg` for a few inputs: standard pictogram, empty content, complex content. Add a case when you change template logic instead of relying on the full pictogram snapshot.

### Type checks

[`tests/test-types.ts`](tests/test-types.ts) (`bun run test:types`) runs `bun link` at the repo root, then installs and runs `svelte-check` in each `tests/svelte@*` project. Those projects import from the barrel, import `carbon-pictograms-svelte/lib/<Pictogram>.svelte` directly, use `CarbonPictogramProps`, and check `ComponentProps` on Svelte 5 vs `satisfies CarbonPictogramProps` on Svelte 4.

Run `bun run prepack` first so `lib/` exists, then `bun run test:types`. CI runs both.

## Upgrading `@carbon/pictograms`

Most releases are just a dependency bump for new Carbon pictograms.

1. Bump `devDependencies["@carbon/pictograms"]` in `package.json`.
2. `bun install`
3. `bun run prepack`
4. Update the pictogram count in [`tests/index.test.ts`](tests/index.test.ts) if the total changed.
5. Review [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md), the snapshot, and any new files in `lib/` locally (`lib/` is not committed).
6. Commit with a conventional message (below).

### Before you push

CI runs this. Run it locally too:

```sh
bun install
bun run prepack      # build lib/, snapshot test, template tests
bun run test:types   # svelte-check against Svelte 4 and 5
```

All three must pass. If `prepack` fails on the pictogram count or the snapshot moved, fix the generator before updating snapshots.

### Open a pull request

Most PRs here are `@carbon/pictograms` bumps. A clean upgrade is a small diff. See [#118](https://github.com/carbon-design-system/carbon-pictograms-svelte/pull/118) (12.75.0 --> 12.77.0, net +14 pictograms).

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
| [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) | Regenerated list; header line updates the Carbon version and canonical pictogram count |
| [`tests/index.test.ts`](tests/index.test.ts) | `expect(pictograms.length)` matches the new total |
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

Compute net pictograms as new header count minus old (e.g. 1563 − 1549 = +14 in [#118](https://github.com/carbon-design-system/carbon-pictograms-svelte/pull/118)). If Carbon only changed existing SVGs and the count is unchanged, say so: `(no new pictograms)`.

**Changelog.** Contributors don't need to edit [`CHANGELOG.md`](CHANGELOG.md). Maintainers add the entry at release time.

**Review checklist.** Before requesting review, confirm locally:

1. `bun run prepack` passes (build, pictogram count, snapshot).
2. `bun run test:types` passes (Svelte 4 and 5).
3. The snapshot diff lists only the pictograms you expect from Carbon's release notes or metadata diff.
4. [`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) header version matches `package.json`.

## Docs site

[`docs/`](docs/) is a Vite + Svelte app that previews every pictogram. Separate `package.json` and lockfile:

```sh
cd docs
bun install
bun dev
```

`predev` and `prebuild` call `bun run --cwd .. build:docs-assets` to regenerate preview data. The site loads `BUILD_INFO_URL`, a content-hashed JSON file, for the pictogram grid and search. Pictogram-only dependency bumps usually don't need docs changes. Changes to `build-info` shape or preview behavior do.

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

[`release.yml`](.github/workflows/release.yml) publishes to NPM with [provenance](https://docs.npmjs.com/generating-provenance-statements) when a `v*` tag is pushed. It installs, runs `bun run prepack`, prunes with `bunx culls --preserve=svelte`, and runs `npm publish --provenance --access public`.

Bump the version in `package.json`, update [`CHANGELOG.md`](CHANGELOG.md), then:

```sh
bun install
bun run prepack
git commit -am "v13.18.0"
git tag v13.18.0
git push origin v13.18.0
```

If the workflow succeeds, the new version is on NPM.

### Post-release checklist

After the package is on NPM:

1. Create a [new release](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/new) on GitHub. Click "Generate release notes", then drop CI-only noise.
2. Mark it as the latest release.
