# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [11.0.1](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v11.0.1) - 2021-01-16

- correctly list Pictogram module names in `PICTOGRAM_INDEX.md`

## [11.0.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v11.0.0) - 2021-01-16

**Breaking Changes**

- upgrade `@carbon/pictograms` to v11.1.0 (net +56 pictograms)
- remove forwarded events, slots
- reduce exported props to `tabindex` and `fill`
- default `svg` width/height updated to `"64"` from `"48"`
- default `fill` updated to `"currentColor"` from `"#161616"`
- TypeScript definitions use `SvelteComponentTyped`; requires Svelte version >=v3.31
- direct import method has changed from "carbon-pictograms-svelte/lib/Pictogram/Pictogram.svelte" to "carbon-pictograms-svelte/lib/Pictogram.svelte"

## [10.18.1](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.18.1) - 2020-11-16

- Refactor TypeScript definitions to be more concise/performant
- Bump development dependencies

## [10.18.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.18.0) - 2020-09-04

- Use new Svelte component events interface in TypeScript definitions
- Bump `@carbon/pictograms` build dependency to 10.18.0 (no new pictograms)
- Bump `ts-node-dev`, `typescript`, `@types/node`
- Bump dependencies in `examples/`

## [10.17.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.17.0) - 2020-08-21

- In the TypeScript definitions, rename the `Pictogram` class to `CarbonPictogram`
- Bump `@carbon/pictograms` build dependency to 10.17.0 (9 new pictograms)

## [10.16.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.16.0) - 2020-08-09

- Fix TypeScript definitions to stub `on:eventname` directive
- Bump `@carbon/pictograms` build dependency to 10.16.0 (2 new pictograms)

## [10.15.2](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.15.2) - 2020-07-26

- Use ambient module declarations in types (e.g. `"carbon-pictograms/lib/Airplane"`) to encourage direct imports

## [10.15.1](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.15.1) - 2020-07-24

- Add TypeScript type definitions

## [10.15.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.15.0) - 2020-07-20

- Bump `@carbon/pictograms` build dependency to 10.15.0 (24 new pictograms)

## [10.14.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.14.0) - 2020-07-01

- Bump `@carbon/pictograms` build dependency to 10.14.0 (74 new pictograms)

## [10.13.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.13.0) - 2020-06-19

- Bump `@carbon/pictograms` build dependency to 10.13.0

## [10.12.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.12.0) - 2020-06-09

- Bump `@carbon/pictograms` build dependency to 10.12.0 (18 new pictograms)

## [10.11.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.11.0) - 2020-05-28

- Bump `@carbon/pictograms` build dependency to 10.11.0

- Add `fill`, `stroke` props

## [10.10.3](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.10.3) - 2020-05-13

- Remove `peerDependencies`

- Publish `PICTOGRAM_INDEX.md`

## [10.10.2](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.10.2) - 2020-05-02

- Bump `@carbon/pictograms` build dependency to 10.10.2

- Refactor to use fs async I/O methods with `util.promisify`

- Replace `tape` with Node.js `assert`

- Include svelte@3.20.x as a peer dependency

## [10.10.1](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.10.1) - 2020-04-21

- Remove `engines` field from package.json because node version >=12 is only required for development, not consumption

## [10.10.0](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.10.0) - 2020-04-17

- Bump `@carbon/pictograms` build dependency to 10.10.0

- Use recursive `fs.rmdirSync` (requires Node.js version >=12)

- Run build script in Travis CI

## [10.9.2](https://github.com/IBM/carbon-pictograms-svelte/releases/tag/v10.9.2) - 2020-04-06

- Initial release (using `@carbon/pictograms@10.9.2`, `@carbon/icon-helpers@10.6.0`)
