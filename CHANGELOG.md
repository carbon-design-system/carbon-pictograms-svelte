# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [12.8.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.8.0) - 2023-09-02

**Features**

- upgrade `@carbon/pictograms` to v12.22.0 (net +91 pictograms)

## [12.7.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.7.0) - 2023-07-27

**Features**

- upgrade `@carbon/pictograms` to v12.20.0 (net +41 pictograms)

## [12.6.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.6.0) - 2023-07-19

**Features**

- support Svelte version 4; minimum Svelte version required for TypeScript users is now 3.55

## [12.5.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.5.0) - 2023-07-08

**Features**

- upgrade `@carbon/pictograms` to v12.19.1 (net +17 pictograms)

**Fixes**

- update type definitions to allow `data-*` attributes

## [12.4.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.4.0) - 2023-04-04

**Features**

- upgrade `@carbon/pictograms` to v12.14.0 (net +4 pictograms)

## [12.3.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.3.0) - 2023-03-11

**Features**

- upgrade `@carbon/pictograms` to v12.13.0 (net +1 pictogram)

## [12.2.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.2.0) - 2022-09-02

**Features**

- upgrade `@carbon/pictograms` to v12.5.0 (net +60 pictograms)

## [12.1.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.1.0) - 2022-08-19

**Features**

- upgrade `@carbon/pictograms` to v12.4.0 (net +98 pictograms)

## [12.0.3](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.0.3) - 2022-04-30

**Fixes**

- TypeScript definitions should extend `SVGSVGElement` attributes

## [12.0.2](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.0.2) - 2021-12-31

**Fixes**

- emit TypeScript definitions to `lib` folder

## [12.0.1](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.0.1) - 2021-12-15

**Fixes**

- set `type="module"` in package.json

## [12.0.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v12.0.0) - 2021-10-08

**Breaking Changes**

- use the `.svelte.d.ts` extension for TypeScript definitions to enable direct
  imports

## [11.5.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.5.0) - 2021-09-05

**Features**

- upgrade `@carbon/pictograms` to v11.17.0 (net +34 pictograms)

## [11.4.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.4.0) - 2021-07-22

**Features**

- add JSDoc/TypeScript descriptions for `tabindex`, `fill` props

## [11.3.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.3.0) - 2021-04-30

**Features**

- upgrade `@carbon/pictograms` to v11.9.0 (net +29 pictograms)

## [11.2.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.2.0) - 2021-02-04

**Features**

- upgrade `@carbon/pictograms` to v11.3.0 (net +25 pictograms)

## [11.1.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.1.0) - 2021-01-25

**Features**

- upgrade `@carbon/pictograms` to v11.2.0 (net +50 pictograms)

## [11.0.1](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.0.1) - 2021-01-16

**Fixes**

- correctly list Pictogram module names in `PICTOGRAM_INDEX.md`

## [11.0.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v11.0.0) - 2021-01-16

**Breaking Changes**

- upgrade `@carbon/pictograms` to v11.1.0 (net +56 pictograms)
- remove forwarded events, slots
- reduce exported props to `tabindex` and `fill`
- default `svg` width/height updated to `"64"` from `"48"`
- default `fill` updated to `"currentColor"` from `"#161616"`
- TypeScript definitions use `SvelteComponentTyped`; requires Svelte
  version >=v3.31
- direct import method has changed from
  "carbon-pictograms-svelte/lib/Pictogram/Pictogram.svelte" to
  "carbon-pictograms-svelte/lib/Pictogram.svelte"

## [10.18.1](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.18.1) - 2020-11-16

**Fixes**

- refactor TypeScript definitions to be more concise/performant

## [10.18.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.18.0) - 2020-09-04

**Features**

- bump `@carbon/pictograms` build dependency to 10.18.0 (no new pictograms)
- use new Svelte component events interface in TypeScript definitions

## [10.17.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.17.0) - 2020-08-21

**Features**

- bump `@carbon/pictograms` build dependency to 10.17.0 (net +9 pictograms)
- rename the `Pictogram` TypeScript class to `CarbonPictogram`

## [10.16.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.16.0) - 2020-08-09

**Features**

- bump `@carbon/pictograms` build dependency to 10.16.0 (net +2 pictograms)

**Fixes**

- stub `on:eventname` directive in TypeScript definitions

## [10.15.2](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.15.2) - 2020-07-26

**Fixes**

- use ambient module declarations in types (e.g.
  `"carbon-pictograms/lib/Airplane"`) to encourage direct imports

## [10.15.1](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.15.1) - 2020-07-24

**Features**

- add TypeScript type definitions

## [10.15.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.15.0) - 2020-07-20

**Features**

- bump `@carbon/pictograms` build dependency to 10.15.0 (net +24 pictograms)

## [10.14.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.14.0) - 2020-07-01

**Features**

- bump `@carbon/pictograms` build dependency to 10.14.0 (net +74 pictograms)

## [10.13.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.13.0) - 2020-06-19

**Features**

- bump `@carbon/pictograms` build dependency to 10.13.0

## [10.12.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.12.0) - 2020-06-09

**Features**

- bump `@carbon/pictograms` build dependency to 10.12.0 (net +18 pictograms)

## [10.11.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.11.0) - 2020-05-28

**Features**

- bump `@carbon/pictograms` build dependency to 10.11.0
- add `fill`, `stroke` props

## [10.10.3](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.10.3) - 2020-05-13

**Features**

- remove `peerDependencies`
- publish `PICTOGRAM_INDEX.md`

## [10.10.2](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.10.2) - 2020-05-02

**Fixes**

- include svelte@3.20.x as a peer dependency

## [10.10.1](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.10.1) - 2020-04-21

**Fixes**

- remove `engines` field from `package.json` to remove installation warning

## [10.10.0](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.10.0) - 2020-04-17

**Features**

- bump `@carbon/pictograms` build dependency to 10.10.0
- use recursive `fs.rmdirSync` (requires Node.js version >=12 when running
  locally)

## [10.9.2](https://github.com/carbon-design-system/carbon-pictograms-svelte/releases/tag/v10.9.2) - 2020-04-06

- initial release using `@carbon/pictograms@10.9.2`,
  `@carbon/icon-helpers@10.6.0`
