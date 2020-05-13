# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
