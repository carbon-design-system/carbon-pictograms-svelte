# carbon-pictograms-svelte

[![NPM][npm]][npm-url]
![GitHub](https://img.shields.io/github/license/ibm/carbon-pictograms-svelte?color=262626&style=for-the-badge)
![npm downloads to date](https://img.shields.io/npm/dt/carbon-pictograms-svelte?color=262626&style=for-the-badge)
[![carbon-pictograms-svelte Travis CI build status][build]][build-badge]

> [Carbon Design System](https://github.com/carbon-design-system) SVG pictograms as Svelte components.

This **zero dependency** library builds [Carbon Design System pictograms](https://www.carbondesignsystem.com/guidelines/pictograms/library) as Svelte components. Although best paired with [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte), this library can be consumed standalone.

Svelte version >=3.31 is required to use this library with TypeScript.

Try it in the [Svelte REPL](https://svelte.dev/repl/88b99674d0f24a3a8948d3760f8ba999?version=3.24.1).

## [Preview](https://ibm.github.io/carbon-pictograms-svelte/) · [Index](PICTOGRAM_INDEX.md)

## Install

`carbon-pictograms-svelte` can be installed using `yarn` or `npm`.

```sh
yarn add -D carbon-pictograms-svelte
# OR
npm i -D carbon-pictograms-svelte
```

### Folder Structure

The downloaded package contains two folders:

- `lib`: Pictograms as uncompiled Svelte source code
- `types`: TypeScript definitions

```bash
# node_modules/carbon-pictograms-svelte
│
└───📁 lib                  # Svelte source code
│   └──index.js
│   └──ActiveServer.svelte
│   └──...
└───📁 types                # TypeScript definitions
    └──index.d.ts
    └──ActiveServer.d.ts
    └──...
```

## Usage

### Base Import

```svelte
<script>
  import { Airplane } from "carbon-pictograms-svelte";
</script>

<Airplane />
```

### Direct Import (recommended)

Import pictograms directly for faster compiling.

```js
import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
```

**Note:** Even if using the base import method, an application bundler like Rollup or webpack should [treeshake](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) unused imports.

#### Import Path Pattern

```js
import Pictogram from "carbon-pictograms-svelte/lib/<ModuleName>.svelte";
```

Refer to [PICTOGRAM_INDEX.md](PICTOGRAM_INDEX.md) for a list of available pictograms.

## API

### Props

`$$restProps` are forwarded to the `svg` element.

| Name     | Value                             |
| :------- | :-------------------------------- |
| tabindex | `string` (default: `undefined`)   |
| fill     | `string` (default: `currentColor` |

## Recipes

### Custom Stroke Color

Customize the stroke color through the `stroke` proop or by defining a global class.

#### `stroke` prop

```svelte
<Airplane stroke="blue" />
```

#### Global class

```svelte
<style>
  :global(svg.custom-class) {
    stroke: blue;
  }
</style>

<Airplane class="custom-class" />
```

### Labelled

```html
<Airplane aria-label="Airplane" />
```

### Labelled with Focus

```html
<Airplane aria-label="Airplane" tabindex="0" />
```

### Labelled by

```html
<label id="transportation">Transportation</label>

<Airplane aria-labelledby="transportation" />
```

## Examples

- [examples/webpack](examples/webpack) (Try it on [CodeSandbox](https://codesandbox.io/s/github/IBM/carbon-pictograms-svelte/tree/master/examples/webpack))

- [examples/rollup](examples/rollup) (Try it on [CodeSandbox](https://codesandbox.io/s/github/IBM/carbon-pictograms-svelte/tree/master/examples/rollup))

- [examples/rollup-typescript](examples/rollup-typescript)

## [Changelog](CHANGELOG.md)

## [Contributing](CONTRIBUTING.md)

## License

[Apache-2.0](LICENSE)

[npm]: https://img.shields.io/npm/v/carbon-pictograms-svelte.svg?color=262626&style=for-the-badge
[npm-url]: https://npmjs.com/package/carbon-pictograms-svelte
[build]: https://img.shields.io/travis/com/ibm/carbon-pictograms-svelte?color=24a148&style=for-the-badge
[build-badge]: https://travis-ci.com/ibm/carbon-pictograms-svelte
