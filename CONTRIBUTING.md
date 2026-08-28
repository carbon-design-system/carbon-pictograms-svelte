# Contributing

## Getting Started

Fork the repo and clone your fork:

```bash
git clone <YOUR_FORK>
cd carbon-pictograms-svelte
```

Set the original repo as the upstream:

```bash
git remote add upstream git@github.com:carbon-design-system/carbon-pictograms-svelte.git
# verify that the upstream is added
git remote -v
```

## Prerequisites

This repo uses `bun`. See the docs for [installation instructions](https://bun.sh/docs/installation).

## Workflow

### Building

Icons are generated using `bun` as a test runner.

Run `bun prepack` to build the library. Icons should be emitted to the `lib` folder and tests should pass.

[`src/index.ts`](src/index.ts) imports `metadata.json` from the pinned `@carbon/pictograms` version in [`package.json`](package.json) `devDependencies`. It merges deprecated pictograms from older pinned packages and applies rename aliases (see [Backwards compatibility](#backwards-compatibility)).

## Backwards compatibility

`@carbon/pictograms` sometimes removes or renames pictograms between minor versions. We don't remove pictograms in minor releases of this library. [`src/index.ts`](src/index.ts) enforces that with two tables.

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

The build then exports the old name from the barrel, writes an alias `.svelte` that forwards `title` and rest props to the new component (or re-exports directly when old and new names collide on case-insensitive filesystems; see `collidesOnCaseInsensitiveFs`).

[`PICTOGRAM_INDEX.md`](PICTOGRAM_INDEX.md) lists canonical names only. The inventory snapshot includes alias names. Don't copy aliases into the index.

Don't remove a `DEPRECATED_PICTOGRAMS` or `RENAMED_PICTOGRAMS` entry in a minor release. That's a breaking change. Save it for a major bump and note it in the changelog.

## Submitting a Pull Request

### Sync Your Fork

Before submitting a pull request, make sure your fork is up to date with the latest upstream changes.

```bash
git fetch upstream
git checkout master
git merge upstream/master
```

### Submit a PR

After you've pushed your changes to remote, submit your PR. Make sure you are comparing `<YOUR_USER_ID>/feature` to `origin/master`.

## Maintainer guide

The following items only apply to project maintainers.

### Release

This library is published to NPM with [provenance](https://docs.npmjs.com/generating-provenance-statements) via a [GitHub workflow](https://github.com/carbon-design-system/carbon-pictograms-svelte/blob/master/.github/workflows/release.yml).

The workflow is automatically triggered when pushing a tag that begins with `v` (e.g., `v12.3.0`).

However, maintainers must perform a few things in preparation for a release.

```sh
# 1. Install and re-build the library.
bun install; bun prepack;

# 2. Commit the changes using the new version as the commit message.
git commit -am "v12.3.0"

# 3. Create a tag.
git tag v12.3.0

# 4. Push the tag to the remote.
# This will trigger the `release.yml` workflow to publish a new package to NPM (with provenance).
git push origin v12.3.0
```

If all goes as expected, the [`release.yml` workflow](https://github.com/carbon-design-system/carbon-pictograms-svelte/actions/workflows/release.yml) should trigger a new run and publish the new version to NPM.

### Post-release checklist

After confirming that the new release is published to NPM, perform the following:

1. Create a [new release](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/new) on GitHub. Click "Generate release notes" to automatically list changes by commit with the relevant Pull Request and author metadata. You may manually remove notes that are not relevant to the release (e.g., CI changes).

2. Publish the release as the latest release.
